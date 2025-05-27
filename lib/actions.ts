"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { z } from "zod"
import { prisma } from "@/lib/db"
import { UserRole, AppointmentType, AppointmentStatus } from "@prisma/client"

const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    role: z.nativeEnum(UserRole),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  doctorId: z.string().min(1, "Doctor selection is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  reason: z.string().min(1, "Reason for visit is required"),
  notes: z.string().optional(),
})

export async function signUp(formData: FormData) {
  try {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      role: formData.get("role") as UserRole,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    }

    const validatedData = signUpSchema.parse(data)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    })

    if (existingUser) {
      return { success: false, error: "User already exists with this email" }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        role: validatedData.role,
        password: hashedPassword,
      },
    })

    // Create session
    const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    })

    const cookieStore = await cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    console.error("Sign up error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function signIn(formData: FormData) {
  try {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }

    const validatedData = signInSchema.parse(data)

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
    })

    if (!user) {
      return { success: false, error: "Invalid email or password" }
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(validatedData.password, user.password)
    if (!isValidPassword) {
      return { success: false, error: "Invalid email or password" }
    }

    // Create session
    const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    })

    const cookieStore = await cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    console.error("Sign in error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function bookAppointment(formData: FormData) {
  try {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      doctorId: formData.get("doctorId") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      reason: formData.get("reason") as string,
      notes: formData.get("notes") as string,
    }

    const validatedData = bookingSchema.parse(data)

    // Find or create patient
    let patient = await prisma.user.findUnique({
      where: { email: validatedData.email },
    })

    if (!patient) {
      // Create new patient account
      const tempPassword = await bcrypt.hash("temp123", 12)
      patient = await prisma.user.create({
        data: {
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          role: UserRole.PATIENT,
          password: tempPassword,
        },
      })
    }

    // Get doctor details for fee
    const doctor = await prisma.user.findUnique({
      where: { id: validatedData.doctorId },
    })

    if (!doctor) {
      return { success: false, error: "Doctor not found" }
    }

    // Map reason to appointment type
    const appointmentTypeMap: Record<string, AppointmentType> = {
      consultation: AppointmentType.CONSULTATION,
      checkup: AppointmentType.CHECK_UP,
      followup: AppointmentType.FOLLOW_UP,
      emergency: AppointmentType.EMERGENCY,
      other: AppointmentType.CONSULTATION,
    }

    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        patientId: patient.id,
        doctorId: validatedData.doctorId,
        date: new Date(validatedData.date),
        time: validatedData.time,
        type: appointmentTypeMap[validatedData.reason] || AppointmentType.CONSULTATION,
        status: AppointmentStatus.PENDING,
        reason: validatedData.reason,
        notes: validatedData.notes || undefined,
        fee: doctor.consultationFee || 150,
      },
    })

    return { success: true, appointmentId: appointment.id }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    console.error("Booking error:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}

export async function signOut() {
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
  redirect("/")
}

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        avatar: true,
      },
    })

    return user
  } catch (error) {
    console.error("Get current user error:", error)
    return null
  }
}

export async function getDoctors() {
  try {
    const doctors = await prisma.user.findMany({
      where: { role: UserRole.DOCTOR },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        specialty: true,
        consultationFee: true,
        bio: true,
        experience: true,
      },
    })

    return doctors
  } catch (error) {
    console.error("Get doctors error:", error)
    return []
  }
}

export async function getAppointments(userId?: string, role?: UserRole) {
  try {
    const where = userId ? (role === UserRole.DOCTOR ? { doctorId: userId } : { patientId: userId }) : {}

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        patient: {
          select: {
            firstName: true,
            lastName: true,
            phone: true,
            email: true,
          },
        },
        doctor: {
          select: {
            firstName: true,
            lastName: true,
            specialty: true,
          },
        },
      },
      orderBy: {
        date: "asc",
      },
    })

    return appointments
  } catch (error) {
    console.error("Get appointments error:", error)
    return []
  }
}

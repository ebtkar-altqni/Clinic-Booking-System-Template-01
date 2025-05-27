import { PrismaClient, UserRole, AppointmentStatus, AppointmentType } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting database seed...")

  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 12)
  const admin = await prisma.user.upsert({
    where: { email: "admin@medicare.com" },
    update: {},
    create: {
      email: "admin@medicare.com",
      firstName: "Admin",
      lastName: "User",
      phone: "(555) 000-0000",
      role: UserRole.ADMIN,
      password: adminPassword,
    },
  })

  // Create doctors
  const doctorPassword = await bcrypt.hash("doctor123", 12)

  const drJohnson = await prisma.user.upsert({
    where: { email: "sarah.johnson@medicare.com" },
    update: {},
    create: {
      email: "sarah.johnson@medicare.com",
      firstName: "Sarah",
      lastName: "Johnson",
      phone: "(555) 123-4567",
      role: UserRole.DOCTOR,
      password: doctorPassword,
      specialty: "Family Medicine",
      licenseNumber: "MD123456",
      experience: 15,
      education: ["Harvard Medical School", "Johns Hopkins Residency"],
      certifications: ["Board Certified Family Medicine", "Advanced Cardiac Life Support"],
      bio: "Dr. Sarah Johnson is a board-certified family medicine physician with over 15 years of experience providing comprehensive healthcare to patients of all ages.",
      consultationFee: 150.0,
    },
  })

  const drChen = await prisma.user.upsert({
    where: { email: "michael.chen@medicare.com" },
    update: {},
    create: {
      email: "michael.chen@medicare.com",
      firstName: "Michael",
      lastName: "Chen",
      phone: "(555) 234-5678",
      role: UserRole.DOCTOR,
      password: doctorPassword,
      specialty: "Cardiology",
      licenseNumber: "MD234567",
      experience: 12,
      education: ["Stanford Medical School", "Mayo Clinic Fellowship"],
      certifications: ["Board Certified Cardiology", "Interventional Cardiology"],
      bio: "Dr. Michael Chen specializes in cardiovascular medicine with expertise in preventive cardiology and interventional procedures.",
      consultationFee: 200.0,
    },
  })

  const drRodriguez = await prisma.user.upsert({
    where: { email: "emily.rodriguez@medicare.com" },
    update: {},
    create: {
      email: "emily.rodriguez@medicare.com",
      firstName: "Emily",
      lastName: "Rodriguez",
      phone: "(555) 345-6789",
      role: UserRole.DOCTOR,
      password: doctorPassword,
      specialty: "Pediatrics",
      licenseNumber: "MD345678",
      experience: 10,
      education: ["UCLA Medical School", "Children's Hospital Los Angeles Residency"],
      certifications: ["Board Certified Pediatrics", "Pediatric Advanced Life Support"],
      bio: "Dr. Emily Rodriguez is a dedicated pediatrician committed to providing exceptional care for children from infancy through adolescence.",
      consultationFee: 175.0,
    },
  })

  // Create sample patients
  const patientPassword = await bcrypt.hash("patient123", 12)

  const patients = await Promise.all([
    prisma.user.upsert({
      where: { email: "john.smith@email.com" },
      update: {},
      create: {
        email: "john.smith@email.com",
        firstName: "John",
        lastName: "Smith",
        phone: "(555) 111-1111",
        role: UserRole.PATIENT,
        password: patientPassword,
        dateOfBirth: new Date("1985-06-15"),
        gender: "MALE",
        address: "123 Main Street",
        city: "Healthcare City",
        state: "HC",
        zipCode: "12345",
        bloodType: "O+",
        allergies: ["Penicillin"],
        emergencyContact: {
          name: "Jane Smith",
          relationship: "Spouse",
          phone: "(555) 111-2222",
          email: "jane.smith@email.com",
        },
      },
    }),
    prisma.user.upsert({
      where: { email: "sarah.wilson@email.com" },
      update: {},
      create: {
        email: "sarah.wilson@email.com",
        firstName: "Sarah",
        lastName: "Wilson",
        phone: "(555) 222-2222",
        role: UserRole.PATIENT,
        password: patientPassword,
        dateOfBirth: new Date("1990-03-22"),
        gender: "FEMALE",
        address: "456 Oak Avenue",
        city: "Healthcare City",
        state: "HC",
        zipCode: "12345",
        bloodType: "A+",
        allergies: [],
        emergencyContact: {
          name: "Mike Wilson",
          relationship: "Spouse",
          phone: "(555) 222-3333",
          email: "mike.wilson@email.com",
        },
      },
    }),
  ])

  // Create doctor availability
  const days = [1, 2, 3, 4, 5] // Monday to Friday

  for (const doctor of [drJohnson, drChen, drRodriguez]) {
    for (const day of days) {
      await prisma.availability.create({
        data: {
          doctorId: doctor.id,
          dayOfWeek: day,
          startTime: "09:00",
          endTime: "17:00",
          breakStartTime: "12:00",
          breakEndTime: "13:00",
          isActive: true,
        },
      })
    }
  }

  // Create sample appointments
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 7)

  await prisma.appointment.createMany({
    data: [
      {
        patientId: patients[0].id,
        doctorId: drJohnson.id,
        date: tomorrow,
        time: "09:00",
        type: AppointmentType.CONSULTATION,
        status: AppointmentStatus.CONFIRMED,
        reason: "Annual physical examination",
        fee: 150.0,
      },
      {
        patientId: patients[1].id,
        doctorId: drChen.id,
        date: tomorrow,
        time: "10:30",
        type: AppointmentType.FOLLOW_UP,
        status: AppointmentStatus.PENDING,
        reason: "Follow-up for blood pressure monitoring",
        fee: 200.0,
      },
      {
        patientId: patients[0].id,
        doctorId: drRodriguez.id,
        date: nextWeek,
        time: "14:00",
        type: AppointmentType.CHECK_UP,
        status: AppointmentStatus.CONFIRMED,
        reason: "Child wellness visit",
        fee: 175.0,
      },
    ],
  })

  // Create clinic settings
  await prisma.clinicSettings.upsert({
    where: { id: "clinic-settings" },
    update: {},
    create: {
      id: "clinic-settings",
      clinicName: "MediCare Clinic",
      address: "123 Medical Center Drive, Healthcare City, HC 12345",
      phone: "(555) 123-4567",
      email: "info@medicare.com",
      website: "https://medicare.com",
      businessHours: {
        monday: { open: "09:00", close: "17:00" },
        tuesday: { open: "09:00", close: "17:00" },
        wednesday: { open: "09:00", close: "17:00" },
        thursday: { open: "09:00", close: "17:00" },
        friday: { open: "09:00", close: "17:00" },
        saturday: { open: "09:00", close: "14:00" },
        sunday: { closed: true },
      },
      defaultAppointmentDuration: 30,
      advanceBookingDays: 30,
      cancellationHours: 24,
      acceptedPaymentMethods: ["CREDIT_CARD", "DEBIT_CARD", "INSURANCE"],
      emailNotifications: true,
      smsNotifications: false,
    },
  })

  console.log("✅ Database seed completed successfully!")
  console.log("👤 Admin user: admin@medicare.com / admin123")
  console.log("👨‍⚕️ Doctor users: [doctor]@medicare.com / doctor123")
  console.log("🏥 Patient users: [patient]@email.com / patient123")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e)
    await prisma.$disconnect()
    process.exit(1)
  })

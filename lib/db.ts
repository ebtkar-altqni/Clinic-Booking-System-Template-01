import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Database connection health check
export async function checkDatabaseConnection() {
  try {
    await prisma.$connect()
    return { status: "connected", message: "Database connection successful" }
  } catch (error) {
    console.error("Database connection failed:", error)
    return { status: "disconnected", message: "Database connection failed" }
  }
}

// Graceful shutdown
export async function disconnectDatabase() {
  await prisma.$disconnect()
}

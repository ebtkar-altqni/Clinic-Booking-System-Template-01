import { NextResponse } from "next/server"
import { checkDatabaseConnection } from "@/lib/db"

export async function GET() {
  try {
    const dbStatus = await checkDatabaseConnection()

    return NextResponse.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "clinic-booking-system",
      database: dbStatus,
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        error: "Health check failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

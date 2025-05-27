import type { Metadata } from "next"
import { BookingForm } from "@/components/booking/booking-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Book Appointment - MediCare Clinic",
  description: "Schedule your appointment with our experienced doctors. Easy online booking available.",
}

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-2xl font-bold">MediCare</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Appointment</h1>
            <p className="text-gray-600">Schedule a visit with one of our experienced doctors</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>
                Please fill out the form below to schedule your appointment. We'll confirm your booking within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

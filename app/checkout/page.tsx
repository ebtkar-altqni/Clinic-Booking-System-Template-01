import type { Metadata } from "next"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Checkout - MediCare Clinic",
  description: "Complete your appointment booking and payment.",
}

export default function CheckoutPage() {
  // This would typically come from the booking flow state
  const appointmentDetails = {
    doctor: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    date: "March 15, 2024",
    time: "2:00 PM",
    duration: "30 minutes",
    fee: 150,
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
            <p className="text-gray-600">Review your appointment details and complete payment</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Appointment Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Appointment Summary</CardTitle>
                <CardDescription>Please review your appointment details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{appointmentDetails.doctor}</p>
                    <Badge variant="secondary">{appointmentDetails.specialty}</Badge>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{appointmentDetails.date}</p>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{appointmentDetails.time}</p>
                    <p className="text-sm text-gray-600">{appointmentDetails.duration} appointment</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Consultation Fee</span>
                    <span className="text-2xl font-bold">${appointmentDetails.fee}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>Enter your payment details to complete booking</CardDescription>
              </CardHeader>
              <CardContent>
                <CheckoutForm appointmentDetails={appointmentDetails} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

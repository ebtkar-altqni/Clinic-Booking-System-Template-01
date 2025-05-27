import type { Metadata } from "next"
import { AppointmentsTable } from "@/components/dashboard/appointments-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Appointments - MediCare Clinic Dashboard",
  description: "Manage all clinic appointments and scheduling.",
}

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600">Manage all clinic appointments and scheduling.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>
      <AppointmentsTable />
    </div>
  )
}

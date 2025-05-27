import type { Metadata } from "next"
import { DashboardOverview } from "@/components/dashboard/overview"

export const metadata: Metadata = {
  title: "Dashboard - MediCare Clinic",
  description: "Manage your clinic appointments, patients, and schedule.",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening at your clinic today.</p>
      </div>
      <DashboardOverview />
    </div>
  )
}

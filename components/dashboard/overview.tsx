import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Clock, TrendingUp } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Today's Appointments",
      value: "12",
      description: "3 pending confirmations",
      icon: Calendar,
      trend: "+2 from yesterday",
    },
    {
      title: "Total Patients",
      value: "1,234",
      description: "Active patient records",
      icon: Users,
      trend: "+15 this month",
    },
    {
      title: "Available Slots",
      value: "8",
      description: "Remaining today",
      icon: Clock,
      trend: "2 urgent slots",
    },
    {
      title: "Revenue",
      value: "$12,450",
      description: "This month",
      icon: TrendingUp,
      trend: "+12% from last month",
    },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      patient: "John Smith",
      time: "9:00 AM",
      type: "Consultation",
      status: "confirmed",
    },
    {
      id: 2,
      patient: "Sarah Wilson",
      time: "10:30 AM",
      type: "Follow-up",
      status: "pending",
    },
    {
      id: 3,
      patient: "Mike Johnson",
      time: "2:00 PM",
      type: "Check-up",
      status: "confirmed",
    },
    {
      id: 4,
      patient: "Emily Davis",
      time: "3:30 PM",
      type: "Consultation",
      status: "confirmed",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Upcoming appointments for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{appointment.time}</p>
                    <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">New Appointment</p>
                <p className="text-sm text-gray-600">Schedule patient visit</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <Users className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">Add Patient</p>
                <p className="text-sm text-gray-600">Register new patient</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">View Schedule</p>
                <p className="text-sm text-gray-600">Check availability</p>
              </button>
              <button className="p-4 border rounded-lg hover:bg-gray-50 text-left">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <p className="font-medium">Reports</p>
                <p className="text-sm text-gray-600">View analytics</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

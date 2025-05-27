import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Baby, Bone, Stethoscope, Brain, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Medical Services - MediCare Clinic",
  description:
    "Comprehensive healthcare services including family medicine, cardiology, pediatrics, orthopedics, and specialized care.",
}

export default function ServicesPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "Family Medicine",
      description:
        "Comprehensive primary care for patients of all ages, including preventive care, chronic disease management, and routine check-ups.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Annual Physical Exams", "Preventive Care", "Chronic Disease Management", "Health Screenings"],
      price: "Starting at $150",
    },
    {
      icon: Heart,
      title: "Cardiology",
      description:
        "Expert cardiovascular care including heart disease prevention, diagnosis, and treatment with state-of-the-art technology.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["EKG Testing", "Echocardiograms", "Stress Testing", "Heart Disease Prevention"],
      price: "Starting at $200",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents with a focus on growth, development, and preventive care.",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Well-Child Visits", "Immunizations", "Growth Monitoring", "Developmental Assessments"],
      price: "Starting at $175",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description:
        "Comprehensive bone, joint, and muscle care including sports medicine, joint replacement, and minimally invasive procedures.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Physical Therapy"],
      price: "Starting at $250",
    },
    {
      icon: Eye,
      title: "Dermatology",
      description:
        "Complete skin care services including medical dermatology, cosmetic treatments, and skin cancer screening.",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Skin Cancer Screening", "Acne Treatment", "Cosmetic Procedures", "Mole Removal"],
      price: "Starting at $180",
    },
    {
      icon: Brain,
      title: "Neurology",
      description:
        "Expert care for neurological conditions including headaches, stroke prevention, and movement disorders.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      features: ["Headache Treatment", "Stroke Prevention", "Epilepsy Care", "Memory Disorders"],
      price: "Starting at $220",
    },
  ]

  const emergencyServices = [
    {
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with experienced emergency physicians.",
      image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Urgent Care",
      description: "Walk-in care for non-life-threatening conditions that need immediate attention.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Diagnostic Imaging",
      description: "Advanced imaging services including X-ray, MRI, CT scan, and ultrasound.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">MediCare</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/about">
                <Button variant="ghost">About</Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/book-appointment">
                <Button>Book Appointment</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Our Medical Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered by experienced physicians using the latest medical technology
            and evidence-based practices.
          </p>
          <Link href="/book-appointment">
            <Button size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Specialized Medical Care</h2>
            <p className="text-xl text-gray-600">Expert care across multiple medical specialties</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} medical service`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Services Include:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{service.price}</Badge>
                      <Link href="/book-appointment">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Emergency & Urgent Care</h2>
            <p className="text-xl text-gray-600">Immediate medical attention when you need it most</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Medical Care Today?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our experienced medical team is ready to provide the care you need. Book your appointment now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment">
              <Button size="lg" variant="secondary">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Appointment
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
                <span className="text-xl font-bold">MediCare</span>
              </div>
              <p className="text-gray-400">Providing quality healthcare services with compassion and excellence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Family Medicine</li>
                <li>Cardiology</li>
                <li>Pediatrics</li>
                <li>Orthopedics</li>
                <li>Dermatology</li>
                <li>Neurology</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Medical Center Dr</li>
                <li>Healthcare City, HC 12345</li>
                <li>(555) 123-4567</li>
                <li>info@medicare.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mon-Fri: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediCare Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

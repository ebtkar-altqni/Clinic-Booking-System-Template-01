import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Heart, Shield, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - MediCare Clinic",
  description:
    "Learn about our experienced medical team, state-of-the-art facilities, and commitment to providing exceptional healthcare services.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Family Medicine",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "15+ years",
      education: "Harvard Medical School",
      bio: "Dr. Johnson leads our medical team with expertise in family medicine and preventive care.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Cardiologist",
      specialty: "Cardiology",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "12+ years",
      education: "Stanford Medical School",
      bio: "Specializing in cardiovascular health with a focus on preventive cardiology.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Specialist",
      specialty: "Pediatrics",
      image:
        "https://images.unsplash.com/photo-1594824804732-ca8db7531fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "10+ years",
      education: "UCLA Medical School",
      bio: "Dedicated to providing comprehensive healthcare for children and adolescents.",
    },
    {
      name: "Dr. James Wilson",
      role: "Orthopedic Surgeon",
      specialty: "Orthopedics",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "18+ years",
      education: "Johns Hopkins Medical School",
      bio: "Expert in joint replacement and sports medicine with minimally invasive techniques.",
    },
    {
      name: "Dr. Lisa Park",
      role: "Dermatologist",
      specialty: "Dermatology",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "8+ years",
      education: "Mayo Clinic Medical School",
      bio: "Specializing in medical and cosmetic dermatology with advanced treatment options.",
    },
    {
      name: "Dr. Robert Kim",
      role: "Neurologist",
      specialty: "Neurology",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "14+ years",
      education: "Yale Medical School",
      bio: "Expert in neurological disorders with focus on stroke prevention and treatment.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and genuine concern for their wellbeing.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Patient safety is our top priority with rigorous protocols and quality standards.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from medical care to patient experience.",
    },
    {
      icon: Users,
      title: "Team Approach",
      description: "Our collaborative approach ensures comprehensive care from our multidisciplinary team.",
    },
    {
      icon: Clock,
      title: "Accessibility",
      description: "We provide convenient access to healthcare with flexible scheduling and multiple locations.",
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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">About MediCare Clinic</h1>
              <p className="text-xl text-gray-600 mb-8">
                For over two decades, we've been dedicated to providing exceptional healthcare services to our
                community. Our team of experienced physicians and healthcare professionals is committed to your health
                and wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-appointment">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Medical team in modern hospital setting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the care we provide to our patients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
            <p className="text-xl text-gray-600">
              Modern equipment and comfortable environments for optimal patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Modern examination room with advanced medical equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Examination Rooms</h3>
                  <p className="text-sm">Fully equipped with the latest diagnostic technology</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Advanced surgical suite with modern equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Surgical Suites</h3>
                  <p className="text-sm">Advanced operating rooms for minimally invasive procedures</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Comfortable patient waiting area with modern design"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Patient Areas</h3>
                  <p className="text-sm">Comfortable and welcoming spaces for patients and families</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
            <p className="text-xl text-gray-600">Meet our experienced physicians and healthcare professionals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`Portrait of ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {member.name}
                    <Badge variant="secondary">{member.specialty}</Badge>
                  </CardTitle>
                  <CardDescription>
                    <p className="font-medium text-primary">{member.role}</p>
                    <p className="text-sm mt-1">
                      {member.experience} • {member.education}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied patients who trust MediCare for their healthcare needs.
          </p>
          <Link href="/book-appointment">
            <Button size="lg" variant="secondary">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
          </Link>
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

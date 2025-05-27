import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone, Star, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "MediCare Clinic - Professional Healthcare Services",
  description:
    "Book appointments with our experienced doctors. Professional healthcare services with easy online booking system.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">MediCare</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/sign-in" className="hidden md:block">
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
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Health, Our Priority
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience world-class healthcare with our team of experienced
                doctors. Book your appointment online and get the care you
                deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-appointment">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us: (+218) 92-8666458
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={"/hero.jpg"}
                // src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Modern clinic interior with comfortable waiting area"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MediCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive healthcare services with a focus on
              patient comfort and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team of board-certified physicians brings years of
                  experience and expertise to your care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Book appointments online 24/7 with our easy-to-use scheduling
                  system. Same-day appointments available.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Convenient Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Located in the heart of downtown with easy parking and public
                  transportation access.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your health and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                specialty: "Family Medicine",
                experience: "15+ years",
                rating: 4.9,
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
              },
              {
                name: "Dr. Michael Chen",
                specialty: "Cardiology",
                experience: "12+ years",
                rating: 4.8,
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
              },
              {
                name: "Dr. Emily Rodriguez",
                specialty: "Pediatrics",
                experience: "10+ years",
                rating: 5.0,
                image: "/dr3.jpg",
                // "https://images.unsplash.com/photo-1594824804732-ca8db7531fda?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
              },
            ].map((doctor, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={`Portrait of ${doctor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {doctor.name}
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">{doctor.rating}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">
                      {doctor.specialty}
                    </Badge>
                    <p>{doctor.experience} experience</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards better health. Book your appointment
            today.
          </p>
          <Link href="/book-appointment">
            <Button size="lg" variant="secondary">
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
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
              <p className="text-gray-400">
                Providing quality healthcare services with compassion and
                excellence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Family Medicine</li>
                <li>Cardiology</li>
                <li>Pediatrics</li>
                <li>Dermatology</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Medical Center Dr</li>
                <li>Healthcare City, HC 12345</li>
                <li>(218) 92-8666458</li>
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
            <p>&copy; 2025 MediCare Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

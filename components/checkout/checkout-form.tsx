"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Lock, Loader2 } from "lucide-react"

interface CheckoutFormProps {
  appointmentDetails: {
    doctor: string
    specialty: string
    date: string
    time: string
    duration: string
    fee: number
  }
}

export function CheckoutForm({ appointmentDetails }: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, you would process the payment here
    alert("Appointment booked successfully! You will receive a confirmation email shortly.")
    setIsLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Payment Method */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Method</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <label htmlFor="card" className="flex items-center space-x-2 cursor-pointer">
              <CreditCard className="h-4 w-4" />
              <span>Credit/Debit Card</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="insurance"
              name="paymentMethod"
              value="insurance"
              checked={paymentMethod === "insurance"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-primary focus:ring-primary"
            />
            <label htmlFor="insurance" className="cursor-pointer">
              Insurance
            </label>
          </div>
        </div>
      </div>

      {/* Card Details */}
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required disabled={isLoading} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" required disabled={isLoading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" required disabled={isLoading} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardName">Name on Card</Label>
            <Input id="cardName" placeholder="John Doe" required disabled={isLoading} />
          </div>
        </div>
      )}

      {/* Insurance Details */}
      {paymentMethod === "insurance" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="insuranceProvider">Insurance Provider</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select your insurance provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aetna">Aetna</SelectItem>
                <SelectItem value="bluecross">Blue Cross Blue Shield</SelectItem>
                <SelectItem value="cigna">Cigna</SelectItem>
                <SelectItem value="humana">Humana</SelectItem>
                <SelectItem value="united">United Healthcare</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="policyNumber">Policy Number</Label>
            <Input id="policyNumber" placeholder="Enter your policy number" required disabled={isLoading} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="groupNumber">Group Number</Label>
            <Input id="groupNumber" placeholder="Enter your group number" disabled={isLoading} />
          </div>
        </div>
      )}

      {/* Billing Address */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Billing Address</h3>
        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input id="address" placeholder="123 Main Street" required disabled={isLoading} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="New York" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="tx">Texas</SelectItem>
                <SelectItem value="fl">Florida</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP Code</Label>
          <Input id="zipCode" placeholder="12345" required disabled={isLoading} />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={agreedToTerms}
          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
          required
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>

      {/* Security Notice */}
      <Alert>
        <Lock className="h-4 w-4" />
        <AlertDescription>
          Your payment information is encrypted and secure. We never store your card details.
        </AlertDescription>
      </Alert>

      {/* Submit Button */}
      <Button type="submit" className="w-full" size="lg" disabled={isLoading || !agreedToTerms}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Complete Booking - ${appointmentDetails.fee}
      </Button>
    </form>
  )
}

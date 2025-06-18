"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, CreditCard, Loader2 } from "lucide-react"

const PRESET_AMOUNTS = [5, 10, 25, 50, 100]

export default function DonationComponent() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isRecurring, setIsRecurring] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const finalAmount = selectedAmount || Number.parseFloat(customAmount) || 0

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const handleDonorInfoChange = (field: string, value: string) => {
    setDonorInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (finalAmount < 1) {
      alert("Minimum donation amount is $1")
      return
    }

    if (!donorInfo.name || !donorInfo.email) {
      alert("Please fill in required fields")
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setShowSuccess(true)
    } catch (error) {
      alert("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  if (showSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="text-center p-8">
          <div className="mb-4">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
            <p className="text-lg mb-4">Your donation of ${finalAmount.toFixed(2)} has been processed successfully.</p>
            <p className="text-sm text-muted-foreground mb-6">A receipt has been sent to {donorInfo.email}</p>
          </div>
          <Button onClick={() => setShowSuccess(false)} variant="outline">
            Make Another Donation
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-red-500" />
          Make a Donation
        </CardTitle>
        <CardDescription>Your contribution helps us make a difference in the community</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Selection */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Select Amount</Label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {PRESET_AMOUNTS.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={selectedAmount === amount ? "default" : "outline"}
                  onClick={() => handleAmountSelect(amount)}
                  className="h-12"
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="custom-amount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          {/* Recurring Donation */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="recurring"
              checked={isRecurring}
              onChange={(e) => setIsRecurring(e.target.checked)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <Label htmlFor="recurring" className="text-sm">
              Make this a monthly recurring donation
            </Label>
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Donor Information</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={donorInfo.name}
                  onChange={(e) => handleDonorInfoChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={donorInfo.email}
                  onChange={(e) => handleDonorInfoChange("email", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={donorInfo.phone}
                onChange={(e) => handleDonorInfoChange("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <textarea
                id="message"
                placeholder="Leave a message or dedication..."
                value={donorInfo.message}
                onChange={(e) => handleDonorInfoChange("message", e.target.value)}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Payment Method</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <Label htmlFor="card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Credit/Debit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
            </div>
          </div>

          {/* Total and Submit */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total Amount:</span>
              <span className="text-2xl font-bold text-green-600">
                ${finalAmount.toFixed(2)}
                {isRecurring && <span className="text-sm text-muted-foreground">/month</span>}
              </span>
            </div>
            <Button type="submit" className="w-full h-12 text-lg" disabled={finalAmount < 1 || isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-4 w-4" />
                  Donate ${finalAmount.toFixed(2)}
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

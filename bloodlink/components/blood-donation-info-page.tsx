"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  MapPin,
  Clock,
  Shield,
  Phone,
  UserCheck,
  Search,
  AlertCircle,
  CheckCircle,
  Droplets,
  Building2,
  UserPlus,
} from "lucide-react"

export default function BloodDonationInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Droplets className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Blood Donation Platform</h1>
          </div>
          <p className="text-xl md:text-2xl text-red-100">Connecting Life Savers with Life Seekers</p>
          <p className="text-lg text-red-200 mt-2">Every drop counts. Every donor matters. Every life is precious.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* How It Works Overview */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How Our Platform Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform bridges the gap between blood donors and recipients, making it easier to save lives through
              efficient blood donation management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Donors */}
            <Card className="border-2 border-red-200 hover:border-red-300 transition-colors">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <Heart className="h-6 w-6" />
                  For Blood Donors
                </CardTitle>
                <CardDescription>Become a hero by donating blood</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <UserPlus className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Register as Donor</h4>
                      <p className="text-sm text-gray-600">Create your profile with blood type and contact details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Complete Health Screening</h4>
                      <p className="text-sm text-gray-600">Verify eligibility through our health questionnaire</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Get Notified</h4>
                      <p className="text-sm text-gray-600">Receive alerts when your blood type is needed nearby</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Donate at Centers</h4>
                      <p className="text-sm text-gray-600">Visit verified donation centers or mobile camps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Recipients */}
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Search className="h-6 w-6" />
                  For Blood Recipients
                </CardTitle>
                <CardDescription>Find blood when you need it most</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Submit Blood Request</h4>
                      <p className="text-sm text-gray-600">Post urgent blood requirements with details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Match with Donors</h4>
                      <p className="text-sm text-gray-600">Our system finds compatible donors in your area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Direct Communication</h4>
                      <p className="text-sm text-gray-600">Connect directly with willing donors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Coordinate Donation</h4>
                      <p className="text-sm text-gray-600">Arrange donation at hospitals or blood banks</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Blood Types Information */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Blood Type Compatibility</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Universal Donors & Recipients</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="destructive" className="w-12 text-center">
                        O-
                      </Badge>
                      <span className="text-sm">Universal Donor - Can donate to all blood types</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="w-12 text-center">
                        AB+
                      </Badge>
                      <span className="text-sm">Universal Recipient - Can receive from all blood types</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">All Blood Types</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                      <Badge key={type} variant="secondary" className="text-center py-2">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Donation Process */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Blood Donation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Registration",
                description: "Fill out donor form and health questionnaire",
                icon: UserPlus,
                color: "bg-red-100 text-red-600",
              },
              {
                step: "2",
                title: "Health Check",
                description: "Basic health screening and hemoglobin test",
                icon: Shield,
                color: "bg-orange-100 text-orange-600",
              },
              {
                step: "3",
                title: "Donation",
                description: "Safe blood collection process (10-15 minutes)",
                icon: Droplets,
                color: "bg-blue-100 text-blue-600",
              },
              {
                step: "4",
                title: "Recovery",
                description: "Rest and refreshments before leaving",
                icon: CheckCircle,
                color: "bg-green-100 text-green-600",
              },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Step {item.step}</h3>
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Eligibility Requirements */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Donor Eligibility Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  You CAN Donate If:
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Age between 18-65 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Weight above 50 kg (110 lbs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Hemoglobin level above 12.5 g/dL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Good general health</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Last donation was 3+ months ago</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  You CANNOT Donate If:
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Currently taking antibiotics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Had surgery in last 6 months</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Pregnant or breastfeeding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Have cold, flu, or fever</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Recent tattoo or piercing (1 year)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Safety & Benefits */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Shield className="h-6 w-6" />
                  Safety Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span className="text-sm">All equipment is sterile and single-use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span className="text-sm">Trained medical professionals supervise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span className="text-sm">Blood is tested for infections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                    <span className="text-sm">Donor health is monitored throughout</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Heart className="h-6 w-6" />
                  Benefits of Donating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-red-500 mt-1" />
                    <span className="text-sm">Save up to 3 lives with one donation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-red-500 mt-1" />
                    <span className="text-sm">Free health screening and blood tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-red-500 mt-1" />
                    <span className="text-sm">Reduce risk of heart disease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-red-500 mt-1" />
                    <span className="text-sm">Feel good about helping others</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Emergency Process */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Emergency Blood Request Process</h2>
          <Card className="border-2 border-orange-200 bg-orange-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">1. Submit Request</h3>
                  <p className="text-sm text-gray-600">Post emergency blood requirement with hospital details</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">2. Instant Alerts</h3>
                  <p className="text-sm text-gray-600">Nearby compatible donors receive immediate notifications</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">3. Quick Response</h3>
                  <p className="text-sm text-gray-600">Donors respond and coordinate donation within hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of heroes who are making a difference in their communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors cursor-pointer">
              Register as Donor
            </div>
            <div className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibent hover:bg-white hover:text-red-600 transition-colors cursor-pointer">
              Request Blood
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

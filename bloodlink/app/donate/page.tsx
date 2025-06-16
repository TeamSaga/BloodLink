import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MapPin, Calendar, Clock, CheckCircle2, ArrowRight, Droplet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950 dark:via-gray-900 dark:to-red-950">
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-200/50 dark:from-red-900/20 dark:to-red-800/20 rounded-3xl blur-3xl -z-10" />
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 animate-gradient">
                Donate Blood
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Your donation can save up to three lives. Schedule your donation today and make a difference.
              </p>
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  <Droplet className="h-5 w-5 text-red-500 animate-pulse" />
                  <span className="font-semibold">Every Drop Counts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                  <span className="font-semibold">Save Lives</span>
                </div>
              </div>
            </div>
          </section>

          {/* Eligibility Check */}
          <section className="max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100 dark:border-red-900/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Are You Eligible to Donate?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Age Requirement</h3>
                        <p className="text-gray-600 dark:text-gray-400">Must be at least 18 years old</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Weight Requirement</h3>
                        <p className="text-gray-600 dark:text-gray-400">Must weigh at least 50 kg</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Health Status</h3>
                        <p className="text-gray-600 dark:text-gray-400">Must be in good general health</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Last Donation</h3>
                        <p className="text-gray-600 dark:text-gray-400">Must be at least 56 days since last donation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Medications</h3>
                        <p className="text-gray-600 dark:text-gray-400">Must not be on certain medications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 group">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Travel History</h3>
                        <p className="text-gray-600 dark:text-gray-400">Must meet travel restrictions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Donation Form */}
          <section className="max-w-2xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-100 dark:border-red-900/30">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Schedule Your Donation
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" className="bg-white dark:bg-gray-900 border-2 focus:border-red-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="bg-white dark:bg-gray-900 border-2 focus:border-red-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" className="bg-white dark:bg-gray-900 border-2 focus:border-red-500" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodType" className="text-gray-700 dark:text-gray-300">Blood Type</Label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-gray-900 border-2 focus:border-red-500">
                          <SelectValue placeholder="Select blood type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">Preferred Location</Label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-gray-900 border-2 focus:border-red-500">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="central">Central Blood Bank</SelectItem>
                          <SelectItem value="north">North District Center</SelectItem>
                          <SelectItem value="south">South District Center</SelectItem>
                          <SelectItem value="east">East District Center</SelectItem>
                          <SelectItem value="west">West District Center</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-gray-700 dark:text-gray-300">Preferred Date</Label>
                      <Input id="date" type="date" className="bg-white dark:bg-gray-900 border-2 focus:border-red-500" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-gray-700 dark:text-gray-300">Preferred Time</Label>
                      <Select>
                        <SelectTrigger className="bg-white dark:bg-gray-900 border-2 focus:border-red-500">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (1 PM - 4 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">Additional Notes</Label>
                    <Textarea id="notes" placeholder="Any special requirements or notes" className="bg-white dark:bg-gray-900 border-2 focus:border-red-500" />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                    <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Schedule Donation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Information Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
              <CardContent className="p-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Clock className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Quick Process</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The entire donation process takes about 45-60 minutes, including registration and recovery.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
              <CardContent className="p-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <MapPin className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Convenient Locations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Multiple donation centers across the city for your convenience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
              <CardContent className="p-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Calendar className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Flexible Scheduling</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a time and location that works best for you.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 
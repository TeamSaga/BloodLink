"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Heart,
  Droplet,
  Users,
  Building2,
  Shield,
  Clock,
  MapPin,
  Bell,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Trophy,
  Calendar,
  Target,
  Activity,
  Sparkles,
  ArrowUpRight,
  Quote,
  Newspaper,
  Clock4,
  UserCircle2,
  ChevronRight,
} from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
        <div className="container mx-auto px-4 pt-12 space-y-16 pb-12">
          {/* Hero Section */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-6">
                  <div className="space-y-3">
                    <Badge className="px-4 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 animate-fade-in group hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors cursor-pointer">
                      <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Trusted by 10,000+ Donors
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-slide-up">
                      Save Lives Through{' '}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-all duration-300">
                        Blood Donation
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 animate-fade-in delay-200">
                      Join our community of life-savers. Every
          drop counts, every donor matters.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 animate-slide-up delay-300">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                      <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Donate Now
                      <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                    <Button size="lg" variant="outline" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                      <Users className="mr-2 h-5 w-5 group-hover:text-red-600 transition-colors" />
                      Join Community
                      <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 animate-fade-in delay-400">
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <Shield className="h-5 w-5 text-green-500 group-hover:animate-bounce" />
                      <span className="group-hover:text-green-600 transition-colors">Safe & Secure</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <Bell className="h-5 w-5 text-blue-500 group-hover:animate-bounce" />
                      <span className="group-hover:text-blue-600 transition-colors">Real-time Updates</span>
                    </div>
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <MapPin className="h-5 w-5 text-purple-500 group-hover:animate-bounce" />
                      <span className="group-hover:text-purple-600 transition-colors">Nationwide Network</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <Image
                    src="/BloodDrop.png"
                    alt="Animated blood drop illustration representing blood donation"
                    width={240}
                    height={240}
                    className="animate-float drop-shadow-2xl object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                        <Heart className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">10K+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Active Donors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                        <Droplet className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">50K+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Units Donated</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                        <Award className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">100+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Partner Hospitals</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                        <Star className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:animate-pulse" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">4.9/5</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">User Rating</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Why Donate Blood?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Your donation can save up to three lives. Here's why it matters.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src="/donate1.jpg"
                    alt="Blood Donation Process"
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="text-xl font-bold mb-2">Safe & Simple Process</h3>
                    <p className="text-sm opacity-90">Quick and painless donation process with professional care</p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src="/donate2.jpg"
                    alt="Blood Donation Impact"
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="text-xl font-bold mb-2">Make a Real Impact</h3>
                    <p className="text-sm opacity-90">Your donation can help save lives in emergency situations</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                      <Heart className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      Save Lives
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      One donation can save up to three lives in emergency situations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      Regular Need
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Blood is needed every two seconds, and your donation helps meet this constant demand.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                      <Users className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      Community Impact
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Join a community of donors making a difference in people's lives.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-default">
                  How It Works
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Three simple steps to become a life-saver
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                      <span className="text-xl font-bold text-red-600 dark:text-red-400 group-hover:animate-pulse">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Register</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create your account and complete your profile with basic information.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-8 w-8 text-gray-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
                <div className="relative group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                      <span className="text-xl font-bold text-red-600 dark:text-red-400 group-hover:animate-pulse">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Schedule</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Choose a convenient time and location for your donation.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-8 w-8 text-gray-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                      <span className="text-xl font-bold text-red-600 dark:text-red-400 group-hover:animate-pulse">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Donate</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Visit the center, complete the screening, and make your donation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950 dark:via-gray-900 dark:to-red-950">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Donor Stories
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Hear from our amazing donors about their experiences
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 dark:border-red-800">
                        <img
                          src="/profile1.jpg"
                          alt="Johnson michel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg"> Johnson Mike</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Regular Donor</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-red-200 dark:text-red-800 opacity-50" />
                      <p className="text-gray-600 dark:text-gray-400 italic pl-6">
                        "Donating blood has become a regular part of my life. The process is simple, and knowing I'm helping others makes it all worthwhile."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 dark:border-red-800">
                        <img
                          src="/profile2.jpg"
                          alt="Emma Rodrigue"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Emma Rodrigue</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Emergency Donor</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-red-200 dark:text-red-800 opacity-50" />
                      <p className="text-gray-600 dark:text-gray-400 italic pl-6">
                        "When I received the emergency alert, I knew I had to help. The quick response system made it easy to donate when it mattered most."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 dark:border-red-800">
                        <img
                          src="/profile3.jpg"
                          alt="Michael Chen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Michael Chen</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">First-time Donor</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-red-200 dark:text-red-800 opacity-50" />
                      <p className="text-gray-600 dark:text-gray-400 italic pl-6">
                        "I was nervous about my first donation, but the staff was incredibly supportive. Now I'm proud to be part of this life-saving community."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Testimonial */}
              <div className="mt-8 max-w-2xl mx-auto">
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-200 dark:border-red-800">
                        <img
                          src="/profile4.jpg"
                          alt="David Thompson"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">David Thompson</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Long-term Donor</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-red-200 dark:text-red-800 opacity-50" />
                      <p className="text-gray-600 dark:text-gray-400 italic pl-6">
                        "I've been donating for over 10 years, and BloodLink has made the process more convenient than ever. The mobile app keeps me informed about when and where I can make the biggest impact."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-default">
                  Upcoming Blood Drives
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Join our upcoming blood donation events in your area
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Community Blood Drive */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src="/communityblooddrive.jpeg"
                      alt="Community Blood Drive"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Community
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 25, 2024</div>
                    <h3 className="text-xl font-bold mb-2">Community Blood Drive</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>City Community Center</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Droplet className="h-5 w-5 mr-2" />
                        <span>Goal: 100 units</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="h-5 w-5 mr-2" />
                        <span>45 registered</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors duration-300">
                      Register Now
                    </button>
                  </div>
                </div>

                {/* Emergency Blood Drive */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src="/emergencyblooddrive.jpg"
                      alt="Emergency Blood Drive"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Emergency
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 28, 2024</div>
                    <h3 className="text-xl font-bold mb-2">Emergency Blood Drive</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>Central Hospital</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Droplet className="h-5 w-5 mr-2" />
                        <span>Goal: 150 units</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="h-5 w-5 mr-2" />
                        <span>78 registered</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors duration-300">
                      Register Now
                    </button>
                  </div>
                </div>

                {/* University Blood Drive */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                  <div className="relative h-48">
                    <img
                      src="/universityblooddrive.webp"
                      alt="University Blood Drive"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        University
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">April 2, 2024</div>
                    <h3 className="text-xl font-bold mb-2">University Blood Drive</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>State University Campus</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Droplet className="h-5 w-5 mr-2" />
                        <span>Goal: 200 units</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="h-5 w-5 mr-2" />
                        <span>120 registered</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors duration-300">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest News Section */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-default">
                  Latest News & Updates
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Stay informed about blood donation news and community updates
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Newspaper className="h-5 w-5 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">March 20, 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      New Blood Donation Guidelines Released
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Updated guidelines for blood donation have been released to ensure the safety of both donors and recipients.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock4 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">5 min read</span>
                      </div>
                      <Button variant="ghost" className="group-hover:text-red-600 transition-colors">
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Newspaper className="h-5 w-5 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">March 18, 2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      BloodLink Reaches 10,000 Donors Milestone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Our community has grown to over 10,000 active donors, making a significant impact on blood availability.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock4 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">3 min read</span>
                      </div>
                      <Button variant="ghost" className="group-hover:text-red-600 transition-colors">
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 dark:from-red-600/20 dark:to-red-800/20" />
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Join Our Blood Donation Community
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Be part of something bigger. Your donation can save up to three lives.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                  Become a Donor
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </section>

          {/* Healthcare Facilities Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50 dark:from-red-950/50 dark:to-gray-900/50" />
            <div className="container mx-auto px-4 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <img
                    src="/hospital.webp"
                    alt="Modern Healthcare Facility"
                    className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="text-xl font-bold mb-2">State-of-the-Art Facilities</h3>
                    <p className="text-sm opacity-90">Modern healthcare centers equipped with the latest technology</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                    Partner Healthcare Facilities
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    We work with leading healthcare facilities to ensure safe and efficient blood donation processes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <MapPin className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Multiple Locations</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Convenient centers across the city</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">24/7 Service</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock availability</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Expert Staff</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Trained medical professionals</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Safety First</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Highest safety standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-white/50 dark:from-red-950/50 dark:to-gray-900/50" />
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  Every Beat Counts
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Your donation can be the difference between life and hope
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <Heart className="h-5 w-5 text-red-600 dark:text-red-400 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Save Lives</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">One donation can save up to 3 lives</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Every 2 Seconds</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Someone needs blood</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Droplet className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Quick Process</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Only takes about an hour</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Community Impact</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Join thousands of donors</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <img
                    src="/HEARTBEAT.jpg"
                    alt="Heartbeat Monitor"
                    className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="text-xl font-bold mb-2">Life in Your Hands</h3>
                    <p className="text-sm opacity-90">Your donation can be the heartbeat of hope for someone in need</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

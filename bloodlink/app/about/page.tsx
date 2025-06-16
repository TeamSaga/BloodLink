import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Target, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12 space-y-16">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              About BloodLink
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Connecting blood donors with those in need, making blood donation simple, safe, and impactful.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Target className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  To ensure a safe and sufficient blood supply by connecting donors with recipients through innovative technology and community engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Award className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A world where no one dies due to lack of blood, where every person has access to safe blood when they need it.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Impact Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2 group-hover:scale-110 transition-transform">10K+</div>
                <p className="text-gray-600 dark:text-gray-400">Active Donors</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2 group-hover:scale-110 transition-transform">50K+</div>
                <p className="text-gray-600 dark:text-gray-400">Lives Saved</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2 group-hover:scale-110 transition-transform">100+</div>
                <p className="text-gray-600 dark:text-gray-400">Partner Hospitals</p>
              </CardContent>
            </Card>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 overflow-hidden">
                    {/* Add team member image here */}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Medical Director</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Leading our medical operations with over 15 years of experience in transfusion medicine.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 overflow-hidden">
                    {/* Add team member image here */}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Michael Chen</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Operations Director</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Managing our nationwide network of blood donation centers and partner hospitals.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-4 overflow-hidden">
                    {/* Add team member image here */}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Emma Rodriguez</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Community Director</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Building and nurturing our donor community through engagement and education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Join Us Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Be part of our life-saving community. Whether you're a donor, volunteer, or partner, your contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Become a Donor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                <Users className="mr-2 h-5 w-5 group-hover:text-red-600 transition-colors" />
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} "use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  MapPin,
  Bell,
  Trophy,
  Shield,
  Smartphone,
  Globe,
  Target,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const keyFeatures = [
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Real-Time Emergency Alerts",
      description:
        "SMS/WhatsApp notifications to nearby eligible donors during blood shortages",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Pre-Pledge System",
      description:
        "Commit to future donations when your blood type is in scarcity",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Live Blood Tracking",
      description: "Track the journey of your donated blood and see its impact",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Gamification Elements",
      description:
        "Badges, leaderboards, and streak rewards to increase donor motivation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Campaign Management",
      description: "Organize, manage, and promote donation drives with ease",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Transparent",
      description:
        "Financial donation processing with fund tracking and donor recognition",
    },
  ];

  const stats = [
    {
      number: "10,000+",
      label: "Target Donors",
      icon: <Users className="h-5 w-5" />,
    },
    { number: "3", label: "Languages", icon: <Globe className="h-5 w-5" /> },
    {
      number: "24/7",
      label: "Emergency Alerts",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      number: "100%",
      label: "Transparency",
      icon: <Shield className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 border-red-200 text-red-600">
            Team Saga
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            About BloodLink
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A comprehensive, web-based platform designed to modernize and
            revolutionize blood and organ donation management in Sri Lanka.
            Bridging the communication gap between patients, hospitals, and
            donors through real-time alerts, live tracking, and community-driven
            features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register-donor">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Heart className="h-5 w-5 mr-2" />
                Become a Donor
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Problem & Solution */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-red-100 dark:border-red-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold">The Problem</h2>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>
                    • Fragmented communication between donors and hospitals
                  </li>
                  <li>• Critical delays in emergency blood mobilization</li>
                  <li>• Lack of real-time donor availability tracking</li>
                  <li>• Low organ donation awareness in Sri Lanka</li>
                  <li>• No transparent financial donation platforms</li>
                  <li>• Blood shortages during disasters and emergencies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-100 dark:border-green-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold">Our Solution</h2>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Centralized real-time emergency alert system</li>
                  <li>• Smart donor matching and notification system</li>
                  <li>• Transparent campaign and fund management</li>
                  <li>• Gamified donor engagement platform</li>
                  <li>
                    • Multilingual accessibility (Sinhala, Tamil, English)
                  </li>
                  <li>• Integration with hospitals and emergency services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              BloodLink combines cutting-edge technology with human compassion
              to create a comprehensive donation management ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg text-red-600 dark:text-red-400 mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact Goals</h2>
            <p className="text-red-100">
              Setting ambitious targets to transform blood donation in Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-red-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Implementation Roadmap */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our strategic three-phase approach to nationwide adoption
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="mr-3">
                    Phase 1
                  </Badge>
                  <h3 className="text-xl font-semibold">Pilot Launch</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Partner with universities and local hospitals in Colombo &
                  Kandy to recruit early users and donors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="mr-3">
                    Phase 2
                  </Badge>
                  <h3 className="text-xl font-semibold">
                    District-Wide Expansion
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Add private hospitals, translate to Sinhala/Tamil, and
                  introduce gamified rewards system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="mr-3">
                    Phase 3
                  </Badge>
                  <h3 className="text-xl font-semibold">National Rollout</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborate with Ministry of Health and integrate with
                  emergency services for nationwide alerts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>{" "}
      </section>{" "}
      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the BloodLink Community
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Be part of a movement that's transforming how Sri Lanka responds to
            medical emergencies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register-donor">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <Heart className="h-5 w-5 mr-2" />
                Register as Donor
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Heart,
  Droplet,
  Users,
  Building2,
  Shield,
  Clock,
  MapPin,
  Bell,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-20">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Save Lives Through Blood Donation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join our mission to connect blood donors with those in need. Every donation counts, and you can be someone's hero today.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/donate">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
          </Link>
          <Link href="/find-blood">
            <Button size="lg" variant="outline">
              <Droplet className="mr-2 h-5 w-5" />
              Find Blood
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Users className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Large Donor Network</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with thousands of registered donors across the country
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Building2 className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Hospitals</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Partner with trusted healthcare facilities nationwide
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Shield className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your data is protected with industry-standard security measures
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <Clock className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get instant notifications about blood needs in your area
            </p>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold">Find Nearby</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Locate blood banks and donation centers in your area
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Bell className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold">Get Notified</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive alerts when your blood type is needed
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold">Save Lives</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Make a difference by donating blood when needed
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-16 bg-red-50 dark:bg-red-900/20 rounded-3xl">
        <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join our community of lifesavers today and help those in need.
        </p>
        <Link href="/register">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Get Started
          </Button>
        </Link>
      </section>
    </div>
  );
}

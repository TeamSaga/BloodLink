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
} 
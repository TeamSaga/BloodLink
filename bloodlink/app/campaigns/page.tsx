import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, Search, Filter, ArrowRight, Heart, Droplet } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CampaignsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950 dark:via-gray-900 dark:to-red-950">
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-red-200/50 dark:from-red-900/20 dark:to-red-800/20 rounded-3xl blur-3xl -z-10" />
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 animate-gradient">
                Blood Donation Campaigns
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Join our community-driven blood donation campaigns and make a difference in your area.
              </p>
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  <Heart className="h-5 w-5 text-red-500 animate-pulse" />
                  <span className="font-semibold">Save Lives</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                  <Droplet className="h-5 w-5 text-red-500 animate-pulse" />
                  <span className="font-semibold">Every Drop Counts</span>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search campaigns..."
                  className="pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 focus:border-red-500"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:border-red-500">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </section>

          {/* Active Campaigns */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Active Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Campaign Card 1 */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      Ongoing
                    </Badge>
                    <Badge variant="outline" className="text-green-600 dark:text-green-400">
                      High Priority
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    City Hospital Blood Drive
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>March 25, 2024 - April 1, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>City Hospital, Main Campus</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Target className="h-4 w-4 mr-2" />
                      <span>Goal: 500 units</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>250 registered donors</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Campaign Card 2 */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Upcoming
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 dark:text-blue-400">
                      Community
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Community Blood Drive
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>April 5, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Community Center, Downtown</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Target className="h-4 w-4 mr-2" />
                      <span>Goal: 200 units</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>75 registered donors</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Campaign Card 3 */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                      New
                    </Badge>
                    <Badge variant="outline" className="text-purple-600 dark:text-purple-400">
                      Corporate
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Corporate Blood Drive
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>April 15, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Tech Park, Building A</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Target className="h-4 w-4 mr-2" />
                      <span>Goal: 150 units</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>50 registered donors</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 hover:shadow-lg group">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Campaign Categories */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Campaign Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full w-fit mx-auto mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                    <Target className="h-6 w-6 text-red-600 dark:text-red-400 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Emergency Drives
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Urgent blood collection campaigns
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Community Events
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Local community blood drives
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <Calendar className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Regular Drives
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Scheduled donation campaigns
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer border-2 border-red-100 dark:border-red-900/30">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    Mobile Units
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Traveling blood collection units
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
} 
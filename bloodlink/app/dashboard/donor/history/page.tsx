'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  History, 
  Droplet, 
  Calendar, 
  MapPin, 
  Award,
  Trophy,
  Heart,
  Activity,
  BarChart,
  ChevronRight,
  Download,
  Filter,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface DonationRecord {
  id: string;
  date: string;
  location: string;
  bloodType: string;
  volume: number;
  status: 'completed' | 'cancelled' | 'scheduled';
  impact: {
    livesSaved: number;
    points: number;
  };
  notes?: string;
}

interface DonationStats {
  totalDonations: number;
  totalVolume: number;
  livesImpacted: number;
  streak: number;
  nextMilestone: {
    target: number;
    current: number;
    reward: string;
  };
  monthlyTrend: Array<{
    month: string;
    count: number;
  }>;
}

export default function DonationHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const donationHistory: DonationRecord[] = [
    {
      id: '1',
      date: '2024-03-15',
      location: 'City Blood Bank',
      bloodType: 'A+',
      volume: 450,
      status: 'completed',
      impact: {
        livesSaved: 3,
        points: 100
      },
      notes: 'Regular donation, no complications'
    },
    {
      id: '2',
      date: '2024-01-20',
      location: 'Community Hospital',
      bloodType: 'A+',
      volume: 450,
      status: 'completed',
      impact: {
        livesSaved: 3,
        points: 100
      }
    },
    {
      id: '3',
      date: '2023-11-15',
      location: 'Red Cross Center',
      bloodType: 'A+',
      volume: 450,
      status: 'completed',
      impact: {
        livesSaved: 3,
        points: 100
      }
    },
    {
      id: '4',
      date: '2023-09-10',
      location: 'City Blood Bank',
      bloodType: 'A+',
      volume: 450,
      status: 'completed',
      impact: {
        livesSaved: 3,
        points: 100
      }
    }
  ];

  const stats: DonationStats = {
    totalDonations: 12,
    totalVolume: 5400,
    livesImpacted: 36,
    streak: 3,
    nextMilestone: {
      target: 15,
      current: 12,
      reward: 'Silver Donor Badge'
    },
    monthlyTrend: [
      { month: 'Jan', count: 1 },
      { month: 'Feb', count: 0 },
      { month: 'Mar', count: 1 },
      { month: 'Apr', count: 0 },
      { month: 'May', count: 1 },
      { month: 'Jun', count: 0 }
    ]
  };

  const filteredDonations = donationHistory.filter(donation => 
    donation.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    donation.date.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Donation History
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export History
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <Droplet className="h-5 w-5" />
                Total Donations
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.totalDonations}</p>
                <span className="text-sm text-gray-500">donations</span>
              </div>
              <Progress value={75} className="mt-4 h-2 bg-red-100" />
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Heart className="h-5 w-5" />
                Lives Impacted
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.livesImpacted}</p>
                <span className="text-sm text-gray-500">lives</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Through {stats.totalVolume}ml of blood
              </p>
            </CardContent>
          </Card>

          <Card className={getCardClass('green')}>
            <CardHeader className={getHeaderClass('green')}>
              <CardTitle className={getTitleClass('green')}>
                <Trophy className="h-5 w-5" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('green')}>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.streak}</p>
                <span className="text-sm text-gray-500">months</span>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-full rounded-full ${
                      i < stats.streak ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('purple')}>
            <CardHeader className={getHeaderClass('purple')}>
              <CardTitle className={getTitleClass('purple')}>
                <Award className="h-5 w-5" />
                Next Milestone
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('purple')}>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold">{stats.nextMilestone.current}</p>
                  <span className="text-sm text-gray-500">/ {stats.nextMilestone.target}</span>
                </div>
                <p className="text-sm text-gray-500">
                  {stats.nextMilestone.reward}
                </p>
                <Progress 
                  value={(stats.nextMilestone.current / stats.nextMilestone.target) * 100} 
                  className="h-2 bg-purple-100" 
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trend */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <BarChart className="h-5 w-5" />
              Monthly Trend
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="flex items-end gap-2 h-32">
              {stats.monthlyTrend.map((data) => (
                <div key={data.month} className="flex-1">
                  <div
                    className="bg-blue-500 dark:bg-blue-400 rounded-t"
                    style={{
                      height: `${(data.count / 2) * 100}%`,
                    }}
                  />
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {data.month}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Donation History */}
        <Card className={getCardClass('red')}>
          <CardHeader className={getHeaderClass('red')}>
            <div className="flex items-center justify-between">
              <CardTitle className={getTitleClass('red')}>
                <History className="h-5 w-5" />
                Past Donations
              </CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search donations..."
                    className="pl-9 w-[200px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className={getContentClass('red')}>
            <div className="space-y-4">
              {filteredDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">
                          {new Date(donation.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {donation.location}
                      </div>
                      {donation.notes && (
                        <p className="text-sm text-gray-500 mt-2">{donation.notes}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={donation.status === 'completed' ? 'default' : 'secondary'}
                        className="group-hover:scale-105 transition-transform duration-200"
                      >
                        {donation.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Droplet className="h-4 w-4" />
                        {donation.volume}ml
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Heart className="h-4 w-4" />
                        {donation.impact.livesSaved} lives saved
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
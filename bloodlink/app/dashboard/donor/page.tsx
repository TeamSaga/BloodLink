'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, Heart, Trophy, Calendar, Bell, Activity, Droplet } from 'lucide-react';
import DonationTracker from './components/DonationTracker';
import RewardsSystem from './components/RewardsSystem';
import CampaignManager from './components/CampaignManager';
import OrganDonationAwareness from './components/OrganDonationAwareness';
import HealthMetrics from './components/HealthMetrics';
import BloodTypeInfo from './components/BloodTypeInfo';
import NotificationCenter from './components/NotificationCenter';
import DonationAnalytics from './components/DonationAnalytics';
import { getCardClass } from '@/lib/theme';

interface DonorStats {
  totalDonations: number;
  streak: number;
  points: number;
  nextBadge: string;
  recentAlerts: Array<{
    type: string;
    location: string;
    urgency: 'high' | 'medium' | 'low';
    timestamp: string;
  }>;
}

export default function DonorDashboard() {
  const [stats, setStats] = useState<DonorStats>({
    totalDonations: 0,
    streak: 0,
    points: 0,
    nextBadge: 'Bronze Donor',
    recentAlerts: [],
  });

  useEffect(() => {
    // TODO: Fetch donor stats from API
    // This is mock data for now
    setStats({
      totalDonations: 5,
      streak: 3,
      points: 750,
      nextBadge: 'Silver Donor',
      recentAlerts: [
        {
          type: 'Blood Type A+ Needed',
          location: 'City Hospital',
          urgency: 'high',
          timestamp: '2024-03-20T10:00:00Z',
        },
      ],
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Donor Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Droplet className="h-5 w-5 text-red-500 animate-pulse" />
              <span className="font-semibold">Blood Type: A+</span>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Heart className="h-5 w-5" />
                Total Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.totalDonations}</p>
                <span className="text-sm text-gray-500">units</span>
              </div>
              <Progress value={75} className="mt-4 h-2 bg-red-100" />
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <Trophy className="h-5 w-5" />
                Donation Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.streak}</p>
                <span className="text-sm text-gray-500">days</span>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-full rounded-full ${
                      i < stats.streak ? 'bg-yellow-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Activity className="h-5 w-5" />
                Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.points}</p>
                <span className="text-sm text-gray-500">pts</span>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Next level: {1000 - stats.points} points needed
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Bell className="h-5 w-5 animate-bounce" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-semibold">{alert.type}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {alert.location}
                    </p>
                  </div>
                  <Badge
                    variant={alert.urgency === 'high' ? 'destructive' : 'default'}
                    className="animate-pulse"
                  >
                    {alert.urgency.toUpperCase()}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NotificationCenter />
          <DonationAnalytics />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={getCardClass('red')}>
            <DonationTracker />
          </div>
          <div className={getCardClass('blue')}>
            <RewardsSystem />
          </div>
          <div className={getCardClass('green')}>
            <CampaignManager />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={getCardClass('blue')}>
            <HealthMetrics />
          </div>
          <div className={getCardClass('red')}>
            <BloodTypeInfo />
          </div>
        </div>

        <div className={getCardClass('green')}>
          <OrganDonationAwareness />
        </div>
      </div>
    </div>
  );
}

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Trophy, TrendingUp, Heart } from 'lucide-react';
import {
  getCardClass,
  getHeaderClass,
  getTitleClass,
  getContentClass,
  getBadgeClass,
} from '@/lib/theme';
import { cn } from '@/lib/utils';

interface AnalyticsData {
  totalDonations: number;
  yearlyDonations: number;
  impactScore: number;
  streak: number;
  monthlyTrend: {
    month: string;
    donations: number;
  }[];
  achievements: {
    id: string;
    title: string;
    description: string;
    unlocked: boolean;
  }[];
}

export default function DonationAnalytics() {
  const analyticsData: AnalyticsData = {
    totalDonations: 12,
    yearlyDonations: 4,
    impactScore: 85,
    streak: 3,
    monthlyTrend: [
      { month: 'Jan', donations: 2 },
      { month: 'Feb', donations: 1 },
      { month: 'Mar', donations: 0 },
      { month: 'Apr', donations: 1 },
      { month: 'May', donations: 0 },
      { month: 'Jun', donations: 0 },
    ],
    achievements: [
      {
        id: '1',
        title: 'First Donation',
        description: 'Completed your first blood donation',
        unlocked: true,
      },
      {
        id: '2',
        title: 'Regular Donor',
        description: 'Donated blood 5 times',
        unlocked: true,
      },
      {
        id: '3',
        title: 'Lifesaver',
        description: 'Donated blood 10 times',
        unlocked: false,
      },
    ],
  };

  const getImpactColor = (score: number) => {
    if (score >= 80) return getBadgeClass('green');
    if (score >= 50) return getBadgeClass('yellow');
    return getBadgeClass('red');
  };

  return (
    <Card className={getCardClass('blue')}>
      <CardHeader className={getHeaderClass('blue')}>
        <CardTitle className={getTitleClass('blue')}>
          <BarChart className="h-5 w-5" />
          Donation Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('blue')}>
        <div className="grid gap-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Donations
              </div>
              <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {analyticsData.totalDonations}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Yearly Donations
              </div>
              <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {analyticsData.yearlyDonations}
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Impact Score
              </div>
              <div className="mt-1">
                <Badge className={getImpactColor(analyticsData.impactScore)}>
                  {analyticsData.impactScore}
                </Badge>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Current Streak
              </div>
              <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {analyticsData.streak}
              </div>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Monthly Trend
            </h3>
            <div className="flex items-end gap-2 h-32">
              {analyticsData.monthlyTrend.map((data) => (
                <div key={data.month} className="flex-1">
                  <div
                    className="bg-blue-500 dark:bg-blue-400 rounded-t"
                    style={{
                      height: `${(data.donations / 2) * 100}%`,
                    }}
                  />
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {data.month}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Achievements
            </h3>
            <div className="space-y-3">
              {analyticsData.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={cn(
                    'p-3 rounded-lg border transition-colors duration-200',
                    achievement.unlocked
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Trophy
                      className={cn(
                        'h-5 w-5',
                        achievement.unlocked
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-400 dark:text-gray-500'
                      )}
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Award, Clock } from 'lucide-react';

interface ImpactStat {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}

export default function DonationImpact() {
  const impactStats: ImpactStat[] = [
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      label: 'Lives Impacted',
      value: '12',
      description: 'People helped through your donations',
    },
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      label: 'Total Donations',
      value: '4',
      description: 'Successful blood donations',
    },
    {
      icon: <Award className="h-6 w-6 text-red-500" />,
      label: 'Donation Streak',
      value: '3',
      description: 'Consecutive months of donation',
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      label: 'Time Donated',
      value: '8 hrs',
      description: 'Total time spent donating',
    },
  ];

  return (
    <Card className="overflow-hidden border-2 border-red-100 hover:border-red-200 transition-colors duration-300">
      <CardHeader className="bg-gradient-to-r from-red-50 to-white dark:from-red-950 dark:to-gray-900 pb-4">
        <CardTitle className="flex items-center gap-2 text-red-600">
          <Heart className="h-5 w-5" />
          Your Impact
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </h3>
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Impact Story
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your donations have helped save lives in emergency situations and
            supported patients undergoing surgeries. Each donation can save up to
            3 lives, and you've already made a significant impact in your
            community. Keep up the great work!
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass, getBadgeClass } from '@/lib/theme';
import Link from 'next/link';

interface Reward {
  id: string;
  name: string;
  points: number;
  status: 'available' | 'redeemed' | 'locked';
}

export default function RewardsSystem() {
  const rewards: Reward[] = [
    {
      id: '1',
      name: 'Free Movie Tickets',
      points: 500,
      status: 'available',
    },
    {
      id: '2',
      name: 'Coffee Shop Discount',
      points: 200,
      status: 'redeemed',
    },
    {
      id: '3',
      name: 'Donor Recognition Badge',
      points: 1000,
      status: 'locked',
    },
  ];

  const getStatusBadge = (status: Reward['status']) => {
    switch (status) {
      case 'available':
        return getBadgeClass('green');
      case 'redeemed':
        return getBadgeClass('blue');
      case 'locked':
        return getBadgeClass('yellow');
      default:
        return '';
    }
  };

  return (
    <Card className={getCardClass('blue')}>
      <CardHeader className={getHeaderClass('blue')}>
        <CardTitle className={getTitleClass('blue')}>
          <Gift className="h-5 w-5" />
          Rewards System
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('blue')}>
        <div className="space-y-6">
          {/* Points Summary */}
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">2,500</div>
            <p className="text-gray-600 dark:text-gray-400">Available Points</p>
          </div>

          {/* Rewards List */}
          <div className="space-y-3">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {reward.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {reward.points} points
                    </p>
                  </div>
                </div>
                <Badge className={getStatusBadge(reward.status)}>
                  {reward.status}
                </Badge>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Link href="/dashboard/donor/rewards" className="block">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              View All Rewards
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

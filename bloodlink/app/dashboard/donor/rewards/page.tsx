'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Gift, History, Star, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass, getBadgeClass } from '@/lib/theme';
import Link from 'next/link';

interface Reward {
  id: string;
  name: string;
  description: string;
  points: number;
  image: string;
  category: 'discount' | 'gift' | 'recognition';
}

interface RedemptionHistory {
  id: string;
  reward: Reward;
  date: string;
  status: 'pending' | 'completed' | 'expired';
}

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'history'>('catalog');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const rewards: Reward[] = [
    {
      id: '1',
      name: 'Free Movie Tickets',
      description: '2 movie tickets to any participating theater',
      points: 500,
      image: '/rewards/movie.jpg',
      category: 'gift',
    },
    {
      id: '2',
      name: 'Coffee Shop Discount',
      description: '20% off at participating coffee shops',
      points: 200,
      image: '/rewards/coffee.jpg',
      category: 'discount',
    },
    {
      id: '3',
      name: 'Donor Recognition Badge',
      description: 'Special badge for your donor profile',
      points: 1000,
      image: '/rewards/badge.jpg',
      category: 'recognition',
    },
  ];

  const redemptionHistory: RedemptionHistory[] = [
    {
      id: '1',
      reward: rewards[0],
      date: '2024-03-15',
      status: 'completed',
    },
    {
      id: '2',
      reward: rewards[1],
      date: '2024-03-10',
      status: 'pending',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Rewards' },
    { id: 'discount', name: 'Discounts' },
    { id: 'gift', name: 'Gifts' },
    { id: 'recognition', name: 'Recognition' },
  ];

  const handleRedeem = (reward: Reward) => {
    // TODO: Implement reward redemption
    console.log('Redeeming reward:', reward);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/dashboard/donor" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Points Summary */}
          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Star className="h-5 w-5" />
                Your Points
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">2,500</div>
                <p className="text-gray-600 dark:text-gray-400">Available Points</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Earned</span>
                  <span className="font-medium">5,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Spent</span>
                  <span className="font-medium">2,500</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex space-x-4 border-b">
              <button
                className={cn(
                  'pb-2 px-4 font-medium',
                  activeTab === 'catalog'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                )}
                onClick={() => setActiveTab('catalog')}
              >
                <Gift className="h-4 w-4 inline mr-2" />
                Reward Catalog
              </button>
              <button
                className={cn(
                  'pb-2 px-4 font-medium',
                  activeTab === 'history'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                )}
                onClick={() => setActiveTab('history')}
              >
                <History className="h-4 w-4 inline mr-2" />
                Redemption History
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Content */}
            {activeTab === 'catalog' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewards
                  .filter(
                    (reward) =>
                      selectedCategory === 'all' || reward.category === selectedCategory
                  )
                  .map((reward) => (
                    <Card key={reward.id} className="overflow-hidden">
                      <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary">
                            {reward.points} points
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold">{reward.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {reward.description}
                        </p>
                        <Button
                          className="w-full mt-4"
                          onClick={() => handleRedeem(reward)}
                        >
                          Redeem
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {redemptionHistory.map((redemption) => (
                  <Card key={redemption.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{redemption.reward.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Redeemed on {redemption.date}
                          </p>
                        </div>
                        <Badge
                          className={cn(
                            redemption.status === 'completed' && getBadgeClass('green'),
                            redemption.status === 'pending' && getBadgeClass('yellow'),
                            redemption.status === 'expired' && getBadgeClass('red')
                          )}
                        >
                          {redemption.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
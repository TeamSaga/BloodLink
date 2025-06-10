'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass, getBadgeClass } from '@/lib/theme';
import Link from 'next/link';

interface Campaign {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  participants: number;
  targetDonors: number;
}

export default function CampaignManager() {
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'City-Wide Blood Drive',
      date: '2024-04-15',
      location: 'Various Locations',
      status: 'upcoming',
      participants: 45,
      targetDonors: 100,
    },
    {
      id: '2',
      title: 'Emergency Response Campaign',
      date: '2024-03-20',
      location: 'Central Hospital',
      status: 'ongoing',
      participants: 78,
      targetDonors: 150,
    },
  ];

  const getStatusBadge = (status: Campaign['status']) => {
    switch (status) {
      case 'upcoming':
        return getBadgeClass('blue');
      case 'ongoing':
        return getBadgeClass('green');
      case 'completed':
        return getBadgeClass('yellow');
      default:
        return '';
    }
  };

  return (
    <Card className={getCardClass('red')}>
      <CardHeader className={getHeaderClass('red')}>
        <CardTitle className={getTitleClass('red')}>
          <Users className="h-5 w-5" />
          Active Campaigns
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('red')}>
        <div className="space-y-6">
          {/* Campaigns List */}
          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {campaign.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {campaign.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      {campaign.location}
                    </div>
                  </div>
                  <Badge className={getStatusBadge(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {campaign.participants} / {campaign.targetDonors} donors
                  </div>
                  {campaign.status !== 'completed' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      Participate
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <Link href="/dashboard/donor/campaigns" className="block">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              View All Campaigns
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
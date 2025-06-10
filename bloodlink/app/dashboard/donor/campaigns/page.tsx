'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass, getBadgeClass } from '@/lib/theme';
import Link from 'next/link';

interface Campaign {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  participants: number;
  targetDonors: number;
  bloodTypes: string[];
}

export default function CampaignsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'City-Wide Blood Drive',
      description: 'Join us for our annual city-wide blood drive. Multiple locations available.',
      date: '2024-04-15',
      location: 'Various Locations',
      organizer: 'City Health Department',
      status: 'upcoming',
      participants: 45,
      targetDonors: 100,
      bloodTypes: ['A+', 'B+', 'O+', 'AB+'],
    },
    {
      id: '2',
      title: 'Emergency Response Campaign',
      description: 'Urgent need for blood donations following recent incidents.',
      date: '2024-03-20',
      location: 'Central Hospital',
      organizer: 'Emergency Services',
      status: 'ongoing',
      participants: 78,
      targetDonors: 150,
      bloodTypes: ['O-', 'A-', 'B-'],
    },
    {
      id: '3',
      title: 'Community Health Fair',
      description: 'Blood donation drive as part of the annual health fair.',
      date: '2024-03-10',
      location: 'Community Center',
      organizer: 'Local Health Initiative',
      status: 'completed',
      participants: 120,
      targetDonors: 100,
      bloodTypes: ['All Types'],
    },
  ];

  const statuses = [
    { id: 'all', name: 'All Campaigns' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'ongoing', name: 'Ongoing' },
    { id: 'completed', name: 'Completed' },
  ];

  const handleParticipate = (campaign: Campaign) => {
    // TODO: Implement campaign participation
    console.log('Participating in campaign:', campaign);
  };

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
    <div className="container mx-auto p-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/dashboard/donor" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="space-y-6">
          {/* Status Filter */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {statuses.map((status) => (
              <Button
                key={status.id}
                variant={selectedStatus === status.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedStatus(status.id)}
              >
                {status.name}
              </Button>
            ))}
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns
              .filter(
                (campaign) =>
                  selectedStatus === 'all' || campaign.status === selectedStatus
              )
              .map((campaign) => (
                <Card key={campaign.id} className={getCardClass('red')}>
                  <CardHeader className={getHeaderClass('red')}>
                    <div className="flex items-start justify-between">
                      <CardTitle className={getTitleClass('red')}>
                        {campaign.title}
                      </CardTitle>
                      <Badge className={getStatusBadge(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className={getContentClass('red')}>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {campaign.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        {campaign.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        {campaign.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        {campaign.organizer}
                      </div>
                      <div className="flex items-center text-sm">
                        <Heart className="h-4 w-4 mr-2 text-gray-500" />
                        {campaign.participants} / {campaign.targetDonors} donors
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        Needed: {campaign.bloodTypes.join(', ')}
                      </div>
                    </div>
                    {campaign.status !== 'completed' && (
                      <Button
                        className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => handleParticipate(campaign)}
                      >
                        Participate
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
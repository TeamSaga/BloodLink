'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

interface DonationHistory {
  date: Date;
  location: string;
  type: string;
  status: 'completed' | 'scheduled' | 'cancelled';
}

export default function DonationTracker() {
  const [date, setDate] = useState<Date>();
  const [isScheduling, setIsScheduling] = useState(false);
  const [donationHistory, setDonationHistory] = useState<DonationHistory[]>([
    {
      date: new Date('2024-03-15'),
      location: 'City Hospital',
      type: 'Whole Blood',
      status: 'completed',
    },
    {
      date: new Date('2024-02-15'),
      location: 'Central Blood Bank',
      type: 'Whole Blood',
      status: 'completed',
    },
  ]);

  const nextEligibleDate = new Date();
  nextEligibleDate.setDate(nextEligibleDate.getDate() + 56); // 8 weeks from now

  const handleScheduleDonation = async () => {
    if (!date) return;
    
    setIsScheduling(true);
    try {
      // TODO: Implement API call to schedule donation
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      
      setDonationHistory(prev => [
        {
          date: date,
          location: 'City Hospital', // This would come from the API
          type: 'Whole Blood',
          status: 'scheduled',
        },
        ...prev,
      ]);
      
      setDate(undefined);
    } catch (error) {
      console.error('Failed to schedule donation:', error);
    } finally {
      setIsScheduling(false);
    }
  };

  const isDateValid = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= nextEligibleDate && date.getDay() !== 0; // Prevent scheduling on Sundays
  };

  return (
    <Card className={getCardClass('red')}>
      <CardHeader className={getHeaderClass('red')}>
        <CardTitle className={getTitleClass('red')}>
          <Clock className="h-5 w-5" />
          Donation Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('red')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Next Donation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Schedule Next Donation
            </h3>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Next eligible date:
                </p>
                <p className="text-lg font-semibold text-red-600">
                  {format(nextEligibleDate, 'MMMM d, yyyy')}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Note: Donations are not scheduled on Sundays
                </p>
              </div>
              <Link href="/dashboard/donor/schedule" className="w-full">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Schedule Donation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Donation History */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Donation History
            </h3>
            <div className="space-y-3">
              {donationHistory.map((donation, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {format(donation.date, 'MMMM d, yyyy')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        {donation.location}
                      </div>
                    </div>
                    <Badge
                      variant={donation.status === 'completed' ? 'default' : 'secondary'}
                      className="group-hover:scale-105 transition-transform duration-200"
                    >
                      {donation.status}
                    </Badge>
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
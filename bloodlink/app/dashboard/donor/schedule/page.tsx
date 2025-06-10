'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export default function ScheduleDonationPage() {
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();
  const [selectedLocation, setSelectedLocation] = useState<string>();

  const locations = [
    { id: '1', name: 'City Hospital', address: '123 Medical Center Dr.' },
    { id: '2', name: 'Central Blood Bank', address: '456 Health Ave.' },
    { id: '3', name: 'Community Clinic', address: '789 Wellness St.' },
  ];

  const timeSlots: TimeSlot[] = [
    { id: '1', time: '09:00 AM', available: true },
    { id: '2', time: '10:00 AM', available: true },
    { id: '3', time: '11:00 AM', available: false },
    { id: '4', time: '01:00 PM', available: true },
    { id: '5', time: '02:00 PM', available: true },
    { id: '6', time: '03:00 PM', available: false },
  ];

  const handleSchedule = async () => {
    if (!date || !selectedTimeSlot || !selectedLocation) return;
    
    // TODO: Implement API call to schedule donation
    console.log('Scheduling donation:', {
      date,
      timeSlot: selectedTimeSlot,
      location: selectedLocation,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/dashboard/donor" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        <Card className={getCardClass('red')}>
          <CardHeader className={getHeaderClass('red')}>
            <CardTitle className={getTitleClass('red')}>
              <CalendarIcon className="h-5 w-5" />
              Schedule Blood Donation
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('red')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Select Date
                </h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Select Time Slot
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.id}
                      variant={selectedTimeSlot === slot.id ? 'default' : 'outline'}
                      className={cn(
                        'justify-start',
                        !slot.available && 'opacity-50 cursor-not-allowed'
                      )}
                      disabled={!slot.available}
                      onClick={() => setSelectedTimeSlot(slot.id)}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Location Selection */}
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Select Location
                </h3>
                <Select onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location.id} value={location.id}>
                        <div className="flex flex-col">
                          <span>{location.name}</span>
                          <span className="text-sm text-gray-500">{location.address}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Information */}
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Input id="bloodType" value="O+" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastDonation">Last Donation</Label>
                    <Input id="lastDonation" value="March 15, 2024" disabled />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleSchedule}
                  disabled={!date || !selectedTimeSlot || !selectedLocation}
                >
                  Schedule Donation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
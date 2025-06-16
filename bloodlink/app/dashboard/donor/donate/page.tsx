'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  AlertCircle,
  CheckCircle2,
  Info,
  Droplet,
  Heart,
  Shield,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface DonationCenter {
  id: string;
  name: string;
  address: string;
  distance: string;
  nextAvailable: string;
  bloodTypesNeeded: string[];
}

interface EligibilityCheck {
  lastDonation: Date | null;
  isEligible: boolean;
  nextEligibleDate: Date | null;
  healthStatus: 'good' | 'warning' | 'not-eligible';
  requirements: {
    met: string[];
    notMet: string[];
  };
}

export default function DonateNow() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCenter, setSelectedCenter] = useState<string>();
  const [eligibility, setEligibility] = useState<EligibilityCheck>({
    lastDonation: new Date('2024-01-15'),
    isEligible: true,
    nextEligibleDate: new Date('2024-04-15'),
    healthStatus: 'good',
    requirements: {
      met: [
        'Age requirement (18-65 years)',
        'Weight requirement (50kg+)',
        'No recent surgeries',
        'No current medications',
        'No recent tattoos'
      ],
      notMet: []
    }
  });

  const nearbyCenters: DonationCenter[] = [
    {
      id: '1',
      name: 'City Blood Bank',
      address: '123 Main Street, City Center',
      distance: '2.5 km',
      nextAvailable: 'Tomorrow, 9:00 AM',
      bloodTypesNeeded: ['A+', 'O-', 'B+']
    },
    {
      id: '2',
      name: 'Community Hospital',
      address: '456 Health Avenue, Medical District',
      distance: '4.8 km',
      nextAvailable: 'Today, 2:00 PM',
      bloodTypesNeeded: ['A+', 'AB+', 'O+']
    },
    {
      id: '3',
      name: 'Red Cross Center',
      address: '789 Care Road, Downtown',
      distance: '6.2 km',
      nextAvailable: 'Tomorrow, 10:30 AM',
      bloodTypesNeeded: ['A+', 'B-', 'O-']
    }
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedCenter) {
      // TODO: Implement scheduling logic
      console.log('Scheduling donation:', { date: selectedDate, center: selectedCenter });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Donate Now
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Droplet className="h-5 w-5 text-red-500 animate-pulse" />
              <span className="font-semibold">Blood Type: A+</span>
            </div>
          </div>
        </div>

        {/* Eligibility Status */}
        <Card className={getCardClass('green')}>
          <CardHeader className={getHeaderClass('green')}>
            <CardTitle className={getTitleClass('green')}>
              <Shield className="h-5 w-5" />
              Donation Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('green')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">You are eligible to donate!</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Last donation: {eligibility.lastDonation ? format(eligibility.lastDonation, 'PPP') : 'Never'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Next eligible date: {eligibility.nextEligibleDate ? format(eligibility.nextEligibleDate, 'PPP') : 'Now'}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Requirements Met:</h4>
                <ul className="space-y-1">
                  {eligibility.requirements.met.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule Donation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <CalendarIcon className="h-5 w-5" />
                Schedule Your Donation
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Donation Center</h3>
                  <div className="space-y-3">
                    {nearbyCenters.map((center) => (
                      <div
                        key={center.id}
                        className={cn(
                          "p-4 rounded-lg border cursor-pointer transition-all duration-200",
                          selectedCenter === center.id
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                        )}
                        onClick={() => setSelectedCenter(center.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{center.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {center.address}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                              <Clock className="h-4 w-4" />
                              Next available: {center.nextAvailable}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <Badge variant="outline" className="mb-2">
                              {center.distance}
                            </Badge>
                            <div className="flex gap-1">
                              {center.bloodTypesNeeded.map((type) => (
                                <Badge key={type} variant="secondary" className="text-xs">
                                  {type}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSchedule}
                  disabled={!selectedDate || !selectedCenter}
                >
                  Schedule Donation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <Info className="h-5 w-5" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Before Donation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Get a good night's sleep before donation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Eat a healthy meal 3-4 hours before donation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Drink plenty of water (at least 500ml)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Bring a valid ID and donor card if available</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">After Donation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Rest for at least 15 minutes after donation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Drink extra fluids for the next 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Avoid strenuous exercise for 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>Keep the bandage on for at least 4 hours</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100">
                  <h4 className="font-semibold text-red-600 mb-2">Emergency Contact</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    If you experience any adverse reactions after donation, please contact:
                  </p>
                  <p className="text-sm font-medium mt-2">Emergency Hotline: 911</p>
                  <p className="text-sm font-medium">Blood Bank Support: (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 
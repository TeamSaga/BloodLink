'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Info } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

export default function WhatIsOrganDonation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <Heart className="h-5 w-5" />
            What is Organ Donation?
          </CardTitle>
        </CardHeader>
        <CardContent className={getContentClass('red')}>
          <div className="space-y-6">
            {/* Back Button */}
            <Link href="/organ-donation">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Overview
              </Button>
            </Link>

            {/* Main Content */}
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Understanding Organ Donation
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                Organ donation is a life-saving medical procedure where healthy organs and tissues from one person are transplanted into another person who needs them. This selfless act can save lives and improve the quality of life for recipients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    The Impact
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>One donor can save up to 8 lives</li>
                    <li>Can improve the quality of life for many more through tissue donation</li>
                    <li>Helps reduce the waiting list for organ transplants</li>
                    <li>Provides hope to patients and their families</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Key Facts
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Over 100,000 people are waiting for organ transplants</li>
                    <li>Every 9 minutes, someone is added to the waiting list</li>
                    <li>17 people die each day waiting for an organ</li>
                    <li>Anyone can be a potential donor regardless of age or medical history</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  How It Works
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    When a person becomes an organ donor, they are making a commitment to help others after their death. The process involves:
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Registration as an organ donor</li>
                    <li>Medical evaluation at the time of death</li>
                    <li>Matching with potential recipients</li>
                    <li>Organ recovery and transplantation</li>
                  </ol>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Ready to Make a Difference?
                </h3>
                <div className="flex justify-center gap-4">
                  <Link href="/register-donor">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Register as Donor
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
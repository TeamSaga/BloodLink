'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

export default function TypesOfDonation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <Heart className="h-5 w-5" />
            Types of Organ Donation
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
                Understanding Different Types of Donation
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Living Donation */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Living Donation
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      Living donation occurs when a person donates an organ or part of an organ while still alive. This type of donation is possible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Kidney (most common)</li>
                      <li>Liver (partial)</li>
                      <li>Lung (partial)</li>
                      <li>Intestine (partial)</li>
                      <li>Pancreas (partial)</li>
                    </ul>
                    <p className="mt-4">
                      Living donors can be:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Family members</li>
                      <li>Friends</li>
                      <li>Altruistic donors (strangers)</li>
                    </ul>
                  </div>
                </div>

                {/* Deceased Donation */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Deceased Donation
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      Deceased donation occurs after a person has been declared brain dead. This type of donation can include:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Heart</li>
                      <li>Lungs</li>
                      <li>Liver</li>
                      <li>Kidneys</li>
                      <li>Pancreas</li>
                      <li>Intestines</li>
                      <li>Tissues (corneas, skin, bone, etc.)</li>
                    </ul>
                    <p className="mt-4">
                      Deceased donation requires:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Brain death declaration</li>
                      <li>Family consent</li>
                      <li>Medical evaluation</li>
                      <li>Quick organ recovery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Important Considerations
                </h3>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Living donors undergo thorough medical and psychological evaluation</li>
                    <li>Deceased donors must meet specific medical criteria</li>
                    <li>Both types of donation are strictly regulated</li>
                    <li>Donors and recipients are matched based on medical compatibility</li>
                    <li>All donations are voluntary and confidential</li>
                  </ul>
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
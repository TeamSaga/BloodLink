'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

export default function DonationProcess() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <Heart className="h-5 w-5" />
            The Donation Process
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
                How the Organ Donation Process Works
              </h2>
              <ol className="list-decimal list-inside space-y-4 mt-6 text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Registration:</strong> Individuals register as organ donors, either online or when obtaining a driver's license.
                </li>
                <li>
                  <strong>Medical Evaluation:</strong> At the time of death, medical professionals evaluate the donor's organs and tissues for suitability.
                </li>
                <li>
                  <strong>Consent:</strong> Family consent is obtained if required by law or if the donor's wishes are not documented.
                </li>
                <li>
                  <strong>Matching:</strong> The donor's organs are matched with recipients based on medical criteria such as blood type, size, and urgency.
                </li>
                <li>
                  <strong>Organ Recovery:</strong> Organs and tissues are surgically removed in a sterile environment.
                </li>
                <li>
                  <strong>Transplantation:</strong> The organs are transported quickly to recipients and transplanted by specialized surgeons.
                </li>
                <li>
                  <strong>Follow-Up:</strong> Recipients receive ongoing medical care and monitoring after transplantation.
                </li>
              </ol>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Key Points
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>The process is highly regulated and ensures ethical standards are met</li>
                  <li>All major religions support organ donation</li>
                  <li>Donor families are supported throughout the process</li>
                  <li>Confidentiality and respect for the donor are maintained at all times</li>
                </ul>
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
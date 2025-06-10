'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

export default function MythsFacts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <Heart className="h-5 w-5" />
            Myths and Facts
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
                Myths and Facts about Organ Donation
              </h2>
              <div className="mt-6 space-y-6 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold">Myth: Doctors won't try to save my life if I'm a donor.</h3>
                  <p><strong>Fact:</strong> The medical team's first priority is always to save your life. Organ donation is only considered after all lifesaving efforts have failed.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Myth: I'm too old or unhealthy to donate.</h3>
                  <p><strong>Fact:</strong> There is no age limit for organ donation. Medical professionals will determine if your organs are suitable at the time of death.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Myth: My religion doesn't support organ donation.</h3>
                  <p><strong>Fact:</strong> Most major religions support organ donation as a final act of compassion and generosity.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Myth: My family will be charged for donating my organs.</h3>
                  <p><strong>Fact:</strong> There is no cost to the donor's family for organ or tissue donation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Myth: Organ donation will disfigure my body.</h3>
                  <p><strong>Fact:</strong> Donors are treated with respect and dignity. Open-casket funerals are still possible after donation.</p>
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
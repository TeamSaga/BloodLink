'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

export default function DonatableOrgans() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <Heart className="h-5 w-5" />
            Organs That Can Be Donated
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
                Understanding Donatable Organs and Tissues
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Solid Organs */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Solid Organs
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Heart</h4>
                      <p>Used for patients with end-stage heart failure</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Lungs</h4>
                      <p>Can be donated as a pair or individually</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Liver</h4>
                      <p>Can be split for two recipients</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Kidneys</h4>
                      <p>Most commonly donated organ</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Pancreas</h4>
                      <p>Helps treat diabetes</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Intestines</h4>
                      <p>Used for patients with intestinal failure</p>
                    </div>
                  </div>
                </div>

                {/* Tissues */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Tissues
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Corneas</h4>
                      <p>Restore sight to blind patients</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Skin</h4>
                      <p>Used for burn victims</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Bone</h4>
                      <p>Helps with orthopedic procedures</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Heart Valves</h4>
                      <p>Replace damaged heart valves</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Tendons</h4>
                      <p>Used in sports medicine</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Veins</h4>
                      <p>Used in vascular surgery</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Important Facts
                </h3>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>One donor can save up to 8 lives through organ donation</li>
                    <li>Tissue donation can help more than 75 people</li>
                    <li>Organs must be transplanted within hours of donation</li>
                    <li>Tissues can be preserved for longer periods</li>
                    <li>Age is not a barrier to donation</li>
                    <li>Medical professionals evaluate each potential donation</li>
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
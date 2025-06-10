'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Info, ChevronRight, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  getCardClass,
  getHeaderClass,
  getTitleClass,
  getContentClass,
} from '@/lib/theme';
import Link from 'next/link';

interface AwarenessInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'read' | 'unread';
  link: string;
}

export default function OrganDonationAwareness() {
  const [awarenessInfo] = useState<AwarenessInfo[]>([
    {
      id: '1',
      title: 'What is Organ Donation?',
      description: 'Learn about the process and impact of organ donation on saving lives.',
      icon: <Heart className="h-5 w-5 text-red-500" />,
      status: 'read',
      link: '/organ-donation/what-is-organ-donation'
    },
    {
      id: '2',
      title: 'Myths and Facts',
      description: 'Debunk common misconceptions about organ donation.',
      icon: <Info className="h-5 w-5 text-blue-500" />,
      status: 'unread',
      link: '/organ-donation/myths-facts'
    },
    {
      id: '3',
      title: 'Registration Process',
      description: 'Step-by-step guide to register as an organ donor.',
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      status: 'unread',
      link: '/organ-donation/process'
    },
  ]);

  return (
    <Card className={getCardClass('green')}>
      <CardHeader className={getHeaderClass('green')}>
        <CardTitle className={getTitleClass('green')}>
          <Heart className="h-5 w-5" />
          Organ Donation Awareness
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('green')}>
        <div className="space-y-6">
          {/* Awareness Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {awarenessInfo.map((info) => (
              <div
                key={info.id}
                className="group p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      'p-2 rounded-full',
                      info.status === 'read'
                        ? 'bg-green-100 dark:bg-green-900/40'
                        : 'bg-gray-100 dark:bg-gray-700'
                    )}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {info.title}
                      </h3>
                      {info.status === 'unread' && (
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {info.description}
                    </p>
                  </div>
                </div>
                <Link href={info.link} passHref>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 group-hover:bg-green-50 dark:group-hover:bg-green-900/20"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Registration CTA */}
          <div className="mt-8 p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Ready to Make a Difference?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Register as an organ donor and give the gift of life.
                </p>
              </div>
              <Link href="/register-donor" passHref>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplet, Heart, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  getCardClass,
  getHeaderClass,
  getTitleClass,
  getContentClass,
  getBadgeClass,
} from '@/lib/theme';

interface BloodTypeCompatibility {
  type: string;
  canReceiveFrom: string[];
  canDonateTo: string[];
  rarity: 'common' | 'uncommon' | 'rare';
}

export default function BloodTypeInfo() {
  const bloodType: BloodTypeCompatibility = {
    type: 'O+',
    canReceiveFrom: ['O+', 'O-'],
    canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
    rarity: 'common',
  };

  const rarityColors = {
    common: getBadgeClass('green'),
    uncommon: getBadgeClass('yellow'),
    rare: getBadgeClass('red'),
  };

  return (
    <Card className={getCardClass('red')}>
      <CardHeader className={getHeaderClass('red')}>
        <CardTitle className={getTitleClass('red')}>
          <Droplet className="h-5 w-5" />
          Blood Type Information
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('red')}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {bloodType.type}
              </h3>
              <Badge className={rarityColors[bloodType.rarity]}>
                {bloodType.rarity.charAt(0).toUpperCase() + bloodType.rarity.slice(1)}
              </Badge>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your blood type is {bloodType.type}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Can Receive From
              </h4>
              <div className="flex flex-wrap gap-2">
                {bloodType.canReceiveFrom.map((type) => (
                  <Badge
                    key={type}
                    variant="outline"
                    className="bg-white dark:bg-gray-800"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                <Droplet className="h-4 w-4 text-red-500" />
                Can Donate To
              </h4>
              <div className="flex flex-wrap gap-2">
                {bloodType.canDonateTo.map((type) => (
                  <Badge
                    key={type}
                    variant="outline"
                    className="bg-white dark:bg-gray-800"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Universal Donor Information
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              O- blood type is considered the universal donor as it can be given to
              patients of any blood type. However, O- donors can only receive O-
              blood. Your blood type ({bloodType.type}) is compatible with{' '}
              {bloodType.canDonateTo.length} blood types.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
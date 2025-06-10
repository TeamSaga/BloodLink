'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, Activity, Droplet, Scale } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  getCardClass,
  getHeaderClass,
  getTitleClass,
  getContentClass,
  getBadgeClass,
} from '@/lib/theme';

interface HealthMetric {
  name: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  status: 'good' | 'warning' | 'critical';
  minValue: number;
  maxValue: number;
}

export default function HealthMetrics() {
  const metrics: HealthMetric[] = [
    {
      name: 'Hemoglobin',
      value: 14.2,
      unit: 'g/dL',
      icon: <Droplet className="h-5 w-5 text-red-500" />,
      status: 'good',
      minValue: 12.5,
      maxValue: 17.5,
    },
    {
      name: 'Blood Pressure',
      value: 120,
      unit: 'mmHg',
      icon: <Heart className="h-5 w-5 text-red-500" />,
      status: 'good',
      minValue: 90,
      maxValue: 160,
    },
    {
      name: 'Heart Rate',
      value: 72,
      unit: 'bpm',
      icon: <Activity className="h-5 w-5 text-red-500" />,
      status: 'good',
      minValue: 60,
      maxValue: 100,
    },
    {
      name: 'Weight',
      value: 65,
      unit: 'kg',
      icon: <Scale className="h-5 w-5 text-red-500" />,
      status: 'good',
      minValue: 50,
      maxValue: 150,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getProgressStyles = (metric: HealthMetric) => {
    const percentage = ((metric.value - metric.minValue) / (metric.maxValue - metric.minValue)) * 100;
    let status: 'good' | 'warning' | 'critical' = 'good';
    
    if (percentage < 20 || percentage > 80) {
      status = 'critical';
    } else if (percentage < 40 || percentage > 60) {
      status = 'warning';
    }

    return cn(
      "h-2",
      status === 'good' ? 'bg-green-500' : status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
    );
  };

  const getStatusBadge = (metric: HealthMetric) => {
    const percentage = ((metric.value - metric.minValue) / (metric.maxValue - metric.minValue)) * 100;
    let status: 'good' | 'warning' | 'critical' = 'good';
    
    if (percentage < 20 || percentage > 80) {
      status = 'critical';
    } else if (percentage < 40 || percentage > 60) {
      status = 'warning';
    }

    const variants = {
      good: getBadgeClass('green'),
      warning: getBadgeClass('yellow'),
      critical: getBadgeClass('red'),
    };

    return (
      <Badge className={variants[status]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <Card className={getCardClass('blue')}>
      <CardHeader className={getHeaderClass('blue')}>
        <CardTitle className={getTitleClass('blue')}>
          <Activity className="h-5 w-5" />
          Health Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className={getContentClass('blue')}>
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {metric.name}
                  </span>
                  {getStatusBadge(metric)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {metric.unit}
                  </span>
                </div>
              </div>
              <Progress
                value={((metric.value - metric.minValue) / (metric.maxValue - metric.minValue)) * 100}
                className={getProgressStyles(metric)}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{metric.minValue} {metric.unit}</span>
                <span>{metric.maxValue} {metric.unit}</span>
              </div>
            </div>
          ))}
          
          <div className="mt-6 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Donation Requirements
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Minimum weight: 50 kg
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Hemoglobin level: 12.5 g/dL or higher
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Blood pressure: 90/60 to 160/100 mmHg
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Temperature: 37.5°C or less
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 
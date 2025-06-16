'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Heart, 
  Droplet, 
  Thermometer, 
  Scale, 
  Clock,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Info,
  Calendar,
  ChevronRight,
  Plus,
  LineChart,
  BarChart,
  PieChart,
  CheckCircle2
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface VitalSigns {
  bloodPressure: {
    systolic: number;
    diastolic: number;
    status: 'normal' | 'elevated' | 'high';
    lastUpdated: string;
  };
  heartRate: {
    value: number;
    status: 'normal' | 'elevated' | 'high';
    lastUpdated: string;
  };
  temperature: {
    value: number;
    status: 'normal' | 'elevated' | 'high';
    lastUpdated: string;
  };
  weight: {
    value: number;
    unit: 'kg';
    lastUpdated: string;
  };
}

interface HealthMetrics {
  hemoglobin: {
    value: number;
    unit: 'g/dL';
    status: 'normal' | 'low' | 'high';
    lastUpdated: string;
  };
  ironLevel: {
    value: number;
    unit: 'µg/dL';
    status: 'normal' | 'low' | 'high';
    lastUpdated: string;
  };
  hydration: {
    value: number;
    unit: '%';
    status: 'normal' | 'low' | 'high';
    lastUpdated: string;
  };
}

interface HealthTrend {
  date: string;
  hemoglobin: number;
  ironLevel: number;
  hydration: number;
}

export default function HealthMetrics() {
  const [vitals, setVitals] = useState<VitalSigns>({
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
      status: 'normal',
      lastUpdated: '2024-03-20'
    },
    heartRate: {
      value: 72,
      status: 'normal',
      lastUpdated: '2024-03-20'
    },
    temperature: {
      value: 37.0,
      status: 'normal',
      lastUpdated: '2024-03-20'
    },
    weight: {
      value: 70,
      unit: 'kg',
      lastUpdated: '2024-03-20'
    }
  });

  const [metrics, setMetrics] = useState<HealthMetrics>({
    hemoglobin: {
      value: 14.5,
      unit: 'g/dL',
      status: 'normal',
      lastUpdated: '2024-03-20'
    },
    ironLevel: {
      value: 85,
      unit: 'µg/dL',
      status: 'normal',
      lastUpdated: '2024-03-20'
    },
    hydration: {
      value: 65,
      unit: '%',
      status: 'normal',
      lastUpdated: '2024-03-20'
    }
  });

  const [trends] = useState<HealthTrend[]>([
    { date: '2024-01', hemoglobin: 14.2, ironLevel: 82, hydration: 68 },
    { date: '2024-02', hemoglobin: 14.4, ironLevel: 84, hydration: 66 },
    { date: '2024-03', hemoglobin: 14.5, ironLevel: 85, hydration: 65 }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'text-green-500';
      case 'elevated':
        return 'text-yellow-500';
      case 'high':
      case 'low':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'elevated':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'high':
      case 'low':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Health Metrics
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Reading
            </Button>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <Heart className="h-5 w-5" />
                Blood Pressure
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">
                    {vitals.bloodPressure.systolic}/{vitals.bloodPressure.diastolic}
                  </p>
                  <span className="text-sm text-gray-500">mmHg</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(vitals.bloodPressure.status)}
                  <span className={getStatusColor(vitals.bloodPressure.status)}>
                    {vitals.bloodPressure.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(vitals.bloodPressure.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Activity className="h-5 w-5" />
                Heart Rate
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{vitals.heartRate.value}</p>
                  <span className="text-sm text-gray-500">bpm</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(vitals.heartRate.status)}
                  <span className={getStatusColor(vitals.heartRate.status)}>
                    {vitals.heartRate.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(vitals.heartRate.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('green')}>
            <CardHeader className={getHeaderClass('green')}>
              <CardTitle className={getTitleClass('green')}>
                <Thermometer className="h-5 w-5" />
                Temperature
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('green')}>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{vitals.temperature.value}</p>
                  <span className="text-sm text-gray-500">°C</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(vitals.temperature.status)}
                  <span className={getStatusColor(vitals.temperature.status)}>
                    {vitals.temperature.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(vitals.temperature.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('purple')}>
            <CardHeader className={getHeaderClass('purple')}>
              <CardTitle className={getTitleClass('purple')}>
                <Scale className="h-5 w-5" />
                Weight
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('purple')}>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{vitals.weight.value}</p>
                  <span className="text-sm text-gray-500">{vitals.weight.unit}</span>
                </div>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(vitals.weight.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <Droplet className="h-5 w-5" />
                Hemoglobin
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{metrics.hemoglobin.value}</p>
                  <span className="text-sm text-gray-500">{metrics.hemoglobin.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(metrics.hemoglobin.status)}
                  <span className={getStatusColor(metrics.hemoglobin.status)}>
                    {metrics.hemoglobin.status}
                  </span>
                </div>
                <Progress 
                  value={((metrics.hemoglobin.value - 12) / (16 - 12)) * 100} 
                  className="h-2 bg-red-100" 
                />
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(metrics.hemoglobin.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Activity className="h-5 w-5" />
                Iron Level
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{metrics.ironLevel.value}</p>
                  <span className="text-sm text-gray-500">{metrics.ironLevel.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(metrics.ironLevel.status)}
                  <span className={getStatusColor(metrics.ironLevel.status)}>
                    {metrics.ironLevel.status}
                  </span>
                </div>
                <Progress 
                  value={((metrics.ironLevel.value - 60) / (100 - 60)) * 100} 
                  className="h-2 bg-blue-100" 
                />
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(metrics.ironLevel.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('green')}>
            <CardHeader className={getHeaderClass('green')}>
              <CardTitle className={getTitleClass('green')}>
                <Droplet className="h-5 w-5" />
                Hydration
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('green')}>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">{metrics.hydration.value}</p>
                  <span className="text-sm text-gray-500">{metrics.hydration.unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(metrics.hydration.status)}
                  <span className={getStatusColor(metrics.hydration.status)}>
                    {metrics.hydration.status}
                  </span>
                </div>
                <Progress 
                  value={metrics.hydration.value} 
                  className="h-2 bg-green-100" 
                />
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(metrics.hydration.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Health Trends */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <LineChart className="h-5 w-5" />
              Health Trends
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="h-[300px] flex items-end gap-4">
              {trends.map((trend) => (
                <div key={trend.date} className="flex-1">
                  <div className="space-y-2">
                    <div
                      className="bg-blue-500 dark:bg-blue-400 rounded-t"
                      style={{
                        height: `${((trend.hemoglobin - 12) / (16 - 12)) * 100}%`,
                      }}
                    />
                    <div
                      className="bg-green-500 dark:bg-green-400 rounded-t"
                      style={{
                        height: `${((trend.ironLevel - 60) / (100 - 60)) * 100}%`,
                      }}
                    />
                    <div
                      className="bg-purple-500 dark:bg-purple-400 rounded-t"
                      style={{
                        height: `${trend.hydration}%`,
                      }}
                    />
                  </div>
                  <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {trend.date}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm">Hemoglobin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm">Iron Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="text-sm">Hydration</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Tips */}
        <Card className={getCardClass('green')}>
          <CardHeader className={getHeaderClass('green')}>
            <CardTitle className={getTitleClass('green')}>
              <Info className="h-5 w-5" />
              Health Tips
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('green')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Before Donation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Get adequate sleep (7-8 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Eat iron-rich foods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Stay hydrated</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">After Donation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Rest for 15-20 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Drink extra fluids</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Avoid strenuous exercise</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
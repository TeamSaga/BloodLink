'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Award,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Info,
  Heart,
  Droplet,
  Activity,
  Clock,
  Users
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'quiz';
  duration: string;
  completed: boolean;
  progress: number;
}

interface BloodTypeInfo {
  type: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  rarity: 'common' | 'uncommon' | 'rare';
  percentage: number;
}

export default function BloodEducation() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const learningModules: LearningModule[] = [
    {
      id: '1',
      title: 'Understanding Blood Types',
      description: 'Learn about different blood types and their compatibility',
      type: 'article',
      duration: '10 min',
      completed: true,
      progress: 100
    },
    {
      id: '2',
      title: 'The Donation Process',
      description: 'Step-by-step guide to blood donation',
      type: 'video',
      duration: '15 min',
      completed: false,
      progress: 60
    },
    {
      id: '3',
      title: 'Health Requirements',
      description: 'Learn about eligibility criteria and health requirements',
      type: 'article',
      duration: '8 min',
      completed: false,
      progress: 30
    },
    {
      id: '4',
      title: 'Post-Donation Care',
      description: 'Important information about recovery and care',
      type: 'quiz',
      duration: '5 min',
      completed: false,
      progress: 0
    }
  ];

  const bloodTypes: BloodTypeInfo[] = [
    {
      type: 'O+',
      canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
      canReceiveFrom: ['O+', 'O-'],
      rarity: 'common',
      percentage: 37
    },
    {
      type: 'O-',
      canDonateTo: ['All Types'],
      canReceiveFrom: ['O-'],
      rarity: 'rare',
      percentage: 7
    },
    {
      type: 'A+',
      canDonateTo: ['A+', 'AB+'],
      canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
      rarity: 'common',
      percentage: 34
    },
    {
      type: 'A-',
      canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
      canReceiveFrom: ['A-', 'O-'],
      rarity: 'uncommon',
      percentage: 6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Blood Education
          </h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="gap-2">
              <Award className="h-4 w-4" />
              Learning Progress: 65%
            </Badge>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningModules.map((module) => (
            <Card 
              key={module.id} 
              className={`${getCardClass('blue')} cursor-pointer hover:shadow-lg transition-shadow duration-300`}
              onClick={() => setSelectedModule(module.id)}
            >
              <CardHeader className={getHeaderClass('blue')}>
                <CardTitle className={getTitleClass('blue')}>
                  {module.type === 'article' && <FileText className="h-5 w-5" />}
                  {module.type === 'video' && <Video className="h-5 w-5" />}
                  {module.type === 'quiz' && <BookOpen className="h-5 w-5" />}
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={getContentClass('blue')}>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {module.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                    {module.completed ? (
                      <Badge variant="default" className="gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        Completed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="gap-1">
                        {module.progress}% Complete
                      </Badge>
                    )}
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blood Type Information */}
        <Card className={getCardClass('red')}>
          <CardHeader className={getHeaderClass('red')}>
            <CardTitle className={getTitleClass('red')}>
              <Droplet className="h-5 w-5" />
              Blood Type Compatibility
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('red')}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bloodTypes.map((type) => (
                <Card key={type.type} className="border border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{type.type}</span>
                      <Badge variant={type.rarity === 'common' ? 'default' : 'outline'}>
                        {type.rarity}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Can Donate To:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {type.canDonateTo.map((t) => (
                            <Badge key={t} variant="outline" className="gap-1">
                              <Droplet className="h-3 w-3" />
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Can Receive From:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {type.canReceiveFrom.map((t) => (
                            <Badge key={t} variant="outline" className="gap-1">
                              <Heart className="h-3 w-3" />
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-medium text-gray-500">Population Percentage:</p>
                        <Progress value={type.percentage} className="h-2 mt-1" />
                        <p className="text-sm text-gray-500 mt-1">{type.percentage}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Facts */}
        <Card className={getCardClass('green')}>
          <CardHeader className={getHeaderClass('green')}>
            <CardTitle className={getTitleClass('green')}>
              <Info className="h-5 w-5" />
              Quick Facts
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('green')}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold">Donation Frequency</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You can donate whole blood every 56 days
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold">Donation Time</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The process takes about 1 hour
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold">Impact</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  One donation can save up to 3 lives
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold">Safety</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  All equipment is sterile and single-use
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
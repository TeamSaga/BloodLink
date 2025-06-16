'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Award, 
  Star, 
  Heart, 
  Droplet,
  Calendar,
  Clock,
  ChevronRight,
  Info,
  Medal,
  Crown,
  Target,
  Flame,
  Users,
  Gift,
  Sparkles
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface Achievement {
  id: string;
  title: string;
  description: string;
  type: 'milestone' | 'special' | 'seasonal';
  status: 'locked' | 'unlocked' | 'in-progress';
  progress?: number;
  target?: number;
  dateUnlocked?: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  target: number;
  current: number;
  reward: string;
  status: 'locked' | 'in-progress' | 'completed';
}

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Blood',
      description: 'Complete your first blood donation',
      type: 'milestone',
      status: 'unlocked',
      dateUnlocked: '2024-01-15',
      icon: 'Droplet',
      rarity: 'common',
      points: 100
    },
    {
      id: '2',
      title: 'Regular Donor',
      description: 'Donate blood 5 times',
      type: 'milestone',
      status: 'in-progress',
      progress: 3,
      target: 5,
      icon: 'Heart',
      rarity: 'rare',
      points: 250
    },
    {
      id: '3',
      title: 'Lifesaver',
      description: 'Donate blood 10 times',
      type: 'milestone',
      status: 'locked',
      target: 10,
      icon: 'Trophy',
      rarity: 'epic',
      points: 500
    },
    {
      id: '4',
      title: 'Emergency Hero',
      description: 'Respond to 3 emergency donation requests',
      type: 'special',
      status: 'in-progress',
      progress: 1,
      target: 3,
      icon: 'Flame',
      rarity: 'rare',
      points: 300
    },
    {
      id: '5',
      title: 'Community Champion',
      description: 'Refer 5 new donors',
      type: 'special',
      status: 'locked',
      target: 5,
      icon: 'Users',
      rarity: 'epic',
      points: 400
    },
    {
      id: '6',
      title: 'Seasonal Donor',
      description: 'Donate during all four seasons',
      type: 'seasonal',
      status: 'in-progress',
      progress: 2,
      target: 4,
      icon: 'Calendar',
      rarity: 'legendary',
      points: 1000
    }
  ];

  const milestones: Milestone[] = [
    {
      id: '1',
      title: 'Bronze Donor',
      description: 'Complete 5 donations',
      target: 5,
      current: 3,
      reward: 'Bronze Badge + 500 points',
      status: 'in-progress'
    },
    {
      id: '2',
      title: 'Silver Donor',
      description: 'Complete 15 donations',
      target: 15,
      current: 3,
      reward: 'Silver Badge + 1500 points',
      status: 'locked'
    },
    {
      id: '3',
      title: 'Gold Donor',
      description: 'Complete 30 donations',
      target: 30,
      current: 3,
      reward: 'Gold Badge + 3000 points',
      status: 'locked'
    },
    {
      id: '4',
      title: 'Platinum Donor',
      description: 'Complete 50 donations',
      target: 50,
      current: 3,
      reward: 'Platinum Badge + 5000 points',
      status: 'locked'
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-500';
      case 'rare':
        return 'text-blue-500';
      case 'epic':
        return 'text-purple-500';
      case 'legendary':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return <Star className="h-4 w-4" />;
      case 'rare':
        return <Medal className="h-4 w-4" />;
      case 'epic':
        return <Crown className="h-4 w-4" />;
      case 'legendary':
        return <Sparkles className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getAchievementIcon = (icon: string) => {
    switch (icon) {
      case 'Droplet':
        return <Droplet className="h-6 w-6" />;
      case 'Heart':
        return <Heart className="h-6 w-6" />;
      case 'Trophy':
        return <Trophy className="h-6 w-6" />;
      case 'Flame':
        return <Flame className="h-6 w-6" />;
      case 'Users':
        return <Users className="h-6 w-6" />;
      case 'Calendar':
        return <Calendar className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Achievements
          </h1>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="gap-2">
              <Trophy className="h-4 w-4" />
              Total Points: 1,250
            </Badge>
          </div>
        </div>

        {/* Achievement Categories */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
          >
            All Achievements
          </Button>
          <Button
            variant={selectedCategory === 'milestone' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('milestone')}
          >
            Milestones
          </Button>
          <Button
            variant={selectedCategory === 'special' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('special')}
          >
            Special
          </Button>
          <Button
            variant={selectedCategory === 'seasonal' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('seasonal')}
          >
            Seasonal
          </Button>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements
            .filter(achievement => !selectedCategory || achievement.type === selectedCategory)
            .map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`${getCardClass('blue')} ${
                  achievement.status === 'locked' ? 'opacity-60' : ''
                }`}
              >
                <CardHeader className={getHeaderClass('blue')}>
                  <CardTitle className={getTitleClass('blue')}>
                    <div className="flex items-center gap-2">
                      {getAchievementIcon(achievement.icon)}
                      {achievement.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className={getContentClass('blue')}>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getRarityIcon(achievement.rarity)}
                        <span className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </span>
                      </div>
                      <Badge variant="outline">
                        {achievement.points} points
                      </Badge>
                    </div>
                    {achievement.status === 'in-progress' && achievement.progress && achievement.target && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.target}</span>
                        </div>
                        <Progress 
                          value={(achievement.progress / achievement.target) * 100} 
                          className="h-2" 
                        />
                      </div>
                    )}
                    {achievement.status === 'unlocked' && achievement.dateUnlocked && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        Unlocked: {new Date(achievement.dateUnlocked).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Milestones Progress */}
        <Card className={getCardClass('red')}>
          <CardHeader className={getHeaderClass('red')}>
            <CardTitle className={getTitleClass('red')}>
              <Target className="h-5 w-5" />
              Donation Milestones
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('red')}>
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{milestone.title}</h3>
                      <p className="text-sm text-gray-500">{milestone.description}</p>
                    </div>
                    <Badge variant="outline">
                      {milestone.current}/{milestone.target}
                    </Badge>
                  </div>
                  <Progress 
                    value={(milestone.current / milestone.target) * 100} 
                    className="h-2" 
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Reward: {milestone.reward}</span>
                    <span className={milestone.status === 'completed' ? 'text-green-500' : 'text-gray-500'}>
                      {milestone.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className={getCardClass('green')}>
          <CardHeader className={getHeaderClass('green')}>
            <CardTitle className={getTitleClass('green')}>
              <Award className="h-5 w-5" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('green')}>
            <div className="space-y-4">
              {achievements
                .filter(a => a.status === 'unlocked')
                .sort((a, b) => new Date(b.dateUnlocked!).getTime() - new Date(a.dateUnlocked!).getTime())
                .slice(0, 3)
                .map((achievement) => (
                  <div key={achievement.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      {getAchievementIcon(achievement.icon)}
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(achievement.dateUnlocked!).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="gap-1">
                      {getRarityIcon(achievement.rarity)}
                      {achievement.points} points
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
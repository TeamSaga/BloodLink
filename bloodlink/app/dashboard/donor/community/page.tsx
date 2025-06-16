'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Heart, 
  Star,
  Search,
  Filter,
  ChevronRight,
  Trophy,
  Award,
  Bell,
  Share2,
  ThumbsUp,
  MessageCircle,
  Clock,
  UserPlus,
  Users2,
  TrendingUp,
  Activity,
  Target,
  BarChart3,
  LineChart,
  PieChart,
  BellRing,
  Megaphone,
  Gift,
  Sparkles,
  Crown,
  Medal,
  Flag
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  type: 'donation' | 'awareness' | 'training';
}

interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'donation' | 'awareness' | 'training';
  participants: number;
  maxParticipants: number;
  organizer: {
    name: string;
    avatar: string;
  };
}

interface TopDonor {
  id: string;
  name: string;
  avatar: string;
  donations: number;
  streak: number;
  points: number;
  rank: number;
}

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Mock data for community posts
  const posts: CommunityPost[] = [
    {
      id: '1',
      author: {
        name: 'John Doe',
        avatar: '/avatars/john.jpg',
        role: 'Regular Donor'
      },
      content: 'Just completed my 10th blood donation! Feeling proud to be part of this life-saving community.',
      likes: 45,
      comments: 12,
      timestamp: '2024-03-20T10:00:00Z',
      type: 'donation'
    },
    {
      id: '2',
      author: {
        name: 'Jane Smith',
        avatar: '/avatars/jane.jpg',
        role: 'Blood Drive Organizer'
      },
      content: 'Join us this weekend for a blood donation camp at City Hospital. Your contribution can save lives!',
      likes: 78,
      comments: 23,
      timestamp: '2024-03-19T15:30:00Z',
      type: 'awareness'
    }
  ];

  // Mock data for community events
  const events: CommunityEvent[] = [
    {
      id: '1',
      title: 'City Blood Drive',
      description: 'Join us for a community blood drive. All blood types needed.',
      date: '2024-03-25',
      location: 'City Hospital, Main Hall',
      type: 'donation',
      participants: 45,
      maxParticipants: 100,
      organizer: {
        name: 'City Hospital',
        avatar: '/logos/city-hospital.png'
      }
    },
    {
      id: '2',
      title: 'Blood Donation Awareness Workshop',
      description: 'Learn about the importance of blood donation and how you can help.',
      date: '2024-03-28',
      location: 'Community Center',
      type: 'awareness',
      participants: 30,
      maxParticipants: 50,
      organizer: {
        name: 'Red Cross',
        avatar: '/logos/red-cross.png'
      }
    }
  ];

  // Mock data for top donors
  const topDonors: TopDonor[] = [
    {
      id: '1',
      name: 'John Doe',
      avatar: '/avatars/john.jpg',
      donations: 25,
      streak: 12,
      points: 2500,
      rank: 1
    },
    {
      id: '2',
      name: 'Jane Smith',
      avatar: '/avatars/jane.jpg',
      donations: 20,
      streak: 8,
      points: 2000,
      rank: 2
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || post.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Community
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Users className="h-5 w-5" />
                Community Members
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">1,234</p>
                  <p className="text-sm text-gray-500">Active Donors</p>
                </div>
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/community-members.png"
                    alt="Community Members"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <MessageSquare className="h-5 w-5" />
                Community Posts
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">567</p>
                  <p className="text-sm text-gray-500">This Month</p>
                </div>
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/community-posts.png"
                    alt="Community Posts"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('green')}>
            <CardHeader className={getHeaderClass('green')}>
              <CardTitle className={getTitleClass('green')}>
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('green')}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-gray-500">Next 30 Days</p>
                </div>
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/upcoming-events.png"
                    alt="Upcoming Events"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <Card key={event.id} className={getCardClass('green')}>
              <CardHeader className={getHeaderClass('green')}>
                <CardTitle className={getTitleClass('green')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {event.title}
                    </div>
                    <Badge variant={event.type === 'donation' ? 'destructive' : 'default'}>
                      {event.type === 'donation' ? 'Blood Drive' : 'Community Event'}
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className={getContentClass('green')}>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {event.participants}/{event.maxParticipants} participants
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <UserPlus className="h-4 w-4" />
                      Join Event
                    </Button>
                  </div>

                  <Progress
                    value={(event.participants / event.maxParticipants) * 100}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Donors */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Trophy className="h-5 w-5" />
              Top Donors
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="space-y-4">
              {topDonors.map((donor) => (
                <div
                  key={donor.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={donor.avatar} alt={donor.name} />
                      <AvatarFallback>
                        {donor.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{donor.name}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                        <span>{donor.donations} donations</span>
                        <span>{donor.streak} day streak</span>
                        <span>{donor.points} points</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="gap-1">
                    <Trophy className="h-4 w-4" />
                    Rank #{donor.rank}
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
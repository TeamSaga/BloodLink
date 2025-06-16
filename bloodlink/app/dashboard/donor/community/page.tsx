'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Share2, 
  ThumbsUp, 
  Bookmark, 
  Filter,
  Search,
  MapPin,
  Calendar,
  Award,
  Trophy,
  Star
} from 'lucide-react';

interface CommunityPost {
  id: string;
  author: {
    name: string;
    avatar: string;
    bloodType: string;
    donations: number;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  location?: string;
  event?: {
    name: string;
    date: string;
    location: string;
  };
}

interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  maxParticipants: number;
  organizer: {
    name: string;
    avatar: string;
  };
  type: 'donation' | 'awareness' | 'training';
}

export default function Community() {
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: '1',
      author: {
        name: 'John Smith',
        avatar: '/placeholder-avatar.jpg',
        bloodType: 'O+',
        donations: 15,
      },
      content: 'Just completed my 15th blood donation! Feeling proud to be part of this life-saving community. #BloodDonation #SaveLives',
      timestamp: '2024-03-20T10:00:00Z',
      likes: 45,
      comments: 12,
      shares: 5,
      tags: ['BloodDonation', 'SaveLives'],
      location: 'City Hospital',
    },
    {
      id: '2',
      author: {
        name: 'Sarah Johnson',
        avatar: '/placeholder-avatar.jpg',
        bloodType: 'A-',
        donations: 8,
      },
      content: 'Excited to participate in the upcoming blood donation camp this weekend! Who else is joining? #CommunityEvent #BloodDonation',
      timestamp: '2024-03-19T15:30:00Z',
      likes: 32,
      comments: 8,
      shares: 3,
      tags: ['CommunityEvent', 'BloodDonation'],
      event: {
        name: 'Community Blood Drive',
        date: '2024-03-25',
        location: 'Community Center',
      },
    },
  ]);

  const [events, setEvents] = useState<CommunityEvent[]>([
    {
      id: '1',
      title: 'Community Blood Drive',
      description: 'Join us for a community blood drive event. Free health check-up included!',
      date: '2024-03-25',
      location: 'Community Center',
      participants: 45,
      maxParticipants: 100,
      organizer: {
        name: 'City Hospital',
        avatar: '/hospital-logo.png',
      },
      type: 'donation',
    },
    {
      id: '2',
      title: 'Blood Donation Awareness Workshop',
      description: 'Learn about the importance of blood donation and how you can make a difference.',
      date: '2024-03-28',
      location: 'City Library',
      participants: 30,
      maxParticipants: 50,
      organizer: {
        name: 'BloodLink Foundation',
        avatar: '/foundation-logo.png',
      },
      type: 'awareness',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Donor Community
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search community..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 rounded-md border"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="posts">Posts</option>
              <option value="events">Events</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      placeholder="Share your thoughts with the community..."
                      className="mb-2"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Image className="h-4 w-4 mr-2" />
                          Image
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          Location
                        </Button>
                      </div>
                      <Button>Post</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback>
                        {post.author.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{post.author.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{post.author.bloodType}</span>
                            <span>•</span>
                            <span>{post.author.donations} donations</span>
                            <span>•</span>
                            <span>{new Date(post.timestamp).toLocaleString()}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="mt-2">{post.content}</p>
                      {post.event && (
                        <Card className="mt-4 bg-gray-50 dark:bg-gray-800">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="font-semibold">{post.event.name}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                              <MapPin className="h-4 w-4" />
                              <span>{post.event.location}</span>
                              <span>•</span>
                              <span>{new Date(post.event.date).toLocaleDateString()}</span>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                      <div className="flex items-center gap-4 mt-4">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={event.organizer.avatar} />
                        <AvatarFallback>
                          {event.organizer.name.split(' ').map((n) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {event.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-sm">
                            <span>Participants</span>
                            <span>
                              {event.participants}/{event.maxParticipants}
                            </span>
                          </div>
                          <Progress
                            value={(event.participants / event.maxParticipants) * 100}
                            className="mt-2"
                          />
                        </div>
                        <Button className="w-full mt-4">Join Event</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Donors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Top Donors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((rank) => (
                  <div
                    key={rank}
                    className="flex items-center gap-4 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-500">25 donations</p>
                    </div>
                    <Badge variant="secondary">O+</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 
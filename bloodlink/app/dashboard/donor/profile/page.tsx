'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Droplet, 
  Heart, 
  Trophy, 
  Award,
  Edit,
  Camera,
  Shield,
  FileText,
  History,
  Star
} from 'lucide-react';

interface DonorProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  bloodType: string;
  joinDate: string;
  totalDonations: number;
  lastDonation: string;
  nextEligibleDate: string;
  achievements: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    icon: string;
  }>;
  medicalHistory: Array<{
    date: string;
    type: string;
    status: string;
    notes: string;
  }>;
  documents: Array<{
    name: string;
    type: string;
    uploadDate: string;
    status: string;
  }>;
}

export default function DonorProfile() {
  const [profile, setProfile] = useState<DonorProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234-567-8901',
    address: '123 Main St, City, Country',
    bloodType: 'A+',
    joinDate: '2023-01-15',
    totalDonations: 5,
    lastDonation: '2024-02-15',
    nextEligibleDate: '2024-05-15',
    achievements: [
      {
        id: '1',
        title: 'First Donation',
        description: 'Completed first blood donation',
        date: '2023-01-15',
        icon: 'trophy',
      },
      {
        id: '2',
        title: 'Regular Donor',
        description: 'Donated blood 5 times',
        date: '2024-02-15',
        icon: 'award',
      },
    ],
    medicalHistory: [
      {
        date: '2024-02-15',
        type: 'Blood Donation',
        status: 'Completed',
        notes: 'Regular donation, no complications',
      },
      {
        date: '2023-11-15',
        type: 'Health Check',
        status: 'Completed',
        notes: 'All parameters normal',
      },
    ],
    documents: [
      {
        name: 'ID Card',
        type: 'Identification',
        uploadDate: '2023-01-15',
        status: 'Verified',
      },
      {
        name: 'Medical Certificate',
        type: 'Health',
        uploadDate: '2023-01-15',
        status: 'Verified',
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-red-500">
              <AvatarImage src="/placeholder-avatar.jpg" alt={profile.name} />
              <AvatarFallback className="text-4xl">{profile.name[0]}</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 rounded-full"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{profile.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-red-500" />
                <span>Blood Type: {profile.bloodType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Donation History</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <Heart className="h-5 w-5" />
                    Total Donations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{profile.totalDonations}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Last donation: {new Date(profile.lastDonation).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600">
                    <Calendar className="h-5 w-5" />
                    Next Donation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {new Date(profile.nextEligibleDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {Math.ceil(
                      (new Date(profile.nextEligibleDate).getTime() - new Date().getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{' '}
                    days remaining
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <Trophy className="h-5 w-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{profile.achievements.length}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Latest: {profile.achievements[0].title}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.medicalHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold">{item.type}</h3>
                        <p className="text-sm text-gray-500">{item.notes}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={item.status === 'Completed' ? 'default' : 'secondary'}
                        >
                          {item.status}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donation History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.medicalHistory
                    .filter((item) => item.type === 'Blood Donation')
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">Blood Donation</h3>
                          <p className="text-sm text-gray-500">{item.notes}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge
                            variant={item.status === 'Completed' ? 'default' : 'secondary'}
                          >
                            {item.status}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-start gap-4 p-4 border rounded-lg"
                    >
                      <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-gray-500">{achievement.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {profile.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{doc.name}</h3>
                          <p className="text-sm text-gray-500">{doc.type}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={doc.status === 'Verified' ? 'default' : 'secondary'}
                        >
                          {doc.status}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {new Date(doc.uploadDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 
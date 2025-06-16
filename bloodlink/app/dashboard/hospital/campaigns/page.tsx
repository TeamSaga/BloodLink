'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, SortAsc, SortDesc, Plus, Calendar, Users, Target, MapPin, Clock, Heart } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Campaign {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
  targetDonors: number;
  currentDonors: number;
  location: string;
  organizer: string;
  bloodTypes: string[];
  type: 'blood_drive' | 'awareness' | 'emergency' | 'regular';
  contact: {
    phone: string;
    email: string;
  };
  notes?: string;
}

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 'C001',
      title: 'Summer Blood Drive 2024',
      description: 'Annual summer blood donation campaign to meet increased demand',
      startDate: '2024-06-01',
      endDate: '2024-06-30',
      status: 'upcoming',
      targetDonors: 500,
      currentDonors: 0,
      location: 'Main Hospital Campus',
      organizer: 'Dr. Sarah Johnson',
      bloodTypes: ['A+', 'B+', 'O+', 'AB+'],
      type: 'blood_drive',
      contact: {
        phone: '+1 234-567-8900',
        email: 'campaigns@hospital.com',
      },
      notes: 'Focus on rare blood types',
    },
    {
      id: 'C002',
      title: 'Emergency Blood Collection',
      description: 'Urgent blood collection for trauma center',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
      status: 'active',
      targetDonors: 200,
      currentDonors: 75,
      location: 'Trauma Center',
      organizer: 'Dr. Michael Brown',
      bloodTypes: ['O-', 'A-', 'B-'],
      type: 'emergency',
      contact: {
        phone: '+1 234-567-8901',
        email: 'trauma@hospital.com',
      },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isNewCampaignOpen, setIsNewCampaignOpen] = useState(false);

  const filteredCampaigns = campaigns
    .filter(campaign => {
      const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || campaign.status === statusFilter;
      const matchesType = typeFilter === 'all' || campaign.type === typeFilter;
      return matchesSearch && matchesStatus && matchesType;
    })
    .sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge className="bg-blue-500">Upcoming</Badge>;
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'completed':
        return <Badge className="bg-gray-500">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'blood_drive':
        return <Badge className="bg-purple-500">Blood Drive</Badge>;
      case 'awareness':
        return <Badge className="bg-yellow-500">Awareness</Badge>;
      case 'emergency':
        return <Badge className="bg-red-500">Emergency</Badge>;
      case 'regular':
        return <Badge className="bg-blue-500">Regular</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Blood Donation Campaigns
          </h1>
          <Dialog open={isNewCampaignOpen} onOpenChange={setIsNewCampaignOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Campaign
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Campaign</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Title</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Description</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Start Date</label>
                  <Input type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">End Date</label>
                  <Input type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Type</label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blood_drive">Blood Drive</SelectItem>
                      <SelectItem value="awareness">Awareness</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="regular">Regular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Target Donors</label>
                  <Input type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Location</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Organizer</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Blood Types</label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select blood types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Contact Phone</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Contact Email</label>
                  <Input type="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Notes</label>
                  <Input className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsNewCampaignOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Create Campaign
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{campaigns.length}</div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {campaigns.filter(campaign => campaign.status === 'active').length}
              </div>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {campaigns.reduce((sum, campaign) => sum + campaign.currentDonors, 0)}
              </div>
              <Progress value={40} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Target Achievement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round((campaigns.reduce((sum, campaign) => sum + campaign.currentDonors, 0) /
                  campaigns.reduce((sum, campaign) => sum + campaign.targetDonors, 0)) * 100)}%
              </div>
              <Progress value={20} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search campaigns..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="blood_drive">Blood Drive</SelectItem>
              <SelectItem value="awareness">Awareness</SelectItem>
              <SelectItem value="emergency">Emergency</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{campaign.title}</h3>
                      {getStatusBadge(campaign.status)}
                      {getTypeBadge(campaign.type)}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{campaign.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{campaign.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{campaign.currentDonors}/{campaign.targetDonors} donors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>{campaign.bloodTypes.join(', ')}</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress 
                        value={(campaign.currentDonors / campaign.targetDonors) * 100} 
                        className="h-2"
                      />
                    </div>
                    {campaign.notes && (
                      <p className="text-sm text-gray-500 mt-2 italic">{campaign.notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
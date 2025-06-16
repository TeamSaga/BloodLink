'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, SortAsc, SortDesc, UserPlus, Droplet, Calendar, Phone, Mail, MapPin } from 'lucide-react';
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

interface Donor {
  id: string;
  name: string;
  bloodType: string;
  lastDonation: string;
  totalDonations: number;
  status: 'active' | 'inactive' | 'pending';
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  eligibility: {
    nextDonationDate: string;
    healthStatus: 'eligible' | 'ineligible' | 'pending';
    notes?: string;
  };
}

export default function Donors() {
  const [donors, setDonors] = useState<Donor[]>([
    {
      id: 'D001',
      name: 'John Doe',
      bloodType: 'A+',
      lastDonation: '2024-02-15',
      totalDonations: 5,
      status: 'active',
      contact: {
        phone: '+1 234-567-8900',
        email: 'john.doe@example.com',
        address: '123 Main St, City',
      },
      eligibility: {
        nextDonationDate: '2024-05-15',
        healthStatus: 'eligible',
        notes: 'Regular donor',
      },
    },
    {
      id: 'D002',
      name: 'Jane Smith',
      bloodType: 'O-',
      lastDonation: '2024-01-20',
      totalDonations: 3,
      status: 'active',
      contact: {
        phone: '+1 234-567-8901',
        email: 'jane.smith@example.com',
        address: '456 Oak St, City',
      },
      eligibility: {
        nextDonationDate: '2024-04-20',
        healthStatus: 'eligible',
        notes: 'Universal donor',
      },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [bloodTypeFilter, setBloodTypeFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isAddDonorOpen, setIsAddDonorOpen] = useState(false);

  const filteredDonors = donors
    .filter(donor => {
      const matchesSearch = donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          donor.contact.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || donor.status === statusFilter;
      const matchesBloodType = bloodTypeFilter === 'all' || donor.bloodType === bloodTypeFilter;
      return matchesSearch && matchesStatus && matchesBloodType;
    })
    .sort((a, b) => {
      const dateA = new Date(a.lastDonation).getTime();
      const dateB = new Date(b.lastDonation).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-red-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'inactive':
        return <Badge className="bg-red-500">Inactive</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Donor Management
          </h1>
          <Dialog open={isAddDonorOpen} onOpenChange={setIsAddDonorOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Donor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Donor</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Name</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Blood Type</label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select blood type" />
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
                  <label className="text-right">Phone</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Email</label>
                  <Input type="email" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Address</label>
                  <Input className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsAddDonorOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Add Donor
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{donors.length}</div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Active Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {donors.filter(donor => donor.status === 'active').length}
              </div>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Eligible Donors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {donors.filter(donor => donor.eligibility.healthStatus === 'eligible').length}
              </div>
              <Progress value={80} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Recent Donations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {donors.filter(donor => {
                  const lastDonation = new Date(donor.lastDonation);
                  const today = new Date();
                  const daysSinceLastDonation = Math.ceil((today.getTime() - lastDonation.getTime()) / (1000 * 60 * 60 * 24));
                  return daysSinceLastDonation <= 30;
                }).length}
              </div>
              <Progress value={40} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by name or email..."
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
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          <Select value={bloodTypeFilter} onValueChange={setBloodTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
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
          <Button
            variant="outline"
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Donor List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredDonors.map((donor) => (
                <div
                  key={donor.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(donor.status)}`} />
                    <div>
                      <h3 className="font-semibold">{donor.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Droplet className="h-4 w-4" />
                        <span>{donor.bloodType}</span>
                        <span>•</span>
                        <span>{donor.totalDonations} donations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Phone className="h-4 w-4" />
                        <span>{donor.contact.phone}</span>
                        <span>•</span>
                        <Mail className="h-4 w-4" />
                        <span>{donor.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{donor.contact.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>Last donation: {new Date(donor.lastDonation).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Next eligible: {new Date(donor.eligibility.nextDonationDate).toLocaleDateString()}</span>
                      </div>
                      {donor.eligibility.notes && (
                        <p className="text-sm text-gray-600 mt-1">{donor.eligibility.notes}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(donor.status)}
                    <Button variant="outline" size="sm">
                      Details
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
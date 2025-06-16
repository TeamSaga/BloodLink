'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, SortAsc, SortDesc, AlertTriangle, Droplet, Calendar, Plus } from 'lucide-react';
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

interface BloodUnit {
  id: string;
  bloodType: string;
  units: number;
  status: 'available' | 'reserved' | 'expired';
  expiryDate: string;
  donorId: string;
  collectionDate: string;
  location: string;
  notes?: string;
}

export default function Inventory() {
  const [bloodUnits, setBloodUnits] = useState<BloodUnit[]>([
    {
      id: '1',
      bloodType: 'A+',
      units: 5,
      status: 'available',
      expiryDate: '2024-04-20',
      donorId: 'D001',
      collectionDate: '2024-03-20',
      location: 'Main Storage',
      notes: 'Regular donation',
    },
    {
      id: '2',
      bloodType: 'O-',
      units: 3,
      status: 'reserved',
      expiryDate: '2024-04-15',
      donorId: 'D002',
      collectionDate: '2024-03-15',
      location: 'Emergency Storage',
      notes: 'Emergency reserve',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [bloodTypeFilter, setBloodTypeFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isAddUnitOpen, setIsAddUnitOpen] = useState(false);

  const filteredUnits = bloodUnits
    .filter(unit => {
      const matchesSearch = unit.bloodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          unit.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || unit.status === statusFilter;
      const matchesBloodType = bloodTypeFilter === 'all' || unit.bloodType === bloodTypeFilter;
      return matchesSearch && matchesStatus && matchesBloodType;
    })
    .sort((a, b) => {
      const dateA = new Date(a.expiryDate).getTime();
      const dateB = new Date(b.expiryDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'reserved':
        return 'bg-yellow-500';
      case 'expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-500">Available</Badge>;
      case 'reserved':
        return <Badge className="bg-yellow-500">Reserved</Badge>;
      case 'expired':
        return <Badge className="bg-red-500">Expired</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Blood Inventory
          </h1>
          <Dialog open={isAddUnitOpen} onOpenChange={setIsAddUnitOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Blood Unit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Blood Unit</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
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
                  <label className="text-right">Units</label>
                  <Input type="number" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Collection Date</label>
                  <Input type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Location</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Donor ID</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Notes</label>
                  <Input className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsAddUnitOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Add Unit
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Units</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bloodUnits.reduce((sum, unit) => sum + unit.units, 0)}</div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Available Units</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bloodUnits.filter(unit => unit.status === 'available').reduce((sum, unit) => sum + unit.units, 0)}
              </div>
              <Progress value={60} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Reserved Units</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bloodUnits.filter(unit => unit.status === 'reserved').reduce((sum, unit) => sum + unit.units, 0)}
              </div>
              <Progress value={30} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bloodUnits.filter(unit => {
                  const expiryDate = new Date(unit.expiryDate);
                  const today = new Date();
                  const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                  return daysUntilExpiry <= 7;
                }).length}
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
                placeholder="Search by blood type or location..."
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
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="reserved">Reserved</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
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
            <CardTitle>Blood Units</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUnits.map((unit) => (
                <div
                  key={unit.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(unit.status)}`} />
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <Droplet className="h-4 w-4" />
                        {unit.bloodType}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{unit.units} units</span>
                        <span>•</span>
                        <span>{unit.location}</span>
                        <span>•</span>
                        <span>Donor: {unit.donorId}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>Expires: {new Date(unit.expiryDate).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Collected: {new Date(unit.collectionDate).toLocaleDateString()}</span>
                      </div>
                      {unit.notes && (
                        <p className="text-sm text-gray-600 mt-1">{unit.notes}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(unit.status)}
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
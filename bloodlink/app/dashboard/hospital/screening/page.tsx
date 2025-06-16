'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, SortAsc, SortDesc, Plus, Calendar, User, Droplet, CheckCircle2, XCircle, AlertTriangle, Clock } from 'lucide-react';
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

interface ScreeningTest {
  id: string;
  donorId: string;
  donorName: string;
  bloodType: string;
  testDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  results: {
    hiv: 'negative' | 'positive' | 'pending';
    hepatitis: 'negative' | 'positive' | 'pending';
    syphilis: 'negative' | 'positive' | 'pending';
    malaria: 'negative' | 'positive' | 'pending';
    hemoglobin: number;
    bloodPressure: string;
    temperature: number;
  };
  notes?: string;
  technician: string;
  eligibility: 'eligible' | 'ineligible' | 'pending';
}

export default function Screening() {
  const [tests, setTests] = useState<ScreeningTest[]>([
    {
      id: 'S001',
      donorId: 'D001',
      donorName: 'John Doe',
      bloodType: 'A+',
      testDate: '2024-03-20T10:00:00Z',
      status: 'completed',
      results: {
        hiv: 'negative',
        hepatitis: 'negative',
        syphilis: 'negative',
        malaria: 'negative',
        hemoglobin: 14.5,
        bloodPressure: '120/80',
        temperature: 37.0,
      },
      technician: 'Dr. Sarah Wilson',
      eligibility: 'eligible',
      notes: 'All tests passed successfully',
    },
    {
      id: 'S002',
      donorId: 'D002',
      donorName: 'Jane Smith',
      bloodType: 'O-',
      testDate: '2024-03-20T09:30:00Z',
      status: 'in_progress',
      results: {
        hiv: 'pending',
        hepatitis: 'pending',
        syphilis: 'pending',
        malaria: 'pending',
        hemoglobin: 13.8,
        bloodPressure: '118/75',
        temperature: 36.8,
      },
      technician: 'Dr. Michael Brown',
      eligibility: 'pending',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [eligibilityFilter, setEligibilityFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isNewTestOpen, setIsNewTestOpen] = useState(false);

  const filteredTests = tests
    .filter(test => {
      const matchesSearch = test.donorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          test.donorId.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || test.status === statusFilter;
      const matchesEligibility = eligibilityFilter === 'all' || test.eligibility === eligibilityFilter;
      return matchesSearch && matchesStatus && matchesEligibility;
    })
    .sort((a, b) => {
      const dateA = new Date(a.testDate).getTime();
      const dateB = new Date(b.testDate).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'in_progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">Completed</Badge>;
      case 'failed':
        return <Badge className="bg-red-500">Failed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getEligibilityBadge = (eligibility: string) => {
    switch (eligibility) {
      case 'eligible':
        return <Badge className="bg-green-500">Eligible</Badge>;
      case 'ineligible':
        return <Badge className="bg-red-500">Ineligible</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getResultIcon = (result: string) => {
    switch (result) {
      case 'negative':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'positive':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Blood Screening
          </h1>
          <Dialog open={isNewTestOpen} onOpenChange={setIsNewTestOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Screening
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Screening Test</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Donor ID</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Donor Name</label>
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
                  <label className="text-right">Hemoglobin</label>
                  <Input type="number" step="0.1" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Blood Pressure</label>
                  <Input className="col-span-3" placeholder="e.g., 120/80" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Temperature</label>
                  <Input type="number" step="0.1" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Technician</label>
                  <Input className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right">Notes</label>
                  <Input className="col-span-3" />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => setIsNewTestOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Start Screening
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tests.length}</div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {tests.filter(test => test.status === 'in_progress').length}
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
                {tests.filter(test => test.eligibility === 'eligible').length}
              </div>
              <Progress value={40} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Failed Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {tests.filter(test => test.status === 'failed').length}
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
                placeholder="Search by donor name or ID..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={eligibilityFilter} onValueChange={setEligibilityFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by eligibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Eligibility</SelectItem>
              <SelectItem value="eligible">Eligible</SelectItem>
              <SelectItem value="ineligible">Ineligible</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
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
            <CardTitle>Screening Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{test.donorName}</h3>
                      {getStatusBadge(test.status)}
                      {getEligibilityBadge(test.eligibility)}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>ID: {test.donorId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplet className="h-4 w-4" />
                        <span>{test.bloodType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(test.testDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{test.technician}</span>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span>HIV:</span>
                        {getResultIcon(test.results.hiv)}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Hepatitis:</span>
                        {getResultIcon(test.results.hepatitis)}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Syphilis:</span>
                        {getResultIcon(test.results.syphilis)}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Malaria:</span>
                        {getResultIcon(test.results.malaria)}
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                      <div>Hemoglobin: {test.results.hemoglobin} g/dL</div>
                      <div>BP: {test.results.bloodPressure}</div>
                      <div>Temp: {test.results.temperature}°C</div>
                    </div>
                    {test.notes && (
                      <p className="text-sm text-gray-500 mt-2 italic">{test.notes}</p>
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
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, Filter, Plus, Search, Building2, User, Droplet, Calendar, Clock, Phone } from 'lucide-react';

export default function DonorRequestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Sample request data
  const requests = [
    {
      id: 1,
      requesterName: 'Central Hospital',
      requesterType: 'hospital',
      bloodType: 'O+',
      units: 5,
      urgency: 'high',
      date: '2024-03-15',
      time: '10:00 AM',
      contact: '+1 234-567-8900',
      status: 'pending',
      reason: 'Emergency surgery scheduled',
    },
    {
      id: 2,
      requesterName: 'John Smith',
      requesterType: 'user',
      bloodType: 'A-',
      units: 2,
      urgency: 'medium',
      date: '2024-03-16',
      time: '2:00 PM',
      contact: '+1 234-567-8901',
      status: 'approved',
      reason: 'Regular transfusion needed',
    },
    {
      id: 3,
      requesterName: 'City Medical Center',
      requesterType: 'hospital',
      bloodType: 'B+',
      units: 10,
      urgency: 'critical',
      date: '2024-03-14',
      time: '9:00 AM',
      contact: '+1 234-567-8902',
      status: 'completed',
      reason: 'Mass casualty incident',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
    };
    return (
      <Badge className={statusStyles[status as keyof typeof statusStyles]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getUrgencyBadge = (urgency: string) => {
    const urgencyStyles = {
      critical: 'bg-red-100 text-red-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    return (
      <Badge className={urgencyStyles[urgency as keyof typeof urgencyStyles]}>
        {urgency.charAt(0).toUpperCase() + urgency.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Donor Requests</span>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search requests..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Requests</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <Droplet className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Pending Requests</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Units Requested</p>
                    <p className="text-2xl font-bold">17</p>
                  </div>
                  <Building2 className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Requester</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Blood Type</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.requesterName}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {request.requesterType === 'hospital' ? (
                        <Building2 className="h-4 w-4 text-blue-500" />
                      ) : (
                        <User className="h-4 w-4 text-green-500" />
                      )}
                      <span className="capitalize">{request.requesterType}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {request.bloodType}
                    </Badge>
                  </TableCell>
                  <TableCell>{request.units}</TableCell>
                  <TableCell>{getUrgencyBadge(request.urgency)}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{request.date}</span>
                      <span className="text-sm text-gray-500">{request.time}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{request.contact}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(request.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      {request.status === 'pending' && (
                        <>
                          <Button variant="ghost" size="sm" className="text-green-600">
                            Approve
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

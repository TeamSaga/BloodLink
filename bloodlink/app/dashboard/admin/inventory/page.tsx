'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Droplet, Filter, Plus, AlertTriangle, Building2, MoreVertical } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample inventory data by hospital
  const hospitalInventory = [
    {
      id: 1,
      hospital: 'Central Medical Center',
      bloodTypes: {
        'A+': { units: 15, status: 'normal' },
        'A-': { units: 8, status: 'normal' },
        'B+': { units: 12, status: 'normal' },
        'B-': { units: 5, status: 'low' },
        'O+': { units: 20, status: 'normal' },
        'O-': { units: 7, status: 'critical' },
        'AB+': { units: 6, status: 'normal' },
        'AB-': { units: 3, status: 'low' },
      },
      lastUpdated: '2024-03-15',
    },
    {
      id: 2,
      hospital: 'City General Hospital',
      bloodTypes: {
        'A+': { units: 10, status: 'normal' },
        'A-': { units: 4, status: 'low' },
        'B+': { units: 8, status: 'normal' },
        'B-': { units: 3, status: 'critical' },
        'O+': { units: 15, status: 'normal' },
        'O-': { units: 5, status: 'low' },
        'AB+': { units: 4, status: 'normal' },
        'AB-': { units: 2, status: 'critical' },
      },
      lastUpdated: '2024-03-15',
    },
    {
      id: 3,
      hospital: 'Metropolitan Hospital',
      bloodTypes: {
        'A+': { units: 8, status: 'low' },
        'A-': { units: 3, status: 'critical' },
        'B+': { units: 6, status: 'low' },
        'B-': { units: 2, status: 'critical' },
        'O+': { units: 12, status: 'normal' },
        'O-': { units: 4, status: 'low' },
        'AB+': { units: 3, status: 'low' },
        'AB-': { units: 1, status: 'critical' },
      },
      lastUpdated: '2024-03-14',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      normal: 'bg-green-100 text-green-800',
      low: 'bg-yellow-100 text-yellow-800',
      critical: 'bg-red-100 text-red-800',
    };
    return (
      <Badge className={statusStyles[status as keyof typeof statusStyles]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Blood Inventory Management</span>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search inventory..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Stock
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">A+</p>
                    <p className="text-2xl font-bold">45 units</p>
                  </div>
                  <Droplet className="h-8 w-8 text-red-500" />
                </div>
                <Badge variant="default" className="mt-2">Normal</Badge>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">B+</p>
                    <p className="text-2xl font-bold">30 units</p>
                  </div>
                  <Droplet className="h-8 w-8 text-yellow-500" />
                </div>
                <Badge variant="secondary" className="mt-2">Low</Badge>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">O-</p>
                    <p className="text-2xl font-bold">15 units</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <Badge variant="destructive" className="mt-2">Critical</Badge>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">AB+</p>
                    <p className="text-2xl font-bold">25 units</p>
                  </div>
                  <Droplet className="h-8 w-8 text-green-500" />
                </div>
                <Badge variant="default" className="mt-2">Normal</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Hospital Inventory Details</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hospital</TableHead>
                  <TableHead>A+</TableHead>
                  <TableHead>A-</TableHead>
                  <TableHead>B+</TableHead>
                  <TableHead>B-</TableHead>
                  <TableHead>O+</TableHead>
                  <TableHead>O-</TableHead>
                  <TableHead>AB+</TableHead>
                  <TableHead>AB-</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {hospitalInventory.map((hospital) => (
                  <TableRow key={hospital.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-gray-500" />
                        {hospital.hospital}
                      </div>
                    </TableCell>
                    {Object.entries(hospital.bloodTypes).map(([type, data]) => (
                      <TableCell key={type}>
                        <div className="flex flex-col gap-1">
                          <span className="font-medium">{data.units} units</span>
                          {getStatusBadge(data.status)}
                        </div>
                      </TableCell>
                    ))}
                    <TableCell>{hospital.lastUpdated}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
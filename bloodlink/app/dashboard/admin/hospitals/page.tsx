'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Building2, Filter, MapPin, Phone, Mail, MoreVertical } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function HospitalsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample hospital data
  const hospitals = [
    {
      id: 1,
      name: 'Central Medical Center',
      address: '123 Healthcare Ave, New York, NY 10001',
      phone: '+1 212-555-0101',
      email: 'contact@centralmedical.com',
      status: 'active',
      bloodBankStatus: 'operational',
      lastUpdated: '2024-03-15',
      inventoryLevel: 'high',
    },
    {
      id: 2,
      name: 'City General Hospital',
      address: '456 Medical Blvd, Boston, MA 02108',
      phone: '+1 617-555-0202',
      email: 'info@citygeneral.org',
      status: 'active',
      bloodBankStatus: 'operational',
      lastUpdated: '2024-03-14',
      inventoryLevel: 'medium',
    },
    {
      id: 3,
      name: 'Metropolitan Hospital',
      address: '789 Health Street, Chicago, IL 60601',
      phone: '+1 312-555-0303',
      email: 'admin@metropolitan.org',
      status: 'maintenance',
      bloodBankStatus: 'limited',
      lastUpdated: '2024-03-13',
      inventoryLevel: 'low',
    },
    {
      id: 4,
      name: 'Community Medical Center',
      address: '321 Care Road, Los Angeles, CA 90001',
      phone: '+1 213-555-0404',
      email: 'support@communitymed.com',
      status: 'active',
      bloodBankStatus: 'operational',
      lastUpdated: '2024-03-15',
      inventoryLevel: 'high',
    },
    {
      id: 5,
      name: 'Regional Hospital',
      address: '654 Medical Plaza, Houston, TX 77001',
      phone: '+1 713-555-0505',
      email: 'contact@regionalhospital.org',
      status: 'inactive',
      bloodBankStatus: 'closed',
      lastUpdated: '2024-03-10',
      inventoryLevel: 'none',
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      maintenance: 'bg-yellow-100 text-yellow-800',
    };
    return (
      <Badge className={statusStyles[status as keyof typeof statusStyles]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getInventoryBadge = (level: string) => {
    const levelStyles = {
      high: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-red-100 text-red-800',
      none: 'bg-gray-100 text-gray-800',
    };
    return (
      <Badge className={levelStyles[level as keyof typeof levelStyles]}>
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Hospital Management</span>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search hospitals..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Building2 className="h-4 w-4 mr-2" />
                Add Hospital
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Blood Bank</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hospitals.map((hospital) => (
                <TableRow key={hospital.id}>
                  <TableCell className="font-medium">{hospital.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      {hospital.address}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-4 w-4 text-gray-500" />
                        {hospital.phone}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-4 w-4 text-gray-500" />
                        {hospital.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(hospital.status)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      hospital.bloodBankStatus === 'operational' ? 'text-green-600' :
                      hospital.bloodBankStatus === 'limited' ? 'text-yellow-600' :
                      'text-gray-600'
                    }>
                      {hospital.bloodBankStatus.charAt(0).toUpperCase() + hospital.bloodBankStatus.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>{getInventoryBadge(hospital.inventoryLevel)}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  );
}

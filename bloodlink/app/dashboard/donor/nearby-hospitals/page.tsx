'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Droplet,
  Search,
  Filter,
  Navigation,
  Star,
  Heart,
  AlertTriangle
} from 'lucide-react';

interface Hospital {
  id: string;
  name: string;
  type: 'hospital' | 'blood-bank' | 'both';
  address: string;
  distance: number;
  rating: number;
  bloodInventory: {
    type: string;
    status: 'available' | 'low' | 'critical';
  }[];
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  hours: {
    [key: string]: string;
  };
  services: string[];
  emergency: boolean;
  lastUpdated: string;
}

export default function NearbyHospitals() {
  const [hospitals, setHospitals] = useState<Hospital[]>([
    {
      id: '1',
      name: 'City General Hospital',
      type: 'both',
      address: '123 Main Street, City, Country',
      distance: 2.5,
      rating: 4.5,
      bloodInventory: [
        { type: 'A+', status: 'available' },
        { type: 'B+', status: 'low' },
        { type: 'O-', status: 'critical' },
      ],
      contact: {
        phone: '+1 234-567-8901',
        email: 'contact@cityhospital.com',
        website: 'www.cityhospital.com',
      },
      hours: {
        Monday: '24/7',
        Tuesday: '24/7',
        Wednesday: '24/7',
        Thursday: '24/7',
        Friday: '24/7',
        Saturday: '24/7',
        Sunday: '24/7',
      },
      services: [
        'Blood Donation',
        'Blood Testing',
        'Emergency Services',
        'Blood Storage',
      ],
      emergency: true,
      lastUpdated: '2024-03-20T10:00:00Z',
    },
    {
      id: '2',
      name: 'Community Blood Bank',
      type: 'blood-bank',
      address: '456 Oak Avenue, City, Country',
      distance: 3.8,
      rating: 4.2,
      bloodInventory: [
        { type: 'A+', status: 'available' },
        { type: 'B+', status: 'available' },
        { type: 'O-', status: 'low' },
      ],
      contact: {
        phone: '+1 234-567-8902',
        email: 'info@communitybloodbank.com',
        website: 'www.communitybloodbank.com',
      },
      hours: {
        Monday: '9:00 AM - 5:00 PM',
        Tuesday: '9:00 AM - 5:00 PM',
        Wednesday: '9:00 AM - 5:00 PM',
        Thursday: '9:00 AM - 5:00 PM',
        Friday: '9:00 AM - 5:00 PM',
        Saturday: '10:00 AM - 2:00 PM',
        Sunday: 'Closed',
      },
      services: ['Blood Donation', 'Blood Testing', 'Blood Storage'],
      emergency: false,
      lastUpdated: '2024-03-20T09:30:00Z',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedBloodType, setSelectedBloodType] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Nearby Hospitals & Blood Banks
          </h1>
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
            <select
              className="px-4 py-2 rounded-md border"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="hospital">Hospitals</option>
              <option value="blood-bank">Blood Banks</option>
            </select>
            <select
              className="px-4 py-2 rounded-md border"
              value={selectedBloodType}
              onChange={(e) => setSelectedBloodType(e.target.value)}
            >
              <option value="all">All Blood Types</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O-">O-</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardContent className="p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="mt-4 text-gray-500">Map will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hospital List */}
          <div className="space-y-4">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{hospital.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant={
                            hospital.type === 'both'
                              ? 'default'
                              : hospital.type === 'hospital'
                              ? 'secondary'
                              : 'outline'
                          }
                        >
                          {hospital.type === 'both'
                            ? 'Hospital & Blood Bank'
                            : hospital.type === 'hospital'
                            ? 'Hospital'
                            : 'Blood Bank'}
                        </Badge>
                        {hospital.emergency && (
                          <Badge variant="destructive">Emergency</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold">{hospital.rating}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Navigation className="h-4 w-4" />
                      <span>{hospital.distance} km away</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Blood Inventory</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.bloodInventory.map((blood) => (
                        <Badge
                          key={blood.type}
                          variant={
                            blood.status === 'critical'
                              ? 'destructive'
                              : blood.status === 'low'
                              ? 'secondary'
                              : 'default'
                          }
                          className="gap-1"
                        >
                          <Droplet className="h-3 w-3" />
                          {blood.type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      <span>{hospital.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4" />
                      <span>{hospital.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4" />
                      <span>{hospital.contact.website}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(hospital.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="text-gray-500">{day}</span>
                          <span>{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">Get Directions</Button>
                    <Button variant="outline" className="flex-1">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
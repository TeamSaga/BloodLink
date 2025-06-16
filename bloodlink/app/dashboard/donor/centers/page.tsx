'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  Filter,
  Search,
  Navigation,
  Calendar,
  Droplet,
  Info,
  ChevronRight,
  Map,
  List,
  SlidersHorizontal,
  Heart,
  AlertCircle,
  Users,
  Building2,
  Car,
  Bus,
  Train,
  Bike
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface DonationCenter {
  id: string;
  name: string;
  address: string;
  distance: number;
  rating: number;
  phone: string;
  hours: string;
  bloodTypesNeeded: string[];
  nextAvailableSlot: string;
  isOpen: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  facilities: string[];
  transportOptions: ('Car' | 'Bus' | 'Train' | 'Bike')[];
  capacity: number;
  currentDonors: number;
  emergency: boolean;
  lastUpdated: string;
}

const transportIcons = {
  Car,
  Bus,
  Train,
  Bike
} as const;

export default function NearbyCenters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'distance' | 'rating' | 'availability'>('distance');

  // Mock data for donation centers
  const centers: DonationCenter[] = [
    {
      id: '1',
      name: 'City Blood Bank',
      address: '123 Main St, City Center',
      distance: 2.5,
      rating: 4.8,
      phone: '+1 234-567-8900',
      hours: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM',
      bloodTypesNeeded: ['A+', 'O-', 'B+'],
      nextAvailableSlot: '2024-03-25 10:00 AM',
      isOpen: true,
      coordinates: { lat: 40.7128, lng: -74.0060 },
      facilities: ['Parking', 'Wheelchair Access', 'WiFi', 'Refreshments'],
      transportOptions: ['Car', 'Bus', 'Train'],
      capacity: 20,
      currentDonors: 5,
      emergency: true,
      lastUpdated: '2024-03-20T10:00:00Z'
    },
    {
      id: '2',
      name: 'Community Hospital Blood Center',
      address: '456 Health Ave, Medical District',
      distance: 3.8,
      rating: 4.6,
      phone: '+1 234-567-8901',
      hours: '24/7',
      bloodTypesNeeded: ['O+', 'AB-', 'A-'],
      nextAvailableSlot: '2024-03-24 2:30 PM',
      isOpen: true,
      coordinates: { lat: 40.7129, lng: -74.0061 },
      facilities: ['Parking', 'Wheelchair Access', 'WiFi', 'Refreshments', 'Child Care'],
      transportOptions: ['Car', 'Bus'],
      capacity: 15,
      currentDonors: 8,
      emergency: false,
      lastUpdated: '2024-03-20T09:30:00Z'
    },
    {
      id: '3',
      name: 'Red Cross Donation Center',
      address: '789 Hope St, Downtown',
      distance: 1.2,
      rating: 4.9,
      phone: '+1 234-567-8902',
      hours: 'Mon-Sat: 7AM-7PM',
      bloodTypesNeeded: ['B-', 'O+', 'AB+'],
      nextAvailableSlot: '2024-03-23 11:15 AM',
      isOpen: false,
      coordinates: { lat: 40.7130, lng: -74.0062 },
      facilities: ['Parking', 'WiFi', 'Refreshments'],
      transportOptions: ['Car', 'Bus', 'Train', 'Bike'],
      capacity: 25,
      currentDonors: 12,
      emergency: true,
      lastUpdated: '2024-03-20T08:45:00Z'
    }
  ];

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const filterOptions = [
    { id: 'parking', label: 'Parking Available', icon: Car },
    { id: 'wheelchair', label: 'Wheelchair Access', icon: Users },
    { id: 'emergency', label: 'Emergency Center', icon: AlertCircle },
    { id: '24hours', label: '24/7 Operation', icon: Clock }
  ];

  const filteredCenters = centers
    .filter(center => {
      const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          center.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBloodType = !selectedBloodType || center.bloodTypesNeeded.includes(selectedBloodType);
      const matchesFilters = selectedFilters.length === 0 || 
        selectedFilters.every(filter => {
          switch (filter) {
            case 'parking':
              return center.facilities.includes('Parking');
            case 'wheelchair':
              return center.facilities.includes('Wheelchair Access');
            case 'emergency':
              return center.emergency;
            case '24hours':
              return center.hours.includes('24/7');
            default:
              return true;
          }
        });
      return matchesSearch && matchesBloodType && matchesFilters;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'rating':
          return b.rating - a.rating;
        case 'availability':
          return a.currentDonors - b.currentDonors;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Nearby Centers
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              onClick={() => setViewMode('map')}
              className="gap-2"
            >
              <Map className="h-4 w-4" />
              Map View
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              List View
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Search className="h-5 w-5" />
              Find a Center
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Sort
                </Button>
              </div>

              {/* Blood Type Filters */}
              <div>
                <p className="text-sm font-medium mb-2">Blood Types Needed:</p>
                <div className="flex flex-wrap gap-2">
                  {bloodTypes.map((type) => (
                    <Badge
                      key={type}
                      variant={selectedBloodType === type ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedBloodType(type === selectedBloodType ? null : type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional Filters */}
              <div>
                <p className="text-sm font-medium mb-2">Additional Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((filter) => {
                    const Icon = filter.icon;
                    return (
                      <Badge
                        key={filter.id}
                        variant={selectedFilters.includes(filter.id) ? 'default' : 'outline'}
                        className="cursor-pointer gap-1"
                        onClick={() => {
                          setSelectedFilters(prev =>
                            prev.includes(filter.id)
                              ? prev.filter(f => f !== filter.id)
                              : [...prev, filter.id]
                          );
                        }}
                      >
                        <Icon className="h-3 w-3" />
                        {filter.label}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map View */}
        {viewMode === 'map' && (
          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Map className="h-5 w-5" />
                Map View
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map integration coming soon...</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Centers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <Card key={center.id} className={getCardClass('red')}>
              <CardHeader className={getHeaderClass('red')}>
                <CardTitle className={getTitleClass('red')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {center.name}
                    </div>
                    {center.emergency && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Emergency
                      </Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className={getContentClass('red')}>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{center.address}</p>
                      <p className="text-sm text-gray-500">{center.distance} km away</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">{center.rating}</span>
                    <Badge variant={center.isOpen ? 'default' : 'destructive'}>
                      {center.isOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{center.hours}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Blood Types Needed:</p>
                    <div className="flex flex-wrap gap-2">
                      {center.bloodTypesNeeded.map((type) => (
                        <Badge key={type} variant="outline" className="gap-1">
                          <Droplet className="h-3 w-3" />
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Facilities:</p>
                    <div className="flex flex-wrap gap-2">
                      {center.facilities.map((facility) => (
                        <Badge key={facility} variant="outline">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Transport Options:</p>
                    <div className="flex flex-wrap gap-2">
                      {center.transportOptions.map((option) => {
                        const Icon = transportIcons[option];
                        return (
                          <Badge key={option} variant="outline" className="gap-1">
                            <Icon className="h-3 w-3" />
                            {option}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        Next slot: {center.nextAvailableSlot}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Navigation className="h-4 w-4" />
                      Directions
                    </Button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {center.currentDonors}/{center.capacity} donors
                      </span>
                    </div>
                    <Button variant="default" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      Schedule Donation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 
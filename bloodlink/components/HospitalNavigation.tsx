'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Home,
  Droplet,
  Users,
  Calendar,
  BarChart3,
  MapPin,
  FileText,
  Bell,
  User,
  Settings,
  LogOut,
  Building2,
  Megaphone,
  ClipboardList,
  AlertTriangle,
  Truck,
  TestTube,
  Microscope,
} from 'lucide-react';

export default function HospitalNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      {/* Logo */}
      <Link href="/dashboard/hospital" className="flex items-center gap-2 mb-8 px-2">
        <Building2 className="h-8 w-8 text-blue-500" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Hospital Portal
        </span>
      </Link>

      {/* Main Navigation */}
      <div className="flex-1 space-y-2">
        <Link href="/dashboard/hospital">
          <Button
            variant={isActive('/dashboard/hospital') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/hospital/inventory">
          <Button
            variant={isActive('/dashboard/hospital/inventory') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Droplet className="h-5 w-5" />
            Blood Inventory
          </Button>
        </Link>

        <Link href="/dashboard/hospital/requests">
          <Button
            variant={isActive('/dashboard/hospital/requests') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Users className="h-5 w-5" />
            Blood Requests
          </Button>
        </Link>

        <Link href="/dashboard/hospital/donors">
          <Button
            variant={isActive('/dashboard/hospital/donors') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Users className="h-5 w-5" />
            Donor Management
          </Button>
        </Link>

        <Link href="/dashboard/hospital/campaigns">
          <Button
            variant={isActive('/dashboard/hospital/campaigns') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Megaphone className="h-5 w-5" />
            Campaigns
          </Button>
        </Link>

        <Link href="/dashboard/hospital/screening">
          <Button
            variant={isActive('/dashboard/hospital/screening') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <TestTube className="h-5 w-5" />
            Blood Screening
          </Button>
        </Link>

        <Link href="/dashboard/hospital/lab">
          <Button
            variant={isActive('/dashboard/hospital/lab') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Microscope className="h-5 w-5" />
            Laboratory
          </Button>
        </Link>

        <Link href="/dashboard/hospital/transport">
          <Button
            variant={isActive('/dashboard/hospital/transport') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Truck className="h-5 w-5" />
            Transport
          </Button>
        </Link>

        <Link href="/dashboard/hospital/emergency">
          <Button
            variant={isActive('/dashboard/hospital/emergency') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <AlertTriangle className="h-5 w-5" />
            Emergency
          </Button>
        </Link>

        <Link href="/dashboard/hospital/analytics">
          <Button
            variant={isActive('/dashboard/hospital/analytics') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <BarChart3 className="h-5 w-5" />
            Analytics
          </Button>
        </Link>

        <Link href="/dashboard/hospital/locations">
          <Button
            variant={isActive('/dashboard/hospital/locations') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <MapPin className="h-5 w-5" />
            Locations
          </Button>
        </Link>

        <Link href="/dashboard/hospital/reports">
          <Button
            variant={isActive('/dashboard/hospital/reports') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <ClipboardList className="h-5 w-5" />
            Reports
          </Button>
        </Link>

        <Link href="/dashboard/hospital/documents">
          <Button
            variant={isActive('/dashboard/hospital/documents') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <FileText className="h-5 w-5" />
            Documents
          </Button>
        </Link>

        <Link href="/dashboard/hospital/notifications">
          <Button
            variant={isActive('/dashboard/hospital/notifications') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Bell className="h-5 w-5" />
            Notifications
          </Button>
        </Link>
      </div>

      {/* User Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
        <Link href="/dashboard/hospital/profile">
          <Button
            variant={isActive('/dashboard/hospital/profile') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <User className="h-5 w-5" />
            Profile
          </Button>
        </Link>

        <Link href="/dashboard/hospital/settings">
          <Button
            variant={isActive('/dashboard/hospital/settings') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Button>
        </Link>

        <Button variant="ghost" className="w-full justify-start gap-2 text-red-500">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </nav>
  );
} 
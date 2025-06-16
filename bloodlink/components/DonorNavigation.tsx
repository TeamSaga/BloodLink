'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Home,
  Droplet,
  Calendar,
  History,
  Trophy,
  MapPin,
  FileText,
  Bell,
  User,
  Settings,
  LogOut,
} from 'lucide-react';

export default function DonorNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      {/* Logo */}
      <Link href="/dashboard/donor" className="flex items-center gap-2 mb-8 px-2">
        <Droplet className="h-8 w-8 text-red-500" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Donor Portal
        </span>
      </Link>

      {/* Main Navigation */}
      <div className="flex-1 space-y-2">
        <Link href="/dashboard/donor">
          <Button
            variant={isActive('/dashboard/donor') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/donor/donate">
          <Button
            variant={isActive('/dashboard/donor/donate') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Droplet className="h-5 w-5" />
            Donate Now
          </Button>
        </Link>

        <Link href="/dashboard/donor/schedule">
          <Button
            variant={isActive('/dashboard/donor/schedule') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule
          </Button>
        </Link>

        <Link href="/dashboard/donor/history">
          <Button
            variant={isActive('/dashboard/donor/history') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <History className="h-5 w-5" />
            Donation History
          </Button>
        </Link>

        <Link href="/dashboard/donor/achievements">
          <Button
            variant={isActive('/dashboard/donor/achievements') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Trophy className="h-5 w-5" />
            Achievements
          </Button>
        </Link>

        <Link href="/dashboard/donor/nearby">
          <Button
            variant={isActive('/dashboard/donor/nearby') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <MapPin className="h-5 w-5" />
            Nearby Centers
          </Button>
        </Link>

        <Link href="/dashboard/donor/documents">
          <Button
            variant={isActive('/dashboard/donor/documents') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <FileText className="h-5 w-5" />
            Documents
          </Button>
        </Link>

        <Link href="/dashboard/donor/notifications">
          <Button
            variant={isActive('/dashboard/donor/notifications') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Bell className="h-5 w-5" />
            Notifications
          </Button>
        </Link>
      </div>

      {/* User Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
        <Link href="/dashboard/donor/profile">
          <Button
            variant={isActive('/dashboard/donor/profile') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <User className="h-5 w-5" />
            Profile
          </Button>
        </Link>

        <Link href="/dashboard/donor/settings">
          <Button
            variant={isActive('/dashboard/donor/settings') ? 'default' : 'ghost'}
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
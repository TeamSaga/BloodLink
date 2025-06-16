'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Home,
  Users,
  Building2,
  Droplet,
  Heart,
  Bell,
  User,
  LogOut,
  X,
} from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      {/* Logo and Close Button */}
      <div className="flex items-center justify-between mb-8 px-2">
        <Link href="/" className="flex items-center gap-2">
          <Droplet className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            BloodLink
          </span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => {
            const event = new CustomEvent('toggleMobileMenu');
            window.dispatchEvent(event);
          }}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 space-y-2">
        <Link href="/">
          <Button
            variant={isActive('/') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Home className="h-5 w-5" />
            Home
          </Button>
        </Link>

        <Link href="/dashboard/donor">
          <Button
            variant={isActive('/dashboard/donor') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <User className="h-5 w-5" />
            Donor Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/hospital">
          <Button
            variant={isActive('/dashboard/hospital') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Building2 className="h-5 w-5" />
            Hospital Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/admin">
          <Button
            variant={isActive('/dashboard/admin') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Users className="h-5 w-5" />
            Admin Dashboard
          </Button>
        </Link>

        <Link href="/donate">
          <Button
            variant={isActive('/donate') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Heart className="h-5 w-5" />
            Donate Now
          </Button>
        </Link>

        <Link href="/find-blood">
          <Button
            variant={isActive('/find-blood') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Droplet className="h-5 w-5" />
            Find Blood
          </Button>
        </Link>

        <Link href="/notifications">
          <Button
            variant={isActive('/notifications') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Bell className="h-5 w-5" />
            Notifications
          </Button>
        </Link>
      </div>

      {/* User Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <Button variant="ghost" className="w-full justify-start gap-2 text-red-500">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </nav>
  );
} 
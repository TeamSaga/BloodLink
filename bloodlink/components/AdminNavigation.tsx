'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Home,
  Users,
  Building2,
  Droplet,
  Settings,
  LogOut,
  FileText,
  BarChart3,
  Shield,
  Bell,
  User,
  Globe,
  Mail,
  MessageSquare,
  HelpCircle,
  AlertCircle,
  Megaphone,
  DollarSign,
  HeartHandshake,
  AlertTriangle,
} from 'lucide-react';

export default function AdminNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      {/* Logo */}
      <Link href="/dashboard/admin" className="flex items-center gap-2 mb-8 px-2">
        <Shield className="h-8 w-8 text-purple-500" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
          Admin Portal
        </span>
      </Link>

      {/* Main Navigation */}
      <div className="space-y-2">
        <Link href="/dashboard/admin">
          <Button
            variant={isActive('/dashboard/admin') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/admin/users">
          <Button
            variant={isActive('/dashboard/admin/users') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Users className="h-5 w-5" />
            User Management
          </Button>
        </Link>

        <Link href="/dashboard/admin/hospitals">
          <Button
            variant={isActive('/dashboard/admin/hospitals') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Building2 className="h-5 w-5" />
            Hospital Management
          </Button>
        </Link>

        <Link href="/dashboard/admin/inventory">
          <Button
            variant={isActive('/dashboard/admin/inventory') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Droplet className="h-5 w-5" />
            Blood Inventory
          </Button>
        </Link>

        <Link href="/dashboard/admin/analytics">
          <Button
            variant={isActive('/dashboard/admin/analytics') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <BarChart3 className="h-5 w-5" />
            Analytics
          </Button>
        </Link>

        <Link href="/dashboard/admin/campaigns">
          <Button
            variant={isActive('/dashboard/admin/campaigns') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Megaphone className="h-5 w-5" />
            Campaign Management
          </Button>
        </Link>

        <Link href="/dashboard/admin/donations">
          <Button
            variant={isActive('/dashboard/admin/donations') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <DollarSign className="h-5 w-5" />
            Financial Donations
          </Button>
        </Link>

        <Link href="/dashboard/admin/donor-requests">
          <Button
            variant={isActive('/dashboard/admin/donor-requests') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <HeartHandshake className="h-5 w-5" />
            Donor Requests
          </Button>
        </Link>

        <Link href="/dashboard/admin/disaster-requests">
          <Button
            variant={isActive('/dashboard/admin/disaster-requests') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <AlertTriangle className="h-5 w-5" />
            Disaster Requests
          </Button>
        </Link>

        <Link href="/dashboard/admin/notifications">
          <Button
            variant={isActive('/dashboard/admin/notifications') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Bell className="h-5 w-5" />
            Notifications
          </Button>
        </Link>

        <Link href="/dashboard/admin/communication">
          <Button
            variant={isActive('/dashboard/admin/communication') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            Communication
          </Button>
        </Link>

        <Link href="/dashboard/admin/regions">
          <Button
            variant={isActive('/dashboard/admin/regions') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <Globe className="h-5 w-5" />
            Region Management
          </Button>
        </Link>

        <Link href="/dashboard/admin/help">
          <Button
            variant={isActive('/dashboard/admin/help') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <HelpCircle className="h-5 w-5" />
            Help Center
          </Button>
        </Link>

        <Link href="/dashboard/admin/alerts">
          <Button
            variant={isActive('/dashboard/admin/alerts') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <AlertCircle className="h-5 w-5" />
            System Alerts
          </Button>
        </Link>
      </div>

      {/* User Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
        <Link href="/dashboard/admin/profile">
          <Button
            variant={isActive('/dashboard/admin/profile') ? 'default' : 'ghost'}
            className="w-full justify-start gap-2"
          >
            <User className="h-5 w-5" />
            Profile
          </Button>
        </Link>

        <Link href="/dashboard/admin/settings">
          <Button
            variant={isActive('/dashboard/admin/settings') ? 'default' : 'ghost'}
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
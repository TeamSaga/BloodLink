'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Droplet, Heart, User, Building2 } from 'lucide-react';

export default function PublicNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Droplet className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              BloodLink
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              About
            </Link>
            <Link href="/how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              How It Works
            </Link>
            <Link href="/find-blood" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              Find Blood
            </Link>
            <Link href="/donate" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              Donate
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-red-600 hover:bg-red-700">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Heart,
  Search,
  LogIn,
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/BloodDrop.png"
                alt="BloodLink Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                priority
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                BloodLink
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/donate" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              Donate
            </Link>
            <Link href="/request" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              Request
            </Link>
            <Link href="/campaigns" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              Campaigns
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400">
              About
            </Link>
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link href="/login">
              <Button variant="outline" className="border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20">
                <LogIn className="mr-2 h-5 w-5" />
                Login
              </Button>
            </Link>

            <Button className="bg-red-600 hover:bg-red-700">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <Link
                href="/donate"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Donate
              </Link>
              <Link
                href="/request"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Request
              </Link>
              <Link
                href="/campaigns"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Campaigns
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                About
              </Link>

              <div className="border-t border-gray-200 dark:border-gray-800 my-4" />

              <div className="space-y-2">
                <Link href="/login">
                  <Button variant="outline" className="w-full border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20">
                    <LogIn className="mr-2 h-5 w-5" />
                    Login
                  </Button>
                </Link>
                <Button className="bg-red-600 hover:bg-red-700 w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
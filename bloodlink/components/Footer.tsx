import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/BloodDrop.png"
                  alt="BloodLink Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                  BloodLink
                </span>
              </Link>
            </div>
            <p className="text-sm">
              Connecting blood donors with those in need. Together, we can save more lives.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link href="/request" className="hover:text-white transition-colors">
                  Request Blood
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-white transition-colors">
                  Blood Drives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-white transition-colors">
                  Donation Guidelines
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <span>123 Blood Drive Street, Medical District, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span>contact@bloodlink.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} BloodLink. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blood Donation', href: '/register-donor' },
    { name: 'Organ Donation', href: '/organ-donation' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' }
  ];

  const organDonationLinks = [
    { name: 'What is Organ Donation', href: '/organ-donation/what-is-organ-donation' },
    { name: 'Types of Organs', href: '/organ-donation/types' },
    { name: 'Donation Process', href: '/organ-donation/process' },
    { name: 'Myths & Facts', href: '/organ-donation/myths-facts' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold">BloodLink</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting donors, hospitals, and communities to save lives through 
              real-time emergency alerts and transparent donation management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organ Donation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Organ Donation</h3>
            <ul className="space-y-2">
              {organDonationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-gray-300">info@bloodlink.lk</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-red-500 mr-2 mt-1" />
                <span className="text-gray-300">
                  University of Moratuwa,<br />
                  Katubedda, Moratuwa,<br />
                  Sri Lanka
                </span>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <h4 className="text-red-400 font-semibold mb-2">Emergency Hotline</h4>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-white font-bold">1919</span>
              </div>
              <p className="text-gray-300 text-sm mt-1">24/7 Blood Emergency</p>            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400">
                © {currentYear} BloodLink. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Made with ❤️ by Team Saga
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

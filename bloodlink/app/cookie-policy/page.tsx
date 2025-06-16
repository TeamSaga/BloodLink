'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: June 16, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What Are Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              improving the functionality of our platform.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Essential Cookies</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Required for the platform to function properly, including authentication and security.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Functional Cookies</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Remember your preferences and settings to enhance your user experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Analytics Cookies</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Help us understand how users interact with our platform to improve our services.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Managing Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              You can control and manage cookies through your browser settings. However, disabling certain 
              cookies may affect the functionality of BloodLink. Essential cookies cannot be disabled as 
              they are necessary for the platform to operate.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about our use of cookies, please contact us at privacy@bloodlink.lk.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

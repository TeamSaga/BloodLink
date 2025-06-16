"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: June 16, 2025
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using BloodLink, you accept and agree to be bound
              by the terms and provision of this agreement. These terms apply to
              all users of the platform, including donors, hospitals, and
              healthcare organizations.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              As a user of BloodLink, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Provide accurate and truthful information about your medical
                history and eligibility
              </li>
              <li>Update your information when circumstances change</li>
              <li>
                Use the platform only for legitimate donation-related activities
              </li>
              <li>Respect the privacy and safety of other users</li>
              <li>Follow all applicable laws and medical guidelines</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Medical Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              BloodLink is a platform that connects donors with healthcare
              organizations. We do not provide medical advice, diagnosis, or
              treatment. All medical decisions should be made in consultation
              with qualified healthcare professionals. Users must meet all
              medical eligibility requirements before donating.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              BloodLink shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of the platform. Our liability is limited to the maximum
              extent permitted by law.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about these Terms of Service, please contact us at
              legal@bloodlink.lk or through our contact page.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Disclaimer
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Important information about using BloodLink
          </p>
        </div>

        <div className="mb-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-2" />
            <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300">
              Medical Disclaimer
            </h2>
          </div>
          <p className="text-yellow-700 dark:text-yellow-300">
            BloodLink is not a medical service provider. All medical decisions,
            including eligibility to donate blood or organs, must be made by
            qualified healthcare professionals.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Platform Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              BloodLink is a technology platform designed to connect blood and
              organ donors with healthcare organizations. We facilitate
              communication and coordination but do not provide medical
              services, advice, or treatment.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information Accuracy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              While we strive to provide accurate information, BloodLink makes
              no warranties about:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                The completeness or accuracy of information provided by users
              </li>
              <li>The availability of donors or medical facilities</li>
              <li>The success of donation matching or emergency alerts</li>
              <li>The medical suitability of any donor or recipient</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Emergency Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              BloodLink is not a substitute for official emergency services. In
              case of medical emergencies, always contact your local emergency
              services (119 in Sri Lanka) immediately. Our platform is designed
              to supplement, not replace, traditional emergency response
              systems.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Responsibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              Users are responsible for ensuring they meet all medical and legal
              requirements before participating in any donation activities.
              Always consult with healthcare professionals and follow official
              medical guidelines.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about this disclaimer or our platform, please
              contact us at info@bloodlink.lk or through our contact page.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

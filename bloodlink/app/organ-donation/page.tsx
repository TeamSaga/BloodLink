'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Info, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';
import Link from 'next/link';

interface AwarenessSection {
  title: string;
  content: string;
  expanded: boolean;
  learnMoreLink: string;
}

export default function OrganDonationPage() {
  const [sections, setSections] = useState<AwarenessSection[]>([
    {
      title: "What is Organ Donation?",
      content: "Organ donation is the process of giving an organ or a part of an organ for the purpose of transplantation into another person. One organ donor can save up to 8 lives and improve the quality of life for many more through tissue donation.",
      expanded: false,
      learnMoreLink: "/organ-donation/what-is-organ-donation"
    },
    {
      title: "Types of Organ Donation",
      content: "There are two types of organ donation: living donation and deceased donation. Living donation occurs when a person donates an organ or part of an organ while still alive. Deceased donation happens after a person has been declared brain dead and their organs are donated to save others' lives.",
      expanded: false,
      learnMoreLink: "/organ-donation/types"
    },
    {
      title: "Organs That Can Be Donated",
      content: "Organs that can be donated include: heart, lungs, liver, kidneys, pancreas, and intestines. Tissues that can be donated include: corneas, skin, bone, heart valves, tendons, and veins.",
      expanded: false,
      learnMoreLink: "/organ-donation/organs"
    },
    {
      title: "The Donation Process",
      content: "The organ donation process involves several steps: registration as a donor, medical evaluation, matching with recipients, and the actual transplantation surgery. The entire process is carefully coordinated to ensure the best possible outcomes for recipients.",
      expanded: false,
      learnMoreLink: "/organ-donation/process"
    },
    {
      title: "Myths and Facts",
      content: "Common myths about organ donation include: 'Doctors won't try to save my life if I'm a donor' (false), 'I'm too old to donate' (false), and 'My religion doesn't support organ donation' (most major religions support organ donation).",
      expanded: false,
      learnMoreLink: "/organ-donation/myths-facts"
    }
  ]);

  const toggleSection = (index: number) => {
    setSections(prev => prev.map((section, i) => 
      i === index ? { ...section, expanded: !section.expanded } : section
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <Heart className="h-5 w-5" />
            Organ Donation Awareness
          </CardTitle>
        </CardHeader>
        <CardContent className={getContentClass('red')}>
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Give the Gift of Life
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Organ donation is one of the most selfless acts of kindness. Learn more about how you can make a difference in someone's life.
              </p>
              <Link href="/register-donor" className="inline-block">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Awareness Sections */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-red-500" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {section.title}
                      </h3>
                    </div>
                    {section.expanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {section.expanded && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {section.content}
                      </p>
                      <Link href={section.learnMoreLink} passHref>
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4 pt-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Ready to Make a Difference?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Register as an organ donor today and give the gift of life.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/register-donor" passHref>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Register as Donor
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline">
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileText,
  Video,
  Headphones,
  Users,
  Shield,
  Heart,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'donation' | 'account' | 'technical';
}

interface SupportResource {
  title: string;
  description: string;
  icon: any;
  link: string;
  type: 'guide' | 'video' | 'article' | 'contact';
}

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());

  const faqs: FAQ[] = [
    {
      question: 'How often can I donate blood?',
      answer: 'You can donate whole blood every 56 days (8 weeks). For platelets, you can donate every 7 days, up to 24 times per year. For plasma, you can donate every 28 days.',
      category: 'donation'
    },
    {
      question: 'What are the basic requirements to donate blood?',
      answer: 'You must be at least 17 years old (16 with parental consent in some states), weigh at least 110 pounds, and be in good health. You should not have donated blood in the last 56 days.',
      category: 'donation'
    },
    {
      question: 'How do I update my contact information?',
      answer: 'You can update your contact information by going to your profile settings. Click on the "Edit Profile" button and update your details. Don\'t forget to save your changes.',
      category: 'account'
    },
    {
      question: 'What should I do if I forgot my password?',
      answer: 'Click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password.',
      category: 'account'
    },
    {
      question: 'How do I schedule a donation appointment?',
      answer: 'You can schedule a donation appointment through the "Schedule Donation" button on your dashboard or by visiting the "Nearby Centers" page and selecting your preferred location.',
      category: 'general'
    },
    {
      question: 'What happens to my blood after donation?',
      answer: 'After donation, your blood is tested for safety, processed into components (red cells, plasma, platelets), and stored for distribution to hospitals and medical facilities.',
      category: 'general'
    },
    {
      question: 'How do I track my donation history?',
      answer: 'You can view your complete donation history in the "Donation History" section of your dashboard. This includes dates, locations, and blood types donated.',
      category: 'account'
    },
    {
      question: 'What should I do if the app is not working?',
      answer: 'Try clearing your browser cache and refreshing the page. If the issue persists, contact our technical support team through the "Contact Support" form.',
      category: 'technical'
    }
  ];

  const supportResources: SupportResource[] = [
    {
      title: 'Donation Guide',
      description: 'Learn everything about the blood donation process',
      icon: BookOpen,
      link: '/guides/donation',
      type: 'guide'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides and tutorials',
      icon: Video,
      link: '/tutorials',
      type: 'video'
    },
    {
      title: 'FAQs',
      description: 'Find answers to common questions',
      icon: FileText,
      link: '/faqs',
      type: 'article'
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: MessageCircle,
      link: '/chat',
      type: 'contact'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (question: string) => {
    setExpandedFAQs(prev => {
      const next = new Set(prev);
      if (next.has(question)) {
        next.delete(question);
      } else {
        next.add(question);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Support Center
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>

        {/* Quick Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.title} className={getCardClass('blue')}>
                <CardHeader className={getHeaderClass('blue')}>
                  <CardTitle className={getTitleClass('blue')}>
                    <Icon className="h-5 w-5" />
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className={getContentClass('blue')}>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {resource.description}
                  </p>
                  <Button variant="outline" className="w-full gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Search and Categories */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Search className="h-5 w-5" />
              Find Help
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="space-y-4">
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={!selectedCategory ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Badge>
                <Badge
                  variant={selectedCategory === 'general' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory('general')}
                >
                  General
                </Badge>
                <Badge
                  variant={selectedCategory === 'donation' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory('donation')}
                >
                  Donation
                </Badge>
                <Badge
                  variant={selectedCategory === 'account' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory('account')}
                >
                  Account
                </Badge>
                <Badge
                  variant={selectedCategory === 'technical' ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory('technical')}
                >
                  Technical
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <Card key={faq.question} className={getCardClass('red')}>
              <CardHeader className={getHeaderClass('red')}>
                <CardTitle className={getTitleClass('red')}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      {faq.question}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFAQ(faq.question)}
                    >
                      {expandedFAQs.has(faq.question) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              {expandedFAQs.has(faq.question) && (
                <CardContent className={getContentClass('red')}>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Phone className="h-5 w-5" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Available 24/7 for urgent assistance
              </p>
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get a response within 24 hours
              </p>
              <Button variant="outline" className="w-full gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Clock className="h-5 w-5" />
                Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 
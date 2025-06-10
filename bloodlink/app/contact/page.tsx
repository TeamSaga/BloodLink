'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageSquare, Mail, Phone, MapPin, Send } from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className={getCardClass('red')}>
        <CardHeader className={getHeaderClass('red')}>
          <CardTitle className={getTitleClass('red')}>
            <MessageSquare className="h-5 w-5" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent className={getContentClass('red')}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">contact@bloodlink.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Medical Center Drive<br />
                      Healthcare District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Office Hours
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[150px] p-2 border rounded-md"
                    required
                  />
                </div>

                <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                  Send Message
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
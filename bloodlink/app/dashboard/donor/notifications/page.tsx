'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Bell, 
  BellOff, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Heart,
  Droplet,
  Calendar,
  MapPin,
  Clock,
  Filter,
  Search,
  Trash2,
  Archive,
  Mail,
  MessageSquare
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'alert' | 'reminder' | 'achievement' | 'system';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
  icon: string;
  action?: {
    label: string;
    href: string;
  };
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'alert',
      title: 'Urgent Blood Request',
      message: 'City Hospital needs O+ blood type immediately',
      timestamp: '2024-03-20T10:00:00Z',
      read: false,
      priority: 'high',
      icon: 'alert',
      action: {
        label: 'View Details',
        href: '/dashboard/donor/requests/1',
      },
    },
    {
      id: '2',
      type: 'reminder',
      title: 'Donation Reminder',
      message: 'You are eligible to donate blood again',
      timestamp: '2024-03-19T15:30:00Z',
      read: true,
      priority: 'medium',
      icon: 'calendar',
      action: {
        label: 'Schedule Donation',
        href: '/dashboard/donor/schedule',
      },
    },
    {
      id: '3',
      type: 'achievement',
      title: 'New Achievement Unlocked',
      message: 'Congratulations! You have reached Silver Donor status',
      timestamp: '2024-03-18T09:15:00Z',
      read: false,
      priority: 'low',
      icon: 'trophy',
      action: {
        label: 'View Achievement',
        href: '/dashboard/donor/achievements',
      },
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = notification.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === 'all' || notification.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'calendar':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'trophy':
        return <Heart className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Notifications
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search notifications..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 rounded-md border"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="alert">Alerts</option>
              <option value="reminder">Reminders</option>
              <option value="achievement">Achievements</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-4 border rounded-lg transition-colors duration-200 ${
                    notification.read
                      ? 'bg-gray-50 dark:bg-gray-800/50'
                      : 'bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {getIcon(notification.icon)}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{notification.title}</h3>
                        <p className="text-sm text-gray-500">{notification.message}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            notification.priority === 'high'
                              ? 'destructive'
                              : notification.priority === 'medium'
                              ? 'secondary'
                              : 'default'
                          }
                        >
                          {notification.priority.toUpperCase()}
                        </Badge>
                        {!notification.read && (
                          <Badge variant="outline" className="bg-blue-100">
                            NEW
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(notification.timestamp).toLocaleString()}
                        </span>
                        {notification.action && (
                          <Button
                            variant="link"
                            className="text-sm"
                            onClick={() => window.location.href = notification.action!.href}
                          >
                            {notification.action.label}
                          </Button>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="gap-2">
            <Archive className="h-4 w-4" />
            Archive All
          </Button>
          <Button variant="outline" className="gap-2">
            <BellOff className="h-4 w-4" />
            Mark All as Read
          </Button>
        </div>
      </div>
    </div>
  );
} 
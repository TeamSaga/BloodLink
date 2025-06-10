'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, AlertCircle, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  getCardClass,
  getHeaderClass,
  getTitleClass,
  getContentClass,
  getBadgeClass,
} from '@/lib/theme';

interface Notification {
  id: string;
  type: 'alert' | 'update' | 'reminder';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  priority: 'high' | 'medium' | 'low';
  location?: string;
}

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'alert',
      title: 'Urgent Blood Need',
      message: 'Emergency need for O+ blood at City Hospital',
      timestamp: new Date('2024-03-20T10:00:00'),
      read: false,
      priority: 'high',
      location: 'City Hospital',
    },
    {
      id: '2',
      type: 'reminder',
      title: 'Upcoming Donation',
      message: 'Your next donation is scheduled for March 25, 2024',
      timestamp: new Date('2024-03-19T15:30:00'),
      read: true,
      priority: 'medium',
    },
    {
      id: '3',
      type: 'update',
      title: 'Campaign Update',
      message: 'Community Blood Drive has reached 75% of its target',
      timestamp: new Date('2024-03-18T09:15:00'),
      read: false,
      priority: 'low',
      location: 'Central Blood Bank',
    },
  ]);

  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifications = notifications.filter(
    notification => filter === 'all' || !notification.read
  );

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'update':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'reminder':
        return <Clock className="h-5 w-5 text-blue-500" />;
    }
  };

  const getPriorityColor = (priority: Notification['priority']) => {
    switch (priority) {
      case 'high':
        return getBadgeClass('red');
      case 'medium':
        return getBadgeClass('yellow');
      case 'low':
        return getBadgeClass('blue');
    }
  };

  return (
    <Card className={getCardClass('red')}>
      <CardHeader className={getHeaderClass('red')}>
        <div className="flex items-center justify-between">
          <CardTitle className={getTitleClass('red')}>
            <Bell className="h-5 w-5" />
            Notification Center
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge
              variant={filter === 'all' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/20"
              onClick={() => setFilter('all')}
            >
              All
            </Badge>
            <Badge
              variant={filter === 'unread' ? 'default' : 'outline'}
              className="cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/20"
              onClick={() => setFilter('unread')}
            >
              Unread
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                'group p-4 rounded-lg border transition-all duration-300',
                notification.read
                  ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800'
                  : getContentClass('red')
              )}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {notification.title}
                    </h3>
                    <Badge className={getPriorityColor(notification.priority)}>
                      {notification.priority.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {notification.message}
                  </p>
                  {notification.location && (
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      {notification.location}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {notification.timestamp.toLocaleString()}
                    </span>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 
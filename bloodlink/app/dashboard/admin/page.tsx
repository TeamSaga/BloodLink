'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Building2, Droplet, AlertTriangle, Activity, Settings, Shield, Search, Filter, Download, Upload, BarChart3, PieChart, LineChart, Calendar, Bell, Mail, UserPlus, UserMinus, RefreshCw, MapPin, Clock, CheckCircle, XCircle, TrendingUp, TrendingDown, AlertCircle, FileText, Database, Server, Network, Zap, Lock, Unlock, Eye, EyeOff, BellRing, BellOff, Settings2, Users2, Building, Heart, Sun, Moon, Cloud, CloudOff, Wind, Droplets, Thermometer, Gauge, Cpu, HardDrive, Wifi, Signal, SignalHigh, SignalMedium, SignalLow, SignalZero, Battery, BatteryCharging, Power, PowerOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdminStats {
  totalDonors: number;
  totalHospitals: number;
  activeRequests: number;
  bloodInventory: {
    type: string;
    quantity: number;
    status: 'critical' | 'low' | 'normal';
    trend: 'up' | 'down' | 'stable';
    lastUpdated: string;
    location: string;
    expiryDate: string;
    temperature: number;
    storageCondition: string;
  }[];
  recentActivities: Array<{
    type: string;
    description: string;
    timestamp: string;
    severity: 'high' | 'medium' | 'low';
    status: 'pending' | 'completed' | 'cancelled';
    location: string;
    user: string;
    action: string;
  }>;
  systemMetrics: {
    activeUsers: number;
    totalDonations: number;
    emergencyRequests: number;
    systemHealth: number;
    serverLoad: number;
    databaseSize: number;
    networkStatus: string;
    lastBackup: string;
    securityStatus: string;
    apiCalls: number;
    responseTime: number;
    errorRate: number;
  };
  alerts: Array<{
    type: string;
    message: string;
    priority: 'high' | 'medium' | 'low';
    timestamp: string;
    source: string;
    category: string;
    action: string;
  }>;
  donorMetrics: {
    totalDonors: number;
    activeDonors: number;
    newDonors: number;
    donorRetention: number;
    averageDonations: number;
    topDonors: Array<{
      name: string;
      donations: number;
      lastDonation: string;
      bloodType: string;
    }>;
  };
  hospitalMetrics: {
    totalHospitals: number;
    activeHospitals: number;
    newHospitals: number;
    averageRequests: number;
    topHospitals: Array<{
      name: string;
      requests: number;
      lastRequest: string;
      location: string;
    }>;
  };
  analytics: {
    dailyDonations: number[];
    weeklyDonations: number[];
    monthlyDonations: number[];
    bloodTypeDistribution: {
      type: string;
      percentage: number;
    }[];
    locationDistribution: {
      location: string;
      percentage: number;
    }[];
    requestTrends: {
      date: string;
      requests: number;
    }[];
  };
}

const cardStyles = {
  base: 'overflow-hidden border-2 transition-all duration-300 hover:shadow-lg',
  variants: {
    red: 'border-red-100 hover:border-red-200 dark:border-red-800 dark:hover:border-red-700',
    blue: 'border-blue-100 hover:border-blue-200 dark:border-blue-800 dark:hover:border-blue-700',
    green: 'border-green-100 hover:border-green-200 dark:border-green-800 dark:hover:border-green-700',
  },
};

const getCardClass = (variant: keyof typeof cardStyles.variants) =>
  cn(cardStyles.base, cardStyles.variants[variant]);

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats>({
    totalDonors: 0,
    totalHospitals: 0,
    activeRequests: 0,
    bloodInventory: [],
    recentActivities: [],
    systemMetrics: {
      activeUsers: 0,
      totalDonations: 0,
      emergencyRequests: 0,
      systemHealth: 0,
      serverLoad: 0,
      databaseSize: 0,
      networkStatus: '',
      lastBackup: '',
      securityStatus: '',
      apiCalls: 0,
      responseTime: 0,
      errorRate: 0,
    },
    alerts: [],
    donorMetrics: {
      totalDonors: 0,
      activeDonors: 0,
      newDonors: 0,
      donorRetention: 0,
      averageDonations: 0,
      topDonors: [],
    },
    hospitalMetrics: {
      totalHospitals: 0,
      activeHospitals: 0,
      newHospitals: 0,
      averageRequests: 0,
      topHospitals: [],
    },
    analytics: {
      dailyDonations: [],
      weeklyDonations: [],
      monthlyDonations: [],
      bloodTypeDistribution: [],
      locationDistribution: [],
      requestTrends: [],
    },
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState('today');
  const [selectedView, setSelectedView] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    // TODO: Fetch admin stats from API
    // This is mock data for now
    setStats({
      totalDonors: 1250,
      totalHospitals: 45,
      activeRequests: 12,
      bloodInventory: [
        {
          type: 'A+',
          quantity: 45,
          status: 'normal',
          trend: 'up',
          lastUpdated: '2024-03-20T10:00:00Z',
          location: 'Main Storage',
          expiryDate: '2024-04-20',
          temperature: 4,
          storageCondition: 'Optimal',
        },
        {
          type: 'B+',
          quantity: 30,
          status: 'low',
          trend: 'down',
          lastUpdated: '2024-03-20T09:30:00Z',
          location: 'Secondary Storage',
          expiryDate: '2024-04-15',
          temperature: 4,
          storageCondition: 'Optimal',
        },
        {
          type: 'O-',
          quantity: 15,
          status: 'critical',
          trend: 'down',
          lastUpdated: '2024-03-20T09:00:00Z',
          location: 'Emergency Storage',
          expiryDate: '2024-04-10',
          temperature: 4,
          storageCondition: 'Optimal',
        },
        {
          type: 'AB+',
          quantity: 25,
          status: 'normal',
          trend: 'stable',
          lastUpdated: '2024-03-20T08:30:00Z',
          location: 'Main Storage',
          expiryDate: '2024-04-25',
          temperature: 4,
          storageCondition: 'Optimal',
        },
      ],
      recentActivities: [
        {
          type: 'Emergency Request',
          description: 'City Hospital requested 5 units of O- blood',
          timestamp: '2024-03-20T10:00:00Z',
          severity: 'high',
          status: 'pending',
          location: 'City Hospital',
          user: 'Dr. Smith',
          action: 'Request Created',
        },
        {
          type: 'New Donor Registration',
          description: 'John Doe registered as a new donor',
          timestamp: '2024-03-20T09:45:00Z',
          severity: 'low',
          status: 'completed',
          location: 'Online Registration',
          user: 'John Doe',
          action: 'Registration Complete',
        },
      ],
      systemMetrics: {
        activeUsers: 156,
        totalDonations: 4500,
        emergencyRequests: 8,
        systemHealth: 98,
        serverLoad: 45,
        databaseSize: 2.5,
        networkStatus: 'Optimal',
        lastBackup: '2024-03-20T00:00:00Z',
        securityStatus: 'Protected',
        apiCalls: 1250,
        responseTime: 150,
        errorRate: 0.5,
      },
      alerts: [
        {
          type: 'System Alert',
          message: 'High server load detected',
          priority: 'high',
          timestamp: '2024-03-20T10:00:00Z',
          source: 'Server Monitor',
          category: 'Performance',
          action: 'Investigate',
        },
        {
          type: 'Inventory Alert',
          message: 'O- blood type running low',
          priority: 'high',
          timestamp: '2024-03-20T09:30:00Z',
          source: 'Inventory System',
          category: 'Stock',
          action: 'Restock',
        },
      ],
      donorMetrics: {
        totalDonors: 1250,
        activeDonors: 980,
        newDonors: 45,
        donorRetention: 85,
        averageDonations: 3.5,
        topDonors: [
          {
            name: 'John Smith',
            donations: 15,
            lastDonation: '2024-03-15',
            bloodType: 'O+',
          },
          {
            name: 'Sarah Johnson',
            donations: 12,
            lastDonation: '2024-03-10',
            bloodType: 'A-',
          },
        ],
      },
      hospitalMetrics: {
        totalHospitals: 45,
        activeHospitals: 42,
        newHospitals: 3,
        averageRequests: 25,
        topHospitals: [
          {
            name: 'City General Hospital',
            requests: 150,
            lastRequest: '2024-03-20',
            location: 'Downtown',
          },
          {
            name: 'St. Mary\'s Medical Center',
            requests: 120,
            lastRequest: '2024-03-19',
            location: 'Westside',
          },
        ],
      },
      analytics: {
        dailyDonations: [25, 30, 28, 35, 32, 40, 38],
        weeklyDonations: [180, 195, 210, 225, 240, 255, 270],
        monthlyDonations: [850, 900, 950, 1000, 1050, 1100],
        bloodTypeDistribution: [
          { type: 'A+', percentage: 30 },
          { type: 'B+', percentage: 25 },
          { type: 'O+', percentage: 20 },
          { type: 'AB+', percentage: 15 },
          { type: 'A-', percentage: 5 },
          { type: 'B-', percentage: 3 },
          { type: 'O-', percentage: 2 },
        ],
        locationDistribution: [
          { location: 'North', percentage: 30 },
          { location: 'South', percentage: 25 },
          { location: 'East', percentage: 20 },
          { location: 'West', percentage: 15 },
          { location: 'Central', percentage: 10 },
        ],
        requestTrends: [
          { date: '2024-03-14', requests: 25 },
          { date: '2024-03-15', requests: 30 },
          { date: '2024-03-16', requests: 28 },
          { date: '2024-03-17', requests: 35 },
          { date: '2024-03-18', requests: 32 },
          { date: '2024-03-19', requests: 40 },
          { date: '2024-03-20', requests: 38 },
        ],
      },
    });
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNotifications = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  const toggleAutoRefresh = () => {
    setIsAutoRefreshEnabled(!isAutoRefreshEnabled);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900`}>
      <div className="container mx-auto p-6 space-y-8">
        {/* Header with Search and Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Moderator Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="donors">Donors</option>
              <option value="hospitals">Hospitals</option>
              <option value="requests">Requests</option>
              <option value="inventory">Inventory</option>
              <option value="analytics">Analytics</option>
            </select>
            <select
              className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
            <button
              onClick={handleRefresh}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                isRefreshing ? 'animate-spin' : ''
              }`}
            >
              <RefreshCw className="h-5 w-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleNotifications}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isNotificationsEnabled ? <BellRing className="h-5 w-5" /> : <BellOff className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Shield className="h-5 w-5 text-red-500" />
              <span className="font-semibold">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* System Health Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Users className="h-5 w-5" />
                Active Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.systemMetrics.activeUsers}</p>
                <span className="text-sm text-gray-500">users</span>
              </div>
              <Progress value={75} className="mt-4 h-2 bg-blue-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Server Load</span>
                <span className="text-sm font-semibold">{stats.systemMetrics.serverLoad}%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Building2 className="h-5 w-5" />
                Total Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.systemMetrics.totalDonations}</p>
                <span className="text-sm text-gray-500">units</span>
              </div>
              <Progress value={60} className="mt-4 h-2 bg-green-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Response Time</span>
                <span className="text-sm font-semibold">{stats.systemMetrics.responseTime}ms</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                Emergency Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.systemMetrics.emergencyRequests}</p>
                <span className="text-sm text-gray-500">requests</span>
              </div>
              <Progress value={40} className="mt-4 h-2 bg-red-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Error Rate</span>
                <span className="text-sm font-semibold">{stats.systemMetrics.errorRate}%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Activity className="h-5 w-5" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.systemMetrics.systemHealth}%</p>
                <span className="text-sm text-gray-500">uptime</span>
              </div>
              <Progress value={stats.systemMetrics.systemHealth} className="mt-4 h-2 bg-purple-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">API Calls</span>
                <span className="text-sm font-semibold">{stats.systemMetrics.apiCalls}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blood Inventory with Trends */}
        <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Droplet className="h-5 w-5" />
              Blood Inventory Status
            </CardTitle>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <Download className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <Upload className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <BarChart3 className="h-5 w-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {stats.bloodInventory.map((item) => (
                <div
                  key={item.type}
                  className="p-4 border rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{item.type}</h3>
                    <span className="text-sm text-gray-500">
                      {new Date(item.lastUpdated).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-2xl font-bold mt-2">{item.quantity} units</p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge
                      variant={
                        item.status === 'critical'
                          ? 'destructive'
                          : item.status === 'low'
                          ? 'secondary'
                          : 'default'
                      }
                    >
                      {item.status.toUpperCase()}
                    </Badge>
                    <span
                      className={`text-sm ${
                        item.trend === 'up'
                          ? 'text-green-500'
                          : item.trend === 'down'
                          ? 'text-red-500'
                          : 'text-gray-500'
                      }`}
                    >
                      {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Location</span>
                      <span className="font-medium">{item.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Expiry</span>
                      <span className="font-medium">{item.expiryDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Temperature</span>
                      <span className="font-medium">{item.temperature}°C</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Storage</span>
                      <span className="font-medium">{item.storageCondition}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts and Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <Bell className="h-5 w-5" />
                System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-semibold">{alert.type}</h3>
                      <p className="text-sm text-gray-500">{alert.message}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">{alert.source}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{alert.category}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={
                          alert.priority === 'high'
                            ? 'destructive'
                            : alert.priority === 'medium'
                            ? 'secondary'
                            : 'default'
                        }
                      >
                        {alert.priority.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-gray-500">{alert.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Activity className="h-5 w-5" />
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-semibold">{activity.type}</h3>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">{activity.location}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{activity.user}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            activity.severity === 'high'
                              ? 'destructive'
                              : activity.severity === 'medium'
                              ? 'secondary'
                              : 'default'
                          }
                        >
                          {activity.severity.toUpperCase()}
                        </Badge>
                        <Badge
                          variant={
                            activity.status === 'completed'
                              ? 'default'
                              : activity.status === 'cancelled'
                              ? 'destructive'
                              : 'secondary'
                          }
                        >
                          {activity.status.toUpperCase()}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500">{activity.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className={getCardClass('blue')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Donor Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Manage donor profiles, verify donations, and track donor history.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <UserPlus className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <UserMinus className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Donors</span>
                    <span className="font-medium">{stats.donorMetrics.totalDonors}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Active Donors</span>
                    <span className="font-medium">{stats.donorMetrics.activeDonors}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">New Donors</span>
                    <span className="font-medium">{stats.donorMetrics.newDonors}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Retention Rate</span>
                    <span className="font-medium">{stats.donorMetrics.donorRetention}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('green')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Hospital Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Manage partner hospitals, blood requests, and inventory distribution.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-full">
                    <BarChart3 className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-full">
                    <Calendar className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-full">
                    <Filter className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Hospitals</span>
                    <span className="font-medium">{stats.hospitalMetrics.totalHospitals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Active Hospitals</span>
                    <span className="font-medium">{stats.hospitalMetrics.activeHospitals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">New Hospitals</span>
                    <span className="font-medium">{stats.hospitalMetrics.newHospitals}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Avg. Requests</span>
                    <span className="font-medium">{stats.hospitalMetrics.averageRequests}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('red')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Configure system parameters, manage users, and monitor system health.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full">
                    <PieChart className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full">
                    <LineChart className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full">
                    <Activity className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Server Load</span>
                    <span className="font-medium">{stats.systemMetrics.serverLoad}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Database Size</span>
                    <span className="font-medium">{stats.systemMetrics.databaseSize}GB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Network Status</span>
                    <span className="font-medium">{stats.systemMetrics.networkStatus}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Last Backup</span>
                    <span className="font-medium">
                      {new Date(stats.systemMetrics.lastBackup).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  View detailed analytics and generate reports for better decision making.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <BarChart3 className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <PieChart className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Daily Donations</span>
                    <span className="font-medium">
                      {stats.analytics.dailyDonations[stats.analytics.dailyDonations.length - 1]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Weekly Donations</span>
                    <span className="font-medium">
                      {stats.analytics.weeklyDonations[stats.analytics.weeklyDonations.length - 1]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Monthly Donations</span>
                    <span className="font-medium">
                      {stats.analytics.monthlyDonations[stats.analytics.monthlyDonations.length - 1]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Top Blood Type</span>
                    <span className="font-medium">
                      {stats.analytics.bloodTypeDistribution?.[0]?.type || 'N/A'} (
                      {stats.analytics.bloodTypeDistribution?.[0]?.percentage || 0}%)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Top Region</span>
                    <span className="font-medium">
                      {stats.analytics.locationDistribution?.[0]?.location || 'N/A'} (
                      {stats.analytics.locationDistribution?.[0]?.percentage || 0}%)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Coverage</span>
                    <span className="font-medium">
                      {Math.round(
                        stats.analytics.locationDistribution?.reduce(
                          (acc, loc) => acc + (loc?.percentage || 0),
                          0
                        ) || 0
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

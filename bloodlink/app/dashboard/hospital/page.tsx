"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Droplet,
  AlertTriangle,
  Activity,
  Users,
  Calendar,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  BarChart3,
  PieChart,
  LineChart,
  Mail,
  Plus,
  Minus,
  RefreshCw,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  FileText,
  Database,
  Server,
  Network,
  Zap,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  BellRing,
  BellOff,
  Settings2,
  Users2,
  Building,
  Heart,
  Sun,
  Moon,
  Cloud,
  CloudOff,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Cpu,
  HardDrive,
  Wifi,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HospitalStats {
  totalDonors: number;
  activeRequests: number;
  bloodInventory: {
    type: string;
    quantity: number;
    status: "critical" | "low" | "normal";
    trend: "up" | "down" | "stable";
    lastUpdated: string;
    location: string;
    expiryDate: string;
    temperature: number;
    storageCondition: string;
    batchNumber: string;
    donorInfo: {
      id: string;
      name: string;
      bloodType: string;
      donationDate: string;
    };
  }[];
  recentRequests: Array<{
    id: string;
    bloodType: string;
    quantity: number;
    urgency: "high" | "medium" | "low";
    status: "pending" | "approved" | "completed" | "cancelled";
    timestamp: string;
    patientInfo: string;
    doctor: string;
    department: string;
    priority: number;
    notes: string;
  }>;
  donorMetrics: {
    totalDonors: number;
    activeDonors: number;
    scheduledDonations: number;
    lastDonation: string;
    donorRetention: number;
    averageDonations: number;
    topDonors: Array<{
      name: string;
      donations: number;
      lastDonation: string;
      bloodType: string;
      contact: string;
    }>;
  };
  alerts: Array<{
    type: string;
    message: string;
    priority: "high" | "medium" | "low";
    timestamp: string;
    source: string;
    category: string;
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
    departmentStats: {
      name: string;
      requests: number;
      fulfilled: number;
      pending: number;
    }[];
  };
}

const cardStyles = {
  base: "overflow-hidden border-2 transition-all duration-300 hover:shadow-lg",
  variants: {
    red: "border-red-100 hover:border-red-200 dark:border-red-800 dark:hover:border-red-700",
    blue: "border-blue-100 hover:border-blue-200 dark:border-blue-800 dark:hover:border-blue-700",
    green:
      "border-green-100 hover:border-green-200 dark:border-green-800 dark:hover:border-green-700",
  },
};

const getCardClass = (variant: keyof typeof cardStyles.variants) =>
  cn(cardStyles.base, cardStyles.variants[variant]);

export default function HospitalDashboard() {
  const [stats, setStats] = useState<HospitalStats>({
    totalDonors: 0,
    activeRequests: 0,
    bloodInventory: [],
    recentRequests: [],
    donorMetrics: {
      totalDonors: 0,
      activeDonors: 0,
      scheduledDonations: 0,
      lastDonation: "",
      donorRetention: 0,
      averageDonations: 0,
      topDonors: [],
    },
    alerts: [],
    systemMetrics: {
      activeUsers: 0,
      totalDonations: 0,
      emergencyRequests: 0,
      systemHealth: 0,
      serverLoad: 0,
      databaseSize: 0,
      networkStatus: "",
      lastBackup: "",
      securityStatus: "",
      apiCalls: 0,
      responseTime: 0,
      errorRate: 0,
    },
    analytics: {
      dailyDonations: [],
      weeklyDonations: [],
      monthlyDonations: [],
      bloodTypeDistribution: [],
      locationDistribution: [],
      requestTrends: [],
      departmentStats: [],
    },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState("today");
  const [selectedView, setSelectedView] = useState("overview");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedBloodType, setSelectedBloodType] = useState("all");

  useEffect(() => {
    // TODO: Fetch hospital stats from API
    // This is mock data for now
    setStats({
      totalDonors: 250,
      activeRequests: 5,
      bloodInventory: [
        {
          type: "A+",
          quantity: 45,
          status: "normal",
          trend: "up",
          lastUpdated: "2024-03-20T10:00:00Z",
          location: "Main Storage",
          expiryDate: "2024-04-20",
          temperature: 4,
          storageCondition: "Optimal",
          batchNumber: "BATCH001",
          donorInfo: {
            id: "DON001",
            name: "John Smith",
            bloodType: "A+",
            donationDate: "2024-03-15",
          },
        },
        {
          type: "B+",
          quantity: 30,
          status: "low",
          trend: "down",
          lastUpdated: "2024-03-20T09:30:00Z",
          location: "Secondary Storage",
          expiryDate: "2024-04-15",
          temperature: 4,
          storageCondition: "Optimal",
          batchNumber: "BATCH002",
          donorInfo: {
            id: "DON002",
            name: "Sarah Johnson",
            bloodType: "B+",
            donationDate: "2024-03-14",
          },
        },
        {
          type: "O-",
          quantity: 15,
          status: "critical",
          trend: "down",
          lastUpdated: "2024-03-20T09:00:00Z",
          location: "Emergency Storage",
          expiryDate: "2024-04-10",
          temperature: 4,
          storageCondition: "Optimal",
          batchNumber: "BATCH003",
          donorInfo: {
            id: "DON003",
            name: "Michael Brown",
            bloodType: "O-",
            donationDate: "2024-03-13",
          },
        },
        {
          type: "AB+",
          quantity: 25,
          status: "normal",
          trend: "stable",
          lastUpdated: "2024-03-20T08:30:00Z",
          location: "Main Storage",
          expiryDate: "2024-04-25",
          temperature: 4,
          storageCondition: "Optimal",
          batchNumber: "BATCH004",
          donorInfo: {
            id: "DON004",
            name: "Emily Davis",
            bloodType: "AB+",
            donationDate: "2024-03-12",
          },
        },
      ],
      recentRequests: [
        {
          id: "REQ001",
          bloodType: "O-",
          quantity: 5,
          urgency: "high",
          status: "pending",
          timestamp: "2024-03-20T10:00:00Z",
          patientInfo: "Emergency Surgery - John Doe",
          doctor: "Dr. Smith",
          department: "Emergency",
          priority: 1,
          notes: "Urgent surgery scheduled for 2 PM",
        },
        {
          id: "REQ002",
          bloodType: "A+",
          quantity: 3,
          urgency: "medium",
          status: "approved",
          timestamp: "2024-03-20T09:30:00Z",
          patientInfo: "Regular Transfusion - Jane Smith",
          doctor: "Dr. Johnson",
          department: "Hematology",
          priority: 2,
          notes: "Regular transfusion for anemia treatment",
        },
      ],
      donorMetrics: {
        totalDonors: 250,
        activeDonors: 180,
        scheduledDonations: 15,
        lastDonation: "2024-03-19T15:30:00Z",
        donorRetention: 85,
        averageDonations: 3.5,
        topDonors: [
          {
            name: "John Smith",
            donations: 15,
            lastDonation: "2024-03-15",
            bloodType: "O+",
            contact: "+1 234-567-8901",
          },
          {
            name: "Sarah Johnson",
            donations: 12,
            lastDonation: "2024-03-10",
            bloodType: "A-",
            contact: "+1 234-567-8902",
          },
        ],
      },
      alerts: [
        {
          type: "Inventory Alert",
          message: "O- blood type running low",
          priority: "high",
          timestamp: "2024-03-20T10:00:00Z",
          source: "Inventory System",
          category: "Stock",
          action: "Restock",
        },
        {
          type: "Donation Reminder",
          message: "5 donors scheduled for tomorrow",
          priority: "medium",
          timestamp: "2024-03-20T09:30:00Z",
          source: "Scheduling System",
          category: "Donations",
          action: "Review",
        },
      ],
      systemMetrics: {
        activeUsers: 45,
        totalDonations: 1200,
        emergencyRequests: 8,
        systemHealth: 98,
        serverLoad: 35,
        databaseSize: 1.5,
        networkStatus: "Optimal",
        lastBackup: "2024-03-20T00:00:00Z",
        securityStatus: "Protected",
        apiCalls: 850,
        responseTime: 120,
        errorRate: 0.3,
      },
      analytics: {
        dailyDonations: [15, 20, 18, 25, 22, 30, 28],
        weeklyDonations: [120, 135, 150, 165, 180, 195, 210],
        monthlyDonations: [550, 600, 650, 700, 750, 800],
        bloodTypeDistribution: [
          { type: "A+", percentage: 30 },
          { type: "B+", percentage: 25 },
          { type: "O+", percentage: 20 },
          { type: "AB+", percentage: 15 },
          { type: "A-", percentage: 5 },
          { type: "B-", percentage: 3 },
          { type: "O-", percentage: 2 },
        ],
        locationDistribution: [
          { location: "North", percentage: 30 },
          { location: "South", percentage: 25 },
          { location: "East", percentage: 20 },
          { location: "West", percentage: 15 },
          { location: "Central", percentage: 10 },
        ],
        requestTrends: [
          { date: "2024-03-14", requests: 15 },
          { date: "2024-03-15", requests: 20 },
          { date: "2024-03-16", requests: 18 },
          { date: "2024-03-17", requests: 25 },
          { date: "2024-03-18", requests: 22 },
          { date: "2024-03-19", requests: 30 },
          { date: "2024-03-20", requests: 28 },
        ],
        departmentStats: [
          {
            name: "Emergency",
            requests: 50,
            fulfilled: 45,
            pending: 5,
          },
          {
            name: "Surgery",
            requests: 40,
            fulfilled: 38,
            pending: 2,
          },
          {
            name: "Hematology",
            requests: 30,
            fulfilled: 28,
            pending: 2,
          },
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
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900`}
    >
      <div className="p-4 lg:p-6 space-y-6 lg:space-y-8 max-w-none no-overflow-x responsive-spacing">
        {" "}
        {/* Header with Search and Actions */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Hospital Dashboard
          </h1>
          <div className="flex flex-wrap items-center gap-2 lg:gap-4">
            <div className="relative min-w-[200px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                className="px-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="inventory">Inventory</option>
                <option value="requests">Requests</option>
                <option value="donors">Donors</option>
                <option value="analytics">Analytics</option>
              </select>
              <select
                className="px-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleRefresh}
                  className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    isRefreshing ? "animate-spin" : ""
                  }`}
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDarkMode ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={toggleNotifications}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isNotificationsEnabled ? (
                    <BellRing className="h-4 w-4" />
                  ) : (
                    <BellOff className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Building2 className="h-4 w-4 text-red-500" />
              <span className="font-semibold text-sm">City Hospital</span>
            </div>
          </div>
        </div>{" "}
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 responsive-grid">
          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Users className="h-5 w-5" />
                Total Donors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">
                  {stats.donorMetrics.totalDonors}
                </p>
                <span className="text-sm text-gray-500">donors</span>
              </div>
              <Progress value={75} className="mt-4 h-2 bg-blue-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Active Donors</span>
                <span className="text-sm font-semibold">
                  {stats.donorMetrics.activeDonors}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <Calendar className="h-5 w-5" />
                Scheduled Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">
                  {stats.donorMetrics.scheduledDonations}
                </p>
                <span className="text-sm text-gray-500">upcoming</span>
              </div>
              <Progress value={60} className="mt-4 h-2 bg-green-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Last Donation</span>
                <span className="text-sm font-semibold">
                  {new Date(
                    stats.donorMetrics.lastDonation
                  ).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                Active Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">{stats.activeRequests}</p>
                <span className="text-sm text-gray-500">requests</span>
              </div>
              <Progress value={40} className="mt-4 h-2 bg-red-100" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Emergency</span>
                <span className="text-sm font-semibold">
                  {stats.systemMetrics.emergencyRequests}
                </span>
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
                <p className="text-4xl font-bold">
                  {stats.systemMetrics.systemHealth}%
                </p>
                <span className="text-sm text-gray-500">uptime</span>
              </div>
              <Progress
                value={stats.systemMetrics.systemHealth}
                className="mt-4 h-2 bg-purple-100"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Response Time</span>
                <span className="text-sm font-semibold">
                  {stats.systemMetrics.responseTime}ms
                </span>
              </div>
            </CardContent>
          </Card>
        </div>{" "}
        {/* Blood Inventory with Trends */}
        <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow duration-300 mobile-card-fix">
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
          </CardHeader>{" "}
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 responsive-grid">
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
                  <p className="text-2xl font-bold mt-2">
                    {item.quantity} units
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <Badge
                      variant={
                        item.status === "critical"
                          ? "destructive"
                          : item.status === "low"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {item.status.toUpperCase()}
                    </Badge>
                    <span
                      className={`text-sm ${
                        item.trend === "up"
                          ? "text-green-500"
                          : item.trend === "down"
                          ? "text-red-500"
                          : "text-gray-500"
                      }`}
                    >
                      {item.trend === "up"
                        ? "↑"
                        : item.trend === "down"
                        ? "↓"
                        : "→"}
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
                      <span className="font-medium">
                        {item.storageCondition}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Batch</span>
                      <span className="font-medium">{item.batchNumber}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Donor</span>
                      <span className="font-medium">{item.donorInfo.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>{" "}
        {/* Recent Requests and Alerts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 responsive-grid-lg">
          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Activity className="h-5 w-5" />
                Recent Requests
              </CardTitle>
            </CardHeader>{" "}
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {stats.recentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-semibold">{request.patientInfo}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Droplet className="h-4 w-4" />
                          {request.bloodType}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(request.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">
                          {request.doctor}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">
                          {request.department}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {request.notes}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            request.urgency === "high"
                              ? "destructive"
                              : request.urgency === "medium"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {request.urgency.toUpperCase()}
                        </Badge>
                        <Badge
                          variant={
                            request.status === "completed"
                              ? "default"
                              : request.status === "cancelled"
                              ? "destructive"
                              : request.status === "approved"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {request.status.toUpperCase()}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500">
                        Priority: {request.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600">
                <Bell className="h-5 w-5" />
                Alerts & Notifications
              </CardTitle>
            </CardHeader>{" "}
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {stats.alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-semibold">{alert.type}</h3>
                      <p className="text-sm text-gray-500">{alert.message}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">
                          {alert.source}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">
                          {alert.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        variant={
                          alert.priority === "high"
                            ? "destructive"
                            : alert.priority === "medium"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {alert.priority.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {alert.action}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>{" "}
        {/* Management Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 responsive-grid">
          <Card className={getCardClass("blue")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Donor Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Manage donor profiles, schedule donations, and track donor
                  history.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Plus className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Calendar className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Donors</span>
                    <span className="font-medium">
                      {stats.donorMetrics.totalDonors}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Active Donors</span>
                    <span className="font-medium">
                      {stats.donorMetrics.activeDonors}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Scheduled</span>
                    <span className="font-medium">
                      {stats.donorMetrics.scheduledDonations}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Retention</span>
                    <span className="font-medium">
                      {stats.donorMetrics.donorRetention}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass("green")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                Blood Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Create and manage blood requests, track status, and handle
                  emergencies.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-full">
                    <Plus className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-full">
                    <XCircle className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Active Requests</span>
                    <span className="font-medium">{stats.activeRequests}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Emergency</span>
                    <span className="font-medium">
                      {stats.systemMetrics.emergencyRequests}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Departments</span>
                    <span className="font-medium">
                      {stats.analytics.departmentStats.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Success Rate</span>
                    <span className="font-medium">
                      {Math.round(
                        (stats.analytics.departmentStats.reduce(
                          (acc, dept) => acc + dept.fulfilled,
                          0
                        ) /
                          stats.analytics.departmentStats.reduce(
                            (acc, dept) => acc + dept.requests,
                            0
                          )) *
                          100
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass("red")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Inventory Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor blood inventory, manage stock levels, and track usage.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full">
                    <Plus className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full">
                    <Minus className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-full">
                    <BarChart3 className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Units</span>
                    <span className="font-medium">
                      {stats.bloodInventory.reduce(
                        (acc, item) => acc + item.quantity,
                        0
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Critical</span>
                    <span className="font-medium">
                      {
                        stats.bloodInventory.filter(
                          (item) => item.status === "critical"
                        ).length
                      }
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Low Stock</span>
                    <span className="font-medium">
                      {
                        stats.bloodInventory.filter(
                          (item) => item.status === "low"
                        ).length
                      }
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Storage Locations</span>
                    <span className="font-medium">
                      {
                        new Set(
                          stats.bloodInventory.map((item) => item.location)
                        ).size
                      }
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass("blue")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  View nearby donors, manage pickup locations, and track
                  deliveries.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Users className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-full">
                    <Activity className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Total Locations</span>
                    <span className="font-medium">
                      {stats.analytics.locationDistribution.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Top Region</span>
                    <span className="font-medium">
                      {stats.analytics.locationDistribution?.[0]?.location ||
                        "N/A"}{" "}
                      (
                      {stats.analytics.locationDistribution?.[0]?.percentage ||
                        0}
                      %)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Active Donors</span>
                    <span className="font-medium">
                      {stats.donorMetrics.activeDonors}
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

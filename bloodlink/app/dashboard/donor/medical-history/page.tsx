'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Heart, 
  Pill, 
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  FileText,
  Plus,
  ChevronRight,
  Info,
  Thermometer,
  Droplet,
  Stethoscope,
  History
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface MedicalCondition {
  id: string;
  name: string;
  status: 'active' | 'resolved' | 'monitoring';
  diagnosisDate: string;
  lastUpdated: string;
  severity: 'low' | 'medium' | 'high';
  notes: string;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  status: 'active' | 'completed' | 'discontinued';
  prescribedBy: string;
}

interface Vaccination {
  id: string;
  name: string;
  date: string;
  nextDue?: string;
  status: 'up-to-date' | 'due' | 'overdue';
  administeredBy: string;
}

interface DonationHealth {
  lastDonation: {
    date: string;
    hemoglobin: number;
    bloodPressure: string;
    pulse: number;
    temperature: number;
  };
  eligibilityStatus: 'eligible' | 'temporary-deferral' | 'permanent-deferral';
  deferralReason?: string;
  nextEligibleDate?: string;
}

export default function MedicalHistory() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'conditions' | 'medications' | 'vaccinations'>('overview');

  const conditions: MedicalCondition[] = [
    {
      id: '1',
      name: 'Hypertension',
      status: 'active',
      diagnosisDate: '2023-01-15',
      lastUpdated: '2024-03-01',
      severity: 'medium',
      notes: 'Well controlled with medication'
    },
    {
      id: '2',
      name: 'Seasonal Allergies',
      status: 'active',
      diagnosisDate: '2022-05-01',
      lastUpdated: '2024-03-15',
      severity: 'low',
      notes: 'Manages with antihistamines'
    }
  ];

  const medications: Medication[] = [
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: '2023-01-20',
      status: 'active',
      prescribedBy: 'Dr. Smith'
    },
    {
      id: '2',
      name: 'Cetirizine',
      dosage: '10mg',
      frequency: 'As needed',
      startDate: '2022-05-01',
      status: 'active',
      prescribedBy: 'Dr. Johnson'
    }
  ];

  const vaccinations: Vaccination[] = [
    {
      id: '1',
      name: 'Tetanus',
      date: '2023-06-15',
      nextDue: '2028-06-15',
      status: 'up-to-date',
      administeredBy: 'City Health Center'
    },
    {
      id: '2',
      name: 'Flu Shot',
      date: '2023-10-01',
      nextDue: '2024-10-01',
      status: 'up-to-date',
      administeredBy: 'Local Pharmacy'
    }
  ];

  const donationHealth: DonationHealth = {
    lastDonation: {
      date: '2024-02-15',
      hemoglobin: 14.5,
      bloodPressure: '120/80',
      pulse: 72,
      temperature: 37.0
    },
    eligibilityStatus: 'eligible',
    nextEligibleDate: '2024-04-15'
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'high':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'up-to-date':
        return 'text-green-500';
      case 'resolved':
      case 'completed':
        return 'text-blue-500';
      case 'monitoring':
      case 'due':
        return 'text-yellow-500';
      case 'discontinued':
      case 'overdue':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Medical History
          </h1>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Record
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={getCardClass('red')}>
            <CardHeader className={getHeaderClass('red')}>
              <CardTitle className={getTitleClass('red')}>
                <Activity className="h-5 w-5" />
                Active Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('red')}>
              <div className="space-y-2">
                <p className="text-3xl font-bold">
                  {conditions.filter(c => c.status === 'active').length}
                </p>
                <p className="text-sm text-gray-500">
                  {conditions.length} total conditions
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('blue')}>
            <CardHeader className={getHeaderClass('blue')}>
              <CardTitle className={getTitleClass('blue')}>
                <Pill className="h-5 w-5" />
                Active Medications
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('blue')}>
              <div className="space-y-2">
                <p className="text-3xl font-bold">
                  {medications.filter(m => m.status === 'active').length}
                </p>
                <p className="text-sm text-gray-500">
                  {medications.length} total medications
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={getCardClass('green')}>
            <CardHeader className={getHeaderClass('green')}>
              <CardTitle className={getTitleClass('green')}>
                <History className="h-5 w-5" />
                Last Donation
              </CardTitle>
            </CardHeader>
            <CardContent className={getContentClass('green')}>
              <div className="space-y-2">
                <p className="text-3xl font-bold">
                  {new Date(donationHealth.lastDonation.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                  Next eligible: {new Date(donationHealth.nextEligibleDate!).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Medical Conditions */}
        <Card className={getCardClass('red')}>
          <CardHeader className={getHeaderClass('red')}>
            <CardTitle className={getTitleClass('red')}>
              <Stethoscope className="h-5 w-5" />
              Medical Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('red')}>
            <div className="space-y-4">
              {conditions.map((condition) => (
                <div key={condition.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{condition.name}</h3>
                      <p className="text-sm text-gray-500">
                        Diagnosed: {new Date(condition.diagnosisDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getSeverityColor(condition.severity)}>
                        {condition.severity} severity
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(condition.status)}>
                        {condition.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {condition.notes}
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Last updated: {new Date(condition.lastUpdated).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medications */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Pill className="h-5 w-5" />
              Medications
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="space-y-4">
              {medications.map((medication) => (
                <div key={medication.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{medication.name}</h3>
                      <p className="text-sm text-gray-500">
                        {medication.dosage} - {medication.frequency}
                      </p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(medication.status)}>
                      {medication.status}
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Prescribed by: {medication.prescribedBy}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Started: {new Date(medication.startDate).toLocaleDateString()}
                    </p>
                    {medication.endDate && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Ended: {new Date(medication.endDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vaccinations */}
        <Card className={getCardClass('green')}>
          <CardHeader className={getHeaderClass('green')}>
            <CardTitle className={getTitleClass('green')}>
              <Activity className="h-5 w-5" />
              Vaccinations
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('green')}>
            <div className="space-y-4">
              {vaccinations.map((vaccination) => (
                <div key={vaccination.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{vaccination.name}</h3>
                      <p className="text-sm text-gray-500">
                        Administered: {new Date(vaccination.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(vaccination.status)}>
                      {vaccination.status}
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Administered by: {vaccination.administeredBy}
                    </p>
                    {vaccination.nextDue && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Next due: {new Date(vaccination.nextDue).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Last Donation Health */}
        <Card className={getCardClass('purple')}>
          <CardHeader className={getHeaderClass('purple')}>
            <CardTitle className={getTitleClass('purple')}>
              <Droplet className="h-5 w-5" />
              Last Donation Health
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('purple')}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-purple-500" />
                  <h3 className="font-semibold">Hemoglobin</h3>
                </div>
                <p className="text-2xl font-bold">{donationHealth.lastDonation.hemoglobin} g/dL</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-500" />
                  <h3 className="font-semibold">Blood Pressure</h3>
                </div>
                <p className="text-2xl font-bold">{donationHealth.lastDonation.bloodPressure}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-purple-500" />
                  <h3 className="font-semibold">Pulse</h3>
                </div>
                <p className="text-2xl font-bold">{donationHealth.lastDonation.pulse} bpm</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-purple-500" />
                  <h3 className="font-semibold">Temperature</h3>
                </div>
                <p className="text-2xl font-bold">{donationHealth.lastDonation.temperature}°C</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Eligibility Status</h3>
                  <p className="text-sm text-gray-500">
                    {donationHealth.eligibilityStatus === 'eligible' ? (
                      <span className="text-green-500">Eligible for donation</span>
                    ) : (
                      <span className="text-red-500">
                        {donationHealth.deferralReason}
                      </span>
                    )}
                  </p>
                </div>
                {donationHealth.nextEligibleDate && (
                  <div className="text-right">
                    <p className="text-sm font-medium">Next Eligible Date</p>
                    <p className="text-sm text-gray-500">
                      {new Date(donationHealth.nextEligibleDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
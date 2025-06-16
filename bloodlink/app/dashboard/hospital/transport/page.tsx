import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Truck } from 'lucide-react';

export default function Transport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Transport
          </h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Transport Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Destination</label>
                <Input type="text" placeholder="Enter destination" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Blood Type</label>
                <Input type="text" placeholder="Enter blood type" className="mt-1" />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Schedule Transport</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
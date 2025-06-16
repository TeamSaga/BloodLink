import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Microscope } from 'lucide-react';

export default function Laboratory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Laboratory
          </h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Lab Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Test Name</label>
                <Input type="text" placeholder="Enter test name" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Results</label>
                <Input type="text" placeholder="Enter test results" className="mt-1" />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Submit Test</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
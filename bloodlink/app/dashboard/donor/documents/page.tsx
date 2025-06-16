'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Upload, 
  Download, 
  Trash2, 
  Search,
  Filter,
  Calendar,
  Award,
  FileCheck,
  FileX,
  FileWarning,
  ChevronRight,
  Plus
} from 'lucide-react';
import { getCardClass, getHeaderClass, getTitleClass, getContentClass } from '@/lib/theme';

interface Document {
  id: string;
  name: string;
  type: 'certificate' | 'medical' | 'id' | 'other';
  status: 'verified' | 'pending' | 'expired';
  uploadDate: string;
  expiryDate?: string;
  size: string;
  url: string;
}

export default function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const documents: Document[] = [
    {
      id: '1',
      name: 'Blood Donor Certificate',
      type: 'certificate',
      status: 'verified',
      uploadDate: '2024-03-01',
      size: '2.5 MB',
      url: '/documents/certificate.pdf'
    },
    {
      id: '2',
      name: 'Medical Clearance',
      type: 'medical',
      status: 'verified',
      uploadDate: '2024-02-15',
      expiryDate: '2024-08-15',
      size: '1.8 MB',
      url: '/documents/medical.pdf'
    },
    {
      id: '3',
      name: 'Government ID',
      type: 'id',
      status: 'verified',
      uploadDate: '2024-01-10',
      expiryDate: '2029-01-10',
      size: '3.2 MB',
      url: '/documents/id.pdf'
    },
    {
      id: '4',
      name: 'Health Declaration',
      type: 'medical',
      status: 'pending',
      uploadDate: '2024-03-20',
      size: '1.2 MB',
      url: '/documents/health.pdf'
    }
  ];

  const documentTypes = [
    { id: 'certificate', label: 'Certificates' },
    { id: 'medical', label: 'Medical Records' },
    { id: 'id', label: 'Identification' },
    { id: 'other', label: 'Other Documents' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <FileCheck className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <FileWarning className="h-5 w-5 text-yellow-500" />;
      case 'expired':
        return <FileX className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      case 'expired':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || doc.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white dark:from-red-950 dark:to-gray-900">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
            Documents
          </h1>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Upload Document
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className={getCardClass('blue')}>
          <CardHeader className={getHeaderClass('blue')}>
            <CardTitle className={getTitleClass('blue')}>
              <Search className="h-5 w-5" />
              Manage Documents
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('blue')}>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {documentTypes.map((type) => (
                  <Badge
                    key={type.id}
                    variant={selectedType === type.id ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
                  >
                    {type.label}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className={getCardClass('red')}>
              <CardHeader className={getHeaderClass('red')}>
                <CardTitle className={getTitleClass('red')}>
                  <FileText className="h-5 w-5" />
                  {doc.name}
                </CardTitle>
              </CardHeader>
              <CardContent className={getContentClass('red')}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{doc.type}</Badge>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(doc.status)}
                      <span className={getStatusColor(doc.status)}>
                        {doc.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                      </span>
                    </div>
                    {doc.expiryDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          Expires: {new Date(doc.expiryDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Size: {doc.size}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 text-red-500 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload New Document */}
        <Card className={getCardClass('green')}>
          <CardHeader className={getHeaderClass('green')}>
            <CardTitle className={getTitleClass('green')}>
              <Plus className="h-5 w-5" />
              Upload New Document
            </CardTitle>
          </CardHeader>
          <CardContent className={getContentClass('green')}>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 mx-auto text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                Drag and drop your files here, or click to browse
              </p>
              <Button variant="outline" className="mt-4 gap-2">
                <Upload className="h-4 w-4" />
                Select Files
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
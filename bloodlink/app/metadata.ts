import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BloodLink - Donor Dashboard',
  description: 'A comprehensive blood donation management system',
  keywords: ['blood donation', 'donor management', 'healthcare', 'blood bank'],
  authors: [{ name: 'BloodLink Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bloodlink.com',
    title: 'BloodLink - Donor Dashboard',
    description: 'A comprehensive blood donation management system',
    siteName: 'BloodLink',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BloodLink - Donor Dashboard',
    description: 'A comprehensive blood donation management system',
    creator: '@bloodlink',
  },
}; 
import { Inter } from 'next/font/google';
import './globals.css';
import RoleBasedLayout from '@/components/RoleBasedLayout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RoleBasedLayout>{children}</RoleBasedLayout>
      </body>
    </html>
  );
}

'use client';

import { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import { ThemeProvider } from './theme-provider';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen">
        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Navigation Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          <Header onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          <main className="p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
} 
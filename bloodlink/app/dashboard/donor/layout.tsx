import DonorNavigation from '@/components/DonorNavigation';

export default function DonorDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 h-full overflow-y-auto bg-white dark:bg-gray-900 border-r">
        <DonorNavigation />
      </aside>
      <main className="flex-1 h-full overflow-y-auto p-6 bg-gray-50 dark:bg-gray-950">
        {children}
      </main>
    </div>
  );
} 
import DonorNavigation from "@/components/DonorNavigation";

export default function DonorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 flex-shrink-0 h-full overflow-y-auto custom-scrollbar bg-white dark:bg-gray-900 border-r">
        <DonorNavigation />
      </aside>
      <main className="flex-1 h-full overflow-y-auto custom-scrollbar">
        {children}
      </main>
    </div>
  );
}

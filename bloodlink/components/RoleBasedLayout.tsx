"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import PublicNavigation from "./PublicNavigation";
import DonorNavigation from "./DonorNavigation";
import HospitalNavigation from "./HospitalNavigation";
import AdminNavigation from "./AdminNavigation";
import Footer from "./Footer";
import { ThemeProvider } from "./theme-provider";

export default function RoleBasedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Check if user has access to the current path
  const checkAccess = () => {
    // TODO: Replace with actual auth check
    const userRole = localStorage.getItem("userRole"); // This is temporary, replace with proper auth
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    // If not authenticated and trying to access dashboard, redirect to login
    if (!isAuthenticated && pathname?.startsWith("/dashboard")) {
      router.push("/login");
      return false;
    }

    // Role-based access control
    if (pathname?.startsWith("/dashboard/donor") && userRole !== "donor") {
      router.push("/unauthorized");
      return false;
    }
    if (
      pathname?.startsWith("/dashboard/hospital") &&
      userRole !== "hospital"
    ) {
      router.push("/unauthorized");
      return false;
    }
    if (pathname?.startsWith("/dashboard/admin") && userRole !== "admin") {
      router.push("/unauthorized");
      return false;
    }
    return true;
  };

  useEffect(() => {
    checkAccess();
  }, [pathname]);

  // Determine which navigation to show based on the current path
  const getNavigation = () => {
    // Do NOT render DonorNavigation here, it's handled by donor layout
    if (pathname?.startsWith("/dashboard/hospital")) {
      return <HospitalNavigation />;
    }
    if (pathname?.startsWith("/dashboard/admin")) {
      return <AdminNavigation />;
    }
    return <PublicNavigation />;
  };

  // Determine if we should show the dashboard layout
  const isDashboard = pathname?.startsWith("/dashboard") ?? false;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {" "}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
        {pathname?.startsWith("/dashboard/donor") ? (
          // Let donor layout handle everything including navigation and containers
          children
        ) : (
          // Other dashboards and public pages
          <>
            {pathname?.startsWith("/dashboard") ? (
              <div className="flex h-screen">
                {/* Navigation Sidebar */}
                <div className="w-64 flex-shrink-0">{getNavigation()}</div>
                {/* Main Content */}
                <main className="flex-1 overflow-hidden">
                  <div className="h-full overflow-y-auto custom-scrollbar">
                    <div className="max-w-none px-4 py-8">{children}</div>
                  </div>
                </main>
              </div>
            ) : (
              // Public layout with full-width content
              <div>
                {getNavigation()}
                <main className="pt-16">{children}</main>
                <Footer />
              </div>
            )}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

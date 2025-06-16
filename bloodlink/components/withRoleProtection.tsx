'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function withRoleProtection(WrappedComponent: React.ComponentType, allowedRole: string) {
  return function ProtectedRoute(props: any) {
    const router = useRouter();

    useEffect(() => {
      // Get user role from cookies or your auth system
      const userRole = document.cookie
        .split('; ')
        .find(row => row.startsWith('userRole='))
        ?.split('=')[1];

      if (!userRole || userRole !== allowedRole) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
} 
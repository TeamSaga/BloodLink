"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then(({ role }) => {
        if (role === "admin") router.push("/dashboard/admin");
        else if (role === "moderator") router.push("/dashboard/moderator");
        else if (role === "user") router.push("/dashboard/user");
        else router.push("/unauthorized");
      })
      .catch(() => router.push("/login"));
  }, [router]);

  return <h1>Loading...</h1>;
};

export default DashboardRedirect;

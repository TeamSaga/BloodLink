import Link from "next/link";
import { getHeaderClass, getTitleClass, getContentClass } from "@/lib/theme";

export default function Home() {
  return (
    <main className={getContentClass("blue")}>
      <h1 className={getTitleClass("blue")}>Welcome</h1>
      <nav className="flex flex-col gap-4 max-w-xs">
        <Link href="/login" className="text-blue-600 hover:text-blue-800">Log In</Link>
        <Link href="/logout" className="text-blue-600 hover:text-blue-800">Log Out</Link>
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
        <Link href="/signup" className="text-blue-600 hover:text-blue-800">Sign Up</Link>
      </nav>
    </main>
  );
}

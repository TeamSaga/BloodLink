import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome</h1>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: 240,
        }}
      >
        <Link href="/login">Log In</Link>
        <Link href="/logout">Log Out</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/signup">Sign Up</Link>
      </nav>
    </main>
  );
}

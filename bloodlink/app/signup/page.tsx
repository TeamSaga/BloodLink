"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("/api/register", {
        username,
        email,
        password,
      });

      alert("Registration successful. You can now log in.");
      router.push("/login");
    } catch (err: any) {
      setError(
        err.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="grid grid-cols-5 bg-white min-h-screen">
      <div className="col-span-2 bg-gray-50">
        <div className="mx-24 mt-12">
          <div className="text-gray-800 text-base font-light font-sans my-8">
            bloodlink
          </div>
          <div className="text-gray-700 text-3xl font-sans font-semibold my-12">
            Create Account
          </div>

          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-extralight font-serif py-2 px-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-full text-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-extralight font-serif py-2 px-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-full text-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-extralight font-serif py-2 px-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-full text-gray-600"
              />
            </div>
            <div className="pt-8">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-rose-700 rounded-full hover:bg-primary"
              >
                Sign Up
              </button>
            </div>

            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="col-span-3 relative w-full h-full overflow-hidden rounded-l-3xl">
        <Image
          src="/img.png"
          alt="example"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

export default function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("/api/reset-password", {
        token,
        password,
      });

      setSuccess("Password has been reset successfully.");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(
        err.response?.data?.error || "An error occurred. Please try again."
      );
    }
  };

  if (!token) {
    return (
      <div className="grid grid-cols-5 bg-white min-h-screen">
        <div className="col-span-2 bg-gray-50">
          <div className="mx-24 mt-12">
            <div className="text-gray-800 text-base font-light font-sans my-8">
              bloodlink
            </div>
            <div className="text-red-500">Invalid or expired reset token.</div>
            <p className="mt-4 text-sm text-center text-gray-600">
              <Link href="/forgot-password" className="text-blue-500 hover:underline">
                Request a new password reset
              </Link>
            </p>
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

  return (
    <div className="grid grid-cols-5 bg-white min-h-screen">
      <div className="col-span-2 bg-gray-50">
        <div className="mx-24 mt-12">
          <div className="text-gray-800 text-base font-light font-sans my-8">
            bloodlink
          </div>
          <div className="text-gray-700 text-3xl font-sans font-semibold my-12">
            Reset Password
          </div>

          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
          {success && <p className="mb-4 text-sm text-green-500">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-extralight font-serif py-2 px-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full px-3 py-2 border rounded-full text-gray-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-extralight font-serif py-2 px-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full px-3 py-2 border rounded-full text-gray-600"
              />
            </div>
            <div className="pt-8">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-rose-700 rounded-full hover:bg-primary"
              >
                Reset Password
              </button>
            </div>
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
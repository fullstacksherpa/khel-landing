"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || password !== confirmPassword) return;
    setStatus("loading");

    try {
      const res = await fetch("https://api.gocloudnepal.com/v1/authentication/reset-password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  if (!token) {
    return <p className="p-10 text-red-600">❌ Invalid or missing token.</p>;
  }

  return (
    <div className="mt-10 md:mt-20 p-10 max-w-md mx-auto h-[60vh]">
      <h1 className="text-xl mb-4">🔐 Reset Your Password</h1>
      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            required
            className="border px-4 py-2 w-full"
          />
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
            className="border px-4 py-2 w-full"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
          <label htmlFor="showPassword" className="text-sm text-gray-700">
            Show Password
          </label>
        </div>

        {!passwordsMatch && confirmPassword && (
          <p className="text-sm text-red-600">❗Passwords do not match</p>
        )}

        <button
          type="submit"
          disabled={!passwordsMatch || status === "loading"}
          className={`px-4 py-2 text-white ${
            passwordsMatch ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}>
          {status === "loading" ? "Resetting..." : "Reset Password"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">✅ Password reset successful! You can now log in.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">❌ Reset failed. The link may be expired or invalid.</p>
      )}
    </div>
  );
}

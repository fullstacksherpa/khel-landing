"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConfirmClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) return;

    (async () => {
      try {
        const res = await fetch(`https://api.gocloudnepal.com/v1/users/activate/${token}`, {
          method: "PUT",
        });
        const success = res.status === 204;
        setStatus(success ? "success" : "error");

        // 🔁 Redirect after 2 seconds
        setTimeout(() => {
          window.location.href = `khel://login?status=${success ? "success" : "error"}`;
        }, 2000);
      } catch {
        setStatus("error");
        setTimeout(() => {
          window.location.href = `khel://login?status=error`;
        }, 2000);
      }
    })();
  }, [token]);

  return (
    <div className="flex h-[70vh] items-center justify-center p-20">
      {status === "loading" && (
        <p className="text-xl tracking-wider text-gray-800">
          ⏳ Hang tight… we&apos;re activating your account.
        </p>
      )}

      {status === "success" && (
        <p className="text-xl tracking-wider text-gray-800">
          ✅ Your email has been successfully verified. Redirecting to app...
        </p>
      )}
      {status === "error" && (
        <p className="text-xl tracking-wider text-gray-800">
          ❌ Oops! Something went wrong. Redirecting to app...
        </p>
      )}
    </div>
  );
}

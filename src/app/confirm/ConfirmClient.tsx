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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/activate/${token}`, {
          method: "PUT",
        });
        console.log(process.env.NEXT_PUBLIC_API_URL, "/users/activate/");
        setStatus(res.status === 204 ? "success" : "error");
      } catch {
        setStatus("error");
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
          ✅ Your email has been successfully verified. You can now enjoy full access!
        </p>
      )}
      {status === "error" && (
        <p className="text-xl tracking-wider text-gray-800">
          ❌🤦‍♂️ Oops! Something went wrong with activation. The activation link may have expired or
          is invalid. Please try registering again.
        </p>
      )}
    </div>
  );
}

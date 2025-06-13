"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!token || typeof token !== "string") return;

    const activate = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/activate/${token}`, {
          method: "PUT",
        });

        if (res.status === 204) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Activation error:", error);
        setStatus("error");
      }
    };

    activate();
  }, [token]);

  return (
    <div style={{ padding: "2rem" }}>
      {status === "loading" && <p>Activating your account...</p>}
      {status === "success" && <p>✅ Your account has been activated!</p>}
      {status === "error" && (
        <p>❌ Activation failed. Please check your link or try again later.</p>
      )}
    </div>
  );
}

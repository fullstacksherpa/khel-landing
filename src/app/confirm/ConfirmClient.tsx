// app/confirm/ConfirmClient.tsx
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
        setStatus(res.status === 204 ? "success" : "error");
      } catch {
        setStatus("error");
      }
    })();
  }, [token]);

  return (
    <div style={{ padding: "2rem" }}>
      {status === "loading" && <p>Activating…</p>}
      {status === "success" && <p>✅ Activated!</p>}
      {status === "error" && <p>❌ Activation failed.</p>}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    let alive = true;
    fetch("/api/auth", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => { if (alive) setAuthenticated(Boolean(data.authenticated)); })
      .catch(() => { if (alive) setAuthenticated(false); })
      .finally(() => { if (alive) setChecking(false); });
    return () => { alive = false; };
  }, []);
  return { authenticated, checking };
}

import { useEffect, useState } from "react";

export function useNow() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timeout = setInterval(() => setNow(new Date()), 500);
    return () => clearInterval(timeout);
  }, []);

  return now;
}

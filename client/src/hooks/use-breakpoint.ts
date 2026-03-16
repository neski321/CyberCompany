import { useState, useEffect } from "react";

/**
 * Returns the number of grid columns based on viewport width.
 * Matches the same breakpoints used throughout the app:
 *   - < 768px  → 1 column (mobile)
 *   - 768–1023 → 2 columns (tablet)
 *   - ≥ 1024   → 3 columns (desktop)
 */
export function useBreakpoint(): number {
  const [columns, setColumns] = useState(() => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  });

  useEffect(() => {
    const lgMql = window.matchMedia("(min-width: 1024px)");
    const mdMql = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (lgMql.matches) setColumns(3);
      else if (mdMql.matches) setColumns(2);
      else setColumns(1);
    };

    lgMql.addEventListener("change", update);
    mdMql.addEventListener("change", update);

    return () => {
      lgMql.removeEventListener("change", update);
      mdMql.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TubesCursor = dynamic(
  () => import("@/components/ui/tube-cursor").then((m) => m.TubesCursor as unknown as React.ComponentType<any>),
  { ssr: false }
);

export default function CursorOverlay() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!isTouch && !reduce);
  }, []);
  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <TubesCursor showText={false} enableRandomizeOnClick={false} lightIntensity={120} />
    </div>
  );
}
"use client";
import Image from "next/image";
import { site } from "@/lib/site";

export function NavBar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20">
      <div className="container mx-auto h-16">
        <div className="pointer-events-auto flex h-full items-center justify-between rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 px-4 shadow-glow">
          <div className="flex items-center gap-3">
            {/* ضع الشعار في public/logo.svg أو public/logo.png */}
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-white/10">
              <Image
                src="/logo.webp"
                alt={site.brand.logoAlt}
                fill
                sizes="32px"
                className="object-contain"
                onErrorCapture={(e:any)=>{ e.currentTarget.parentElement?.classList.add("opacity-0"); }}
              />
            </div>
            <span className="text-base font-extrabold tracking-tight">{site.brand.name}</span>
          </div>
          <a
            href={site.cta.href}
            target="_blank" rel="noopener noreferrer" aria-label={site.cta.label}
            className="inline-flex items-center rounded-full bg-white text-black text-sm font-semibold px-4 py-2 shadow hover:opacity-90 transition"
          >
            {site.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}

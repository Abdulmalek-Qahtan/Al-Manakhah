"use client";
import { site } from "@/lib/site";
import { SocialIcon } from "./social-icons";
import { motion } from "framer-motion";

const COLORS: Record<string,string> = {
  WhatsApp: "#25D366",
  Instagram: "#E1306C",
  Facebook: "#1877F2",
  Snapchat: "#FFFC00",
  Telegram: "#24A1DE",
  Email: "#ffffff",
  YouTube: "#FF0000",
  X: "#ffffff",
  Website: "#ffffff",
  Phone: "#ffffff",
};

const variants = {
  container: { transition: { staggerChildren: 0.06 } },
  item: { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 } },
};

export function SocialGrid() {
  return (
    <section className="container mx-auto py-10">
      <motion.div
        className="mx-auto grid max-w-3xl grid-cols-2 sm:grid-cols-3 gap-5"
        variants={variants} initial="initial" animate="animate" whileInView="whileInView"
      >
        {site.social.map((s) => {
          const c = COLORS[s.label] ?? "#ffffff";
          const dark = s.label === "Snapchat" ? "#141414" : "#000000";
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="group block"
              variants={{ ...variants.item }}
            >
              <div
                className="relative flex flex-col items-center gap-2"
              >
                {/* الهالة */}
                <div
                  className="absolute -inset-1 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: `radial-gradient(40% 40% at 50% 50%, ${c}55, transparent)` }}
                />

                {/* الدائرة */}
                <div
                  className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black shadow-glow
                             ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105"
                  style={{ color: dark }}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{ background: `conic-gradient(from 180deg, ${c}33, transparent 65%)` }}
                  />
                  <div className="relative text-black">
                    <SocialIcon label={s.label as any} />
                  </div>
                </div>

                <span className="text-sm opacity-90">{renderLabel(s.label)}</span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

function renderLabel(label: string) {
  switch (label) {
    case "WhatsApp": return "WhatsApp";
    case "Instagram": return "Instagram";
    case "Facebook": return "Facebook";
    case "Snapchat": return "Snapchat";
    case "Telegram": return "Telegram";
    case "Email": return "Email";
    case "YouTube": return "YouTube";
    case "X": return "X";
    case "Website": return "Website";
    case "Phone": return "Phone";
    default: return label;
  }
}

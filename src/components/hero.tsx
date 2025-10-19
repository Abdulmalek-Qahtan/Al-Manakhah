"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-screen max-w-none left-1/2 -translate-x-1/2 bg-transparent">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="relative z-10 text-center py-32 sm:py-40 min-h-[70vh] flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            المناخة
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-[600px]"
          >
            أزياء جاهزة تجمع بين الأصالة والذوق العصري — الجودة التي تليق بمظهرك.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
            <Link
              href={site.cta.href}
              className="inline-block rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition-colors"
            >
              تواصل الآن
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

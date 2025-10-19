import { site } from "@/lib/site";
import { SocialGrid } from "@/components/SocialGrid";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative z-10 min-h-screen">
      <section className="container mx-auto flex min-h-[62vh] flex-col items-center justify-center text-center gap-5 pt-24">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-white via-white to-white/70">
            {site.brand.name}
          </span>
        </h1>
        <p className="text-lg md:text-2xl opacity-85">{site.brand.tagline}</p>

        <a
          href={site.cta.href} target="_blank" rel="noopener noreferrer" aria-label={site.cta.label}
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-black font-semibold shadow-glow transition
                     hover:translate-y-[-1px] active:translate-y-[0px]"
        >
          {site.cta.label}
        </a>
      </section>

      <SocialGrid />
      <Footer />
    </main>
  );
}

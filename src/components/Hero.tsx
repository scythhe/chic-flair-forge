import { useLang } from "@/lib/i18n";
import interior from "@/assets/interior.jpg.asset.json";

export function Hero() {
  const { tr } = useLang();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={interior.url} alt="Energy Beauty Salon interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Ambient gold glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-10 w-full">
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("hero.tag")}</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            <span className="block">{tr("hero.title1")}</span>
            <span className="block italic text-gold-gradient">{tr("hero.title2")}</span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            {tr("hero.sub")}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-primary-foreground font-medium tracking-wide shadow-gold hover:scale-[1.02] transition-all"
            >
              {tr("hero.cta")}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-foreground hover:bg-primary/10 transition-all"
            >
              {tr("hero.cta2")}
            </a>
          </div>

          <div className="flex items-center gap-3 pt-6">
            <div className="flex text-primary">
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{tr("hero.rating")}</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

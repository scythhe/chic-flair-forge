import { useLang } from "@/lib/i18n";
import lounge from "@/assets/lounge.png.asset.json";

export function About() {
  const { tr } = useLang();
  const stats = [
    { v: "5.0", k: "about.stat1" },
    { v: "13", k: "about.stat2" },
    { v: "10+", k: "about.stat3" },
    { v: "4", k: "about.stat4" },
  ];
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-luxe aspect-[4/5]">
            <img src={lounge.url} alt="Salon lounge" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-card border border-primary/30 rounded-2xl p-6 shadow-luxe max-w-[240px]">
            <div className="flex text-primary mb-2">
              {[0,1,2,3,4].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <div className="font-display text-2xl">5.0</div>
            <div className="text-xs text-muted-foreground">Google · 13 reviews</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("about.eyebrow")}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            <span className="italic text-gold-gradient">{tr("about.title")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">{tr("about.body")}</p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.k} className="border-l-2 border-primary/50 pl-4">
                <div className="font-display text-4xl text-gold-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{tr(s.k)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

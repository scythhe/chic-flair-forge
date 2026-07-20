import { useLang } from "@/lib/i18n";

const services = [
  { key: "hair", price: 40, icon: "M4 20c2-6 6-8 8-8s6 2 8 8M12 4v8M9 6l3-2 3 2" },
  { key: "bridal", price: 120, icon: "M12 3l2 5h5l-4 3 1.5 5.5L12 13l-4.5 3.5L9 11 5 8h5l2-5z" },
  { key: "nails", price: 25, icon: "M8 3h8v14a4 4 0 01-8 0V3zM8 8h8" },
  { key: "skin", price: 45, icon: "M12 3c4 4 6 7 6 10a6 6 0 11-12 0c0-3 2-6 6-10z" },
  { key: "spa", price: 60, icon: "M4 12s2-5 8-5 8 5 8 5-2 5-8 5-8-5-8-5zM12 9a3 3 0 100 6 3 3 0 000-6z" },
  { key: "makeup", price: 35, icon: "M4 20l4-12h8l4 12M8 14h8" },
];

export function Services() {
  const { tr } = useLang();
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("services.eyebrow")}</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-6">
            {tr("services.title").split(" ").slice(0,1).join(" ")}{" "}
            <span className="italic text-gold-gradient">{tr("services.title").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{tr("services.sub")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.key}
              className="group relative p-8 rounded-2xl bg-card/60 border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon}/>
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{tr("services.from")}</div>
                    <div className="font-display text-2xl text-gold-gradient">₾{s.price}</div>
                  </div>
                </div>

                <h3 className="font-display text-2xl mb-3">{tr(`svc.${s.key}.name`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{tr(`svc.${s.key}.desc`)}</p>

                <div className="text-xs text-primary/80 tracking-wide mb-6 leading-relaxed">
                  {tr(`svc.${s.key}.items`)}
                </div>

                <a href="#book" className="inline-flex items-center gap-2 text-sm text-primary group/link">
                  <span>{tr("services.book")}</span>
                  <span className="w-0 group-hover/link:w-6 h-px bg-primary transition-all"/>
                  <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                </a>
              </div>

              <div className="absolute top-4 right-4 font-display text-6xl text-primary/5 group-hover:text-primary/10 transition-colors">
                0{i+1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

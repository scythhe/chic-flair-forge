import { useLang } from "@/lib/i18n";

const reviews = [
  { key: "reviews.r1", name: "Reza Vafa", meta: "Local Guide · Google" },
  { key: "reviews.r2", name: "Chris & Hal Johnston", meta: "Local Guide · Google" },
  { key: "reviews.r3", name: "Yalda Moradivafa", meta: "Google Review" },
];

export function Reviews() {
  const { tr } = useLang();
  return (
    <section className="relative py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("reviews.eyebrow")}</span>
            <span className="w-10 h-px bg-gold-gradient" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl">
            <span className="italic text-gold-gradient">{tr("reviews.title")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all">
              <div className="text-primary font-display text-6xl leading-none mb-4">"</div>
              <p className="text-foreground leading-relaxed mb-6 -mt-4">{tr(r.key)}</p>
              <div className="flex text-primary mb-3">
                {[0,1,2,3,4].map(j => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <div className="font-display text-lg">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

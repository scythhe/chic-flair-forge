import { useLang } from "@/lib/i18n";

export function Contact() {
  const { tr } = useLang();
  return (
    <section id="contact" className="relative py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold-gradient" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("contact.eyebrow")}</span>
            <span className="w-10 h-px bg-gold-gradient" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl">
            <span className="italic text-gold-gradient">{tr("contact.title")}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <InfoCard icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-6-7-12a7 7 0 0114 0c0 6-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>} title="Address" value={tr("contact.addr")} />
          <InfoCard icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h4l2 5-3 2a11 11 0 006 6l2-3 5 2v4c0 1-1 2-2 2A18 18 0 013 7c0-1 1-2 2-2z"/></svg>} title="Phone" value={tr("contact.phone")} />
          <InfoCard icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>} title="Hours" value={tr("contact.hours")} />
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-luxe">
          <iframe
            title="Energy Beauty Salon location"
            src="https://www.google.com/maps?q=39+Pekini+Ave,+Tbilisi&output=embed"
            className="w-full h-[420px] grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all text-center">
      <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">{title}</div>
      <div className="font-display text-xl">{value}</div>
    </div>
  );
}

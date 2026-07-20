import { useLang } from "@/lib/i18n";

export function Footer() {
  const { tr } = useLang();
  return (
    <footer className="relative border-t border-border py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
              <span className="font-display text-xl text-primary-foreground font-semibold">E</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">Energy Beauty Salon</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{tr("footer.tag")}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border hover:border-primary/60 hover:text-primary flex items-center justify-center transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="tel:+995571121412" className="w-10 h-10 rounded-full border border-border hover:border-primary/60 hover:text-primary flex items-center justify-center transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h4l2 5-3 2a11 11 0 006 6l2-3 5 2v4c0 1-1 2-2 2A18 18 0 013 7c0-1 1-2 2-2z"/></svg>
            </a>
          </div>
        </div>

        <div className="hairline mb-8"/>

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Energy Beauty Salon · {tr("footer.rights")}</div>
          <div>39 Pekini Ave, Tbilisi · +995 571 12 14 12</div>
        </div>
      </div>
    </footer>
  );
}

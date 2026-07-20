import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function Booking() {
  const { tr } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "hair", date: "", time: "", notes: "",
  });

  const services = ["hair","bridal","nails","skin","spa","makeup"];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="relative py-32 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold-gradient" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("book.eyebrow")}</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">
              <span className="italic text-gold-gradient">{tr("book.title")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">{tr("book.sub")}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h4l2 5-3 2a11 11 0 006 6l2-3 5 2v4c0 1-1 2-2 2A18 18 0 013 7c0-1 1-2 2-2z"/></svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Call</div>
                  <div>{tr("contact.phone")}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Hours</div>
                  <div>{tr("contact.hours")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gold-gradient opacity-20 blur-2xl rounded-3xl" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-primary/20 shadow-luxe">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center mb-6 shadow-gold">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground"><path d="M5 12l5 5L20 7"/></svg>
                  </div>
                  <h3 className="font-display text-3xl mb-3">{tr("book.success")}</h3>
                  <p className="text-muted-foreground text-sm">{form.name} · {form.date} {form.time}</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label={tr("book.name")}>
                      <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input"/>
                    </Field>
                    <Field label={tr("book.phone")}>
                      <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="input"/>
                    </Field>
                  </div>
                  <Field label={tr("book.email")}>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input"/>
                  </Field>
                  <Field label={tr("book.service")}>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="input">
                      {services.map(s => <option key={s} value={s}>{tr(`svc.${s}.name`)}</option>)}
                    </select>
                  </Field>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label={tr("book.date")}>
                      <input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="input"/>
                    </Field>
                    <Field label={tr("book.time")}>
                      <input required type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} className="input"/>
                    </Field>
                  </div>
                  <Field label={tr("book.notes")}>
                    <textarea rows={3} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} className="input resize-none"/>
                  </Field>

                  <button type="submit" className="w-full mt-2 py-4 rounded-full bg-gold-gradient text-primary-foreground font-medium tracking-wide shadow-gold hover:opacity-90 transition-all">
                    {tr("book.submit")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--input);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.85rem 1rem;
          color: var(--foreground);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s;
        }
        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.78 0.11 82 / 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

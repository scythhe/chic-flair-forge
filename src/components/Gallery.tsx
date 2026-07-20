import { useLang } from "@/lib/i18n";
import hair from "@/assets/hair.jpg.asset.json";
import nails from "@/assets/nails.jpg.asset.json";
import interior from "@/assets/interior.jpg.asset.json";
import lounge from "@/assets/lounge.png.asset.json";

const shots = [
  { src: hair.url, span: "md:row-span-2", label: "Bridal" },
  { src: interior.url, span: "", label: "Studio" },
  { src: nails.url, span: "md:row-span-2", label: "Nails" },
  { src: lounge.url, span: "", label: "Lounge" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80", span: "", label: "Color" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80", span: "", label: "Makeup" },
];

export function Gallery() {
  const { tr } = useLang();
  return (
    <section id="gallery" className="relative py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold-gradient" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">{tr("gallery.eyebrow")}</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl">
              <span className="italic text-gold-gradient">{tr("gallery.title")}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {shots.map((s, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl ${s.span}`}>
              <img
                src={s.src}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">— {String(i+1).padStart(2,"0")}</div>
                <div className="font-display text-2xl">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

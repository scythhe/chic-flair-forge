import { useLang, type Lang } from "@/lib/i18n";

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ka", label: "KA" },
  { code: "ru", label: "RU" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const idx = langs.findIndex((l) => l.code === lang);
  return (
    <div className="relative inline-flex items-center rounded-full border border-primary/30 bg-background/60 backdrop-blur-md p-1">
      <div
        className="absolute top-1 bottom-1 w-10 rounded-full bg-gold-gradient transition-all duration-300 ease-out shadow-gold"
        style={{ left: `calc(${idx} * 2.5rem + 0.25rem)` }}
      />
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`relative z-10 w-10 h-8 text-xs font-medium tracking-widest transition-colors ${
            lang === l.code ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${l.label}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

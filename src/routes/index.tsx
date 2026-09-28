import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events, type ClubEvent } from "@/data/events";
import heroImage from "@/assets/loft-hero.jpg";
import clubImage from "@/assets/club-crowd.jpg";
import galleryLights from "@/assets/gallery-lights.jpg";
import galleryMoment from "@/assets/gallery-moment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOFT Club Thun | Nächte, die bleiben – Designkonzept" },
      { name: "description", content: "Ein unabhängiges Designkonzept für LOFT Club Thun: Entdecke die Atmosphäre, Beispiel-Events und Clubinfos in Thun." },
      { property: "og:title", content: "LOFT Club Thun | Designkonzept" },
      { property: "og:description", content: "Nächte, die bleiben. Ein unabhängiges Website-Designkonzept für LOFT Club Thun." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "EVENTS", href: "#events" },
  { label: "CLUB", href: "#club" },
  { label: "GALERIE", href: "#galerie" },
  { label: "INFO", href: "#info" },
  { label: "KONTAKT", href: "#kontakt" },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "nav-scrolled" : ""}`}>
        <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 sm:h-22 sm:px-10 lg:px-16">
          <a href="#start" aria-label="LOFT – nach oben" className="font-display text-[2.35rem] leading-none font-extrabold text-foreground sm:text-[2.7rem]">LOFT<span className="text-primary">.</span></a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex xl:gap-11">
            {navItems.map(item => <a key={item.href} className="text-[11px] font-extrabold tracking-[.14em] text-foreground/75 transition-colors hover:text-primary" href={item.href}>{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="club" size="club" className="hidden lg:inline-flex"><a href="#events">TICKETS <ArrowUpRight /></a></Button>
            <Button variant="clubText" size="icon" className="relative z-50 !size-11 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"} aria-expanded={menuOpen} aria-controls="mobilmenue">
              {menuOpen ? <X className="!size-7" /> : <Menu className="!size-7" />}
            </Button>
          </div>
        </div>
      </header>
      <div id="mobilmenue" className={`fixed inset-0 z-40 flex flex-col justify-center bg-background px-7 transition-all duration-300 lg:hidden ${menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobilnavigation" className="flex flex-col items-start gap-2">
          {navItems.map((item, i) => <a tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} key={item.href} href={item.href} className="flex w-full items-center justify-between border-b border-line py-3 font-display text-[clamp(3.6rem,12vw,6rem)] leading-none font-bold uppercase hover:text-primary">{item.label}<span className="font-sans text-xs text-muted-foreground">0{i + 1}</span></a>)}
        </nav>
        <Button asChild variant="club" size="club" className="mt-10 w-fit" tabIndex={menuOpen ? 0 : -1}><a onClick={() => setMenuOpen(false)} href="#events">TICKETS <ArrowUpRight /></a></Button>
      </div>
    </>
  );
}

function SectionHeading({ kicker, title, aside }: { kicker: string; title: string; aside?: string }) {
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6 sm:mb-11 sm:pt-8"><div><p className="eyebrow mb-5 text-primary">{kicker}</p><h2 className="section-title">{title}</h2></div>{aside && <span className="pb-1 text-xs font-bold tracking-[.16em] text-muted-foreground uppercase">{aside}</span>}</div>;
}

function TicketButton({ event, compact = false }: { event: ClubEvent; compact?: boolean }) {
  return event.ticketUrl ? (
    <Button asChild variant="club" size="club" className={compact ? "w-full justify-between" : "justify-between"}><a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">TICKETS <ArrowUpRight /></a></Button>
  ) : (
    <Button disabled variant="club" size="club" className={compact ? "w-full justify-between" : "justify-between"} title="Ticketlink für dieses Beispiel-Event noch nicht verfügbar">TICKETS FOLGEN <ArrowUpRight /></Button>
  );
}

function SmallEventCard({ event }: { event: ClubEvent }) {
  return <article className="group min-w-0">
    <div className="event-poster relative aspect-[4/5] overflow-hidden bg-surface-raised">
      <img src={event.image} alt={`Atmosphärisches Motiv für ${event.title} (Beispiel-Event)`} width={1024} height={1536} loading="lazy" className="h-full w-full object-cover" />
      <div className="poster-vignette absolute inset-0" />
      <span className="absolute top-5 left-5 border border-foreground/50 px-3 py-2 text-center font-display text-3xl leading-[.75] font-bold sm:top-6 sm:left-6">{event.day}<span className="mt-2 block font-sans text-[10px] tracking-[.17em]">{event.month}</span></span>
      <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6"><p className="eyebrow mb-2 text-primary">LOFT CLUB THUN</p><h3 className="club-title text-[clamp(3.4rem,5vw,5.7rem)]">{event.title}</h3></div>
    </div>
    <div className="border-b border-line py-5"><div className="mb-5 flex flex-wrap justify-between gap-2 text-xs font-semibold text-muted-foreground"><span>{event.genre}</span><span>{event.age}</span></div><TicketButton event={event} compact /></div>
  </article>;
}

const gallery = [
  { image: galleryLights, alt: "DJ-Pult und Lichtstrahlen im Club", className: "sm:col-span-5 sm:row-span-2" },
  { image: clubImage, alt: "Menschen auf einer Tanzfläche", className: "sm:col-span-7" },
  { image: galleryMoment, alt: "Tanzende Menschen im warmen Clublicht", className: "sm:col-span-7" },
];

function Index() {
  const featured = events[0];
  if (!featured) return null;
  return <main className="overflow-clip bg-background text-foreground">
    <Navigation />
    <section id="start" className="relative flex min-h-[min(760px,calc(100svh-64px))] flex-col justify-end overflow-hidden pt-28 pb-14 sm:min-h-[min(900px,92svh)] sm:pb-20">
      <img src={heroImage} alt="Atmosphärische Clubnacht mit tanzendem Publikum (Konzeptbild)" width={1920} height={1280} fetchPriority="high" className="hero-image absolute inset-0 h-full w-full object-cover object-center" />
      <div className="hero-vignette absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-10 lg:px-16">
        <div className="mb-7 flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_15px_var(--primary)]" /><span className="eyebrow text-foreground/85">THUN, SCHWEIZ <span className="mx-2 text-primary">/</span> NACHTKULTUR</span></div>
        <h1 className="club-title max-w-5xl text-[clamp(7.4rem,23vw,20rem)]">LOFT<span className="text-primary">.</span><br /><span className="text-[.58em]">THUN</span></h1>
        <div className="mt-6 flex flex-col gap-9 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[.98] font-semibold uppercase">MUSIK.<br />NÄCHTE.<br /><span className="text-primary">ERINNERUNGEN.</span></p>
          <div className="flex flex-wrap gap-3"><Button asChild variant="club" size="club"><a href="#events">NÄCHSTE EVENTS <ArrowUpRight /></a></Button><Button asChild variant="clubOutline" size="club"><a href="#tickets">TICKETS <ArrowRight /></a></Button></div>
        </div>
      </div>
      <a href="#events" className="absolute right-5 bottom-6 hidden items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-foreground/70 transition-colors hover:text-primary md:flex lg:right-16">MEHR ENTDECKEN <ArrowDown className="size-4" /></a>
    </section>

    <div className="border-y border-line bg-surface py-4"><div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 overflow-hidden px-5 text-[10px] font-bold tracking-[.2em] text-muted-foreground uppercase sm:px-10 lg:px-16"><span>LOFT CLUB THUN</span><span className="hidden sm:inline">MUSIK. NÄCHTE. ERINNERUNGEN.</span><span>46°45′ N / 7°37′ E</span></div></div>

    <section id="events" className="scroll-mt-24 px-5 py-18 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading kicker="01 / EVENT-HIGHLIGHT" title="NÄCHSTES EVENT" aside="BEISPIEL-EVENT" />
      <article id="tickets" className="grid overflow-hidden bg-surface md:grid-cols-[48%_52%]">
        <div className="event-poster relative min-h-[440px] overflow-hidden sm:min-h-[580px]"><img src={featured.image} alt="DJ im roten Clublicht – Motiv für das Beispiel-Event Afterhours" width={1024} height={1536} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_35%]" /><div className="poster-vignette absolute inset-0" /><span className="absolute top-6 left-6 border border-foreground/60 px-3 py-2 font-sans text-[10px] font-extrabold tracking-[.16em]">EVENTKONZEPT / 001</span><span className="absolute right-6 bottom-4 font-display text-[clamp(7rem,16vw,16rem)] leading-none font-bold text-foreground/15">01</span><div className="absolute bottom-8 left-7"><p className="eyebrow mb-2 text-primary">EINE NACHT. EIN GEFÜHL.</p><h3 className="club-title text-[clamp(5rem,10vw,10rem)]">AFTER<br />HOURS</h3></div></div>
        <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-16"><div><p className="eyebrow mb-10 text-primary">DEIN NÄCHSTER ABEND IM LOFT</p><div className="mb-12 flex items-start gap-6 border-b border-line pb-10"><span className="font-display text-[clamp(6rem,10vw,10rem)] leading-[.7] font-bold">{featured.day}</span><div className="pt-1"><span className="font-display text-4xl font-bold uppercase">{featured.month}</span><p className="mt-2 text-sm text-muted-foreground">{featured.date}</p></div></div><dl className="grid gap-5 sm:grid-cols-2">{[["TÜRÖFFNUNG", featured.time], ["SOUND", featured.genre], ["ALTER", featured.age], ["EINTRITT", featured.price]].map(([label, value]) => <div key={label} className="border-b border-line pb-4"><dt className="eyebrow mb-2 text-muted-foreground">{label}</dt><dd className="text-sm font-bold">{value}</dd></div>)}</dl></div><div className="mt-12"><TicketButton event={featured} /><p className="mt-4 text-xs leading-relaxed text-muted-foreground">Alle Eventangaben sind Platzhalter. Noch kein Ticketverkauf.</p></div></div>
      </article>
    </div></section>

    <section className="px-5 pb-20 sm:px-10 sm:pb-32 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading kicker="02 / AUF DEM RADAR" title="WEITERE EVENTS" aside="BEISPIEL-PROGRAMM" /><div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">{events.slice(1).map(event => <SmallEventCard key={event.id} event={event} />)}</div></div></section>

    <section id="club" className="scroll-mt-20 bg-surface"><div className="grid lg:grid-cols-2"><div className="relative min-h-[480px] overflow-hidden sm:min-h-[650px]"><img src={clubImage} alt="Menschen tanzen im Clublicht (Konzeptbild)" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="photo-shade absolute inset-0" /></div><div className="flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-16"><p className="eyebrow mb-8 text-primary">03 / DER CLUB</p><h2 className="section-title max-w-xl">DAS IST<br /><span className="text-primary">LOFT.</span></h2><div className="mt-12 border-t border-line pt-8"><p className="max-w-md font-display text-[clamp(2rem,3vw,3rem)] leading-[1.04] font-semibold uppercase">Mitten in Thun.<br />Musik, Energie und Nächte, die bleiben.</p><a href="#info" className="mt-10 inline-flex items-center gap-3 text-xs font-bold tracking-[.15em] uppercase transition-colors hover:text-primary">CLUB ENTDECKEN <ArrowUpRight className="size-5" /></a></div></div></div></section>

    <section id="galerie" className="scroll-mt-20 px-5 py-20 sm:px-10 sm:py-32 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading kicker="04 / MOMENTE" title="NÄCHTE IM LOFT" aside="KONZEPTBILDER" /><div className="grid gap-3 sm:h-[650px] sm:grid-cols-12 sm:grid-rows-2 sm:gap-4">{gallery.map((item, i) => <div key={item.alt} className={`gallery-photo group relative h-[330px] overflow-hidden bg-surface sm:h-auto ${item.className}`}><img src={item.image} alt={`${item.alt} (Konzeptbild)`} width={i === 1 ? 1536 : 1024} height={i === 1 ? 1024 : 1280} loading="lazy" className="h-full w-full object-cover" /><div className="photo-shade absolute inset-0" /><span className="absolute bottom-5 left-5 font-sans text-[10px] font-bold tracking-widest text-foreground/80">0{i + 1} / LOFT</span></div>)}</div></div></section>

    <section className="border-y border-line bg-surface px-5 py-20 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-[1480px]"><div className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow mb-5 text-primary">05 / SOCIAL</p><h2 className="section-title">FOLGE DER NACHT</h2><p className="mt-6 text-lg font-semibold text-muted-foreground">@loftclubthun</p></div><Button asChild variant="clubOutline" size="club"><a href="https://www.instagram.com/loftclubthun/" target="_blank" rel="noopener noreferrer"><Instagram /> AUF INSTAGRAM FOLGEN <ArrowUpRight /></a></Button></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">{[galleryMoment, galleryLights, clubImage, heroImage].map((image, i) => <a key={image} href="https://www.instagram.com/loftclubthun/" target="_blank" rel="noopener noreferrer" aria-label={`Instagram öffnen – Bild ${i + 1}`} className="gallery-photo group relative aspect-square overflow-hidden bg-surface-raised"><img src={image} alt={`Clubatmosphäre ${i + 1} (Konzeptbild, kein Instagram-Beitrag)`} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all group-hover:bg-background/35 group-hover:opacity-100"><Instagram className="size-8" /></span></a>)}</div><p className="mt-4 text-xs text-muted-foreground">Bildmotive sind Teil dieses Designkonzepts, keine echten Instagram-Beiträge.</p></div></section>

    <section id="info" className="scroll-mt-20 px-5 py-20 sm:px-10 sm:py-32 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading kicker="06 / GUT ZU WISSEN" title="CLUB INFO" /><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div><h3 className="font-display text-5xl font-bold uppercase sm:text-6xl">LOFT CLUB THUN<span className="text-primary">.</span></h3><address className="mt-8 text-lg leading-relaxed not-italic text-muted-foreground">Obere Hauptgasse 27<br />3600 Thun<br />Schweiz</address><a className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-2 text-xs font-bold tracking-widest uppercase transition-colors hover:text-primary" href="https://www.google.com/maps/search/?api=1&query=Obere+Hauptgasse+27%2C+3600+Thun%2C+Switzerland" target="_blank" rel="noopener noreferrer">ADRESSE ANSEHEN <ArrowUpRight className="size-4" /></a></div><dl className="divide-y divide-line border-t border-line">{["ÖFFNUNGSZEITEN", "EINTRITT", "MINDESTALTER", "ANREISE", "GARDEROBE"].map(item => <div key={item} className="grid grid-cols-2 gap-4 py-5 sm:py-6"><dt className="eyebrow text-foreground">{item}</dt><dd className="text-sm text-muted-foreground">Angaben folgen</dd></div>)}</dl></div></div></section>

    <section className="relative overflow-hidden border-t border-line bg-surface px-5 py-24 text-center sm:px-10 sm:py-36"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,var(--accent),transparent_65%)] opacity-70" /><div className="relative mx-auto max-w-[1200px]"><p className="eyebrow mb-8 text-primary">DIE NACHT WARTET</p><h2 className="section-title text-[clamp(4.5rem,12vw,12rem)]">BEREIT FÜR<br />HEUTE NACHT<span className="text-primary">?</span></h2><Button asChild variant="club" size="club" className="mt-10"><a href="#events">EVENTS ENTDECKEN <ArrowUpRight /></a></Button></div></section>

    <footer id="kontakt" className="scroll-mt-20 border-t border-line px-5 pt-16 pb-8 sm:px-10 lg:px-16"><div className="mx-auto max-w-[1480px]"><div className="grid gap-12 border-b border-line pb-16 lg:grid-cols-[1.4fr_1fr_1fr]"><div><a href="#start" className="font-display text-7xl leading-none font-extrabold">LOFT<span className="text-primary">.</span></a><p className="mt-4 text-sm text-muted-foreground">LOFT Club Thun<br />Obere Hauptgasse 27 · 3600 Thun</p></div><div><p className="eyebrow mb-6 text-primary">ENTDECKEN</p><nav aria-label="Footernavigation" className="flex flex-col items-start gap-3">{navItems.map(item => <a key={item.href} href={item.href} className="text-sm font-semibold transition-colors hover:text-primary">{item.label}</a>)}</nav></div><div><p className="eyebrow mb-6 text-primary">VERBINDEN</p><a className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary" href="https://www.instagram.com/loftclubthun/" target="_blank" rel="noopener noreferrer">INSTAGRAM <ArrowUpRight className="size-4" /></a><p className="mt-8 text-sm text-muted-foreground">Kontaktangaben folgen.</p></div></div><div className="flex flex-col gap-4 pt-7 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 LOFT CLUB THUN — UNABHÄNGIGES DESIGNKONZEPT. KEINE OFFIZIELLE WEBSITE.</p><div className="flex gap-6"><span>IMPRESSUM FOLGT</span><span>DATENSCHUTZ FOLGT</span></div></div></div></footer>
  </main>;
}
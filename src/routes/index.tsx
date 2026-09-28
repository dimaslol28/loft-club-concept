import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { ClubLink, Footer, Navigation } from "@/components/club-shell";
import { events, type ClubEvent } from "@/data/events";
import heroImage from "@/assets/loft-hero.jpg";
import clubImage from "@/assets/club-crowd.jpg";
import galleryLights from "@/assets/gallery-lights.jpg";
import galleryMoment from "@/assets/gallery-moment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "LOFT Club Thun – Events & Nächte | Unabhängiges Designkonzept" },
    { name: "description", content: "Unabhängiges Designkonzept für LOFT Club Thun. Drei öffentlich gelistete Events, Eckdaten und Links zu den externen Veranstaltungsseiten." },
    { property: "og:title", content: "LOFT Club Thun – Events | Designkonzept" },
    { property: "og:description", content: "Entdecke öffentlich gelistete Nächte in Thun. Ein unabhängiges Designkonzept, keine offizielle Clubwebsite." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

function SectionHeading({ title, label, aside }: { title: string; label?: string; aside?: string }) {
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6 sm:mb-11 sm:pt-8"><div>{label && <p className="eyebrow mb-5 text-primary">{label}</p>}<h2 className="section-title">{title}</h2></div>{aside && <p className="text-xs font-semibold text-muted-foreground">{aside}</p>}</div>;
}

function EventAction({ event, full = false }: { event: ClubEvent; full?: boolean }) {
  return <ClubLink href={event.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${event.externalLabel} für ${event.title} (öffnet in neuem Tab)`} className={full ? "w-full justify-between" : "justify-between"}>{event.externalLabel} <ArrowUpRight className="size-4" /></ClubLink>;
}

function EventCard({ event }: { event: ClubEvent }) {
  return <article className="group border-t border-line pt-5">
    <Link to="/events/$slug" params={{ slug: event.slug }} className="block focus-visible:outline-2 focus-visible:outline-primary" aria-label={`Details zu ${event.title}`}>
      <div className="event-poster relative aspect-[1.3] overflow-hidden bg-surface-raised sm:aspect-[.92]"><img src={event.image} alt={event.imageAlt} loading="lazy" className="h-full w-full object-cover opacity-70" /><div className="poster-vignette absolute inset-0" /><span className="absolute top-5 left-5 bg-background/85 px-3 py-2 font-display text-4xl leading-none font-bold">{event.day}<span className="ml-2 text-base text-primary">{event.month}</span></span><span className="absolute right-5 bottom-5 text-[10px] font-bold uppercase text-foreground/85">Visual: Designkonzept</span></div>
      <div className="pt-5"><p className="mb-2 text-xs font-semibold text-primary">{event.date} · {event.time}</p><h3 className="font-display text-[clamp(2.4rem,4vw,4.5rem)] leading-[.9] font-bold uppercase transition-colors group-hover:text-primary">{event.title}</h3><div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground"><span>{event.category} · {event.age}</span><ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-primary" /></div></div>
    </Link>
    <div className="mt-6"><EventAction event={event} full /></div>
  </article>;
}

const gallery = [
  { src: galleryLights, alt: "Lichtstrahlen über einem DJ-Pult, atmosphärisches Designkonzept", layout: "sm:col-span-5 sm:row-span-2" },
  { src: clubImage, alt: "Tanzende Menschen in warmem Licht, atmosphärisches Designkonzept", layout: "sm:col-span-7" },
  { src: galleryMoment, alt: "Bewegung auf einer Tanzfläche, atmosphärisches Designkonzept", layout: "sm:col-span-7" },
];

function Home() {
  const featured = events[0];
  if (!featured) return null;
  return <main className="overflow-clip bg-background text-foreground">
    <Navigation />
    <section id="start" className="relative flex min-h-[82svh] flex-col justify-end overflow-hidden pt-28 pb-10 sm:min-h-[min(940px,94svh)] sm:pb-18">
      <img src={heroImage} alt="Atmosphärische Clubnacht als unabhängiges Konzeptbild" fetchPriority="high" className="hero-image absolute inset-0 h-full w-full object-cover object-center" />
      <div className="hero-vignette absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-10 lg:px-16">
        <h1 className="club-title max-w-5xl text-[clamp(7.1rem,22vw,20rem)]">LOFT<span className="text-primary">.</span><br /><span className="text-[.58em]">THUN</span></h1>
        <div className="mt-7 flex flex-col gap-7 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-sm font-display text-[clamp(1.9rem,3vw,2.8rem)] leading-[.98] font-semibold uppercase">MUSIK.<br />NÄCHTE.<br /><span className="text-primary">ERINNERUNGEN.</span></p><div className="flex flex-wrap gap-3"><ClubLink href="#events" className="px-5 sm:px-8">NÄCHSTE EVENTS <ArrowUpRight className="size-4" /></ClubLink><ClubLink variant="clubOutline" href={featured.externalUrl} target="_blank" rel="noopener noreferrer">TICKETS <ArrowRight className="size-4" /></ClubLink></div></div>
        <p className="mt-7 text-[11px] text-foreground/75">Atmosphärisches Bild: Designkonzept</p>
      </div>
      <a href="#events" aria-label="Zu den Events scrollen" className="absolute right-10 bottom-9 hidden text-foreground/80 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary md:block"><ArrowDown className="size-6" /></a>
    </section>

    <section id="events" className="scroll-mt-20 px-5 py-18 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading label="EVENTS / 2026" title="DIE NÄCHSTEN NÄCHTE" aside="Öffentlich gelistete Events · Angaben beim Veranstalter prüfen" />
      <article className="grid bg-surface lg:grid-cols-[.85fr_1.15fr]">
        <div className="event-poster relative order-2 min-h-[230px] overflow-hidden sm:min-h-[450px] lg:order-1 lg:min-h-[640px]"><img src={featured.image} alt={featured.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-65" /><div className="poster-vignette absolute inset-0" /><span className="absolute top-6 left-6 bg-background/85 px-4 py-3 font-display text-5xl leading-none font-bold sm:text-7xl">{featured.day} <span className="text-primary">{featured.month}</span></span><span className="absolute bottom-6 left-6 text-xs font-semibold uppercase">Visual: Designkonzept · kein Eventposter</span></div>
        <div className="order-1 flex flex-col justify-between p-6 sm:p-10 lg:order-2 lg:p-14"><div><p className="eyebrow mb-5 text-primary">NÄCHSTES EVENT · LABEL RELEASE</p><h3 className="club-title max-w-[12ch] text-[clamp(4.2rem,7vw,8rem)]">THUN<br />IN LOVE<span className="text-primary">.</span></h3><p className="mt-5 text-sm font-bold uppercase text-foreground/80">{featured.title}</p><p className="mt-7 max-w-lg text-sm leading-relaxed text-muted-foreground">{featured.summary}</p><dl className="mt-8 grid grid-cols-2 gap-x-5 border-t border-line sm:gap-x-8">{[["DATUM", featured.date], ["ZEIT", featured.time], ["ALTER", featured.age], ["REGULÄRES TICKET", featured.price], ["ZUSAMMEN MIT", featured.collaboration], ["LINE-UP", featured.lineup]].map(([label, value]) => <div key={label} className="border-b border-line py-4"><dt className="eyebrow mb-2 text-muted-foreground">{label}</dt><dd className="text-sm font-bold">{value}</dd></div>)}</dl></div><div className="mt-9 flex flex-wrap gap-3"><EventAction event={featured} /><Link to="/events/$slug" params={{ slug: featured.slug }} className="inline-flex min-h-12 items-center gap-2 border-b border-line px-1 text-xs font-bold uppercase transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">EVENTDETAILS <ArrowRight className="size-4" /></Link></div></div>
      </article>
      <div className="mt-18 sm:mt-28"><SectionHeading title="WEITERE EVENTS" /><div className="grid gap-10 sm:grid-cols-2">{events.slice(1).map(event => <EventCard key={event.slug} event={event} />)}</div></div>
    </div></section>

    <section id="club" className="scroll-mt-20 bg-surface"><div className="grid lg:grid-cols-2"><div className="relative min-h-[320px] overflow-hidden sm:min-h-[580px]"><img src={clubImage} alt="Clubatmosphäre als Designkonzept, keine Aufnahme des LOFT Club Thun" loading="lazy" className="gallery-photo absolute inset-0 h-full w-full object-cover" /><div className="photo-shade absolute inset-0" /><span className="absolute bottom-5 left-5 text-xs font-semibold">Mood / Designkonzept</span></div><div className="flex flex-col justify-center px-5 py-18 sm:px-12 lg:px-16"><h2 className="section-title max-w-xl">DAS IST<br /><span className="text-primary">LOFT.</span></h2><div className="mt-10 border-t border-line pt-7"><p className="max-w-md font-display text-[clamp(2rem,3vw,3rem)] leading-[1.04] font-semibold uppercase">Mitten in Thun.<br />Musik, Energie und Nächte, die bleiben.</p><a href="#info" className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">ADRESSE & INFO <ArrowUpRight className="size-5" /></a></div></div></div></section>

    <section id="galerie" className="scroll-mt-20 px-5 py-18 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading title="MOOD / DESIGNKONZEPT" /><div className="grid gap-3 sm:h-[620px] sm:grid-cols-12 sm:grid-rows-2 sm:gap-4">{gallery.map(item => <div key={item.alt} className={`gallery-photo relative h-[260px] overflow-hidden bg-surface sm:h-auto ${item.layout}`}><img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" /><div className="photo-shade absolute inset-0" /></div>)}</div><p className="mt-4 text-xs text-muted-foreground">Atmosphärische Konzeptbilder – keine offiziellen Aufnahmen aus dem Club.</p></div></section>

    <section className="border-y border-line bg-surface px-5 py-18 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto flex max-w-[1480px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><h2 className="section-title">FOLGE DER NACHT</h2><p className="mt-5 text-sm text-muted-foreground">Offizielle Einblicke auf @loftclubthun.</p></div><ClubLink variant="clubOutline" href="https://www.instagram.com/loftclubthun/" target="_blank" rel="noopener noreferrer"><Instagram className="size-4" /> AUF INSTAGRAM <ArrowUpRight className="size-4" /></ClubLink></div></section>

    <section id="info" className="scroll-mt-20 px-5 py-18 sm:px-10 sm:py-28 lg:px-16"><div className="mx-auto max-w-[1480px]"><SectionHeading title="GUT ZU WISSEN" /><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24"><div><h3 className="font-display text-5xl font-bold uppercase sm:text-6xl">LOFT CLUB THUN<span className="text-primary">.</span></h3><address className="mt-7 text-lg leading-relaxed not-italic text-muted-foreground">Obere Hauptgasse 27<br />3600 Thun, Schweiz</address><ClubLink variant="clubOutline" className="mt-8" href="https://www.google.com/maps/dir/?api=1&destination=Obere+Hauptgasse+27%2C+3600+Thun%2C+Switzerland" target="_blank" rel="noopener noreferrer"><MapPin className="size-4" /> ROUTE PLANEN <ArrowUpRight className="size-4" /></ClubLink></div><dl className="divide-y divide-line border-t border-line">{[["EVENTZEITEN", "Je nach Event – Zeiten bei den einzelnen Events."], ["ALTER", "Je nach Event – Altersangabe im Eventdetail prüfen."], ["EINTRITT", "Je nach Event – Preis nur dort, wo bestätigt."], ["ZAHLUNG", "Je nach Event – Hinweise im Eventdetail prüfen."]].map(([label, value]) => <div key={label} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-5 sm:py-6"><dt className="eyebrow text-foreground">{label}</dt><dd className="text-sm leading-relaxed text-muted-foreground">{value}</dd></div>)}</dl></div></div></section>

    <section className="relative overflow-hidden border-t border-line bg-surface px-5 py-20 text-center sm:px-10 sm:py-32"><div className="cta-glow absolute inset-0" /><div className="relative mx-auto max-w-[1200px]"><h2 className="section-title">DEINE NÄCHSTE<br /><span className="text-primary">NACHT.</span></h2><p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">Finde den passenden Abend. Alle Details direkt beim Veranstalter.</p><ClubLink href="#events" className="mt-8">EVENTS ENTDECKEN <ArrowUpRight className="size-4" /></ClubLink></div></section>
    <Footer />
  </main>;
}

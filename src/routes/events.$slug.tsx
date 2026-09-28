import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { ClubLink, Footer, Navigation } from "@/components/club-shell";
import { events, getEvent, venue } from "@/data/events";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Event nicht gefunden | LOFT Designkonzept" }, { name: "robots", content: "noindex" }] };
    const description = `${loaderData.title}: ${loaderData.date}, ${loaderData.time} im LOFT Club Thun. Öffentlich gelistete Eventdetails – unabhängiges Designkonzept.`;
    return { meta: [
      { title: `${loaderData.title} | LOFT Club Thun – Designkonzept` },
      { name: "description", content: description },
      { property: "og:title", content: `${loaderData.title} | LOFT Designkonzept` },
      { property: "og:description", content: description },
      { property: "og:type", content: "event" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: EventPage,
  notFoundComponent: () => <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-5 text-center text-foreground"><h1 className="section-title">EVENT NICHT GEFUNDEN</h1><Link to="/" hash="events" className="text-primary underline">ZURÜCK ZU DEN EVENTS</Link></main>,
});

function EventPage() {
  const event = Route.useLoaderData();
  const details = [
    ["DATUM", event.date],
    ["ZEIT", event.time],
    ["ORT", venue],
    ["ALTER", event.age],
    ...(event.price ? [["REGULÄRES TICKET", event.price]] : []),
    ...(event.collaboration ? [["ZUSAMMEN MIT", event.collaboration]] : []),
    ...(event.lineup ? [["LINE-UP", event.lineup]] : []),
    ...(event.payment ? [["ZAHLUNG", event.payment]] : []),
    ...(event.organiser ? [["VERANSTALTER:IN", event.organiser]] : []),
  ];
  return <main className="overflow-clip bg-background text-foreground">
    <Navigation />
    <section id="start" className="relative flex min-h-[420px] items-end overflow-hidden pt-32 pb-12 sm:min-h-[590px] sm:pb-18">
      <img src={event.image} alt={event.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="hero-vignette absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-16">
        <Link to="/" hash="events" className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase text-foreground/85 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"><ArrowLeft className="size-4" /> ALLE EVENTS</Link>
        <p className="eyebrow mb-5 text-primary">{event.category} / {event.date}</p>
        <h1 className="club-title max-w-[1100px] text-[clamp(4.2rem,11vw,11rem)] break-words">{event.title}</h1>
        <p className="mt-7 text-xs font-semibold text-foreground/80">Visual: Designkonzept · kein offizielles Eventposter</p>
      </div>
    </section>
    <section className="px-5 py-14 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto grid max-w-[1480px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
      <div><p className="eyebrow mb-5 text-primary">AUF EINEN BLICK</p><h2 className="font-display text-5xl leading-[.9] font-bold uppercase sm:text-7xl">{event.day} <span className="text-primary">{event.month}</span><br />2026</h2><p className="mt-8 max-w-md text-base leading-relaxed text-foreground/85">{event.summary}</p><div className="mt-9 flex flex-col items-start gap-4"><ClubLink href={event.externalUrl} target="_blank" rel="noopener noreferrer">{event.externalLabel} <ArrowUpRight className="size-4" /></ClubLink><p className="max-w-sm text-xs leading-relaxed text-muted-foreground">Externe Veranstaltungsseite. Verfügbarkeit und aktuelle Angaben dort prüfen.</p></div></div>
      <div><h2 className="eyebrow border-t border-line py-5 text-primary">EVENTDETAILS</h2><dl className="divide-y divide-line">{details.map(([label, value]) => <div key={label} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6"><dt className="eyebrow text-muted-foreground">{label}</dt><dd className="text-sm font-semibold leading-relaxed">{value}</dd></div>)}</dl><a href="https://www.google.com/maps/dir/?api=1&destination=Obere+Hauptgasse+27%2C+3600+Thun%2C+Switzerland" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-2 text-xs font-bold uppercase hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"><MapPin className="size-4" /> ROUTE PLANEN <ArrowUpRight className="size-4" /></a></div>
    </div></section>
    <section className="border-t border-line bg-surface px-5 py-16 sm:px-10 sm:py-24 lg:px-16"><div className="mx-auto max-w-[1480px]"><div className="flex flex-wrap items-end justify-between gap-5"><h2 className="section-title">MEHR NÄCHTE</h2><Link to="/" hash="events" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary">ALLE EVENTS <ArrowUpRight className="size-4" /></Link></div><div className="mt-10 grid gap-4 sm:grid-cols-2">{events.filter(item => item.slug !== event.slug).map(item => <Link key={item.slug} to="/events/$slug" params={{ slug: item.slug }} className="group flex items-center justify-between gap-4 border-t border-line py-5 focus-visible:outline-2 focus-visible:outline-primary"><div><p className="text-xs font-semibold text-primary">{item.date}</p><h3 className="mt-3 font-display text-3xl font-bold uppercase leading-none transition-colors group-hover:text-primary sm:text-4xl">{item.title}</h3></div><ArrowUpRight className="size-5 shrink-0 text-primary" /></Link>)}</div></div></section>
    <Footer />
  </main>;
}

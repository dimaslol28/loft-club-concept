import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "EVENTS", hash: "events" },
  { label: "CLUB", hash: "club" },
  { label: "GALERIE", hash: "galerie" },
  { label: "INFO", hash: "info" },
  { label: "KONTAKT", hash: "kontakt" },
];

export function ClubLink({ children, className, variant = "club", ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: "club" | "clubOutline" }) {
  return <a className={cn(buttonVariants({ variant, size: "club" }), "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background", className)} {...props}>{children}</a>;
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const prefix = location.pathname === "/" ? "" : "/";

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

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return <>
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", (scrolled || menuOpen) && "nav-scrolled")}>
      <div className="mx-auto flex h-17 max-w-[1600px] items-center justify-between px-5 sm:h-21 sm:px-10 lg:px-16">
        <a href={`${prefix}#start`} aria-label="LOFT – zur Startseite" className="font-display text-[2.5rem] leading-none font-extrabold text-foreground focus-visible:outline-2 focus-visible:outline-primary">LOFT<span className="text-primary">.</span></a>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex xl:gap-11">
          {navigation.map(item => <a key={item.hash} className="text-[11px] font-extrabold tracking-[.14em] text-foreground/80 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary" href={`${prefix}#${item.hash}`}>{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <ClubLink href={`${prefix}#events`} className="hidden lg:inline-flex">EVENTS <ArrowUpRight className="size-4" /></ClubLink>
          <Button variant="clubText" size="icon" className="relative z-50 !size-11 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"} aria-expanded={menuOpen} aria-controls="mobilmenue">
            {menuOpen ? <X className="!size-7" /> : <Menu className="!size-7" />}
          </Button>
        </div>
      </div>
    </header>
    <div id="mobilmenue" className={cn("fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-background px-6 pt-20 pb-8 transition-all duration-300 lg:hidden", menuOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0")} aria-hidden={!menuOpen}>
      <nav aria-label="Mobilnavigation" className="flex flex-col items-start gap-1">
        {navigation.map(item => <a tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} key={item.hash} href={`${prefix}#${item.hash}`} className="flex w-full items-center border-b border-line py-2 font-display text-[clamp(2.9rem,11vw,5rem)] leading-none font-bold uppercase hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{item.label}</a>)}
      </nav>
      <ClubLink href={`${prefix}#events`} className="mt-8 w-fit" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>EVENTS ENTDECKEN <ArrowUpRight className="size-4" /></ClubLink>
    </div>
  </>;
}

export function Footer() {
  const location = useLocation();
  const prefix = location.pathname === "/" ? "" : "/";
  return <footer id="kontakt" className="scroll-mt-20 border-t border-line px-5 pt-16 pb-8 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-[1480px]">
      <div className="grid gap-12 border-b border-line pb-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><a href={`${prefix}#start`} className="font-display text-7xl leading-none font-extrabold focus-visible:outline-2 focus-visible:outline-primary">LOFT<span className="text-primary">.</span></a><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Obere Hauptgasse 27<br />3600 Thun, Schweiz</p></div>
        <div><p className="eyebrow mb-6 text-primary">ENTDECKEN</p><nav aria-label="Footernavigation" className="flex flex-col items-start gap-3">{navigation.map(item => <a key={item.hash} href={`${prefix}#${item.hash}`} className="text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{item.label}</a>)}</nav></div>
        <div><p className="eyebrow mb-6 text-primary">VERBINDEN</p><a className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary" href="https://www.instagram.com/loftclubthun/" target="_blank" rel="noopener noreferrer">OFFIZIELLES INSTAGRAM <ArrowUpRight className="size-4" /></a></div>
      </div>
      <p className="pt-7 text-xs leading-relaxed text-muted-foreground">Unabhängiges Designkonzept – keine offizielle Website des LOFT Club Thun. Bildmotive sind Konzeptvisualisierungen, keine Club- oder Eventfotografien.</p>
    </div>
  </footer>;
}
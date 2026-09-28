import nightImage from "@/assets/gallery-lights.jpg";
import danceImage from "@/assets/gallery-moment.jpg";
import crowdImage from "@/assets/club-crowd.jpg";

export type ClubEvent = {
  slug: string;
  title: string;
  shortTitle: string;
  day: string;
  month: string;
  date: string;
  isoDate: string;
  time: string;
  age: string;
  price?: string;
  collaboration?: string;
  lineup?: string;
  payment?: string;
  organiser?: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  externalUrl: string;
  externalLabel: string;
  linkType: "tickets" | "details";
};

export const venue = "LOFT Club Thun, Obere Hauptgasse 27, 3600 Thun";

// Publicly listed facts; atmospheric images are independent concept visuals, not official event posters.
export const events: ClubEvent[] = [
  {
    slug: "thun-in-love-label-release",
    title: "THUN IN LOVE — LABEL RELEASE",
    shortTitle: "THUN IN LOVE",
    day: "07",
    month: "NOV",
    date: "Samstag, 7. November 2026",
    isoDate: "2026-11-07",
    time: "22:30–03:30 Uhr",
    age: "18+",
    price: "CHF 15 · regulär",
    collaboration: "BAHIA DANCE",
    lineup: "TBA",
    category: "Label Release",
    summary: "Thun in Love feiert seinen Label Release im LOFT Club Thun – gemeinsam mit BAHIA DANCE. Das Line-up wird noch bekannt gegeben.",
    image: nightImage,
    imageAlt: "Abstrakte Lichtstimmung an einem DJ-Pult, Designkonzept",
    externalUrl: "https://eventfrog.ch/de/p/partys/charts-open-format/thun-in-love-7495466434924952096.html",
    externalLabel: "TICKETS BEI EVENTFROG",
    linkType: "tickets",
  },
  {
    slug: "mamagehttanzen-thun",
    title: "MAMAGEHTTANZEN THUN",
    shortTitle: "MAMAGEHTTANZEN",
    day: "13",
    month: "NOV",
    date: "Freitag, 13. November 2026",
    isoDate: "2026-11-13",
    time: "19:30–23:00 Uhr",
    age: "16+",
    payment: "Nur bargeldlos / Karte",
    organiser: "MAMAGEHTTANZEN_Bern",
    category: "Tanzabend",
    summary: "Ein Tanzabend von MAMAGEHTTANZEN_Bern in Thun. Der öffentliche Eintrag nennt 19:30 Uhr als Beginn; die Tanzzeit ist mit 20:00 bis 23:00 Uhr beschrieben.",
    image: danceImage,
    imageAlt: "Tanzende Personen in warmem Clublicht, Designkonzept",
    externalUrl: "https://eventfrog.ch/de/p/partys/disco/mamagehttanzen-thun-7457010610800193238.html",
    externalLabel: "DETAILS BEI EVENTFROG",
    linkType: "details",
  },
  {
    slug: "selve-remember-trance-classics",
    title: "SELVE REMEMBER · TRANCE CLASSICS",
    shortTitle: "SELVE REMEMBER",
    day: "05",
    month: "DEZ",
    date: "Samstag, 5. Dezember 2026",
    isoDate: "2026-12-05",
    time: "22:00–04:00 Uhr",
    age: "16+",
    payment: "Nur bargeldlos / Karte",
    organiser: "Loft Club Bern",
    category: "Trance Classics",
    summary: "Eine Nacht für Trance Classics im LOFT Club Thun. Der öffentliche Eintrag nennt Loft Club Bern als Veranstalter.",
    image: crowdImage,
    imageAlt: "Menschen auf einer Tanzfläche, atmosphärisches Designkonzept",
    externalUrl: "https://eventfrog.ch/de/p/partys/trance-ambient/selve-remember-trance-classics-7505343950011537223.html",
    externalLabel: "DETAILS BEI EVENTFROG",
    linkType: "details",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
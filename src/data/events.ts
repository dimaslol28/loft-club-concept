import afterhours from "@/assets/event-afterhours.jpg";
import frequency from "@/assets/event-frequency.jpg";
import noir from "@/assets/event-noir.jpg";

export type ClubEvent = {
  id: string;
  title: string;
  day: string;
  month: string;
  date: string;
  time: string;
  genre: string;
  age: string;
  price: string;
  image: string;
  ticketUrl?: string;
};

// Demo-only event entries. Replace with confirmed event details and ticket URLs before launch.
export const events: ClubEvent[] = [
  {
    id: "afterhours",
    title: "AFTERHOURS",
    day: "17",
    month: "OKT",
    date: "Samstag, 17. Oktober 2026",
    time: "Ab 22:00 Uhr",
    genre: "House · Electronic",
    age: "Ab 18 Jahren",
    price: "Ab CHF 20.–",
    image: afterhours,
  },
  {
    id: "frequency",
    title: "FREQUENCY",
    day: "24",
    month: "OKT",
    date: "Samstag, 24. Oktober 2026",
    time: "Ab 22:00 Uhr",
    genre: "Tech House · Dance",
    age: "Ab 18 Jahren",
    price: "Ab CHF 20.–",
    image: frequency,
  },
  {
    id: "noir",
    title: "NOIR NIGHTS",
    day: "31",
    month: "OKT",
    date: "Samstag, 31. Oktober 2026",
    time: "Ab 22:00 Uhr",
    genre: "Afro House · R&B",
    age: "Ab 18 Jahren",
    price: "Ab CHF 20.–",
    image: noir,
  },
  {
    id: "late-session",
    title: "LATE SESSION",
    day: "07",
    month: "NOV",
    date: "Samstag, 7. November 2026",
    time: "Ab 22:00 Uhr",
    genre: "House · Disco",
    age: "Ab 18 Jahren",
    price: "Ab CHF 20.–",
    image: afterhours,
  },
];
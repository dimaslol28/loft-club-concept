# Loft Club Concept

Create a premium, modern website concept for a real Swiss nightclub called **LOFT Club Thun**, located at Obere Hauptgasse 27, 3600 Thun, Switzerland.

IMPORTANT:
This is currently a portfolio/demo redesign concept. Do not claim that this is the official website or that I represent LOFT Club.

## Goal

The website should feel like a real high-end nightlife website, not a generic AI-generated business template.

The main goals are:
- showcase upcoming events
- make visitors want to attend
- make buying tickets extremely easy
- showcase the club atmosphere
- connect visitors with Instagram
- provide essential club information

The primary audience is young adults in Thun, Bern and the surrounding region.

## Language

All visible website content must be in **German**.

Use short, energetic nightlife-oriented copy instead of long paragraphs.

## Visual direction

Create a dark, premium nightclub aesthetic.

Use:
- nearly black backgrounds
- large bold typography
- subtle gradients
- atmospheric glow effects
- elegant animations
- large event imagery
- modern cards
- lots of visual contrast
- subtle glassmorphism where appropriate

The design should feel energetic and exclusive, but still clean and professional.

Avoid making everything look neon.

The visual inspiration should come from premium European nightclub and electronic music festival websites.

Do NOT copy another website.

## Homepage structure

### 1. Navigation

Create a transparent navigation bar that becomes solid/dark when scrolling.

Logo/text:
LOFT

Navigation:
EVENTS
CLUB
GALLERY
INFO
CONTACT

Add a prominent button:
TICKETS

On mobile use a modern fullscreen menu.

### 2. Hero section

Create a full-screen cinematic hero.

Large headline:

LOFT
THUN

Supporting text:

MUSIC.
NIGHTS.
MEMORIES.

Add two buttons:

NÄCHSTE EVENTS
TICKETS

Use a dark nightclub placeholder background image/video with an overlay.

Add subtle movement or parallax effects.

### 3. Next Event

Create a visually dominant section called:

NEXT EVENT

The event card should contain:
- event poster
- event name
- date
- opening time
- music genre
- age requirement
- ticket price
- ticket button

Use placeholder event information for now.

Make the event card feel like a real nightlife poster rather than a standard SaaS card.

### 4. Upcoming Events

Heading:

UPCOMING EVENTS

Create 3–4 event cards.

Each card should show:
- poster
- date
- event title
- music style
- minimum age
- ticket button

Add strong hover animations.

### 5. Club Experience

Create an atmospheric section introducing LOFT Club.

Headline:

THIS IS LOFT.

German supporting copy:

Mitten in Thun.
Musik, Energie und Nächte, die bleiben.

Use a large nightlife image and oversized typography.

### 6. Gallery

Create an immersive photo gallery.

Use a modern asymmetric grid with nightlife placeholder images.

Heading:

NIGHTS AT LOFT

Add subtle hover effects.

### 7. Instagram

Create a section:

FOLLOW THE NIGHT

Include:
@loftclubthun

Create an Instagram-style photo grid and a button:

AUF INSTAGRAM FOLGEN

Do not implement an Instagram API yet.

### 8. Club Info

Display:

LOFT Club Thun
Obere Hauptgasse 27
3600 Thun
Switzerland

Create placeholders for:
- Öffnungszeiten
- Eintritt
- Mindestalter
- Anreise
- Garderobe

Do not invent factual information that has not been provided.

### 9. CTA

Large section:

READY FOR TONIGHT?

Button:

EVENTS ENTDECKEN

### 10. Footer

Include:
LOFT Club Thun

Navigation:
Events
Club
Gallery
Info
Kontakt

Social:
Instagram

Also include placeholders for:
Impressum
Datenschutz

## UX requirements

The website must be:
- fully responsive
- designed mobile-first
- fast
- easy to navigate
- visually impressive on iPhone
- accessible
- SEO-friendly

Buttons should have clear hover and tap states.

Use smooth scrolling and tasteful animations.

Animations must not make the website slow or annoying.

## Technical requirements

Use React and Tailwind CSS.

Build the website using reusable components.

Keep event data separate from UI components so events can later be easily updated.

Prepare the architecture so that we can later add:
- real Eventfrog/Ticketcorner ticket links
- CMS/event management
- Instagram integration
- gallery management
- Google Maps
- contact form

For now, build ONLY the homepage and the basic navigation.

Do not build a backend yet.

Do not overcomplicate the project.

First create a polished visual homepage that we can iterate on.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c131978-c20d-52d3-9693-f78904de6f74).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

# WEBTECH Universitetet

Projektuppgift i kursen Programmering i Typescript vid Mittuniversitetet.

En Angular-applikation som låter studenter söka bland kurser och 
skapa ett eget ramschema. En webbplats för ett fiktivt lärosäte

## Publicering av webbplats
https://webtech-uni.netlify.app/home

## Betygsnivå
Sikte på godkänt – grundkraven enligt uppgiftsbeskrivningen.

## Funktionalitet

### Kurslistning
  - Visa alla kurser från MIUNs kurskatalog
  - filtrera kurser på kurskod och kursnamn
  - filtrera kurser per ämne
  - sorterar kurser på kurskod, kursnamn, poäng och ämne. Genom att klicka på kolumner
  - Räknare som visar antal kurser i aktuellt urval
  - Lägga till kurser i ramschema, validering för dubbletter
  - Direktlänk till kursplan.

### Ramschema
  - Visa valda kurser
  - Visa summa i hp för de valda kurserna
  - Ta bort kurser från ramschemat
  - Lagras i localstorage, kurser sparas mellan sessioner

### Övrigt
  - Responsiv design för mobila enheter och desktop
  - Reaktiv UI, inga sidladdning krävs
  - 404 sida för okänd URL

## Teknikstack
- Angular 18+ med standalone-komponenter
- TypeScript
- SCSS
- localStorage för persistens av ramschema

## Arkitektur
Applikationen är uppdelad i två tydliga kategorier av komponenter:

- **pages/** – route-komponenter (navigerbara vyer)
- **partials/** – återanvändbara delkomponenter

Smart/dumb component-mönster används: sid-komponenter hanterar logik och datatillstånd, medan partials fokuserar på presentation och kommunikation via `@Input`/`@Output`.

### Services

- CourseService – hanterar kursdata, hämtar JSON-fil via httpclient
- Schedule – hanterar ramschemat med signal-baserad state och localStorage

## Datakälla
Kursdata kommer från MIUN kurskatalog 2023, via JSON fil som finns i /public/miun_courses.json

## Kör lokalt
Klona repot
```
git clone https://github.com/Punttt/projekt-ramsschema.git
cd reponamn
```

```bash
npm install
ng serve
```
Öppna http://localhost:4200 i webbläsaren.

## Projektstruktur
src/app/ </br>
├── pages/              # Route-komponenter </br>
│   ├── courses/        # Kurslistning </br>
│   ├── schedule/       # Ramschema </br>
│   ├── home/           # Startsida </br>
│   └── not-found/      # 404 </br>
├── partials/           # Återanvändbara komponenter </br>
│   ├── header/ </br>
│   ├── footer/ </br>
│   ├── course-filter/ </br>
│   ├── course-table/ </br>
│   └── personal-course-table/ </br>
├── services/           # Tjänster </br>
│   ├── course.ts       # CourseService </br>
│   └── schedule.ts     # Schedule (ramschemat) </br>
└── models/             # TypeScript-interfaces </br>
└── course.ts       # Course-interface </br>

## Skapad av
Pontus Johansson

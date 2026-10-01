# 🗺️ La Grande Guerra — Mappa Interattiva

Una mappa interattiva didattica della Prima Guerra Mondiale (1914–1918), pensata per studenti e chiunque voglia farsi un'idea chiara del conflitto.

## Esplora la mappa

👉 **[vfbrugnola.github.io/la-grande-guerra](https://vfbrugnola.github.io/la-grande-guerra/)**

## Funzionalità

- **Mappa geopolitica** — confini storici del 1914 colorati per schieramento (Intesa, Imperi Centrali, Neutrali), aggiornati anno per anno con lo slider
- **Slider mensile** — luglio 1914 → novembre 1918; mostra l'evoluzione dei fronti e degli eventi mese per mese
- **Linee dei fronti** — cambiano con lo slider per ogni fase della guerra (guerra di movimento, trincea, offensiva di primavera...)
- **Frecce dei movimenti** — le principali operazioni militari (Piano Schlieffen, Kaiserschlacht, Offensiva dei 100 giorni...)
- **32 eventi** — battaglie, eventi diplomatici, guerra navale, atrocità; ogni evento con morti per parte visualizzati con barre comparative
- **Click su uno stato** — scheda con descrizione della situazione politico-militare per ogni anno e perdite cumulative
- **Filtri** per fronte (occidentale, orientale, italiano, balcanico, Medio Oriente, mare) e per tipo di evento
- **Sezione Armamenti** — 12 schede sulle innovazioni belliche: gas, carro armato, U-Boot, mitragliatrice, aereo... con immagini e analisi dell'impatto storico
- **Sezione Perdite** — grafico a barre interattivo con le perdite per nazione, selezionabile per anno

## Struttura file

la-grande-guerra/
├── index.html
└── data/
├── borders_1914.js ← confini storici Europa 1914 (GeoJSON)
├── nations.js ← 15 nazioni con descrizioni per anno
├── events.js ← 32 eventi (battaglie, diplomatici, navali, atrocità)
├── fronts.js ← linee dei fronti per fase
├── movements.js ← frecce operazioni militari
├── weapons.js ← 12 armamenti con schede
└── periods.js ← 6 fasi della guerra


## Come aggiornare i dati

Tutti i dati sono nei file `data/`. Modificabili direttamente da GitHub nel browser — nessun strumento necessario.

- **Aggiungere un evento** → `data/events.js`
- **Aggiungere un armamento** → `data/weapons.js`
- **Modificare una descrizione** → `data/nations.js`

## Licenza

© 2025 Fabrizio Brugnola — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)  
Libero utilizzo con citazione dell'autore.

import { DayData } from './types';

export const itineraryData: DayData[] = [
  {
    id: 0,
    date: "12 Agosto",
    weekday: "Mercoledì · Giorno 1",
    theme: { icon: "🌉", text: "Arrivo · San Francisco" },
    chipLabel: "Mer",
    chipNum: "12",
    events: [
      {
        time: "19:45",
        type: "flight",
        name: "Atterraggio SFO",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Arrivo all'aeroporto internazionale di San Francisco"
      },
      {
        time: "20:30",
        type: "default",
        name: "Transfer & check-in hotel",
        desc: "Raggiungere l'hotel, lasciare i bagagli"
      },
      {
        time: "21:30",
        type: "meal",
        name: "In-N-Out Burger",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Classico benvenuto californiano. Double-Double, obbligatorio."
      }
    ]
  },
  {
    id: 1,
    date: "13 Agosto",
    weekday: "Giovedì · Giorno 2",
    theme: { icon: "🌲", text: "Oakland · Natura & Waterfront" },
    chipLabel: "Gio",
    chipNum: "13",
    events: [
      {
        time: "8:30",
        type: "default",
        name: "Colazione & partenza per Oakland",
        desc: "Colazione veloce prima di attraversare la Bay"
      },
      {
        time: "9:30",
        type: "highlight",
        name: "Redwood Regional Park",
        desc: "Trekking leggero tra le sequoie. Sentiero Stream Trail ~5 km, aria fresca, silenzio."
      },
      {
        time: "12:30",
        type: "meal",
        name: "Pranzo al sacco nel parco",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Sandwich e frutta preparati in anticipo, tavoli picnic nel parco"
      },
      {
        time: "14:30",
        type: "default",
        name: "Jack London Square",
        desc: "Passeggiata nel quartiere storico sul waterfront, mercatino e atmosfera portuale"
      },
      {
        time: "18:00",
        type: "highlight",
        name: "Lake Merritt",
        desc: "Passeggiata intorno al lago al tramonto, luci sul centro di Oakland"
      },
      {
        time: "19:30",
        type: "default",
        name: "Tramonto Embarcadero East Bay",
        desc: "Vista su SF skyline dall'altra sponda della baia"
      },
      {
        time: "21:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: ""
      }
    ]
  },
  {
    id: 2,
    date: "14 Agosto",
    weekday: "Venerdì · Giorno 3",
    theme: { icon: "⚾", text: "Full SF · Alcatraz · Giants" },
    chipLabel: "Ven",
    chipNum: "14",
    events: [
      {
        time: "8:00",
        type: "default",
        name: "Colazione e preparazione",
        desc: "Prima di un'intensa giornata san franciscana"
      },
      {
        time: "8:40",
        type: "highlight",
        name: "SF Guided Tour",
        desc: "Tour guidato della città: Golden Gate, Painted Ladies, panorami principali"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Dungeness Crab · Fisherman's Wharf",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Granchi freschi ai chioschi del Wharf. Consigliato: Alioto's o i banchi all'aperto"
      },
      {
        time: "15:50",
        type: "highlight",
        name: "Alcatraz",
        desc: "Ferry + audio tour dell'isola penitenziaria. ~2.5 ore totali incluso tragitto"
      },
      {
        time: "18:30",
        type: "default",
        name: "Pier 39",
        desc: "Leoni marini, vista sulla baia, passeggiata prima della partita"
      },
      {
        time: "19:15",
        type: "event",
        name: "Giants vs Rockies · Oracle Park",
        badge: { label: "★ EVENTO", variant: "event" },
        desc: "Hotdog + birra allo stadio. Vista sul McCovey Cove e Bay Bridge."
      },
      {
        time: "22:30",
        type: "meal",
        name: "Cena allo stadio o spuntino a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Giornata intensa — hotdog allo stadio copre bene"
      }
    ]
  },
  {
    id: 3,
    date: "15 Agosto",
    weekday: "Sabato · Giorno 4",
    theme: { icon: "🚃", text: "Chinatown · North Beach · Cable Car" },
    chipLabel: "Sab",
    chipNum: "15",
    events: [
      {
        time: "9:00",
        type: "default",
        name: "Colazione a North Beach",
        desc: "Caffè e cornetto da Caffe Trieste o Vesuvio, icone del quartiere Beat"
      },
      {
        time: "10:00",
        type: "highlight",
        name: "Chinatown San Francisco",
        desc: "Grant Avenue, Dragon Gate, mercati di spezie ed erbe, bakery cinesi"
      },
      {
        time: "11:30",
        type: "default",
        name: "North Beach & Coit Tower",
        desc: "Salire alla torre per la vista panoramica su SF e la baia"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Street Food Cinese · Chinatown",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Bao, dim sum o noodles dai banchi di Grant Ave o Waverly Place"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Cable Car Ride",
        desc: "Linea Powell-Hyde: da Market St fino a Fisherman's Wharf. Vista su Alcatraz e Golden Gate"
      },
      {
        time: "15:30",
        type: "default",
        name: "Lombard Street",
        desc: "La strada più tortuosa del mondo, discesa a piedi tra i fiori"
      },
      {
        time: "20:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: ""
      }
    ]
  },
  {
    id: 4,
    date: "16 Agosto",
    weekday: "Domenica · Giorno 5",
    theme: { icon: "🍷", text: "Napa Valley · Wine Country" },
    chipLabel: "Dom",
    chipNum: "16",
    events: [
      {
        time: "7:30",
        type: "default",
        name: "Partenza per Napa",
        desc: "~1h15 di guida, traffico leggero la domenica mattina"
      },
      {
        time: "9:00",
        type: "highlight",
        name: "Napa Downtown",
        desc: "Passeggiata sul waterfront del Napa River, mercato contadino la domenica mattina"
      },
      {
        time: "10:30",
        type: "highlight",
        name: "Winery · Napa o Yountville",
        desc: "Wine tasting tra i filari. Da prenotare: Domaine Carneros (vista) o Robert Mondavi"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Yountville · Bistro Jeanty",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Cucina francese rustica nel cuore di Yountville, la \"food capital\" di Napa"
      },
      {
        time: "15:00",
        type: "default",
        name: "Seconda winery o passeggiata tra i vigneti",
        desc: "Oxbow Public Market a Napa per acquisti e assaggi locali"
      },
      {
        time: "17:00",
        type: "default",
        name: "Rientro a SF",
        desc: ""
      },
      {
        time: "20:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Con vino acquistato in Napa"
      }
    ]
  },
  {
    id: 5,
    date: "17 Agosto",
    weekday: "Lunedì · Giorno 6",
    theme: { icon: "💻", text: "Silicon Valley · Tech Tour" },
    chipLabel: "Lun",
    chipNum: "17",
    events: [
      {
        time: "8:30",
        type: "default",
        name: "Partenza per South Bay",
        desc: "~45 min da SF verso Palo Alto / Cupertino"
      },
      {
        time: "9:30",
        type: "highlight",
        name: "Stanford University",
        desc: "Campus tour a piedi: Main Quad, Hoover Tower, Memorial Church. ~1.5h"
      },
      {
        time: "11:30",
        type: "highlight",
        name: "Apple Park Visitor Center",
        desc: "Modello in AR dell'Apple Park, store esclusivo, terrazza con vista sul campus"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Meta Caffè (MPK campus)",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Se si riesce ad accedere come ospiti, oppure Philz Coffee a Menlo Park"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Meta HQ Visit",
        desc: "Tour quartiere operativo Meta"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Google Visitor Center · Googleplex",
        desc: "Android statues, bici colorate, campus tour esterno"
      },
      {
        time: "18:00",
        type: "default",
        name: "Rientro a SF",
        desc: ""
      },
      {
        time: "20:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: ""
      }
    ]
  },
  {
    id: 6,
    date: "18 Agosto",
    weekday: "Martedì · Giorno 7",
    theme: { icon: "🎬", text: "Los Angeles · Universal Studios" },
    chipLabel: "Mar",
    chipNum: "18",
    events: [
      {
        time: "7:30",
        type: "default",
        name: "Partenza per SFO",
        desc: ""
      },
      {
        time: "10:15",
        type: "flight",
        name: "SFO → LAX",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "~1h15 di volo"
      },
      {
        time: "12:00",
        type: "default",
        name: "Arrivo LAX + transfer",
        desc: ""
      },
      {
        time: "13:00",
        type: "highlight",
        name: "Universal Studios Hollywood",
        desc: "Wizarding World of Harry Potter, Studio Tour, Jurassic World ride. Pomeriggio completo."
      },
      {
        time: "13:30",
        type: "meal",
        name: "Universal CityWalk",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Mangiare all'ingresso o dentro il parco"
      },
      {
        time: "20:00",
        type: "default",
        name: "Check-in hotel LA",
        desc: ""
      },
      {
        time: "21:00",
        type: "meal",
        name: "In-N-Out Burger · Sunset Strip",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Il classico californiano anche a LA, o delivery in hotel"
      }
    ]
  },
  {
    id: 7,
    date: "19 Agosto",
    weekday: "Mercoledì · Giorno 8",
    theme: { icon: "🌴", text: "Universal + Santa Monica + Ritorno SF" },
    chipLabel: "Mer",
    chipNum: "19",
    events: [
      {
        time: "9:00",
        type: "highlight",
        name: "Universal Studios · mattina",
        desc: "Ultime attrazioni, giro finale nel parco"
      },
      {
        time: "11:30",
        type: "default",
        name: "Partenza per Santa Monica",
        desc: "~40 min in macchina"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Santa Monica Pier · Boardwalk",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Fish tacos o burger sul lungomare. Atmosfera estiva LA"
      },
      {
        time: "14:00",
        type: "highlight",
        name: "Giro di LA",
        desc: "Rodeo Drive, Hollywood Walk of Fame, Griffith Observatory (vista panoramica)"
      },
      {
        time: "17:30",
        type: "default",
        name: "Transfer LAX",
        desc: ""
      },
      {
        time: "19:00",
        type: "flight",
        name: "LAX → SFO",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Rientro a San Francisco"
      },
      {
        time: "21:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Rientro dall'escapade a LA"
      }
    ]
  },
  {
    id: 8,
    date: "20 Agosto",
    weekday: "Giovedì · Giorno 9",
    theme: { icon: "🎨", text: "Mission District · Relax" },
    chipLabel: "Gio",
    chipNum: "20",
    events: [
      {
        time: "9:30",
        type: "default",
        name: "Colazione lenta",
        desc: "Giornata di ritmo tranquillo dopo i giorni intensi"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Pranzo a casa",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: ""
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Clarion Alley Murales",
        desc: "Street art storica del Mission, cambia continuamente. ~30 min."
      },
      {
        time: "15:30",
        type: "highlight",
        name: "The Castro",
        desc: "Quartiere iconico, Rainbow Honor Walk, architecture vittoriana"
      },
      {
        time: "16:00",
        type: "meal",
        name: "Saigon Sandwich · Banh Mi",
        badge: { label: "☀ SPUNTINO", variant: "lunch" },
        desc: "560 Larkin St. Il banh mi più economico e buono della città. ~$5."
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Dolores Park",
        desc: "Relax sull'erba con vista sul downtown. Punto di ritrovo della SF contemporanea."
      },
      {
        time: "17:00",
        type: "default",
        name: "Passeggiata libera nel Mission",
        desc: "Valencia Street per coffee shop e librerie indipendenti"
      },
      {
        time: "19:00",
        type: "meal",
        name: "Mission Burrito · La Taqueria",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Obbligatorio. Il burrito più famoso di SF, carne asada o carnitas. Cash preferred."
      }
    ]
  },
  {
    id: 9,
    date: "21 Agosto",
    weekday: "Venerdì · Giorno 10",
    theme: { icon: "🌊", text: "Golden Gate Park · Lands End · Oceano" },
    chipLabel: "Ven",
    chipNum: "21",
    events: [
      {
        time: "9:00",
        type: "highlight",
        name: "Golden Gate Park · Japanese Tea Garden",
        desc: "Apertura alle 9. Pausa tè verde e wagashi nel giardino giapponese più antico degli USA."
      },
      {
        time: "10:30",
        type: "highlight",
        name: "California Academy of Sciences",
        desc: "Planetario, foresta pluviale, acquario tropicale e tetto vivente"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Outerlands · Inner Sunset",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Locale rustico e artigianale vicino all'oceano. Ottimi sandwich e zuppa. Molto amato dai locals."
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Ocean Beach & Lands End Trail",
        desc: "Sentiero panoramico sul Pacifico, rovine del Sutro Baths, vista sul Golden Gate"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Sutro Baths & Marshall's Beach",
        desc: "Rovine dell'antico stabilimento balneare + la spiaggia nascosta sotto il Golden Gate"
      },
      {
        time: "18:30",
        type: "default",
        name: "Tramonto dal Lands End Lookout",
        desc: "Una delle migliori viste sul Golden Gate al tramonto"
      },
      {
        time: "20:30",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: ""
      }
    ]
  },
  {
    id: 10,
    date: "22 Agosto",
    weekday: "Sabato · Giorno 11",
    theme: { icon: "🌉", text: "Muir Woods · Sausalito · Golden Gate" },
    chipLabel: "Sab",
    chipNum: "22",
    events: [
      {
        time: "8:00",
        type: "default",
        name: "Partenza per Muir Woods",
        desc: "~40 min da SF. Prenotazione parcheggio obbligatoria."
      },
      {
        time: "9:00",
        type: "highlight",
        name: "Muir Woods National Monument",
        desc: "Foresta di sequoie costiere millenarie. Main Trail + Bohemian Loop (~2h). Silenzio assoluto."
      },
      {
        time: "11:30",
        type: "default",
        name: "Marin Headlands · Vista panoramica",
        desc: "Il punto con la vista più iconica su SF e Golden Gate. Tappa obbligatoria per foto."
      },
      {
        time: "13:00",
        type: "meal",
        name: "Sausalito · Bar Bocce",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Sul waterfront con vista sulla baia. Ottima pizza e pesce. Atmosfera da borgo marinaro italiano."
      },
      {
        time: "15:00",
        type: "default",
        name: "Passeggiata a Sausalito",
        desc: "Gallerie d'arte, case galleggianti, gelato sul molo"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Rientro con vista Golden Gate",
        desc: "Attraversare il Golden Gate Bridge in macchina con sosta al vista point"
      },
      {
        time: "18:00",
        type: "default",
        name: "Aperitivo e ultima passeggiata a SF",
        desc: "Ultimo giro in città prima della partenza"
      },
      {
        time: "20:30",
        type: "meal",
        name: "Cena a casa · Ultima notte a SF",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Cena con tutto quello che è rimasto, brindisi alla California"
      }
    ]
  },
  {
    id: 11,
    date: "23 Agosto",
    weekday: "Domenica · Giorno 12",
    theme: { icon: "✈", text: "Partenza · SFO" },
    chipLabel: "Dom",
    chipNum: "23",
    note: { icon: "🗺", text: "12 giorni · San Francisco, Oakland, Napa, Silicon Valley, Los Angeles, Muir Woods, Sausalito. Un viaggio completo tra natura, città, tech e cultura californiana." },
    events: [
      {
        time: "8:00",
        type: "default",
        name: "Ultimi bagagli & colazione",
        desc: "Colazione tranquilla nell'ultima mattina californiana"
      },
      {
        time: "11:30",
        type: "default",
        name: "Partenza per SFO",
        desc: "~30 min di transfer"
      },
      {
        time: "14:00",
        type: "flight",
        name: "SFO — Partenza",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Arrivederci, California."
      }
    ]
  }
];

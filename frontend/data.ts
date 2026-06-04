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
        desc: "Arrivo all'aeroporto internazionale di San Francisco",
        location: "SFO International Airport, San Francisco, CA"
      },
      {
        time: "20:30",
        type: "default",
        name: "Transfer & check-in hotel",
        desc: "Raggiungere l'hotel, lasciare i bagagli",
        location: "San Francisco, CA"
      },
      {
        time: "21:30",
        type: "meal",
        name: "In-N-Out Burger",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Classico benvenuto californiano. Double-Double, obbligatorio.",
        location: "In-N-Out Burger, Fisherman's Wharf, San Francisco, CA"
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
        desc: "Colazione veloce prima di attraversare la Bay",
        location: "Oakland, CA"
      },
      {
        time: "9:30",
        type: "highlight",
        name: "Redwood Regional Park",
        desc: "Trekking leggero tra le sequoie. Sentiero Stream Trail ~5 km, aria fresca, silenzio.",
        location: "Redwood Regional Park, Oakland, CA"
      },
      {
        time: "12:30",
        type: "meal",
        name: "Pranzo al sacco nel parco",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Sandwich e frutta preparati in anticipo, tavoli picnic nel parco",
        location: "Redwood Regional Park, Oakland, CA"
      },
      {
        time: "14:30",
        type: "default",
        name: "Jack London Square",
        desc: "Passeggiata nel quartiere storico sul waterfront, mercatino e atmosfera portuale",
        location: "Jack London Square, Oakland, CA"
      },
      {
        time: "18:00",
        type: "highlight",
        name: "Lake Merritt",
        desc: "Passeggiata intorno al lago al tramonto, luci sul centro di Oakland",
        location: "Lake Merritt, Oakland, CA"
      },
      {
        time: "19:30",
        type: "default",
        name: "Tramonto Embarcadero East Bay",
        desc: "Vista su SF skyline dall'altra sponda della baia",
        location: "Embarcadero, Oakland, CA"
      },
      {
        time: "21:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "",
        location: "Oakland, CA"
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
        desc: "Prima di un'intensa giornata san franciscana",
        location: "San Francisco, CA"
      },
      {
        time: "8:40",
        type: "highlight",
        name: "SF Guided Tour",
        desc: "Tour guidato della città: Golden Gate, Painted Ladies, panorami principali",
        location: "Painted Ladies, San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Dungeness Crab · Fisherman's Wharf",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Granchi freschi ai chioschi del Wharf. Consigliato: Alioto's o i banchi all'aperto",
        location: "Fisherman's Wharf, San Francisco, CA"
      },
      {
        time: "15:50",
        type: "highlight",
        name: "Alcatraz",
        desc: "Ferry + audio tour dell'isola penitenziaria. ~2.5 ore totali incluso tragitto",
        location: "Alcatraz Island, San Francisco, CA"
      },
      {
        time: "18:30",
        type: "default",
        name: "Pier 39",
        desc: "Leoni marini, vista sulla baia, passeggiata prima della partita",
        location: "Pier 39, San Francisco, CA"
      },
      {
        time: "19:15",
        type: "event",
        name: "Giants vs Rockies · Oracle Park",
        badge: { label: "★ EVENTO", variant: "event" },
        desc: "Hotdog + birra allo stadio. Vista sul McCovey Cove e Bay Bridge.",
        location: "Oracle Park, San Francisco, CA"
      },
      {
        time: "22:30",
        type: "meal",
        name: "Cena allo stadio o spuntino a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Giornata intensa — hotdog allo stadio copre bene",
        location: "Oracle Park, San Francisco, CA"
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
        desc: "Caffè e cornetto da Caffe Trieste o Vesuvio, icone del quartiere Beat",
        location: "Caffe Trieste, North Beach, San Francisco, CA"
      },
      {
        time: "10:00",
        type: "highlight",
        name: "Chinatown San Francisco",
        desc: "Grant Avenue, Dragon Gate, mercati di spezie ed erbe, bakery cinesi",
        location: "Dragon's Gate, Chinatown, San Francisco, CA"
      },
      {
        time: "11:30",
        type: "default",
        name: "North Beach & Coit Tower",
        desc: "Salire alla torre per la vista panoramica su SF e la baia",
        location: "Coit Tower, San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Street Food Cinese · Chinatown",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Bao, dim sum o noodles dai banchi di Grant Ave o Waverly Place",
        location: "Grant Ave, Chinatown, San Francisco, CA"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Cable Car Ride",
        desc: "Linea Powell-Hyde: da Market St fino a Fisherman's Wharf. Vista su Alcatraz e Golden Gate",
        location: "Powell-Hyde Cable Car, San Francisco, CA"
      },
      {
        time: "15:30",
        type: "default",
        name: "Lombard Street",
        desc: "La strada più tortuosa del mondo, discesa a piedi tra i fiori",
        location: "Lombard Street, San Francisco, CA"
      },
      {
        time: "20:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "",
        location: "San Francisco, CA"
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
        desc: "~1h15 di guida, traffico leggero la domenica mattina",
        location: "Napa Valley, CA"
      },
      {
        time: "9:00",
        type: "highlight",
        name: "Napa Downtown",
        desc: "Passeggiata sul waterfront del Napa River, mercato contadino la domenica mattina",
        location: "Downtown Napa, CA"
      },
      {
        time: "10:30",
        type: "highlight",
        name: "Winery · Napa o Yountville",
        desc: "Wine tasting tra i filari. Da prenotare: Domaine Carneros (vista) o Robert Mondavi",
        location: "Domaine Carneros, Napa, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Yountville · Bistro Jeanty",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Cucina francese rustica nel cuore di Yountville, la \"food capital\" di Napa",
        location: "Bistro Jeanty, Yountville, CA"
      },
      {
        time: "15:00",
        type: "default",
        name: "Seconda winery o passeggiata tra i vigneti",
        desc: "Oxbow Public Market a Napa per acquisti e assaggi locali",
        location: "Oxbow Public Market, Napa, CA"
      },
      {
        time: "17:00",
        type: "default",
        name: "Rientro a SF",
        desc: "",
        location: "San Francisco, CA"
      },
      {
        time: "20:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Con vino acquistato in Napa",
        location: "San Francisco, CA"
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
        desc: "~45 min da SF verso Palo Alto / Cupertino",
        location: "Palo Alto, CA"
      },
      {
        time: "9:30",
        type: "highlight",
        name: "Stanford University",
        desc: "Campus tour a piedi: Main Quad, Hoover Tower, Memorial Church. ~1.5h",
        location: "Stanford University, Stanford, CA"
      },
      {
        time: "11:30",
        type: "highlight",
        name: "Apple Park Visitor Center",
        desc: "Modello in AR dell'Apple Park, store esclusivo, terrazza con vista sul campus",
        location: "Apple Park Visitor Center, Cupertino, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Meta Caffè (MPK campus)",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Se si riesce ad accedere come ospiti, oppure Philz Coffee a Menlo Park",
        location: "Meta Headquarters, Menlo Park, CA"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Meta HQ Visit",
        desc: "Tour quartiere operativo Meta",
        location: "Meta Headquarters, Menlo Park, CA"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Google Visitor Center · Googleplex",
        desc: "Android statues, bici colorate, campus tour esterno",
        location: "Googleplex, Mountain View, CA"
      },
      {
        time: "18:00",
        type: "default",
        name: "Rientro a SF",
        desc: "",
        location: "San Francisco, CA"
      },
      {
        time: "20:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "",
        location: "San Francisco, CA"
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
        desc: "",
        location: "SFO International Airport, San Francisco, CA"
      },
      {
        time: "10:15",
        type: "flight",
        name: "SFO → LAX",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "~1h15 di volo",
        location: "LAX Airport, Los Angeles, CA"
      },
      {
        time: "12:00",
        type: "default",
        name: "Arrivo LAX + transfer",
        desc: "",
        location: "LAX Airport, Los Angeles, CA"
      },
      {
        time: "13:00",
        type: "highlight",
        name: "Universal Studios Hollywood",
        desc: "Wizarding World of Harry Potter, Studio Tour, Jurassic World ride. Pomeriggio completo.",
        location: "Universal Studios Hollywood, Los Angeles, CA"
      },
      {
        time: "13:30",
        type: "meal",
        name: "Universal CityWalk",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Mangiare all'ingresso o dentro il parco",
        location: "Universal CityWalk Hollywood, Los Angeles, CA"
      },
      {
        time: "20:00",
        type: "default",
        name: "Check-in hotel LA",
        desc: "",
        location: "Los Angeles, CA"
      },
      {
        time: "21:00",
        type: "meal",
        name: "In-N-Out Burger · Sunset Strip",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Il classico californiano anche a LA, o delivery in hotel",
        location: "In-N-Out Burger, Sunset Blvd, Los Angeles, CA"
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
        desc: "Ultime attrazioni, giro finale nel parco",
        location: "Universal Studios Hollywood, Los Angeles, CA"
      },
      {
        time: "11:30",
        type: "default",
        name: "Partenza per Santa Monica",
        desc: "~40 min in macchina",
        location: "Santa Monica, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Santa Monica Pier · Boardwalk",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Fish tacos o burger sul lungomare. Atmosfera estiva LA",
        location: "Santa Monica Pier, Santa Monica, CA"
      },
      {
        time: "14:00",
        type: "highlight",
        name: "Giro di LA",
        desc: "Rodeo Drive, Hollywood Walk of Fame, Griffith Observatory (vista panoramica)",
        location: "Griffith Observatory, Los Angeles, CA"
      },
      {
        time: "17:30",
        type: "default",
        name: "Transfer LAX",
        desc: "",
        location: "LAX Airport, Los Angeles, CA"
      },
      {
        time: "19:00",
        type: "flight",
        name: "LAX → SFO",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Rientro a San Francisco",
        location: "SFO International Airport, San Francisco, CA"
      },
      {
        time: "21:00",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Rientro dall'escapade a LA",
        location: "San Francisco, CA"
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
        desc: "Giornata di ritmo tranquillo dopo i giorni intensi",
        location: "Mission District, San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Pranzo a casa",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "",
        location: "Mission District, San Francisco, CA"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Clarion Alley Murales",
        desc: "Street art storica del Mission, cambia continuamente. ~30 min.",
        location: "Clarion Alley, San Francisco, CA"
      },
      {
        time: "15:30",
        type: "highlight",
        name: "The Castro",
        desc: "Quartiere iconico, Rainbow Honor Walk, architecture vittoriana",
        location: "The Castro, San Francisco, CA"
      },
      {
        time: "16:00",
        type: "meal",
        name: "Saigon Sandwich · Banh Mi",
        badge: { label: "☀ SPUNTINO", variant: "lunch" },
        desc: "560 Larkin St. Il banh mi più economico e buono della città. ~$5.",
        location: "Saigon Sandwich, Larkin St, San Francisco, CA"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Dolores Park",
        desc: "Relax sull'erba con vista sul downtown. Punto di ritrovo della SF contemporanea.",
        location: "Mission Dolores Park, San Francisco, CA"
      },
      {
        time: "17:00",
        type: "default",
        name: "Passeggiata libera nel Mission",
        desc: "Valencia Street per coffee shop e librerie indipendenti",
        location: "Valencia St, San Francisco, CA"
      },
      {
        time: "19:00",
        type: "meal",
        name: "Mission Burrito · La Taqueria",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Obbligatorio. Il burrito più famoso di SF, carne asada o carnitas. Cash preferred.",
        location: "La Taqueria, Mission St, San Francisco, CA"
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
        desc: "Apertura alle 9. Pausa tè verde e wagashi nel giardino giapponese più antico degli USA.",
        location: "Japanese Tea Garden, San Francisco, CA"
      },
      {
        time: "10:30",
        type: "highlight",
        name: "California Academy of Sciences",
        desc: "Planetario, foresta pluviale, acquario tropicale e tetto vivente",
        location: "California Academy of Sciences, San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Outerlands · Inner Sunset",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Locale rustico e artigianale vicino all'oceano. Ottimi sandwich e zuppa. Molto amato dai locals.",
        location: "Outerlands, Judah St, San Francisco, CA"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Ocean Beach & Lands End Trail",
        desc: "Sentiero panoramico sul Pacifico, rovine del Sutro Baths, vista sul Golden Gate",
        location: "Lands End Trail, San Francisco, CA"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Sutro Baths & Marshall's Beach",
        desc: "Rovine dell'antico stabilimento balneare + la spiaggia nascosta sotto il Golden Gate",
        location: "Sutro Baths, San Francisco, CA"
      },
      {
        time: "18:30",
        type: "default",
        name: "Tramonto dal Lands End Lookout",
        desc: "Una delle migliori viste sul Golden Gate al tramonto",
        location: "Lands End Lookout, San Francisco, CA"
      },
      {
        time: "20:30",
        type: "meal",
        name: "Cena a casa",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "",
        location: "San Francisco, CA"
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
        desc: "~40 min da SF. Prenotazione parcheggio obbligatoria.",
        location: "Muir Woods National Monument, CA"
      },
      {
        time: "9:00",
        type: "highlight",
        name: "Muir Woods National Monument",
        desc: "Foresta di sequoie costiere millenarie. Main Trail + Bohemian Loop (~2h). Silenzio assoluto.",
        location: "Muir Woods National Monument, CA"
      },
      {
        time: "11:30",
        type: "default",
        name: "Marin Headlands · Vista panoramica",
        desc: "Il punto con la vista più iconica su SF e Golden Gate. Tappa obbligatoria per foto.",
        location: "Marin Headlands, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Sausalito · Bar Bocce",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Sul waterfront con vista sulla baia. Ottima pizza e pesce. Atmosfera da borgo marinaro italiano.",
        location: "Bar Bocce, Sausalito, CA"
      },
      {
        time: "15:00",
        type: "default",
        name: "Passeggiata a Sausalito",
        desc: "Gallerie d'arte, case galleggianti, gelato sul molo",
        location: "Sausalito, CA"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Rientro con vista Golden Gate",
        desc: "Attraversare il Golden Gate Bridge in macchina con sosta al vista point",
        location: "Golden Gate Bridge Vista Point, CA"
      },
      {
        time: "18:00",
        type: "default",
        name: "Aperitivo e ultima passeggiata a SF",
        desc: "Ultimo giro in città prima della partenza",
        location: "San Francisco, CA"
      },
      {
        time: "20:30",
        type: "meal",
        name: "Cena a casa · Ultima notte a SF",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Cena con tutto quello che è rimasto, brindisi alla California",
        location: "San Francisco, CA"
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
        desc: "Colazione tranquilla nell'ultima mattina californiana",
        location: "San Francisco, CA"
      },
      {
        time: "11:30",
        type: "default",
        name: "Partenza per SFO",
        desc: "~30 min di transfer",
        location: "SFO International Airport, San Francisco, CA"
      },
      {
        time: "14:00",
        type: "flight",
        name: "SFO — Partenza",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Arrivederci, California.",
        location: "SFO International Airport, San Francisco, CA"
      }
    ]
  }
];

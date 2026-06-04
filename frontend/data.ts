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
    theme: { icon: "🌲", text: "Oakland · Natura" },
    chipLabel: "Gio",
    chipNum: "13",
    events: [
      {
        time: "09:00",
        type: "default",
        name: "Colazione",
        desc: "Caffè e pasticcini nei pressi dell'hotel."
      },
      {
        time: "10:30",
        type: "highlight",
        name: "Redwood Regional Park",
        desc: "Passeggiata tra le sequoie giganti a Oakland. Aria fresca e natura."
      },
      {
        time: "13:30",
        type: "meal",
        name: "Jack London Square",
        badge: { label: "🥗 PRANZO", variant: "lunch" },
        desc: "Pranzo sul lungomare di Oakland con vista sulla baia."
      },
      {
        time: "16:00",
        type: "default",
        name: "Lake Merritt",
        desc: "Passeggiata rilassante intorno al lago salato nel cuore di Oakland."
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
        time: "08:30",
        type: "default",
        name: "City Tour Mattutino",
        desc: "Esplorazione del centro città, Union Square e dintorni."
      },
      {
        time: "12:00",
        type: "meal",
        name: "Dungeness Crab",
        badge: { label: "🦀 PRANZO", variant: "lunch" },
        desc: "Pranzo a base di granchio tipico al Fisherman's Wharf."
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Tour di Alcatraz",
        desc: "Traghetto per l'isola e visita con audioguida della celebre prigione."
      },
      {
        time: "19:15",
        type: "event",
        name: "Partita dei SF Giants",
        badge: { label: "⚾ EVENTO", variant: "event" },
        desc: "Serata all'Oracle Park per una partita di baseball MLB."
      }
    ]
  },
  {
    id: 3,
    date: "15 Agosto",
    weekday: "Sabato · Giorno 4",
    theme: { icon: "🚃", text: "Chinatown · North Beach" },
    chipLabel: "Sab",
    chipNum: "15",
    events: [
      {
        time: "10:00",
        type: "highlight",
        name: "Chinatown",
        desc: "Passeggiata attraverso la Dragon's Gate, visita alla fabbrica dei biscotti della fortuna."
      },
      {
        time: "13:00",
        type: "meal",
        name: "Dim Sum",
        badge: { label: "🥟 PRANZO", variant: "lunch" },
        desc: "Pranzo tradizionale cinese in uno dei locali storici."
      },
      {
        time: "15:00",
        type: "default",
        name: "Coit Tower & North Beach",
        desc: "Salita alla Coit Tower per la vista panoramica, poi discesa nel quartiere italiano."
      },
      {
        time: "17:30",
        type: "highlight",
        name: "Lombard Street & Cable Car",
        desc: "Discesa della strada più tortuosa del mondo e giro sullo storico tram."
      }
    ]
  },
  {
    id: 4,
    date: "16 Agosto",
    weekday: "Domenica · Giorno 5",
    theme: { icon: "🍷", text: "Napa Valley" },
    chipLabel: "Dom",
    chipNum: "16",
    note: { icon: "🚗", text: "Noleggio auto necessario per questa giornata." },
    events: [
      {
        time: "09:00",
        type: "default",
        name: "Partenza per Napa",
        desc: "Viaggio in auto verso nord attraversando il Golden Gate Bridge."
      },
      {
        time: "11:00",
        type: "highlight",
        name: "Degustazione Vini",
        desc: "Visita a una cantina storica della Napa Valley con degustazione."
      },
      {
        time: "13:30",
        type: "meal",
        name: "Pranzo a Yountville",
        badge: { label: "🍷 PRANZO", variant: "lunch" },
        desc: "Pausa pranzo nella capitale culinaria della valle."
      },
      {
        time: "16:00",
        type: "default",
        name: "Oxbow Public Market",
        desc: "Passeggiata nel mercato coperto di Napa per prodotti locali."
      }
    ]
  },
  {
    id: 5,
    date: "17 Agosto",
    weekday: "Lunedì · Giorno 6",
    theme: { icon: "💻", text: "Silicon Valley" },
    chipLabel: "Lun",
    chipNum: "17",
    events: [
      {
        time: "10:00",
        type: "highlight",
        name: "Apple Park Visitor Center",
        desc: "Visita al centro visitatori del quartier generale Apple a Cupertino."
      },
      {
        time: "12:30",
        type: "default",
        name: "Computer History Museum",
        desc: "Tuffo nella storia dell'informatica a Mountain View."
      },
      {
        time: "14:30",
        type: "meal",
        name: "Pranzo a Palo Alto",
        badge: { label: "🥗 PRANZO", variant: "lunch" },
        desc: "Pranzo veloce vicino al campus universitario."
      },
      {
        time: "16:00",
        type: "highlight",
        name: "Stanford University",
        desc: "Passeggiata nel prestigioso campus universitario."
      }
    ]
  },
  {
    id: 6,
    date: "18 Agosto",
    weekday: "Martedì · Giorno 7",
    theme: { icon: "🌆", text: "LA Day 1" },
    chipLabel: "Mar",
    chipNum: "18",
    events: [
      {
        time: "07:00",
        type: "flight",
        name: "Volo per Los Angeles",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Volo mattutino SFO - LAX."
      },
      {
        time: "11:00",
        type: "highlight",
        name: "Getty Center",
        desc: "Visita al museo d'arte con architettura mozzafiato e vista su LA."
      },
      {
        time: "15:00",
        type: "default",
        name: "Check-in Hotel LA",
        desc: "Sistemazione in hotel a West Hollywood."
      },
      {
        time: "19:00",
        type: "meal",
        name: "Sunset Strip",
        badge: { label: "🍸 CENA", variant: "dinner" },
        desc: "Cena e passeggiata lungo la celebre via della vita notturna."
      }
    ]
  },
  {
    id: 7,
    date: "19 Agosto",
    weekday: "Mercoledì · Giorno 8",
    theme: { icon: "🎬", text: "LA Day 2" },
    chipLabel: "Mer",
    chipNum: "19",
    events: [
      {
        time: "09:30",
        type: "highlight",
        name: "Hollywood Walk of Fame",
        desc: "Passeggiata tra le stelle e foto al TCL Chinese Theatre."
      },
      {
        time: "12:30",
        type: "default",
        name: "LACMA & Urban Light",
        desc: "Visita all'installazione artistica dei lampioni."
      },
      {
        time: "15:00",
        type: "highlight",
        name: "Venice Beach",
        desc: "Passeggiata sul lungomare eccentrico, Muscle Beach e i canali."
      },
      {
        time: "18:30",
        type: "meal",
        name: "Santa Monica Pier",
        badge: { label: "🎡 CENA", variant: "dinner" },
        desc: "Tramonto sul molo e cena a base di pesce."
      }
    ]
  },
  {
    id: 8,
    date: "20 Agosto",
    weekday: "Giovedì · Giorno 9",
    theme: { icon: "🌁", text: "SF Ritorno" },
    chipLabel: "Gio",
    chipNum: "20",
    events: [
      {
        time: "09:00",
        type: "flight",
        name: "Volo di ritorno a SF",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Rientro a San Francisco in mattinata."
      },
      {
        time: "13:00",
        type: "highlight",
        name: "Haight-Ashbury",
        desc: "Esplorazione del quartiere hippie, negozi vintage e case vittoriane."
      },
      {
        time: "15:30",
        type: "default",
        name: "Painted Ladies",
        desc: "Relax ad Alamo Square ammirando le celebri case colorate."
      },
      {
        time: "19:30",
        type: "meal",
        name: "Mission Burrito",
        badge: { label: "🌯 CENA", variant: "dinner" },
        desc: "Cena nel Mission District con un autentico e gigantesco burrito."
      }
    ]
  },
  {
    id: 9,
    date: "21 Agosto",
    weekday: "Venerdì · Giorno 10",
    theme: { icon: "🌊", text: "Golden Gate Park" },
    chipLabel: "Ven",
    chipNum: "21",
    events: [
      {
        time: "10:00",
        type: "highlight",
        name: "Japanese Tea Garden",
        desc: "Passeggiata rilassante nel giardino giapponese più antico degli USA."
      },
      {
        time: "12:00",
        type: "default",
        name: "California Academy of Sciences",
        desc: "Visita al museo di storia naturale con acquario e foresta pluviale."
      },
      {
        time: "15:30",
        type: "highlight",
        name: "Lands End",
        desc: "Trekking costiero con viste spettacolari sul Golden Gate e rovine dei Sutro Baths."
      },
      {
        time: "19:00",
        type: "meal",
        name: "Cena a Richmond District",
        badge: { label: "🍜 CENA", variant: "dinner" },
        desc: "Cena asiatica in uno dei migliori quartieri per il cibo etnico."
      }
    ]
  },
  {
    id: 10,
    date: "22 Agosto",
    weekday: "Sabato · Giorno 11",
    theme: { icon: "🌉", text: "Muir Woods · Sausalito" },
    chipLabel: "Sab",
    chipNum: "22",
    events: [
      {
        time: "09:00",
        type: "highlight",
        name: "Muir Woods",
        desc: "Mattinata immersi nella foresta di sequoie costiere (prenotazione obbligatoria)."
      },
      {
        time: "12:30",
        type: "default",
        name: "Marin Headlands",
        desc: "Punti panoramici mozzafiato per fotografare il ponte dall'alto."
      },
      {
        time: "14:00",
        type: "meal",
        name: "Sausalito",
        badge: { label: "🍔 PRANZO", variant: "lunch" },
        desc: "Pranzo nella pittoresca cittadina sul mare e passeggiata tra le houseboats."
      },
      {
        time: "17:00",
        type: "highlight",
        name: "Golden Gate Bridge",
        desc: "Attraversamento del ponte a piedi o in bici al tramonto."
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
    events: [
      {
        time: "09:00",
        type: "meal",
        name: "Ultima Colazione",
        badge: { label: "🥞 COLAZIONE", variant: "lunch" },
        desc: "Pancakes e sciroppo d'acero per salutare l'America."
      },
      {
        time: "11:00",
        type: "default",
        name: "Shopping Last Minute",
        desc: "Acquisto degli ultimi souvenir a Union Square."
      },
      {
        time: "14:00",
        type: "flight",
        name: "Partenza da SFO",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Arrivo in aeroporto, check-in e volo di rientro in Italia."
      }
    ]
  }
];

import { DayData } from './types';

export const itineraryData: DayData[] = [
  {
    id: 0,
    date: "12 Agosto",
    weekday: "Mercoledì · Giorno 1",
    theme: { icon: "🌉", text: "Arrival · San Francisco" },
    chipLabel: "Mer",
    chipNum: "12",
    events: [
      {
        time: "19:45",
        type: "flight",
        name: "Land at SFO",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "Land at SFO around 7:45 pm (allow time for customs).",
        location: "SFO International Airport, San Francisco, CA"
      },
      {
        time: "21:00",
        type: "meal",
        name: "In-N-Out Burger",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "In-N-Out on the way in, then an early night.",
        location: "In-N-Out Burger, San Francisco, CA"
      }
    ]
  },
  {
    id: 1,
    date: "13 Agosto",
    weekday: "Giovedì · Giorno 2",
    theme: { icon: "⚓", text: "Oakland (easy first day)" },
    chipLabel: "Gio",
    chipNum: "13",
    events: [
      {
        time: "10:00",
        type: "default",
        name: "Slow morning & relax",
        desc: "Lazy morning after arrival, coffee and rest at home.",
        location: "San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Lunch at home",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Relaxed lunch at home before heading out to Oakland.",
        location: "San Francisco, CA"
      },
      {
        time: "15:00",
        type: "highlight",
        name: "Piedmont Ave stroll",
        desc: "Afternoon on Piedmont Ave with cafes, bookstores, and neighborhood browsing.",
        location: "Piedmont Ave, Oakland, CA"
      },
      {
        time: "16:30",
        type: "default",
        name: "Mountain View Cemetery",
        desc: "Walk through Oakland's historic cemetery with hillside views.",
        location: "Mountain View Cemetery, Oakland, CA"
      },
      {
        time: "17:30",
        type: "default",
        name: "Morcom Rose Garden",
        desc: "Quick stop at the rose garden before heading to the lake for sunset.",
        location: "Morcom Rose Garden, Oakland, CA"
      },
      {
        time: "19:45",
        type: "highlight",
        name: "Lake Merritt at sunset",
        desc: "Sunset-hour walk around Lake Merritt with skyline reflections.",
        location: "Lake Merritt, Oakland, CA"
      },
      {
        time: "20:45",
        type: "meal",
        name: "Dinner at home",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Spend some quality time at home and have dinner before heading out for the evening.",
        location: "Everett & Jones BBQ, Jack London Square, Oakland, CA"
      },
      {
        time: "22:00",
        type: "meal",
        name: "Fenton's Creamery",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "A giant sundae at Fenton's Creamery.",
        location: "Fenton's Creamery, Oakland, CA"
      }
    ]
  },
  {
    id: 2,
    date: "14 Agosto",
    weekday: "Venerdì · Giorno 3",
    theme: { icon: "⚾", text: "San Francisco + Giants" },
    chipLabel: "Ven",
    chipNum: "14",
    events: [
      {
        time: "08:40",
        type: "highlight",
        name: "San Francisco Grand City Tour",
        desc: "Departure point 1: 8:40 AM at UNION SQUARE (DOWNTOWN) 478 Post St., San Francisco 94102.",
        location: "478 Post St., San Francisco, CA 94102"
      },
      {
        time: "12:30",
        type: "meal",
        name: "Freestyle lunch",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Freestyle lunch, decided at the moment.",
        location: "San Francisco, CA"
      },
      {
        time: "14:15",
        type: "highlight",
        name: "Alcatraz Boat Tour",
        desc: "Afternoon boat to Alcatraz (about 2.5–3 hours). Ferry + audio tour of the island.",
        location: "Alcatraz Island, San Francisco, CA"
      },
      {
        time: "17:30",
        type: "default",
        name: "Walk on Pier 39",
        desc: "Sea lions, waterfront views, and a walk on Pier 39 before heading to Oracle Park.",
        location: "Pier 39, San Francisco, CA"
      },
      {
        time: "18:00",
        type: "default",
        name: "Embarcadero walk & Ferry Building Marketplace",
        desc: "Evening walk along the Embarcadero to the Ferry Building Marketplace for a quick bite or snack before the game.",
        location: "Ferry Building Marketplace, San Francisco, CA"
      },
      {
        time: "19:15",
        type: "event",
        name: "Giants vs. Rockies · Oracle Park",
        badge: { label: "★ EVENTO", variant: "event" },
        desc: "Evening: Giants vs. Rockies, 7:15 pm at Oracle Park — garlic fries and a postgame drone show.",
        location: "Oracle Park, San Francisco, CA"
      }
    ]
  },
  {
    id: 3,
    date: "15 Agosto",
    weekday: "Sabato · Giorno 4",
    theme: { icon: "🍷", text: "Napa Morning + Seaside" },
    chipLabel: "Sab",
    chipNum: "15",
    events: [
      {
        time: "08:30",
        type: "default",
        name: "Head out early to Napa",
        desc: "Morning drive to Napa Valley.",
        location: "Napa Valley, CA"
      },
      {
        time: "09:30",
        type: "highlight",
        name: "Beringer Legacy Cave Tour",
        desc: "Morning tasting experience at Beringer with the Legacy Cave Tour (reserve ahead).",
        todos: ["Reserve Beringer Legacy Cave Tour"],
        location: "Beringer Vineyards, St. Helena, CA"
      },
      {
        time: "11:45",
        type: "highlight",
        name: "Oxbow Public Market",
        desc: "Late-morning stop at Oxbow Market for a freestyle bite.",
        location: "Oxbow Public Market, Napa, CA"
      },
      {
        time: "12:30",
        type: "meal",
        name: "Lunch at Gott's Roadside",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch stop at Gott's Roadside for a burger.",
        location: "Gott's Roadside, Napa, CA"
      },
      {
        time: "16:30",
        type: "default",
        name: "Seaside afternoon (optional)",
        desc: "Maybe spend the afternoon by the sea before heading back home.",
        location: "Pacific coast, Bay Area, CA"
      },
      {
        time: "20:00",
        type: "meal",
        name: "Steak dinner at home",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Dinner at home with steak.",
        location: "San Francisco, CA"
      }
    ]
  },
  {
    id: 4,
    date: "16 Agosto",
    weekday: "Domenica · Giorno 5",
    theme: { icon: "🌲", text: "Muir Woods + Sausalito" },
    chipLabel: "Dom",
    chipNum: "16",
    events: [
      {
        time: "10:30",
        type: "highlight",
        name: "Muir Woods",
        desc: "Early into the redwoods at Muir Woods (book parking early slot & download pass first!).",
        todos: ["Reserve parking", "Buy tickets"],
        location: "Muir Woods National Monument, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Packed lunch",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Packed lunch break during the day out.",
        location: "Sausalito, CA"
      },
      {
        time: "14:00",
        type: "highlight",
        name: "Sausalito tour",
        desc: "Scenic walk through Sausalito waterfront, downtown galleries, and harbor views.",
        location: "Sausalito, CA"
      },
      {
        time: "15:00",
        type: "highlight",
        name: "Marin Headlands",
        desc: "Stop at the Marin Headlands for the classic Golden Gate Bridge view.",
        location: "Marin Headlands, CA"
      },
      {
        time: "16:30",
        type: "highlight",
        name: "Golden Gate Overlook",
        desc: "Spectacular viewpoint framed by cypress trees over the Golden Gate Bridge.",
        location: "Golden Gate Overlook, San Francisco, CA"
      },
      {
        time: "17:30",
        type: "highlight",
        name: "Palace of Fine Arts",
        desc: "Iconic Greco-Roman style rotunda and lagoon in the Marina district.",
        location: "Palace of Fine Arts, San Francisco, CA"
      }
    ]
  },
  {
    id: 5,
    date: "17 Agosto",
    weekday: "Lunedì · Giorno 6",
    theme: { icon: "🚗", text: "To LA" },
    chipLabel: "Lun",
    chipNum: "17",
    events: [
      {
        time: "08:30",
        type: "default",
        name: "Drive down towards LA",
        desc: "Head south along Highway 1 / Hwy 101 towards Moss Landing and LA.",
        location: "Highway 1, CA"
      },
      {
        time: "10:30",
        type: "highlight",
        name: "Moss Landing (Sea Otters)",
        desc: "Stop at Moss Landing & Elkhorn Slough / Jetty Road — one of the best spots in California to watch wild sea otters floating in kelp rafts.",
        location: "Moss Landing Jetty Rd, Moss Landing, CA"
      },
      {
        time: "13:30",
        type: "meal",
        name: "In-N-Out at Kettleman City",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "In-N-Out at Kettleman City is the classic road stop.",
        location: "In-N-Out Burger, Kettleman City, CA"
      },
      {
        time: "17:30",
        type: "default",
        name: "Settle in near Universal",
        desc: "Check-in to hotel near Universal Studios in LA.",
        todos: ["Reserve hotel"],
        location: "Universal City, Los Angeles, CA"
      }
    ]
  },
  {
    id: 6,
    date: "18 Agosto",
    weekday: "Martedì · Giorno 7",
    theme: { icon: "🎂", text: "Universal + Birthday Dinner" },
    chipLabel: "Mar",
    chipNum: "18",
    events: [
      {
        time: "09:00",
        type: "highlight",
        name: "Universal Studios Hollywood",
        desc: "Super Nintendo World and Mario Kart first, then the Studio Tour, the Wizarding World, and the new Fast & Furious coaster.",
        location: "Universal Studios Hollywood, Los Angeles, CA"
      },
      {
        time: "11:30",
        type: "meal",
        name: "Three Broomsticks at Universal",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch at the Three Broomsticks in Universal Studios for a birthday treat.",
        location: "Three Broomsticks, Universal Studios Hollywood, Los Angeles, CA"
      },
      {
        time: "13:00",
        type: "highlight",
        name: "Universal Studios Hollywood",
        desc: "Continue exploring Universal Studios Hollywood, including rides, shows, and attractions.",
        location: "Universal Studios Hollywood, Los Angeles, CA"
      },
      {
        time: "19:30",
        type: "meal",
        name: "TBD restaurant for dinner",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Dinner at a TBD restaurant.",
        todos: ["Reserve restaurant"],
        location: "Los Angeles, CA"
      }
    ]
  },
  {
    id: 7,
    date: "19 Agosto",
    weekday: "Mercoledì · Giorno 8",
    theme: { icon: "🎡", text: "LA morning, then back" },
    chipLabel: "Mer",
    chipNum: "19",
    events: [
      {
        time: "09:00",
        type: "highlight",
        name: "Santa Monica Pier & Venice Boardwalk",
        desc: "Santa Monica Pier and the Venice boardwalk in the morning (Sidecar Doughnuts, Salt & Straw).",
        location: "Santa Monica Pier, Santa Monica, CA"
      },
      {
        time: "10:00",
        type: "event",
        name: "The Odyssey",
        badge: { label: "★ EVENTO", variant: "event" },
        desc: "Watch The Odyssey at the TCL Chinese Theatre in Hollywood.",
        location: "TCL Chinese Theatre, Hollywood, Los Angeles, CA"
      },
      
      {
        time: "13:00",
        type: "default",
        name: "Walk along the Hollywood Walk of Fame",
        desc: "Stroll along the Hollywood Walk of Fame and see the famous stars on the sidewalk.",
        location: "Hollywood Blvd, Los Angeles, CA"
      },
      {
        time: "14:00",
        type: "default",
        name: "Drive back to SF",
        desc: "Drive back to the Bay Area.",
        location: "San Francisco, CA"
      }
    ]
  },
  {
    id: 8,
    date: "20 Agosto",
    weekday: "Giovedì · Giorno 9",
    theme: { icon: "🎨", text: "Mission District · Aquarium & Bay Cruise" },
    chipLabel: "Gio",
    chipNum: "20",
    events: [
      {
        time: "09:00",
        type: "meal",
        name: "Breakfast at Tartine Bakery",
        desc: "09:00-09:45 · Morning bun, coffee, and browse the bakery.",
        location: "Tartine Bakery, San Francisco, CA"
      },
      {
        time: "09:45",
        type: "highlight",
        name: "Mission Dolores Park",
        desc: "09:45-10:10 · Walk up to the hill for one of the best skyline views of San Francisco.",
        location: "Mission Dolores Park, San Francisco, CA"
      },
      {
        time: "10:10",
        type: "highlight",
        name: "Mission Dolores",
        desc: "10:10-10:35 · Visit California's oldest surviving building (1776) and its peaceful cemetery.",
        location: "Mission Dolores, San Francisco, CA"
      },
      {
        time: "10:35",
        type: "highlight",
        name: "Clarion Alley",
        desc: "10:35-11:00 · Explore the murals and read the stories behind them.",
        location: "Clarion Alley, San Francisco, CA"
      },
      {
        time: "11:00",
        type: "default",
        name: "Valencia Street",
        desc: "11:00-11:40 · Browse independent boutiques, Paxton Gate, Dog Eared Books, and 826 Valencia. Optional quick espresso at Four Barrel Coffee.",
        location: "Valencia Street, San Francisco, CA"
      },
      {
        time: "11:40",
        type: "default",
        name: "Join the line at La Taqueria",
        desc: "Ideal arrival time. Expect a 45-60 minute wait; the line moves steadily and is part of the experience.",
        location: "La Taqueria, San Francisco, CA"
      },
      {
        time: "12:30",
        type: "meal",
        name: "Lunch at La Taqueria",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "12:30-13:00 · Order the legendary Carne Asada burrito or carnitas.",
        location: "La Taqueria, San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Bi-Rite Creamery",
        desc: "13:00-13:20 · A short walk away. Salted Caramel is the classic choice.",
        location: "Bi-Rite Creamery, San Francisco, CA"
      },
      {
        time: "13:20",
        type: "default",
        name: "Travel to Pier 39",
        desc: "13:20-14:00 · Take BART + F-Line streetcar or Uber/Lyft (about 20-25 min depending on traffic), with buffer before the Aquarium.",
        location: "Pier 39, San Francisco, CA"
      },
      {
        time: "15:00",
        type: "highlight",
        name: "Aquarium of the Bay (Pier 39)",
        desc: "Plenty of time to arrive without rushing. Walk through clear underwater tunnels surrounded by sharks, rays, and local Bay sea life.",
        location: "Aquarium of the Bay, Pier 39, San Francisco, CA"
      },
      {
        time: "18:30",
        type: "highlight",
        name: "San Francisco Bay Cruise",
        desc: "1-hour Golden Gate & Bay Cruise departing from Pier 39 / Fisherman's Wharf. Sail under the Golden Gate Bridge and past Alcatraz at sunset.",
        location: "Pier 39, San Francisco, CA"
      }
    ]
  },
  {
    id: 9,
    date: "21 Agosto",
    weekday: "Venerdì · Giorno 10",
    theme: { icon: "💻", text: "Silicon Valley" },
    chipLabel: "Ven",
    chipNum: "21",
    events: [
      {
        time: "09:30",
        type: "highlight",
        name: "Stanford University",
        desc: "Stanford (Main Quad, Hoover Tower, the Rodin sculpture garden).",
        location: "Stanford University, Stanford, CA"
      },
      {
        time: "12:00",
        type: "highlight",
        name: "Meta HQ",
        desc: "Meta headquarters in Menlo Park — take photos at the Meta sign.",
        location: "Meta HQ, Menlo Park, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Lunch at Meta HQ",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch stop at Meta HQ, with time for photos at the Meta sign.",
        location: "Meta HQ, Menlo Park, CA"
      },
      {
        time: "14:00",
        type: "highlight",
        name: "Apple Park Visitor Center",
        desc: "Stop at Apple Park Visitor Center (rooftop terrace, AR model, and cafe).",
        location: "Apple Park Visitor Center, Cupertino, CA"
      },
      {
        time: "15:00",
        type: "highlight",
        name: "Googleplex",
        desc: "Visit Google campus areas and the Android lawn statues.",
        location: "Googleplex, Mountain View, CA"
      }
    ]
  },
  {
    id: 10,
    date: "22 Agosto",
    weekday: "Sabato · Giorno 11",
    theme: { icon: "🌊", text: "Golden Gate Park + the coast" },
    chipLabel: "Sab",
    chipNum: "22",
    events: [
      {
        time: "09:30",
        type: "highlight",
        name: "California Academy of Sciences",
        desc: "Planetarium, 4-story rainforest canopy, aquarium, and living roof.",
        location: "California Academy of Sciences, San Francisco, CA"
      },
      {
        time: "11:30",
        type: "highlight",
        name: "Japanese Tea Garden",
        desc: "Green tea and calm walk in the oldest Japanese garden in the US.",
        todos: ["Buy tickets"],
        location: "Japanese Tea Garden, Golden Gate Park, San Francisco, CA"
      },
      {
        time: "12:30",
        type: "highlight",
        name: "Bison Paddock",
        desc: "See the herd of American bison roaming in Golden Gate Park.",
        location: "Bison Paddock, Golden Gate Park, San Francisco, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Lunch near Golden Gate Park",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Casual lunch at a café or spot near Golden Gate Park.",
        location: "Golden Gate Park, San Francisco, CA"
      },
      {
        time: "14:00",
        type: "meal",
        name: "Matcha & Coffee Break",
        desc: "Enjoy a matcha tea and coffee break at Constance Tea & Matcha, a cozy spot near Golden Gate Park.",
        location: "Constance Tea & Matcha, San Francisco, CA"
      },
      {
        time: "14:30",
        type: "highlight",
        name: "Lands End, Sutro Baths & Ocean Beach",
        desc: "Lands End, the Sutro Baths ruins, and Ocean Beach.",
        location: "Lands End, San Francisco, CA"
      },
      {
        time: "19:30",
        type: "meal",
        name: "Farewell dinner",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Farewell dinner, restaurant TBD",
        location: "House of Prime Rib, San Francisco, CA",
        todos: ["Reserve restaurant"],
      }
    ]
  },
  {
    id: 11,
    date: "23 Agosto",
    weekday: "Domenica · Giorno 12",
    theme: { icon: "✈", text: "Departure" },
    chipLabel: "Dom",
    chipNum: "23",
    note: { icon: "🗺", text: "12 days around the Bay Area, a birthday at Universal, and the best food along the way." },
    events: [
      {
        time: "11:00",
        type: "default",
        name: "Transfer to SFO",
        desc: "To SFO in the late morning for the 2 pm flight (give yourself plenty of time — it's international).",
        location: "SFO International Airport, San Francisco, CA"
      },
      {
        time: "14:00",
        type: "flight",
        name: "Departure Flight",
        badge: { label: "✈ VOLO", variant: "flight" },
        desc: "2:00 pm flight back home.",
        location: "SFO International Airport, San Francisco, CA"
      }
    ]
  }
];


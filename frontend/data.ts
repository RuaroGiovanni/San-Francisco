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
        time: "09:30",
        type: "highlight",
        name: "Lake Merritt & Piedmont Ave",
        desc: "A loop around Lake Merritt, the cafés on Piedmont Ave, and lunch by the water.",
        location: "Lake Merritt, Oakland, CA"
      },
      {
        time: "13:00",
        type: "meal",
        name: "Lunch by the water",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch by the water in Oakland.",
        location: "Oakland Waterfront, Oakland, CA"
      },
      {
        time: "19:00",
        type: "meal",
        name: "Everett & Jones BBQ",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Dinner at Everett & Jones BBQ in Jack London Square.",
        location: "Everett & Jones BBQ, Jack London Square, Oakland, CA"
      },
      {
        time: "20:30",
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
        name: "Ferry Building",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch at the Ferry Building — Hog Island oysters and a Boudin clam-chowder bread bowl.",
        location: "Ferry Building, San Francisco, CA"
      },
      {
        time: "14:30",
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
    theme: { icon: "🍷", text: "Napa Valley" },
    chipLabel: "Sab",
    chipNum: "15",
    events: [
      {
        time: "08:30",
        type: "default",
        name: "Head out early to Napa",
        desc: "Head out early towards Napa Valley.",
        location: "Napa Valley, CA"
      },
      {
        time: "09:30",
        type: "highlight",
        name: "Oxbow Public Market",
        desc: "Explore Oxbow Public Market in Napa.",
        location: "Oxbow Public Market, Napa, CA"
      },
      {
        time: "11:00",
        type: "highlight",
        name: "Napa Wineries",
        desc: "A couple of wineries in Napa Valley (Reserve ahead).",
        location: "Napa Valley, CA"
      },
      {
        time: "13:30",
        type: "meal",
        name: "Lunch in Yountville",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch in Yountville (Bouchon Bakery, or Gott's Roadside for burgers and shakes).",
        location: "Yountville, CA"
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
        time: "08:30",
        type: "highlight",
        name: "Muir Woods",
        desc: "Early into the redwoods at Muir Woods (book parking early slot & download pass first!).",
        location: "Muir Woods National Monument, CA"
      },
      {
        time: "12:30",
        type: "meal",
        name: "Lunch in Sausalito at Fish.",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Order at the counter and eat on the water (crab roll, fish tacos, clam chowder).",
        location: "Fish., Sausalito, CA"
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
        desc: "Super Nintendo World and Mario Kart first, then the Studio Tour, the Wizarding World, and the new Fast & Furious coaster. (Express Pass is worth it.)",
        location: "Universal Studios Hollywood, Los Angeles, CA"
      },
      {
        time: "19:30",
        type: "meal",
        name: "Musso & Frank Grill",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Birthday dinner at Musso & Frank Grill in Hollywood — old-Hollywood glamour, martinis, and steaks since 1919.",
        location: "Musso & Frank Grill, Hollywood, CA"
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
        time: "13:00",
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
        type: "default",
        name: "Tartine Bakery",
        desc: "Start the day with a Tartine morning bun.",
        location: "Tartine Bakery, San Francisco, CA"
      },
      {
        time: "10:00",
        type: "highlight",
        name: "Clarion Alley Murals, Dolores Park & The Castro",
        desc: "Clarion Alley murals, Dolores Park, and the Castro.",
        location: "Mission District, San Francisco, CA"
      },
      {
        time: "12:30",
        type: "meal",
        name: "La Taqueria & Bi-Rite Ice Cream",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "The mandatory La Taqueria burrito and Bi-Rite ice cream.",
        location: "La Taqueria, San Francisco, CA"
      },
      {
        time: "15:00",
        type: "highlight",
        name: "Aquarium of the Bay (Pier 39)",
        desc: "Visit the Aquarium of the Bay right at Pier 39 — walk through clear underwater tunnels surrounded by sharks, rays, and local Bay sea life.",
        location: "Aquarium of the Bay, Pier 39, San Francisco, CA"
      },
      {
        time: "17:00",
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
        name: "Apple Park Visitor Center & Meta Sign",
        desc: "The Apple Park Visitor Center (rooftop terrace, AR model, café), and a photo at the Meta sign.",
        location: "Apple Park Visitor Center, Cupertino, CA"
      },
      {
        time: "13:30",
        type: "meal",
        name: "Lunch in Palo Alto or Mountain View",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Lunch in Palo Alto or Mountain View.",
        location: "Palo Alto, CA"
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
        time: "13:15",
        type: "meal",
        name: "Lunch near Golden Gate Park",
        badge: { label: "☀ PRANZO", variant: "lunch" },
        desc: "Casual lunch at a café or spot near Golden Gate Park.",
        location: "Golden Gate Park, San Francisco, CA"
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
        name: "House of Prime Rib",
        badge: { label: "🌙 CENA", variant: "dinner" },
        desc: "Farewell dinner at House of Prime Rib (books up months ahead).",
        location: "House of Prime Rib, San Francisco, CA"
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


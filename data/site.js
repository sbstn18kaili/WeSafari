export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/safaris', label: 'Safaris' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const quickLinks = [
  { href: '/safaris/best-of-northern-tanzania', label: '5-Day Northern Tanzania' },
  { href: '/safaris/great-migration-explorer', label: 'Great Migration Safari' },
  { href: '/safaris/safari-and-zanzibar-escape', label: 'Safari & Zanzibar' },
  { href: '/experiences/serengeti-balloon-safari', label: 'Balloon Safari' },
  { href: '/destinations', label: 'Where We Go' },
  { href: '/contact', label: 'Request a Quote' }
];

export const safariPackages = [
  {
    slug: 'best-of-northern-tanzania',
    title: 'Best of Northern Tanzania',
    duration: '5 days',
    style: 'Mid-range private safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Tarangire elephants, Lake Manyara scenery, Ngorongoro Crater wildlife, and a cultural stop near Mto wa Mbu.',
    overview:
      'A compact, rewarding introduction to Tanzania’s northern circuit with varied habitats, short transfer times, and excellent wildlife diversity for first-time safari travelers.',
    highlights: ['Tarangire National Park', 'Lake Manyara', 'Ngorongoro Crater', 'Private 4x4 guide'],
    itinerary: [
      'Arrive in Arusha and meet your guide for a safari briefing.',
      'Game drive among baobabs and elephant herds in Tarangire.',
      'Explore Lake Manyara and nearby village life around Mto wa Mbu.',
      'Descend into Ngorongoro Crater for a wildlife-packed morning.',
      'Return to Arusha with time for onward flights or extensions.'
    ],
    bestFor: 'First-time travelers, families, shorter holidays'
  },
  {
    slug: 'serengeti-big-cats-and-crater',
    title: 'Serengeti Big Cats & Crater',
    duration: '7 days',
    style: 'Luxury lodge safari',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A classic private route focused on predator-rich Serengeti plains and a full morning on the Ngorongoro Crater floor.',
    overview:
      'Spend more time in the Serengeti to search for lions, cheetahs, leopards, hyenas, elephants, and sweeping golden-hour landscapes, then finish with the crater’s remarkable density of wildlife.',
    highlights: ['Central Serengeti', 'Ngorongoro Crater', 'Handpicked lodges', 'Big cat country'],
    itinerary: [
      'Arrive in Arusha and settle into your lodge.',
      'Travel through the highlands toward the Serengeti with wildlife stops.',
      'Enjoy two full days of flexible private game drives in central Serengeti.',
      'Drive to Ngorongoro with optional Olduvai Gorge or Maasai visit.',
      'Descend into Ngorongoro Crater before returning to Arusha.'
    ],
    bestFor: 'Predator sightings, photographers, luxury safari travelers'
  },
  {
    slug: 'great-migration-explorer',
    title: 'Great Migration Explorer',
    duration: '8 days',
    style: 'Seasonal wildlife journey',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Follow wildebeest herds through Ndutu calving grounds or the northern Serengeti depending on your travel month.',
    overview:
      'This itinerary is planned around the migration calendar, giving you the best routing for calving season, central Serengeti movement, or northern river-crossing months.',
    highlights: ['Migration-focused routing', 'Ndutu or northern Serengeti', 'Flexible season plan', 'Photography time'],
    itinerary: [
      'Begin in Arusha and review the latest herd movement with your guide.',
      'Safari through Tarangire or Lake Manyara en route to the Serengeti ecosystem.',
      'Spend multiple nights near the strongest seasonal migration area.',
      'Add patient game-drive time for predators, plains herds, and big skies.',
      'Finish with Ngorongoro Crater or fly onward to Zanzibar.'
    ],
    bestFor: 'Migration seekers, wildlife enthusiasts, return safari travelers'
  },
  {
    slug: 'safari-and-zanzibar-escape',
    title: 'Safari & Zanzibar Escape',
    duration: '12 days',
    style: 'Bush and beach itinerary',
    image: 'https://images.unsplash.com/photo-1589394760151-b4c9890765fe?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Pair Tarangire, Serengeti, and Ngorongoro with a relaxed island stay for snorkeling, spice farms, and ocean sunsets.',
    overview:
      'Balance thrilling safari days with unhurried time on Zanzibar’s coast, including options for Stone Town, spice farms, reef snorkeling, and sunset dhow cruising.',
    highlights: ['Northern circuit parks', 'Zanzibar beach stay', 'Stone Town option', 'Domestic flight planning'],
    itinerary: [
      'Start in Arusha and explore Tarangire’s elephants and baobabs.',
      'Continue to Serengeti for classic wildlife viewing.',
      'Visit Ngorongoro Crater before flying from Arusha to Zanzibar.',
      'Relax at the beach with optional spice, reef, and Stone Town experiences.',
      'Depart from Zanzibar or connect onward through Dar es Salaam.'
    ],
    bestFor: 'Honeymoons, couples, families, relaxed pacing'
  },
  {
    slug: 'family-safari-adventure',
    title: 'Family Safari Adventure',
    duration: '6 days',
    style: 'Family-friendly private safari',
    image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Gentle drive times, flexible lodge choices, child-friendly guides, and wildlife-rich parks for a smooth family holiday.',
    overview:
      'A safari designed around comfort and flexibility, with engaging wildlife interpretation, downtime at lodges, and routing that avoids overly long driving days.',
    highlights: ['Flexible pacing', 'Family-friendly lodges', 'Tarangire', 'Ngorongoro Highlands'],
    itinerary: [
      'Arrive in Arusha with time to rest after international flights.',
      'Visit Tarangire for elephants, giraffes, and picnic-friendly viewpoints.',
      'Slow the pace in Karatu with gardens, pool time, or a cultural walk.',
      'Explore Ngorongoro Crater with an early picnic breakfast.',
      'Add Lake Manyara or return to Arusha for onward travel.'
    ],
    bestFor: 'Families with children, multi-generation trips'
  },
  {
    slug: 'honeymoon-under-canvas',
    title: 'Honeymoon Under Canvas',
    duration: '9 days',
    style: 'Romantic tented camp safari',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Romantic camps, scenic sundowners, private guiding, and an intimate mix of Serengeti plains and crater highlands.',
    overview:
      'Celebrate with boutique camps, private moments, flexible game drives, and optional special touches such as bush breakfasts or candlelit dinners.',
    highlights: ['Boutique camps', 'Sundowners', 'Serengeti', 'Ngorongoro Highlands'],
    itinerary: [
      'Arrive in Arusha and enjoy a calm first evening.',
      'Travel to Tarangire for elephants and baobab sunsets.',
      'Continue to Serengeti for three nights in a romantic tented camp.',
      'Pause in the Ngorongoro Highlands for crater views and lodge comfort.',
      'End in Arusha or connect to Zanzibar for more beach time.'
    ],
    bestFor: 'Honeymoons, anniversaries, romantic escapes'
  },
  {
    slug: 'photographers-serengeti-safari',
    title: 'Photographer’s Serengeti Safari',
    duration: '10 days',
    style: 'Photography-focused private safari',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80',
    summary:
      'More time in the field, flexible starts, patient guides, and routes designed for light, behavior, and composition.',
    overview:
      'Built for travelers who want slower sightings, early starts, fewer rushed transfers, and guide decisions that prioritize behavior, light, and clean angles.',
    highlights: ['Early starts', 'Longer sightings', 'Private vehicle', 'Seasonal routing'],
    itinerary: [
      'Prepare in Arusha with gear and route discussion.',
      'Move into Serengeti with landscape and wildlife stops en route.',
      'Spend several full days in selected Serengeti regions.',
      'Add a second ecosystem such as Ngorongoro or Tarangire for variety.',
      'Review onward extensions or a relaxed final night.'
    ],
    bestFor: 'Photographers, filmmakers, serious wildlife lovers'
  },
  {
    slug: 'southern-tanzania-wilderness',
    title: 'Southern Tanzania Wilderness',
    duration: '9 days',
    style: 'Remote parks and fewer crowds',
    image: 'https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A quieter wilderness route featuring remote landscapes, varied activities, and a different feel from the northern circuit.',
    overview:
      'For travelers seeking space and a wilder rhythm, this route can include fly-in logistics, boating or walking where available, and lodges with strong wilderness character.',
    highlights: ['Remote wilderness', 'Fly-in options', 'Fewer vehicles', 'Wild landscapes'],
    itinerary: [
      'Arrive in Dar es Salaam or Arusha for your domestic connection.',
      'Fly to a remote southern park and settle into camp.',
      'Spend several days exploring river, woodland, and open plains habitats.',
      'Add a second camp or ecosystem for contrast.',
      'Return by air for international or Zanzibar connections.'
    ],
    bestFor: 'Repeat safari travelers, wilderness seekers, couples'
  }
];


export const safariDetails = {
  'best-of-northern-tanzania': {
    route: 'Arusha → Tarangire → Lake Manyara / Mto wa Mbu → Ngorongoro Crater → Arusha',
    startsEnds: 'Starts and ends in Arusha; Kilimanjaro International Airport transfers can be added.',
    accommodation: 'Comfortable mid-range lodges or tented camps in Tarangire/Karatu, upgradeable to boutique luxury.',
    groupSize: 'Best for 2–6 travelers in one private safari vehicle.',
    bestTime: 'Excellent year-round; June to October is best for dry-season wildlife concentration.',
    pace: 'Moderate pace with shorter drives than longer Serengeti routes.',
    physicalLevel: 'Easy; short walks are optional and game drives are vehicle-based.',
    priceNote: 'Final pricing depends on season, lodge category, party size, and park fee updates.',
    meals: 'Breakfast, lunch, and dinner during safari days; special diets can be requested in advance.',
    included: ['Private 4x4 safari vehicle with pop-up roof', 'Professional English-speaking driver-guide', 'Park and crater fees', 'Full-board safari accommodation', 'Bottled drinking water on game drives'],
    excluded: ['International flights and visas', 'Travel insurance', 'Tips and gratuities', 'Premium drinks and personal purchases', 'Optional cultural activities unless quoted'],
    itineraryDetailed: [
      { day: 1, title: 'Arrive in Arusha', location: 'Arusha', accommodation: 'Arusha lodge or hotel', meals: 'Dinner', description: 'Meet your Great Roar Safaris representative, review the route, and settle in after your flight.' },
      { day: 2, title: 'Tarangire elephant country', location: 'Tarangire National Park', accommodation: 'Tarangire or Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'Drive to Tarangire for baobab landscapes, elephants, giraffes, zebras, and river-valley wildlife.' },
      { day: 3, title: 'Lake Manyara and village culture', location: 'Lake Manyara / Mto wa Mbu', accommodation: 'Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'Explore groundwater forest, escarpment views, birdlife, and an optional market or village walk.' },
      { day: 4, title: 'Ngorongoro Crater safari', location: 'Ngorongoro Conservation Area', accommodation: 'Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'Descend early to the crater floor for a picnic lunch and a concentrated wildlife-viewing day.' },
      { day: 5, title: 'Return to Arusha', location: 'Arusha', accommodation: 'Not included unless requested', meals: 'Breakfast, lunch', description: 'Enjoy a relaxed morning, optional souvenir stop, and transfer to Arusha or the airport.' }
    ]
  },
  'serengeti-big-cats-and-crater': {
    route: 'Arusha → Ngorongoro Highlands → Central Serengeti → Ngorongoro Crater → Arusha',
    startsEnds: 'Starts and ends in Arusha, with optional flight sectors to reduce driving time.',
    accommodation: 'Luxury lodges or intimate tented camps selected for wildlife access and comfort.',
    groupSize: 'Ideal for couples, families, and small groups of 2–6 travelers.',
    bestTime: 'Strong all year; June to October and January to March are especially rewarding for predators.',
    pace: 'Classic safari pace with multiple Serengeti nights for unrushed game drives.',
    physicalLevel: 'Easy; suitable for most travelers comfortable with full-day game drives.',
    priceNote: 'Luxury camp availability and seasonality significantly affect the final quote.',
    meals: 'Full-board safari meals with picnic lunches on longer game-drive days.',
    included: ['Private 4x4 safari vehicle', 'Professional safari guide', 'All scheduled park and conservation fees', 'Luxury full-board accommodation', 'Airport and Arusha transfers as quoted'],
    excluded: ['International airfare', 'Visa fees', 'Travel insurance', 'Premium beverages', 'Balloon safari and other optional add-ons'],
    itineraryDetailed: [
      { day: 1, title: 'Arrival and safari briefing', location: 'Arusha', accommodation: 'Luxury Arusha lodge', meals: 'Dinner', description: 'Arrive, refresh, and discuss wildlife priorities with your guide before the safari begins.' },
      { day: 2, title: 'Highlands to Serengeti', location: 'Ngorongoro Highlands / Serengeti', accommodation: 'Central Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Travel through crater highlands toward Serengeti plains with wildlife viewing en route.' },
      { day: 3, title: 'Big cat tracking', location: 'Central Serengeti', accommodation: 'Central Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Use early and late light to search for lions, cheetahs, leopards, hyenas, and plains game.' },
      { day: 4, title: 'Flexible Serengeti game drives', location: 'Central Serengeti', accommodation: 'Central Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Follow fresh sightings and spend patient time at predator territories, kopjes, and river valleys.' },
      { day: 5, title: 'Serengeti to Ngorongoro', location: 'Ngorongoro Highlands', accommodation: 'Crater-area lodge', meals: 'Breakfast, lunch, dinner', description: 'Game drive out of the Serengeti with optional Olduvai Gorge or cultural stop if time allows.' },
      { day: 6, title: 'Crater floor safari', location: 'Ngorongoro Crater', accommodation: 'Karatu or Arusha lodge', meals: 'Breakfast, lunch, dinner', description: 'Descend into the crater for rhino chances, lion prides, hippos, flamingos, and dramatic scenery.' },
      { day: 7, title: 'Departure', location: 'Arusha', accommodation: 'Not included unless requested', meals: 'Breakfast', description: 'Transfer to Arusha, Kilimanjaro airport, or your next extension.' }
    ]
  },
  'great-migration-explorer': {
    route: 'Arusha → Tarangire or Lake Manyara → Seasonal Serengeti region → Ngorongoro → Arusha/Zanzibar',
    startsEnds: 'Starts in Arusha and can end in Arusha or with a Serengeti flight to Zanzibar.',
    accommodation: 'Mobile or seasonal camps positioned near the strongest migration area for your month.',
    groupSize: 'Best for 2–6 travelers, photographers, and wildlife-focused groups.',
    bestTime: 'December to March for Ndutu calving; July to October for northern Serengeti river crossings.',
    pace: 'Wildlife-intensive, with longer field days and flexible routing around herd movement.',
    physicalLevel: 'Easy to moderate due to longer game-drive days.',
    priceNote: 'Migration camps sell out early, so advance booking gives better value and locations.',
    meals: 'Full-board meals at safari camps plus picnic lunches when following herds.',
    included: ['Migration-season route planning', 'Private guide and vehicle', 'Park and concession fees as quoted', 'Seasonal camp accommodation', 'Drinking water during game drives'],
    excluded: ['International flights', 'Domestic flights unless quoted', 'Visas and insurance', 'Hot-air balloon safari', 'Tips and personal expenses'],
    itineraryDetailed: [
      { day: 1, title: 'Arrival and migration briefing', location: 'Arusha', accommodation: 'Arusha lodge', meals: 'Dinner', description: 'Review recent herd movement and confirm the seasonal routing for your travel dates.' },
      { day: 2, title: 'Northern circuit warm-up', location: 'Tarangire or Lake Manyara', accommodation: 'Karatu or park lodge', meals: 'Breakfast, lunch, dinner', description: 'Begin with elephants, forest, birdlife, or baobab landscapes before entering the Serengeti ecosystem.' },
      { day: 3, title: 'Enter the migration zone', location: 'Seasonal Serengeti / Ndutu', accommodation: 'Seasonal migration camp', meals: 'Breakfast, lunch, dinner', description: 'Drive or fly toward the best seasonal area and start searching for herd concentrations.' },
      { day: 4, title: 'Full migration game drive', location: 'Seasonal Serengeti / Ndutu', accommodation: 'Seasonal migration camp', meals: 'Breakfast, lunch, dinner', description: 'Spend a full day with wildebeest, zebras, predators, and the landscapes that shape their movement.' },
      { day: 5, title: 'Predator and plains focus', location: 'Seasonal Serengeti', accommodation: 'Seasonal migration camp', meals: 'Breakfast, lunch, dinner', description: 'Track lions, cheetahs, hyenas, and vultures around the herds with plenty of time for photography.' },
      { day: 6, title: 'Serengeti contrast', location: 'Central or northern Serengeti', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Move to a second area for different habitats, kopjes, river lines, and resident wildlife.' },
      { day: 7, title: 'Ngorongoro Highlands', location: 'Ngorongoro Conservation Area', accommodation: 'Crater-area lodge', meals: 'Breakfast, lunch, dinner', description: 'Game drive out of the Serengeti and overnight near the crater rim or Karatu.' },
      { day: 8, title: 'Crater safari and onward travel', location: 'Ngorongoro / Arusha', accommodation: 'Not included unless requested', meals: 'Breakfast, lunch', description: 'Descend into the crater before returning to Arusha or connecting to Zanzibar.' }
    ]
  },
  'safari-and-zanzibar-escape': {
    route: 'Arusha → Tarangire → Serengeti → Ngorongoro → Zanzibar',
    startsEnds: 'Starts in Arusha and ends in Zanzibar, with domestic flights coordinated in the itinerary.',
    accommodation: 'Safari lodges/tented camps plus a Zanzibar beach resort matched to your style.',
    groupSize: 'Works well for couples, honeymooners, families, and friends traveling together.',
    bestTime: 'June to October and December to March are popular for safari and beach weather.',
    pace: 'Balanced pace: active safari days followed by slower island time.',
    physicalLevel: 'Easy; beach and cultural activities are optional.',
    priceNote: 'Quote varies by Zanzibar resort category, flight schedules, and safari season.',
    meals: 'Full-board on safari; Zanzibar meal plan depends on resort selection.',
    included: ['Private safari vehicle and guide', 'Safari park fees', 'Safari accommodation and meals', 'Domestic flight planning support', 'Zanzibar transfers as quoted'],
    excluded: ['International flights', 'Zanzibar resort extras', 'Marine park fees unless quoted', 'Travel insurance', 'Tips and personal expenses'],
    itineraryDetailed: [
      { day: 1, title: 'Arrive in Arusha', location: 'Arusha', accommodation: 'Arusha lodge', meals: 'Dinner', description: 'Settle in and prepare for your safari-to-beach adventure.' },
      { day: 2, title: 'Tarangire safari', location: 'Tarangire National Park', accommodation: 'Tarangire or Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'Start with elephant herds, baobabs, and classic northern Tanzania scenery.' },
      { day: 3, title: 'To the Serengeti', location: 'Serengeti National Park', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Travel into the Serengeti with game viewing as the landscapes open into vast plains.' },
      { day: 4, title: 'Serengeti game drives', location: 'Serengeti National Park', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Spend a full day searching for big cats, elephants, giraffes, and seasonal plains herds.' },
      { day: 5, title: 'Ngorongoro Highlands', location: 'Ngorongoro Conservation Area', accommodation: 'Crater-area lodge', meals: 'Breakfast, lunch, dinner', description: 'Game drive out of the Serengeti and overnight near the crater for an early descent.' },
      { day: 6, title: 'Crater safari and fly to Zanzibar', location: 'Ngorongoro / Zanzibar', accommodation: 'Zanzibar beach resort', meals: 'Breakfast, lunch', description: 'Explore the crater floor, then connect by road and air to Zanzibar.' },
      { day: 7, title: 'Beach day', location: 'Zanzibar coast', accommodation: 'Zanzibar beach resort', meals: 'Resort meal plan', description: 'Relax by the ocean, swim, snorkel, or schedule a spa treatment.' },
      { day: 8, title: 'Spice and Stone Town option', location: 'Zanzibar', accommodation: 'Zanzibar beach resort', meals: 'Resort meal plan', description: 'Add a spice farm, Stone Town walk, prison island, or sunset dhow cruise.' },
      { day: 9, title: 'Reef or rest day', location: 'Zanzibar coast', accommodation: 'Zanzibar beach resort', meals: 'Resort meal plan', description: 'Choose snorkeling, diving, or another slow beach day.' },
      { day: 10, title: 'Island leisure', location: 'Zanzibar coast', accommodation: 'Zanzibar beach resort', meals: 'Resort meal plan', description: 'Enjoy unstructured time or add a final guided excursion.' },
      { day: 11, title: 'Final beach day', location: 'Zanzibar coast', accommodation: 'Zanzibar beach resort', meals: 'Resort meal plan', description: 'A final day for the ocean, photos, and a relaxed farewell dinner.' },
      { day: 12, title: 'Depart Zanzibar', location: 'Zanzibar Airport', accommodation: 'Not included', meals: 'Breakfast', description: 'Transfer to the airport for your onward flight.' }
    ]
  },
  'family-safari-adventure': {
    route: 'Arusha → Tarangire → Karatu → Ngorongoro → Lake Manyara → Arusha',
    startsEnds: 'Starts and ends in Arusha with family-friendly transfer timing.',
    accommodation: 'Family-friendly lodges with pools, gardens, interconnecting rooms, or triple options where available.',
    groupSize: 'Designed for families of 3–6 travelers; larger family groups can use multiple vehicles.',
    bestTime: 'Works in most school holidays; June to October and December to February are especially popular.',
    pace: 'Gentle pace with shorter drives, lodge downtime, and flexible starts.',
    physicalLevel: 'Easy and child-friendly; activities can be adjusted by age.',
    priceNote: 'Child policies, room configuration, and travel season shape the final cost.',
    meals: 'Family-friendly full-board meals on safari; dietary needs can be requested.',
    included: ['Private family safari vehicle', 'Child-aware driver-guide', 'Park fees', 'Family room planning', 'Drinking water and picnic lunches'],
    excluded: ['International flights', 'Visas and insurance', 'Premium drinks', 'Laundry and personal items', 'Optional activities not quoted'],
    itineraryDetailed: [
      { day: 1, title: 'Arrive and rest', location: 'Arusha', accommodation: 'Family-friendly Arusha lodge', meals: 'Dinner', description: 'A relaxed arrival day with time to recover from flights and meet your guide.' },
      { day: 2, title: 'Tarangire wildlife drive', location: 'Tarangire National Park', accommodation: 'Tarangire or Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'Look for elephants, giraffes, zebras, and birds with breaks when children need them.' },
      { day: 3, title: 'Karatu downtime and culture', location: 'Karatu / Mto wa Mbu', accommodation: 'Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'Add a gentle village walk, cooking activity, coffee visit, or pool time at the lodge.' },
      { day: 4, title: 'Ngorongoro Crater', location: 'Ngorongoro Crater', accommodation: 'Karatu lodge', meals: 'Breakfast, lunch, dinner', description: 'An early descent gives the family a high-impact wildlife day without changing lodges.' },
      { day: 5, title: 'Lake Manyara or flexible day', location: 'Lake Manyara', accommodation: 'Karatu or Arusha lodge', meals: 'Breakfast, lunch, dinner', description: 'Visit Lake Manyara or keep the day lighter with a cultural or lodge-based option.' },
      { day: 6, title: 'Return to Arusha', location: 'Arusha', accommodation: 'Not included unless requested', meals: 'Breakfast, lunch', description: 'Transfer back to Arusha for onward flights or an added Zanzibar extension.' }
    ]
  },
  'honeymoon-under-canvas': {
    route: 'Arusha → Tarangire → Serengeti → Ngorongoro Highlands → Arusha/Zanzibar',
    startsEnds: 'Starts in Arusha and can end in Arusha or continue to Zanzibar.',
    accommodation: 'Romantic boutique lodges and tented camps with private decks and atmospheric dining.',
    groupSize: 'Best for couples; private vehicle and private guiding included.',
    bestTime: 'Excellent from June to October and January to March; green season can be beautiful and quieter.',
    pace: 'Romantic moderate pace with time for sundowners, private meals, and scenic stops.',
    physicalLevel: 'Easy; optional walks or special experiences can be added.',
    priceNote: 'Special touches and premium camps are quoted transparently based on availability.',
    meals: 'Full-board safari meals, with private dining requests where camp operations allow.',
    included: ['Private safari vehicle and guide', 'Romantic lodge/camp recommendations', 'Park fees', 'Full-board safari accommodation', 'Honeymoon notes shared with properties'],
    excluded: ['International flights', 'Visas and insurance', 'Premium champagne or special private events unless quoted', 'Tips', 'Zanzibar extension unless included'],
    itineraryDetailed: [
      { day: 1, title: 'Romantic arrival', location: 'Arusha', accommodation: 'Boutique Arusha lodge', meals: 'Dinner', description: 'Arrive to a relaxed lodge and a private safari briefing.' },
      { day: 2, title: 'Tarangire sundowner', location: 'Tarangire National Park', accommodation: 'Romantic safari lodge', meals: 'Breakfast, lunch, dinner', description: 'Begin with elephants, baobabs, and a golden-hour safari atmosphere.' },
      { day: 3, title: 'Serengeti bound', location: 'Serengeti National Park', accommodation: 'Tented camp', meals: 'Breakfast, lunch, dinner', description: 'Travel into the Serengeti and settle into camp under wide open skies.' },
      { day: 4, title: 'Serengeti at leisure', location: 'Serengeti National Park', accommodation: 'Tented camp', meals: 'Breakfast, lunch, dinner', description: 'Choose an early start, a long picnic drive, or split game drives with camp downtime.' },
      { day: 5, title: 'Big cats and private moments', location: 'Serengeti National Park', accommodation: 'Tented camp', meals: 'Breakfast, lunch, dinner', description: 'Spend another day following wildlife with time for sundowners or a special dinner request.' },
      { day: 6, title: 'Highlands retreat', location: 'Ngorongoro Highlands', accommodation: 'Highlands lodge', meals: 'Breakfast, lunch, dinner', description: 'Leave the plains for cooler highland views and a slower evening.' },
      { day: 7, title: 'Crater safari', location: 'Ngorongoro Crater', accommodation: 'Highlands lodge', meals: 'Breakfast, lunch, dinner', description: 'Explore the crater floor before returning to lodge comfort.' },
      { day: 8, title: 'Relaxed final safari day', location: 'Karatu / Arusha', accommodation: 'Arusha lodge', meals: 'Breakfast, lunch, dinner', description: 'Enjoy a flexible day with optional cultural stops or scenic viewpoints.' },
      { day: 9, title: 'Depart or extend', location: 'Arusha', accommodation: 'Not included unless requested', meals: 'Breakfast', description: 'Depart Tanzania or continue to Zanzibar for a beach honeymoon extension.' }
    ]
  },
  'photographers-serengeti-safari': {
    route: 'Arusha → Serengeti focus region(s) → Ngorongoro or Tarangire → Arusha',
    startsEnds: 'Starts and ends in Arusha; fly-in options can maximize field time.',
    accommodation: 'Wildlife-positioned camps selected for fast access to productive areas.',
    groupSize: 'Best for 1–4 photographers per vehicle for gear space and flexibility.',
    bestTime: 'Year-round depending on subject goals; green season offers dramatic skies and fewer vehicles.',
    pace: 'Field-focused with early starts, patient sightings, and flexible meal timing.',
    physicalLevel: 'Easy to moderate due to long days in the vehicle.',
    priceNote: 'Private vehicle exclusivity, camp location, and flight choices drive pricing.',
    meals: 'Flexible picnic breakfasts/lunches can be arranged for longer sessions in the field.',
    included: ['Private vehicle with photographer-friendly pacing', 'Guide briefed on light and behavior priorities', 'Park fees', 'Full-board camp accommodation', 'Beanbags can be requested subject to availability'],
    excluded: ['Camera gear and insurance', 'International flights', 'Extra luggage fees on light aircraft', 'Special permits', 'Tips and personal expenses'],
    itineraryDetailed: [
      { day: 1, title: 'Arrival and image goals', location: 'Arusha', accommodation: 'Arusha lodge', meals: 'Dinner', description: 'Discuss target species, preferred shooting style, and gear logistics with your guide.' },
      { day: 2, title: 'Into the Serengeti', location: 'Serengeti National Park', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Drive or fly to the Serengeti and begin shooting as conditions allow.' },
      { day: 3, title: 'Golden-hour predator work', location: 'Serengeti', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Start early and use patient tracking for lions, cheetahs, leopards, and hyenas.' },
      { day: 4, title: 'Behavior and composition', location: 'Serengeti', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Focus on behavior, clean backgrounds, backlight, dust, and environmental compositions.' },
      { day: 5, title: 'Second Serengeti sector', location: 'Serengeti', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Shift to another productive area if seasonal conditions support it.' },
      { day: 6, title: 'Full field day', location: 'Serengeti', accommodation: 'Serengeti camp', meals: 'Breakfast, lunch, dinner', description: 'Pack picnic meals and remain in the field to maximize sightings and light.' },
      { day: 7, title: 'Landscape and wildlife variety', location: 'Serengeti / Ngorongoro', accommodation: 'Crater-area lodge', meals: 'Breakfast, lunch, dinner', description: 'Capture kopjes, plains, highlands, and wildlife transitions while changing areas.' },
      { day: 8, title: 'Crater or Tarangire contrast', location: 'Ngorongoro or Tarangire', accommodation: 'Safari lodge', meals: 'Breakfast, lunch, dinner', description: 'Add a contrasting ecosystem for elephants, crater scenery, or dense wildlife moments.' },
      { day: 9, title: 'Final field session', location: 'Safari region', accommodation: 'Arusha lodge', meals: 'Breakfast, lunch, dinner', description: 'Use the last safari day for requested subjects or a relaxed return toward Arusha.' },
      { day: 10, title: 'Depart', location: 'Arusha', accommodation: 'Not included unless requested', meals: 'Breakfast', description: 'Depart with time for gear repacking and onward transfers.' }
    ]
  },
  'southern-tanzania-wilderness': {
    route: 'Dar es Salaam or Arusha → Southern park fly-in camps → Dar es Salaam/Zanzibar',
    startsEnds: 'Can start in Dar es Salaam or Arusha depending on flight logistics and extensions.',
    accommodation: 'Remote safari camps with strong wilderness character and low vehicle density.',
    groupSize: 'Best for 2–6 repeat safari travelers seeking quiet, remote parks.',
    bestTime: 'June to October is strongest for dry-season wildlife; some camps operate seasonally.',
    pace: 'Remote and immersive, with fly-in logistics and fewer crowds.',
    physicalLevel: 'Easy to moderate; walking or boating activities may have age and fitness requirements.',
    priceNote: 'Fly-in flights and remote camp operations make this a premium wilderness option.',
    meals: 'Full-board camp meals; picnic meals are arranged around activity schedules.',
    included: ['Domestic flight coordination when quoted', 'Camp accommodation and meals', 'Guided game activities as allowed by camp/park', 'Park and conservation fees', 'Transfers as quoted'],
    excluded: ['International flights', 'Visas and insurance', 'Premium drinks', 'Private vehicle unless specified', 'Tips and personal expenses'],
    itineraryDetailed: [
      { day: 1, title: 'Arrive and position for fly-in', location: 'Dar es Salaam or Arusha', accommodation: 'City or airport hotel', meals: 'Dinner', description: 'Arrive and prepare for the domestic flight to the wilderness area.' },
      { day: 2, title: 'Fly to remote camp', location: 'Southern Tanzania park', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Fly into camp, settle in, and enjoy your first afternoon activity if timing allows.' },
      { day: 3, title: 'Wilderness game viewing', location: 'Southern Tanzania park', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Explore riverine, woodland, and open habitats with fewer vehicles than busier circuits.' },
      { day: 4, title: 'Flexible camp activities', location: 'Southern Tanzania park', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Enjoy game drives and, where permitted, boating or walking activities arranged by camp.' },
      { day: 5, title: 'Second camp or deeper exploration', location: 'Southern Tanzania', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Move to a second area or spend more time in the same productive wilderness zone.' },
      { day: 6, title: 'Predators and landscapes', location: 'Southern Tanzania', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Search for lions, wild dogs where possible, elephants, buffalo, antelope, and dramatic scenery.' },
      { day: 7, title: 'Slow safari rhythm', location: 'Southern Tanzania', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Let guide recommendations and recent sightings shape the day.' },
      { day: 8, title: 'Final wilderness day', location: 'Southern Tanzania', accommodation: 'Remote safari camp', meals: 'Breakfast, lunch, dinner', description: 'Enjoy one more full day in camp before returning to the coast or city.' },
      { day: 9, title: 'Fly out', location: 'Dar es Salaam or Zanzibar connection', accommodation: 'Not included unless requested', meals: 'Breakfast', description: 'Fly back for your international departure or a Zanzibar beach extension.' }
    ]
  }
};

export const destinations = [
  {
    name: 'Serengeti National Park',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80',
    description: 'Endless plains, kopjes, big cats, and seasonal migration drama across one of Africa’s most famous ecosystems.',
    bestFor: 'Migration, lions, cheetahs, photography'
  },
  {
    name: 'Ngorongoro Crater',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=900&q=80',
    description: 'A wildlife-rich volcanic caldera where travelers can see a remarkable variety of animals in a compact day.',
    bestFor: 'Big Five chances, scenery, short stays'
  },
  {
    name: 'Tarangire National Park',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80',
    description: 'Ancient baobabs, dry-season elephant herds, river valleys, and quieter game drives on the northern circuit.',
    bestFor: 'Elephants, baobabs, birdlife'
  },
  {
    name: 'Lake Manyara National Park',
    image: 'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=900&q=80',
    description: 'Forest, escarpment views, monkeys, flamingos, and a gentle first or final safari day near Arusha.',
    bestFor: 'Compact drives, scenery, families'
  },
  {
    name: 'Kilimanjaro Region',
    image: 'https://images.unsplash.com/photo-1521150932951-303a95503ed3?auto=format&fit=crop&w=900&q=80',
    description: 'Waterfalls, coffee farms, day hikes, and communities on the slopes of Africa’s highest mountain.',
    bestFor: 'Culture, day hikes, coffee tours'
  },
  {
    name: 'Zanzibar',
    image: 'https://images.unsplash.com/photo-1589394760151-b4c9890765fe?auto=format&fit=crop&w=900&q=80',
    description: 'White-sand beaches, reefs, spice farms, dhow cruises, Stone Town history, and Swahili coastal culture.',
    bestFor: 'Beach extensions, honeymoons, snorkeling'
  }
];

export const experiences = [
  {
    slug: 'serengeti-balloon-safari',
    title: 'Serengeti Balloon Safari',
    image: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Float above the plains at sunrise before returning to the bush for a celebratory breakfast.',
    details:
      'A balloon safari adds a quiet, cinematic perspective to the Serengeti. It usually starts before sunrise, rises with the morning light, and finishes with breakfast in the bush before your guide continues the day’s game drive.',
    goodToKnow: ['Best booked early because seats are limited', 'Works well with central, southern, or northern Serengeti routing', 'Weather and operational conditions determine final timing']
  },
  {
    slug: 'maasai-cultural-visit',
    title: 'Maasai Cultural Visit',
    image: 'https://images.unsplash.com/photo-1528277342758-f1d7613953a2?auto=format&fit=crop&w=1200&q=80',
    summary: 'Meet local hosts for a respectful introduction to pastoral traditions, beadwork, homes, and daily life.',
    details:
      'A well-planned Maasai visit should feel like an exchange rather than a performance. We help arrange respectful stops with clear expectations, appropriate timing, and room for questions about culture, livestock, and changing community life.',
    goodToKnow: ['Ask before taking portraits', 'Can fit well between Ngorongoro and Serengeti', 'Community fees support local hosts']
  },
  {
    slug: 'mto-wa-mbu-village-walk',
    title: 'Mto wa Mbu Village Walk',
    image: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Explore markets, farms, local food, art workshops, and village life near Lake Manyara.',
    details:
      'Mto wa Mbu is a lively cultural stop where travelers can stretch their legs, taste local dishes, learn about banana farms, and meet artisans. It is a great contrast to vehicle-based safari days.',
    goodToKnow: ['Excellent for families and food lovers', 'Pairs naturally with Lake Manyara', 'Can be planned as a short walk or longer lunch experience']
  },
  {
    slug: 'lake-eyasi-hadzabe-datoga',
    title: 'Lake Eyasi Hadzabe & Datoga Experience',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Learn from Hadzabe hunter-gatherer and Datoga blacksmith communities near Lake Eyasi.',
    details:
      'Lake Eyasi offers a different cultural and landscape rhythm from the northern parks. With careful planning, guests can learn about Hadzabe bush skills and Datoga metalwork while keeping the visit respectful and appropriately paced.',
    goodToKnow: ['Early starts are common', 'Best with an overnight near Lake Eyasi', 'Cultural sensitivity is essential']
  },
  {
    slug: 'kilimanjaro-coffee-waterfalls',
    title: 'Kilimanjaro Coffee & Waterfalls',
    image: 'https://images.unsplash.com/photo-1521150932951-303a95503ed3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Spend a day on mountain slopes visiting coffee farms, waterfalls, and Chagga communities.',
    details:
      'This is a refreshing add-on before or after safari, especially for travelers who want mountain views without a full climb. You can roast coffee, walk to waterfalls, and enjoy a cooler highland pace.',
    goodToKnow: ['Good pre-safari acclimatization day', 'Bring comfortable walking shoes', 'Weather can change quickly in the foothills']
  },
  {
    slug: 'zanzibar-spice-and-stone-town',
    title: 'Zanzibar Spice & Stone Town',
    image: 'https://images.unsplash.com/photo-1589394760151-b4c9890765fe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Discover spice farms, Swahili coastal history, markets, doors, alleys, and oceanfront dining.',
    details:
      'Zanzibar is more than a beach extension. A guided Stone Town walk and spice farm visit add history, flavor, and context before you slow down at the coast.',
    goodToKnow: ['Works before or after beach days', 'Modest clothing is recommended in Stone Town', 'Can be paired with snorkeling or a dhow sunset cruise']
  }
];

export function findSafari(slug) {
  const safari = safariPackages.find((item) => item.slug === slug);

  if (!safari) {
    return undefined;
  }

  return { ...safari, ...safariDetails[slug] };
}

export function findExperience(slug) {
  return experiences.find((experience) => experience.slug === slug);
}

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
  return safariPackages.find((safari) => safari.slug === slug);
}

export function findExperience(slug) {
  return experiences.find((experience) => experience.slug === slug);
}

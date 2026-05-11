export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/safaris', label: 'Safaris' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const safariPackages = [
  {
    slug: 'best-of-northern-tanzania',
    title: 'Best of Northern Tanzania',
    duration: '5 days',
    style: 'Mid-range private safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    summary:
      'Tarangire elephants, Lake Manyara scenery, Ngorongoro Crater wildlife, and a cultural stop near Mto wa Mbu.',
    highlights: ['Tarangire National Park', 'Lake Manyara', 'Ngorongoro Crater', 'Private 4x4 guide']
  },
  {
    slug: 'serengeti-big-cats-crater',
    title: 'Serengeti Big Cats & Crater',
    duration: '7 days',
    style: 'Luxury lodge safari',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80',
    summary:
      'A classic private route focused on predator-rich Serengeti plains and a full morning on the Ngorongoro Crater floor.',
    highlights: ['Central Serengeti', 'Ngorongoro Crater', 'Handpicked lodges', 'Big cat country']
  },
  {
    slug: 'great-migration-explorer',
    title: 'Great Migration Explorer',
    duration: '8 days',
    style: 'Seasonal wildlife journey',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80',
    summary:
      'Follow wildebeest herds through Ndutu calving grounds or the northern Serengeti depending on your travel month.',
    highlights: ['Migration-focused routing', 'Ndutu or northern Serengeti', 'Flexible season plan', 'Photography time']
  },
  {
    slug: 'safari-zanzibar-escape',
    title: 'Safari & Zanzibar Escape',
    duration: '12 days',
    style: 'Bush and beach itinerary',
    image: 'https://images.unsplash.com/photo-1589394760151-b4c9890765fe?auto=format&fit=crop&w=900&q=80',
    summary:
      'Pair Tarangire, Serengeti, and Ngorongoro with a relaxed island stay for snorkeling, spice farms, and ocean sunsets.',
    highlights: ['Northern circuit parks', 'Zanzibar beach stay', 'Stone Town option', 'Domestic flight planning']
  }
];

export const destinations = [
  {
    name: 'Serengeti National Park',
    description: 'Endless plains, kopjes, big cats, and seasonal migration drama across one of Africa’s most famous ecosystems.',
    bestFor: 'Migration, lions, cheetahs, photography'
  },
  {
    name: 'Ngorongoro Crater',
    description: 'A wildlife-rich volcanic caldera where travelers can see a remarkable variety of animals in a compact day.',
    bestFor: 'Big Five chances, scenery, short stays'
  },
  {
    name: 'Tarangire National Park',
    description: 'Ancient baobabs, dry-season elephant herds, river valleys, and quieter game drives on the northern circuit.',
    bestFor: 'Elephants, baobabs, birdlife'
  },
  {
    name: 'Lake Manyara National Park',
    description: 'Forest, escarpment views, monkeys, flamingos, and a gentle first or final safari day near Arusha.',
    bestFor: 'Compact drives, scenery, families'
  },
  {
    name: 'Kilimanjaro Region',
    description: 'Waterfalls, coffee farms, day hikes, and communities on the slopes of Africa’s highest mountain.',
    bestFor: 'Culture, day hikes, coffee tours'
  },
  {
    name: 'Zanzibar',
    description: 'White-sand beaches, reefs, spice farms, dhow cruises, Stone Town history, and Swahili coastal culture.',
    bestFor: 'Beach extensions, honeymoons, snorkeling'
  }
];

// Optional experiences used by /experiences and referenced by safari detail pages.
// Kept as objects so pages can use `experience.slug` and render per-experience cards.
export const experiences = [
  {
    slug: 'hot-air-balloon-serengeti',
    title: 'Hot-air Balloon Over the Serengeti',
    summary: 'Float above the Serengeti at sunrise with a champagne-style celebration.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    details:
      'Enjoy a sunrise balloon flight over the Serengeti (weather and season dependent), followed by a light celebration breakfast in the bush.',
    goodToKnow: [
      'Flights are weather dependent; we confirm timing with you before takeoff.',
      'Most flights occur early morning with pick-up before dawn.',
      'Bring a light jacket and closed-toe shoes for landing.'
    ]
  },
  {
    slug: 'maasai-village-cultural',
    title: 'Maasai Village Cultural Visit',
    summary: 'Learn about traditions, crafts, and community life with a respectful local guide.',
    image:
      'https://images.unsplash.com/photo-1547035017-0f3c1a6b2a9b?auto=format&fit=crop&w=1200&q=80',
    details:
      'Visit a Maasai community for a guided introduction to crafts, home life, and cultural storytelling—designed to be respectful and educational.',
    goodToKnow: [
      'Always follow your guide’s instructions and ask before taking photos.',
      'Dress modestly and bring small cash for community-led activities if appropriate.'
    ]
  },
  {
    slug: 'mto-wa-mbu-market-cooking',
    title: 'Mto wa Mbu Market & Cooking',
    summary: 'Experience local flavors with a market walk, cooking session, and village stroll.',
    image:
      'https://images.unsplash.com/photo-1529692236671-f1f6cf61d1e5?auto=format&fit=crop&w=1200&q=80',
    details:
      'Start with a guided market walk, learn about regional ingredients, and then join a hands-on cooking session with a local host.',
    goodToKnow: [
      'You can usually accommodate vegetarian preferences with notice.',
      'We recommend comfortable shoes for the market and village walk.'
    ]
  },
  {
    slug: 'lake-eyasi-hadzabe-datoga',
    title: 'Lake Eyasi Hadzabe & Datoga Experience',
    summary: 'A fascinating cultural encounter focused on skills, storytelling, and sustainable traditions.',
    image:
      'https://images.unsplash.com/photo-1551879210-4c5f5f5f5f5f?auto=format&fit=crop&w=1200&q=80',
    details:
      'A guided cultural program focused on learning, listening, and understanding daily life around Lake Eyasi—supported by local hosts.',
    goodToKnow: [
      'It can be warm and dusty; bring sun protection and water.',
      'Photography and participation rules vary—your guide will advise before you start.'
    ]
  },
  {
    slug: 'kilimanjaro-coffee-tour',
    title: 'Kilimanjaro Coffee Tour',
    summary: 'Walk through coffee farms and learn how Tanzanian beans go from seed to cup.',
    image:
      'https://images.unsplash.com/photo-1508253578931-a6ce2e8f3d5a?auto=format&fit=crop&w=1200&q=80',
    details:
      'Explore coffee-growing areas, learn about processing methods, and enjoy a guided tasting with explanations of flavor and quality.',
    goodToKnow: [
      'Wear shoes suitable for farm paths.',
      'We can combine this with a nearby cultural stop if timing allows.'
    ]
  },
  {
    slug: 'zanzibar-spice-snorkel-stone-town',
    title: 'Zanzibar Spice Tour, Snorkel & Stone Town',
    summary: 'Spice plantations, reef time, and a guided history walk through Stone Town.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    details:
      'A full-day combination: guided spice plantation tour, reef snorkeling time (conditions permitting), and an evening stroll with history highlights in Stone Town.',
    goodToKnow: [
      'Snorkel timing depends on sea conditions.',
      'Let us know if you have any mobility or swim limitations in advance.'
    ]
  }
];

export const findSafari = (slug) => safariPackages.find((s) => s.slug === slug);

export const findExperience = (slug) => experiences.find((e) => e.slug === slug);

export const activities = [
  'Hot-air balloon safari over the Serengeti',
  'Respectful Maasai village visit',
  'Mto wa Mbu market, cooking, and village walk',
  'Hadzabe and Datoga cultural experience near Lake Eyasi',
  'Coffee tour around Mount Kilimanjaro or Mount Meru',
  'Zanzibar spice tour, reef snorkeling, and Stone Town walk'
];


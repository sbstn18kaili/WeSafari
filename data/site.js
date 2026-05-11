export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/safaris', label: 'Safaris' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const safariPackages = [
  {
    title: 'Best of Northern Tanzania',
    duration: '5 days',
    style: 'Mid-range private safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    summary:
      'Tarangire elephants, Lake Manyara scenery, Ngorongoro Crater wildlife, and a cultural stop near Mto wa Mbu.',
    highlights: ['Tarangire National Park', 'Lake Manyara', 'Ngorongoro Crater', 'Private 4x4 guide']
  },
  {
    title: 'Serengeti Big Cats & Crater',
    duration: '7 days',
    style: 'Luxury lodge safari',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80',
    summary:
      'A classic private route focused on predator-rich Serengeti plains and a full morning on the Ngorongoro Crater floor.',
    highlights: ['Central Serengeti', 'Ngorongoro Crater', 'Handpicked lodges', 'Big cat country']
  },
  {
    title: 'Great Migration Explorer',
    duration: '8 days',
    style: 'Seasonal wildlife journey',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80',
    summary:
      'Follow wildebeest herds through Ndutu calving grounds or the northern Serengeti depending on your travel month.',
    highlights: ['Migration-focused routing', 'Ndutu or northern Serengeti', 'Flexible season plan', 'Photography time']
  },
  {
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

export const activities = [
  'Hot-air balloon safari over the Serengeti',
  'Respectful Maasai village visit',
  'Mto wa Mbu market, cooking, and village walk',
  'Hadzabe and Datoga cultural experience near Lake Eyasi',
  'Coffee tour around Mount Kilimanjaro or Mount Meru',
  'Zanzibar spice tour, reef snorkeling, and Stone Town walk'
];

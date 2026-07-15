const local = {
  mainLawn: '/images/events/main-lawn.jpg',
  goldenLawn: '/images/events/golden-lawn.jpg',
  galleryMainLawn: '/images/gallery/main-lawn.jpg',
  sunnyLawn: '/images/gallery/sunny-lawn.jpg',
  gardenBench: '/images/gallery/garden-bench.jpg',
  treeCanopy: '/images/gallery/tree-canopy.jpg',
  lawnDetail: '/images/gallery/lawn-detail.jpg',
  gardenChair: '/images/gallery/garden-chair.jpg',
  gardenPhoto1: '/images/gallery/garden-photo-1.jpg',
  gardenPhoto2: '/images/gallery/garden-photo-2.jpg',
  gardenPhoto3: '/images/gallery/garden-photo-3.jpg',
  gardenPhoto4: '/images/gallery/garden-photo-4.jpg',
  gardenPhoto5: '/images/gallery/garden-photo-5.jpg',
}

export const events = [
  {
    id: 'wedding',
    chapterLabel: 'WEDDINGS',
    label: 'Weddings',
    scriptTitle: 'Garden Wedding',
    tagline: 'Exchange vows beneath floral arches and golden Thika light.',
    description:
      'Say "I do" surrounded by ancient trees, soft lawn underfoot, and petals drifting on the breeze. Our gardens frame your ceremony and reception with natural elegance.',
    highlights: ['Outdoor ceremony', 'Reception on the lawn', 'Bridal photoshoot'],
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80&auto=format&fit=crop',
    localImage: local.mainLawn,
    useLocal: true,
    objectPosition: 'center 35%',
    accent: '#f7941d',
    tint: 'rgba(0, 104, 55, 0.12)',
    bgShift: '#f4f9f6',
    gallery: [
      {
        src: local.galleryMainLawn,
        alt: 'Expansive main lawn at Markline Gardens',
        objectPosition: 'center 35%',
      },
      {
        src: local.sunnyLawn,
        alt: 'Sunlit lawn for an outdoor wedding',
        objectPosition: 'center 40%',
      },
      {
        src: local.treeCanopy,
        alt: 'Tree canopy framing the ceremony space',
        objectPosition: 'center top',
      },
      {
        src: local.gardenPhoto1,
        alt: 'Garden view at Markline Gardens',
        objectPosition: 'center center',
      },
    ],
  },
  {
    id: 'graduation',
    chapterLabel: 'TEAM BUILDING',
    label: 'Team Building',
    scriptTitle: 'Team Building',
    tagline: 'Bring your team together in a serene garden setting.',
    description:
      'Break away from the boardroom. Facilitate connection, creativity, and collaboration on open lawns with room to move, think, and recharge among nature.',
    highlights: ['Outdoor workshops', 'Group activities', 'Catered breaks'],
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop',
    localImage: local.goldenLawn,
    useLocal: true,
    objectPosition: 'center 35%',
    accent: '#006837',
    tint: 'rgba(0, 104, 55, 0.15)',
    bgShift: '#eef5f0',
    gallery: [
      {
        src: local.goldenLawn,
        alt: 'Golden lawn for team activities',
        objectPosition: 'center 35%',
      },
      {
        src: local.sunnyLawn,
        alt: 'Open sunlit grounds for group sessions',
        objectPosition: 'center 40%',
      },
      {
        src: local.gardenPhoto2,
        alt: 'Spacious garden grounds at Markline',
        objectPosition: 'center center',
      },
      {
        src: local.lawnDetail,
        alt: 'Lush green lawn underfoot',
        objectPosition: 'center center',
      },
    ],
  },
  {
    id: 'picnic',
    chapterLabel: 'PICNICS',
    label: 'Picnics',
    scriptTitle: 'Summer Picnic',
    tagline: 'Spread blankets on lush lawns — draw, eat, and linger under the trees.',
    description:
      'Whether a family day out or a friends\' gathering, our gardens invite slow afternoons of laughter, food, and sunshine beneath the canopy.',
    highlights: ['Blanket setups', 'Kids play areas', 'Shaded corners'],
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop',
    localImage: local.sunnyLawn,
    useLocal: true,
    objectPosition: 'center 40%',
    accent: '#f9b04d',
    tint: 'rgba(247, 148, 29, 0.12)',
    bgShift: '#fff8f0',
    gallery: [
      {
        src: local.sunnyLawn,
        alt: 'Sunlit lawn perfect for picnics',
        objectPosition: 'center 40%',
      },
      {
        src: local.lawnDetail,
        alt: 'Lush grass for blanket picnics',
        objectPosition: 'center center',
      },
      {
        src: local.gardenPhoto3,
        alt: 'Relaxed garden setting at Markline',
        objectPosition: 'center center',
      },
      {
        src: local.gardenChair,
        alt: 'Garden seating among the trees',
        objectPosition: 'center center',
      },
    ],
  },
  {
    id: 'ruracio',
    chapterLabel: 'PRAYER RETREAT',
    label: 'Prayer Retreat',
    scriptTitle: 'Prayer Retreat',
    tagline: 'Find peace and reflection amid lush greenery.',
    description:
      'Step away from the noise. Our quiet garden corners offer a sacred space for prayer, meditation, and spiritual renewal surrounded by creation.',
    highlights: ['Quiet garden spaces', 'Group prayer areas', 'Reflection walks'],
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop',
    localImage: local.gardenBench,
    useLocal: true,
    objectPosition: 'center center',
    accent: '#f7941d',
    tint: 'rgba(247, 148, 29, 0.1)',
    bgShift: '#f6f9f4',
    gallery: [
      {
        src: local.gardenBench,
        alt: 'Quiet garden bench for reflection',
        objectPosition: 'center center',
      },
      {
        src: local.treeCanopy,
        alt: 'Peaceful tree canopy overhead',
        objectPosition: 'center top',
      },
      {
        src: local.gardenPhoto4,
        alt: 'Serene corner of Markline Gardens',
        objectPosition: 'center center',
      },
      {
        src: local.lawnDetail,
        alt: 'Soft lawn paths for walking meditation',
        objectPosition: 'center center',
      },
    ],
  },
  {
    id: 'birthday',
    chapterLabel: 'PHOTOGRAPHY',
    label: 'Photo & Video',
    scriptTitle: 'Photo & Video',
    tagline: 'Capture timeless memories in a picture-perfect garden.',
    description:
      'From engagement shoots to commercial campaigns, Markline Gardens delivers layered backdrops — canopy, lawn, golden light, and natural depth in every frame.',
    highlights: ['Multiple backdrops', 'Natural lighting', 'Drone-friendly space'],
    image:
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80&auto=format&fit=crop',
    localImage: local.treeCanopy,
    useLocal: true,
    objectPosition: 'center top',
    accent: '#f7941d',
    tint: 'rgba(0, 104, 55, 0.12)',
    bgShift: '#f8f6f2',
    gallery: [
      {
        src: local.treeCanopy,
        alt: 'Dramatic tree canopy backdrop',
        objectPosition: 'center top',
      },
      {
        src: local.galleryMainLawn,
        alt: 'Wide lawn shot for photography',
        objectPosition: 'center 35%',
      },
      {
        src: local.gardenPhoto5,
        alt: 'Garden landscape at Markline Gardens',
        objectPosition: 'center center',
      },
      {
        src: local.goldenLawn,
        alt: 'Golden afternoon light on the lawn',
        objectPosition: 'center 40%',
      },
    ],
  },
]

export function getEventImage(event) {
  return event.useLocal ? event.localImage : event.image
}

export function getGalleryImage(item) {
  return item.src
}

export const heroImage =
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=85&auto=format&fit=crop'

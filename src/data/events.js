const local = {
  mainLawn: '/images/events/main-lawn.jpg',
  goldenLawn: '/images/events/golden-lawn.jpg',
  galleryMainLawn: '/images/gallery/main-lawn.jpg',
  sunnyLawn: '/images/gallery/sunny-lawn.jpg',
  treeCanopy: '/images/gallery/tree-canopy.jpg',
  gardenPhoto2: '/images/gallery/garden-photo-2.jpg',
  gardenPhoto4: '/images/gallery/garden-photo-4.jpg',
  graduationTent: '/images/graduation/20260718_122718.jpg',
  graduationCelebration: '/images/graduation/20260718_122721.jpg',
  graduationWelcome: '/images/graduation/20260718_122739.jpg',
  graduationCatering: '/images/graduation/20260718_122747.jpg',
  graduationReception: '/images/graduation/20260718_132437.jpg',
  picnicPaint: '/images/picnic/picnic-paint.jpg',
  picnicEasels: '/images/picnic/picnic-easels.jpg',
  picnicSpread: '/images/picnic/picnic-spread.jpg',
}

export const events = [
  {
    id: 'graduation',
    chapterLabel: 'GRADUATION',
    label: 'Graduation',
    scriptTitle: 'Graduation',
    tagline: 'Cap off years of hard work with a garden celebration to remember.',
    description:
      'Proud families, caps in the air, and a lawn dressed for the occasion. Markline Gardens hosts graduation parties with room for ceremony, photos, and a reception under the trees.',
    highlights: ['Outdoor ceremony', 'Family photos', 'Garden reception'],
    image:
      'https://images.unsplash.com/photo-1523050854058-8cb901877ae7?w=1600&q=80&auto=format&fit=crop',
    localImage: local.graduationTent,
    useLocal: true,
    objectPosition: 'center center',
    accent: '#f7941d',
    tint: 'rgba(247, 148, 29, 0.12)',
    bgShift: '#fff8f0',
    gallery: [
      {
        src: local.graduationCelebration,
        alt: 'Blue and gold tent setup for a graduation celebration',
        objectPosition: 'center center',
      },
      {
        src: local.graduationWelcome,
        alt: 'Welcome to my Graduation Party sign in the garden',
        objectPosition: 'center center',
      },
      {
        src: local.graduationCatering,
        alt: 'Catering table under a garden tent',
        objectPosition: 'center center',
      },
      {
        src: local.graduationReception,
        alt: 'Lawn reception with blue and gold tables',
        objectPosition: 'center center',
      },
    ],
  },
  {
    id: 'teambuilding',
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
    objectPosition: 'center center',
    accent: '#006837',
    tint: 'rgba(0, 104, 55, 0.15)',
    bgShift: '#eef5f0',
    gallery: [
      {
        src: local.sunnyLawn,
        alt: 'Open sunlit grounds for group sessions',
        objectPosition: 'center center',
      },
      {
        src: local.gardenPhoto2,
        alt: 'Spacious garden grounds at Markline',
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
    localImage: local.picnicPaint,
    useLocal: true,
    objectPosition: 'center center',
    accent: '#f9b04d',
    tint: 'rgba(247, 148, 29, 0.12)',
    bgShift: '#fff8f0',
    gallery: [
      {
        src: local.picnicEasels,
        alt: 'Paint and picnic easels set out on garden blankets',
        objectPosition: 'center center',
      },
      {
        src: local.picnicSpread,
        alt: 'Picnic food spread on a striped blanket',
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
    localImage: local.gardenPhoto4,
    useLocal: true,
    objectPosition: 'center center',
    accent: '#f7941d',
    tint: 'rgba(247, 148, 29, 0.1)',
    bgShift: '#f6f9f4',
    gallery: [
      {
        src: local.treeCanopy,
        alt: 'Peaceful tree canopy overhead',
        objectPosition: 'center center',
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

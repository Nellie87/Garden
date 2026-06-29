export const events = [
  {
    id: 'wedding',
    label: 'Events',
    scriptTitle: 'Garden Wedding',
    tagline: 'Exchange vows beneath floral arches and golden Thika light.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80&auto=format&fit=crop',
    localImage: '/images/events/main-lawn.jpg',
    useLocal: true,
    objectPosition: 'center 35%',
    accent: '#f7941d',
    tint: 'rgba(0, 104, 55, 0.18)',
  },
  {
    id: 'picnic',
    label: 'Picnics',
    scriptTitle: 'Summer Picnic',
    tagline: 'Spread blankets on lush lawns — draw, eat, and linger under the trees.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop',
    localImage: '/images/events/golden-lawn.jpg',
    useLocal: true,
    objectPosition: 'center 40%',
    accent: '#f9b04d',
    tint: 'rgba(247, 148, 29, 0.15)',
  },
  {
    id: 'graduation',
    label: 'Team Building',
    scriptTitle: 'Team Building',
    tagline: 'Bring your team together in a serene garden setting.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80&auto=format&fit=crop',
    localImage: '/images/events/main-lawn.jpg',
    useLocal: true,
    objectPosition: 'center 35%',
    accent: '#006837',
    tint: 'rgba(0, 104, 55, 0.2)',
  },
  {
    id: 'ruracio',
    label: 'Prayer Retreat',
    scriptTitle: 'Prayer Retreat',
    tagline: 'Find peace and reflection amid lush greenery.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop',
    localImage: '/images/gallery/garden-bench.jpg',
    useLocal: true,
    objectPosition: 'center center',
    accent: '#f7941d',
    tint: 'rgba(247, 148, 29, 0.12)',
  },
  {
    id: 'birthday',
    label: 'Photo | Video',
    scriptTitle: 'Photo & Video',
    tagline: 'Capture timeless memories in a picture-perfect garden.',
    image:
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=80&auto=format&fit=crop',
    localImage: '/images/gallery/tree-canopy.jpg',
    useLocal: true,
    objectPosition: 'center top',
    accent: '#f7941d',
    tint: 'rgba(0, 104, 55, 0.15)',
  },
]

export function getEventImage(event) {
  return event.useLocal ? event.localImage : event.image
}

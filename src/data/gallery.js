export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'gardens', label: 'Gardens' },
  { id: 'graduation', label: 'Graduation' },
  { id: 'picnic', label: 'Picnic' },
]

export const galleryPhotos = [
  {
    id: 1,
    src: '/images/gallery/main-lawn.jpg',
    alt: 'Expansive lawn surrounded by trees at Markline Gardens',
    caption: 'The main lawn',
    category: 'gardens',
    objectPosition: 'center center',
  },
  {
    id: 2,
    src: '/images/gallery/sunny-lawn.jpg',
    alt: 'Sunlit green lawn with tree-lined border',
    caption: 'Golden afternoon',
    category: 'gardens',
    objectPosition: 'center center',
  },
  {
    id: 4,
    src: '/images/gallery/tree-canopy.jpg',
    alt: 'Tall trees reaching into the sky at Markline Gardens',
    caption: 'Under the canopy',
    category: 'gardens',
    objectPosition: 'center center',
  },
  {
    id: 6,
    src: '/images/graduation/20260718_122718.jpg',
    alt: 'Blue and gold graduation tent on the lawn at Markline Gardens',
    caption: 'Graduation reception',
    category: 'graduation',
    objectPosition: 'center center',
  },
  {
    id: 7,
    src: '/images/gallery/garden-photo-2.jpg',
    alt: 'Tree-lined lawn at Markline Gardens',
    caption: 'Tree-lined paths',
    category: 'gardens',
    objectPosition: 'center center',
  },
  {
    id: 9,
    src: '/images/gallery/garden-photo-4.jpg',
    alt: 'Shaded garden corner at Markline Gardens',
    caption: 'Shaded retreats',
    category: 'gardens',
    objectPosition: 'center center',
  },
  {
    id: 10,
    src: '/images/gallery/garden-photo-5.jpg',
    alt: 'Lush greenery at Markline Gardens',
    caption: 'Lush greenery',
    category: 'gardens',
    objectPosition: 'center center',
  },
  {
    id: 11,
    src: '/images/graduation/20260718_122739.jpg',
    alt: 'Welcome to my Graduation Party sign in the garden',
    caption: 'Graduation welcome',
    category: 'graduation',
    objectPosition: 'center center',
  },
  {
    id: 12,
    src: '/images/graduation/20260718_122721.jpg',
    alt: 'Graduation celebration tents with blue and gold tables',
    caption: 'Celebration tents',
    category: 'graduation',
    objectPosition: 'center center',
  },
  {
    id: 13,
    src: '/images/graduation/20260718_122747.jpg',
    alt: 'Catering table under a garden tent at a graduation party',
    caption: 'Garden catering',
    category: 'graduation',
    objectPosition: 'center center',
  },
  {
    id: 14,
    src: '/images/graduation/20260718_132437.jpg',
    alt: 'Lawn reception with blue and gold table settings',
    caption: 'Lawn reception',
    category: 'graduation',
    objectPosition: 'center center',
  },
  {
    id: 15,
    src: '/images/picnic/picnic-paint.jpg',
    alt: 'Paint and picnic setup on blankets at Markline Gardens',
    caption: 'Picnic and paint',
    category: 'picnic',
    objectPosition: 'center center',
  },
  {
    id: 16,
    src: '/images/picnic/picnic-easels.jpg',
    alt: 'Mini easels and paints arranged on a garden picnic blanket',
    caption: 'Picnic easels',
    category: 'picnic',
    objectPosition: 'center center',
  },
  {
    id: 17,
    src: '/images/picnic/picnic-spread.jpg',
    alt: 'Picnic food spread on a striped blanket in the garden',
    caption: 'Picnic spread',
    category: 'picnic',
    objectPosition: 'center center',
  },
]

export function getGallerySrc(photo) {
  return photo.src || photo.placeholder
}

export function getPhotosByCategory(category) {
  if (!category || category === 'all') return galleryPhotos
  return galleryPhotos.filter((photo) => photo.category === category)
}

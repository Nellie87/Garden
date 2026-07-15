export const galleryPhotos = [
  {
    id: 1,
    src: '/images/gallery/main-lawn.jpg',
    alt: 'Expansive lawn surrounded by trees at Markline Gardens',
    caption: 'The main lawn',
    objectPosition: 'center 35%',
  },
  {
    id: 2,
    src: '/images/gallery/sunny-lawn.jpg',
    alt: 'Sunlit green lawn with tree-lined border',
    caption: 'Golden afternoon',
    objectPosition: 'center 40%',
  },
  {
    id: 3,
    src: '/images/gallery/garden-bench.jpg',
    alt: 'Stone bench nestled between trees and hedges',
    caption: 'Quiet corners',
    objectPosition: 'center center',
  },
  {
    id: 4,
    src: '/images/gallery/tree-canopy.jpg',
    alt: 'Tall trees reaching into the sky at Markline Gardens',
    caption: 'Under the canopy',
    objectPosition: 'center top',
  },
  {
    id: 5,
    src: '/images/gallery/lawn-detail.jpg',
    alt: 'Lush green grass close-up',
    caption: 'Ground-level lushness',
    objectPosition: 'center center',
  },
  {
    id: 6,
    src: '/images/gallery/garden-photo-1.jpg',
    alt: 'Garden grounds at Markline Gardens',
    caption: 'Garden grounds',
    objectPosition: 'center center',
  },
  {
    id: 7,
    src: '/images/gallery/garden-photo-2.jpg',
    alt: 'Tree-lined lawn at Markline Gardens',
    caption: 'Tree-lined paths',
    objectPosition: 'center center',
  },
  {
    id: 8,
    src: '/images/gallery/garden-photo-3.jpg',
    alt: 'Open garden space at Markline Gardens',
    caption: 'Open spaces',
    objectPosition: 'center center',
  },
  {
    id: 9,
    src: '/images/gallery/garden-photo-4.jpg',
    alt: 'Shaded garden corner at Markline Gardens',
    caption: 'Shaded retreats',
    objectPosition: 'center center',
  },
  {
    id: 10,
    src: '/images/gallery/garden-photo-5.jpg',
    alt: 'Lush greenery at Markline Gardens',
    caption: 'Lush greenery',
    objectPosition: 'center center',
  },
  {
    id: 11,
    src: '/images/gallery/garden-chair.jpg',
    alt: 'Garden seating at Markline Gardens',
    caption: 'Garden seating',
    objectPosition: 'center center',
  },
]

export function getGallerySrc(photo) {
  return photo.src || photo.placeholder
}

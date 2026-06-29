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
]

export function getGallerySrc(photo) {
  return photo.src || photo.placeholder
}

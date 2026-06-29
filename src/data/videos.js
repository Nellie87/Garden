/**
 * Drop venue videos in public/videos/ then list them here.
 * Supported formats: mp4, webm
 */
export const venueVideos = [
  // Example when you add a file:
  // {
  //   id: 'walkthrough',
  //   src: '/videos/garden-walkthrough.mp4',
  //   poster: '/images/gallery/main-lawn.jpg',
  //   caption: 'A walk through the gardens',
  // },
]

export function hasVenueVideos() {
  return venueVideos.length > 0
}

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { galleryPhotos, getGallerySrc } from '../data/gallery'
import { hasVenueVideos, venueVideos } from '../data/videos'
import AmbientOrbs from './AmbientOrbs'
import styles from './Gallery.module.css'

function GalleryItem({ photo, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.figure
      className={styles.item}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imgWrap}>
        <motion.img
          src={getGallerySrc(photo)}
          alt={photo.alt}
          loading="lazy"
          style={{ objectPosition: photo.objectPosition || 'center center' }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className={styles.imgOverlay} />
        <figcaption className={styles.caption}>
          <span className={styles.captionText}>{photo.caption}</span>
        </figcaption>
      </div>
    </motion.figure>
  )
}

export default function Gallery() {
  const ref = useRef(null)

  return (
    <section id="gallery" className={styles.section} ref={ref}>
      <AmbientOrbs variant="light" />
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className={styles.eyebrow}>From the Ground</p>
          <h2 className={styles.title}>
            Walk Through <em>Markline</em>
          </h2>
          <p className={styles.subtitle}>
            Real ground-level views from our Kiganjo gardens.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {galleryPhotos.map((photo, i) => (
            <GalleryItem key={photo.id} photo={photo} index={i} />
          ))}
        </div>

        {hasVenueVideos() && (
          <motion.div
            className={styles.videoSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className={styles.videoEyebrow}>On Film</p>
            <div className={styles.videoGrid}>
              {venueVideos.map((video) => (
                <figure key={video.id} className={styles.videoItem}>
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                  />
                  <figcaption>{video.caption}</figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

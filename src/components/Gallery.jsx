import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryPhotos, getGallerySrc } from '../data/gallery'
import { hasVenueVideos, venueVideos } from '../data/videos'
import AmbientOrbs from './AmbientOrbs'
import styles from './Gallery.module.css'

const AUTO_MS = 5000

function useSlideOffset() {
  const [offset, setOffset] = useState(360)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setOffset(w < 480 ? 200 : w < 768 ? 280 : 360)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return offset
}

export default function Gallery() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStart = useRef(null)
  const resumeTimer = useRef(null)
  const slideOffset = useSlideOffset()
  const total = galleryPhotos.length

  const goTo = useCallback((index) => {
    setActive((index + total) % total)
  }, [total])

  const prev = useCallback(() => goTo(active - 1), [active, goTo])
  const next = useCallback(() => goTo(active + 1), [active, goTo])

  const pauseBriefly = () => {
    setPaused(true)
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => setPaused(false), AUTO_MS * 2)
  }

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, AUTO_MS)
    return () => clearInterval(timer)
  }, [paused, total])

  useEffect(() => () => clearTimeout(resumeTimer.current), [])

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
    setPaused(true)
  }

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) next()
      else prev()
    }
    touchStart.current = null
    pauseBriefly()
  }

  return (
    <section id="gallery" className={styles.section}>
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

        <div
          className={styles.carouselWrap}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className={styles.stageGlow} aria-hidden="true" />

          <button
            type="button"
            onClick={() => { prev(); pauseBriefly() }}
            className={`${styles.arrow} ${styles.arrowPrev}`}
            aria-label="Previous photo"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => { next(); pauseBriefly() }}
            className={`${styles.arrow} ${styles.arrowNext}`}
            aria-label="Next photo"
          >
            <ChevronRight size={18} />
          </button>

          <div
            className={styles.stage}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {galleryPhotos.map((photo, index) => {
              const offset = index - active
              const isCenter = offset === 0

              if (Math.abs(offset) > 2) return null

              return (
                <div
                  key={photo.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    if (!isCenter) {
                      goTo(index)
                      pauseBriefly()
                    }
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === 'Enter' || e.key === ' ') && !isCenter) {
                      e.preventDefault()
                      goTo(index)
                      pauseBriefly()
                    }
                  }}
                  className={`${styles.slide} ${isCenter ? styles.slideCenter : ''}`}
                  style={{
                    transform: `translateX(${offset * slideOffset}px) scale(${isCenter ? 1 : 0.84}) rotate(${isCenter ? 0 : offset * 1.5}deg)`,
                    zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                    opacity: Math.abs(offset) === 2 ? 0.4 : 1,
                  }}
                >
                  <div className={`${styles.card} ${isCenter ? styles.cardCenter : ''}`}>
                    {isCenter && (
                      <>
                        <span className={styles.cardArc} aria-hidden="true" />
                        <span className={styles.cardIndex}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </>
                    )}
                    <img
                      src={getGallerySrc(photo)}
                      alt={photo.alt}
                      loading={index <= 2 ? 'eager' : 'lazy'}
                      draggable={false}
                      className={isCenter ? styles.cardImgActive : ''}
                      style={{ objectPosition: photo.objectPosition || 'center center' }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <motion.p
            key={active}
            className={styles.activeCaption}
            aria-live="polite"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <MapPin size={14} strokeWidth={2} aria-hidden="true" />
            {galleryPhotos[active].caption} · Kiganjo, Thika
          </motion.p>

          <div className={styles.dots} role="tablist" aria-label="Gallery slides">
            {galleryPhotos.map((photo, i) => (
              <button
                key={photo.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={photo.caption}
                className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                onClick={() => { goTo(i); pauseBriefly() }}
              >
                {i === active && !paused && (
                  <motion.span
                    className={styles.dotProgress}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_MS / 1000, ease: 'linear' }}
                    key={`progress-${active}`}
                  />
                )}
              </button>
            ))}
          </div>
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

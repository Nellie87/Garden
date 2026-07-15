import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  TreePine,
  Users,
  Sun,
  Camera,
  Star,
  Check,
} from 'lucide-react'
import { events, getEventImage, getGalleryImage } from '../data/events'
import styles from './Experiences.module.css'

const icons = {
  wedding: Heart,
  picnic: TreePine,
  graduation: Users,
  ruracio: Sun,
  birthday: Camera,
}

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

function EventChapter({ event, chapterRef, index, onInView }) {
  const [heroIdx, setHeroIdx] = useState(0)
  const heroSrc = heroIdx === 0 ? getEventImage(event) : getGalleryImage(event.gallery[heroIdx - 1])
  const heroPosition =
    heroIdx === 0
      ? event.objectPosition || 'center center'
      : event.gallery[heroIdx - 1]?.objectPosition || 'center center'

  return (
    <article
      ref={chapterRef}
      id={`chapter-${event.id}`}
      className={styles.chapter}
      style={{ '--chapter-bg': event.bgShift, '--chapter-accent': event.accent }}
      data-chapter={index}
    >
      <div className={styles.chapterInner}>
        <motion.div
          className={styles.chapterLabel}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => onInView(index)}
        >
          <span className={styles.labelLine} />
          <span>{event.chapterLabel}</span>
          <span className={styles.labelLine} />
        </motion.div>

        <div className={styles.cinematic}>
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSrc}
              className={styles.cinematicImg}
              style={{
                backgroundImage: `url(${heroSrc})`,
                backgroundPosition: heroPosition,
              }}
              initial={{ opacity: 0, scale: 1.12, filter: 'blur(8px) brightness(0.9)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' }}
              exit={{ opacity: 0, scale: 1.04, filter: 'blur(4px)' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>
          <div className={styles.cinematicOverlay} />
          <motion.div
            className={styles.cinematicCaption}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className={styles.captionScript} style={{ color: event.accent }}>
              {event.scriptTitle}
            </p>
            <p className={styles.captionTagline}>{event.tagline}</p>
          </motion.div>
        </div>

        {event.gallery.length > 0 && (
          <div className={styles.thumbs} role="list" aria-label={`${event.label} gallery`}>
            <button
              type="button"
              role="listitem"
              className={`${styles.thumb} ${heroIdx === 0 ? styles.thumbActive : ''}`}
              onClick={() => setHeroIdx(0)}
              aria-label={`Main ${event.label} image`}
            >
              <img src={getEventImage(event)} alt="" loading="lazy" />
            </button>
            {event.gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                role="listitem"
                className={`${styles.thumb} ${heroIdx === i + 1 ? styles.thumbActive : ''}`}
                onClick={() => setHeroIdx(i + 1)}
                aria-label={photo.alt}
              >
                <img src={getGalleryImage(photo)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <motion.div
          className={styles.details}
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className={styles.detailsMain}>
            <motion.div className={styles.titleRow} variants={fadeUp}>
              <h3 className={styles.eventTitle}>{event.label}</h3>
              <div className={styles.stars} aria-label="5 star venue">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </motion.div>

            <motion.p className={styles.description} variants={fadeUp}>
              {event.description}
            </motion.p>
          </div>

          <motion.div className={styles.detailsSide} variants={fadeUp}>
            <p className={styles.perfectFor}>Perfect For</p>
            <ul className={styles.highlights}>
              {event.highlights.map((item) => (
                <li key={item}>
                  <Check size={16} strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.ctaGroup}>
              <motion.a
                href="#contact"
                className={styles.ctaPrimary}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Reserve This Experience
              </motion.a>
              <a href="#gallery" className={styles.ctaSecondary}>
                View Gallery
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.chapterDivider} aria-hidden="true" />
    </article>
  )
}

export default function Experiences() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapterRefs = useRef([])
  const sectionRef = useRef(null)
  const [navVisible, setNavVisible] = useState(false)

  const scrollToChapter = useCallback((index) => {
    chapterRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  useEffect(() => {
    const observers = chapterRefs.current.map((el, index) => {
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
            setActiveChapter(index)
          }
        },
        { rootMargin: '-30% 0px -45% 0px', threshold: [0, 0.35, 0.6] },
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(entry.isIntersecting),
      { threshold: 0.05 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const activeEvent = events[activeChapter]

  return (
    <section id="experiences" className={styles.section} ref={sectionRef}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
      >
        <p className={styles.eyebrow}>Events</p>
        <h2 className={styles.title}>
          Curated Garden <em>Experiences</em>
        </h2>
        <p className={styles.quote}>&ldquo;Every celebration has a home.&rdquo;</p>
      </motion.header>

      <nav
        className={`${styles.stickyNav} ${navVisible ? styles.stickyNavVisible : ''}`}
        aria-label="Experience chapters"
      >
        <div className={styles.navIcons}>
          {events.map((event, i) => {
            const Icon = icons[event.id]
            const isActive = i === activeChapter
            return (
              <button
                key={event.id}
                type="button"
                className={`${styles.navDot} ${isActive ? styles.navDotActive : ''}`}
                onClick={() => scrollToChapter(i)}
                aria-label={event.label}
                aria-current={isActive ? 'true' : undefined}
                style={{ '--dot-accent': event.accent }}
              >
                <span className={styles.navCircle}>
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                <span className={styles.navTooltip}>{event.label}</span>
              </button>
            )
          })}
        </div>
        <AnimatePresence mode="wait">
          {activeEvent && (
            <motion.p
              key={activeEvent.id}
              className={styles.navLabel}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              style={{ color: activeEvent.accent }}
            >
              {activeEvent.label}
            </motion.p>
          )}
        </AnimatePresence>
      </nav>

      <div className={styles.chapters}>
        {events.map((event, i) => (
          <EventChapter
            key={event.id}
            event={event}
            index={i}
            chapterRef={(el) => {
              chapterRefs.current[i] = el
            }}
            onInView={setActiveChapter}
          />
        ))}
      </div>
    </section>
  )
}

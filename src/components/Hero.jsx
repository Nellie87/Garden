import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  TreePine,
  Users,
  Sun,
  Camera,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { events, getEventImage } from '../data/events'
import Logo from './Logo'
import styles from './Hero.module.css'

const icons = {
  wedding: Heart,
  picnic: TreePine,
  graduation: Users,
  ruracio: Sun,
  birthday: Camera,
}

export default function Hero() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(0)
  const current = events[active]

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const next = () => goTo((active + 1) % events.length)
  const prev = () => goTo((active - 1 + events.length) % events.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActive((prev) => (prev + 1) % events.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const activeImage = getEventImage(current)
  const nextEvent = events[(active + 1) % events.length]
  const nextImage = getEventImage(nextEvent)

  return (
    <section id="experiences" className={styles.hero}>
      <div className={styles.ambient}>
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${active}`}
            className={styles.ambientImg}
            style={{ backgroundImage: `url(${activeImage})` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
        <div className={styles.ambientBlur} />
        <div className={styles.ambientTint} style={{ background: current.tint }} />
      </div>

      <motion.h1
        className={styles.pageTitle}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        Curate Your Unforgettable Event
      </motion.h1>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.cardInner}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              className={styles.splitView}
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={styles.splitLeft}
                style={{
                  backgroundImage: `url(${activeImage})`,
                  backgroundPosition: current.objectPosition || 'center center',
                }}
              />
              <div
                className={styles.splitRight}
                style={{
                  backgroundImage: `url(${nextImage})`,
                  backgroundPosition: nextEvent.objectPosition || 'center center',
                }}
              />
              <div className={styles.splitLine} />
            </motion.div>
          </AnimatePresence>

          <div className={styles.vignette} />
          <div
            className={styles.colorWash}
            style={{ background: `linear-gradient(135deg, ${current.tint}, transparent 60%)` }}
          />

          <div className={styles.overlay}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className={styles.overlayText}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <p className={styles.scriptTitle} style={{ color: current.accent }}>
                  {current.scriptTitle}
                </p>
                <div className={styles.brandLogo}>
                  <Logo variant="light" size="lg" showTagline />
                </div>
                <p className={styles.tagline}>{current.tagline}</p>
                <a href="#contact" className={styles.exploreBtn}>
                  Explore Experiences
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.navArrows}>
            <button onClick={prev} aria-label="Previous experience">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label="Next experience">
              <ChevronRight size={18} />
            </button>
          </div>

          <nav className={styles.glassDock} aria-label="Event types">
            {events.map((event, i) => {
              const Icon = icons[event.id]
              const isActive = i === active
              return (
                <button
                  key={event.id}
                  className={`${styles.dockItem} ${isActive ? styles.dockActive : ''}`}
                  onClick={() => goTo(i)}
                >
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{event.label}</span>
                  {isActive && (
                    <motion.span
                      className={styles.dockProgress}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 8, ease: 'linear' }}
                      key={`progress-${active}`}
                    />
                  )}
                </button>
              )
            })}
          </nav>
        </div>
      </motion.div>

      <motion.p
        className={styles.locationHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Kiganjo, Thika · Kiambu County
      </motion.p>
    </section>
  )
}

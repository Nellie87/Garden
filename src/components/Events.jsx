import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, GraduationCap, TreePine, Sparkles, Cake } from 'lucide-react'
import EventScene from './EventScenes'
import styles from './Events.module.css'

const events = [
  {
    id: 'wedding',
    label: 'Weddings',
    icon: Heart,
    tagline: 'Say "I do" surrounded by nature',
    description:
      'Exchange vows beneath a floral arch, with golden light filtering through the trees and petals drifting on the breeze.',
  },
  {
    id: 'graduation',
    label: 'Graduations',
    icon: GraduationCap,
    tagline: 'Celebrate academic milestones',
    description:
      'Cap off years of hard work with an open-air ceremony — caps in the air, proud families, and a garden full of joy.',
  },
  {
    id: 'picnic',
    label: 'Picnics',
    icon: TreePine,
    tagline: 'Gather under open skies',
    description:
      'Spread a blanket on lush lawns, share good food, and let butterflies and sunshine set the perfect relaxed mood.',
  },
  {
    id: 'ruracio',
    label: 'Ruracio',
    icon: Sparkles,
    tagline: 'Honor tradition in beauty',
    description:
      'Host your traditional ceremony amid vibrant colors, rhythmic drums, and the warmth of family in a serene garden setting.',
  },
  {
    id: 'birthday',
    label: 'Birthdays',
    icon: Cake,
    tagline: 'Parties that feel magical',
    description:
      'Balloons, cake, and laughter — create unforgettable birthday celebrations for all ages in our enchanting garden.',
  },
]

export default function Events() {
  const [active, setActive] = useState('wedding')
  const current = events.find((e) => e.id === active)

  return (
    <section id="events" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.eyebrow}>What We Host</p>
          <h2 className={styles.title}>
            Events That Come <em>Alive</em>
          </h2>
          <p className={styles.subtitle}>
            Select an occasion to see how Markline Gardens brings it to life.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <div className={styles.tabs}>
            {events.map((event) => {
              const Icon = event.icon
              const isActive = active === event.id
              return (
                <button
                  key={event.id}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActive(event.id)}
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{event.label}</span>
                  {isActive && (
                    <motion.div
                      className={styles.tabIndicator}
                      layoutId="tabIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className={styles.showcase}>
            <div className={styles.sceneFrame}>
              <AnimatePresence mode="wait">
                <EventScene key={active} type={active} />
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className={styles.details}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className={styles.eventTitle}>{current.label}</h3>
                <p className={styles.tagline}>{current.tagline}</p>
                <p className={styles.description}>{current.description}</p>
                <a href="#contact" className={styles.bookBtn}>
                  Inquire About {current.label}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

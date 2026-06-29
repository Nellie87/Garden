import { motion } from 'framer-motion'
import { Leaf, Users, Sun, Camera } from 'lucide-react'
import AmbientOrbs from './AmbientOrbs'
import styles from './Venue.module.css'

const features = [
  {
    icon: Leaf,
    title: 'Lush Green Grounds',
    text: 'Expansive lawns framed by mature trees — a natural, vibrant backdrop for any occasion.',
  },
  {
    icon: Users,
    title: 'Flexible Capacity',
    text: 'From intimate gatherings to large celebrations, our space adapts to your guest list.',
  },
  {
    icon: Sun,
    title: 'Golden-Hour Magic',
    text: 'Warm Thika sunlight, fresh breeze, and starlit evenings — every hour feels cinematic.',
  },
  {
    icon: Camera,
    title: 'Picture-Perfect',
    text: 'Ground-level perspectives and elevated views — every corner is made for stunning photos.',
  },
]

const showcasePhotos = [
  {
    src: '/images/gallery/main-lawn.jpg',
    alt: 'Main lawn at Markline Gardens',
    position: 'center 35%',
    large: true,
  },
  {
    src: '/images/gallery/garden-bench.jpg',
    alt: 'Garden bench among the trees',
    position: 'center center',
  },
  {
    src: '/images/gallery/sunny-lawn.jpg',
    alt: 'Sunlit lawn at Markline Gardens',
    position: 'center 40%',
  },
]

function FeatureCard({ feature, index }) {
  const Icon = feature.icon

  return (
    <motion.div
      className={styles.feature}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.icon}>
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </motion.div>
  )
}

export default function Venue() {
  return (
    <section id="venue" className={styles.section}>
      <AmbientOrbs variant="warm" />
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className={styles.eyebrow}>The Venue</p>
          <h2 className={styles.title}>
            A Garden <span className={styles.script}>Sanctuary</span>
          </h2>
          <p className={styles.lead}>
            Nestled in the serene hills of Kiganjo, Markline Gardens is a vibrant
            escape minutes from Thika town — where luxury meets the raw beauty of
            Kenyan countryside.
          </p>
        </motion.div>

        <motion.div
          className={styles.showcase}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {showcasePhotos.map((photo) => (
            <div
              key={photo.src}
              className={photo.large ? styles.showcaseLarge : styles.showcaseSmall}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{ objectPosition: photo.position }}
              />
            </div>
          ))}
        </motion.div>

        <div className={styles.features}>
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

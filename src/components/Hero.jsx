import { motion } from 'framer-motion'
import { heroImage } from '../data/events'
import styles from './Hero.module.css'

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className={styles.bgGradient} />
        <div className={styles.bgVignette} />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={itemVariants}>
            Kiganjo, Thika · Kiambu County
          </motion.p>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Markline <em>Gardens</em>
          </motion.h1>

          <motion.p className={styles.scriptLine} variants={itemVariants}>
            Where every celebration finds its home
          </motion.p>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Lush lawns, ancient trees, and golden Thika light — a cinematic
            garden venue for weddings, retreats, and gatherings worth remembering.
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <a href="#experiences" className={styles.primaryBtn}>
              Plan Your Event
            </a>
            <a href="#gallery" className={styles.secondaryBtn}>
              View Gallery
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#experiences"
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-label="Scroll to experiences"
      >
        <span className={styles.scrollLine} />
        <span>Explore</span>
      </motion.a>
    </section>
  )
}

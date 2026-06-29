import { motion } from 'framer-motion'
import styles from './AmbientOrbs.module.css'

export default function AmbientOrbs({ variant = 'light' }) {
  return (
    <div className={`${styles.wrap} ${styles[variant]}`} aria-hidden="true">
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={{ x: [0, -50, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb3}`}
        animate={{ x: [0, 20, -40, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

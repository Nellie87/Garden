import styles from './Logo.module.css'

export default function Logo({ variant = 'light', size = 'md', showTagline = false, className = '' }) {
  return (
    <div className={`${styles.logo} ${styles[variant]} ${styles[size]} ${className}`}>
      <div className={styles.scriptLine}>
        <span className={styles.mark}>Mark</span>
        <span className={styles.line}>Line</span>
      </div>
      <div className={styles.gardens}>GARDENS</div>
      <svg className={styles.arch} viewBox="0 0 120 12" aria-hidden="true">
        <path d="M2 10 Q60 0 118 10" fill="none" strokeWidth="3" strokeLinecap="round" />
      </svg>
      {showTagline && <p className={styles.tagline}>Timeless Memories</p>}
    </div>
  )
}

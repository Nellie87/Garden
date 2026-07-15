import { Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import styles from './Footer.module.css'

const MAP_LINK = 'https://maps.app.goo.gl/LsEmSwqe5qzsKFFo6'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.topBand} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.brandCol}>
            <Logo variant="onGreen" size="md" showTagline />
            <p className={styles.tagline}>See you in the garden.</p>
            <p className={styles.location}>
              <MapPin size={14} strokeWidth={1.5} />
              Kiganjo, Thika · Kenya
            </p>
          </div>

          <div className={styles.actionCol}>
            <p className={styles.actionLabel}>Plan your visit</p>
            <a href="tel:+254783730801" className={styles.phone}>
              <Phone size={18} strokeWidth={1.5} />
              0783 730 801
            </a>
            <div className={styles.actionBtns}>
              <a href="#contact" className={styles.primaryBtn}>
                Book a Visit
              </a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ghostBtn}
              >
                Get Directions
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.bottom}>
          <nav className={styles.links}>
            <a href="#experiences">Experiences</a>
            <a href="#gallery">Gallery</a>
            <a href="#venue">Venue</a>
            <a href="#location">Location</a>
          </nav>

          <div className={styles.social}>
            <a
              href="https://www.tiktok.com/@marklinegardens"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
            <span className={styles.socialDot} aria-hidden="true" />
            <a
              href="https://www.instagram.com/marklinegardens"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <p className={styles.copy}>
            &copy; {year} Markline Gardens
          </p>
        </div>
      </div>
    </footer>
  )
}

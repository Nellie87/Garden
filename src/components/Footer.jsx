import Logo from './Logo'
import AmbientOrbs from './AmbientOrbs'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <AmbientOrbs variant="dark" />
      <div className={styles.inner}>
        <Logo variant="onGreen" size="md" showTagline />

        <p className={styles.location}>
          Kiganjo, Thika · Kenya
        </p>

        <div className={styles.contact}>
          <a href="tel:+254783730801" className={styles.phone}>
            0783 730 801
          </a>
        </div>

        <nav className={styles.social}>
          <a
            href="https://www.tiktok.com/@marklinegardens"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok · Markline Gardens
          </a>
          <a
            href="https://www.instagram.com/marklinegardens"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram · @marklinegardens
          </a>
        </nav>

        <nav className={styles.links}>
          <a href="#experiences">Experiences</a>
          <a href="#venue">Venue</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className={styles.copy}>
          &copy; {year} Mark Line Gardens. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

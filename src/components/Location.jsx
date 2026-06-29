import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock } from 'lucide-react'
import AmbientOrbs from './AmbientOrbs'
import styles from './Location.module.css'

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.105507668579!2d37.09137831089646!3d-1.0830667989019613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f000239360b%3A0xa2d5b1c6d303969!2sMARKLINE%20GARDENS!5e0!3m2!1sen!2ske!4v1782676461039!5m2!1sen!2ske'

const MAP_LINK =
  'https://maps.app.goo.gl/LsEmSwqe5qzsKFFo6'

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <AmbientOrbs variant="warm" />
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.eyebrow}>Find Us</p>
          <h2 className={styles.title}>
            Kiganjo, <em>Thika</em>
          </h2>
          <p className={styles.subtitle}>
            A short drive from Thika town, tucked away in the peaceful Kiganjo hills.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.mapWrap}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <iframe
              title="Markline Gardens location on Google Maps"
              src={MAP_EMBED}
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <MapPin className={styles.cardIcon} size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Address</h3>
                <p>
                  Markline Gardens
                  <br />
                  Kiganjo, Thika
                  <br />
                  Kiambu County, Kenya
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <Navigation className={styles.cardIcon} size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Getting Here</h3>
                <p>
                  Approximately 15 minutes from Thika town centre via the
                  Kiganjo road. Ample parking available on-site.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <Clock className={styles.cardIcon} size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3>Visits</h3>
                <p>
                  Site visits by appointment. Contact us to schedule a walkthrough
                  of the grounds at your convenience.
                </p>
              </div>
            </div>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directions}
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

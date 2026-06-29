import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import AmbientOrbs from './AmbientOrbs'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    event: 'wedding',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent: ${form.event}\n\n${form.message}`
    )
    window.location.href = `mailto:info@marklinegardens.co.ke?subject=Event Inquiry - ${form.event}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className={styles.section}>
      <AmbientOrbs variant="light" />
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.eyebrow}>For Inquiries & Booking</p>
          <h2 className={styles.title}>
            Let's Plan Your <em>Perfect Day</em>
          </h2>
          <p className={styles.subtitle}>
            Reach out to book a site visit or inquire about hosting your event.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.inquiryHeader}>Contact</p>
            <a href="tel:+254783730801" className={styles.phoneHighlight}>
              0783 730 801
            </a>

            <a href="tel:+254783730801" className={styles.contactCard}>
              <Phone size={22} strokeWidth={1.5} />
              <div>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>0783 730 801</span>
              </div>
            </a>

            <a href="mailto:info@marklinegardens.co.ke" className={styles.contactCard}>
              <Mail size={22} strokeWidth={1.5} />
              <div>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>info@marklinegardens.co.ke</span>
              </div>
            </a>

            <a
              href="https://wa.me/254783730801"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <MessageCircle size={22} strokeWidth={1.5} />
              <div>
                <span className={styles.label}>WhatsApp</span>
                <span className={styles.value}>Chat with us</span>
              </div>
            </a>

            <div className={styles.social}>
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
            </div>

          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <h3>Thank you!</h3>
                <p>Your email client should open shortly. We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Wanjiku"
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254 7XX XXX XXX"
                    />
                  </label>
                </div>

                <label className={styles.field}>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                  />
                </label>

                <label className={styles.field}>
                  <span>Event Type</span>
                  <select name="event" value={form.event} onChange={handleChange}>
                    <option value="wedding">Wedding</option>
                    <option value="graduation">Graduation</option>
                    <option value="picnic">Picnic</option>
                    <option value="ruracio">Ruracio</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event — date, guest count, and any special requests..."
                  />
                </label>

                <button type="submit" className={styles.submit}>
                  Send Inquiry
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

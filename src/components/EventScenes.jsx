import { motion } from 'framer-motion'
import styles from './EventScenes.module.css'

const sky = '#87b8d4'
const grass = '#3d6b45'
const grassDark = '#2a4f30'

function SceneBase({ children, ground = grass }) {
  return (
    <div className={styles.scene}>
      <div className={styles.sky} style={{ background: `linear-gradient(180deg, ${sky} 0%, #c8e6f0 55%, #e8f4e0 100%)` }} />
      <div className={styles.hills}>
        <div className={styles.hill} style={{ background: grassDark }} />
        <div className={styles.hill2} style={{ background: grass }} />
      </div>
      <div className={styles.ground} style={{ background: ground }} />
      <div className={styles.sceneContent}>{children}</div>
    </div>
  )
}

export function WeddingScene() {
  const petals = Array.from({ length: 12 }, (_, i) => i)
  return (
    <SceneBase>
      <motion.div
        className={styles.arch}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.archFrame} />
        <motion.div
          className={styles.archFlowers}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className={styles.couple}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className={styles.bride} />
        <div className={styles.groom} />
      </motion.div>

      {petals.map((i) => (
        <motion.div
          key={i}
          className={styles.rosePetal}
          style={{ left: `${10 + i * 7}%` }}
          animate={{
            y: [0, 120],
            x: [0, (i % 2 ? 20 : -20)],
            rotate: [0, 180],
            opacity: [0.8, 0],
          }}
          transition={{ duration: 3 + (i % 3), delay: i * 0.3, repeat: Infinity }}
        />
      ))}

      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`light-${i}`}
          className={styles.fairyLight}
          style={{ left: `${20 + i * 15}%`, top: '18%' }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </SceneBase>
  )
}

export function GraduationScene() {
  const caps = Array.from({ length: 8 }, (_, i) => i)
  return (
    <SceneBase ground="#4a7a52">
      <motion.div
        className={styles.podium}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.podiumTop} />
        <div className={styles.podiumBase} />
      </motion.div>

      <motion.div
        className={styles.graduate}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <div className={styles.gradBody} />
        <div className={styles.gradCap} />
        <div className={styles.gradTassel} />
      </motion.div>

      {caps.map((i) => (
        <motion.div
          key={i}
          className={styles.flyingCap}
          style={{ left: `${15 + i * 10}%` }}
          animate={{
            y: [80, -60],
            rotate: [0, 360 + i * 45],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 2.5, delay: 0.8 + i * 0.2, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}

      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`conf-${i}`}
          className={styles.confetti}
          style={{
            left: `${5 + (i * 4.5) % 90}%`,
            background: ['#c4a35a', '#b86b4b', '#6b8f71', '#e8d5a3'][i % 4],
          }}
          animate={{ y: [0, 100], rotate: [0, 720], opacity: [1, 0] }}
          transition={{ duration: 2, delay: i * 0.15, repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
    </SceneBase>
  )
}

export function PicnicScene() {
  const butterflies = [0, 1, 2]
  return (
    <SceneBase>
      <motion.div
        className={styles.blanket}
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.8 }}
      />

      <motion.div
        className={styles.basket}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={styles.picnicItem}
          style={{ left: `${35 + i * 12}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 + i * 0.15, type: 'spring' }}
        />
      ))}

      {butterflies.map((i) => (
        <motion.div
          key={i}
          className={styles.butterfly}
          style={{ left: `${20 + i * 25}%`, top: '25%' }}
          animate={{
            x: [0, 40, -20, 30, 0],
            y: [0, -20, 10, -15, 0],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <motion.div
        className={styles.sunRays}
        animate={{ opacity: [0.3, 0.6, 0.3], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </SceneBase>
  )
}

export function RuracioScene() {
  return (
    <SceneBase ground="#3d5c38">
      <motion.div
        className={styles.drum}
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 0.4, repeat: Infinity }}
      >
        <div className={styles.drumBody} />
        <div className={styles.drumRim} />
      </motion.div>

      <motion.div
        className={styles.fabricLeft}
        animate={{ x: [-3, 3, -3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className={styles.fabricRight}
        animate={{ x: [3, -3, 3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={styles.dancer}
          style={{ left: `${25 + i * 14}%` }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
        >
          <div className={styles.dancerHead} />
          <div className={styles.dancerBody} style={{ background: ['#b86b4b', '#c4a35a', '#6b8f71', '#8b4513'][i] }} />
        </motion.div>
      ))}

      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`bead-${i}`}
          className={styles.bead}
          style={{ left: `${10 + i * 14}%`, top: '30%' }}
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </SceneBase>
  )
}

export function BirthdayScene() {
  const balloons = [
    { color: '#b86b4b', left: '20%' },
    { color: '#c4a35a', left: '30%' },
    { color: '#6b8f71', left: '65%' },
    { color: '#87b8d4', left: '75%' },
  ]
  return (
    <SceneBase>
      {balloons.map((b, i) => (
        <motion.div
          key={i}
          className={styles.balloon}
          style={{ left: b.left, background: b.color }}
          animate={{ y: [0, -15, 0], x: [0, (i % 2 ? 5 : -5), 0] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity }}
        >
          <div className={styles.balloonString} />
        </motion.div>
      ))}

      <motion.div
        className={styles.cake}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.3 }}
      >
        <div className={styles.cakeLayer} />
        <div className={styles.cakeLayer2} />
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={styles.candle}
            style={{ left: `${20 + i * 15}%` }}
            animate={{ scaleY: [1, 1.1, 1] }}
            transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
          >
            <motion.div
              className={styles.flame}
              animate={{ scale: [1, 1.3, 0.9, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </motion.div>

      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`spark-${i}`}
          className={styles.sparkle}
          style={{ left: `${10 + i * 11}%`, top: `${20 + (i % 3) * 10}%` }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </SceneBase>
  )
}

const scenes = {
  wedding: WeddingScene,
  graduation: GraduationScene,
  picnic: PicnicScene,
  ruracio: RuracioScene,
  birthday: BirthdayScene,
}

export default function EventScene({ type }) {
  const Scene = scenes[type] || WeddingScene
  return (
    <motion.div
      key={type}
      className={styles.wrapper}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5 }}
    >
      <Scene />
    </motion.div>
  )
}

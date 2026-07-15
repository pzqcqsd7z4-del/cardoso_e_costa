import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cc_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cc_cookie_consent', 'accepted')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[70] bg-ink-900 text-stone-200"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <p className="text-sm font-light text-center sm:text-left">
              Utilizamos cookies essenciais para o bom funcionamento do site.{' '}
              <Link to="/cookies" className="underline hover:text-white">Saber mais</Link>
            </p>
            <button
              onClick={accept}
              className="shrink-0 bg-white text-ink-900 px-6 py-2.5 text-xs tracking-[0.1em] uppercase font-medium hover:bg-terracotta-400 hover:text-white transition-colors"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

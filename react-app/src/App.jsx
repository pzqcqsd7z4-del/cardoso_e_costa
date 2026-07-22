import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import PageTransition from './components/PageTransition'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ObrasConcluidas from './pages/ObrasConcluidas'
import Empresa from './pages/Empresa'
import Contacto from './pages/Contacto'
import ProjectDetail from './pages/ProjectDetail'
import Privacidade from './pages/Privacidade'
import Termos from './pages/Termos'
import Cookies from './pages/Cookies'

function AppShell() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen overflow-x-clip">
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/obras-concluidas" element={<ObrasConcluidas />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

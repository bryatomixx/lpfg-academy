'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const SECTIONS = [
  'inicio', 'academia', 'ecosistema', 'industria', 'caminos',
  'ingresos', 'mercado', 'productos', 'herramientas', 'producir',
  'errores', 'compliance', 'mentalidad', 'constructor', 'ruta', 'siguiente',
]

const NAV_LABELS = [
  'Inicio', 'La Academia', 'El Ecosistema', 'La Industria', 'Los 2 Caminos',
  'Ingresos', 'Mercado Latino', 'Productos', 'Herramientas', 'Cómo Producir',
  'Por Qué Fracasan', 'Compliance', 'Mentalidad', 'Productor→Constructor',
  'Ruta 30-60-90', 'Qué Sigue',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach((id, i) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#E5E7EB]'
        : 'bg-white'
    }`}>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#C5A059] origin-left"
        style={{ scaleX: scrollYProgress, right: 0 }}
      />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#inicio" className="flex-shrink-0">
          <Image
            src="/lpfg-logo.png"
            alt="LPFG powered by NBG Latino"
            height={36}
            width={160}
            className="h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1.5">
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              title={NAV_LABELS[i]}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? 'w-5 h-2 bg-[#C5A059]'
                  : 'w-2 h-2 bg-[#1B2631]/20 hover:bg-[#1B2631]/40'
              }`}
            />
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="#contacto"
            className="bg-[#C5A059] hover:bg-[#B8924A] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            Agendar Conversación
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[#1B2631]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <motion.div animate={open ? 'open' : 'closed'} className="flex flex-col gap-1.5 w-5">
            <motion.span
              variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }}
              className="block h-0.5 bg-[#1B2631] rounded-full"
            />
            <motion.span
              variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              className="block h-0.5 bg-[#1B2631] rounded-full"
            />
            <motion.span
              variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }}
              className="block h-0.5 bg-[#1B2631] rounded-full"
            />
          </motion.div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-[#E5E7EB] px-6 py-4 flex flex-col gap-3 shadow-lg"
        >
          {NAV_LABELS.map((label, i) => (
            <a
              key={i}
              href={`#${SECTIONS[i]}`}
              className="text-[#4A4A4A] font-medium hover:text-[#C5A059] transition-colors text-sm"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-[#C5A059] text-white font-bold px-5 py-2.5 rounded-full text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Agendar Conversación
          </a>
        </motion.div>
      )}
    </header>
  )
}

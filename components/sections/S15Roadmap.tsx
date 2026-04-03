'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'

const phases = [
  {
    label: '0 – 30 días',
    title: 'Activación',
    navy: false,
    items: [
      'Obtener / activar licencia',
      'Configurar herramientas y CRM',
      'Definir tu mercado caliente',
      'Primeros 20-30 contactos',
      'Primera cita — primera presentación',
      'Primera venta o solicitud enviada',
      'Instalar hábitos de prospección diaria',
    ],
  },
  {
    label: '31 – 60 días',
    title: 'Tracción',
    navy: true,
    items: [
      'Aumentar actividad semanal sostenida',
      'Más citas, más cierres',
      'Primeros referidos estructurados',
      'Primeros socios estratégicos',
      'KPIs claros: actividad, citas, ventas',
      'Revisión semanal con upline',
      'Mejorar presentación y manejo de objeciones',
    ],
  },
  {
    label: '61 – 90 días',
    title: 'Visión',
    navy: false,
    items: [
      'Consistencia demostrada en producción',
      'Optimizar mezcla de productos',
      'Primeros referidos de clientes existentes',
      'Evaluar camino: Productor o Constructor',
      'Definir objetivos del siguiente trimestre',
      'Revisión de persistencia y chargebacks',
      'Visión de carrera de largo plazo',
    ],
  },
]

export default function S15Roadmap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ruta" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>Plan de acción</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
            Ruta de 30 – 60 – 90 días
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
            Un plan concreto y accionable. No improvisación. No teoría. Ejecución.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-2xl p-8 border relative overflow-hidden shadow-sm ${
                phase.navy
                  ? 'bg-[#1B2631] border-[#1B2631]'
                  : 'bg-white border-[#E5E7EB]'
              }`}
            >
              <div
                className="absolute -top-4 -right-4 text-[100px] font-black leading-none select-none pointer-events-none opacity-5"
                style={{ color: phase.navy ? '#C5A059' : '#1B2631' }}
              >
                {i + 1}
              </div>
              <div className="relative">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block border ${
                  phase.navy
                    ? 'text-[#C5A059] bg-[#C5A059]/15 border-[#C5A059]/30'
                    : 'text-[#C5A059] bg-[#FEF9EE] border-[#C5A059]/30'
                }`}>
                  {phase.label}
                </span>
                <h3 className={`font-black text-2xl mb-6 ${phase.navy ? 'text-white' : 'text-[#1B2631]'}`}>
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.12 + j * 0.04 + 0.25 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0 mt-1.5" />
                      <span className={`text-sm leading-relaxed ${phase.navy ? 'text-white/70' : 'text-[#4A4A4A]'}`}>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

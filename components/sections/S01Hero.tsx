'use client'
import { motion } from 'framer-motion'

const bullets = [
  'Estructura completa antes de cualquier especialización',
  'Dos caminos claros: Productor y Constructor',
  'Plataforma real: LPFG + NBG Latino + LPS',
  'Mentoría, sistemas y visión a largo plazo',
]

export default function S01Hero() {
  return (
    <section id="inicio" className="relative bg-white pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#C5A059]/4 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1B2631]/3 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 border border-[#C5A059]/40 bg-[#FEF9EE] text-[#C5A059] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            New Broker Academy · LPFG powered by NBG Latino
          </motion.div>

          <div className="text-5xl md:text-6xl font-bold text-[#1B2631] leading-[1.05] tracking-tight mb-6">
            {[
              { text: 'Empieza con la', gold: false },
              { text: 'base correcta.', gold: false },
              { text: 'Construye la', gold: true },
              { text: 'carrera correcta.', gold: true },
            ].map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`block ${line.gold ? 'text-[#C5A059]' : ''}`}
              >
                {line.text}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="text-[#4A4A4A] text-lg mb-8 max-w-lg leading-relaxed"
          >
            La academia base para agentes latinos que quieren entender la industria, producir con estructura y crecer dentro de una plataforma seria.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-3 mb-10"
          >
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#FEF9EE] border border-[#C5A059]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                </span>
                <span className="text-[#4A4A4A] text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.76 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#B8924A] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C5A059]/25 hover:-translate-y-0.5"
            >
              Agendar una Conversación →
            </a>
            <a
              href="#caminos"
              className="inline-flex items-center gap-2 border-2 border-[#1B2631] text-[#1B2631] hover:bg-[#1B2631] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              Ver la Ruta del Agente
            </a>
          </motion.div>
        </div>

        {/* Right: Premium pathway cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:flex flex-col gap-4"
        >
          {[
            { step: '01', label: 'Fundación', desc: 'Entiende la industria completa', active: true },
            { step: '02', label: 'Producción', desc: 'Produce con estructura y claridad', active: false },
            { step: '03', label: 'Liderazgo', desc: 'Construye equipo con ética', active: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
              className={`flex items-center gap-5 p-6 rounded-2xl border transition-all ${
                item.active
                  ? 'bg-[#1B2631] border-[#1B2631] shadow-xl shadow-[#1B2631]/10'
                  : 'bg-white border-[#E5E7EB] shadow-sm'
              }`}
            >
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 ${
                item.active ? 'bg-[#C5A059] text-white' : 'bg-[#F3F4F6] text-[#1B2631]'
              }`}>
                {item.step}
              </span>
              <div className="flex-1">
                <p className={`font-bold text-base ${item.active ? 'text-white' : 'text-[#1B2631]'}`}>{item.label}</p>
                <p className={`text-sm ${item.active ? 'text-white/60' : 'text-[#4A4A4A]'}`}>{item.desc}</p>
              </div>
              {item.active && (
                <span className="text-[#C5A059] font-bold text-xs uppercase tracking-wider flex-shrink-0">Aquí →</span>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-2 p-5 bg-[#F3F4F6] rounded-2xl border border-[#E5E7EB] text-center"
          >
            <p className="text-[#1B2631] font-bold text-sm">LPFG · NBG Latino · LPS</p>
            <p className="text-[#4A4A4A] text-xs mt-1">Agencia + IMO + Tecnología + Formación</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const incomeTypes = [
  {
    title: 'Comisión inicial',
    desc: 'Se gana cuando se emite la póliza. El porcentaje varía según el producto y el carrier. Es el ingreso más inmediato para el agente activo.',
    tag: 'Por producción',
    bar: 85,
  },
  {
    title: 'Renovaciones',
    desc: 'En productos permanentes (IUL, WL, etc.), el agente puede recibir comisiones anuales mientras la póliza esté activa. Requiere persistencia y seguimiento.',
    tag: 'Residual',
    bar: 60,
  },
  {
    title: 'Overrides por equipo',
    desc: 'Cuando desarrollas agentes, puedes recibir compensación sobre su producción. Aplica cuando corresponde por contrato y solo después de producir tú mismo.',
    tag: 'Por estructura',
    bar: 45,
  },
  {
    title: 'Bonos e incentivos',
    desc: 'Los carriers y el IMO pueden ofrecer bonos por volumen, persistencia, mezcla de productos o logros específicos. Varían según el contrato y el período.',
    tag: 'Variable',
    bar: 40,
  },
]

export default function S06HowToEarn() {
  return (
    <section id="ingresos" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Modelo de ingresos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              Cómo se gana dinero en esta industria
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Hay múltiples fuentes de ingreso. Todas dependen de lo mismo: producir bien y mantener la calidad.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {incomeTypes.map((item) => (
            <AnimatedSection key={item.title}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:shadow-md transition-all duration-300 h-full shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-[#1B2631] font-bold text-lg">{item.title}</h3>
                  <span className="text-xs bg-[#FEF9EE] text-[#C5A059] border border-[#C5A059]/30 px-3 py-1 rounded-full font-semibold flex-shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="h-1 rounded-full bg-[#F3F4F6] overflow-hidden">
                  <div className="h-full bg-[#C5A059] rounded-full" style={{ width: `${item.bar}%` }} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-[#1B2631] rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-lg md:text-xl leading-relaxed">
              &ldquo;El ingreso sostenible viene de producir bien, persistir, dar seguimiento y desarrollar estructura —{' '}
              <span className="text-[#C5A059]">no solo de entrar gente.&rdquo;</span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

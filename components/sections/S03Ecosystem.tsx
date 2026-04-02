import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const pillars = [
  {
    name: 'LPFG',
    full: 'Latin Prime Financial Group',
    dark: true,
    items: [
      'Liderazgo y visión empresarial',
      'Cultura latina real',
      'Formación estructurada',
      'Cercanía y mentoría',
      'Soporte al agente',
      'Desarrollo de equipos',
    ],
  },
  {
    name: 'NBG Latino',
    full: 'National Brokers Group',
    dark: false,
    items: [
      'Estructura IMO',
      'Acceso a 50+ carriers',
      'Respaldo y recursos',
      'Expansión en USA y PR',
      'Apoyo al agente latino',
      'División bilingüe',
    ],
  },
  {
    name: 'LPS',
    full: 'Latin Prime Systems',
    dark: false,
    items: [
      'CRM y automatización',
      'Seguimiento de clientes',
      'Academia digital',
      'Herramientas de marketing',
      'Dashboards y KPIs',
      'Infraestructura operativa',
    ],
  },
]

export default function S03Ecosystem() {
  return (
    <section id="ecosistema" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>El ecosistema</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-2">
              Tres pilares integrados.
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-6">
              Una plataforma seria.
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              LPFG + NBG Latino + LPS forman un ecosistema completo para agentes que quieren producir y crecer.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((p) => (
            <AnimatedSection key={p.name}>
              <div className={`rounded-2xl p-8 h-full flex flex-col border ${
                p.dark
                  ? 'bg-[#1B2631] border-[#1B2631]'
                  : 'bg-white border-[#E5E7EB] shadow-sm'
              }`}>
                <div className="mb-6">
                  <span className={`font-black text-2xl block ${p.dark ? 'text-[#C5A059]' : 'text-[#1B2631]'}`}>
                    {p.name}
                  </span>
                  <p className={`text-xs mt-0.5 uppercase tracking-wider ${p.dark ? 'text-white/30' : 'text-[#9CA3AF]'}`}>
                    {p.full}
                  </p>
                </div>
                <ul className="space-y-3 flex-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#C5A059] mt-0.5 text-xs flex-shrink-0">◆</span>
                      <span className={`text-sm ${p.dark ? 'text-white/60' : 'text-[#4A4A4A]'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl p-8 text-center">
            <p className="text-[#1B2631] font-bold text-xl md:text-2xl leading-relaxed mb-3">
              &ldquo;Juntos forman una plataforma para producir, crecer y construir equipo con estructura real.&rdquo;
            </p>
            <p className="text-[#4A4A4A] text-sm">
              Agencia + IMO + Tecnología + Formación + Cultura Latina + Desarrollo Empresarial
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

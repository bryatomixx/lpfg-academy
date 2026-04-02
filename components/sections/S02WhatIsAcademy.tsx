import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const scope = [
  'Cómo funciona la industria de seguros de vida',
  'Cómo se gana dinero en este modelo',
  'Qué productos existen y qué problema resuelve cada uno',
  'Cómo producir sin improvisar',
  'Cómo evitar los errores más comunes',
  'Cómo aprovechar el ecosistema LPFG powered by NBG Latino',
]

const advanced = [
  'Producto a profundidad (Term, FE, IUL, WL, FIA)',
  'Underwriting y MIB',
  'Scripts y manejo de objeciones',
  'IBC completo',
  'Reclutamiento y desarrollo de equipo',
  'Tecnología avanzada y CRM',
  'Liderazgo y mentoría',
  'Anualidades (FIA)',
]

export default function S02WhatIsAcademy() {
  return (
    <section id="academia" className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Sobre esta academia</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              ¿Qué es esta academia?
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto leading-relaxed">
              Esta no es la formación avanzada final. Es el mapa completo del negocio — diseñado para que entiendas cómo funciona todo antes de profundizar en cualquier tema.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <AnimatedSection>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#1B2631] text-xl">Esta academia cubre</h3>
              </div>
              <ul className="space-y-4">
                {scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center text-[#C5A059] text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-[#4A4A4A] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#1B2631] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7l5 5 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#1B2631] text-xl">Después de esta base</h3>
              </div>
              <p className="text-[#4A4A4A] text-sm mb-5 ml-11">Entrenamientos dedicados por tema y producto:</p>
              <ul className="space-y-3">
                {advanced.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D1D5DB] flex-shrink-0" />
                    <span className="text-[#4A4A4A] text-sm flex-1">{item}</span>
                    <span className="text-xs text-[#9CA3AF] bg-[#F3F4F6] border border-[#E5E7EB] px-2 py-0.5 rounded-full flex-shrink-0">Próximo</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1B2631] rounded-2xl p-6 text-center">
              <p className="font-bold text-white text-base leading-relaxed">
                &ldquo;Esta academia es la base.{' '}
                <span className="text-[#C5A059]">La profundidad viene después, por tema y por producto.&rdquo;</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

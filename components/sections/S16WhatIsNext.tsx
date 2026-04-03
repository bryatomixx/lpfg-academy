import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const modules = [
  { title: 'Term Life & Final Expense', desc: 'Underwriting, scripts de presentación, objeciones comunes y cierre.' },
  { title: 'IUL a profundidad', desc: 'Cómo funciona la indexación, ilustraciones, suitability y presentación al cliente.' },
  { title: 'Underwriting y MIB', desc: 'Cómo pensar como el carrier antes de enviar la solicitud. Manejo de casos impaired.' },
  { title: 'Living Benefits', desc: 'Riders de beneficio acelerado: crónico, crítico y terminal. Cómo presentarlos.' },
  { title: 'IBC completo', desc: 'Infinite Banking Concept desde los fundamentos hasta la presentación al cliente.' },
  { title: 'FIA completo', desc: 'Fixed Indexed Annuity para retiro: cómo funciona, cuándo es apropiado, cómo presentarlo.' },
  { title: 'Scripts y objeciones', desc: 'Conversaciones reales, respuestas a las objeciones más comunes y cierre con ética.' },
  { title: 'Reclutamiento y equipo', desc: 'Cómo identificar, invitar, onboardear y retener agentes productivos.' },
  { title: 'Tecnología avanzada', desc: 'Dominio del CRM, automatización de seguimiento y uso de dashboards de producción.' },
  { title: 'Liderazgo y mentoría', desc: 'Cómo convertirte en el tipo de líder que desarrolla a otros sin perder tu producción.' },
]

export default function S16WhatIsNext() {
  return (
    <section id="siguiente" className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Lo que sigue</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              Qué sigue después de esta academia
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Esta fue la base. Ahora viene la profundidad — un entrenamiento dedicado por cada tema que importa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {modules.map((m, i) => (
            <AnimatedSection key={m.title}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:shadow-md transition-all duration-300 h-full flex flex-col shadow-sm">
                <span className="text-[#C5A059]/30 font-black text-2xl block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[#1B2631] font-bold text-sm mb-2 leading-snug flex-1">{m.title}</h3>
                <p className="text-[#4A4A4A] text-xs leading-relaxed">{m.desc}</p>
                <span className="mt-3 text-xs text-[#9CA3AF] bg-[#F3F4F6] border border-[#E5E7EB] px-2 py-0.5 rounded-full self-start">
                  Próximamente
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-[#1B2631] rounded-2xl p-10 text-center">
            <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
              Esta academia es la base.
            </h3>
            <p className="text-[#C5A059] font-black text-2xl md:text-3xl mb-6">
              La profundidad viene después, por tema y por producto.
            </p>
            <p className="text-white/50 text-sm max-w-xl mx-auto mb-8">
              Completa esta base, aplica los fundamentos en el campo, y estarás listo para los entrenamientos avanzados que multiplican tu producción y tu equipo.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#B8924A] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Agendar una Conversación →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

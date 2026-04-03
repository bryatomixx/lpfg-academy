import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const stages = [
  { n: 1, title: 'Produce primero', desc: 'Sin producción personal sólida, no hay base para construir. La credibilidad se gana en el campo.', active: true },
  { n: 2, title: 'Domina los fundamentos', desc: 'Conoces tus productos, tu proceso y tus números. Tienes consistencia demostrada.', active: false },
  { n: 3, title: 'Desarrolla consistencia', desc: 'Tu actividad no depende de la motivación del momento. Tienes hábitos y sistemas instalados.', active: false },
  { n: 4, title: 'Ayuda a otros', desc: 'Empiezas a compartir tu experiencia con agentes nuevos. No como jefe — como recurso.', active: false },
  { n: 5, title: 'Aprende accountability', desc: 'Aprendes a hacer seguimiento de objetivos ajenos, no solo de los propios.', active: false },
  { n: 6, title: 'Onboarding y retención', desc: 'Sabes cómo activar a un agente nuevo y cómo mantenerlo comprometido con el proceso.', active: false },
  { n: 7, title: 'Construye con ética', desc: 'El equipo que construyes refleja tus valores. Recluta a quienes pueden crecer, no a quienes solo llenan un número.', active: false },
]

export default function S14ProducerToBuilder() {
  return (
    <section id="constructor" className="bg-[#1B2631] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>El ascenso natural</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">De Productor a Constructor</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              El camino al liderazgo no es un atajo — es una progresión natural que empieza siempre en el mismo lugar.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C5A059] via-[#C5A059]/40 to-transparent" />
          <div className="space-y-5">
            {stages.map((s, i) => (
              <AnimatedSection key={s.n}>
                <div className="relative flex items-start gap-6 pl-16">
                  <div className={`absolute left-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm flex-shrink-0 ${
                    s.active
                      ? 'bg-[#C5A059] border-[#C5A059] text-white'
                      : i < 3
                        ? 'bg-[#C5A059]/15 border-[#C5A059]/40 text-[#C5A059]'
                        : 'bg-white/5 border-white/15 text-white/30'
                  }`}>
                    {s.n}
                  </div>
                  <div className={`border rounded-2xl p-5 flex-1 ${
                    s.active
                      ? 'border-[#C5A059]/40 bg-[#C5A059]/10'
                      : 'border-white/10 bg-white/5'
                  }`}>
                    <h3 className={`font-bold text-base mb-1 ${s.active ? 'text-[#C5A059]' : 'text-white'}`}>
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection>
          <div className="mt-12 bg-[#C5A059] rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-xl">
              &ldquo;No buscamos reclutadores vacíos.{' '}
              <strong className="font-black">Buscamos productores que se convierten en líderes.&rdquo;</strong>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

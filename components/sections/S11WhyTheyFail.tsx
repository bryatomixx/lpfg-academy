import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const failures = [
  'Falta de estructura y rutina diaria',
  'Poca claridad sobre los productos',
  'Baja actividad constante',
  'Falta de seguimiento sistemático',
  'Mala gestión del tiempo',
  'Querer construir sin saber vender primero',
  'Vender mal y generar chargebacks',
  'No tratarlo como un negocio real',
  'Buscar resultados rápidos sin disciplina base',
  'Aislamiento — sin mentoría ni equipo',
]

const solutions = [
  { title: 'Formación estructurada', desc: 'Esta academia y los entrenamientos posteriores dan el mapa completo del negocio.' },
  { title: 'Mentoría activa', desc: 'Tu upline y el equipo LPFG están disponibles para acompañar tu desarrollo.' },
  { title: 'Sistema y proceso', desc: 'El CRM, la automatización y los protocolos de seguimiento reducen la improvisación.' },
  { title: 'Cultura de accountability', desc: 'Los objetivos se revisan, los KPIs se monitorean y el progreso se celebra en equipo.' },
  { title: 'Visión de largo plazo', desc: 'LPFG no busca agentes rápidos. Busca productores que se conviertan en empresarios.' },
]

export default function S11WhyTheyFail() {
  return (
    <section id="errores" className="bg-[#1B2631] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Patrones de fracaso</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por qué muchos agentes no llegan lejos
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Conocer las razones del fracaso es tan importante como conocer las del éxito.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 flex items-center justify-center text-sm font-black flex-shrink-0">
                  ✗
                </span>
                Razones comunes de fracaso
              </h3>
              <ul className="space-y-3">
                {failures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/40 flex-shrink-0 mt-2" />
                    <span className="text-white/60 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-[#C5A059]/10 border border-[#C5A059]/25 rounded-2xl p-8">
              <h3 className="text-[#C5A059] font-bold text-xl mb-6 flex items-center gap-3">
                <span aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#C5A059] text-white flex items-center justify-center text-sm font-black flex-shrink-0">
                  ✓
                </span>
                Cómo LPFG lo corrige
              </h3>
              <div className="space-y-5">
                {solutions.map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="w-1 min-h-[40px] bg-[#C5A059]/30 rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-xl mb-1">
              &ldquo;No solo reclutamos agentes.
            </p>
            <p className="text-[#C5A059] font-black text-xl mb-6">
              Desarrollamos productores y empresarios.&rdquo;
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#B8924A] text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Hablar con el Equipo →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const producer = [
  'Prospectar en tu mercado',
  'Agendar citas de calidad',
  'Presentar y educar al cliente',
  'Cerrar con claridad y convicción',
  'Proteger familias con cobertura real',
  'Generar comisiones consistentes',
  'Desarrollar habilidad comercial sólida',
]

const builder = [
  'Producir primero — siempre',
  'Dominar los fundamentos del negocio',
  'Identificar y desarrollar nuevos agentes',
  'Activar brokers y dar acompañamiento',
  'Aprender accountability y retención',
  'Construir equipo con ética y estructura',
  'Crear crecimiento sostenible de largo plazo',
]

export default function S05TwoPaths() {
  return (
    <section id="caminos" className="bg-[#1B2631] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Los 2 caminos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Qué rol es el tuyo?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Dentro de LPFG powered by NBG Latino hay dos caminos claros. Ambos empiezan en el mismo lugar.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <AnimatedSection>
            <div className="bg-[#C5A059] rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">P</span>
                </div>
                <div>
                  <h3 className="text-white font-black text-2xl">Productor</h3>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Camino 1</p>
                </div>
              </div>
              <ul className="space-y-3">
                {producer.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/8 border border-white/15 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-white font-black text-2xl">Constructor</h3>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Camino 2</p>
                </div>
              </div>
              <ul className="space-y-3">
                {builder.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/10 text-white/50 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="border border-[#C5A059]/30 rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-xl md:text-2xl leading-relaxed mb-2">
              &ldquo;Aquí no se construye primero y se aprende a vender después.&rdquo;
            </p>
            <p className="text-[#C5A059] font-black text-xl md:text-2xl">
              &ldquo;Primero aprende a producir. Luego aprende a multiplicar.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

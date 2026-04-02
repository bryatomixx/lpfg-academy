import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const points = [
  {
    title: 'Mercado de gran escala',
    desc: 'La población hispana en Estados Unidos es una de las más grandes y de más rápido crecimiento del país. Representa millones de familias con necesidades de protección financiera activa.',
  },
  {
    title: 'Alta necesidad, baja cobertura',
    desc: 'Una proporción significativa de familias latinas no cuenta con seguro de vida suficiente. La brecha entre la necesidad y la cobertura real es una oportunidad de servicio genuina.',
  },
  {
    title: 'Barreras reales a superar',
    desc: 'El desconocimiento del producto, la percepción de costo, el idioma y la desconfianza histórica hacia instituciones financieras son barreras que un agente bilingüe y culturalmente alineado puede resolver.',
  },
  {
    title: 'La conexión cultural importa',
    desc: 'Las decisiones financieras se basan en confianza. Un agente que comparte idioma, cultura y valores tiene una ventaja real a la hora de educar y cerrar.',
  },
  {
    title: 'Fuerza de redes y contenido',
    desc: 'El mercado latino tiene una presencia digital activa. El contenido educativo, los testimonios en español y la presencia en redes sociales son herramientas de prospección de alto impacto.',
  },
  {
    title: 'Puerto Rico + USA',
    desc: 'El ecosistema LPFG powered by NBG Latino opera en ambos mercados, lo que amplía las posibilidades de crecimiento para agentes con conexiones en la isla y el continente.',
  },
]

export default function S07LatinoMarket() {
  return (
    <section id="mercado" className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Oportunidad de mercado</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              Por qué el mercado latino<br />representa una oportunidad real
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              No hablamos de hype. Hablamos de lógica. Aquí están los factores que hacen de este mercado una oportunidad sostenible.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <AnimatedSection key={p.title}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:shadow-md transition-all duration-300 h-full shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#C5A059] font-bold text-xs tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-[#E5E7EB]" />
                </div>
                <h3 className="text-[#1B2631] font-bold text-base mb-2">{p.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-3xl mx-auto text-center">
              <strong className="text-[#1B2631]">Nota:</strong> Los datos de mercado varían según la fuente y el período de medición. Los puntos anteriores reflejan tendencias generales observadas en el sector. Para cifras actualizadas, consulta estudios de LIMRA, el Censo de EE.UU. u organizaciones del sector financiero.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

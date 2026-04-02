import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  { n: '01', title: 'Mercado caliente', desc: 'Empieza con las personas que ya te conocen, te respetan y tienen razones reales para necesitar cobertura.' },
  { n: '02', title: 'Referidos estructurados', desc: 'Cada cliente es una puerta a 3-5 nuevos prospectos. Pide referidos con un proceso claro, no de forma improvisada.' },
  { n: '03', title: 'Socios estratégicos', desc: 'Construye relaciones con personas que tienen acceso constante a tu mercado: agentes de real estate, tax preparers, empresarios.' },
  { n: '04', title: 'Leads cuando corresponda', desc: 'Los leads pagados son un recurso válido, pero no reemplazan el mercado caliente ni los referidos. Úsalos con disciplina y expectativas claras.' },
  { n: '05', title: 'Contenido y branding', desc: 'Tu presencia en redes sociales educa a tu audiencia y genera confianza antes de la primera conversación. Consistencia > viralidad.' },
  { n: '06', title: 'Respuesta rápida', desc: 'Un prospecto que espera más de 24 horas empieza a enfriarse. La velocidad de respuesta es una ventaja competitiva real.' },
  { n: '07', title: 'Seguimiento sistemático', desc: 'La mayoría de las ventas ocurren después del segundo o tercer contacto. El seguimiento no es insistir — es dar valor en cada punto de contacto.' },
  { n: '08', title: 'Agenda con propósito', desc: 'Bloquea tiempo de prospección en tu agenda como si fuera una cita inamovible. Lo que no está agendado, no ocurre.' },
  { n: '09', title: 'Consistencia sobre todo', desc: 'La actividad constante supera a la actividad brillante pero esporádica. 5 contactos diarios todos los días > 50 contactos un viernes.' },
]

export default function S10ProduceQuick() {
  return (
    <section id="producir" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Sistema de producción</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              Cómo producir con estructura
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Este es tu sistema operativo inicial como productor. No es teórico — es lo que funciona.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <AnimatedSection key={s.n}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-md transition-all duration-300 h-full shadow-sm">
                <span className="text-[#C5A059]/30 font-black text-4xl block mb-3">{s.n}</span>
                <h3 className="text-[#1B2631] font-bold text-base mb-2">{s.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

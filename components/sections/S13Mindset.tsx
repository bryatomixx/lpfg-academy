import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const habits = [
  { n: '01', title: 'Mentalidad 1099', desc: 'Eres un contratista independiente. Nadie te va a pagar si no produces. Esa libertad viene con responsabilidad total.' },
  { n: '02', title: 'Disciplina financiera personal', desc: 'Tus ingresos son variables. Aprende a vivir con presupuesto, a separar el ingreso del gasto y a planificar para los meses bajos.' },
  { n: '03', title: 'Separación personal / negocio', desc: 'No mezcles tu cuenta personal con tu negocio. Desde el primer cheque de comisión, opera con la mentalidad de una empresa.' },
  { n: '04', title: 'Estructura básica de negocio', desc: 'Una LLC u otra estructura puede ser conveniente dependiendo de tu situación. Consulta a un CPA antes de tomar esa decisión — las ventajas varían por estado, ingreso y circunstancias personales.' },
  { n: '05', title: 'Hábitos de reinversión', desc: 'Los primeros ingresos se reinvierten en herramientas, formación y marketing. El agente que invierte en su negocio crece más rápido.' },
  { n: '06', title: 'Seguimiento de números', desc: 'Conoce tu actividad semanal, tu ratio de citas/ventas, tu persistencia y tu ingreso promedio por póliza. Lo que no se mide, no mejora.' },
]

export default function S13Mindset() {
  return (
    <section id="mentalidad" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Mentalidad empresarial</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-2">
              No solo desarrollamos agentes.
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-8">
              Desarrollamos empresarios.
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              La diferencia entre el agente promedio y el que construye algo duradero está en la mentalidad con la que opera.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {habits.map((h) => (
            <AnimatedSection key={h.n}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 hover:shadow-md transition-all duration-300 h-full shadow-sm">
                <span className="text-[#C5A059]/25 font-black text-5xl block mb-3">{h.n}</span>
                <h3 className="text-[#1B2631] font-bold text-base mb-3">{h.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{h.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl p-6">
            <p className="text-[#4A4A4A] text-sm leading-relaxed text-center">
              <strong className="text-[#1B2631]">Nota importante:</strong> Toda implementación fiscal, contributiva o legal — incluyendo decisiones sobre LLC, S-Corp, deducciones y estructura de negocio — debe validarse con un CPA o profesional licenciado. Este contenido es de carácter educativo general y no constituye asesoría profesional.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

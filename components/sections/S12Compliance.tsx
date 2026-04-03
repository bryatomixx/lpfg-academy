import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const items = [
  { title: 'Licencia activa', desc: 'Debes tener tu licencia de vida activa en el estado donde operas antes de vender. Sin licencia, no hay venta legal.' },
  { title: 'Educación continua (CE)', desc: 'Tu licencia requiere horas de educación continua para renovarse. Mantener el calendario de CE es tu responsabilidad.' },
  { title: 'E&O (Errors & Omissions)', desc: 'El seguro de errores y omisiones te protege profesionalmente. Verifica con NBG Latino si aplica o es requerido en tu contrato.' },
  { title: 'Replacement y Twisting', desc: 'Reemplazar una póliza existente de otro carrier sin justificación legítima puede ser una violación regulatoria. Documenta siempre el motivo.' },
  { title: 'Suitability', desc: 'La cobertura que recomiendas debe ser apropiada para la situación del cliente. Vender el producto equivocado es un problema ético y regulatorio.' },
  { title: 'Documentación', desc: 'Conserva registros de tus presentaciones, conversaciones de importancia y firmas. La documentación te protege a ti y al cliente.' },
  { title: 'Redes sociales y claims', desc: 'No hagas afirmaciones de rendimiento garantizado, comparaciones sin sustento ni promesas que el producto no pueda cumplir. Menos es más.' },
  { title: 'Chargebacks y contestability', desc: 'Los carriers tienen un período de contestabilidad (generalmente 2 años) en el que pueden investigar y disputar un reclamo. Aplica honestidad en todas las solicitudes.' },
]

export default function S12Compliance() {
  return (
    <section id="compliance" className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Ética profesional</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">Compliance y ética</h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Un agente ético no solo es mejor profesional — también construye un negocio más sólido y duradero.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {items.map((item) => (
            <AnimatedSection key={item.title}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-md transition-all duration-300 h-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#C5A059] mb-4" />
                <h3 className="text-[#1B2631] font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-[#4A4A4A] text-xs leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-white border-l-4 border-[#C5A059] rounded-r-2xl p-6 shadow-sm">
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              <strong className="text-[#1B2631]">Importante:</strong> Las regulaciones varían por estado y cambian con el tiempo. Este material es educativo y no reemplaza la orientación de tu upline, el departamento de compliance de NBG Latino ni el asesoramiento legal o regulatorio profesional. Cuando tengas dudas sobre un caso específico, siempre consulta antes de actuar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

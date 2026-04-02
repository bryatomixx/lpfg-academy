import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const steps = [
  {
    n: '01', title: 'El Agente',
    desc: 'Prospecta, educa y conecta al cliente con la protección adecuada. Es el punto de contacto humano de toda la cadena.',
    highlight: false,
  },
  {
    n: '02', title: 'El IMO',
    desc: 'Organización de mercadeo independiente (como NBG Latino). Conecta al agente con múltiples carriers, da soporte, formación y contratos.',
    highlight: false,
  },
  {
    n: '03', title: 'El Carrier',
    desc: 'La compañía aseguradora que emite y respalda la póliza. Evalúa el riesgo, aprueba la cobertura y paga el beneficio.',
    highlight: false,
  },
  {
    n: '04', title: 'La Póliza',
    desc: 'El contrato de cobertura. Se emite después de la solicitud y el underwriting. El cliente queda protegido desde que está en vigor.',
    highlight: false,
  },
  {
    n: '05', title: 'La Comisión',
    desc: 'El agente recibe una comisión inicial por la venta. En muchos productos, también recibe renovaciones anuales mientras la póliza esté activa.',
    highlight: false,
  },
  {
    n: '06', title: 'El Chargeback',
    desc: 'Si una póliza caduca pronto, el carrier recupera parte de la comisión. Por eso vender bien y hacer seguimiento es fundamental.',
    highlight: true,
  },
]

export default function S04Industry() {
  return (
    <section id="industria" className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Fundamentos</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              El lenguaje del negocio
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Antes de vender, necesitas entender el sistema completo. Aquí está el mapa.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <AnimatedSection key={s.n}>
              <div className={`bg-white border rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300 ${
                s.highlight ? 'border-[#C5A059]/40' : 'border-[#E5E7EB]'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#C5A059] text-xs font-bold tracking-widest">{s.n}</span>
                  <div className="h-px flex-1 bg-[#E5E7EB]" />
                </div>
                <h3 className="text-[#1B2631] font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{s.desc}</p>
                {s.highlight && (
                  <div className="mt-4 bg-[#FEF9EE] border border-[#C5A059]/30 rounded-xl p-3">
                    <p className="text-[#C5A059] text-xs font-bold">Regla clave</p>
                    <p className="text-[#4A4A4A] text-xs mt-1">Vender bien + dar seguimiento = proteger tus ingresos.</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-10 bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
            <h3 className="text-[#1B2631] font-bold text-lg mb-3">¿Qué son las renovaciones?</h3>
            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-3xl">
              En productos como Whole Life, Universal Life e IUL, el agente puede recibir una comisión de renovación cada año que el cliente pague su prima. Esto crea ingreso residual — pero requiere que la póliza permanezca activa. La calidad de la venta y el seguimiento postventa determinan tu persistencia y, por lo tanto, tus ingresos a largo plazo.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

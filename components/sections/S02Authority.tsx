import AnimatedSection from '@/components/ui/AnimatedSection'

const pillars = [
  {
    label: 'Formación Estructurada',
    desc: 'Mapa completo del negocio antes de cualquier especialización',
  },
  {
    label: 'Infraestructura IMO',
    desc: 'Acceso a carriers y soporte nacional a través de NBG Latino',
  },
  {
    label: 'Tecnología & Sistemas',
    desc: 'CRM, automatización y academia digital vía Latin Prime Systems',
  },
  {
    label: 'Liderazgo & Crecimiento',
    desc: 'Mentoría activa y camino claro hacia el liderazgo',
  },
]

export default function S02Authority() {
  return (
    <section className="bg-[#1B2631] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-center text-white/40 text-xs uppercase tracking-[0.2em] font-bold mb-10">
            Por qué LPFG powered by NBG Latino es diferente
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-8 h-0.5 bg-[#C5A059] mx-auto mb-4" />
                <p className="text-white font-bold text-sm leading-snug mb-2">{p.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

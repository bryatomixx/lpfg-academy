import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const tools = [
  { name: 'CRM', desc: 'Gestiona tu cartera de clientes, seguimientos, renovaciones y pipeline de prospectos desde un solo lugar.', badge: 'Latin Prime Systems' },
  { name: 'Automatización', desc: 'Secuencias automáticas de seguimiento, recordatorios y nurturing para que ningún prospecto se enfríe.', badge: 'LPS' },
  { name: 'Calendarios', desc: 'Agenda de citas integrada. El cliente reserva su tiempo directamente, sin vaivén de mensajes.', badge: 'LPS' },
  { name: 'Academia digital', desc: 'Esta academia y los entrenamientos posteriores están disponibles en la plataforma digital de LPFG.', badge: 'LPFG' },
  { name: 'Cotización', desc: 'Cotizadores de los carriers para presentar opciones comparativas en tiempo real durante la cita.', badge: 'Carriers' },
  { name: 'Recursos', desc: 'Materiales de presentación, formularios de solicitud, guías de underwriting y soporte del carrier.', badge: 'NBG Latino' },
  { name: 'Comunicación', desc: 'Canales de comunicación con tu upline, con el equipo LPFG y con soporte de NBG Latino.', badge: 'LPFG' },
  { name: 'KPIs', desc: 'Dashboards para monitorear producción, persistencia, actividad semanal y avance hacia tus metas.', badge: 'LPS' },
]

export default function S09Tools() {
  return (
    <section id="herramientas" className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-6">
            <SectionLabel>Sistema operativo del agente</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-4">
              Herramientas del agente LPFG
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-[#1B2631] rounded-2xl p-5 text-center mb-12 max-w-2xl mx-auto">
            <p className="text-white font-bold">
              &ldquo;La tecnología potencia al agente.{' '}
              <span className="text-[#C5A059]">No reemplaza la disciplina ni la venta.&rdquo;</span>
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((t) => (
            <AnimatedSection key={t.name}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col shadow-sm">
                <h3 className="text-[#1B2631] font-bold text-base mb-2">{t.name}</h3>
                <p className="text-[#4A4A4A] text-xs leading-relaxed flex-1">{t.desc}</p>
                <span aria-label={`Proveedor: ${t.badge}`} className="mt-3 self-start text-xs bg-[#FEF9EE] text-[#C5A059] border border-[#C5A059]/30 px-2 py-0.5 rounded-full">
                  {t.badge}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

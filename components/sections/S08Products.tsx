import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionLabel from '@/components/ui/SectionLabel'

const categories = [
  {
    title: 'Protección básica',
    products: [
      { name: 'Term Life', desc: 'Cobertura temporal asequible. 10, 20 o 30 años. Ideal para reemplazo de ingresos e hipoteca.' },
      { name: 'Mortgage Protection', desc: 'Diseñado para proteger la hipoteca familiar en caso de fallecimiento o incapacidad.' },
      { name: 'Final Expense', desc: 'Cobertura de monto menor para gastos finales. Alta aceptación, proceso simplificado.' },
    ],
  },
  {
    title: 'Protección + acumulación',
    products: [
      { name: 'IUL (Indexed Universal Life)', desc: 'Cobertura permanente con valor en efectivo ligado a índices del mercado. Flexible y con crecimiento libre de impuestos.' },
      { name: 'Whole Life', desc: 'Cobertura permanente con valor garantizado. Usado en planificación patrimonial y estate planning.' },
    ],
  },
  {
    title: 'Planificación y preservación',
    products: [
      { name: 'IBC (Infinite Banking Concept)', desc: 'Estrategia con Whole Life para crear un banco privado personal. Tema avanzado — se profundiza en entrenamientos posteriores.' },
      { name: 'FIA (Fixed Indexed Annuity)', desc: 'Producto de acumulación para retiro con protección contra pérdidas. Para clientes que priorizan seguridad.' },
    ],
  },
  {
    title: 'Casos especiales',
    products: [
      { name: 'Living Benefits', desc: 'Riders que permiten acceder al beneficio en vida ante diagnóstico crítico, crónico o terminal.' },
      { name: 'Planificación infantil', desc: 'Pólizas diseñadas para asegurar el futuro financiero de menores desde temprana edad.' },
      { name: 'Casos ITIN / carrier-specific', desc: 'Algunos carriers aceptan asegurados con ITIN. Verifica disponibilidad por carrier específico.' },
    ],
  },
]

export default function S08Products() {
  return (
    <section id="productos" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <SectionLabel>Portafolio</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2631] mb-6">
              Qué vendemos y qué problema resuelve
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Un mapa general del portafolio. La profundidad por producto viene en entrenamientos dedicados.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <AnimatedSection key={cat.title}>
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-7 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] flex-shrink-0" />
                  <h3 className="font-bold text-[#1B2631] text-base">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.products.map((p) => (
                    <div key={p.name} className="border-l-2 border-[#C5A059]/30 pl-4">
                      <p className="text-[#1B2631] font-semibold text-sm mb-1">{p.name}</p>
                      <p className="text-[#4A4A4A] text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-8 bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#1B2631] flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.2"/>
                <path d="M7 4v3.5h2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              <strong className="text-[#1B2631]">Este es un overview, no la formación completa.</strong> Cada producto tiene su propio entrenamiento dedicado donde se cubre underwriting, scripts, objeciones, suitability y casos prácticos. Aquí solo necesitas entender qué existe y para quién es cada producto.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

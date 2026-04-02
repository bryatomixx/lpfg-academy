import Link from 'next/link'

interface Props {
  headline: string
  sub?: string
  cta: string
  href: string
}

export default function CTABanner({ headline, sub, cta, href }: Props) {
  return (
    <section id="contacto" className="bg-[#1B2631] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{headline}</h2>
        {sub && (
          <p className="text-white/60 mb-10 text-lg leading-relaxed max-w-xl mx-auto">{sub}</p>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#B8924A] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C5A059]/25 hover:-translate-y-0.5 text-lg"
        >
          {cta} →
        </Link>
        <p className="text-white/30 text-xs mt-8 max-w-md mx-auto">
          Si buscas una plataforma seria con estructura, mentoría, sistemas y visión a largo plazo — esta conversación es para ti.
        </p>
      </div>
    </section>
  )
}

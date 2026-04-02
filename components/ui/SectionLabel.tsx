export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A059] block mb-3">
      {children}
    </span>
  )
}

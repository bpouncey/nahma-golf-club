export default function ImagePlaceholder({ label = 'Course Photo', className = '', height = 'h-64', gradient = 'from-forest-dark via-forest to-forest-light' }) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${gradient} ${height} ${className} flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(217,201,158,0.15) 0, rgba(217,201,158,0.15) 1px, transparent 0, transparent 50%)',
        backgroundSize: '12px 12px'
      }} />
      <span className="relative text-sand/70 text-sm font-sans tracking-widest uppercase text-center px-4">{label}</span>
    </div>
  )
}

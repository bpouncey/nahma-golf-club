export default function SeoBanner({ page, keywords }) {
  return (
    <div className="bg-gray-100 border-b border-gray-200 text-gray-500 text-xs font-sans py-1 px-4">
      <span className="font-medium">Page:</span> {page} &nbsp;|&nbsp; <span className="font-medium">Keywords:</span> {keywords}
    </div>
  )
}

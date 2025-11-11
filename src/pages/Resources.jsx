export default function Resources(){
  const links = [
    { label: 'Membership Application Form', href: 'https://docs.google.com' },
    { label: 'Absence Appeal Form', href: 'https://docs.google.com' },
    { label: 'Agenda Form', href: 'https://docs.google.com' },
    { label: 'Contest Practice Set', href: 'https://artofproblemsolving.com' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-6">Forms & Resources</h2>
      <ul className="space-y-3">
        {links.map(l => (
          <li key={l.label} className="p-4 rounded-xl border bg-white border-slate-200">
            <a className="text-[#1a237e] hover:underline" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 mt-4">All links open in a new tab. PDFs are downloadable.</p>
    </div>
  )
}

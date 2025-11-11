const officers = [
  { name: 'Lucy DuBose', role: 'President' },
  { name: 'Riley Shearer', role: 'Vice President' },
  { name: 'Mary Beth Baker', role: 'Secretary' },
  { name: 'Emerson Bruton', role: 'Treasurer' },
  { name: 'Reese Lang', role: 'Historian' },
  { name: 'Lauren Holleman', role: 'Parliamentarian' },
  { name: 'Lucy DuBose', role: 'Webmaster' },
]

const sponsors = [
  { name: 'Mrs. Davis', role: 'Sponsor' },
  { name: 'Mrs. Winstead', role: 'Sponsor' },
]

export default function Officers(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-8">Officers & Sponsors</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...officers, ...sponsors].map((p) => (
          <div key={p.name + p.role} className="p-5 rounded-2xl border bg-white border-slate-200 hover:shadow-md transition">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[#e3e9ff] to-[#fff4cc]" />
            <p className="mt-3 font-semibold">{p.name}</p>
            <p className="text-slate-600">{p.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="/contact" className="px-5 py-3 rounded-lg bg-[#1a237e] text-white">Contact Officers</a>
      </div>
    </div>
  )
}

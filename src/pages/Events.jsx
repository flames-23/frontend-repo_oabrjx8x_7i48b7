export default function Events(){
  const upcoming = [
    { title: 'Homecoming Float Meeting', when: 'TBD', where: 'Campus' },
    { title: 'Math Tutoring Sessions', when: 'Tue/Thu before school', where: 'Lecture Hall' },
    { title: 'Convention Prep Day', when: 'TBD', where: 'Room 123' },
  ]
  const gallery = [
    { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop', cap: 'MAO Convention' },
    { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop', cap: 'Tutoring' },
    { src: 'https://images.unsplash.com/photo-1762497403897-c105a5bc61e9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb252ZW50aW9uJTIwUHJlcCUyMERheXxlbnwwfDB8fHwxNzYyODI0NDUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', cap: 'Parade' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-6">Meetings, Service Projects, and Conventions</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {upcoming.map(e => (
          <div key={e.title} className="p-5 rounded-2xl border bg-white border-slate-200">
            <p className="font-semibold">{e.title}</p>
            <p className="text-slate-600">{e.when} • {e.where}</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 rounded-lg bg-[#1a237e] text-white">RSVP</button>
              <button className="px-3 py-2 rounded-lg border border-slate-300 bg-white">Volunteer</button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4">Past Events</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map(g => (
          <figure key={g.src} className="group rounded-xl overflow-hidden border border-slate-200 bg-white">
            <img src={g.src} alt={g.cap} className="w-full h-48 object-cover group-hover:scale-[1.03] transition" />
            <figcaption className="p-3 text-sm text-slate-700">{g.cap}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

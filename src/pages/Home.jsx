import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const photos = [
  { src: 'https://images.unsplash.com/photo-1759662232654-bbbb15daa890?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb21lY29taW5nJTIwRmxvYXR8ZW58MHwwfHx8MTc2MjgyNDQ1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'Homecoming Float' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop', alt: 'Convention' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop', alt: 'Service Projects' },
]

export default function Home(){
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3e9ff] via-white to-[#fff4cc]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-[#1a237e] font-semibold">Northwest Rankin High School</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mt-2">Northwest Rankin Mu Alpha Theta</h2>
            <p className="mt-4 text-lg text-slate-700">Where Math Meets Leadership and Service</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 rounded-lg bg-[#1a237e] text-white hover:shadow-lg">Join the Club</Link>
              <Link to="/events" className="px-5 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50">See Events</Link>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-white/70 border border-slate-200 shadow-sm">
              <p className="font-semibold">Upcoming Meeting</p>
              <p className="text-slate-700">First Meeting: September 9th, 7:45 AM in the Lecture Hall.</p>
              <Link to="/events" className="inline-block mt-2 text-[#1a237e] hover:underline">View Calendar →</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <motion.img key={photos[0].src} src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} />
            </div>
            <motion.div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow p-4 border border-slate-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-semibold text-slate-700">Photo Highlights</p>
              <p className="text-xs text-slate-500">Convention • Tutoring • Parade</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Announcements & Slideshow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Announcements</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border bg-white border-slate-200">Welcome back, Cougars! Dues and applications open soon.</div>
              <div className="p-4 rounded-xl border bg-white border-slate-200">Volunteer opportunities posted under Events.</div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Highlights</h3>
            <div className="grid grid-cols-3 gap-2">
              {photos.map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} className="rounded-lg aspect-square object-cover hover:opacity-90 transition" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

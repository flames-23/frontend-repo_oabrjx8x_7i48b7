import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [announcements, setAnnouncements] = useState([])
  const [events, setEvents] = useState([])
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    fetch(`${BACKEND}/api/announcements`).then(r => r.json()).then(setAnnouncements).catch(() => setAnnouncements([]))
    fetch(`${BACKEND}/api/events`).then(r => r.json()).then(setEvents).catch(() => setEvents([]))
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('Thanks! We received your message.')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const err = await res.json().catch(() => ({}))
        setStatus(err.detail || 'Something went wrong.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">M</div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-800">Math Club</h1>
              <p className="text-xs text-slate-500">Problem solving • Competitions • Community</p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-6 text-slate-700">
            <a href="#events" className="hover:text-indigo-600">Events</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="/test" className="hover:text-indigo-600">Status</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-800">
            Welcome to the Math Club
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join us to explore contest problems, prepare for AMC/AIME, and enjoy the beauty of mathematics with friends.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#events" className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">See Events</a>
            <a href="#contact" className="px-5 py-3 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">Join the Club</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-200 to-sky-200 border border-slate-200 shadow-inner" />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow p-4 border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">Weekly Problem Circle</p>
            <p className="text-xs text-slate-500">Every Thursday after school</p>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="max-w-6xl mx-auto px-4" id="announcements">
        {announcements && announcements.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Announcements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {announcements.map((a) => (
                <div key={a._id || a.message} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                  <span className="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">Priority {a.priority}</span>
                  <p className="mt-2 text-slate-700">{a.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-4 py-12" id="events">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-2xl font-bold text-slate-800">Upcoming Events</h3>
          <span className="text-sm text-slate-500">Data loads automatically</span>
        </div>
        {events.length === 0 ? (
          <p className="text-slate-600">No events yet. Check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e._id || e.title} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-slate-800">{e.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{e.date}{e.time ? ` • ${e.time}` : ''}</p>
                {e.location && <p className="text-sm text-slate-600">{e.location}</p>}
                {e.description && <p className="text-slate-700 mt-2 text-sm">{e.description}</p>}
                {e.link && (
                  <a className="inline-block mt-3 text-indigo-700 hover:underline" href={e.link} target="_blank" rel="noreferrer">Learn more</a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-4 py-12" id="about">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">About Our Club</h3>
            <p className="text-slate-700 leading-relaxed">
              We are a student-led community passionate about mathematics. We host weekly meetings, run problem-solving sessions, and attend competitions like AMC and AIME. All levels are welcome.
            </p>
          </div>
          <ul className="space-y-3 text-slate-700">
            <li>• Weekly meetings with snacks</li>
            <li>• AMC/AIME training and mock contests</li>
            <li>• Guest talks and puzzle nights</li>
            <li>• Outreach and tutoring opportunities</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-4 py-12" id="contact">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h3>
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <input className="border border-slate-300 rounded-lg p-3" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
          <input className="border border-slate-300 rounded-lg p-3" placeholder="Your email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
          <input className="md:col-span-2 border border-slate-300 rounded-lg p-3" placeholder="Subject" value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} required />
          <textarea className="md:col-span-2 border border-slate-300 rounded-lg p-3 h-28" placeholder="Your message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700" type="submit">Send</button>
            {status && <span className="text-slate-600 text-sm">{status}</span>}
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Math Club. All rights reserved.</p>
          <a href="/test" className="text-indigo-700 hover:underline">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App

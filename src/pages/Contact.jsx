import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, subject: 'Website Contact' }) })
      if(res.ok){
        setStatus('Thanks! We received your message.')
        setForm({ name:'', email:'', message:'' })
      } else {
        setStatus('Something went wrong.')
      }
    } catch {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-6">Contact</h2>
      <p className="text-slate-700">Email us at <a className="text-[#1a237e] hover:underline" href="mailto:nwrmao@gmail.com">nwrmao@gmail.com</a></p>
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 max-w-3xl mt-6">
        <input className="border border-slate-300 rounded-lg p-3" placeholder="Your name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
        <input className="border border-slate-300 rounded-lg p-3" placeholder="Your email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
        <textarea className="md:col-span-2 border border-slate-300 rounded-lg p-3 h-40" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
        <div className="md:col-span-2 flex items-center gap-4">
          <button className="px-5 py-3 bg-[#1a237e] text-white rounded-lg" type="submit">Send</button>
          {status && <span className="text-slate-600 text-sm">{status}</span>}
        </div>
      </form>
      <div className="mt-8">
        <iframe title="map" className="w-full h-64 rounded-xl border" src="https://www.google.com/maps?q=Northwest+Rankin+High+School,Flowood,MS&output=embed"></iframe>
      </div>
      <div className="mt-6 text-sm text-slate-600">
        <p>Instagram: <a className="text-[#1a237e] hover:underline" href="https://www.instagram.com/nwrmao/" target="_blank" rel="noreferrer">@nwrmao</a></p>
        <p>Remind join code: @nwrmao25</p>
      </div>
    </div>
  )
}

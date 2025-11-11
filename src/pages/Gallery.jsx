import { useState } from 'react'

const images = [
  { src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop', tag: 'Conventions' },
  { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop', tag: 'Service Projects' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop', tag: 'School Events' },
  { src: 'https://images.unsplash.com/photo-1759662232654-bbbb15daa890?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb21lY29taW5nJTIwRmxvYXR8ZW58MHwwfHx8MTc2MjgyNDQ1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Conventions' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop', tag: 'Service Projects' },
]

export default function Gallery(){
  const [filter, setFilter] = useState('All')
  const tags = ['All','Conventions','Service Projects','School Events']
  const filtered = filter === 'All' ? images : images.filter(i => i.tag === filter)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-6">Gallery</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(t => (
          <button key={t} onClick={()=>setFilter(t)} className={`px-4 py-2 rounded-full border ${filter===t? 'bg-[#1a237e] text-white border-transparent':'bg-white border-slate-300'}`}>{t}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((img, idx)=> (
          <a key={idx} href={img.src} target="_blank" rel="noreferrer" className="group rounded-xl overflow-hidden border bg-white border-slate-200">
            <img src={img.src} alt="Gallery" className="w-full h-56 object-cover group-hover:scale-[1.03] transition" />
            <div className="p-3 text-sm text-slate-600">{img.tag}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

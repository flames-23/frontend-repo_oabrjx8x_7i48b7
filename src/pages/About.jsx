export default function About(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-6">About NWRMAO</h2>
      <p className="text-lg text-slate-700 max-w-3xl">Our goal is to foster a deeper appreciation of mathematics, develop problem-solving skills, and build community through service and leadership. The NWR chapter has attended regional and state conventions and continues a tradition of excellence.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 rounded-2xl border bg-white border-slate-200">
          <p className="font-semibold mb-2">2025 MAO Convention – Interschool Competition</p>
          <p className="text-slate-600">Recognition for team excellence and collaboration.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-white border-slate-200">
          <p className="font-semibold mb-2">2024 MAO Convention – Overall Sweepstakes Award</p>
          <p className="text-slate-600">Outstanding chapter performance across events.</p>
        </div>
        <div className="p-6 rounded-2xl border bg-white border-slate-200">
          <p className="font-semibold mb-2">Top placements in individual math contests</p>
          <p className="text-slate-600">Students consistently place highly in competitions.</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-4">Why Join NWRMAO?</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {['Leadership','Service','Competition','Scholarship'].map((t)=> (
            <div key={t} className="p-6 rounded-2xl border bg-white border-slate-200 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#e9efff] grid place-items-center text-[#1a237e] font-bold">{t[0]}</div>
              <p className="mt-3 font-semibold">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

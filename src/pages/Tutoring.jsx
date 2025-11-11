export default function Tutoring(){
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-black mb-6">Peer Tutoring Program</h2>
      <p className="text-slate-700 max-w-3xl">Our members provide peer tutoring to help students strengthen their math skills. Join us before school for focused sessions led by Mu Alpha Theta members.</p>

      <h3 className="text-2xl font-bold mt-10 mb-3">Weekly Tutoring Schedule</h3>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border border-slate-200 rounded-xl overflow-hidden bg-white">
          <thead className="bg-[#e9efff]">
            <tr>
              <th className="text-left p-3">Day</th>
              <th className="text-left p-3">Time</th>
              <th className="text-left p-3">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Tuesday</td>
              <td className="p-3">7:45 AM</td>
              <td className="p-3">Lecture Hall</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Thursday</td>
              <td className="p-3">7:45 AM</td>
              <td className="p-3">Lecture Hall</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-3">Request a Tutor</h3>
      <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
        <input className="border border-slate-300 rounded-lg p-3" placeholder="Your name" required />
        <input className="border border-slate-300 rounded-lg p-3" placeholder="Contact email" type="email" required />
        <input className="md:col-span-2 border border-slate-300 rounded-lg p-3" placeholder="Subject (e.g., Algebra 2, Precalculus)" required />
        <textarea className="md:col-span-2 border border-slate-300 rounded-lg p-3 h-28" placeholder="Details or preferred times" />
        <button className="md:col-span-2 px-5 py-3 rounded-lg bg-[#1a237e] text-white">Submit</button>
      </form>

      <h3 className="text-xl font-semibold mt-10 mb-2">Sign up to Tutor (Members)</h3>
      <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
        <input className="border border-slate-300 rounded-lg p-3" placeholder="Your name" required />
        <input className="border border-slate-300 rounded-lg p-3" placeholder="Contact email" type="email" required />
        <input className="md:col-span-2 border border-slate-300 rounded-lg p-3" placeholder="Strengths (e.g., Geometry, Calculus)" required />
        <button className="md:col-span-2 px-5 py-3 rounded-lg border border-slate-300 bg-white">Volunteer</button>
      </form>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronUp, Instagram } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const links = [
    ['Home', '/'],
    ['About', '/about'],
    ['Officers', '/officers'],
    ['Events', '/events'],
    ['Tutoring', '/tutoring'],
    ['Gallery', '/gallery'],
    ['Resources', '/resources'],
    ['Contact', '/contact'],
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef3ff] via-white to-[#fff7e6] dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl grid place-items-center font-black text-white shadow-md bg-[#1a237e] relative overflow-hidden">
              <span className="z-10">µ</span>
              <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            </div>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold tracking-wide text-[#1a237e] dark:text-[#fbc02d]">Northwest Rankin</p>
              <h1 className="text-base font-extrabold">Mu Alpha Theta</h1>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => classNames(
                'relative py-1 transition-colors',
                isActive ? 'text-[#1a237e] dark:text-[#fbc02d]' : 'text-slate-700/90 dark:text-slate-300 hover:text-[#1a237e] dark:hover:text-[#fbc02d]'
              )}>
                {({ isActive }) => (
                  <span className="inline-block">
                    {label}
                    <span className={classNames('block h-[2px] rounded-full transition-all', isActive ? 'bg-[#fbc02d] w-full' : 'bg-transparent w-0 group-hover:w-full')} />
                  </span>
                )}
              </NavLink>
            ))}
            <button aria-label="Toggle theme" onClick={() => setDark(v => !v)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} className="block px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                {label}
              </NavLink>
            ))}
            <div className="pt-2">
              <button onClick={() => setDark(v=>!v)} className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                {dark ? 'Light mode' : 'Dark mode'}
              </button>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-16 border-t border-slate-200/70 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold">Northwest Rankin Mu Alpha Theta</p>
            <p className="text-slate-600 dark:text-slate-300">Where Math Meets Leadership and Service</p>
            <a className="mt-2 inline-flex items-center gap-2 text-[#1a237e] dark:text-[#fbc02d] hover:underline" href="https://www.instagram.com/nwrmao/" target="_blank" rel="noreferrer">
              <Instagram size={16}/> @nwrmao
            </a>
          </div>
          <div className="space-y-1 text-slate-600 dark:text-slate-300">
            <p>Northwest Rankin High School</p>
            <p>Flowood, Mississippi</p>
            <p>Email: <a className="hover:underline" href="mailto:nwrmao@gmail.com">nwrmao@gmail.com</a></p>
          </div>
          <div className="text-slate-600 dark:text-slate-300">
            <p>© 2025 Northwest Rankin Mu Alpha Theta</p>
            <p>Site designed by Lucy DuBose</p>
            <p><Link className="hover:underline" to="/test">System status</Link></p>
          </div>
        </div>
        <ScrollTopButton />
      </footer>
    </div>
  )
}

function ScrollTopButton(){
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])
  if(!visible) return null
  return (
    <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="fixed bottom-6 right-6 p-3 rounded-full bg-[#1a237e] text-white shadow-lg hover:translate-y-[-2px] transition-transform">
      <ChevronUp />
    </button>
  )
}

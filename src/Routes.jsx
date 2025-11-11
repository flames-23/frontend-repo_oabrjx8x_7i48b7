import { Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Officers from './pages/Officers'
import Events from './pages/Events'
import Tutoring from './pages/Tutoring'
import Gallery from './pages/Gallery'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Test from './Test'
import Layout from './Layout'

export default function AppRoutes(){
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tutoring" element={<Tutoring />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  )
}

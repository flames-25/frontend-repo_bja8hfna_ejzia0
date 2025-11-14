import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Salad, ShoppingCart } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = React.useState(false)
  const linkClass = ({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'}`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-emerald-700">
          <Salad className="w-6 h-6" />
          <span>Salad7M</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/order" className={linkClass}>Order</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <Link to="/order" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:bg-emerald-700">
            <ShoppingCart className="w-4 h-4"/> Order Now
          </Link>
        </nav>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <NavLink to="/" className={linkClass} onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/order" className={linkClass} onClick={()=>setOpen(false)}>Order</NavLink>
          <NavLink to="/about" className={linkClass} onClick={()=>setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={()=>setOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  )
}

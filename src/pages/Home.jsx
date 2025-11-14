import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1600&auto=format&fit=crop" alt="Fresh salad" className="w-full h-[60vh] object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow">Fresh Salads, Your Way!</h1>
            <p className="mt-4 text-white/90 max-w-xl">Build your perfect bowl with crisp greens, bold proteins, and punchy dressings. Ready in minutes.</p>
            <div className="mt-6">
              <Link to="/order" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md shadow">Order Now</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-emerald-100 bg-white">
          <p className="text-lg font-semibold text-emerald-700">Pick Your Base</p>
          <p className="mt-2 text-gray-600">Lettuce, spinach, kale or mixed greens — start fresh.</p>
        </div>
        <div className="p-6 rounded-xl border border-emerald-100 bg-white">
          <p className="text-lg font-semibold text-emerald-700">Add Protein & Toppings</p>
          <p className="mt-2 text-gray-600">From chicken to tofu, plus colorful veggies, fruits, and crunch.</p>
        </div>
        <div className="p-6 rounded-xl border border-emerald-100 bg-white">
          <p className="text-lg font-semibold text-emerald-700">Dress It Up</p>
          <p className="mt-2 text-gray-600">Classic Caesar to sesame — finish with your favorite sauce.</p>
        </div>
      </div>
    </section>
  )
}

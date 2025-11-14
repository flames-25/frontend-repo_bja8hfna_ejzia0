import React from 'react'

export default function About(){
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-emerald-700">Our Story</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Salad7M was born from a simple idea: make eating healthy effortless and exciting. We source crisp greens, vibrant vegetables, and quality proteins from trusted local partners. Every bowl is made to order, so you get peak freshness in every bite.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Whether you’re fueling a busy day or committing to a healthier lifestyle, our menu is designed to be fast, flexible, and full of flavor. Fresh. Fast. Your way.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <img className="rounded-lg" alt="greens" src="https://images.unsplash.com/photo-1549736624-81a2ca809ad7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxncmVlbnN8ZW58MHwwfHx8MTc2MzA5NzA1Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
        <img className="rounded-lg" alt="veggies" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" />
        <img className="rounded-lg" alt="sourcing" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop" />
      </div>
    </section>
  )
}

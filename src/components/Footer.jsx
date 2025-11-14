import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-emerald-700">Salad7M</p>
          <p className="mt-2">Fresh, fast, and made your way. Healthy never tasted this good.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Hours</p>
          <p>Mon–Fri: 10am – 9pm</p>
          <p>Sat–Sun: 11am – 9pm</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Follow</p>
          <div className="flex gap-4 mt-2">
            <a className="hover:text-emerald-700" href="#">Instagram</a>
            <a className="hover:text-emerald-700" href="#">TikTok</a>
            <a className="hover:text-emerald-700" href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Salad7M. All rights reserved.</div>
    </footer>
  )
}

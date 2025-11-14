import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Confirm(){
  const { state } = useLocation()
  const orderId = state?.order_id
  const eta = state?.eta_minutes || 15
  const waLink = state?.wa_link

  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-emerald-700">Thank you!</h2>
      <p className="mt-2 text-gray-700">Your order has been received.</p>
      {orderId && <p className="mt-2">Order ID: <span className="font-semibold">{orderId}</span></p>}
      <p className="mt-2">Estimated time: <span className="font-semibold">{eta} minutes</span></p>
      {waLink && (
        <p className="mt-4"><a className="text-emerald-700 underline" href={waLink} target="_blank">Open WhatsApp confirmation</a></p>
      )}
      <div className="mt-8">
        <Link to="/order" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md">Order another</Link>
      </div>
    </section>
  )
}

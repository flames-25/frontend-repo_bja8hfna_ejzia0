import React from 'react'

export default function Contact(){
  const [form, setForm] = React.useState({name:'', email:'', phone:'', message:''})
  const [status, setStatus] = React.useState('')
  const API = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API}/api/contact`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      const data = await res.json()
      if (data.ok){
        setStatus('Thanks! We will get back to you shortly.')
        setForm({name:'', email:'', phone:'', message:''})
      } else {
        setStatus('Something went wrong.')
      }
    } catch(err){
      setStatus('Network error.')
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-emerald-700">Contact & Location</h2>
      <p className="mt-2 text-gray-700">Have a question or feedback? We’d love to hear from you.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full border rounded-md p-3" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="w-full border rounded-md p-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input className="w-full border rounded-md p-3" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <textarea className="w-full border rounded-md p-3" rows="5" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md">Send</button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>

        <div>
          <div className="w-full h-64 rounded-md overflow-hidden">
            <iframe title="map" className="w-full h-full" src="https://www.google.com/maps?q=jakarta&output=embed"></iframe>
          </div>
          <div className="mt-4 text-gray-700">
            <p><span className="font-semibold">Hours:</span> Mon–Fri 10am–9pm, Sat–Sun 11am–9pm</p>
            <p><span className="font-semibold">Phone:</span> +62 812-3456-7890</p>
            <p><span className="font-semibold">Address:</span> Jalan Sehat No.7, Jakarta</p>
          </div>
        </div>
      </div>
    </section>
  )
}

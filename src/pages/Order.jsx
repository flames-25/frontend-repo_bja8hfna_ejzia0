import React from 'react'
import { useNavigate } from 'react-router-dom'

const BASES = ["Lettuce","Spinach","Kale","Mixed Greens"]
const PROTEINS = ["Chicken","Tofu","Tuna","Egg","Tempeh"]
const TOPPINGS = ["Cherry Tomato","Cucumber","Corn","Carrot","Olives","Onion","Bell Pepper","Broccoli","Apple","Mango","Walnuts","Almonds"]
const SAUCES = ["Caesar","Ranch","Sesame","Honey Mustard","Balsamic"]
const EXTRAS = ["Avocado","Cheese","Quinoa","Croutons"]

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Order(){
  const [size, setSize] = React.useState('Regular')
  const [base, setBase] = React.useState(BASES[0])
  const [protein, setProtein] = React.useState('')
  const [toppings, setToppings] = React.useState([])
  const [sauces, setSauces] = React.useState([])
  const [extras, setExtras] = React.useState([])
  const [presets, setPresets] = React.useState([])
  const [price, setPrice] = React.useState(0)
  const [customer, setCustomer] = React.useState({
    customer_name: '', phone: '', whatsapp: '', address: '', pickup: true,
    eta_minutes: 15, payment_method: ''
  })
  const [note, setNote] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(()=>{
    fetch(`${API}/api/presets`).then(r=>r.json()).then(setPresets).catch(()=>{})
  },[])

  React.useEffect(()=>{
    fetch(`${API}/api/price`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({size, protein: protein||null, extras})})
      .then(r=>r.json()).then(d=>setPrice(d.subtotal||0)).catch(()=>setPrice(0))
  },[size, protein, extras])

  const toggle = (v, list, setList) => {
    if (list.includes(v)) setList(list.filter(x=>x!==v))
    else setList([...list, v])
  }

  const applyPreset = (p) => {
    setSize(p.item.size)
    setBase(p.item.base)
    setProtein(p.item.protein||'')
    setToppings(p.item.toppings||[])
    setSauces(p.item.sauces||[])
    setExtras(p.item.extras||[])
  }

  const submit = async () => {
    setLoading(true)
    const order = {
      ...customer,
      items: [{ base, protein: protein||null, toppings, sauces, extras, notes: note, size }],
      subtotal: price, delivery_fee: customer.pickup ? 0 : 10000, total: 0
    }
    try {
      const res = await fetch(`${API}/api/order`, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(order)})
      const data = await res.json()
      if (data.ok){
        navigate('/confirm', {state: data})
      } else {
        alert('Order failed')
      }
    } catch(err){
      alert('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-emerald-700">Build Your Salad</h2>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-4 rounded-xl border bg-white">
            <p className="font-semibold text-gray-800">Size</p>
            <div className="mt-3 flex gap-3">
              {['Regular','Large'].map(s => (
                <button key={s} onClick={()=>setSize(s)} className={`px-4 py-2 rounded-md border ${size===s?'bg-emerald-600 text-white border-emerald-600':'bg-white hover:border-emerald-300'}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-white grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-800">Base</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {BASES.map(b => (
                  <button key={b} onClick={()=>setBase(b)} className={`px-3 py-2 rounded-md border ${base===b?'bg-emerald-50 border-emerald-600 text-emerald-700':'hover:border-emerald-300'}`}>{b}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Protein</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {PROTEINS.map(p => (
                  <button key={p} onClick={()=>setProtein(p===protein?'':p)} className={`px-3 py-2 rounded-md border ${protein===p?'bg-emerald-50 border-emerald-600 text-emerald-700':'hover:border-emerald-300'}`}>{p}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-white">
            <p className="font-semibold text-gray-800">Toppings</p>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
              {TOPPINGS.map(t => (
                <button key={t} onClick={()=>toggle(t, toppings, setToppings)} className={`px-3 py-2 rounded-md border ${toppings.includes(t)?'bg-emerald-50 border-emerald-600 text-emerald-700':'hover:border-emerald-300'}`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-white grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-800">Sauces</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {SAUCES.map(s => (
                  <button key={s} onClick={()=>toggle(s, sauces, setSauces)} className={`px-3 py-2 rounded-md border ${sauces.includes(s)?'bg-emerald-50 border-emerald-600 text-emerald-700':'hover:border-emerald-300'}`}>{s}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Extras</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {EXTRAS.map(e => (
                  <button key={e} onClick={()=>toggle(e, extras, setExtras)} className={`px-3 py-2 rounded-md border ${extras.includes(e)?'bg-emerald-50 border-emerald-600 text-emerald-700':'hover:border-emerald-300'}`}>{e}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-xl border bg-white">
            <p className="font-semibold text-gray-800">Popular Bowls</p>
            <div className="mt-3 space-y-3">
              {presets.map((p,i)=> (
                <div key={i} className="p-3 rounded-lg border hover:border-emerald-300">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-gray-600">{p.description}</p>
                  <button onClick={()=>applyPreset(p)} className="mt-2 text-emerald-700 underline">Choose</button>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-white">
            <p className="font-semibold text-gray-800">Notes</p>
            <textarea className="w-full border rounded-md p-2" rows="3" placeholder="Extra sauce, no onion, etc." value={note} onChange={e=>setNote(e.target.value)} />
          </div>

          <div className="p-4 rounded-xl border bg-white">
            <p className="font-semibold text-gray-800">Your Info</p>
            <div className="mt-2 space-y-2">
              <input className="w-full border rounded-md p-2" placeholder="Full Name" value={customer.customer_name} onChange={e=>setCustomer({...customer, customer_name:e.target.value})} />
              <input className="w-full border rounded-md p-2" placeholder="Phone" value={customer.phone} onChange={e=>setCustomer({...customer, phone:e.target.value})} />
              <input className="w-full border rounded-md p-2" placeholder="WhatsApp (preferred)" value={customer.whatsapp} onChange={e=>setCustomer({...customer, whatsapp:e.target.value})} />
              <div className="flex items-center gap-2">
                <input id="pickup" type="checkbox" checked={customer.pickup} onChange={e=>setCustomer({...customer, pickup:e.target.checked})} />
                <label htmlFor="pickup">Pickup</label>
              </div>
              {!customer.pickup && (
                <input className="w-full border rounded-md p-2" placeholder="Address" value={customer.address} onChange={e=>setCustomer({...customer, address:e.target.value})} />
              )}
              <select className="w-full border rounded-md p-2" value={customer.payment_method} onChange={e=>setCustomer({...customer, payment_method:e.target.value})}>
                <option value="">Payment method</option>
                <option>Gopay</option>
                <option>OVO</option>
                <option>Bank Transfer</option>
                <option>Cash</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-white">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-800">Subtotal</p>
              <p className="text-lg font-bold">IDR {price.toLocaleString()}</p>
            </div>
            {!customer.pickup && (
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                <p>Delivery</p>
                <p>IDR {Number(10000).toLocaleString()}</p>
              </div>
            )}
            <button disabled={loading} onClick={submit} className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md">
              {loading ? 'Placing order...' : 'Confirm Order'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

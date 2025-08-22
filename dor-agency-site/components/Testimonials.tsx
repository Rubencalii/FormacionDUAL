'use client';
import { useState } from "react";
const testimonials = [
  {name:"María G.", role:"CMO", text:"Equipo muy sólido en performance. El reporting y la velocidad marcan la diferencia."},
  {name:"Carlos P.", role:"Founder", text:"Nos ayudaron a escalar con control de CAC y foco en margen."},
  {name:"Lucía R.", role:"Ecommerce Manager", text:"UGC y testing iterativo = crecimiento real."},
];
export default function Testimonials(){
  const [i,setI] = useState(0);
  const next = ()=> setI((i+1)%testimonials.length);
  const prev = ()=> setI((i-1+testimonials.length)%testimonials.length);
  const t = testimonials[i];
  return (
    <section className="section">
      <div className="container">
        <div className="card p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button onClick={prev} aria-label="Anterior" className="border border-border rounded px-3 py-2">‹</button>
          <div className="flex-1 px-4">
            <p className="text-lg">“{t.text}”</p>
            <p className="text-muted mt-2">— {t.name}, {t.role}</p>
          </div>
          <button onClick={next} aria-label="Siguiente" className="border border-border rounded px-3 py-2">›</button>
        </div>
      </div>
    </section>
  )
}

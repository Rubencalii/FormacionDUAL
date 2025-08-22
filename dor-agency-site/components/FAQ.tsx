'use client';
import { useState } from "react";
const faqs = [
  {q:"¿Cómo trabajáis el onboarding?", a:"Auditoría inicial, objetivos y plan de testing + creatividades."},
  {q:"¿Tenéis permanencia?", a:"No. Trabajamos mes a mes con foco en resultados."},
  {q:"¿Qué presupuesto mínimo recomendáis?", a:"Depende de la vertical. Como referencia, 3k–10k €/mes."},
];
export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-serif text-3xl mb-6">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((f,idx)=>(
            <div key={idx} className="card">
              <button onClick={()=> setOpen(open===idx?null:idx)} className="w-full text-left p-4 flex justify-between">
                <span>{f.q}</span><span>{open===idx ? "–" : "+"}</span>
              </button>
              {open===idx && (<div className="p-4 pt-0 text-muted">{f.a}</div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

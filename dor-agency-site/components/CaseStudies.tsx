const cases = [
  {title:"Ecommerce Moda", metric:"+210% ROAS", detail:"Escalado en Q4 con creatividades UGC"},
  {title:"SaaS B2B", metric:"-38% CPL", detail:"Funnel lead gen + nurturing"},
  {title:"DTC Beauty", metric:"+72% ingresos", detail:"CRO en landings y testing hooks"}
];
export default function CaseStudies(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-serif text-3xl mb-8">Casos de éxito</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c,i)=>(
            <div key={i} className="card p-6">
              <p className="text-muted">{c.title}</p>
              <p className="text-2xl mt-2">{c.metric}</p>
              <p className="text-muted mt-1">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

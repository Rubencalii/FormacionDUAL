const steps = ["Auditoría & Objetivos","Estrategia & Creatividades","Lanzamiento & Testeo","Escalado & Optimización"];
export default function Process(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-serif text-3xl mb-8">Proceso en 4 pasos</h2>
        <ol className="grid md:grid-cols-4 gap-6">
          {steps.map((s,i)=>(
            <li key={i} className="card p-6">
              <div className="text-accent text-2xl font-serif mb-2">{i+1<10?`0${i+1}`:i+1}</div>
              <p>{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

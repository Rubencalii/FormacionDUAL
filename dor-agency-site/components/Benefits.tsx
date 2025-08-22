const benefits = [
  "ROAS predecible y enfoque en margen.",
  "Creatividades UGC que detienen el scroll.",
  "Testing estructurado y aprendizaje continuo.",
  "Reporting claro, decisiones basadas en datos."
];
export default function Benefits(){
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-6">
        {benefits.map((b,i)=>(
          <div key={i} className="card p-6">
            <p className="text-lg">{b}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

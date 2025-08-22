const logos = ["Cliente A","Cliente B","Cliente C","Cliente D","Cliente E","Cliente F"];
export default function Logos(){
  return (
    <section className="section">
      <div className="container">
        <p className="text-muted text-sm mb-6">Empresas con las que trabajamos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {logos.map((l, i)=>(
            <div key={i} className="border border-border rounded-xl py-6 text-center">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

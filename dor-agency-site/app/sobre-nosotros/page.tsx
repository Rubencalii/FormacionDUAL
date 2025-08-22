import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page(){
  return (
    <>
      <Header/>
      <main className="section container">
        <h1 className="font-serif text-4xl mb-6">Sobre nosotros</h1>
        <p className="text-muted max-w-2xl">Propuesta de valor clara, enfoque en performance y exclusividad. Equipo senior (2–4 perfiles) con experiencia multi-vertical.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {["Ana — Paid Media Lead","Diego — Creative Strategist","Laura — CRO Specialist","Javier — Data Analyst"].map((p,i)=>(
            <div key={i} className="card p-6">
              <p className="text-lg">{p}</p>
              <p className="text-muted mt-2">Bio breve. Experiencia en Social Ads, UGC y optimización.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

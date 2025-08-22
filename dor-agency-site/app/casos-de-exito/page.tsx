import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const items = [
  {slug:"ecommerce-moda", title:"Ecommerce Moda", metric:"+210% ROAS"},
  {slug:"saas-b2b", title:"SaaS B2B", metric:"-38% CPL"},
  {slug:"dtc-beauty", title:"DTC Beauty", metric:"+72% ingresos"}
];

export default function Page(){
  return (
    <>
      <Header/>
      <main className="section container">
        <h1 className="font-serif text-4xl mb-6">Casos de éxito</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(x=>(
            <Link key={x.slug} href={`/casos/${x.slug}`} className="card p-6">
              <p className="text-muted">{x.title}</p>
              <p className="text-2xl mt-2">{x.metric}</p>
              <p className="text-muted mt-1">Ver caso →</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

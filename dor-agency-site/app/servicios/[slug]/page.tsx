import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const copy: Record<string, {title:string, bullets:string[]}> = {
  "facebook-ads": {title:"Facebook Ads", bullets:["Funnel completo","CBO/ABO","Retargeting","LTV"]},
  "tiktok-ads": {title:"TikTok Ads", bullets:["Nativos","Hooks","Whitelisting","Spark Ads"]},
  "ugc": {title:"Creatividad & UGC", bullets:["Guiones","Producción","Edición"]},
  "cro": {title:"CRO & Landing Optimization", bullets:["Hipótesis","A/B testing","Analytics"]}
};

export default function Page({ params }:{ params:{ slug:string }}){
  const data = copy[params.slug] ?? {title:"Servicio", bullets:[]};
  return (
    <>
      <Header/>
      <main className="section container">
        <Link href="/servicios" className="text-muted">← Volver</Link>
        <h1 className="font-serif text-4xl mt-2 mb-6">{data.title}</h1>
        <ul className="grid md:grid-cols-2 gap-3">
          {data.bullets.map((b,i)=>(<li key={i} className="card p-4">{b}</li>))}
        </ul>
      </main>
      <Footer/>
    </>
  )
}

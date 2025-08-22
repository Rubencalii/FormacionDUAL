import Link from "next/link";
const services = [
  {slug:"facebook-ads", title:"Facebook Ads", desc:"Funnel completo, CBO/ABO, retargeting, LTV."},
  {slug:"tiktok-ads", title:"TikTok Ads", desc:"Creatividades nativas, hooks, whitelisting, Spark Ads."},
  {slug:"ugc", title:"Creatividad & UGC", desc:"Guiones, producción y edición"},
  {slug:"cro", title:"CRO & Landing Optimization", desc:"Hipótesis, A/B testing y analytics"}
];
export default function Services(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="font-serif text-3xl mb-8">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(s=>(
            <Link key={s.slug} href={`/servicios/${s.slug}`} className="card p-6 hover:shadow-soft transition-shadow">
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="text-muted mt-2">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

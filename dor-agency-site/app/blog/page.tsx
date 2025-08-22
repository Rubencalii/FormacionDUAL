import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
  {slug:"creatividades-ugc-que-convierten", title:"Creatividades UGC que convierten", excerpt:"Estructuras, hooks y mejores prácticas."},
  {slug:"estructura-de-testing-en-meta", title:"Estructura de testing en Meta", excerpt:"De la hipótesis al aprendizaje."}
];

export default function Page(){
  return (
    <>
      <Header/>
      <main className="section container">
        <h1 className="font-serif text-4xl mb-6">Insights</h1>
        <div className="grid gap-6">
          {posts.map(p=>(
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6">
              <h3 className="text-xl">{p.title}</h3>
              <p className="text-muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

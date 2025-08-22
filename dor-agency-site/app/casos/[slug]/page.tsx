import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page({ params }:{ params:{slug:string}}){
  return (
    <>
      <Header/>
      <main className="section container prose prose-invert max-w-container">
        <Link href="/casos-de-exito" className="text-muted">← Volver</Link>
        <h1 className="font-serif">Caso: {params.slug.replaceAll("-", " ")}</h1>
        <p><strong>Problema:</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>Estrategia:</strong> Testing estructurado, creatividades UGC y CRO.</p>
        <p><strong>Resultados:</strong> +120% ROAS, -32% CPL.</p>
      </main>
      <Footer/>
    </>
  )
}

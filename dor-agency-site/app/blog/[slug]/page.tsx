import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page({ params }:{ params:{slug:string}}){
  return (
    <>
      <Header/>
      <main className="section container prose prose-invert max-w-container">
        <h1 className="font-serif">{params.slug.replaceAll("-", " ")}</h1>
        <p>Contenido del artículo. Preparado para SEO on-page y schema Article.</p>
      </main>
      <Footer/>
    </>
  )
}

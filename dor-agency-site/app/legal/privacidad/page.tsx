import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Política de Privacidad — D OR Agency" };

export default function Page(){
  return (
    <>
      <Header/>
      <main className="section container prose prose-invert max-w-container">
        <h1 className="font-serif">Política de Privacidad</h1>
        <p>Contenido legal de ejemplo. Sustituir por texto definitivo y adaptar a GDPR.</p>
      </main>
      <Footer/>
    </>
  )
}

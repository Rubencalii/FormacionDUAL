import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata = { title: "Servicios — D OR Agency" };

export default function Page(){
  return (
    <>
      <Header/>
      <main className="section container">
        <h1 className="font-serif text-4xl mb-6">Servicios</h1>
        <p className="text-muted mb-8">Facebook Ads, TikTok Ads, Creatividad UGC y CRO.</p>
        <Services/>
      </main>
      <Footer/>
    </>
  )
}

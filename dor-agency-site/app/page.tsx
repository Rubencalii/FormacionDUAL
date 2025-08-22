import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home(){
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Logos/>
        <Services/>
        <Benefits/>
        <CaseStudies/>
        <Testimonials/>
        <Process/>
        <FAQ/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

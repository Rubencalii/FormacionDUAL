import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="relative bg-bg text-white">
      <div className="container py-24 md:py-32">
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.6}} className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl">
          Escala tu adquisición con anuncios que convierten.
        </motion.h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">
          En D OR Agency planificamos, ejecutamos y optimizamos campañas de Facebook Ads y TikTok Ads para marcas que buscan crecimiento rentable.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="/contacto" className="px-5 py-3 rounded-lg bg-accent text-black font-medium">Agenda una llamada</a>
          <a href="/contacto#auditoria" className="px-5 py-3 rounded-lg border border-border">Auditoría gratuita</a>
        </div>
        <div className="absolute -top-10 right-10 h-44 w-44 rounded-full opacity-20" style={{background:"radial-gradient(circle, #C9A22733, transparent 60%)"}} />
      </div>
    </section>
  )
}

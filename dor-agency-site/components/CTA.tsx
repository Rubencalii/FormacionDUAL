export default function CTA(){
  return (
    <section className="section">
      <div className="container text-center">
        <h3 className="font-serif text-3xl">¿Listo para crecer? Conversemos 20 minutos.</h3>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/contacto" className="px-5 py-3 rounded-lg bg-accent text-black font-medium">Agenda una llamada</a>
          <a href="/contacto#auditoria" className="px-5 py-3 rounded-lg border border-border">Auditoría gratuita</a>
        </div>
      </div>
    </section>
  )
}

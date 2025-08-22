'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[rgba(11,11,12,.6)] border-b border-border">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide">D’OR <span className="font-sans text-sm align-super">AGENCY</span></Link>
        <nav className="hidden md:flex gap-6 text-sm text-muted">
          <Link href="/servicios">Servicios</Link>
          <Link href="/casos-de-exito">Casos</Link>
          <Link href="/sobre-nosotros">Sobre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/contacto" className="px-4 py-2 rounded-lg bg-accent text-black font-medium">Agenda una llamada</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden border border-border rounded-lg px-3 py-2">Menú</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 flex flex-col gap-3 text-muted">
            <Link href="/servicios">Servicios</Link>
            <Link href="/casos-de-exito">Casos</Link>
            <Link href="/sobre-nosotros">Sobre</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contacto" className="px-4 py-2 rounded-lg bg-accent text-black font-medium text-center">Agenda una llamada</Link>
          </div>
        </div>
      )}
    </header>
  )
}

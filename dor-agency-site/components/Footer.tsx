import Link from "next/link";
export default function Footer(){
  return (
    <footer className="border-t border-border mt-16">
      <div className="container py-10 text-sm text-muted flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} D OR Agency</p>
        <nav className="flex gap-6">
          <Link href="/legal/aviso-legal">Aviso Legal</Link>
          <Link href="/legal/privacidad">Privacidad</Link>
          <Link href="/legal/cookies">Cookies</Link>
        </nav>
      </div>
    </footer>
  )
}

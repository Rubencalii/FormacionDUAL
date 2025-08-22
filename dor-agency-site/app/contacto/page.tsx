'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

type Form = {
  nombre: string;
  email: string;
  empresa: string;
  facturacion: string;
  objetivo: string;
  web: string;
  mensaje: string;
  website: string; // honeypot
  token: string;
};

export default function Page(){
  const { register, handleSubmit, formState:{errors}, reset } = useForm<Form>();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(()=>{
    // reCAPTCHA v3 placeholder (expects global grecaptcha)
    // If you add site key, generate token and attach to hidden input.
    // @ts-ignore
    if (typeof grecaptcha !== "undefined") {
      // @ts-ignore
      grecaptcha.ready(()=>{
        // @ts-ignore
        grecaptcha.execute("RECAPTCHA_SITE_KEY", {action:"submit"}).then((token:string)=>{
          const el = document.getElementById("token") as HTMLInputElement | null;
          if (el) el.value = token;
        });
      });
    }
  },[]);

  const onSubmit = async (data: Form)=>{
    if (data.website) return; // honeypot
    setStatus("Enviando...");
    const res = await fetch("/.netlify/functions/lead", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
    });
    if(res.ok){ setStatus("¡Gracias! Te contactaremos pronto."); reset(); }
    else { setStatus("Error al enviar. Intenta de nuevo."); }
  };

  return (
    <>
      <Header/>
      <main className="section container">
        <h1 className="font-serif text-4xl mb-6">Contacto / Agenda</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4" id="auditoria">
            <input type="text" id="token" hidden {...register("token")} />
            <input className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />
            <div>
              <label className="block text-sm text-muted">Nombre</label>
              <input className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" {...register("nombre", {required:true})} />
              {errors.nombre && <span className="text-red-400 text-sm">Requerido</span>}
            </div>
            <div>
              <label className="block text-sm text-muted">Email</label>
              <input type="email" className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" {...register("email", {required:true})} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-muted">Empresa</label>
                <input className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" {...register("empresa")} />
              </div>
              <div>
                <label className="block text-sm text-muted">Facturación mensual</label>
                <input className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" placeholder="€" {...register("facturacion")} />
              </div>
            </div>
            <div>
              <label className="block text-sm text-muted">Objetivo</label>
              <select className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" {...register("objetivo")}>
                <option className="bg-bg">Escalar ventas</option>
                <option className="bg-bg">Mejorar ROAS</option>
                <option className="bg-bg">Reducir CPL</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-muted">Web</label>
              <input className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" {...register("web")} />
            </div>
            <div>
              <label className="block text-sm text-muted">Mensaje</label>
              <textarea className="w-full mt-1 rounded-lg bg-transparent border border-border p-3" rows={5} {...register("mensaje")} />
            </div>
            <button className="px-5 py-3 rounded-lg bg-accent text-black font-medium">Enviar</button>
            {status && <p className="text-sm text-muted">{status}</p>}
          </form>

          <div className="card p-6">
            <h2 className="font-serif text-2xl mb-3">Agenda una llamada</h2>
            <p className="text-muted mb-4">Reserva 20 minutos para ver si hay encaje y oportunidades.</p>
            <button id="open-cal" className="px-5 py-3 rounded-lg border border-border">Abrir Calendario</button>
            <div id="calendly-embed" className="mt-4"></div>
            <script
              dangerouslySetInnerHTML={{__html:`
                document.getElementById('open-cal').addEventListener('click', function(){
                  var url = (process.env.NEXT_PUBLIC_CALENDLY_URL || '') || (typeof window !== 'undefined' ? localStorage.getItem('cal_url') : '');
                  if(!url) url = 'https://calendly.com/tu-calendly/intro';
                  const el = document.getElementById('calendly-embed');
                  el.innerHTML = '<iframe src="'+url+'" style="width:100%;height:600px;border:0;border-radius:12px"></iframe>';
                });
              `}}
            />
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

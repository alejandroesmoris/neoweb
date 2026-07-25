import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'E-Commerce / Tienda Online',
    message: '',
    budget: 'De $150.000 a $300.000',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hola Neo Web! Dejé una consulta en el formulario de contacto:
👤 *Nombre:* ${formData.name}
📱 *Teléfono:* ${formData.phone}
✉️ *Email:* ${formData.email}
📦 *Tipo de Proyecto:* ${formData.projectType}
💰 *Presupuesto Aprox:* ${formData.budget}
💬 *Mensaje:* ${formData.message}`;

    window.open(`https://wa.me/5491176621380?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACTO DIRECTO & ASESORAMIENTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Empecemos tu Proyecto con <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Neo Web</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dejanos tu consulta y te respondemos en menos de 2 horas con una propuesta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Info & WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6">

            {/* Direct WhatsApp Callout Card */}
            <div className="bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg">
                  <MessageCircle className="w-7 h-7 text-slate-950 fill-slate-950" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
                    Respuesta Inmediata
                  </span>
                  <h3 className="text-xl font-bold text-white">Atención por WhatsApp</h3>
                </div>
              </div>

              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                ¿Preferís chatear directamente? Escribinos al número <strong className="text-white font-mono">1176621380</strong> para sacarte todas las dudas en vivo.
              </p>

              <div className="bg-slate-950/90 border border-emerald-500/30 rounded-2xl p-4 flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Número Oficial</span>
                  <span className="text-2xl font-extrabold text-white font-mono tracking-wider">
                    1176621380
                  </span>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <a
                href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Quisiera%20consultar%20por%20desarrollo%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>INICIAR CHAT DE WHATSAPP</span>
              </a>
            </div>

            {/* Additional Contact Info Details */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 space-y-4 text-xs">
              <div className="flex items-start gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Email Comercial:</span>
                  <span className="text-slate-400 font-mono">contacto@neoweb.com.ar</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Horarios de Atención:</span>
                  <span className="text-slate-400">Lunes a Sábados: 09:00 hs a 20:00 hs</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Garantía Neo Web:</span>
                  <span className="text-slate-400">Entrega en tiempo acordado y soporte técnico prioritario.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Phone / WhatsApp Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 1123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                      Tipo de Servicio
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="E-Commerce / Tienda Online">E-Commerce / Tienda Online</option>
                      <option value="Página Web Institucional">Página Web Institucional</option>
                      <option value="Landing Page Comercial">Landing Page Comercial</option>
                      <option value="Rediseño / Aceleración Web">Rediseño / Aceleración Web</option>
                      <option value="Sistema / Desarrollo a Medida">Sistema / Desarrollo a Medida</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase mb-2">
                    Detalles o Mensaje del Proyecto
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Contanos un poco sobre tu negocio, qué productos/servicios vendés y qué funciones te gustaría tener..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(0,163,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <span>ENVIAR FORMULARIO</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-slate-400 font-mono text-center sm:text-left">
                    Sin compromisos. Respondemos a la brevedad.
                  </span>
                </div>

              </form>
            ) : (
              /* Success Screen */
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">¡Gracias por contactarte, {formData.name}!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Recibimos tus datos correctamente. Si querés una atención instantánea en este momento, podés enviar tu mensaje directo por WhatsApp.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Enviar esta Consulta a WhatsApp (1176621380)</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3.5 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold rounded-xl"
                  >
                    Volver al Formulario
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

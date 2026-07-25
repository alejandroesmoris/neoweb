import React from 'react';
import { Logo } from './Logo';
import { Shield, Zap, TrendingUp, Headphones, Code, Sparkles, MessageCircle, ArrowRight, Laptop, Monitor, Smartphone, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-slate-950 flex flex-col justify-center">
      {/* Cyber Grid Background & Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Radial Blue & Cyan Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[300px] bg-teal-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Main Hero Messaging & Logo */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(0,163,255,0.2)]">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span>DESARROLLO WEB & E-COMMERCE PROFESIONAL</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping ml-1" />
            </div>

            {/* Neo Web Main Brand Header */}
            <div className="py-2">
              <Logo variant="full" size="xl" />
            </div>

            {/* Main Slogan directly from uploaded image */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight max-w-2xl">
              Creamos sitios web modernos, rápidos y que{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                hacen crecer tu negocio.
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Diseño de páginas web institucionales, landing pages de alta conversión y tiendas online E-Commerce integradas con Mercado Pago y pedidos automáticos a WhatsApp.
            </p>

            {/* Big WhatsApp Contact Banner (Exact replica of image element) */}
            <div className="w-full max-w-md pt-2">
              <div className="relative group bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-4 shadow-[0_0_25px_rgba(0,163,255,0.2)] hover:border-cyan-400 transition-all">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-md">
                      <MessageCircle className="w-6 h-6 text-slate-950 fill-slate-950" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                        WhatsApp Directo
                      </span>
                      <span className="text-xl sm:text-2xl font-black font-mono tracking-wider text-white">
                        1176621380
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Quisiera%20consultar%20por%20un%20sitio%20web%20/%20tienda%20e-commerce."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <span>CHATEAR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#cotizador"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-xl shadow-[0_0_25px_rgba(0,163,255,0.4)] hover:shadow-[0_0_35px_rgba(0,163,255,0.6)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Cotizar Mi Proyecto</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#portfolio"
                className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <span>Ver Portfolio Interactivos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Mockup Showcase with Glowing Feature Badges */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">

            {/* Interactive Device Mockup Frame */}
            <div className="relative w-full max-w-lg">
              {/* Glowing aura background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-teal-400/20 rounded-3xl blur-2xl -z-10" />

              {/* Laptop Display Box */}
              <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-3 shadow-[0_20px_50px_rgba(3,7,18,0.9)] backdrop-blur-xl">
                {/* Browser top bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 px-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="bg-slate-950 px-4 py-0.5 rounded-full border border-slate-800 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    https://neoweb.com.ar
                  </div>
                  <div className="w-12 text-right">
                    <Code className="w-3.5 h-3.5 text-slate-600 inline-block" />
                  </div>
                </div>

                {/* Internal Screen Mockup Graphic */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4 min-h-[260px] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-[10px] font-bold text-cyan-300">
                        NW
                      </div>
                      <span className="text-xs font-bold text-slate-200">E-Commerce Live</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                      Mercado Pago OK
                    </span>
                  </div>

                  {/* Simulated E-Commerce products grid */}
                  <div className="grid grid-cols-2 gap-2 my-3">
                    <div className="bg-slate-900/90 border border-cyan-500/20 rounded-lg p-2.5 flex flex-col justify-between">
                      <div className="h-16 bg-gradient-to-tr from-slate-800 to-slate-800/40 rounded-md mb-2 flex items-center justify-center text-slate-500 text-xs">
                        📦 Producto 01
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold">$24.990</span>
                        <span className="bg-cyan-500 text-slate-950 text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                          COMPRAR
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-900/90 border border-cyan-500/20 rounded-lg p-2.5 flex flex-col justify-between">
                      <div className="h-16 bg-gradient-to-tr from-slate-800 to-slate-800/40 rounded-md mb-2 flex items-center justify-center text-slate-500 text-xs">
                        ⚡ Producto 02
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold">$48.500</span>
                        <span className="bg-cyan-500 text-slate-950 text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                          COMPRAR
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout bar */}
                  <div className="bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-500/30 rounded-lg p-2 flex items-center justify-between text-[10px] text-emerald-300">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Carrito sincronizado
                    </span>
                    <span className="font-mono font-bold">WhatsApp Order</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Cards Matching Image Badges */}
              <div className="absolute -top-4 -right-4 bg-slate-900/95 border border-cyan-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-bold text-slate-100 animate-bounce duration-[3000ms]">
                <Monitor className="w-4 h-4 text-cyan-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono text-cyan-400">ESTILO</span>
                  <span>DISEÑO MODERNO</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-slate-900/95 border border-cyan-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-bold text-slate-100">
                <Zap className="w-4 h-4 text-cyan-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono text-cyan-400">VELOCIDAD</span>
                  <span>MÁXIMO RENDIMIENTO</span>
                </div>
              </div>

              <div className="absolute bottom-12 -right-6 bg-slate-900/95 border border-cyan-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-bold text-slate-100">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono text-cyan-400">ADAPTABLE</span>
                  <span>100% RESPONSIVE</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Bottom Feature Badges matching bottom bar in user image */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all duration-300 flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 uppercase tracking-wider font-mono">
                SITIOS SEGUROS
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Certificados SSL & Protección</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all duration-300 flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 uppercase tracking-wider font-mono">
                CARGA RÁPIDA
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Velocidad & Ultra Fluidez</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all duration-300 flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 uppercase tracking-wider font-mono">
                SEO OPTIMIZADO
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Posicionamiento en Google</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all duration-300 flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 uppercase tracking-wider font-mono">
                SOPORTE PERSONALIZADO
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Atención directa WhatsApp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

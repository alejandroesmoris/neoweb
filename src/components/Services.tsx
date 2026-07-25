import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Layout, ShoppingBag, Zap, Code2, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#00F2FF]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#00F2FF]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#00F2FF]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#00F2FF]" />;
      default:
        return <Layout className="w-6 h-6 text-[#00F2FF]" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7000FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00F2FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#00F2FF] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUCIONES DIGITALES A MEDIDA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            Diseño Web y E-Commerce que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7000FF] via-[#a040ff] to-[#00F2FF]">impulsan resultados</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Te acompañamos en cada etapa de tu transformación digital con soluciones rápidas, seguras y de alto impacto visual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 border border-white/10 hover:border-[#00F2FF]/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(112,0,255,0.2)] flex flex-col justify-between group relative overflow-hidden backdrop-blur-md"
            >
              {/* Subtle top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7000FF] to-[#00F2FF] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Info & Badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7000FF]/20 to-[#00F2FF]/20 border border-white/15 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-[11px] font-mono font-bold tracking-wider uppercase">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#00F2FF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm font-medium mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#00F2FF] font-extrabold block mb-1">
                    Características Clave:
                  </span>
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#00F2FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <span className="text-[10px] text-slate-500 font-mono uppercase block">Ideal Para:</span>
                  <span className="text-xs font-medium text-slate-400">{service.popularFor}</span>
                </div>

                <a
                  href="#cotizador"
                  className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#7000FF] to-[#00F2FF] hover:opacity-90 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-purple-900/30"
                >
                  <span>Cotizar {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* E-Commerce Highlight Banner */}
        <div id="ecommerce" className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_0_50px_rgba(112,0,255,0.15)] relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono font-bold uppercase tracking-wider">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ESPECIALIDAD E-COMMERCE CON MERCADO PAGO</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                ¿Querés vender tus productos online sin pagar comisiones excesivas?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                Te armamos una tienda online profesional lista para facturar. Incluye integración directa con Mercado Pago, pedidos automáticos a tu WhatsApp con el detalle exacto del cliente, catálogo responsive y panel para subir productos fácilmente.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[#00F2FF] pt-2">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  ✓ Mercado Pago Automático
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  ✓ Checkout WhatsApp 1-Click
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  ✓ Carga de Stock Simple
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3">
              <a
                href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Me%20interesa%20crear%20una%20tienda%20online%20E-Commerce."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2"
              >
                <span>CONSULTAR TIENDA POR WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-slate-400 font-mono">
                Respuesta inmediata en WhatsApp 1176621380
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


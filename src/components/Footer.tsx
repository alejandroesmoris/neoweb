import React from 'react';
import { Logo } from './Logo';
import { MessageCircle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Column: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="horizontal" size="md" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              Neo Web es tu estudio de desarrollo web y e-commerce. Creamos sitios web modernos, rápidos y optimizados para potenciar las ventas de tu empresa o emprendimiento.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-slate-300 font-mono text-[11px]">Servidores activos & SSL 100% Protegidos</span>
            </div>
          </div>

          {/* Middle Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold font-mono uppercase tracking-wider text-xs">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios & E-Commerce</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio Interactivos</a></li>
              <li><a href="#cotizador" className="hover:text-cyan-400 transition-colors">Estimador de Presupuesto</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Right Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold font-mono uppercase tracking-wider text-xs">Contacto Directo</h4>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-[11px] font-mono uppercase">WhatsApp Oficial</span>
                <span className="text-emerald-400 text-[11px] font-mono font-bold">En Línea</span>
              </div>
              <div className="text-2xl font-black font-mono text-white tracking-wider">
                1176621380
              </div>
              <a
                href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Quisiera%20consultar%20por%20un%20sitio%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>Escribinos por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Neo Web &lt; DESARROLLO WEB &gt; Todos los derechos reservados.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors flex items-center gap-1.5"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

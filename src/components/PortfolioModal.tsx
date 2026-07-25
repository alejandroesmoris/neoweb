import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { X, ExternalLink, Smartphone, Monitor, Check, ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!item) return null;

  const handleQuoteClick = () => {
    const text = encodeURIComponent(`Hola Neo Web! Me gustó mucho el proyecto "${item.title}" y quisiera cotizar una web similar para mi negocio.`);
    window.open(`https://wa.me/5491176621380?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col">

        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold rounded-full uppercase">
              {item.categoryLabel}
            </span>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-400 font-mono">Cliente: {item.client}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">

          {/* Interactive Screen Preview Container */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Vista previa de interfaz interactiva
              </span>

              {/* Viewport Switcher */}
              <div className="inline-flex p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                    viewMode === 'desktop'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium transition-all ${
                    viewMode === 'mobile'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            {/* Simulated Frame */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-center min-h-[340px] relative overflow-hidden">
              {viewMode === 'desktop' ? (
                <div className="w-full rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900">
                  <div className="bg-slate-800/80 px-3 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="bg-slate-950 px-3 py-0.5 rounded-md text-[10px] text-slate-400 font-mono flex-1 text-center truncate">
                      https://preview.neoweb.com.ar/projects/{item.id}
                    </div>
                  </div>
                  <img
                    src={item.desktopPreview}
                    alt={item.title}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-[280px] rounded-[32px] p-2 bg-slate-800 border-2 border-slate-700 shadow-2xl">
                  <div className="w-full bg-slate-950 rounded-[24px] overflow-hidden border border-slate-800">
                    <div className="h-5 bg-slate-900 flex justify-center items-center">
                      <div className="w-16 h-2 bg-slate-800 rounded-full" />
                    </div>
                    <img
                      src={item.mobilePreview || item.desktopPreview}
                      alt={item.title}
                      className="w-full h-96 object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {item.metrics.map((metric, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-cyan-500/20 rounded-2xl p-4 text-center">
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-400 font-medium block mt-1">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
                Descripción del Proyecto:
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.longDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-cyan-300 text-[11px] rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
                Funcionalidades Desarrolladas:
              </h4>
              <div className="space-y-2">
                {item.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>¿Querés un resultado similar para tu marca? Cotizamos en el día.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleQuoteClick}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Quiero una Web Como Esta (WhatsApp)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

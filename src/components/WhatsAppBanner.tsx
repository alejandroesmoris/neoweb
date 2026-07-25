import React, { useState } from 'react';
import { MessageCircle, ExternalLink, Copy, Check } from 'lucide-react';

export const WhatsAppBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const displayPhone = '1176621380';
  const rawPhone = '5491176621380';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(displayPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_0_30px_rgba(112,0,255,0.2)] group backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-[#7000FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-24 bg-[#00F2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info Box */}
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="relative shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#25D366] via-[#128C7E] to-[#00F2FF] p-0.5 shadow-[0_0_20px_rgba(37,211,102,0.4)]">
              <div className="w-full h-full bg-[#0A0A0B] rounded-[14px] flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-[#25D366] fill-[#25D366]/20" />
              </div>
            </div>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-[#0A0A0B]"></span>
            </span>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-mono font-bold uppercase mb-1">
              <span>Atención Inmediata</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
              ¿Tenés dudas o querés cotizar tu web ahora?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
              Escribinos directamente a nuestro WhatsApp para asesoramiento personalizado sin compromiso.
            </p>
          </div>
        </div>

        {/* WhatsApp Big Phone Box Matching User Image Banner Style */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Main Glowing Phone Pill */}
          <div className="flex items-center justify-between gap-4 px-6 py-3.5 bg-[#0A0A0B]/90 border border-[#25D366]/50 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.2)] w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-5 h-5 text-black fill-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 leading-none font-bold">
                  WhatsApp
                </span>
                <span className="text-2xl sm:text-3xl font-black tracking-wider font-mono text-white">
                  {displayPhone}
                </span>
              </div>
            </div>

            <button
              onClick={copyToClipboard}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-2"
              title="Copiar número"
            >
              {copied ? <Check className="w-5 h-5 text-[#25D366]" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          {/* Action Button */}
          <a
            href={`https://wa.me/${rawPhone}?text=Hola%20Neo%20Web!%20Me%20interesa%20cotizar%20un%20sitio%20web%20/%20tienda%20e-commerce.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#7000FF] to-[#00F2FF] hover:opacity-90 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(112,0,255,0.4)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ABRIR CHAT</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
};


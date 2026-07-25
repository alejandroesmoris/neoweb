import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCheck, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ phoneNumber = '1176621380' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const formattedPhone = '5491176621380';
  const displayPhone = '1176621380';

  const quickQuestions = [
    'Hola Neo Web! Quisiera cotizar una tienda online E-Commerce.',
    'Hola! Necesito un sitio web para mi empresa/negocio.',
    'Hola Neo Web, quisiera consultar precios y tiempos de entrega.',
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = encodeURIComponent(textToSend || message || 'Hola Neo Web! Quisiera consultar por desarrollo de página web / e-commerce.');
    window.open(`https://wa.me/${formattedPhone}?text=${finalMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Expandable WhatsApp Card Popup */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-slate-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-[0_10px_40px_rgba(16,185,129,0.25)] overflow-hidden transition-all transform animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-black/20 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center font-bold text-cyan-400 text-lg shadow-inner">
                  NW
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-emerald-700 rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-base leading-snug flex items-center gap-1.5">
                  Neo Web <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                </h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping inline-block" />
                  En línea | Respuestas inmediatas
                </p>
                <p className="text-[11px] text-emerald-200/90 font-mono mt-0.5">WhatsApp: {displayPhone}</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-950/80 space-y-3 max-h-[320px] overflow-y-auto">
            {/* Simulated Agent Chat Bubble */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl rounded-tl-none p-3 max-w-[88%] shadow-md text-slate-200 text-xs leading-relaxed space-y-1">
              <p className="font-semibold text-emerald-400">👋 ¡Hola! Somos Neo Web.</p>
              <p>¿En qué podemos ayudarte hoy? Diseñamos sitios web y tiendas online e-commerce a medida.</p>
              <div className="flex items-center justify-end text-[10px] text-slate-400 gap-0.5 pt-1">
                <span>En línea</span>
                <CheckCheck className="w-3 h-3 text-emerald-400" />
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Consultas frecuentes:
              </p>
              <div className="space-y-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="w-full text-left text-xs bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 p-2.5 rounded-xl transition-all flex items-center justify-between group"
                  >
                    <span className="line-clamp-2">{q}</span>
                    <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribí tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold p-2 rounded-xl transition-transform active:scale-95 flex items-center justify-center shrink-0"
              title="Enviar por WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold px-4 py-3.5 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-emerald-300/30 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Contactar por WhatsApp 1176621380"
      >
        {/* Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-md group-hover:bg-emerald-400/50 transition-opacity animate-pulse" />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600 transition-transform group-hover:rotate-12" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full border border-emerald-600 animate-ping" />
        </div>

        {/* Text Badge showing phone number directly as requested */}
        <div className="relative flex flex-col text-left leading-tight pr-1">
          <span className="text-[10px] text-emerald-100 uppercase tracking-widest font-mono">WhatsApp Directo</span>
          <span className="text-sm font-extrabold tracking-wide font-mono text-white">{displayPhone}</span>
        </div>
      </button>
    </div>
  );
};

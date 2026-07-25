import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESPUESTAS A DUDAS HABITUALES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Todo lo que necesitás saber antes de comenzar a desarrollar tu sitio web o tienda e-commerce.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/50 shadow-[0_0_20px_rgba(0,163,255,0.1)]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-100 hover:text-cyan-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 font-extrabold bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {faq.category}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">¿Tenés otra consulta que no figura acá?</h4>
            <p className="text-xs text-slate-400">Escribinos directamente a nuestro equipo de desarrollo.</p>
          </div>
          <a
            href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Tengo%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Consultar por WhatsApp (1176621380)</span>
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Menu, X, ArrowRight, Calculator } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'E-Commerce', href: '#ecommerce' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Preguntas', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_10px_30px_rgba(3,7,18,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#inicio" className="group">
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Calculator Quick Action */}
            <a
              href="#cotizador"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cotizar Web</span>
            </a>

            {/* Direct WhatsApp Callout */}
            <a
              href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Quisiera%20consultar%20por%20un%20desarrollo%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span className="font-mono font-extrabold tracking-wide">1176621380</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/30 px-4 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href="#cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Cotizador Online de Proyectos</span>
            </a>

            <a
              href="https://wa.me/5491176621380?text=Hola%20Neo%20Web!%20Quisiera%20consultar%20por%20un%20desarrollo%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Escribir por WhatsApp: 1176621380</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

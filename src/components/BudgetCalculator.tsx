import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Send, Sparkles, RefreshCw, ShoppingBag, Globe, Zap, Shield, HelpCircle } from 'lucide-react';

interface ProjectType {
  id: string;
  name: string;
  basePrice: number;
  deliveryDays: string;
  description: string;
  icon: string;
}

interface ExtraFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  popular?: boolean;
}

export const BudgetCalculator: React.FC = () => {
  const projectTypes: ProjectType[] = [
    {
      id: 'landing',
      name: 'Landing Page Comercial',
      basePrice: 120000,
      deliveryDays: '3 a 5 días',
      description: 'Página web de 1 sola sección optimizada para vender un producto, servicio o campaña publicitaria.',
      icon: 'Globe'
    },
    {
      id: 'institucional',
      name: 'Sitio Web Institucional',
      basePrice: 180000,
      deliveryDays: '5 a 8 días',
      description: 'Web completa de hasta 5 secciones (Inicio, Nosotros, Servicios, Galería/Trabajos, Contacto).',
      icon: 'Globe'
    },
    {
      id: 'ecommerce',
      name: 'Tienda Online E-Commerce',
      basePrice: 280000,
      deliveryDays: '7 a 12 días',
      description: 'E-commerce profesional con carrito de compras, catálogo, Mercado Pago y pedidos a WhatsApp.',
      icon: 'ShoppingBag'
    },
    {
      id: 'sistema',
      name: 'Sistema / Web App a Medida',
      basePrice: 380000,
      deliveryDays: '10 a 20 días',
      description: 'Desarrollo complejo con paneles de gestión, usuarios, reservas de turnos y funciones custom.',
      icon: 'Zap'
    }
  ];

  const extraFeatures: ExtraFeature[] = [
    {
      id: 'mercadopago',
      name: 'Integración Mercado Pago',
      price: 35000,
      description: 'Aceptá tarjetas, cuotas y transferencias de forma automática.',
      popular: true
    },
    {
      id: 'whatsapp_cart',
      name: 'Pedidos Automáticos WhatsApp',
      price: 25000,
      description: 'Tus clientes envían la comanda detallada directo a tu chat.',
      popular: true
    },
    {
      id: 'admin_panel',
      name: 'Panel Gestor de Productos',
      price: 40000,
      description: 'Autogestioná tus contenidos, fotos y precios sin depender de nadie.'
    },
    {
      id: 'seo_advanced',
      name: 'Paquete SEO Avanzado Google',
      price: 30000,
      description: 'Optimización de palabras clave y alta en Google Search Console & Maps.'
    },
    {
      id: 'hosting_domain',
      name: 'Dominio .COM.AR + Hosting (1 Año)',
      price: 25000,
      description: 'Nos encargamos de toda la configuración del servidor y dominio.'
    },
    {
      id: 'multilang',
      name: 'Soporte Multilenguaje (Español / Inglés)',
      price: 35000,
      description: 'Llegá a clientes internacionales con selector de idioma.'
    }
  ];

  const [selectedType, setSelectedType] = useState<string>('ecommerce');
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['mercadopago', 'whatsapp_cart', 'hosting_domain']);
  const [clientNote, setClientNote] = useState<string>('');

  const currentType = projectTypes.find((p) => p.id === selectedType) || projectTypes[2];

  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const feat = extraFeatures.find((f) => f.id === extraId);
    return sum + (feat ? feat.price : 0);
  }, 0);

  const totalPrice = currentType.basePrice + extrasTotal;

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const handleSendToWhatsApp = () => {
    const selectedExtraNames = selectedExtras
      .map((eId) => extraFeatures.find((f) => f.id === eId)?.name)
      .filter(Boolean)
      .join(', ');

    const messageText = `Hola Neo Web! Calculé la cotización de mi proyecto en la web:
📌 *Tipo de Proyecto:* ${currentType.name}
📦 *Módulos Adicionales:* ${selectedExtraNames || 'Ninguno'}
⏱️ *Plazo Estimado:* ${currentType.deliveryDays}
💰 *Presupuesto Estimado:* $${totalPrice.toLocaleString('es-AR')} ARS
${clientNote ? `💬 *Nota adicional:* ${clientNote}` : ''}

¿Me podrían asesorar para dar inicio al proyecto?`;

    window.open(`https://wa.me/5491176621380?text=${encodeURIComponent(messageText)}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>ESTIMADOR DE PRESUPUESTO INSTANTÁNEO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Cotizá tu Sitio Web o E-Commerce en <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">30 Segundos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Elegí las características de tu proyecto y obtené un estimado transparente. Luego podés enviárnoslo directamente por WhatsApp para coordinar.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Selections */}
          <div className="lg:col-span-8 space-y-8">

            {/* Step 1: Project Type Selection */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  1
                </span>
                Elegí el Tipo de Proyecto
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-950 border-cyan-500/80 shadow-[0_0_20px_rgba(0,163,255,0.2)]'
                          : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-bold text-sm sm:text-base ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                            {type.name}
                          </h4>
                          <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                          {type.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500">Tiempo: {type.deliveryDays}</span>
                        <span className="text-white font-extrabold text-sm">
                          ${type.basePrice.toLocaleString('es-AR')}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Extra Features Selection */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  2
                </span>
                Agregá Funcionalidades Extra (Opcional)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extraFeatures.map((feature) => {
                  const isChecked = selectedExtras.includes(feature.id);
                  return (
                    <div
                      key={feature.id}
                      onClick={() => toggleExtra(feature.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all ${
                        isChecked
                          ? 'bg-slate-950 border-cyan-500/60 shadow-[0_0_15px_rgba(0,163,255,0.15)]'
                          : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5">
                          <span className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border shrink-0 ${
                            isChecked ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className={`text-xs font-bold ${isChecked ? 'text-cyan-300' : 'text-slate-200'}`}>
                                {feature.name}
                              </h5>
                              {feature.popular && (
                                <span className="px-1.5 py-0.2 bg-cyan-500/20 text-cyan-300 text-[9px] font-mono rounded">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                              {feature.description}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-mono font-bold text-slate-300 shrink-0">
                          +${feature.price.toLocaleString('es-AR')}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Optional Note */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block mb-2">
                ¿Querés agregar alguna duda o comentario sobre tu rubro? (Opcional)
              </label>
              <input
                type="text"
                placeholder="Ej: Tengo una marca de indumentaria y necesito vender con 3 cuotas sin interés."
                value={clientNote}
                onChange={(e) => setClientNote(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

          </div>

          {/* Right Column: Sticky Budget Breakdown Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,163,255,0.2)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />

              <h3 className="text-xl font-extrabold text-white mb-6 flex items-center justify-between">
                <span>Resumen de Cotización</span>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </h3>

              {/* Breakdown List */}
              <div className="space-y-4 text-xs pb-6 border-b border-slate-800">
                <div className="flex justify-between items-start">
                  <span className="text-slate-400 font-medium">{currentType.name}</span>
                  <span className="text-white font-mono font-bold">
                    ${currentType.basePrice.toLocaleString('es-AR')}
                  </span>
                </div>

                {selectedExtras.map((eId) => {
                  const feat = extraFeatures.find((f) => f.id === eId);
                  if (!feat) return null;
                  return (
                    <div key={eId} className="flex justify-between items-start text-[11px]">
                      <span className="text-slate-400">+ {feat.name}</span>
                      <span className="text-cyan-400 font-mono">
                        ${feat.price.toLocaleString('es-AR')}
                      </span>
                    </div>
                  );
                })}

                <div className="pt-2 flex justify-between text-slate-400 text-[11px] font-mono">
                  <span>Plazo de entrega aproximado:</span>
                  <span className="text-emerald-400 font-bold">{currentType.deliveryDays}</span>
                </div>
              </div>

              {/* Total Price Display */}
              <div className="py-6 text-center space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-mono block">
                  Presupuesto Total Estimado
                </span>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-400 bg-clip-text text-transparent font-mono">
                  ${totalPrice.toLocaleString('es-AR')} <span className="text-xs font-normal text-slate-400">ARS</span>
                </div>
                <span className="text-[10px] text-slate-500 block pt-1">
                  50% seña inicial / 50% al entregar la web online
                </span>
              </div>

              {/* Send to WhatsApp Callout */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>ENVIAR COTIZACIÓN A WHATSAPP</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center font-mono">
                  Atención directa en el número <strong className="text-emerald-400">1176621380</strong>
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, ProjectCategory } from '../types';
import { PortfolioModal } from './PortfolioModal';
import { ExternalLink, Eye, Search, Sparkles, Filter, ArrowUpRight } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'todos', label: 'Todos los Proyectos' },
    { key: 'ecommerce', label: 'Tiendas E-Commerce' },
    { key: 'web', label: 'Sitios Web' },
    { key: 'landing', label: 'Landing Pages' },
    { key: 'sistemas', label: 'Sistemas & Web Apps' },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO & TRABAJOS DESTACADOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Galería Interactiva de <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Proyectos Reales</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explorá algunos de los sitios web y tiendas online que desarrollamos para nuestros clientes. Hacé clic para ver detalles interactivos y métricas.
          </p>
        </div>

        {/* Controls Bar: Category Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_15px_rgba(0,163,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por rubro o tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,163,255,0.2)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Thumbnail with Overlay */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold rounded-full">
                    {item.categoryLabel}
                  </span>

                  {/* Quick Action Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-xs">
                    <span className="px-4 py-2 bg-cyan-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      Ver Proyecto Interactivo
                    </span>
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      {item.title}
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400" />
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="flex items-center gap-2 pt-2">
                    {item.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg text-[10px] text-slate-300 font-mono">
                        <span className="text-cyan-400 font-bold">{m.value}</span> {m.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Tech Tags */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-slate-400 text-[10px] rounded-md font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">No encontramos proyectos para esta búsqueda o categoría.</p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-bold rounded-xl"
            >
              Restablecer Filtros
            </button>
          </div>
        )}

        {/* Modal Window */}
        <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      </div>
    </section>
  );
};

import { PortfolioItem, FAQItem, ServiceItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'urban-shop',
    title: 'Aura Fashion E-Commerce',
    client: 'Aura Clothing Co.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    description: 'Tienda de indumentaria urbana con carrito inteligente, Mercado Pago y catálogo sincronizado con WhatsApp.',
    longDescription: 'Plataforma e-commerce completa con checkout optimizado para conversión en móviles. Cuenta con filtros dinámicos por talle y color, integración con Mercado Pago, cálculo automático de envíos por Andreani / Oca, y sincronización de pedidos directos a WhatsApp para consultas exprés.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    mobilePreview: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80',
    tags: ['E-Commerce', 'Mercado Pago', 'React', 'WhatsApp Cart', 'SEO'],
    metrics: [
      { label: 'Aumento de ventas', value: '+210%' },
      { label: 'Tiempo de carga', value: '0.8s' },
      { label: 'Conversión Mobile', value: '4.8%' },
    ],
    features: [
      'Checkout ultra rápido en 2 pasos',
      'Integración con Pasarela Mercado Pago & Transferencia con descuento',
      'Stock en tiempo real y alerta de talle agotado',
      'Botón flotante de compra rápida vía WhatsApp',
      'Optimización SEO para posicionamiento en Google'
    ],
    featured: true,
  },
  {
    id: 'tech-nexus',
    title: 'Nexus Tech Store',
    client: 'Nexus Importaciones',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Hardware',
    description: 'Tienda online de tecnología e insumos con buscador instantáneo y financiamiento en cuotas.',
    longDescription: 'Diseño futurista en modo oscuro alineado a la estética gamer y tech. Integrado con sistema de cuotas con tarjeta, cupones de descuento por tiempo limitado, comparador de productos y módulo de preguntas frecuentes automatizado.',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80',
    mobilePreview: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    tags: ['E-Commerce', 'Tech', 'Mercado Pago', 'Buscador Live', 'High Performance'],
    metrics: [
      { label: 'Aumento de tráfico', value: '+350%' },
      { label: 'PageSpeed score', value: '99/100' },
      { label: 'Carritos recuperados', value: '+42%' },
    ],
    features: [
      'Modo oscuro cyberpunk con iluminación LED neon',
      'Calculadora instantánea de cuotas y promociones bancarias',
      'Buscador predictivo en vivo con imágenes',
      'Sincronización con catálogo de Facebook e Instagram Shopping'
    ],
    featured: true,
  },
  {
    id: 'valencia-realestate',
    title: 'Grupo Valencia Inmobiliaria',
    client: 'Valencia Bienes Raíces',
    category: 'web',
    categoryLabel: 'Sitio Web Institucional',
    description: 'Portal inmobiliario exclusivo con filtro avanzado de propiedades, mapa interactivo y recorrido virtual.',
    longDescription: 'Sitio web institucional moderno para una firma inmobiliaria líder. Permite filtrar propiedades por zona, tipo de operación, ambiente y presupuesto. Cuenta con formulario de tasación online y botón directo a asesor de WhatsApp en cada ficha.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    mobilePreview: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    tags: ['Sitio Web', 'Inmobiliaria', 'Filtros Dinámicos', 'SEO Local', 'WhatsApp Leads'],
    metrics: [
      { label: 'Consultas mensuales', value: '380+' },
      { label: 'Posición Google', value: 'Top 3' },
      { label: 'Retención de usuario', value: '3m 45s' },
    ],
    features: [
      'Filtros interactivos de propiedades sin recargar la página',
      'Integración con Google Maps API y puntos de interés cercanos',
      'Formulario de solicitud de tasación rápida',
      'Ficha técnica descargable en PDF generado automáticamente'
    ],
    featured: true,
  },
  {
    id: 'vitalis-clinic',
    title: 'Centro Médico Vitalis',
    client: 'Vitalis Salud & Estética',
    category: 'landing',
    categoryLabel: 'Landing Page + Turnos',
    description: 'Landing page de alta conversión para tratamientos médicos y estéticos con reserva directa.',
    longDescription: 'Diseño limpio y profesional que transmite máxima confianza. Incluye galería de casos de éxito del antes y después, testimonios en video, tabla comparativa de servicios y selector de especialidades con reserva directa.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    mobilePreview: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tags: ['Landing Page', 'Salud', 'Turnos Online', 'High Conversion', 'Mobile First'],
    metrics: [
      { label: 'Tasa de conversión', value: '11.4%' },
      { label: 'Nuevos turnos', value: '+140/mes' },
      { label: 'Seguridad SSL', value: '100%' },
    ],
    features: [
      'Estructura persuasiva enfocada en captación de pacientes',
      'Integración con WhatsApp Business para confirmación de turnos',
      'Sección interactiva de Preguntas Frecuentes',
      'Testimonios con calificación y fotos reales'
    ],
    featured: false,
  },
  {
    id: 'gourmet-bistro',
    title: 'Sabor & Arte Restó',
    client: 'Gourmet Bistro & Delivery',
    category: 'landing',
    categoryLabel: 'Menú Digital + Delivery',
    description: 'Página web gastronomía con menú QR interactivo, fotos en alta resolución y comandas a WhatsApp.',
    longDescription: 'Solución completa para gastronomía. Los clientes escanean el código QR en el local o visitan la web desde sus casas para armar su pedido y enviarlo directamente a la cocina por WhatsApp.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    mobilePreview: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    tags: ['Menú QR', 'Gastronomía', 'WhatsApp Pedidos', 'Mobile App Look'],
    metrics: [
      { label: 'Pedidos por WhatsApp', value: '+180%' },
      { label: 'Ahorro en comisiones', value: '100%' },
      { label: 'Valoración clientes', value: '4.9/5' },
    ],
    features: [
      'Carta digital rápida con fotos apetitosas y alérgenos',
      'Selector de salsas, guarniciones y agregados opcionales',
      'Cálculo automático de total y envío de dirección vía WhatsApp',
      'Panel simple para cambiar precios y productos del día'
    ],
    featured: false,
  },
  {
    id: 'fitpro-app',
    title: 'FitPro Gym System',
    client: 'FitPro Fitness Center',
    category: 'sistemas',
    categoryLabel: 'Sistema Web & Membresías',
    description: 'Plataforma web para gestión de gimnasios, planes de entrenamiento y cobro automático.',
    longDescription: 'Aplicación web progresiva (PWA) para clientes y administradores. Permite a los alumnos ver sus rutinas diarias, renovar suscripciones con tarjeta o Mercado Pago, y reservar clases grupales con cupo limitado.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    desktopPreview: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    mobilePreview: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    tags: ['Web App', 'Sistemas', 'Membresías', 'Dashboard Admin', 'React'],
    metrics: [
      { label: 'Cobros automatizados', value: '95%' },
      { label: 'Alumnos activos', value: '1.200+' },
      { label: 'Disponibilidad server', value: '99.9%' },
    ],
    features: [
      'Dashboard personalizado para alumnos con rutinas y gráficos',
      'Cobros recurrentes automáticos e historial de pagos',
      'Reserva de turnos en tiempo real con control de aforo',
      'Notificaciones push y avisos por WhatsApp de vencimientos'
    ],
    featured: false,
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Diseño Web Profesional',
    shortDesc: 'Sitios institucionales y landing pages de alto impacto, rápidos, ultra modernos y 100% adaptados a celulares.',
    fullDesc: 'Construimos páginas web desde cero con las últimas tecnologías web. Enfocadas en proyectar máxima profesionalidad, transmitir tu propuesta de valor y convertir visitantes en clientes reales.',
    iconName: 'Layout',
    badge: 'MÁS POPULAR',
    highlights: [
      'Diseño exclusivo a medida (Sin plantillas genéricas)',
      '100% Responsive (Perfecto en celulares, tablets y PC)',
      'Formulario de contacto e integración directa a WhatsApp',
      'Optimización de velocidad (Carga en menos de 1 segundo)',
      'Certificado de Seguridad SSL gratis e integración de dominio'
    ],
    popularFor: 'Profesionales, PYMES, Negocios locales, Marcas personales'
  },
  {
    id: 'ecommerce',
    title: 'Tiendas Online E-Commerce',
    shortDesc: 'Tu negocio vendiendo 24/7. Integración con Mercado Pago, carrito de compras, gestión de stock y envíos.',
    fullDesc: 'E-commerce diseñado estratégicamente para vender más. Ofrecemos catálogos dinámicos, pasarelas de pago automatizadas, promociones bancarias, cupones y checkout intuitivo sin fricción.',
    iconName: 'ShoppingBag',
    badge: 'ALTA CONVERSIÓN',
    highlights: [
      'Cobros automáticos con Mercado Pago, Tarjetas y Transferencias',
      'Carrito inteligente y pedidos rápidos vía WhatsApp',
      'Panel de administración simple para cargar productos y stock',
      'Cálculo de envíos por Andreani, Correo Argentino u Oca',
      'Sincronización con catálogo de Instagram y Facebook Shopping'
    ],
    popularFor: 'Marcas de ropa, Negocios minoristas, Distribuidoras, Venta de productos'
  },
  {
    id: 'seo-speed',
    title: 'Optimización SEO & Velocidad',
    shortDesc: 'Aparecé en los primeros resultados de Google y acelera la carga de tu sitio web para no perder ventas.',
    fullDesc: 'Optimizamos la estructura de tu sitio web para que Google lo adore. Aumentamos la velocidad de carga al máximo nivel (PageSpeed 90+) y posicionamos tus palabras clave clave.',
    iconName: 'Zap',
    badge: 'MÁXIMO RENDIMIENTO',
    highlights: [
      'Análisis técnico de código y compresión de imágenes',
      'Estructura de palabras clave estratégicas para tu rubro',
      'Indexación en Google Search Console y Google Maps',
      'Auditoría de UX / UI para mejorar la tasa de conversión'
    ],
    popularFor: 'Webs que cargan lento o no reciben visitas orgánicas'
  },
  {
    id: 'redesign-custom',
    title: 'Rediseño & Sistemas a Medida',
    shortDesc: 'Renová la imagen de tu web actual o desarrollá paneles de gestión, sistemas de reservas y portales interactivos.',
    fullDesc: 'Transformamos páginas obsoletas o poco atractivas en experiencias digitales de vanguardia. También creamos desarrollos web a medida con paneles de control personalizados.',
    iconName: 'Code2',
    badge: 'A MEDIDA',
    highlights: [
      'Modernización total del diseño con estética vanguardista',
      'Sistemas de reservas de turnos y agendas online',
      'Paneles privados para clientes o administradores',
      'Mantenimiento continuo y soporte técnico prioritario'
    ],
    popularFor: 'Empresas que quieren escalar su imagen y automatizar procesos'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: '¿Cuánto tiempo tarda el desarrollo de una página web o e-commerce?',
    answer: 'Una Landing Page o sitio institucional se entrega habitualmente en un plazo de 3 a 7 días hábiles. Una Tienda Online E-Commerce completa suele requerir de 7 a 14 días según la cantidad de productos y funciones requeridas.'
  },
  {
    category: 'Servicios',
    question: '¿La página web se ve bien en teléfonos celulares?',
    answer: '¡Sí, 100%! Todos nuestros desarrollos son Native Responsive ("Mobile-First"), diseñados y testeados para que funcionen con máxima soltura en teléfonos, tablets y computadoras.'
  },
  {
    category: 'E-Commerce',
    question: '¿Cómo cobro las ventas en mi Tienda E-Commerce?',
    answer: 'Integramos pasarelas de cobro líderes como Mercado Pago, donde tus clientes pueden pagar con tarjeta de crédito, débito, cuotas o transferencia bancaria directa (con opción de aplicar descuento automático por transferencia).'
  },
  {
    category: 'E-Commerce',
    question: '¿Voy a poder actualizar yo mismo los productos y precios?',
    answer: 'Totalmente. Te entregamos la web con un panel gestor muy fácil de usar y te brindamos una capacitación exprés o video tutorial para que cargues productos, cambies precios o edites stock sin depender de nadie.'
  },
  {
    category: 'Soporte',
    question: '¿Qué incluye el soporte post-lanzamiento?',
    answer: 'Te acompañamos siempre. Incluimos soporte técnico directo por WhatsApp (1176621380), backups automáticos de seguridad, monitoreo de servidor 24/7 y asistencia ante cualquier duda.'
  },
  {
    category: 'Presupuesto',
    question: '¿Cómo es la forma de pago?',
    answer: 'Trabajamos habitualmente con un 50% de seña para iniciar el desarrollo y el 50% restante al finalizar y entregar la web funcionando 100% online en tu propio dominio. Aceptamos transferencias y tarjetas.'
  }
];

export const VALUE_BADGES = [
  {
    id: 'seguros',
    title: 'SITIOS SEGUROS',
    desc: 'Certificado SSL HTTPS activo, protección contra código malicioso y copias de respaldo automáticas.',
    icon: 'ShieldCheck'
  },
  {
    id: 'rapidez',
    title: 'CARGA RÁPIDA',
    desc: 'Optimización de código de última generación para tiempos de carga inferiores a 1 segundo.',
    icon: 'Gauge'
  },
  {
    id: 'seo',
    title: 'SEO OPTIMIZADO',
    desc: 'Estructurados para que Google indexe tu negocio y te encuentren potenciales clientes.',
    icon: 'TrendingUp'
  },
  {
    id: 'soporte',
    title: 'SOPORTE PERSONALIZADO',
    desc: 'Atención directa por WhatsApp con nuestro equipo de desarrolladores sin intermediarios.',
    icon: 'Headphones'
  }
];

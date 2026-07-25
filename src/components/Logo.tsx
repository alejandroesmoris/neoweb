import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'emblem';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'horizontal', className = '', size = 'md' }) => {
  const sizeMap = {
    sm: { height: 36, emblemSize: 36, textClass: 'text-lg', subtextClass: 'text-[10px]' },
    md: { height: 48, emblemSize: 48, textClass: 'text-2xl', subtextClass: 'text-xs' },
    lg: { height: 64, emblemSize: 64, textClass: 'text-3xl', subtextClass: 'text-sm' },
    xl: { height: 110, emblemSize: 110, textClass: 'text-4xl md:text-5xl', subtextClass: 'text-sm md:text-base' },
  };

  const currentSize = sizeMap[size];

  // SVG Emblem matching exact NW logo design with code brackets and glowing neon rings
  const EmblemSVG = (
    <div className="relative flex items-center justify-center shrink-0">
      <svg
        viewBox="0 0 200 200"
        className={`w-auto h-full filter drop-shadow-[0_0_12px_rgba(0,163,255,0.6)] transition-transform duration-300 hover:scale-105`}
        style={{ height: `${currentSize.emblemSize}px` }}
      >
        <defs>
          {/* Blue Gradient for 'N' */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#0088FF" />
            <stop offset="100%" stopColor="#0055FF" />
          </linearGradient>

          {/* Metallic Silver/White Gradient for 'W' */}
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Ring Glow Gradient */}
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#0022AA" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Ring with Glow and Gap */}
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="3.5"
          strokeDasharray="480 50"
          strokeDashoffset="20"
          filter="url(#neonGlow)"
        />

        {/* Outer Subtle Accent Ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="1"
          strokeOpacity="0.3"
        />

        {/* Code Brackets Symbol </ > in Upper Right Circle Area */}
        <g transform="translate(112, 34) scale(0.65)">
          <path
            d="M 12 12 L 2 22 L 12 32"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 19 34 L 27 10"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 34 12 L 44 22 L 34 32"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* 'NW' Monogram Path */}
        <g filter="url(#neonGlow)">
          {/* 'N' Part (Left blue dynamic polygon) */}
          <path
            d="M 38 48 L 74 76 L 74 128 L 38 112 Z M 38 48 L 74 76 L 108 122 L 108 92 L 74 48 Z"
            fill="url(#blueGradient)"
          />

          {/* 'W' Part (Right white/silver metallic polygon) */}
          <path
            d="M 76 128 L 112 70 L 134 104 L 164 68 L 138 122 L 110 94 Z"
            fill="url(#whiteGradient)"
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'emblem') {
    return <div className={`inline-flex items-center ${className}`}>{EmblemSVG}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        {EmblemSVG}
        <div className="mt-4 flex flex-col items-center">
          <div className={`font-bold tracking-tight text-white ${currentSize.textClass} flex items-center gap-1.5`}>
            <span>Neo</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web</span>
          </div>
          <div className={`mt-1 font-mono tracking-[0.25em] text-cyan-400 font-medium ${currentSize.subtextClass} flex items-center justify-center gap-2`}>
            <span className="text-cyan-500 font-bold">&lt;</span>
            <span className="text-slate-200">DESARROLLO WEB</span>
            <span className="text-cyan-500 font-bold">&gt;</span>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {EmblemSVG}
      <div className="flex flex-col leading-none">
        <div className={`font-extrabold tracking-tight text-white ${currentSize.textClass} flex items-center`}>
          <span>Neo</span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent ml-1">
            Web
          </span>
        </div>
        <div className={`mt-1 font-mono tracking-[0.2em] text-cyan-400 ${currentSize.subtextClass} flex items-center gap-1`}>
          <span className="text-cyan-400 font-semibold">&lt;</span>
          <span className="text-slate-300 font-medium text-[11px] tracking-[0.18em]">DESARROLLO WEB</span>
          <span className="text-cyan-400 font-semibold">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export type ThemeMode = 'light' | 'dark';
export type PageTheme = 'aurora' | 'volt' | 'typeflow' | 'essence' | 'mosaic';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  glass?: string;
  glow?: string;
  border?: string;
  gradient?: string;
}

export interface ThemeConfig {
  name: string;
  company: string;
  trend: string;
  description: string;
  fonts: {
    heading: string;
    body: string;
    accent?: string;
  };
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  navbar: {
    light: string;
    dark: string;
    scrollBehavior: 'blur' | 'compact' | 'minimal' | 'elevate' | 'modular';
  };
}

export const themes: Record<PageTheme, ThemeConfig> = {
  aurora: {
    name: 'Aurora Glass',
    company: 'Aurora Glass Technologies',
    trend: 'Glassmorphism',
    description: 'Premium smart glass technology',
    fonts: {
      heading: 'Playfair Display',
      body: 'Lora',
    },
    colors: {
      light: {
        primary: '#b7525e',
        secondary: '#c19cf6',
        accent: '#18087c',
        background: 'linear-gradient(135deg, #67539f 0%, #c1bcd0 100%)',
        text: '#1a1a1a',
        glass: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.2)',
      },
      dark: {
        primary: '#c19cf6',
        secondary: '#b7525e',
        accent: '#a78bfa',
        background: 'linear-gradient(135deg, #18087c 0%, #2d1b69 100%)',
        text: '#f0f0f0',
        glass: 'rgba(255, 255, 255, 0.05)',
        border: 'rgba(255, 255, 255, 0.1)',
      },
    },
    navbar: {
      light: 'glass-light',
      dark: 'glass-dark',
      scrollBehavior: 'blur',
    },
  },
  volt: {
    name: 'Volt',
    company: 'Volt Energy',
    trend: 'Neon Energy',
    description: 'Futuristic energy drink',
    fonts: {
      heading: 'Space Grotesk',
      body: 'Inter',
      accent: 'JetBrains Mono',
    },
    colors: {
      light: {
        primary: '#FF007A',
        secondary: '#00FFB3',
        accent: '#0abdc6',
        background: '#f5f5f5',
        text: '#0a0a0a',
        glow: 'rgba(255, 0, 122, 0.5)',
        border: '#FF007A',
      },
      dark: {
        primary: '#FF007A',
        secondary: '#00FFB3',
        accent: '#ea00d9',
        background: '#0a0e27',
        text: '#ffffff',
        glow: 'rgba(0, 255, 179, 0.6)',
        border: '#00FFB3',
      },
    },
    navbar: {
      light: 'neon-light',
      dark: 'neon-dark',
      scrollBehavior: 'compact',
    },
  },
  typeflow: {
    name: 'Typeflow Studio',
    company: 'Typeflow Studio',
    trend: 'Kinetic Typography',
    description: 'Creative typography agency',
    fonts: {
      heading: 'Inter Variable',
      body: 'Inter',
      accent: 'Fraunces',
    },
    colors: {
      light: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb',
        background: '#ffffff',
        text: '#2d3748',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      },
      dark: {
        primary: '#a78bfa',
        secondary: '#ec4899',
        accent: '#fbbf24',
        background: '#0f172a',
        text: '#f1f5f9',
        gradient: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #fbbf24 100%)',
      },
    },
    navbar: {
      light: 'kinetic-light',
      dark: 'kinetic-dark',
      scrollBehavior: 'minimal',
    },
  },
  essence: {
    name: 'Essence',
    company: 'Essence Timepieces',
    trend: 'Minimalist Maximalism',
    description: 'Luxury watch manufacturer',
    fonts: {
      heading: 'Josefin Sans',
      body: 'Lato',
      accent: 'Abril Fatface',
    },
    colors: {
      light: {
        primary: '#2d2d2d',
        secondary: '#c4b5a0',
        accent: '#ff6b6b',
        background: '#faf9f7',
        text: '#1a1a1a',
      },
      dark: {
        primary: '#e0e0e0',
        secondary: '#8b7e74',
        accent: '#ff8787',
        background: '#1a1a1a',
        text: '#f5f5f5',
      },
    },
    navbar: {
      light: 'minimal-light',
      dark: 'minimal-dark',
      scrollBehavior: 'elevate',
    },
  },
  mosaic: {
    name: 'Mosaic',
    company: 'Mosaic Analytics',
    trend: 'Bento Grid',
    description: 'Analytics dashboard platform',
    fonts: {
      heading: 'Poppins',
      body: 'Roboto',
      accent: 'Roboto Mono',
    },
    colors: {
      light: {
        primary: '#4f46e5',
        secondary: '#06b6d4',
        accent: '#f59e0b',
        background: '#f9fafb',
        text: '#111827',
        border: '#e5e7eb',
      },
      dark: {
        primary: '#818cf8',
        secondary: '#22d3ee',
        accent: '#fbbf24',
        background: '#111827',
        text: '#f9fafb',
        border: '#374151',
      },
    },
    navbar: {
      light: 'bento-light',
      dark: 'bento-dark',
      scrollBehavior: 'modular',
    },
  },
};

export const routes: Record<PageTheme, string> = {
  aurora: '/',
  volt: '/volt',
  typeflow: '/typeflow',
  essence: '/essence',
  mosaic: '/mosaic',
};

export function getThemeFromPath(pathname: string): PageTheme {
  if (pathname === '/') return 'aurora';
  if (pathname.startsWith('/volt')) return 'volt';
  if (pathname.startsWith('/typeflow')) return 'typeflow';
  if (pathname.startsWith('/essence')) return 'essence';
  if (pathname.startsWith('/mosaic')) return 'mosaic';
  return 'aurora';
}

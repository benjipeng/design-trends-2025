"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeMode, PageTheme, themes } from '@/lib/themes';

interface ThemeContextType {
  themeMode: ThemeMode;
  pageTheme: PageTheme;
  setThemeMode: (mode: ThemeMode) => void;
  setPageTheme: (theme: PageTheme) => void;
  currentTheme: typeof themes[PageTheme];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [pageTheme, setPageTheme] = useState<PageTheme>('aurora');

  // Initialize theme from system preference and localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode;
    if (savedMode) {
      setThemeMode(savedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Save theme mode to localStorage and update document
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    document.documentElement.setAttribute('data-theme', themeMode);
    document.documentElement.setAttribute('data-page-theme', pageTheme);
  }, [themeMode, pageTheme]);

  const currentTheme = themes[pageTheme];

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        pageTheme,
        setThemeMode,
        setPageTheme,
        currentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

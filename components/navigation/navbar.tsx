"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { routes, getThemeFromPath } from '@/lib/themes';

const navLinks = [
  { name: 'Aurora Glass', href: routes.aurora, theme: 'aurora' as const },
  { name: 'Volt', href: routes.volt, theme: 'volt' as const },
  { name: 'Typeflow', href: routes.typeflow, theme: 'typeflow' as const },
  { name: 'Essence', href: routes.essence, theme: 'essence' as const },
  { name: 'Mosaic', href: routes.mosaic, theme: 'mosaic' as const },
];

export function Navbar() {
  const { themeMode, setThemeMode, pageTheme, setPageTheme, currentTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const blurAmount = useTransform(scrollY, [0, 100], [0, 20]);
  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);

  // Update page theme based on pathname
  useEffect(() => {
    const newTheme = getThemeFromPath(pathname);
    setPageTheme(newTheme);
  }, [pathname, setPageTheme]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = currentTheme.colors[themeMode];

  // Navbar styling based on page theme
  const getNavbarStyles = () => {
    const base = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";

    switch (pageTheme) {
      case 'aurora':
        return cn(
          base,
          themeMode === 'light'
            ? "bg-white/10 border-b border-white/20"
            : "bg-white/5 border-b border-white/10",
          isScrolled && "backdrop-blur-lg"
        );

      case 'volt':
        return cn(
          base,
          themeMode === 'light'
            ? "bg-white border-b-2"
            : "bg-[#0a0e27] border-b-2",
          isScrolled && "shadow-lg"
        );

      case 'typeflow':
        return cn(
          base,
          themeMode === 'light'
            ? "bg-white/80 backdrop-blur-md"
            : "bg-slate-900/80 backdrop-blur-md"
        );

      case 'essence':
        return cn(
          base,
          themeMode === 'light'
            ? "bg-[#faf9f7]"
            : "bg-[#1a1a1a]",
          isScrolled && "shadow-sm"
        );

      case 'mosaic':
        return cn(
          base,
          themeMode === 'light'
            ? "bg-white border-b border-gray-200"
            : "bg-gray-900 border-b border-gray-700"
        );

      default:
        return base;
    }
  };

  const getBorderColor = () => {
    if (pageTheme === 'volt') {
      return { borderColor: colors.border };
    }
    return {};
  };

  return (
    <>
      <motion.nav
        className={getNavbarStyles()}
        style={{
          ...(pageTheme === 'aurora' && isScrolled
            ? { backdropFilter: `blur(${blurAmount}px)` }
            : {}),
          height: pageTheme === 'volt' && isScrolled ? '64px' : '80px',
          ...getBorderColor(),
        }}
      >
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo pageTheme={pageTheme} themeMode={themeMode} isScrolled={isScrolled} />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                  pageTheme={pageTheme}
                  themeMode={themeMode}
                  isScrolled={isScrolled}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <ThemeToggle
                themeMode={themeMode}
                setThemeMode={setThemeMode}
                pageTheme={pageTheme}
              />

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ color: colors.text }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        pathname={pathname}
        pageTheme={pageTheme}
        themeMode={themeMode}
        colors={colors}
      />
    </>
  );
}

function Logo({
  pageTheme,
  themeMode,
  isScrolled,
}: {
  pageTheme: string;
  themeMode: string;
  isScrolled: boolean;
}) {
  const getLogoText = () => {
    switch (pageTheme) {
      case 'aurora': return 'Aurora';
      case 'volt': return 'VOLT';
      case 'typeflow': return 'Typeflow';
      case 'essence': return 'ESSENCE';
      case 'mosaic': return 'Mosaic';
      default: return 'Design Trends';
    }
  };

  const getLogoStyles = () => {
    const fontSize = isScrolled && pageTheme === 'essence' ? 'text-xl' : 'text-2xl';

    switch (pageTheme) {
      case 'aurora':
        return cn(
          fontSize,
          "font-serif font-bold",
          themeMode === 'light' ? "text-[#18087c]" : "text-[#c19cf6]"
        );

      case 'volt':
        return cn(
          fontSize,
          "font-bold tracking-wider",
          themeMode === 'light' ? "text-[#FF007A]" : "text-[#00FFB3]",
          "drop-shadow-[0_0_10px_rgba(255,0,122,0.5)]"
        );

      case 'typeflow':
        return cn(
          fontSize,
          "font-bold bg-gradient-to-r bg-clip-text text-transparent",
          themeMode === 'light'
            ? "from-[#667eea] to-[#764ba2]"
            : "from-[#a78bfa] to-[#ec4899]"
        );

      case 'essence':
        return cn(
          isScrolled ? 'text-3xl' : 'text-5xl',
          "font-bold tracking-tight transition-all duration-300",
          themeMode === 'light' ? "text-[#2d2d2d]" : "text-[#e0e0e0]"
        );

      case 'mosaic':
        return cn(
          fontSize,
          "font-semibold",
          themeMode === 'light' ? "text-[#4f46e5]" : "text-[#818cf8]"
        );

      default:
        return fontSize;
    }
  };

  return (
    <motion.span
      className={getLogoStyles()}
      style={{
        fontFamily: pageTheme === 'aurora' ? 'Playfair Display' :
                   pageTheme === 'volt' ? 'Space Grotesk' :
                   pageTheme === 'typeflow' ? 'Inter' :
                   pageTheme === 'essence' ? 'Josefin Sans' :
                   'Poppins'
      }}
    >
      {getLogoText()}
    </motion.span>
  );
}

function NavLink({
  href,
  children,
  isActive,
  pageTheme,
  themeMode,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  pageTheme: string;
  themeMode: string;
  isScrolled: boolean;
}) {
  const getLinkStyles = () => {
    const baseStyles = "px-4 py-2 rounded-lg transition-all duration-200 relative";

    switch (pageTheme) {
      case 'aurora':
        return cn(
          baseStyles,
          themeMode === 'light'
            ? isActive
              ? "text-[#18087c] bg-white/20"
              : "text-[#1a1a1a] hover:text-[#18087c] hover:bg-white/10"
            : isActive
              ? "text-[#c19cf6] bg-white/10"
              : "text-[#f0f0f0] hover:text-[#c19cf6] hover:bg-white/5"
        );

      case 'volt':
        return cn(
          baseStyles,
          themeMode === 'light'
            ? isActive
              ? "text-[#FF007A] border-b-2 border-[#FF007A]"
              : "text-[#0a0a0a] hover:text-[#FF007A]"
            : isActive
              ? "text-[#00FFB3] border-b-2 border-[#00FFB3]"
              : "text-white hover:text-[#00FFB3]"
        );

      case 'typeflow':
        return cn(
          baseStyles,
          "font-medium",
          themeMode === 'light'
            ? isActive
              ? "text-[#667eea]"
              : "text-[#2d3748] hover:text-[#667eea]"
            : isActive
              ? "text-[#a78bfa]"
              : "text-[#f1f5f9] hover:text-[#a78bfa]"
        );

      case 'essence':
        return cn(
          baseStyles,
          themeMode === 'light'
            ? isActive
              ? "text-[#ff6b6b] font-semibold"
              : "text-[#1a1a1a] hover:text-[#ff6b6b]"
            : isActive
              ? "text-[#ff8787] font-semibold"
              : "text-[#f5f5f5] hover:text-[#ff8787]"
        );

      case 'mosaic':
        return cn(
          baseStyles,
          themeMode === 'light'
            ? isActive
              ? "text-[#4f46e5] bg-indigo-50"
              : "text-[#111827] hover:text-[#4f46e5] hover:bg-gray-100"
            : isActive
              ? "text-[#818cf8] bg-indigo-900/20"
              : "text-[#f9fafb] hover:text-[#818cf8] hover:bg-gray-800"
        );

      default:
        return baseStyles;
    }
  };

  return (
    <Link href={href}>
      <motion.span
        className={getLinkStyles()}
        whileHover={{ scale: pageTheme === 'volt' ? 1.05 : 1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          fontVariationSettings: pageTheme === 'typeflow' && isActive
            ? "'wght' 700"
            : "'wght' 400",
        }}
      >
        {children}
      </motion.span>
    </Link>
  );
}

function ThemeToggle({
  themeMode,
  setThemeMode,
  pageTheme,
}: {
  themeMode: string;
  setThemeMode: (mode: 'light' | 'dark') => void;
  pageTheme: string;
}) {
  const getToggleStyles = () => {
    switch (pageTheme) {
      case 'volt':
        return "p-2 rounded-lg border-2 transition-all";
      case 'aurora':
        return "p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all";
      default:
        return "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all";
    }
  };

  return (
    <motion.button
      className={getToggleStyles()}
      onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {themeMode === 'light' ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </motion.button>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  links,
  pathname,
  pageTheme,
  themeMode,
  colors,
}: any) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      className="fixed inset-0 z-40 md:hidden"
      style={{ backgroundColor: colors.background, marginTop: '80px' }}
    >
      <div className="flex flex-col gap-4 p-6">
        {links.map((link: any) => (
          <Link key={link.href} href={link.href} onClick={onClose}>
            <motion.div
              className={cn(
                "p-4 rounded-lg text-lg font-medium",
                pathname === link.href
                  ? "bg-opacity-20"
                  : "hover:bg-opacity-10"
              )}
              style={{
                color: pathname === link.href ? colors.primary : colors.text,
                backgroundColor: pathname === link.href ? `${colors.primary}20` : 'transparent',
              }}
              whileTap={{ scale: 0.98 }}
            >
              {link.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

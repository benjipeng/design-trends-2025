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
  const [isMounted, setIsMounted] = useState(false);

  const { scrollY } = useScroll();
  const blurAmount = useTransform(scrollY, [0, 100], [0, 20]);

  // Dynamic navbar height based on theme and scroll
  const getNavbarHeight = () => {
    if (pageTheme === 'essence') return isScrolled ? '2px' : '60px';
    if (pageTheme === 'volt') return isScrolled ? '64px' : '80px';
    if (pageTheme === 'typeflow') return isScrolled ? '60px' : '72px';
    return '80px';
  };

  // Update page theme based on pathname
  useEffect(() => {
    const newTheme = getThemeFromPath(pathname);
    setPageTheme(newTheme);
    setIsMounted(true);
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

  // Prevent rendering until theme is properly initialized
  if (!isMounted) {
    return null;
  }

  // Framer Motion variants for unique transitions per theme
  const navbarVariants = {
    aurora: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      scrolled: { y: 10, scale: 0.95, borderRadius: 24 },
      notScrolled: { y: 0, scale: 1, borderRadius: 0 }
    },
    volt: {
      initial: { y: -100, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      animate: { y: 0, opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
      scrolled: { clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' },
      notScrolled: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
    },
    typeflow: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      scrolled: { width: '85%', borderRadius: 50 },
      notScrolled: { width: '100%', borderRadius: 0 }
    },
    essence: {
      initial: { scaleY: 0, opacity: 0 },
      animate: { scaleY: 1, opacity: 1 },
      scrolled: { height: '2px', paddingTop: 0, paddingBottom: 0 },
      notScrolled: { height: '60px', paddingTop: '1rem', paddingBottom: '1rem' }
    },
    mosaic: {
      initial: { y: -100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      scrolled: { gap: '8px', padding: '12px' },
      notScrolled: { gap: '0px', padding: '0px' }
    }
  };

  // Navbar styling based on page theme
  const getNavbarStyles = () => {
    const base = "fixed z-50 transition-all duration-500";

    switch (pageTheme) {
      case 'aurora':
        // Floating glassmorphic pill
        return cn(
          base,
          "top-0 left-0 right-0",
          themeMode === 'light'
            ? "bg-white/10 border border-white/20"
            : "bg-white/5 border border-white/10",
          "backdrop-blur-lg shadow-xl",
          isScrolled && "mx-4 md:mx-8 mt-4 rounded-3xl"
        );

      case 'volt':
        // Sharp geometric with neon border
        return cn(
          base,
          "top-0 left-0 right-0",
          themeMode === 'light'
            ? "bg-white border-2"
            : "bg-[#0a0e27] border-2",
          isScrolled && "shadow-[0_0_30px_rgba(255,0,122,0.3)]"
        );

      case 'typeflow':
        // Centered pill capsule
        return cn(
          base,
          "top-4 left-1/2 -translate-x-1/2",
          themeMode === 'light'
            ? "bg-white/90 border border-gray-200"
            : "bg-[#0F1419]/90 border border-cyan-500/20",
          "backdrop-blur-xl shadow-2xl",
          isScrolled ? "rounded-full" : "rounded-2xl w-full"
        );

      case 'essence':
        // Minimal thin line
        return cn(
          base,
          "top-0 left-0 right-0",
          themeMode === 'light'
            ? "bg-[#faf9f7] border-b"
            : "bg-[#1a1a1a] border-b border-white/5",
          isScrolled && "border-b-2"
        );

      case 'mosaic':
        // Modular bento segments
        return cn(
          base,
          "top-0 left-0 right-0",
          themeMode === 'light'
            ? "bg-gray-50"
            : "bg-gray-900",
          isScrolled && "px-4 py-3"
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
        initial="initial"
        animate="animate"
        variants={navbarVariants[pageTheme]}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: getNavbarHeight(),
          ...(pageTheme === 'aurora' && isScrolled
            ? { backdropFilter: `blur(${blurAmount}px)` }
            : {}),
          ...getBorderColor(),
        }}
      >
        <motion.div
          className={cn(
            "mx-auto h-full",
            pageTheme === 'typeflow' ? "px-8" : "container px-6",
            pageTheme === 'mosaic' && isScrolled && "flex gap-2"
          )}
          animate={isScrolled ? "scrolled" : "notScrolled"}
          variants={navbarVariants[pageTheme]}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={cn(
            "flex items-center h-full",
            pageTheme === 'typeflow' && isScrolled ? "justify-center gap-4" : pageTheme === 'typeflow' && "justify-center gap-8",
            pageTheme === 'mosaic' && isScrolled ? "flex-row gap-2" : "justify-between",
            pageTheme === 'essence' && isScrolled && "h-[2px] overflow-hidden",
            pageTheme === 'aurora' && isScrolled && "gap-2",
            pageTheme !== 'typeflow' && pageTheme !== 'mosaic' && "justify-between"
          )}>
            {/* Logo - Hidden on Typeflow when scrolled for centered layout */}
            {!(pageTheme === 'typeflow' && isScrolled) && (
              <Link href="/">
                <motion.div
                  className={cn(
                    "flex items-center gap-2 flex-shrink-0",
                    pageTheme === 'mosaic' && isScrolled && "bento-card px-4 py-2 rounded-lg"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Logo pageTheme={pageTheme} themeMode={themeMode} isScrolled={isScrolled} />
                </motion.div>
              </Link>
            )}

            {/* Desktop Navigation */}
            <div className={cn(
              "hidden md:flex items-center",
              pageTheme === 'typeflow' && isScrolled ? "gap-4" : pageTheme === 'typeflow' ? "gap-6 flex-grow justify-center" : "flex-grow justify-center",
              pageTheme === 'aurora' && isScrolled ? "gap-0 flex-grow justify-center" : pageTheme === 'aurora' && "gap-1 flex-grow justify-center",
              pageTheme === 'mosaic' && isScrolled && "flex-wrap"
            )}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  className={pageTheme === 'mosaic' && isScrolled ? "bento-card rounded-lg" : ""}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    href={link.href}
                    isActive={pathname === link.href}
                    pageTheme={pageTheme}
                    themeMode={themeMode}
                    isScrolled={isScrolled}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Theme Toggle included in centered container for Typeflow when scrolled */}
              {pageTheme === 'typeflow' && isScrolled && (
                <ThemeToggle
                  themeMode={themeMode}
                  setThemeMode={setThemeMode}
                  pageTheme={pageTheme}
                />
              )}
            </div>

            {/* Theme Toggle & Mobile Menu - Hidden on Typeflow when scrolled (moved to centered container) */}
            {!(pageTheme === 'typeflow' && isScrolled) && (
              <div className={cn(
                "flex items-center gap-4 flex-shrink-0",
                pageTheme === 'mosaic' && isScrolled && "bento-card px-4 py-2 rounded-lg"
              )}>
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
            )}

            {/* Mobile Menu Button for Typeflow when scrolled */}
            {pageTheme === 'typeflow' && isScrolled && (
              <button
                className="md:hidden p-2 flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ color: colors.text }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </motion.div>
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
    const fontSize = isScrolled && pageTheme === 'essence' ? 'text-xl' :
                     isScrolled && pageTheme === 'aurora' ? 'text-lg' : 'text-2xl';

    switch (pageTheme) {
      case 'aurora':
        return cn(
          fontSize,
          "font-serif font-bold",
          themeMode === 'light' ? "text-[#18087c]" : "text-[#e8deff]"
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
            ? "from-[#0052FF] via-[#059669] to-[#FF006E]"
            : "from-[#22D3EE] via-[#A3E635] to-[#FF1B8D]"
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
    const baseStyles = pageTheme === 'aurora' && isScrolled
      ? "px-2 py-1 rounded-lg transition-all duration-200 relative text-sm whitespace-nowrap"
      : "px-4 py-2 rounded-lg transition-all duration-200 relative whitespace-nowrap";

    switch (pageTheme) {
      case 'aurora':
        return cn(
          baseStyles,
          themeMode === 'light'
            ? isActive
              ? "text-[#18087c] bg-white/20"
              : "text-[#1a1a1a] hover:text-[#18087c] hover:bg-white/10"
            : isActive
              ? "text-[#e8deff] bg-white/10"
              : "text-[#d0c4e8] hover:text-[#e8deff] hover:bg-white/5"
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
              ? "text-[#0052FF] font-semibold"
              : "text-[#1F2937] hover:text-[#0052FF]"
            : isActive
              ? "text-[#22D3EE] font-semibold"
              : "text-[#E2E8F0] hover:text-[#22D3EE]"
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

  const getIconColor = () => {
    switch (pageTheme) {
      case 'aurora':
        return themeMode === 'light' ? '#18087c' : '#ffffff';
      case 'volt':
        return themeMode === 'light' ? '#FF007A' : '#00FFB3';
      case 'typeflow':
        return themeMode === 'light' ? '#0052FF' : '#22D3EE';
      case 'essence':
        return themeMode === 'light' ? '#2d2d2d' : '#e0e0e0';
      case 'mosaic':
        return themeMode === 'light' ? '#4f46e5' : '#818cf8';
      default:
        return themeMode === 'light' ? '#000000' : '#ffffff';
    }
  };

  return (
    <motion.button
      className={getToggleStyles()}
      onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      style={{ color: getIconColor() }}
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

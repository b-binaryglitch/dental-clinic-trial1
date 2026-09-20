import { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO, getClinicOpenStatus } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState(getClinicOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getClinicOpenStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Doctor', href: '#doctor' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="navbar-brand-logo-link"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl py-0.5"
          aria-label="ODONTOLOGY The Dental Clinic - Dr. Saikat Banerjee"
        >
          {/* Circular Clinic Logo (Clean 46px height/width, maintaining 1:1 aspect ratio) */}
          <ClinicLogo
            size={46}
            className="w-[46px] h-[46px] transition-transform duration-300 group-hover:scale-105"
            navyColor="#1E293B"
            accentColor="#0284C7"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                ODONTOLOGY
              </span>
              <span className="text-sky-600 font-bold text-lg leading-none">.</span>
              <span className="hidden sm:inline-flex text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                Clinic
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight mt-0.5">
              Dr. Saikat Banerjee (BDS) • Khosbagan
            </p>
          </div>
        </a>

        {/* Live Status Pill & Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-600 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Header Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Status badge */}
          <div
            className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
              status.isOpen
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-800 border-amber-200'
            }`}
            title={status.nextShiftText}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span>{status.isOpen ? 'Open Now' : 'Closed'}</span>
          </div>

          <a
            id="nav-call-link"
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span className="hidden xl:inline">{CLINIC_INFO.phone}</span>
            <span className="xl:hidden">Call</span>
          </a>

          <button
            id="nav-book-btn"
            onClick={onBookClick}
            type="button"
            className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium text-sm px-4 py-2 rounded-lg shadow-xs shadow-sky-600/20 hover:shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-mobile-quick-book-btn"
            onClick={onBookClick}
            type="button"
            className="text-xs bg-sky-600 text-white font-medium px-3 py-1.5 rounded-lg"
          >
            Book
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle Navigation"
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              />
              <span className="text-xs font-semibold text-slate-700">
                {status.statusText}
              </span>
            </div>
            <span className="text-[11px] text-slate-500">{status.nextShiftText}</span>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              type="button"
              className="w-full py-2.5 text-center bg-sky-600 text-white font-semibold rounded-lg shadow-sm"
            >
              Book Appointment Now
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full py-2 text-center text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              Call Reception: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

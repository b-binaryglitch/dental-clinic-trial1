import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export function FloatingActions({ onBookClick }: FloatingActionsProps) {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Dr. Saikat Banarjee (ODONTOLOGY Clinic), I would like to book a dental consultation.'
  )}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Quick Communication" className="hidden md:block fixed right-6 bottom-6 z-40">
        <a
          id="desktop-floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-sm"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>

          {/* Custom SVG WhatsApp icon */}
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
          </svg>
          <span>Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl p-2.5 flex items-center gap-2">
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Call Reception</span>
        </a>

        <a
          id="mobile-bottom-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 bg-[#25D366] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        <button
          id="mobile-bottom-book-btn"
          onClick={onBookClick}
          type="button"
          className="py-3 px-3.5 bg-sky-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm active:scale-98 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>
      </div>
    </>
  );
}

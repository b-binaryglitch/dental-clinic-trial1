import { ArrowRight, ShieldCheck, CheckCircle2, Star, Calendar, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onBookClick: () => void;
  onExploreServices: () => void;
}

export function Hero({ onBookClick, onExploreServices }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle decorative background circles */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/80 text-sky-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
              <span>Leading Dental Clinic in Khosbagan, Bardhaman</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Your Smile, Our <span className="text-sky-600 italic">Absolute</span> Priority.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Experience modern, pain-free clinical dentistry guided by{' '}
              <strong className="text-slate-900 font-semibold">{CLINIC_INFO.doctorName} ({CLINIC_INFO.doctorDegree})</strong>. Specializing in single-sitting micro-endodontics (RCT), titanium implants, clear aligners, and gentle family dentistry in Bardhaman.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-book-consultation-btn"
                onClick={onBookClick}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-md shadow-sky-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-treatments-btn"
                onClick={onExploreServices}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-base px-6 py-3.5 rounded-xl shadow-xs transition-all hover:border-slate-400 cursor-pointer"
              >
                <span>View Treatments</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Class-B Autoclaved</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-slate-100">
                <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Painless Rotary RCT</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xs p-2 rounded-lg border border-slate-100 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Digital RVG Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Frame glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200 via-teal-100 to-sky-100 rounded-3xl blur-lg opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={CLINIC_INFO.clinicImage}
                  alt="ODONTOLOGY Dental Clinic Interior in Bardhaman"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Patient Review Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800">4.9/5 Rating</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {CLINIC_INFO.fullName}
                      </h4>
                      <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>Khosbagan, near Barabazar Masjid, Bardhaman</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Verified Clinic
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Mini Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <img
                  src={CLINIC_INFO.doctorImage}
                  alt={CLINIC_INFO.doctorName}
                  className="w-12 h-12 rounded-xl object-cover border-2 border-sky-500 shadow-xs"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {CLINIC_INFO.doctorName}
                  </h4>
                  <p className="text-[11px] text-sky-600 font-semibold">Dental Surgeon (BDS)</p>
                  <p className="text-[10px] text-slate-500">3 Years Clinical Experience</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-700 font-serif">3+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Years of Clinical Experience</p>
          </div>
          <div className="p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-700 font-serif">8,500+</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Smiles Restored</p>
          </div>
          <div className="p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-700 font-serif">100%</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Class-B Sterilization</p>
          </div>
          <div className="p-3">
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-700 font-serif">Painless</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">Endodontic Protocol</p>
          </div>
        </div>

      </div>
    </section>
  );
}

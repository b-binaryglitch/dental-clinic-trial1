import { Phone, MapPin, Clock, ArrowUp, Heart, Shield } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ClinicLogo } from './ClinicLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <ClinicLogo
                size={38}
                className="w-[38px] h-[38px]"
                navyColor="#CBD5E1"
                accentColor="#38BDF8"
              />
              <span className="font-serif font-bold text-lg text-white tracking-tight">
                ODONTOLOGY<span className="text-sky-400">.</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Modern clinical dentistry dedicated to conservative tooth preservation, pain-free micro-endodontics, and beautiful smiles in Bardhaman.
            </p>

            <div className="pt-2 text-slate-300">
              <p className="font-semibold text-white">{CLINIC_INFO.doctorName}</p>
              <p className="text-[11px] text-sky-400">{CLINIC_INFO.doctorTitle} ({CLINIC_INFO.doctorDegree})</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Dental Treatments</a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-sky-400 transition-colors">Meet Dr. Saikat Banarjee</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-sky-400 transition-colors">Book Online Appointment</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">Patient Testimonials</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Primary Treatments */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Core Dental Treatments
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Root Canal Treatment (RCT)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Titanium Dental Implants</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Clear Aligners &amp; Braces</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Ultrasonic Teeth Scaling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Aesthetic Composite Fillings</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Gentle Pediatric Dentistry</a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">Wisdom Tooth Oral Surgery</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Clinic Location & Hours
            </h4>
            <div className="space-y-2 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>2no Pakmara Goli, Ranju Market Place, beside Barabazar Masjid, Khosbagan, Bardhaman - 713101</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Mon-Sat: 10:00 AM – 2:00 PM & 5:00 PM – 8:30 PM</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-white hover:text-sky-400 font-bold">
                  {CLINIC_INFO.phone}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Medical Notice:</strong> Information published on this site is intended for general patient orientation and educational knowledge. Dental diagnosis, root canal therapy, and surgical treatments require clinical intraoral inspection and radiographic evaluation by a qualified dental surgeon.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {currentYear} ODONTOLOGY - The Dental Clinic. All Rights Reserved. Supervised by Dr. Saikat Banarjee (BDS).</p>
          
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

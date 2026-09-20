import { Award, CheckCircle, Shield, Heart, GraduationCap, Clock, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DoctorProfileProps {
  onBookWithDoctor: () => void;
}

export function DoctorProfile({ onBookWithDoctor }: DoctorProfileProps) {
  return (
    <section id="doctor" className="py-16 sm:py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Meet Your Dental Surgeon</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Excellence & Empathy Under One Roof
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Dedicated to gentle, ethical, and preservative dentistry for families across Bardhaman and surrounding districts.
          </p>
        </div>

        {/* Doctor Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          
          {/* Doctor Image & Credential Card */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[16px] overflow-hidden shadow-xl shadow-slate-400/20 border-4 border-white bg-slate-100 group">
              <img
                src={CLINIC_INFO.doctorImage}
                alt={`${CLINIC_INFO.doctorName}, Dental Surgeon at ODONTOLOGY Clinic`}
                className="w-full h-full object-cover rounded-[12px] group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: 'center 15%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px]" />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold text-slate-900 font-serif">
                {CLINIC_INFO.doctorName}
              </h3>
              <p className="text-sky-700 font-semibold text-sm mt-0.5">
                Bachelor of Dental Surgery (BDS) • 3 Years Clinical Experience
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Consultant Dental Surgeon • ODONTOLOGY Clinic, Khosbagan
              </p>
            </div>

            {/* Availability Badge */}
            <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Consultations Saturday to Sunday</span>
            </div>
          </div>

          {/* Doctor Detailed Credentials & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900">
                Patient-Centric Dental Care in Khosbagan
              </h4>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                Dr. Saikat Banerjee is widely recognized in Bardhaman for his gentle clinical touch, thorough diagnostic explanations, and commitment to conservative tooth-saving practices. Believing that every natural tooth is irreplaceable, his treatment plans always prioritize preservation over unnecessary extractions.
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 text-sky-600 font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Conservative Tooth Saving</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                  Employing microscopic endodontics and bio-ceramics to rehabilitate heavily compromised teeth without extracting.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 text-emerald-600 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Virtually Painless RCT</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                  Gentle computerized rotary cleaning combined with localized nerve anesthesia prevents treatment trauma.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 text-indigo-600 font-semibold text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Pediatric & Family Friendly</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                  A calm, comforting environment crafted specially for children and adults with dental anxiety.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                <div className="flex items-center gap-2.5 text-teal-600 font-semibold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Clear Patient Communication</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 leading-normal">
                  Intraoral camera view of your teeth so you understand your condition and options before starting.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onBookWithDoctor}
                type="button"
                className="bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult with Dr. Saikat Banarjee</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 font-semibold text-sm px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Direct Reception: {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

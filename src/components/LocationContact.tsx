import { MapPin, Clock, Phone, Navigation, Send, Compass } from 'lucide-react';
import { CLINIC_INFO, getClinicOpenStatus } from '../data/clinicData';

export function LocationContact() {
  const status = getClinicOpenStatus();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Practice</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Clinic Timings & Location
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Centrally situated in Khosbagan, Bardhaman, easily accessible from Railway Station, Curzon Gate, and BC Road.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Detailed Info Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 font-serif">
                    {CLINIC_INFO.fullName}
                  </h3>
                  <address className="not-italic text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {CLINIC_INFO.address.line1},<br />
                    {CLINIC_INFO.address.line2},<br />
                    {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} – {CLINIC_INFO.address.pincode}
                  </address>
                  <p className="text-xs text-sky-800 bg-sky-100/70 inline-flex items-center gap-1 mt-2.5 px-2.5 py-1 rounded font-medium">
                    <Compass className="w-3 h-3 text-sky-600" />
                    <span>Landmark: {CLINIC_INFO.address.landmark}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-slate-900 font-serif">
                      Consultation Hours
                    </h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                        status.isOpen
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}
                    >
                      {status.statusText}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center justify-between py-1 border-b border-slate-200">
                      <span className="font-semibold text-slate-900">Monday – Saturday:</span>
                      <span>
                        {CLINIC_INFO.timings.morning} &amp; {CLINIC_INFO.timings.evening}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 text-slate-500">
                      <span>Sunday:</span>
                      <span className="font-medium text-amber-700">{CLINIC_INFO.timings.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Reception & Appointments</span>
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-base font-bold text-slate-900 hover:text-sky-600">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Dr.%20Saikat%20Banarjee,%20I%20would%20like%20to%20inquire%20about%20clinic%20timings.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden border-4 border-slate-100 shadow-xl relative bg-slate-100">
              <iframe
                title="ODONTOLOGY Clinic Location in Khosbagan, Bardhaman"
                src={CLINIC_INFO.embedMapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-2">
              📍 2no Pakmara Goli, Ranju Market Place, beside Barabazar Masjid, Khosbagan, Bardhaman
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

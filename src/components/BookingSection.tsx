import { useState, useEffect, type FormEvent } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  User,
  MessageSquare,
  Send,
  FileCheck,
  CheckCircle2,
  Copy,
  Printer,
  Sparkles,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface BookingSectionProps {
  initialTreatment?: string;
}

export function BookingSection({ initialTreatment }: BookingSectionProps) {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(initialTreatment || 'Root Canal Treatment (RCT)');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'evening'>('morning');
  const [symptoms, setSymptoms] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState<null | {
    id: string;
    name: string;
    phone: string;
    treatment: string;
    date: string;
    timeSlotText: string;
  }>(null);
  const [copied, setCopied] = useState(false);

  // Sync when initialTreatment updates
  useEffect(() => {
    if (initialTreatment) {
      setTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  // Set minimum date to today
  const todayDateString = (() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return local.toISOString().split('T')[0];
  })();

  const cleanPhone = phone.replace(/\D/g, '');
  const isPhoneValid = cleanPhone.length === 10;

  const timeSlotLabel =
    timeSlot === 'morning' ? 'Morning Shift (10:00 AM – 2:00 PM)' : 'Evening Shift (5:00 PM – 8:30 PM)';

  const generateWhatsAppUrl = (tokenOverride?: string) => {
    const token = tokenOverride || bookingConfirmed?.id || `ODT-${Math.floor(1000 + Math.random() * 9000)}`;
    const selectedTreatment = treatment;
    const preferredSlot = timeSlotLabel;
    const notes = symptoms.trim();

    const message = `Hello Dr. Saikat Banerjee (ODONTOLOGY Clinic),

*Appointment Booking Request*
*Token ID:* ${token}

*Patient Details:*
• Name: ${patientName.trim()}
• Phone: ${cleanPhone}
• Treatment: ${selectedTreatment}
• Preferred Date: ${preferredDate || 'Earliest available'}
• Preferred Slot: ${preferredSlot}
• Notes / Symptoms: ${notes || 'None'}

Please confirm the slot availability at your Khosbagan clinic.`;

    return `https://wa.me/919773949063?text=${encodeURIComponent(message)}`;
  };

  const handleSubmitWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      alert('Please enter your full name.');
      return;
    }
    if (!isPhoneValid) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    // 1. Generate Appointment Token
    const token = `ODT-${Math.floor(1000 + Math.random() * 9000)}`;

    // Retain in booking confirmation slip state
    setBookingConfirmed({
      id: token,
      name: patientName.trim(),
      phone: cleanPhone,
      treatment,
      date: preferredDate || 'Earliest Available',
      timeSlotText: timeSlotLabel,
    });

    // 2. Open WhatsApp with the generated token explicitly injected
    const url = generateWhatsAppUrl(token);
    window.open(url, '_blank');
  };

  const handleCopySummary = () => {
    if (!bookingConfirmed) return;
    const text = `ODONTOLOGY Appointment Token: ${bookingConfirmed.id}\nPatient: ${bookingConfirmed.name}\nTreatment: ${bookingConfirmed.treatment}\nDate: ${bookingConfirmed.date} (${bookingConfirmed.timeSlotText})\nClinic: ODONTOLOGY - Khosbagan, Bardhaman (Tel: ${CLINIC_INFO.phone})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>Easy Scheduling</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Book Your Priority Consultation
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Book online to avoid waiting times. Submitting opens a direct WhatsApp booking message to <strong className="text-white">Dr. Saikat Banerjee</strong> to confirm your slot in real-time.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-white">Daily Consultation Shifts</h4>
                  <p className="text-slate-300 mt-0.5">
                    <strong>Morning:</strong> {CLINIC_INFO.timings.morning} <br />
                    <strong>Evening:</strong> {CLINIC_INFO.timings.evening}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-white">Minimal Clinic Waiting</h4>
                  <p className="text-slate-300 mt-0.5">
                    Pre-scheduled slots are respected with sterile tray preparation prior to your arrival.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <h4 className="font-bold text-white">Direct Phone Booking</h4>
                  <p className="text-slate-300 mt-0.5">
                    Prefer talking directly? Call reception at{' '}
                    <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-sky-400 font-bold underline">
                      {CLINIC_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100 relative">
              
              {bookingConfirmed ? (
                /* Post-Submission Digital Token Slip */
                <div className="py-4 space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="text-center space-y-2">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <FileCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      Appointment Request Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                      Your booking details have been prepared and sent via WhatsApp to Dr. Saikat Banerjee. Below is your clinical token slip:
                    </p>
                  </div>

                  <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        Token Reference
                      </span>
                      <span className="font-mono text-sm font-extrabold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        {bookingConfirmed.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block">Patient Name:</span>
                        <span className="font-bold text-slate-800">{bookingConfirmed.name}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Mobile:</span>
                        <span className="font-bold text-slate-800">+91 {bookingConfirmed.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Treatment:</span>
                        <span className="font-bold text-slate-800">{bookingConfirmed.treatment}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Preferred Date:</span>
                        <span className="font-bold text-slate-800">{bookingConfirmed.date}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                      <span className="text-slate-400 block">Shift Timing:</span>
                      <span className="font-semibold text-slate-800">{bookingConfirmed.timeSlotText}</span>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>Venue: ODONTOLOGY Clinic, Khosbagan</span>
                      <span>PIN: 713101</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleCopySummary}
                      type="button"
                      className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? 'Copied Details!' : 'Copy Token Info'}</span>
                    </button>
                    
                    <a
                      href={generateWhatsAppUrl(bookingConfirmed?.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors text-center"
                    >
                      <Send className="w-4 h-4" />
                      <span>Re-open WhatsApp</span>
                    </a>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      onClick={() => setBookingConfirmed(null)}
                      type="button"
                      className="text-xs text-sky-600 hover:text-sky-800 font-medium underline"
                    >
                      Book another appointment
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Interactive Booking Form */
                <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="font-serif font-bold text-xl text-slate-900">
                      Patient Consultation Details
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fields marked with an asterisk (*) are required for scheduling.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patient-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Patient Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          id="patient-name"
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Prantik Chakraborty"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="patient-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        10-Digit Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          id="patient-phone"
                          type="tel"
                          required
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder="e.g. 9773949063"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 font-mono"
                        />
                      </div>
                      {phone && !isPhoneValid && (
                        <p className="text-[10px] text-amber-700 font-medium mt-1">Please enter a valid 10-digit number.</p>
                      )}
                    </div>
                  </div>

                  {/* Treatment & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patient-treatment" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Treatment Needed
                      </label>
                      <select
                        id="patient-treatment"
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
                      >
                        <option value="Comprehensive Dental Checkup & Consultation">General Dental Checkup & Consultation</option>
                        <option value="Root Canal Treatment (RCT)">Root Canal Treatment (RCT)</option>
                        <option value="Dental Implants & Replacement">Dental Implants & Replacement</option>
                        <option value="Braces & Clear Aligners">Braces & Clear Aligners</option>
                        <option value="Ultrasonic Teeth Scaling & Polishing">Ultrasonic Teeth Scaling & Polishing</option>
                        <option value="Tooth-Colored Composite Laser Filling">Tooth-Colored Composite Laser Filling</option>
                        <option value="Pediatric Dental Care (Kids)">Pediatric Dental Care (Kids)</option>
                        <option value="Wisdom Tooth Extraction">Wisdom Tooth Surgical Extraction</option>
                        <option value="Dental Crowns (Zirconia / Ceramic)">Dental Crowns (Zirconia / Ceramic)</option>
                        <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="patient-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          id="patient-date"
                          type="date"
                          min={todayDateString}
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white text-slate-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Consultation Time Shift Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Clinic Shift
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        id="time-slot-morning-btn"
                        type="button"
                        onClick={() => setTimeSlot('morning')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                          timeSlot === 'morning'
                            ? 'border-sky-600 bg-sky-50 text-sky-900 ring-1 ring-sky-600'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold">Morning Shift</div>
                        <div className="text-[11px] text-slate-500 font-normal">10:00 AM – 2:00 PM</div>
                      </button>

                      <button
                        id="time-slot-evening-btn"
                        type="button"
                        onClick={() => setTimeSlot('evening')}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                          timeSlot === 'evening'
                            ? 'border-sky-600 bg-sky-50 text-sky-900 ring-1 ring-sky-600'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold">Evening Shift</div>
                        <div className="text-[11px] text-slate-500 font-normal">5:00 PM – 8:30 PM</div>
                      </button>
                    </div>
                  </div>

                  {/* Symptoms & Notes */}
                  <div>
                    <label htmlFor="patient-symptoms" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Current Symptoms / Specific Notes (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <textarea
                        id="patient-symptoms"
                        rows={2}
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        placeholder="Mention throbbing pain, sensitivity to hot/cold, broken tooth, or preferred timing..."
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="booking-submit-whatsapp-btn"
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-99"
                  >
                    <Send className="w-5 h-5" />
                    <span>Confirm & Send via WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    🔒 Direct encrypted chat with Dr. Saikat Banerjee's reception ({CLINIC_INFO.phone}). No spam guarantee.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

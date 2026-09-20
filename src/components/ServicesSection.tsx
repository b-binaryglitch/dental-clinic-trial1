import { useState } from 'react';
import {
  Activity,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Scissors,
  Crown,
  Sparkle,
  ArrowRight,
  Info,
  X,
  Calendar,
  Check,
} from 'lucide-react';
import { ServiceItem, TreatmentCategory } from '../types';
import { SERVICES } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export function ServicesSection({ onSelectServiceForBooking }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const categories: { label: string; value: TreatmentCategory }[] = [
    { label: 'All Treatments', value: 'all' },
    { label: 'Root Canal & Nerve Care', value: 'endodontics' },
    { label: 'Implants & Surgery', value: 'surgery' },
    { label: 'Braces & Aligners', value: 'orthodontics' },
    { label: 'Cleanings & Preventive', value: 'preventive' },
    { label: 'Fillings & Crowns', value: 'restorative' },
  ];

  const filteredServices = SERVICES.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-sky-600 shrink-0' };
    switch (name) {
      case 'Activity':
        return <Activity {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Sparkle':
        return <Sparkle {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'Scissors':
        return <Scissors {...props} />;
      case 'Crown':
        return <Crown {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Dental Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Clinical Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Every procedure is performed in an uncompromisingly sterile environment using precision German & Japanese micro-instruments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-sky-300 transition-all group"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100 group-hover:scale-105 transition-transform">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                  {service.tagline}
                </p>

                {/* Highlights List */}
                <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta details */}
                <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Patient Comfort:</span>
                    <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                      {service.painLevel}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 pt-0.5">
                    <strong className="font-semibold text-slate-700">Ideal For:</strong> {service.idealFor}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  type="button"
                  className="flex-1 py-2 text-xs font-semibold text-slate-700 hover:text-sky-700 bg-slate-50 hover:bg-sky-50 rounded-lg transition-colors text-center cursor-pointer"
                >
                  Clinical Info
                </button>
                <button
                  onClick={() => onSelectServiceForBooking(service.name)}
                  type="button"
                  className="flex-1 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-2xs transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-100">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                  {renderIcon(selectedServiceModal.iconName)}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    {selectedServiceModal.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    {selectedServiceModal.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                type="button"
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-sky-700">
                  Overview & Technique
                </h4>
                <p className="mt-1 leading-relaxed text-slate-600">
                  {selectedServiceModal.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-sky-700">
                  Ideal Indications
                </h4>
                <p className="mt-1 text-slate-600 bg-sky-50/70 p-2.5 rounded-lg border border-sky-100 text-xs leading-normal">
                  {selectedServiceModal.idealFor}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-sky-700 mb-2">
                  Clinical Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedServiceModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block">Patient Comfort:</span>
                  <span className="font-bold text-emerald-700">{selectedServiceModal.painLevel}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block">Category:</span>
                  <span className="font-bold text-slate-800 capitalize">{selectedServiceModal.category}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceModal(null)}
                type="button"
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedServiceModal.name;
                  setSelectedServiceModal(null);
                  onSelectServiceForBooking(name);
                }}
                type="button"
                className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book This Treatment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

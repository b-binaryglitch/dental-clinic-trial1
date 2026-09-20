import { ServiceItem, Testimonial, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'ODONTOLOGY',
  fullName: 'ODONTOLOGY - The Dental Clinic',
  doctorName: 'Dr. Saikat Banerjee',
  doctorDegree: 'BDS',
  doctorTitle: 'Dental Surgeon & Micro-Endodontist',
  experienceYears: '3 Years',
  phone: '+91 9773949063',
  phoneRaw: '919773949063',
  whatsappNumber: '919773949063',
  address: {
    line1: '2no Pakmara Goli, Ranju Market Place',
    line2: 'Beside Barabazar Masjid, A.C. Mitra Lane, BC Road',
    area: 'Khosbagan',
    city: 'Bardhaman',
    state: 'West Bengal',
    pincode: '713101',
    landmark: 'Beside Barabazar Masjid, Khosbagan',
  },
  timings: {
    morning: '10:00 AM – 2:00 PM',
    evening: '5:00 PM – 8:30 PM',
    days: 'Monday to Saturday',
    sunday: 'Sunday: Prior Appointment Only',
  },
  mapsUrl: 'https://maps.app.goo.gl/MBL7PhCNiMMHp6Gs5',
  embedMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.000000000000!2d87.8614!3d23.2324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzU2LjYiTiA4N8KwNTEnNDMuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
  doctorImage: '/dr_saikat_banarjee.jpg',
  clinicImage: '/clinic_interior.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'root-canal',
    name: 'Root Canal Treatment (RCT)',
    category: 'endodontics',
    tagline: 'Painless single/multi-sitting micro-endodontics to save infected natural teeth',
    description: 'Targeted nerve debridement and 3D thermo-plasticized obturation that completely eradicates acute pulp infection while preserving your natural tooth foundation without pain.',
    highlights: [
      'Modern rotary endodontics for rapid, quiet cleaning',
      'Electronic apex locators for microscopic precision',
      'Digital RVG X-ray verification at every step',
      'High-grade biocompatible gutta-percha seal',
    ],
    painLevel: 'Painless (with local anesthesia)',
    idealFor: 'Deep tooth decay, acute toothache, nerve exposure, temperature sensitivity',
    iconName: 'Activity',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants & Restorations',
    category: 'surgery',
    tagline: 'Permanent, titanium tooth roots engineered for lifetime chewing stability',
    description: 'Biocompatible grade-IV titanium screw roots integrated into your jawbone to securely anchor realistic crowns, bridges, or dentures without altering adjacent teeth.',
    highlights: [
      'Osseointegrated medical titanium foundation',
      'Restores 99% of natural chewing strength',
      'Prevents facial jaw bone resorption and aging',
      'Custom color-matched zirconia or porcelain crown',
    ],
    painLevel: 'Painless (with local anesthesia)',
    idealFor: 'Single or multiple missing teeth, loose dentures, tooth gaps',
    iconName: 'ShieldCheck',
  },
  {
    id: 'braces-aligners',
    name: 'Braces & Clear Aligners',
    category: 'orthodontics',
    tagline: 'Advanced orthodontics for aligned bites and confident smiling',
    description: 'Custom orthodontic correction options including traditional metal, tooth-colored aesthetic ceramic brackets, and invisible clear aligners for teens and adults.',
    highlights: [
      'Digital cephalometric bite analysis',
      'Discreet ceramic brackets and clear aligner trays',
      'Gentle continuous force for minimal soreness',
      'Custom retention plan to prevent relapse',
    ],
    painLevel: 'Mild discomfort only',
    idealFor: 'Crooked teeth, gap teeth, forward protrusion, deep bite, crowding',
    iconName: 'Sparkles',
  },
  {
    id: 'teeth-scaling',
    name: 'Ultrasonic Teeth Scaling & Polishing',
    category: 'preventive',
    tagline: 'Gentle ultrasonic tartar eradication and gum rejuvenation',
    description: 'Non-abrasive ultrasonic vibrations safely break down hardened calculus, bacterial tartar, and smoking/tea stains, followed by fluoride paste polishing for a squeaky-clean finish.',
    highlights: [
      'Non-invasive piezo-electric ultrasonic tip',
      'Removes stubborn tobacco, tea, and paan stains',
      'Stops gum bleeding and cures bad breath (halitosis)',
      'Recommended every 6 months for oral longevity',
    ],
    painLevel: 'Completely non-invasive',
    idealFor: 'Bleeding gums, stained teeth, plaque buildup, preventive hygiene',
    iconName: 'Sparkle',
  },
  {
    id: 'composite-fillings',
    name: 'Tooth-Colored Composite Fillings',
    category: 'restorative',
    tagline: 'Seamless aesthetic restorations that blend invisibly with enamel',
    description: 'Nano-hybrid light-cured composite resin matched to your exact tooth shade, restoring cavities and chipped incisors with instant durability.',
    highlights: [
      'Exact shade match for undetectable repairs',
      'Conservative cavity preparation sparing healthy enamel',
      'UV light-cured for instant eating and biting',
      'Mercury-free, biocompatible material',
    ],
    painLevel: 'Painless (with local anesthesia)',
    idealFor: 'Small to medium cavities, food trapping, chipped front teeth',
    iconName: 'CheckCircle2',
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry (Kids Care)',
    category: 'preventive',
    tagline: 'Gentle, friendly, and fear-free dental visits for young children',
    description: 'Specialized compassionate approach designed to keep children calm and cooperative, offering pit & fissure sealants, fluoride varnishes, pulpectomy, and space maintainers.',
    highlights: [
      'Child-friendly communication to eliminate dental phobia',
      'Preventive pit & fissure cavity sealants',
      'Fluoride therapy to strengthen developing enamel',
      'Painless baby tooth extractions & fillings',
    ],
    painLevel: 'Mild discomfort only',
    idealFor: 'Early milk tooth decay, habit breaking, thumb sucking, routine checkups',
    iconName: 'HeartPulse',
  },
  {
    id: 'wisdom-tooth-surgery',
    name: 'Wisdom Tooth & Surgical Extractions',
    category: 'surgery',
    tagline: 'Safe, traumatic-free extraction of impacted or painful wisdom teeth',
    description: 'Sterile surgical removal of horizontally impacted, partially erupted, or crowded third molars under effective localized nerve blocks with rapid healing protocols.',
    highlights: [
      'Minimal-trauma atraumatic bone sectioning',
      'High-potency localized anesthesia for zero pain during procedure',
      'Sterile surgical packs and Class-B autoclaved instruments',
      'Detailed post-op recovery kit and follow-up guidance',
    ],
    painLevel: 'Painless (with local anesthesia)',
    idealFor: 'Impacted wisdom teeth, severe jaw pain, cheek biting, un-restorable broken roots',
    iconName: 'Scissors',
  },
  {
    id: 'crowns-bridges',
    name: 'Dental Crowns & Zirconia Bridges',
    category: 'restorative',
    tagline: 'High-strength CAD/CAM prosthetic caps for post-RCT and fractured teeth',
    description: 'Computer-milled Zirconia, Porcelain-Fused-to-Metal (PFM), and E-Max ceramic crowns engineered to protect brittle teeth after root canal therapy with warranty backing.',
    highlights: [
      'Monolithic Zirconia for fracture-proof chewing',
      'Digital shade-matching for flawless aesthetics',
      'CAD/CAM computerized precision margins',
      'Long-term warranty from certified dental labs',
    ],
    painLevel: 'Mild discomfort only',
    idealFor: 'Post-RCT protection, fractured crowns, replacing missing teeth with fixed bridges',
    iconName: 'Crown',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Prantik Chakraborty',
    role: 'Verified Patient',
    location: 'Bardhaman',
    rating: 5,
    treatment: 'Dental Consultation & Hygiene',
    comment: "One of the best dental clinics I've visited. The doctors are knowledgeable, the staff is courteous, and the clinic maintains high standards of hygiene. Highly recommended!",
    date: 'Recent Visit',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Arpita Dutta',
    role: 'Verified Patient',
    location: 'Bardhaman',
    rating: 5,
    treatment: 'Clinic Visit & Consultation',
    comment: "Best clinic I've visited.",
    date: 'Recent Visit',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Rik Choudhuri',
    role: 'Verified Patient',
    location: 'Bardhaman',
    rating: 5,
    treatment: 'Dental Service & Treatment',
    comment: 'Very Good Service and value for money',
    date: 'Recent Visit',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Subham Das',
    role: 'Verified Patient',
    location: 'Bardhaman',
    rating: 5,
    treatment: 'Comprehensive Dental Care',
    comment: 'Incredibly compassionate and knowledgeable. Affordable to visit. Best Dentist in town.',
    date: 'Recent Visit',
    verified: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Is Root Canal Treatment (RCT) painful at ODONTOLOGY?',
    answer: 'Not at all. With advanced high-potency local anesthetics and computer-assisted rotary micro-endodontic handpieces, the nerve is thoroughly numbed before treatment begins. Most patients report feeling only a gentle vibration, and the procedure provides immediate relief from acute infection and pain.',
    category: 'Root Canal',
  },
  {
    id: 'faq-2',
    question: 'How are clinical consultations and treatment plans conducted?',
    answer: 'During your initial consultation, Dr. Saikat Banarjee conducts a thorough intraoral examination and digital diagnostic assessment to determine the root cause of your concern. Every treatment option is clearly explained to ensure you feel confident and comfortable before any procedure begins.',
    category: 'General',
  },
  {
    id: 'faq-3',
    question: 'Do you attend to acute dental emergencies on the same day?',
    answer: 'Yes! Severe throbbing toothaches, dental trauma, knocked-out teeth, or sudden facial swellings are given priority. Call our emergency direct line at +91 9773949063 or send a WhatsApp message to be slotted immediately during our daily shifts.',
    category: 'Emergency',
  },
  {
    id: 'faq-4',
    question: 'How do I reach the clinic in Khosbagan?',
    answer: 'We are situated at 2no Pakmara Goli, Ranju Market Place, right beside the prominent Barabazar Masjid, on A.C. Mitra Lane (off BC Road) in Khosbagan, Bardhaman (PIN 713101). Two-wheeler parking is accessible directly at the market entrance.',
    category: 'Location',
  },
  {
    id: 'faq-5',
    question: 'Why is a dental crown necessary after a Root Canal?',
    answer: 'A root canal removes the infected blood supply and nerve from inside the tooth, leaving the remaining tooth walls brittle over time. A high-strength ceramic or Zirconia crown acts as a protective 360-degree helmet that prevents the tooth from fracturing under heavy chewing forces.',
    category: 'Root Canal',
  },
  {
    id: 'faq-6',
    question: 'What sterilization safety measures are followed?',
    answer: 'We adhere to strict hospital-grade infection control protocols. All non-disposable stainless steel instruments undergo a 4-tier sterilization: ultrasonic enzyme cleansing, individual medical pouch sealing, Class-B vacuum autoclave at 134°C, and UV chamber storage. Every patient gets a fresh sterilized pack opened in front of them.',
    category: 'Safety',
  },
];

export function getClinicOpenStatus(): {
  isOpen: boolean;
  statusText: string;
  nextShiftText: string;
} {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Mon ... 6 = Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTimeInMinutes = hour * 60 + minute;

  // Sunday: By appointment only
  if (day === 0) {
    return {
      isOpen: false,
      statusText: 'Sunday • By Prior Appointment Only',
      nextShiftText: 'Opens Monday at 10:00 AM',
    };
  }

  // Monday - Saturday shifts:
  // Morning: 10:00 (600 mins) - 14:00 (840 mins)
  // Evening: 17:00 (1020 mins) - 20:30 (1230 mins)
  const morningStart = 10 * 60;
  const morningEnd = 14 * 60;
  const eveningStart = 17 * 60;
  const eveningEnd = 20 * 60 + 30;

  if (currentTimeInMinutes >= morningStart && currentTimeInMinutes <= morningEnd) {
    return {
      isOpen: true,
      statusText: 'Open Now • Morning Shift',
      nextShiftText: 'Closes at 2:00 PM (Reopens 5:00 PM)',
    };
  }

  if (currentTimeInMinutes >= eveningStart && currentTimeInMinutes <= eveningEnd) {
    return {
      isOpen: true,
      statusText: 'Open Now • Evening Shift',
      nextShiftText: 'Closes at 8:30 PM',
    };
  }

  if (currentTimeInMinutes < morningStart) {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      nextShiftText: 'Morning shift opens today at 10:00 AM',
    };
  }

  if (currentTimeInMinutes > morningEnd && currentTimeInMinutes < eveningStart) {
    return {
      isOpen: false,
      statusText: 'Between Shifts',
      nextShiftText: 'Evening shift opens at 5:00 PM',
    };
  }

  return {
    isOpen: false,
    statusText: 'Closed for the Night',
    nextShiftText: day === 6 ? 'Sunday: By Appointment' : 'Opens tomorrow at 10:00 AM',
  };
}

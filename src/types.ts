export type TreatmentCategory = 'all' | 'endodontics' | 'restorative' | 'orthodontics' | 'preventive' | 'surgery';

export interface ServiceItem {
  id: string;
  name: string;
  category: TreatmentCategory;
  tagline: string;
  description: string;
  highlights: string[];
  painLevel: 'Painless (with local anesthesia)' | 'Mild discomfort only' | 'Completely non-invasive';
  idealFor: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  treatment: string;
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'evening';
  message?: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}


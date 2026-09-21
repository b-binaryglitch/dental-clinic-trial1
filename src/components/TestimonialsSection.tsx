import { useState, type FormEvent } from 'react';
import { Star, MessageSquarePlus, CheckCircle, Quote, ThumbsUp, X } from 'lucide-react';
import { Testimonial } from '../types';
import { TESTIMONIALS } from '../data/clinicData';

export function TestimonialsSection() {
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New review form state
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('Bardhaman');
  const [reviewerRating, setReviewerRating] = useState(5);
  const [reviewerTreatment, setReviewerTreatment] = useState('Dental Consultation & Care');
  const [reviewerComment, setReviewerComment] = useState('');

  const handleAddReview = (e: FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewerComment.trim()) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name: reviewerName.trim(),
      role: 'Verified Patient',
      location: reviewerLocation.trim() || 'Bardhaman',
      rating: reviewerRating,
      treatment: reviewerTreatment.trim() || 'Dental Consultation',
      comment: reviewerComment.trim(),
      date: 'Just now',
      verified: true,
    };

    setTestimonialsList([newRev, ...testimonialsList]);
    setIsModalOpen(false);
    setReviewerName('');
    setReviewerComment('');
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              <span>Verified Patient Stories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-xl">
              Real feedback from patients who received compassionate and high-standard dental care with Dr. Saikat Banerjee.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="share-experience-btn"
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="inline-flex items-center gap-2 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Experience</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow relative group"
            >
              <div>
                {/* Rating stars & verified tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Visit</span>
                    </span>
                  )}
                </div>

                <Quote className="w-6 h-6 text-sky-300/60 mb-2" />
                
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    Treatment: {item.treatment}
                  </span>
                </div>
              </div>

              {/* Author info */}
              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role} • {item.location}</p>
                </div>
                <span className="text-[11px] text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Share Your Patient Experience
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4 pt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={reviewerName}
                  onChange={(e) => setReviewerName(e.target.value)}
                  placeholder="e.g. Subhajit Roy"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={reviewerLocation}
                    onChange={(e) => setReviewerLocation(e.target.value)}
                    placeholder="e.g. Bardhaman"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Rating (Stars)
                  </label>
                  <select
                    value={reviewerRating}
                    onChange={(e) => setReviewerRating(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Treatment Undergone
                </label>
                <input
                  type="text"
                  value={reviewerTreatment}
                  onChange={(e) => setReviewerTreatment(e.target.value)}
                  placeholder="e.g. Root Canal Treatment, Ultrasonic Scaling"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  rows={3}
                  required
                  value={reviewerComment}
                  onChange={(e) => setReviewerComment(e.target.value)}
                  placeholder="How was your pain level, doctor's explanation, cleanliness, and overall satisfaction?"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs"
                >
                  Submit Patient Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

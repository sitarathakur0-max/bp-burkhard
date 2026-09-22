import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Mail,
  RefreshCw,
  Navigation,
} from 'lucide-react';
import { ContactFormData, FormErrors } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceInterest: 'Financial Accounting & Bookkeeping',
    message: '',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must contain at least 2 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your business or personal email address.';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.ch).';
    }

    if (formData.phone.trim() && !/^[0-9+\s()./-]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid telephone number format.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter a brief message describing your inquiry.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your mandate or question.';
    }

    if (!formData.privacyAccepted) {
      errs.privacyAccepted = 'You must confirm that your details may be processed for response purposes.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real brief network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = `BP-BERN-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceNumber(randomRef);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceInterest: 'Financial Accounting & Bookkeeping',
      message: '',
      privacyAccepted: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="font-sans-swiss">
      {/* Header */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E5E9] py-16 sm:py-20 relative">
        <div className="absolute inset-0 swiss-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#1D4ED8] bg-[#EBF2FE] px-3 py-1 border border-[#BFDBFE] mb-4">
            <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
            <span>CONTACT OUR OFFICE // BERN HEADQUARTERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14171A] tracking-tight">
            Contact &amp; Location
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            Reach out directly to B&amp;P Burkhard und Partner Treuhand GmbH at Engestrasse 13, 3012 Bern. We are available by telephone or via the secure inquiry form below.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Address Panel */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#D1D5DB] p-6 sm:p-10 shadow-xs">
              <div className="border-b border-[#E2E5E9] pb-4 mb-6">
                <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider">
                  MANDATE INQUIRY // CORRESPONDENCE
                </div>
                <h2 className="text-2xl font-extrabold text-[#14171A] mt-1">
                  Send an Inquiry to Our Fiduciary Team
                </h2>
                <p className="text-xs text-[#64748B] mt-1">
                  All communications are treated with Swiss statutory confidentiality.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-white border border-[#86EFAC] space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#14171A]">
                    Inquiry Successfully Transmitted
                  </h3>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding{' '}
                    <strong>{formData.serviceInterest}</strong> has been logged. Our team at Engestrasse 13 in Bern will review your details and respond promptly during office hours.
                  </p>

                  <div className="p-4 bg-[#F8F9FA] border border-[#E2E5E9] font-mono-swiss text-xs space-y-1">
                    <div className="text-[#64748B]">
                      REFERENCE ID:{' '}
                      <span className="font-bold text-[#14171A]">{referenceNumber}</span>
                    </div>
                    <div className="text-[#64748B]">
                      RECIPIENT:{' '}
                      <span className="text-[#14171A]">{BUSINESS_INFO.name}</span>
                    </div>
                    <div className="text-[#64748B]">
                      DIRECT PHONE:{' '}
                      <a href={BUSINESS_INFO.phoneHref} className="text-[#1D4ED8] font-bold">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center space-x-3">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center px-4 py-2.5 bg-[#14171A] text-white text-xs font-bold hover:bg-[#1D4ED8] transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                      <span>Send Another Message</span>
                    </button>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center px-4 py-2.5 bg-white border border-[#D1D5DB] text-[#14171A] text-xs font-semibold hover:bg-[#F3F4F6]"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5 text-[#1D4ED8]" />
                      <span>Call Us Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-mono-swiss text-[#14171A] uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Thomas Müller"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.fullName ? 'border-[#DC2626] bg-[#FEF2F2]' : 'border-[#CBD5E1]'
                        } focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-[#DC2626] flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono-swiss text-[#14171A] uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-[#DC2626]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. t.mueller@unternehmen.ch"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.email ? 'border-[#DC2626] bg-[#FEF2F2]' : 'border-[#CBD5E1]'
                        } focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-[#DC2626] flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-mono-swiss text-[#14171A] uppercase tracking-wider mb-1.5"
                      >
                        Telephone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 031 371 99 77"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.phone ? 'border-[#DC2626] bg-[#FEF2F2]' : 'border-[#CBD5E1]'
                        } focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-[#DC2626] flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-mono-swiss text-[#14171A] uppercase tracking-wider mb-1.5"
                      >
                        Company / Entity Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Müller &amp; Co. GmbH"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                      />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label
                      htmlFor="serviceInterest"
                      className="block text-xs font-mono-swiss text-[#14171A] uppercase tracking-wider mb-1.5"
                    >
                      Area of Fiduciary Interest
                    </label>
                    <select
                      id="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#CBD5E1] text-[#14171A] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.code}: {s.title}
                        </option>
                      ))}
                      <option value="General Fiduciary Consultation">
                        General Fiduciary &amp; Accounting Consultation
                      </option>
                      <option value="New Company Formation / Setup Support">
                        New Company Onboarding &amp; Setup Support
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono-swiss text-[#14171A] uppercase tracking-wider mb-1.5"
                    >
                      Message / Mandate Overview <span className="text-[#DC2626]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please briefly outline your business structure, estimated volume of vouchers, or specific requirements..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                        errors.message ? 'border-[#DC2626] bg-[#FEF2F2]' : 'border-[#CBD5E1]'
                      } focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-[#DC2626] flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label className="flex items-start space-x-2.5 cursor-pointer">
                      <input
                        id="privacyAccepted"
                        type="checkbox"
                        checked={formData.privacyAccepted}
                        onChange={(e) =>
                          setFormData({ ...formData, privacyAccepted: e.target.checked })
                        }
                        className="mt-1 h-4 w-4 text-[#1D4ED8] border-[#CBD5E1] rounded-none focus:ring-[#1D4ED8]"
                      />
                      <span className="text-xs text-[#475569] leading-normal">
                        I confirm that the submitted information may be used by B&amp;P Burkhard und Partner Treuhand GmbH to evaluate and respond to this inquiry in accordance with Swiss data protection standards.
                      </span>
                    </label>
                    {errors.privacyAccepted && (
                      <p className="mt-1 text-xs text-[#DC2626] flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.privacyAccepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-sm font-bold transition-colors border border-black shadow-xs disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Transmitting to Bern Office...
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Submit Inquiry
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Address & Direct Contact Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Desk Callout Box */}
              <div className="bg-[#14171A] text-white border border-black p-6 sm:p-8 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-mono-swiss text-[#93C5FD] uppercase tracking-wider mb-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>DIRECT TELEPHONE CONTACT</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  Speak Directly with Our Office
                </h3>
                <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
                  For immediate assistance during office hours, telephone our Bern headquarters directly:
                </p>
                <div className="mt-5 pt-4 border-t border-[#252A30]">
                  <a
                    id="contact-page-phone-btn"
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center w-full py-3.5 px-4 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-mono-swiss font-bold text-lg transition-colors border border-[#3B82F6]"
                  >
                    <Phone className="w-5 h-5 mr-2 text-white" />
                    <span>031 371 99 77</span>
                  </a>
                </div>
              </div>

              {/* Exact Location Details */}
              <div className="bg-white border border-[#D1D5DB] p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider border-b border-[#E2E5E9] pb-3">
                  BERN HEADQUARTERS ADDRESS
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#14171A]">{BUSINESS_INFO.name}</div>
                      <div className="text-[#475569]">{BUSINESS_INFO.address.street}</div>
                      <div className="text-[#475569]">
                        {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                      </div>
                      <div className="text-xs text-[#64748B] mt-0.5 font-mono-swiss">
                        Länggasse District, Canton of Bern
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-3 border-t border-[#EAECEF]">
                    <Clock className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono-swiss text-[#64748B] uppercase">
                        Office Working Hours
                      </div>
                      <div className="text-xs text-[#334155] mt-1 space-y-0.5">
                        <div className="flex justify-between font-mono-swiss">
                          <span>Monday – Thursday:</span>
                          <span className="font-semibold">08:00–12:00 / 13:30–17:15</span>
                        </div>
                        <div className="flex justify-between font-mono-swiss">
                          <span>Friday:</span>
                          <span className="font-semibold">08:00–12:00 / 13:30–16:30</span>
                        </div>
                        <div className="flex justify-between font-mono-swiss text-[#64748B]">
                          <span>Saturday – Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Public Transport & Access Info */}
                  <div className="flex items-start space-x-3 pt-3 border-t border-[#EAECEF]">
                    <Navigation className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono-swiss text-[#64748B] uppercase">
                        Getting to Engestrasse 13
                      </div>
                      <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                        Easily reachable from Bern Main Station (Bahnhof Bern) via Bus Line 12 (direction Länggasse) or via a brief 8-minute walk. Visitor parking options are available in the surrounding blue zone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Location & Directions Grid */}
      <section className="py-14 bg-[#F8F9FA] border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E2E5E9] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider">
                  LOCATION SCHEMATIC // 3012 BERN
                </span>
                <h3 className="text-lg font-bold text-[#14171A] mt-1">
                  Engestrasse 13, 3012 Bern
                </h3>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Engestrasse 13, 3012 Bern, Switzerland')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono-swiss text-[#1D4ED8] hover:text-[#1E40AF] underline"
              >
                <span>Open in External Map / Directions</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#475569] leading-relaxed font-mono-swiss">
              <div className="p-4 border border-[#EAECEF] bg-[#FAFAFA]">
                <span className="font-bold text-[#14171A] block mb-1">
                  [01] PUBLIC TRANSIT (ÖV)
                </span>
                Take bus line 12 from Bahnhof Bern towards Länggasse. Short walking distance to Engestrasse 13.
              </div>
              <div className="p-4 border border-[#EAECEF] bg-[#FAFAFA]">
                <span className="font-bold text-[#14171A] block mb-1">
                  [02] BY MOTOR VEHICLE
                </span>
                Accessible via Neufeld exit or Forsthaus interchange. Blue-zone public parking is situated along Engestrasse and adjacent avenues.
              </div>
              <div className="p-4 border border-[#EAECEF] bg-[#FAFAFA]">
                <span className="font-bold text-[#14171A] block mb-1">
                  [03] DOCUMENT DROPOFF
                </span>
                Physical accounting binders and voucher envelopes can be dropped off during standard office hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

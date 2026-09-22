import React from 'react';
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14171A] text-[#F8F9FA] border-t border-black font-sans-swiss">
      {/* Top Swiss Architectural Bar */}
      <div className="border-b border-[#2A2E33] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-2.5 h-2.5 bg-[#1D4ED8] inline-block"></span>
              <span className="font-mono-swiss text-xs tracking-widest text-[#94A3B8] uppercase">
                SWISS FIDUCIARY & ACCOUNTING FIRM // BERN
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              B&P Burkhard und Partner Treuhand GmbH
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
            <a
              id="footer-call-cta-btn"
              href={BUSINESS_INFO.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] transition-colors border border-[#3B82F6]"
              aria-label={`Call Bern Fiduciary: ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
            <button
              id="footer-contact-cta-btn"
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#F8F9FA] bg-[#212529] hover:bg-[#2B3036] transition-colors border border-[#3A3F45]"
            >
              <span>Contact Our Office</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#94A3B8]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Editorial Grid with Swiss Hairline Dividers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Firm Overview & Corporate Identity */}
          <div className="space-y-4">
            <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider">
              [COL.01] LEGAL ENTITY
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Professional fiduciary and accounting business based in the city of Bern. We support small and medium-sized enterprises, sole proprietors, and organizations with meticulous bookkeeping, payroll, VAT, and financial statements.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center text-xs font-mono-swiss text-[#CBD5E1] bg-[#1E2328] px-3 py-1.5 border border-[#2D3339]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8] mr-1.5" />
                <span>SWISS OR 957ff STANDARDS</span>
              </div>
            </div>
          </div>

          {/* Column 2: Fiduciary Service Areas */}
          <div className="space-y-4">
            <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider">
              [COL.02] CORE SERVICES
            </div>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left flex items-center group"
                  >
                    <span className="text-[11px] font-mono-swiss text-[#475569] mr-2 group-hover:text-[#38BDF8]">
                      {svc.code}
                    </span>
                    <span className="line-clamp-1">{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Bern Location */}
          <div className="space-y-4">
            <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider">
              [COL.03] BERN ADDRESS & LINE
            </div>
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{BUSINESS_INFO.name}</div>
                  <div>{BUSINESS_INFO.address.street}</div>
                  <div>{BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</div>
                  <div className="text-xs text-[#64748B]">Länggasse District, Bern</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <div>
                  <span className="text-xs text-[#64748B] block">Telephone</span>
                  <a
                    id="footer-main-phone-link"
                    href={BUSINESS_INFO.phoneHref}
                    className="text-white hover:text-[#60A5FA] font-medium font-mono-swiss"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#64748B] block">Office Hours</span>
                  <div className="text-xs text-[#CBD5E1]">Mon–Thu: 08:00–12:00 / 13:30–17:15</div>
                  <div className="text-xs text-[#CBD5E1]">Fri: 08:00–12:00 / 13:30–16:30</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Navigation & Statutory Principles */}
          <div className="space-y-4">
            <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider">
              [COL.04] NAVIGATION & LEGAL
            </div>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Fiduciary & Accounting Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  About the Firm
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Map Location
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-[#64748B] border-t border-[#23272C] leading-relaxed">
              <FileText className="w-3.5 h-3.5 inline mr-1 text-[#94A3B8]" />
              Fiduciary mandate subject to Swiss statutory confidentiality and professional diligence standards.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#22262B] bg-[#0E1012] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono-swiss text-[#64748B] gap-4">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>ENGELSTRASSE 13 • 3012 BERN</span>
            <span className="hidden md:inline">•</span>
            <span className="text-[#94A3B8]">SWISS FIDUCIARY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

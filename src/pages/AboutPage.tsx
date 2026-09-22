import React from 'react';
import { ShieldCheck, MapPin, Phone, ArrowRight, Building, Lock, FileText, Scale } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="font-sans-swiss">
      {/* Editorial Header */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E5E9] py-16 sm:py-20 relative">
        <div className="absolute inset-0 swiss-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#1D4ED8] bg-[#EBF2FE] px-3 py-1 border border-[#BFDBFE] mb-4">
            <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
            <span>PROFILE // B&amp;P BURKHARD UND PARTNER TREUHAND GMBH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14171A] tracking-tight">
            Fiduciary Stewardship in Bern
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            Rooted at Engestrasse 13 in 3012 Bern, our office provides disciplined, compliant accounting and fiduciary administration for commercial entities and business owners.
          </p>
        </div>
      </section>

      {/* Main Narrative Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#D1D5DB] bg-[#FAFAFA] p-6 sm:p-8 shadow-xs">
                <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider mb-2">
                  PRACTICE IDENTITY
                </div>
                <h2 className="text-xl font-bold text-[#14171A]">
                  {BUSINESS_INFO.name}
                </h2>
                <div className="mt-4 space-y-3 text-xs font-mono-swiss text-[#475569] border-t border-[#E2E5E9] pt-4">
                  <div className="flex justify-between">
                    <span className="text-[#8B96A5]">LEGAL STRUCTURE:</span>
                    <span className="font-semibold text-[#14171A]">GmbH (Switzerland)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8B96A5]">OFFICE LOCATION:</span>
                    <span className="font-semibold text-[#14171A]">Engestrasse 13, Bern</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8B96A5]">POSTAL DISTRICT:</span>
                    <span className="font-semibold text-[#14171A]">3012 Bern</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8B96A5]">PRIMARY MANDATES:</span>
                    <span className="font-semibold text-[#14171A]">Accounting &amp; Fiduciary</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E5E9]">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2" />
                    <span>Call Direct: {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Location card */}
              <div className="p-6 border border-[#E2E5E9] bg-white text-xs space-y-3">
                <div className="flex items-center space-x-2 text-[#1D4ED8] font-mono-swiss font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>ENGELSTRASSE 13, 3012 BERN</span>
                </div>
                <p className="text-[#55606E] leading-relaxed">
                  Located in Bern’s Länggasse district, our office is conveniently accessible via public transit from the main station (Bahnhof Bern) as well as by private vehicle.
                </p>
              </div>
            </div>

            {/* Right Narrative Content (7 cols) */}
            <div className="lg:col-span-7 space-y-8 text-base text-[#333E4D] leading-relaxed">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171A] tracking-tight mb-4">
                  The Role of the Swiss Fiduciary (Treuhand)
                </h2>
                <p className="mb-4">
                  In Switzerland, the fiduciary relationship is founded on trust, legal diligence, and absolute confidentiality. A fiduciary firm is not merely a service vendor; it acts as an external department responsible for safeguarding the administrative integrity and financial transparency of the client’s enterprise.
                </p>
                <p>
                  At <strong>B&amp;P Burkhard und Partner Treuhand GmbH</strong>, we support clients through all phases of their fiscal cycle. Whether establishing initial charts of accounts, maintaining ongoing transaction registers, preparing quarterly VAT submissions, or delivering final audited-ready balance sheets, our work is carried out with methodical Swiss precision.
                </p>
              </div>

              {/* 4 Professional Foundations */}
              <div className="pt-4 border-t border-[#E2E5E9]">
                <h3 className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-6">
                  OPERATIONAL COMMITMENTS
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-[#E2E5E9] p-5 bg-[#F8F9FA]">
                    <Scale className="w-5 h-5 text-[#1D4ED8] mb-2" />
                    <h4 className="text-sm font-bold text-[#14171A]">Statutory Rigor</h4>
                    <p className="text-xs text-[#55606E] mt-1.5 leading-relaxed">
                      Every ledger entry and financial statement strictly complies with the Swiss Code of Obligations (OR 957ff) and relevant cantonal tax codes.
                    </p>
                  </div>

                  <div className="border border-[#E2E5E9] p-5 bg-[#F8F9FA]">
                    <Lock className="w-5 h-5 text-[#1D4ED8] mb-2" />
                    <h4 className="text-sm font-bold text-[#14171A]">Discretion &amp; Data Security</h4>
                    <p className="text-xs text-[#55606E] mt-1.5 leading-relaxed">
                      Your financial records, payroll figures, and corporate documents are managed under strict Swiss statutory confidentiality and modern data privacy standards.
                    </p>
                  </div>

                  <div className="border border-[#E2E5E9] p-5 bg-[#F8F9FA]">
                    <FileText className="w-5 h-5 text-[#1D4ED8] mb-2" />
                    <h4 className="text-sm font-bold text-[#14171A]">Voucher Discipline</h4>
                    <p className="text-xs text-[#55606E] mt-1.5 leading-relaxed">
                      We uphold the foundational principle: "No booking without an auditable voucher." Structured digital or physical archives make review effortless.
                    </p>
                  </div>

                  <div className="border border-[#E2E5E9] p-5 bg-[#F8F9FA]">
                    <Building className="w-5 h-5 text-[#1D4ED8] mb-2" />
                    <h4 className="text-sm font-bold text-[#14171A]">Local Bern Proximity</h4>
                    <p className="text-xs text-[#55606E] mt-1.5 leading-relaxed">
                      Direct, accountable communication right here in Bern. You have an accessible point of contact whenever questions arise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-6 border-t border-[#E2E5E9] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-sm font-bold transition-colors border border-black shadow-xs"
                >
                  <span>Connect with Our Bern Office</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#F1F3F5] hover:bg-[#E2E8F0] text-[#14171A] text-sm font-semibold border border-[#CBD5E1] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#1D4ED8]" />
                  <span>031 371 99 77</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

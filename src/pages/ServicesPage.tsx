import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Phone, FileText, ChevronRight, Check } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, BUSINESS_INFO, ServiceItem } from '../data/businessData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === activeFilter);

  return (
    <div className="font-sans-swiss">
      {/* Editorial Header */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E5E9] py-16 sm:py-20 relative">
        <div className="absolute inset-0 swiss-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#1D4ED8] bg-[#EBF2FE] px-3 py-1 border border-[#BFDBFE] mb-4">
            <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
            <span>FIDUCIARY PRACTICE // CANTON OF BERN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14171A] tracking-tight">
            Fiduciary &amp; Accounting Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            Methodical bookkeeping, payroll administration, VAT compliance, and statutory financial statements executed according to the Swiss Code of Obligations.
          </p>

          {/* Quick Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-[#E2E5E9]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-mono-swiss transition-colors border ${
                activeFilter === 'all'
                  ? 'bg-[#14171A] text-white border-black'
                  : 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F1F3F5]'
              }`}
            >
              ALL PRACTICE AREAS ({SERVICES.length})
            </button>
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveFilter(s.id)}
                className={`px-3.5 py-1.5 text-xs font-mono-swiss transition-colors border ${
                  activeFilter === s.id
                    ? 'bg-[#1D4ED8] text-white border-[#1E40AF]'
                    : 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F1F3F5]'
                }`}
              >
                {s.code}: {s.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="border border-[#D1D5DB] bg-[#FAFAFA] p-6 sm:p-10 shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left meta & title (5 cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-1 bg-[#14171A] text-white font-mono-swiss text-xs font-bold">
                      {service.code}
                    </span>
                    <span className="text-xs font-mono-swiss text-[#64748B]">
                      SWISS OR COMPLIANT
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171A] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-4 border-t border-[#E2E5E9] space-y-2 text-xs font-mono-swiss">
                    <div className="text-[#64748B]">
                      <span className="font-semibold text-[#14171A] block">PRIMARY FOCUS:</span>
                      {service.keyFocus}
                    </div>
                    <div className="text-[#64748B] pt-2">
                      <span className="font-semibold text-[#14171A] block">RELEVANT ENTITIES:</span>
                      {service.clientType}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center text-xs font-bold text-[#1D4ED8] hover:text-[#1E40AF] underline underline-offset-4"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1" />
                      <span>View Mandate Summary Modal</span>
                    </button>
                  </div>
                </div>

                {/* Right deliverables block (7 cols) */}
                <div className="lg:col-span-7 bg-white border border-[#E2E5E9] p-6 sm:p-8 space-y-6">
                  <div className="border-b border-[#E2E5E9] pb-3 flex items-center justify-between">
                    <h3 className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider font-bold">
                      Service Scope &amp; Standard Deliverables
                    </h3>
                    <span className="text-xs font-mono-swiss text-[#64748B]">
                      {service.deliverables.length} Deliverables
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#252F3D]">
                        <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mr-3 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#E2E5E9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-xs text-[#64748B] font-mono-swiss">
                      Engagement setup via Engestrasse 13, Bern
                    </span>
                    <button
                      onClick={() => {
                        onNavigate('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors border border-black shadow-xs"
                    >
                      <span>Inquire About {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Swiss Fiduciary Framework Callout */}
      <section className="py-16 bg-[#F8F9FA] border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#CBD5E1] p-8 sm:p-12 shadow-xs">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider">
                LEGAL BASIS FOR SWISS BOOKKEEPING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171A] tracking-tight">
                Operating Under Swiss Commercial Law (OR 957–963b)
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Under Swiss federal law, all sole proprietorships and partnerships with annual revenues exceeding CHF 100,000, as well as all corporations (GmbH and AG), are obligated to keep accounts and present financial statements in full compliance with the statutory rules of commercial accounting.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center px-5 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-bold transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Direct Call: {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center px-5 py-3 bg-white hover:bg-[#F1F3F5] text-[#14171A] text-sm font-bold border border-[#CBD5E1] transition-colors"
                >
                  <span>Request Written Scope Proposal</span>
                  <ChevronRight className="w-4 h-4 ml-1.5 text-[#64748B]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import {
  ArrowRight,
  Phone,
  FileCheck,
  CheckCircle,
  HelpCircle,
  Shield,
  Layers,
  Calendar,
  Briefcase,
  ChevronRight,
  MapPin,
  Clock,
} from 'lucide-react';
import { PageId } from '../types';
import {
  BUSINESS_INFO,
  SERVICES,
  PROCESS_STEPS,
  PRACTICAL_GUIDELINES,
  FAQS,
  ServiceItem,
} from '../data/businessData';
import { DocumentChecklist } from '../components/DocumentChecklist';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectService }) => {
  return (
    <div className="font-sans-swiss">
      {/* SECTION 1: HERO (Modern Swiss Editorial-Finance Aesthetic) */}
      <section className="relative border-b border-[#E2E5E9] bg-[#F8F9FA] overflow-hidden">
        {/* Subtle architectural Swiss grid line */}
        <div className="absolute inset-0 swiss-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            {/* Left Column: Typography Statement & Proposition (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                {/* Monospace Swiss reference indicator */}
                <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#1D4ED8] bg-[#EBF2FE] px-3 py-1 border border-[#BFDBFE] mb-6">
                  <span className="w-2 h-2 bg-[#1D4ED8]"></span>
                  <span>CANTON OF BERN // ESTABLISHED FIDUCIARY PRACTICE</span>
                </div>

                {/* Oversized Typographic Statement */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14171A] tracking-tight leading-[1.08]">
                  Precision Accounting &amp; Fiduciary Stewardship for Bern.
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-[#333E4D] font-normal leading-relaxed max-w-2xl">
                  B&amp;P Burkhard und Partner Treuhand GmbH delivers disciplined financial bookkeeping, payroll administration, VAT reporting, and year-end closing for small to mid-sized Swiss enterprises.
                </p>
              </div>

              {/* Action Buttons & Phone Link */}
              <div className="pt-4 border-t border-[#E2E5E9] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="hero-phone-cta"
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center px-6 py-4 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-base transition-colors shadow-xs border border-[#1E40AF]"
                  aria-label={`Call direct: ${BUSINESS_INFO.phone}`}
                >
                  <Phone className="w-5 h-5 mr-3 text-[#93C5FD]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  id="hero-services-cta"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center px-6 py-4 bg-white hover:bg-[#F1F3F5] text-[#14171A] font-bold text-base transition-colors border border-[#CBD5E1] shadow-xs"
                >
                  <span>Explore Fiduciary Services</span>
                  <ArrowRight className="w-5 h-5 ml-2 text-[#64748B]" />
                </button>
              </div>

              {/* Direct coordinates metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAECEF] text-xs font-mono-swiss text-[#55606E]">
                <div>
                  <span className="text-[#8B96A5] block uppercase text-[10px]">Location</span>
                  <span className="font-semibold text-[#14171A]">3012 Bern, CH</span>
                </div>
                <div>
                  <span className="text-[#8B96A5] block uppercase text-[10px]">Standard</span>
                  <span className="font-semibold text-[#14171A]">Swiss OR 957ff</span>
                </div>
                <div>
                  <span className="text-[#8B96A5] block uppercase text-[10px]">Direct Desk</span>
                  <span className="font-semibold text-[#1D4ED8]">031 371 99 77</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Architecture Panel (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#D1D5DB] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#E2E5E9] pb-4">
                <div className="flex items-center justify-between text-xs font-mono-swiss text-[#64748B]">
                  <span>FIRM BRIEFING // OVERVIEW</span>
                  <span className="text-[#1D4ED8] font-bold">BURKHARD &amp; PARTNER</span>
                </div>
                <h2 className="text-xl font-bold text-[#14171A] mt-2">
                  Systematic Financial Order
                </h2>
                <p className="text-xs text-[#55606E] mt-1">
                  Engestrasse 13, 3012 Bern • Fiduciary &amp; Accounting Practice
                </p>
              </div>

              {/* Core capabilities snapshot */}
              <div className="py-6 space-y-3">
                {SERVICES.slice(0, 4).map((svc) => (
                  <div
                    key={svc.id}
                    onClick={() => onSelectService(svc)}
                    className="p-3 border border-[#EAECEF] hover:border-[#1D4ED8] bg-[#F8F9FA] hover:bg-[#EFF6FF] cursor-pointer transition-colors group flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono-swiss text-xs font-bold text-[#1D4ED8]">
                        {svc.code}
                      </span>
                      <span className="text-sm font-semibold text-[#14171A] group-hover:text-[#1D4ED8]">
                        {svc.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#1D4ED8] transition-transform group-hover:translate-x-0.5" />
                  </div>
                ))}
              </div>

              {/* Office availability footer in panel */}
              <div className="pt-4 border-t border-[#E2E5E9] bg-[#F9FAFB] p-4 text-xs font-mono-swiss text-[#475569] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Business:</span>
                  <span className="text-[#14171A] font-semibold">Accounting &amp; Fiduciary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Inquiries:</span>
                  <a href={BUSINESS_INFO.phoneHref} className="text-[#1D4ED8] font-bold hover:underline">
                    031 371 99 77
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Address:</span>
                  <span className="text-[#14171A]">Engestrasse 13, Bern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION TO THE FIRM */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
                [SECTION 01] THE PRACTICE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14171A] tracking-tight">
                About B&amp;P Burkhard und Partner Treuhand GmbH
              </h2>
              <p className="mt-3 text-sm text-[#64748B]">
                Independent fiduciary practice located in the Länggasse district of Bern.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base text-[#333E4D] leading-relaxed">
              <p>
                In the Swiss commercial landscape, rigorous bookkeeping is not merely an administrative obligation—it is the bedrock of dependable decision-making and statutory compliance. Based at Engestrasse 13 in 3012 Bern, <strong>B&amp;P Burkhard und Partner Treuhand GmbH</strong> provides comprehensive accounting and fiduciary support to local enterprises, self-employed professionals, and corporate organizations.
              </p>
              <p>
                We manage the daily, quarterly, and annual accounting obligations under Swiss law, from recording transactions and running compliant monthly payroll to closing balance sheets and submitting cantonal tax filings. By entrusting these critical responsibilities to our dedicated office, business leaders can preserve their energy for operational growth while retaining absolute financial clarity.
              </p>

              {/* 3 Structured Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 border border-[#E2E5E9] bg-[#F8F9FA]">
                  <Shield className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <h3 className="text-sm font-bold text-[#14171A]">Statutory Compliance</h3>
                  <p className="text-xs text-[#55606E] mt-1">
                    Strict alignment with the Swiss Code of Obligations (OR 957ff) and federal tax mandates.
                  </p>
                </div>
                <div className="p-4 border border-[#E2E5E9] bg-[#F8F9FA]">
                  <Layers className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <h3 className="text-sm font-bold text-[#14171A]">Structured Method</h3>
                  <p className="text-xs text-[#55606E] mt-1">
                    Systematic chart of accounts, verified reconciliations, and auditable documentation.
                  </p>
                </div>
                <div className="p-4 border border-[#E2E5E9] bg-[#F8F9FA]">
                  <Calendar className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <h3 className="text-sm font-bold text-[#14171A]">Reliable Deadlines</h3>
                  <p className="text-xs text-[#55606E] mt-1">
                    Punctual VAT submissions, monthly payroll disbursements, and year-end tax returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FIDUCIARY & ACCOUNTING SERVICE AREAS */}
      <section className="py-20 bg-[#F8F9FA] border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2E5E9] gap-4">
            <div>
              <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
                [SECTION 02] SERVICE CATALOG
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171A] tracking-tight">
                Fiduciary &amp; Accounting Practice Areas
              </h2>
              <p className="text-base text-[#55606E] mt-2 max-w-2xl">
                Structured fiduciary engagements tailored to Swiss SMEs, corporations, and independent business owners.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors self-start md:self-auto"
            >
              <span>View full service catalog</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* 6-Grid Swiss Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-[#D9DFE5] hover:border-[#1D4ED8] transition-all p-7 flex flex-col justify-between shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-swiss text-xs font-bold text-[#1D4ED8] bg-[#EFF6FF] px-2.5 py-1 border border-[#DBEAFE]">
                      {service.code}
                    </span>
                    <span className="text-[11px] font-mono-swiss text-[#8B96A5]">
                      SWISS FIDUCIARY
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14171A] group-hover:text-[#1D4ED8] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#475569] mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#F0F2F5]">
                    <span className="text-[11px] font-mono-swiss text-[#64748B] uppercase block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#334155]">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#1D4ED8] mr-2 font-bold">•</span>
                          <span className="line-clamp-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAECEF] flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-[#14171A] group-hover:text-[#1D4ED8] inline-flex items-center"
                  >
                    <span>Detailed Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs text-[#64748B] hover:text-[#1D4ED8] transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW PROFESSIONAL ACCOUNTING HELPS BUSINESSES */}
      <section className="py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
                [SECTION 03] BUSINESS VALUE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171A] tracking-tight leading-tight">
                How Professional Accounting Support Protects &amp; Strengthens Swiss Enterprises
              </h2>
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                Operating a business in Switzerland involves navigating multifaceted fiscal, commercial, and labor law regulations. A dedicated fiduciary partner ensures compliance, prevents penalties, and provides vital operational visibility.
              </p>
              <div className="mt-6">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center px-5 py-3 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors border border-black shadow-xs"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call 031 371 99 77 to Discuss Your Needs</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 border border-[#E2E5E9] bg-[#F8F9FA]">
                <div className="w-8 h-8 bg-[#1D4ED8] text-white font-mono-swiss font-bold text-xs flex items-center justify-center mb-3">
                  01
                </div>
                <h3 className="text-base font-bold text-[#14171A]">Statutory Certainty</h3>
                <p className="text-xs text-[#55606E] mt-2 leading-relaxed">
                  Avoid the risks of non-compliance with the Swiss Code of Obligations. We ensure proper document retention, accurate ledger posting, and formally compliant annual statements.
                </p>
              </div>

              <div className="p-6 border border-[#E2E5E9] bg-[#F8F9FA]">
                <div className="w-8 h-8 bg-[#1D4ED8] text-white font-mono-swiss font-bold text-xs flex items-center justify-center mb-3">
                  02
                </div>
                <h3 className="text-base font-bold text-[#14171A]">Liquidity &amp; Margin Clarity</h3>
                <p className="text-xs text-[#55606E] mt-2 leading-relaxed">
                  Regular reconciliations of accounts receivable and payable give you clear, real-time insight into cash flow, working capital, and upcoming tax liabilities.
                </p>
              </div>

              <div className="p-6 border border-[#E2E5E9] bg-[#F8F9FA]">
                <div className="w-8 h-8 bg-[#1D4ED8] text-white font-mono-swiss font-bold text-xs flex items-center justify-center mb-3">
                  03
                </div>
                <h3 className="text-base font-bold text-[#14171A]">Flawless Payroll &amp; Social Taxes</h3>
                <p className="text-xs text-[#55606E] mt-2 leading-relaxed">
                  Swiss social security and withholding tax schemes involve precise tariffs. We calculate net salaries, file monthly withholding, and settle year-end certificates without delays.
                </p>
              </div>

              <div className="p-6 border border-[#E2E5E9] bg-[#F8F9FA]">
                <div className="w-8 h-8 bg-[#1D4ED8] text-white font-mono-swiss font-bold text-xs flex items-center justify-center mb-3">
                  04
                </div>
                <h3 className="text-base font-bold text-[#14171A]">Preserved Executive Energy</h3>
                <p className="text-xs text-[#55606E] mt-2 leading-relaxed">
                  Eliminate administrative stress and voucher chasing. Transfer organized records to our Bern office and focus your attention on clients, staff, and core operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS / WORKFLOW (01 - 05) */}
      <section className="py-20 bg-[#F8F9FA] border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
              [SECTION 04] PROCESS ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171A] tracking-tight">
              Structured Fiduciary Workflow
            </h2>
            <p className="text-base text-[#55606E] mt-2">
              A transparent, step-by-step engagement ensuring dependable accounting throughout the fiscal year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#D9DFE5] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-swiss text-[#8B96A5] pb-3 border-b border-[#EAECEF] mb-3">
                    <span className="font-bold text-[#1D4ED8] text-sm">{step.step}</span>
                    <span>{step.code}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#14171A] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#55606E] mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F0F2F5] text-[11px] font-mono-swiss text-[#1D4ED8]">
                  <span className="text-[#8B96A5] block text-[9px] uppercase">Outcome</span>
                  <span className="font-medium">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PRACTICAL FINANCIAL & ACCOUNTING INFORMATION */}
      <section className="py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
              [SECTION 05] SWISS STATUTORY GUIDANCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171A] tracking-tight">
              Practical Financial &amp; Accounting Information
            </h2>
            <p className="text-base text-[#55606E] mt-2">
              Key obligations and statutory frameworks applicable to commercial entities operating in Switzerland.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRACTICAL_GUIDELINES.map((item) => (
              <div
                key={item.id}
                className="border border-[#E2E5E9] bg-[#F8F9FA] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-swiss text-[#64748B] mb-2">
                    <span className="text-[#1D4ED8] font-bold">{item.statutoryReference}</span>
                    <span>SWISS CODE</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#14171A]">
                    {item.topic}
                  </h3>
                  <p className="text-sm text-[#333E4D] mt-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#E2E5E9] text-xs">
                  <span className="font-mono-swiss text-[#64748B] uppercase block text-[10px] mb-1">
                    Practical Recommendation
                  </span>
                  <p className="text-[#14171A] font-medium leading-normal">
                    {item.practicalAction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: INTERACTIVE DOCUMENT READINESS CHECKLIST */}
      <section className="py-20 bg-[#F4F5F7] border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
              [SECTION 06] CLIENT TOOL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171A] tracking-tight">
              Prepare Your Accounting Records
            </h2>
            <p className="text-base text-[#55606E] mt-2">
              Use our interactive checklist to confirm what documentation is required before delivering records to our fiduciary office.
            </p>
          </div>

          <DocumentChecklist onNavigate={onNavigate} />
        </div>
      </section>

      {/* SECTION 8: FAQ PREVIEW */}
      <section className="py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E2E5E9] gap-4">
            <div>
              <div className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
                [SECTION 07] QUESTIONS &amp; CLARIFICATIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14171A] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors"
            >
              <span>View all questions</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.slice(0, 4).map((faq) => (
              <div key={faq.id} className="p-6 border border-[#E2E5E9] bg-[#F8F9FA]">
                <div className="flex items-center space-x-2 text-xs font-mono-swiss text-[#64748B] mb-2">
                  <HelpCircle className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  <span>{faq.category.toUpperCase()}</span>
                </div>
                <h3 className="text-base font-bold text-[#14171A]">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CONTACT CTA & LOCATION GRID */}
      <section className="py-20 bg-[#14171A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#93C5FD] uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#38BDF8]"></span>
                <span>DIRECT BERN CONSULTATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Arrange a Professional Consultation with Our Bern Office.
              </h2>
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
                Whether you require ongoing bookkeeping, support with year-end financial statements, or dedicated payroll management, our team is at your service.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="final-cta-phone"
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center px-6 py-4 bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold text-base transition-colors border border-[#3B82F6]"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  id="final-cta-contact-form"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-6 py-4 bg-[#23272D] hover:bg-[#2F353D] text-white font-bold text-base transition-colors border border-[#3A414A]"
                >
                  <span>Submit Inquiry Online</span>
                  <ArrowRight className="w-5 h-5 ml-2 text-[#94A3B8]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#1B1F24] border border-[#2F353E] p-6 sm:p-8 space-y-5">
              <div className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider border-b border-[#2A3038] pb-3">
                OFFICE LOCATION &amp; HOURS
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{BUSINESS_INFO.name}</div>
                    <div className="text-[#94A3B8]">{BUSINESS_INFO.address.street}</div>
                    <div className="text-[#94A3B8]">
                      {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}, Switzerland
                    </div>
                    <div className="text-xs text-[#64748B] mt-1">Länggasse District, Bern</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2 border-t border-[#252B33]">
                  <Phone className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#64748B] uppercase font-mono-swiss">Telephone</div>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="text-white font-bold font-mono-swiss hover:text-[#60A5FA] text-base"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2 border-t border-[#252B33]">
                  <Clock className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#64748B] uppercase font-mono-swiss">Opening Times</div>
                    <div className="text-xs text-[#CBD5E1] mt-0.5">Mon–Thu: 08:00–12:00 / 13:30–17:15</div>
                    <div className="text-xs text-[#CBD5E1]">Fri: 08:00–12:00 / 13:30–16:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

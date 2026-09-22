import React, { useState } from 'react';
import { Search, ChevronDown, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { FAQS, BUSINESS_INFO } from '../data/businessData';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
  });

  const categories = ['All', 'General', 'Bookkeeping', 'Payroll', 'Taxes'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="font-sans-swiss">
      {/* Header */}
      <section className="bg-[#F8F9FA] border-b border-[#E2E5E9] py-16 sm:py-20 relative">
        <div className="absolute inset-0 swiss-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#1D4ED8] bg-[#EBF2FE] px-3 py-1 border border-[#BFDBFE] mb-4">
            <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
            <span>KNOWLEDGE REPOSITORY // QUESTIONS &amp; ANSWERS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14171A] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
            Essential information concerning fiduciary cooperation, bookkeeping routines, Swiss payroll, and tax filings with B&amp;P Burkhard und Partner Treuhand GmbH in Bern.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 pt-6 border-t border-[#E2E5E9] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., VAT, payroll, documents)..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#CBD5E1] text-[#14171A] placeholder-[#94A3B8] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
              />
            </div>

            {/* Category Pills */}
            <div className="md:col-span-6 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono-swiss transition-colors border ${
                    selectedCategory === cat
                      ? 'bg-[#14171A] text-white border-black'
                      : 'bg-white text-[#475569] border-[#CBD5E1] hover:bg-[#F1F3F5]'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E5E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center border border-[#E2E5E9] bg-[#F8F9FA]">
              <HelpCircle className="w-8 h-8 text-[#94A3B8] mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#14171A]">No matches found</h3>
              <p className="text-sm text-[#64748B] mt-1">
                Try searching for another keyword or reset the category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-4 py-2 text-xs font-mono-swiss bg-[#14171A] text-white hover:bg-[#1D4ED8]"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#E2E5E9] border-y border-[#E2E5E9]">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div key={faq.id} className="py-5">
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex items-start justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] p-1 rounded"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <div className="pr-4">
                        <div className="text-[10px] font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-1">
                          {faq.category} // FAQ-{faq.id.replace('faq-', '')}
                        </div>
                        <span className="text-base sm:text-lg font-bold text-[#14171A] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#8B96A5] shrink-0 transition-transform duration-200 mt-1 ${
                          isOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        className="mt-3 pl-1 pr-6 text-sm text-[#475569] leading-relaxed animate-in fade-in duration-150"
                      >
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick Direct Desk Prompt */}
          <div className="mt-14 p-8 border border-[#D1D5DB] bg-[#F8F9FA] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-[#14171A]">
                Have a question not addressed here?
              </h3>
              <p className="text-sm text-[#55606E] mt-1">
                Our fiduciary specialists in Bern are ready to assist you by telephone or message.
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center px-4 py-2.5 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors border border-black shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#93C5FD]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center px-4 py-2.5 bg-white hover:bg-[#EAECEF] text-[#14171A] text-xs font-bold border border-[#CBD5E1] transition-colors"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#64748B]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

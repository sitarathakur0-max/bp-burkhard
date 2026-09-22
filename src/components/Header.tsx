import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/businessData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; code: string }[] = [
    { id: 'home', label: 'Home', code: '01' },
    { id: 'services', label: 'Services', code: '02' },
    { id: 'about', label: 'About', code: '03' },
    { id: 'faq', label: 'FAQ', code: '04' },
    { id: 'contact', label: 'Contact', code: '05' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-md border-b border-[#E2E5E9]">
      {/* Top Swiss Metadata Strip */}
      <div className="hidden lg:block bg-[#14171A] text-[#F8F9FA] text-xs font-mono-swiss py-2 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-[#94A3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mr-2 inline-block"></span>
              FIDUCIARY & ACCOUNTING • CANTON OF BERN
            </span>
            <span className="text-[#94A3B8] inline-flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#CBD5E1]" />
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
            </span>
            <span className="text-[#94A3B8] inline-flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#CBD5E1]" />
              Mon–Fri 08:00–12:00 / 13:30–17:15
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#64748B]">DIRECT LINE:</span>
            <a
              id="header-top-phone-link"
              href={BUSINESS_INFO.phoneHref}
              className="text-white hover:text-[#60A5FA] transition-colors font-medium underline-offset-4 hover:underline"
              aria-label={`Call B&P Burkhard und Partner Treuhand at ${BUSINESS_INFO.phone}`}
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Anchor */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] p-1 rounded"
            aria-label="B&P Burkhard und Partner Treuhand GmbH Homepage"
          >
            <div className="w-11 h-11 bg-[#14171A] text-white flex items-center justify-center font-bold tracking-tighter text-base border border-black shadow-xs group-hover:bg-[#1D4ED8] transition-colors">
              B&P
            </div>
            <div className="flex flex-col">
              <span className="font-sans-swiss font-extrabold text-[#14171A] text-base sm:text-lg tracking-tight leading-tight group-hover:text-[#1D4ED8] transition-colors">
                Burkhard und Partner
              </span>
              <span className="font-mono-swiss text-[11px] text-[#55606E] uppercase tracking-wider">
                Treuhand GmbH • Bern
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-colors rounded-sm flex items-center space-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                    isActive
                      ? 'text-[#1D4ED8] font-semibold bg-[#EBF2FE]'
                      : 'text-[#333E4D] hover:text-[#14171A] hover:bg-[#EAECEF]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="text-[10px] font-mono-swiss text-[#8B96A5]">
                    {item.code}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1D4ED8]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Direct Phone Link Button (Exact requirement tel:0313719977) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-cta-phone-btn"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-sans-swiss font-semibold text-white bg-[#14171A] hover:bg-[#1D4ED8] transition-all border border-black shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
              aria-label={`Direct Call: ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 mr-2 text-[#93C5FD]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              id="header-mobile-quick-call"
              href={BUSINESS_INFO.phoneHref}
              className="p-2.5 text-[#14171A] bg-[#EAECEF] hover:bg-[#DDE2E7] transition-colors border border-[#D0D7DE]"
              aria-label={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-5 h-5 text-[#1D4ED8]" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#14171A] hover:bg-[#EAECEF] transition-colors border border-[#D0D7DE]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-t border-[#E2E5E9] bg-[#F8F9FA] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="py-2 text-xs font-mono-swiss text-[#64748B] border-b border-[#E2E5E9] mb-2 flex items-center justify-between">
            <span>BERN FIDUCIARY NAVIGATION</span>
            <span>ENGELSTRASSE 13</span>
          </div>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded text-left transition-colors ${
                  isActive
                    ? 'text-[#1D4ED8] bg-[#EBF2FE] font-bold border-l-4 border-[#1D4ED8]'
                    : 'text-[#14171A] hover:bg-[#EAECEF]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono-swiss text-[#64748B]">{item.code}</span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8B96A5]" />
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-[#E2E5E9] space-y-3">
            <a
              id="mobile-menu-phone-call-btn"
              href={BUSINESS_INFO.phoneHref}
              className="w-full flex items-center justify-center py-3 px-4 bg-[#1D4ED8] text-white font-semibold text-sm rounded-none border border-[#1E40AF]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 031 371 99 77
            </a>
            <div className="text-xs text-[#55606E] font-mono-swiss text-center">
              Engestrasse 13, 3012 Bern
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

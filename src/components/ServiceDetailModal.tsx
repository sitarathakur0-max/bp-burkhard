import React from 'react';
import { X, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '../data/businessData';
import { PageId } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onNavigate,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#14171A]/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-white max-w-2xl w-full border border-[#CBD5E1] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="bg-[#14171A] text-white p-6 flex items-start justify-between border-b border-black">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-swiss text-[#93C5FD] uppercase tracking-wider mb-1">
              <span>{service.code}</span>
              <span>//</span>
              <span>FIDUCIARY MANDATE SPECIFICATION</span>
            </div>
            <h3 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#94A3B8] hover:text-white hover:bg-[#252A30] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#14171A]">
          <div>
            <h4 className="text-xs font-mono-swiss text-[#64748B] uppercase tracking-wider mb-2">
              Scope of Fiduciary Engagement
            </h4>
            <p className="text-sm sm:text-base text-[#333E4D] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="bg-[#F8F9FA] p-5 border border-[#E2E5E9]">
            <h4 className="text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-3">
              Standard Deliverables & Procedures
            </h4>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-[#252F3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] mr-2.5 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-swiss">
            <div className="p-4 border border-[#E2E5E9] bg-white">
              <span className="text-[#64748B] block uppercase">Primary Objective</span>
              <span className="font-semibold text-[#14171A] mt-1 block">{service.keyFocus}</span>
            </div>
            <div className="p-4 border border-[#E2E5E9] bg-white">
              <span className="text-[#64748B] block uppercase">Typical Client Profile</span>
              <span className="font-semibold text-[#14171A] mt-1 block">{service.clientType}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#FAFAFA] border-t border-[#E2E5E9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#14171A] text-sm font-semibold border border-[#CBD5E1] transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-[#1D4ED8]" />
            <span>Call 031 371 99 77</span>
          </a>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-[#475569] hover:text-[#14171A] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors border border-black shadow-xs"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

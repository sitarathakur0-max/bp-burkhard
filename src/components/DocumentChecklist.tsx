import React, { useState } from 'react';
import { CheckSquare, Square, RefreshCw, FileCheck, ArrowRight, Printer } from 'lucide-react';
import { PageId } from '../types';

interface DocumentChecklistProps {
  onNavigate: (page: PageId) => void;
}

type EntityType = 'gmbh-ag' | 'sole-proprietor' | 'employer';

interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
  forEntities: EntityType[];
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'c1',
    category: 'Banking & Liquidity',
    title: 'Bank & PostFinance Year-End Statements',
    description: 'Final balance confirmations as of December 31 (or fiscal closing date) with complete bank interest certificates.',
    forEntities: ['gmbh-ag', 'sole-proprietor', 'employer'],
  },
  {
    id: 'c2',
    category: 'Debtors / Receivables',
    title: 'Open Customer Invoices List (Accounts Receivable)',
    description: 'Detailed list of outstanding customer balances per year-end, including any doubtful accounts or credit notes.',
    forEntities: ['gmbh-ag', 'sole-proprietor', 'employer'],
  },
  {
    id: 'c3',
    category: 'Creditors / Payables',
    title: 'Outstanding Supplier Invoices (Accounts Payable)',
    description: 'All invoices dated on or before December 31 that remain unpaid as of the closing date, plus recurring vendor bills.',
    forEntities: ['gmbh-ag', 'sole-proprietor', 'employer'],
  },
  {
    id: 'c4',
    category: 'Value-Added Tax',
    title: 'VAT Settlement Statements (ESTV MWST)',
    description: 'All quarterly or semi-annual VAT returns submitted to the Federal Tax Administration, plus confirmation receipts.',
    forEntities: ['gmbh-ag', 'sole-proprietor', 'employer'],
  },
  {
    id: 'c5',
    category: 'Payroll & Social Security',
    title: 'Annual Payroll Summaries & Social Insurance Settled Bills',
    description: 'Lohnausweise, AHV/IV/EO wage declarations, BVG (pension) premium statements, and UVG/KTG insurance statements.',
    forEntities: ['gmbh-ag', 'employer'],
  },
  {
    id: 'c6',
    category: 'Fixed Assets & Investments',
    title: 'Asset Acquisition Invoices & Vehicle Logs',
    description: 'Purchase receipts for equipment, machinery, hardware, and furniture acquired during the fiscal year.',
    forEntities: ['gmbh-ag', 'sole-proprietor', 'employer'],
  },
  {
    id: 'c7',
    category: 'Corporate Governance',
    title: 'General Assembly Minutes & Dividend Resolutions',
    description: 'Formal shareholder resolutions approving previous year accounts and director compensation notes.',
    forEntities: ['gmbh-ag'],
  },
  {
    id: 'c8',
    category: 'Inventory & Work in Progress',
    title: 'Physical Inventory Count as of Closing Date',
    description: 'Detailed valuation list of merchandise, raw materials, or non-invoiced project hours per balance sheet date.',
    forEntities: ['gmbh-ag', 'sole-proprietor'],
  },
];

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({ onNavigate }) => {
  const [selectedEntity, setSelectedEntity] = useState<EntityType>('gmbh-ag');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const filteredItems = CHECKLIST_ITEMS.filter((item) =>
    item.forEntities.includes(selectedEntity)
  );

  const completedCount = filteredItems.filter((i) => checkedIds[i.id]).length;
  const progressPercent = Math.round((completedCount / filteredItems.length) * 100) || 0;

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    setCheckedIds({});
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white border border-[#E2E5E9] shadow-xs">
      {/* Header bar */}
      <div className="border-b border-[#E2E5E9] p-6 lg:p-8 bg-[#FAFAFA]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono-swiss text-[#1D4ED8] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 bg-[#1D4ED8]"></span>
              <span>PRACTICAL COMPLIANCE TOOL // SWISS FIDUCIARY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#14171A] tracking-tight">
              Year-End & Onboarding Document Checklist
            </h3>
            <p className="text-sm text-[#55606E] mt-1 max-w-2xl">
              Select your organization type to see the primary records and accounting vouchers required for closing or establishing a clean bookkeeping ledger in Switzerland.
            </p>
          </div>

          {/* Progress badge */}
          <div className="bg-white border border-[#D1D5DB] px-4 py-3 flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-[11px] font-mono-swiss text-[#64748B] uppercase">Preparation Status</span>
            <span className="text-2xl font-mono-swiss font-bold text-[#14171A]">
              {completedCount}/{filteredItems.length}
            </span>
            <div className="w-full bg-[#E5E7EB] h-1.5 mt-1.5 overflow-hidden">
              <div
                className="bg-[#1D4ED8] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Entity Selector Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#EAECEF]">
          <button
            onClick={() => setSelectedEntity('gmbh-ag')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-colors border ${
              selectedEntity === 'gmbh-ag'
                ? 'bg-[#14171A] text-white border-black'
                : 'bg-white text-[#333E4D] border-[#D0D7DE] hover:bg-[#F3F4F6]'
            }`}
          >
            Corporation (GmbH / AG)
          </button>
          <button
            onClick={() => setSelectedEntity('sole-proprietor')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-colors border ${
              selectedEntity === 'sole-proprietor'
                ? 'bg-[#14171A] text-white border-black'
                : 'bg-white text-[#333E4D] border-[#D0D7DE] hover:bg-[#F3F4F6]'
            }`}
          >
            Sole Proprietorship / Independent
          </button>
          <button
            onClick={() => setSelectedEntity('employer')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-colors border ${
              selectedEntity === 'employer'
                ? 'bg-[#14171A] text-white border-black'
                : 'bg-white text-[#333E4D] border-[#D0D7DE] hover:bg-[#F3F4F6]'
            }`}
          >
            Company with Staff (Payroll Focus)
          </button>
        </div>
      </div>

      {/* Checklist items list */}
      <div className="divide-y divide-[#EAECEF]">
        {filteredItems.map((item, idx) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-5 sm:p-6 flex items-start space-x-4 cursor-pointer transition-colors ${
                isChecked ? 'bg-[#F0FDF4]/60' : 'hover:bg-[#F8F9FA]'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-[#14171A] focus:outline-none shrink-0"
                aria-label={`Toggle check for ${item.title}`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#16A34A]" />
                ) : (
                  <Square className="w-5 h-5 text-[#94A3B8]" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono-swiss text-[#64748B] uppercase tracking-wider bg-[#EAECEF] px-2 py-0.5">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono-swiss text-[#94A3B8]">
                    DOC-{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4
                  className={`text-base font-bold text-[#14171A] transition-colors ${
                    isChecked ? 'line-through text-[#64748B]' : ''
                  }`}
                >
                  {item.title}
                </h4>
                <p className="text-sm text-[#55606E] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer controls & prompt */}
      <div className="p-6 bg-[#FAFAFA] border-t border-[#E2E5E9] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-xs font-mono-swiss text-[#64748B]">
          <button
            onClick={handleReset}
            className="inline-flex items-center hover:text-[#14171A] transition-colors underline"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1" />
            Reset Checklist
          </button>
          <span>•</span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center hover:text-[#14171A] transition-colors underline"
          >
            <Printer className="w-3.5 h-3.5 mr-1" />
            Print Checklist
          </button>
        </div>

        <button
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center px-4 py-2.5 bg-[#14171A] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors border border-black"
        >
          <FileCheck className="w-4 h-4 mr-2 text-[#93C5FD]" />
          <span>Submit Records for Review</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

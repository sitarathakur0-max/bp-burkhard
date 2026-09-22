export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  keyFocus: string;
  clientType: string;
}

export interface ProcessStep {
  step: string;
  code: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Bookkeeping' | 'Payroll' | 'Taxes';
  question: string;
  answer: string;
}

export interface PracticalGuideItem {
  id: string;
  topic: string;
  statutoryReference: string;
  summary: string;
  practicalAction: string;
}

export const BUSINESS_INFO = {
  name: 'B&P Burkhard und Partner Treuhand GmbH',
  shortName: 'B&P Treuhand',
  legalForm: 'GmbH (Limited Liability Company)',
  category: 'Accounting / Fiduciary',
  address: {
    street: 'Engestrasse 13',
    postalCode: '3012',
    city: 'Bern',
    canton: 'Canton of Bern',
    country: 'Switzerland',
    fullFormatted: 'Engestrasse 13, 3012 Bern, Switzerland',
  },
  phone: '031 371 99 77',
  phoneHref: 'tel:0313719977',
  email: 'office@burkhard-partner-treuhand.ch',
  officeHours: [
    { days: 'Monday – Thursday', hours: '08:00 – 12:00 / 13:30 – 17:15' },
    { days: 'Friday', hours: '08:00 – 12:00 / 13:30 – 16:30' },
    { days: 'Saturday & Sunday', hours: 'Closed' },
  ],
  locationNote: 'Situated in the Länggasse district of Bern, conveniently accessible from Bern Central Station (Bahnhof Bern).',
  primaryCtaText: 'Contact Our Bern Office',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'financial-accounting',
    code: 'SVC.01',
    title: 'Financial Accounting & Bookkeeping',
    shortDesc: 'Systematic recording of business transactions in compliance with the Swiss Code of Obligations (OR 957ff).',
    fullDesc: 'Accurate and structured financial accounting is the backbone of any commercial enterprise in Switzerland. We record and classify your operational income and expenditures, reconcile bank and post accounts, and maintain clear subsidiary ledgers for accounts receivable and accounts payable.',
    deliverables: [
      'General ledger and subsidiary ledger maintenance',
      'Bank, cash, and credit card statement reconciliations',
      'Accounts receivable (debtors) and accounts payable (creditors) tracking',
      'Periodic trial balances and management summaries',
      'Digital receipt organization and filing structured for Swiss statutory review',
    ],
    keyFocus: 'Accuracy, timely reconciliation, and Swiss OR compliance',
    clientType: 'Swiss SMEs, sole proprietorships, corporations (AG/GmbH), and freelancers',
  },
  {
    id: 'payroll-administration',
    code: 'SVC.02',
    title: 'Payroll Administration & Social Insurance',
    shortDesc: 'Reliable wage accounting, social security reporting, and salary certificate production.',
    fullDesc: 'Swiss payroll demands strict adherence to federal and cantonal social security legislation. We handle end-to-end wage calculations, net wage disbursements preparation, employee entry/exit filings, and year-end declarations to social insurance carriers.',
    deliverables: [
      'Monthly wage computation and generation of employee pay slips',
      'Settlement and reporting for AHV/IV/EO, ALV, BVG (pension), and UVG/KTG (accident/illness)',
      'Cantonal withholding tax (Quellensteuer) declarations and settlements',
      'Annual salary certificates (Lohnausweise) for all personnel',
      'Support with social insurance registration and audit preparation',
    ],
    keyFocus: 'Statutory compliance with Swiss social security and tax withholding standards',
    clientType: 'Companies employing staff in Switzerland across various industries',
  },
  {
    id: 'annual-financial-statements',
    code: 'SVC.03',
    title: 'Year-End Financial Statements & Closing',
    shortDesc: 'Preparation of balance sheets, income statements, and statutory notes according to Swiss commercial law.',
    fullDesc: 'The fiscal year-end closing requires rigorous reconciliation, appropriate valuation of assets and liabilities, accruals and deferrals (Transitorische Passiven/Aktiven), and formal presentation suited for shareholders, tax authorities, and banking partners.',
    deliverables: [
      'Balance sheet (Bilanz) and Income Statement (Erfolgsrechnung)',
      'Statutory Annex/Notes (Anhang) in accordance with Swiss OR',
      'Appropriation of available earnings proposals for the General Assembly',
      'Depreciation schedules and year-end accrual adjustments',
      'Preparation of documentation for statutory auditors where required',
    ],
    keyFocus: 'Prudent valuation, transparency, and legal certainty under Swiss company law',
    clientType: 'GmbH, AG, partnerships, and sole enterprises preparing annual closings',
  },
  {
    id: 'vat-compliance',
    code: 'SVC.04',
    title: 'Value-Added Tax (VAT / MWST) Management',
    shortDesc: 'Quarterly or semi-annual VAT reporting, input tax reconciliation, and Swiss Federal Tax Administration compliance.',
    fullDesc: 'Swiss Value-Added Tax requires precise input tax deduction verification and revenue recognition. We handle ongoing VAT accounting according to effective or net tax rates (Saldomethode) and ensure timely electronic submissions to the Federal Tax Administration (ESTV/FTA).',
    deliverables: [
      'Preparation and electronic submission of quarterly/semi-annual VAT returns',
      'Input tax (Vorsteuer) deduction checks and justification documents',
      'Annual VAT reconciliation against audited year-end financial statements',
      'VAT registration or deregistration with the Federal Tax Administration',
      'Support during official VAT audits by the Swiss Federal Tax Administration',
    ],
    keyFocus: 'Correct tax category application, punctual filing, and full reconciliation',
    clientType: 'VAT-liable entities and companies approaching the statutory revenue threshold',
  },
  {
    id: 'tax-declarations',
    code: 'SVC.05',
    title: 'Corporate & Individual Tax Declarations',
    shortDesc: 'Thorough preparation of annual tax returns for legal entities and private business owners.',
    fullDesc: 'Corporate tax in Switzerland is levied across federal, cantonal, and municipal levels. We prepare the complete tax return for your enterprise and its affiliated stakeholders, properly integrating the approved financial statements and ensuring all allowable business deductions are reflected.',
    deliverables: [
      'Corporate income and capital tax declarations for legal entities',
      'Tax returns for self-employed individuals and business proprietors',
      'Review of tax assessments and definitive tax calculations from the tax authority',
      'Handling routine correspondence and extension requests with the tax administration',
      'Intercantonal tax allocation calculations for multi-location enterprises',
    ],
    keyFocus: 'Accuracy, utilization of legitimate commercial allowances, and deadline control',
    clientType: 'Corporations, partnerships, and proprietors liable for Swiss taxation',
  },
  {
    id: 'fiduciary-administration',
    code: 'SVC.06',
    title: 'Fiduciary & Corporate Administration',
    shortDesc: 'Practical operational support for commercial registrations, document management, and governance filings.',
    fullDesc: 'Maintaining corporate good standing requires ongoing administrative vigilance. We assist with commercial register notifications, corporate record maintenance, and administrative communication with cantonal authorities and institutions.',
    deliverables: [
      'Commercial register (Handelsregister) modifications and notifications',
      'Preparation of formal minutes and resolutions for general meetings',
      'Administrative coordination with financial institutions and public registries',
      'Organized document custody according to Swiss archival obligations',
      'General fiduciary liaison services for management and founders',
    ],
    keyFocus: 'Administrative precision, organizational structure, and legal formality',
    clientType: 'Swiss legal entities seeking orderly corporate administration',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    code: 'INIT.01',
    title: 'Initial Consultation & Scope Clarification',
    description: 'We meet to discuss your company structure, transaction volume, software setup, and specific accounting requirements in Bern and across Switzerland.',
    deliverable: 'Defined fiduciary scope of work & tailored cooperation framework',
  },
  {
    step: '02',
    code: 'ONBOARD.02',
    title: 'Document Transfer & Chart of Accounts Setup',
    description: 'We align on receipt handovers (digital or physical), configure your chart of accounts according to the Swiss SME standard (KMU-Kontenrahmen), and establish workflows.',
    deliverable: 'Operational accounting setup & initial document review',
  },
  {
    step: '03',
    code: 'EXEC.03',
    title: 'Periodic Bookkeeping & Reconciliations',
    description: 'Ongoing recording of operational entries, vendor payments verification, bank account reconciliations, and regular processing of payroll and VAT schedules.',
    deliverable: 'Balanced journals, verified ledgers, and reconciled accounts',
  },
  {
    step: '04',
    code: 'REVIEW.04',
    title: 'Interim Overviews & Clarity',
    description: 'Providing interim financial figures and structured trial balances so you always retain visibility over revenue, expenses, and operational margins.',
    deliverable: 'Interim income statements & liquidity indicators',
  },
  {
    step: '05',
    code: 'CLOSE.05',
    title: 'Year-End Closing & Tax Filing',
    description: 'Completion of statutory year-end financial statements (balance sheet, P&L, notes), followed by tax return preparation and submission to authorities.',
    deliverable: 'Final audited-ready financial statements & tax declarations',
  },
];

export const PRACTICAL_GUIDELINES: PracticalGuideItem[] = [
  {
    id: 'retention-rules',
    topic: '10-Year Statutory Document Retention',
    statutoryReference: 'Swiss Code of Obligations (OR 958f)',
    summary: 'All business books, accounting records, incoming and outgoing invoices, bank statements, and business correspondence must be retained systematically for at least 10 years in Switzerland.',
    practicalAction: 'Ensure electronic backups adhere to unalterable storage formats and physical receipts remain legible for the entire statutory duration.',
  },
  {
    id: 'vat-threshold',
    topic: 'Swiss VAT Registration Obligations',
    statutoryReference: 'Federal Act on Value Added Tax (MWSTG Art. 10)',
    summary: 'Enterprises achieving an annual worldwide turnover of CHF 100,000 or more from taxable supplies are mandatory subjects of Swiss VAT liability and must register with the FTA.',
    practicalAction: 'Monitor gross revenues quarterly to trigger voluntary or mandatory registration proactively before penalty liabilities arise.',
  },
  {
    id: 'social-security',
    topic: 'Swiss Payroll & 3-Pillar Contributions',
    statutoryReference: 'Federal Social Security Legislation (AHVG / BVG / UVG)',
    summary: 'Employers must deduct employee contributions (AHV, IV, EO, ALV, BVG, UVG) and remit them along with the employer matching shares to the assigned compensation funds.',
    practicalAction: 'Maintain current employee master data, update cantonal withholding tax tables annually, and balance payroll registers monthly.',
  },
  {
    id: 'proper-bookkeeping',
    topic: 'Principles of Proper Accounting',
    statutoryReference: 'Swiss Code of Obligations (OR 957a)',
    summary: 'Accounting must be complete, truthful, systematically ordered, traceable, and backed by authentic receipts. "No booking without a voucher" is the foundational rule.',
    practicalAction: 'Attach supporting commercial documentation to every cash, bank, or card movement before posting the transaction.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is B&P Burkhard und Partner Treuhand GmbH located in Bern?',
    answer: 'Our office is located at Engestrasse 13, 3012 Bern, in the Länggasse district. We are easily reachable by public transport from Bern Main Station (Bahnhof Bern) or by car.',
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How do we begin working together?',
    answer: 'You can contact us by phone at 031 371 99 77 or through our website contact form. We will arrange an initial conversation to discuss your organizational structure, current accounting procedures, and how our fiduciary team can best support your operational needs.',
  },
  {
    id: 'faq-3',
    category: 'Bookkeeping',
    question: 'Can we deliver documents digitally or do you accept physical binders?',
    answer: 'We accommodate both working methods. Clients can transmit receipts, invoices, and bank statements digitally via secure cloud transfer or email, or submit organized physical folders for periodic processing.',
  },
  {
    id: 'faq-4',
    category: 'Payroll',
    question: 'What information is needed to initiate monthly payroll administration?',
    answer: 'We require employee contracts, personal identification data, AHV numbers, civil status/children details for family allowances, and specific pension fund (BVG) affiliations. Each month you simply communicate gross adjustments, hours, or bonuses.',
  },
  {
    id: 'faq-5',
    category: 'Taxes',
    question: 'How do you handle corporate tax returns for Bern-based entities?',
    answer: 'Once the fiscal year-end financial statements (balance sheet and profit & loss) are finalized and approved, we complete the cantonal and federal tax forms, integrate the tax balance sheet, and calculate appropriate provisions before filing.',
  },
  {
    id: 'faq-6',
    category: 'Bookkeeping',
    question: 'What is the standard chart of accounts used for Swiss businesses?',
    answer: 'We typically structure client accounts using the standard Swiss SME Chart of Accounts (Schweizer KMU-Kontenrahmen according to Walter Sterchi), which aligns smoothly with Swiss commercial law (OR 957ff) and simplifies reporting.',
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'Why should a small or mid-sized enterprise outsource fiduciary services?',
    answer: 'Outsourcing ensures that your accounting, payroll, and tax filings remain strictly compliant with current Swiss legal standards without the overhead of maintaining an internal accounting department. It prevents statutory filing delays and allows managers to focus on business growth.',
  },
  {
    id: 'faq-8',
    category: 'Taxes',
    question: 'What are the deadlines for submitting VAT returns in Switzerland?',
    answer: 'For companies using the effective method, quarterly VAT statements and payments are due within 60 days following the end of each calendar quarter. Semi-annual filers using the net tax rate method (Saldomethode) submit twice per year.',
  },
];

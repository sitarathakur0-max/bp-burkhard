export type PageId = 'home' | 'services' | 'about' | 'faq' | 'contact';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  message: string;
  privacyAccepted: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  message?: string;
  privacyAccepted?: string;
}

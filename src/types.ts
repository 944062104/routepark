/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  route: string;
  startLoc: string;
  endLoc: string;
  patientCondition: string;
  painPoint: string;
  strategy: string;
  details: {
    vehicle: string;
    staff: string;
    equipment: string;
    price: number;
    originalPrice: number;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  equipment: string[];
  ctaText: string;
}

export interface AuditCriteria {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  details: string[];
}

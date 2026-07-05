// Centralised site content. Icons are referenced by key (see src/icons.jsx).

export const ASSETS = {
  logo: '/LOGOV.png',
  video: '/home.mp4',
  md: '/managing-director.jpg',   // rename "managing director.jpg" -> "managing-director.jpg"
  experience: '/experience.jpg',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export const SUPPORT = [
  { icon: 'building', title: 'Municipalities', text: 'Turnaround, recovery planning, audit outcome improvement and MFMA-aligned financial management.' },
  { icon: 'gov', title: 'Government entities', text: 'Governance, compliance and control enhancement for public-sector institutions and agencies.' },
  { icon: 'bank', title: 'Financial institutions & businesses', text: 'Corporate advisory, accounting, taxation and data-driven insight for private-sector clients.' },
]

export const STEPS = [
  ['Diagnostic Assessment', 'In-depth review of systems, controls and compliance.'],
  ['Strategy Co-Creation', 'Collaborative development of actionable improvement plans.'],
  ['Implementation Support', 'Hands-on support through execution and monitoring.'],
  ['Capacity Building', 'Training and mentoring to secure long-term outcomes.'],
]

export const ABOUT_VALUES = [
  'Practical financial advisory',
  'Stronger institutions',
  'Governance and compliance',
  'Measurable outcomes',
  'Long-term resilience',
]

export const STRENGTHS = [
  ['Public finance & MFMA', 'Deep municipal and public-sector financial management expertise.'],
  ['Corporate banking', 'Trade finance, payments, credit and operational risk experience.'],
  ['Accounting & taxation', 'Full-cycle accounting, reporting and SARS-aligned tax compliance.'],
  ['Recovery & analytics', 'Financial recovery planning supported by data-driven insight.'],
]

export const CLIENTS = [
  'Municipalities', 'Government entities', 'Financial institutions',
  'Private companies', 'Professional entities', 'Non-profit organizations',
]

export const SERVICES = [
  {
    icon: 'calc', title: 'Accounting, Taxation & Secretarial Services',
    items: ['Full-cycle accounting', 'Financial reporting', 'Tax compliance and planning', 'Income Tax, VAT, PAYE', 'Company secretarial services', 'Statutory compliance', 'Payroll administration', 'SARS submissions', 'Financial statement preparation', 'Independent reviews', 'XBRL reporting', 'CIPC annual returns'],
  },
  {
    icon: 'recover', title: 'Financial Recovery & Turnaround',
    items: ['Financial recovery plan development', 'Implementation support', 'Audit readiness & clean audit support', 'MFMA, PFMA and GRAP compliance advisory', 'Financial governance and controls enhancement', 'Finance team training & capacity building', 'SOPs and procedure manual development', 'Organogram alignment & role clarification', 'Performance management systems', 'Business rescue'],
  },
  {
    icon: 'chart', title: 'Revenue & Budget Management Optimization',
    items: ['Revenue management strategy development', 'Budget credibility and funding alignment', 'Revenue completeness and compliance reviews', 'Tariff and bylaw policy alignment'],
  },
  {
    icon: 'data', title: 'Data-Driven Financial Insights',
    items: ['Financial forecasting', 'Financial modelling', 'Revenue prediction', 'Leakage detection', 'Process automation', 'Efficiency analysis', 'Custom dashboards', 'Reporting solutions'],
  },
  {
    icon: 'strategy', title: 'Strategic Leadership & Project Management',
    items: ['Corporate governance optimization', 'Strategic planning facilitation', 'Business process re-engineering', 'Stakeholder engagement', 'Council advisory', 'Program Management Office support', 'PRINCE2-based project management'],
  },
]

export const WHY = [
  { icon: 'shield', text: 'Proven track record improving audit outcomes and financial health' },
  { icon: 'building', text: 'Public and private sector insight' },
  { icon: 'users', text: 'Qualified team: chartered accountants, data scientists, forensic investigators and analysts' },
  { icon: 'recover', text: 'End-to-end support, from diagnosis to implementation' },
  { icon: 'check', text: 'Comprehensive, integrated service offering' },
]

export const APPROACH = ['Diagnostic Assessment', 'Strategy Co-Creation', 'Implementation Support', 'Capacity Building', 'Review & Refine']

export const MD = {
  name: 'George Masengu',
  role: 'Senior Finance & Institutional Turnaround Strategist',
  bio: 'A results-driven Managing Director with over 15 years of leadership experience in public finance, municipal turnaround strategies, corporate banking, financial recovery, audit-outcome improvement, and revenue and budget management. He combines finance qualifications with machine-learning knowledge and a strong command of MFMA, PFMA, GRAP and IFRS compliance, banking, risk management and stakeholder leadership.',
  tags: ['Public finance', 'Municipal turnaround', 'Corporate banking', 'Financial recovery', 'Audit improvement', 'Revenue & budget', 'MFMA · PFMA · GRAP · IFRS', 'Machine learning'],
  highlights: [
    'Led financial turnaround projects for companies and municipalities',
    'Helped distressed institutions become financially sustainable',
    'Associate Partner at Ntiyiso Business Consulting',
    'Worked on National Treasury GTAC programs',
    'Managed large advisory teams across provinces',
    'Experience in banking, trade finance, payments and operational risk',
    'Roles at the Development Bank of Southern Africa, Stanbic Bank and Renaissance Merchant Bank',
  ],
  education: [
    'MSc Information Science — Machine Learning',
    'Master of Business Leadership, UNISA SBL',
    'Fellow of ACCA, UK',
    'BSc Hons in Applied Accounting, Oxford Brookes University, UK',
    'Advanced Diploma in Banking, Institute of Bankers of Zimbabwe',
  ],
}

export const TEAM_MEMBERS = [
  {
    name: 'Davison Dyiwa',
    role: 'Operations Director',
    summary: 'Davison Dyiwa is a seasoned assurance and public-finance professional with more than 28 years of experience spanning internal audit, IT audit, forensic investigation, enterprise risk management, corporate governance and municipal finance reform. His career deliberately bridges the private, quasi-government and public sectors.',
    details: [
      'As a Municipal Advisor and MFIP Technical Advisor to the Government Technical Advisory Centre (GTAC), an agency of the National Treasury, he supports developing and distressed municipalities across budgeting, revenue and supply-chain management, financial reporting, and the development and monitoring of statutory Financial Recovery Plans under Chapter 13 of the MFMA.',
      'A Certified Internal Auditor, Certified Information Systems Auditor, Certified Fraud Examiner and Chartered Secretary, Davison has served audit committees in almost every capacity: member, secretary, internal audit manager, external auditor and invitee across mining, telecommunications, broadcasting, print media, agriculture, financial services and local government.',
    ],
    quote: '*A generalist with a keen eye for figures and detail, coupled with strong IT-audit skills; hardworking and results-oriented.*',
  },
]

export const CONTACT = {
  email: 'info@viableoption.co.za',
  landline: '+27 11 764 1314',
  cell: '+27 71 872 2865',
  office: 'Roodeport, Johannesburg',
  hours: 'Monday to Friday, 08:00–17:00 SAST',
}

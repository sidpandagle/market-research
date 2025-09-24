import { ReportCategory } from '@/lib/types/reports'

export const reportCategories: ReportCategory[] = [
  {
    id: 'all',
    name: 'All Categories',
    description: '',
    icon: '',
    color: 'blue'
  },
  // Technology
  {
    id: 'technology',
    name: 'Technology',
    description: 'Technology sector research including software, hardware, and emerging tech',
    icon: 'Laptop',
    color: 'blue'
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'AI, machine learning, and automation technologies',
    parentId: 'technology'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Information security, data protection, and cyber defense',
    parentId: 'technology'
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Cloud services, infrastructure, and platforms',
    parentId: 'technology'
  },
  {
    id: 'fintech',
    name: 'FinTech',
    description: 'Financial technology and digital banking solutions',
    parentId: 'technology'
  },

  // Healthcare
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Healthcare industry including pharmaceuticals, medical devices, and digital health',
    icon: 'Heart',
    color: 'red'
  },
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    description: 'Drug development, pharmaceutical markets, and therapeutics',
    parentId: 'healthcare'
  },
  {
    id: 'medical-devices',
    name: 'Medical Devices',
    description: 'Medical equipment, diagnostic tools, and surgical devices',
    parentId: 'healthcare'
  },
  {
    id: 'digital-health',
    name: 'Digital Health',
    description: 'Telemedicine, health apps, and digital therapeutics',
    parentId: 'healthcare'
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    description: 'Biotech research, gene therapy, and personalized medicine',
    parentId: 'healthcare'
  },

  // Energy
  {
    id: 'energy',
    name: 'Energy',
    description: 'Energy sector including renewable energy, oil & gas, and utilities',
    icon: 'Zap',
    color: 'yellow'
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    description: 'Solar, wind, hydroelectric, and other clean energy sources',
    parentId: 'energy'
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Petroleum industry, exploration, and refining',
    parentId: 'energy'
  },
  {
    id: 'energy-storage',
    name: 'Energy Storage',
    description: 'Battery technology, grid storage, and energy management',
    parentId: 'energy'
  },

  // Consumer Goods
  {
    id: 'consumer-goods',
    name: 'Consumer Goods',
    description: 'Consumer products, retail, and e-commerce markets',
    icon: 'ShoppingCart',
    color: 'green'
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description: 'Online retail, marketplace platforms, and digital commerce',
    parentId: 'consumer-goods'
  },
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Food industry, beverage markets, and nutrition trends',
    parentId: 'consumer-goods'
  },
  {
    id: 'fashion-apparel',
    name: 'Fashion & Apparel',
    description: 'Clothing, footwear, and fashion retail markets',
    parentId: 'consumer-goods'
  },

  // Automotive
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Automotive industry including electric vehicles and autonomous driving',
    icon: 'Car',
    color: 'gray'
  },
  {
    id: 'electric-vehicles',
    name: 'Electric Vehicles',
    description: 'EV market, charging infrastructure, and battery technology',
    parentId: 'automotive'
  },
  {
    id: 'autonomous-vehicles',
    name: 'Autonomous Vehicles',
    description: 'Self-driving cars, ADAS, and connected vehicle technology',
    parentId: 'automotive'
  },

  // Financial Services
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Banking, insurance, and financial markets',
    icon: 'DollarSign',
    color: 'emerald'
  },
  {
    id: 'banking',
    name: 'Banking',
    description: 'Traditional banking, digital banking, and payment systems',
    parentId: 'financial-services'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Insurance markets, insurtech, and risk management',
    parentId: 'financial-services'
  },
  {
    id: 'investment',
    name: 'Investment',
    description: 'Asset management, wealth management, and capital markets',
    parentId: 'financial-services'
  },

  // Real Estate
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property markets, construction, and PropTech',
    icon: 'Building',
    color: 'orange'
  },
  {
    id: 'proptech',
    name: 'PropTech',
    description: 'Real estate technology and digital property solutions',
    parentId: 'real-estate'
  },
  {
    id: 'commercial-real-estate',
    name: 'Commercial Real Estate',
    description: 'Office, retail, and industrial property markets',
    parentId: 'real-estate'
  },

  // Manufacturing
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industrial manufacturing, automation, and supply chain',
    icon: 'Factory',
    color: 'purple'
  },
  {
    id: 'industrial-automation',
    name: 'Industrial Automation',
    description: 'Factory automation, robotics, and Industry 4.0',
    parentId: 'manufacturing'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    description: 'Logistics, transportation, and supply chain management',
    parentId: 'manufacturing'
  }
]

export const getCategoryById = (id: string): ReportCategory | undefined => {
  return reportCategories.find(category => category.id === id)
}

export const getSubcategories = (parentId: string): ReportCategory[] => {
  return reportCategories.filter(category => category.parentId === parentId)
}

export const getMainCategories = (): ReportCategory[] => {
  return reportCategories.filter(category => !category.parentId)
}
export interface CaseStudy {
  id: string;
  number: string;
  category: string;
  year: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  keyResult: string;
  keyMetric: {
    label: string;
    value: string;
    sublabel: string;
  };
  problem: string;
  datasetInfo: {
    records: string;
    columns: string;
    timePeriod: string;
    sources: string;
  };
  pipeline: {
    stage: string;
    label: string;
    description: string;
  }[];
  analysisHighlights: {
    title: string;
    detail: string;
  }[];
  businessImpact: {
    metric: string;
    impact: string;
    description: string;
  }[];
  demonstrationType: "revenue" | "churn" | "dashboard" | "market";
}

export const PROJECTS: CaseStudy[] = [
  {
    id: "ecommerce-sales-analysis",
    number: "01",
    category: "REVENUE OPTIMIZATION",
    year: "2024",
    title: "E-Commerce Revenue & Retention Analysis",
    tagline: "Uncovering cross-sell friction and latent cohort growth opportunities",
    description:
      "A deep dive exploratory analysis of 450,000+ transactional records to identify regional sales drops, product mix cannibalization, and cohort retention decay.",
    tools: ["SQL", "PYTHON", "POWER BI", "PANDAS"],
    keyResult: "+24.8% REVENUE OPPORTUNITY IDENTIFIED",
    keyMetric: {
      label: "REVENUE EXPANSION",
      value: "+24.8%",
      sublabel: "Targeted repeat-purchase cohort intervention",
    },
    problem:
      "A fast-growing multi-region e-commerce brand experienced a 14% drop in second-purchase conversion without an obvious cause in top-level marketing metrics. Leadership needed to locate exactly where customer value was leaking.",
    datasetInfo: {
      records: "452,190 Transactions",
      columns: "24 Attributes (Order, Product, Customer, Region)",
      timePeriod: "2022 Q1 – 2024 Q3",
      sources: "PostgreSQL Database & Stripe Webhook logs",
    },
    pipeline: [
      {
        stage: "01 / INGESTION",
        label: "Raw SQL Extraction",
        description: "Extracted transactional logs, customer metadata, and fulfillment timestamps.",
      },
      {
        stage: "02 / CLEANING",
        label: "Anomaly & Missing Handling",
        description: "Imputed missing delivery timestamps, cleansed negative quantities, and normalized ISO currencies.",
      },
      {
        stage: "03 / EXPLORATION",
        label: "Cohort Decay Modeling",
        description: "Mapped 30-day, 60-day, and 90-day repeat purchase retention curves across 6 distinct geo-regions.",
      },
      {
        stage: "04 / MODELING",
        label: "RFM Segmentation",
        description: "Segmented buyers into Champions, Potential Loyalists, At Risk, and Dormant groups.",
      },
      {
        stage: "05 / VISUALIZATION",
        label: "Interactive Power BI BI Suite",
        description: "Designed executive drill-downs for dynamic pricing elasticities and product bundling.",
      },
    ],
    analysisHighlights: [
      {
        title: "North America Cohort Dropoff",
        detail: "Found 62% of churn occurred between day 14 and 28 post-first order due to delayed post-purchase communication.",
      },
      {
        title: "Product Basket Cannibalization",
        detail: "Identified that discounting SKU-B was decreasing high-margin SKU-A cross-purchases by 31%.",
      },
      {
        title: "High-Value Micro-Segments",
        detail: "Top 8% of customers drove 44% of total Gross Merchandise Value, with 3.4x higher average lifetime value.",
      },
    ],
    businessImpact: [
      {
        metric: "+$1.42M",
        impact: "Annualized Run-Rate",
        description: "Projected incremental revenue from restructured reactivation automated campaigns.",
      },
      {
        metric: "19.2%",
        impact: "Repeat Rate Increase",
        description: "Lift in 60-day repeat purchase conversions after testing bundle recommendations.",
      },
      {
        metric: "-35 hrs",
        impact: "Monthly Reporting Overhead",
        description: "Automated manual spreadsheet consolidation into self-updating SQL views.",
      },
    ],
    demonstrationType: "revenue",
  },
  {
    id: "customer-churn-analysis",
    number: "02",
    category: "PREDICTIVE RETENTION",
    year: "2024",
    title: "Customer Churn & Risk Segmentation",
    tagline: "Early-warning detection system for high-value subscription accounts",
    description:
      "Predictive behavioral segmentation isolating key churn drivers across usage frequency, support ticket volume, and payment friction.",
    tools: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "EXCEL"],
    keyResult: "18.3% HIGH-RISK CUSTOMER SEGMENT",
    keyMetric: {
      label: "CHURN RISK ISOLATED",
      value: "18.3%",
      sublabel: "Identified before 60-day renewal cycle",
    },
    problem:
      "A B2B SaaS platform was losing enterprise accounts at month 6 without prior negative feedback. Customer success teams were purely reactive, learning about cancellations only after tickets were filed.",
    datasetInfo: {
      records: "128,400 Account Activity Logs",
      columns: "32 Telemetry & Billing Features",
      timePeriod: "24-Month Rolling Window",
      sources: "Snowflake Data Warehouse & Zendesk API",
    },
    pipeline: [
      {
        stage: "01 / TELEMETRY",
        label: "Feature Engineering",
        description: "Constructed rolling 7-day vs 30-day activity ratios and support sentiment indices.",
      },
      {
        stage: "02 / DATA AUDIT",
        label: "Class Imbalance Balancing",
        description: "Managed high non-churn majority class using stratified K-fold cross-validation.",
      },
      {
        stage: "03 / FACTOR ANALYSIS",
        label: "Correlation Matrix & SHAP",
        description: "Isolated top churn drivers: seat under-utilization (<40%) and response latency >8 hours.",
      },
      {
        stage: "04 / CLUSTERING",
        label: "K-Means Customer Tiers",
        description: "Grouped customers into 4 action-oriented health profiles for targeted CSM interventions.",
      },
      {
        stage: "05 / DEPLOYMENT",
        label: "Risk Scoring Workbook",
        description: "Exported weekly auto-scoring workbook with priority alerting for enterprise reps.",
      },
    ],
    analysisHighlights: [
      {
        title: "The 40% Adoption Threshold",
        detail: "Accounts utilizing fewer than 40% of provisioned seats by Day 45 had an 82% probability of cancelling at Year 1.",
      },
      {
        title: "Support Latency Multiplier",
        detail: "A single ticket resolution exceeding 24 hours multiplied downstream churn hazard by 2.4x for mid-market tiers.",
      },
    ],
    businessImpact: [
      {
        metric: "-22.5%",
        impact: "Voluntary Churn Reduction",
        description: "Achieved across piloted customer cohorts using proactive 45-day onboarding check-ins.",
      },
      {
        metric: "$480K",
        impact: "Arr Saved In Q3",
        description: "Prevented churn on 14 Tier-1 enterprise accounts flagged by the early-warning model.",
      },
      {
        metric: "89.4%",
        impact: "CSM Engagement Accuracy",
        description: "Outreach precision targeting accounts genuinely in distress rather than broad blasting.",
      },
    ],
    demonstrationType: "churn",
  },
  {
    id: "business-performance-dashboard",
    number: "03",
    category: "EXECUTIVE BI",
    year: "2023",
    title: "Executive Business Performance Suite",
    tagline: "Unifying unit economics, CAC payback, and operating margins in one view",
    description:
      "A consolidated financial and operational dashboard delivering real-time visibility into blended CAC, LTV/CAC ratios, and departmental burn rates.",
    tools: ["POWER BI", "SQL", "DAX", "EXCEL"],
    keyResult: "REAL-TIME CAC & LTV MONITORING",
    keyMetric: {
      label: "DATA CONSOLIDATION",
      value: "4 SOURCES → 1",
      sublabel: "Zero manual weekly reporting lag",
    },
    problem:
      "Executive leadership spent 12 hours every Monday manually cross-referencing Salesforce, QuickBooks, Google Ads, and production databases to calculate basic unit economics.",
    datasetInfo: {
      records: "1.2M Financial & CRM Rows",
      columns: "45 Fact & Dimension Attributes",
      timePeriod: "3-Year Multi-Entity History",
      sources: "HubSpot CRM, Xero, Stripe & BigQuery",
    },
    pipeline: [
      {
        stage: "01 / ETL",
        label: "Dimensional Data Modeling",
        description: "Built star-schema data warehouse with unified Date, Entity, and Product dimensions.",
      },
      {
        stage: "02 / FORMULAS",
        label: "Advanced DAX Calculations",
        description: "Engineered complex time-intelligence DAX measures for blended payback and rolling GMV.",
      },
      {
        stage: "03 / UX DESIGN",
        label: "Executive Interface Design",
        description: "Constructed high-contrast, hierarchy-focused executive dashboard layouts.",
      },
      {
        stage: "04 / GOVERNANCE",
        label: "Row-Level Security (RLS)",
        description: "Implemented department-based access restrictions for regional directors and C-suite.",
      },
    ],
    analysisHighlights: [
      {
        title: "Channel-Specific Payback Discrepancy",
        detail: "Uncovered that Paid Search had a 4.2-month payback while Paid Social was dragging at 14.8 months.",
      },
      {
        title: "True Blended Margins",
        detail: "Factored shipping surcharges and merchant fees to expose negative contribution margins on 3 flagship SKUs.",
      },
    ],
    businessImpact: [
      {
        metric: "100%",
        impact: "Automated Reporting",
        description: "Eliminated manual spreadsheet updates; leadership gets 7:00 AM daily automated insights.",
      },
      {
        metric: "+$210K",
        impact: "Marketing Reallocation",
        description: "Reallocated underperforming social spend to high-efficiency search keywords.",
      },
    ],
    demonstrationType: "dashboard",
  },
  {
    id: "market-product-insights",
    number: "04",
    category: "MARKET BASKET & PRICING",
    year: "2023",
    title: "Market & Product Affinity Insights",
    tagline: "Association rule mining and price elasticity modeling for retail catalogs",
    description:
      "Applied Apriori association algorithms and price elasticity modeling across 850 SKUs to optimize bundle pricing and merchandising placement.",
    tools: ["PYTHON", "SQL", "TABLEAU", "NUMPY"],
    keyResult: "+14.2% AOV BOOST POTENTIAL",
    keyMetric: {
      label: "AVG ORDER VALUE",
      value: "+14.2%",
      sublabel: "Through algorithmic cross-category bundling",
    },
    problem:
      "A retail brand with over 800 products was guessing bundle pairings and running flat percentage discounts that eroded gross margins without driving basket expansion.",
    datasetInfo: {
      records: "680,000 Order Items",
      columns: "18 SKU & Promotion Attributes",
      timePeriod: "18 Months Historical",
      sources: "Shopify Plus & Inventory ERP",
    },
    pipeline: [
      {
        stage: "01 / MINING",
        label: "Market Basket Mining",
        description: "Executed Apriori algorithm calculating Support, Confidence, and Lift across all item pairs.",
      },
      {
        stage: "02 / ELASTICITY",
        label: "Price Sensitivity Modeling",
        description: "Estimated log-log price elasticity coefficients across high-volume categories.",
      },
      {
        stage: "03 / SIMULATION",
        label: "Bundle Margin Simulator",
        description: "Simulated gross profit outcomes across 50+ proposed package configurations.",
      },
      {
        stage: "04 / DELIVERY",
        label: "Interactive Tableau Portal",
        description: "Delivered interactive affinity maps for the merchandising and email marketing teams.",
      },
    ],
    analysisHighlights: [
      {
        title: "High-Lift Unintuitive Pairings",
        detail: "Found a 4.8x Lift between specialized coffee equipment and artisan pantry staples, creating a new hero bundle.",
      },
      {
        title: "Inelastic Core Accessories",
        detail: "Discovered complementary accessory products had near-zero price sensitivity when bundled with flagship gear.",
      },
    ],
    businessImpact: [
      {
        metric: "+$32.50",
        impact: "Basket Size Expansion",
        description: "Average order value rose from $112 to $144.50 on recommended bundle combinations.",
      },
      {
        metric: "3.2x",
        impact: "Checkout Add-on Rate",
        description: "Higher one-click add-to-cart conversion on product detail page recommendation widgets.",
      },
    ],
    demonstrationType: "market",
  },
];


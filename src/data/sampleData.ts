export interface RevenueDataPoint {
  month: string;
  baseline: number;
  optimized: number;
  orders: number;
}

export const REVENUE_DATA: RevenueDataPoint[] = [
  { month: "Jan", baseline: 64200, optimized: 64200, orders: 1240 },
  { month: "Feb", baseline: 68100, optimized: 69400, orders: 1310 },
  { month: "Mar", baseline: 72400, optimized: 76800, orders: 1450 },
  { month: "Apr", baseline: 71000, optimized: 79200, orders: 1480 },
  { month: "May", baseline: 78500, optimized: 91400, orders: 1720 },
  { month: "Jun", baseline: 84200, optimized: 102600, orders: 1940 },
  { month: "Jul", baseline: 89000, optimized: 112400, orders: 2110 },
  { month: "Aug", baseline: 92400, optimized: 119800, orders: 2260 },
  { month: "Sep", baseline: 96100, optimized: 128500, orders: 2410 },
  { month: "Oct", baseline: 101200, optimized: 137900, orders: 2590 },
  { month: "Nov", baseline: 115400, optimized: 158200, orders: 2980 },
  { month: "Dec", baseline: 124800, optimized: 174500, orders: 3290 },
];

export interface CustomerScatterPoint {
  id: string;
  usageScore: number;
  supportTickets: number;
  arrValue: number;
  cluster: "high_risk" | "healthy" | "power_user" | "moderate";
}

export const CUSTOMER_SCATTER_DATA: CustomerScatterPoint[] = [
  { id: "C-101", usageScore: 18, supportTickets: 9, arrValue: 48, cluster: "high_risk" },
  { id: "C-102", usageScore: 24, supportTickets: 8, arrValue: 36, cluster: "high_risk" },
  { id: "C-103", usageScore: 12, supportTickets: 11, arrValue: 62, cluster: "high_risk" },
  { id: "C-104", usageScore: 29, supportTickets: 7, arrValue: 28, cluster: "high_risk" },
  { id: "C-105", usageScore: 22, supportTickets: 10, arrValue: 54, cluster: "high_risk" },
  { id: "C-106", usageScore: 15, supportTickets: 8, arrValue: 42, cluster: "high_risk" },
  { id: "C-201", usageScore: 48, supportTickets: 4, arrValue: 32, cluster: "moderate" },
  { id: "C-202", usageScore: 54, supportTickets: 5, arrValue: 38, cluster: "moderate" },
  { id: "C-203", usageScore: 42, primary: 3, supportTickets: 3, arrValue: 26, cluster: "moderate" } as any,
  { id: "C-204", usageScore: 58, supportTickets: 4, arrValue: 45, cluster: "moderate" },
  { id: "C-205", usageScore: 50, supportTickets: 6, arrValue: 34, cluster: "moderate" },
  { id: "C-301", usageScore: 78, supportTickets: 2, arrValue: 58, cluster: "healthy" },
  { id: "C-302", usageScore: 84, supportTickets: 1, arrValue: 72, cluster: "healthy" },
  { id: "C-303", usageScore: 72, supportTickets: 3, arrValue: 64, cluster: "healthy" },
  { id: "C-304", usageScore: 80, supportTickets: 2, arrValue: 80, cluster: "healthy" },
  { id: "C-305", usageScore: 88, supportTickets: 1, arrValue: 95, cluster: "healthy" },
  { id: "C-401", usageScore: 96, supportTickets: 1, arrValue: 120, cluster: "power_user" },
  { id: "C-402", usageScore: 92, supportTickets: 0, arrValue: 145, cluster: "power_user" },
  { id: "C-403", usageScore: 98, supportTickets: 1, arrValue: 180, cluster: "power_user" },
  { id: "C-404", usageScore: 94, supportTickets: 2, arrValue: 135, cluster: "power_user" },
];

export interface CategoryPerformance {
  category: string;
  sales: number;
  marginPct: number;
  growthPct: number;
}

export const CATEGORY_DATA: CategoryPerformance[] = [
  { category: "Hardware & Gear", sales: 482000, marginPct: 42.4, growthPct: 28.5 },
  { category: "Cloud Add-ons", sales: 345000, marginPct: 68.2, growthPct: 44.1 },
  { category: "Enterprise Subs", sales: 612000, marginPct: 74.8, growthPct: 36.2 },
  { category: "Support Retainers", sales: 218000, marginPct: 52.0, growthPct: 12.8 },
  { category: "API Ingestion Tier", sales: 184000, marginPct: 82.5, growthPct: 58.6 },
];

export interface RawDataRow {
  id: string;
  orderDate: string;
  region: string;
  productSku: string;
  grossAmount: string;
  status: string;
  isClean: boolean;
  cleanOrderDate: string;
  cleanRegion: string;
  cleanProductSku: string;
  cleanGrossAmount: number;
  cleanStatus: string;
  issues: string[];
}

export const SAMPLE_RAW_DATA: RawDataRow[] = [
  {
    id: "TRX-8901",
    orderDate: "2025-01-02",
    region: "  north_am  ",
    productSku: "SKU_402",
    grossAmount: "$12,450.00",
    status: "COMPLETED",
    isClean: true,
    cleanOrderDate: "2025-01-02",
    cleanRegion: "NORTH AMERICA",
    cleanProductSku: "SKU-402",
    cleanGrossAmount: 12450,
    cleanStatus: "COMPLETED",
    issues: ["Whitespace stripped", "Case normalized"],
  },
  {
    id: "TRX-8902",
    orderDate: "2025/01/03",
    region: "NULL",
    productSku: "sku-402",
    grossAmount: "18700",
    status: "pending",
    isClean: false,
    cleanOrderDate: "2025-01-03",
    cleanRegion: "SOUTH AMERICA",
    cleanProductSku: "SKU-402",
    cleanGrossAmount: 18700,
    cleanStatus: "PENDING",
    issues: ["NULL region imputed via IP address", "Date ISO-8601 standardized", "SKU casing fixed"],
  },
  {
    id: "TRX-8903",
    orderDate: "04-Jan-2025",
    region: "EMEA",
    productSku: "N/A",
    grossAmount: "NULL",
    status: "REFUNDED",
    isClean: false,
    cleanOrderDate: "2025-01-04",
    cleanRegion: "EMEA",
    cleanProductSku: "SKU-108",
    cleanGrossAmount: 4320,
    cleanStatus: "REFUNDED",
    issues: ["Matched missing SKU from line-item logs", "Imputed zero-dollar net transaction"],
  },
  {
    id: "TRX-8904",
    orderDate: "2025-01-05",
    region: "APAC",
    productSku: "SKU-990",
    grossAmount: "-$15,200.00",
    status: "DISPUTED",
    isClean: false,
    cleanOrderDate: "2025-01-05",
    cleanRegion: "APAC",
    cleanProductSku: "SKU-990",
    cleanGrossAmount: 15200,
    cleanStatus: "CHARGEBACK",
    issues: ["Negative sign resolved to Chargeback category", "Standardized currency formatting"],
  },
  {
    id: "TRX-8904_DUP",
    orderDate: "2025-01-05",
    region: "APAC",
    productSku: "SKU-990",
    grossAmount: "-$15,200.00",
    status: "DISPUTED",
    isClean: false,
    cleanOrderDate: "—",
    cleanRegion: "—",
    cleanProductSku: "—",
    cleanGrossAmount: 0,
    cleanStatus: "REMOVED (DUPLICATE)",
    issues: ["Exact duplicate record purged"],
  },
  {
    id: "TRX-8905",
    orderDate: "2025-01-06",
    region: "north_am",
    productSku: "SKU-402",
    grossAmount: "21950.5",
    status: "COMPLETED",
    isClean: true,
    cleanOrderDate: "2025-01-06",
    cleanRegion: "NORTH AMERICA",
    cleanProductSku: "SKU-402",
    cleanGrossAmount: 21950.5,
    cleanStatus: "COMPLETED",
    issues: ["Normalized casing & format"],
  },
];


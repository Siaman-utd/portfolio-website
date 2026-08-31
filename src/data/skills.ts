export interface SkillCategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  tools: SkillItem[];
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency: string;
  summary: string;
  codeSnippet?: string;
  previewType: "sql" | "python" | "powerbi" | "excel" | "dataform" | "stats";
  sampleOutput?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "query-data-engineering",
    name: "Querying & Engineering",
    tag: "01 / QUERY",
    description: "Extracting, aggregating, and modeling structured and semi-structured datasets at scale.",
    tools: [
      {
        name: "SQL (PostgreSQL / BigQuery / Snowflake)",
        category: "Querying & Modeling",
        proficiency: "Advanced · CTEs & Window Functions",
        summary: "Complex multi-table joins, subqueries, recursive CTEs, and window functions (RANK, NTILE, LAG/LEAD).",
        previewType: "sql",
        codeSnippet: `WITH cohort_analysis AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', created_at) AS signup_cohort,
    FIRST_VALUE(revenue) OVER(
      PARTITION BY user_id 
      ORDER BY created_at
    ) AS initial_order_val
  FROM raw_transactions
)
SELECT 
  signup_cohort,
  COUNT(DISTINCT user_id) AS active_users,
  ROUND(AVG(initial_order_val), 2) AS avg_initial_aov
FROM cohort_analysis
GROUP BY 1
ORDER BY 1 DESC;`,
        sampleOutput: `cohort     | users  | avg_aov
2024-08-01 | 14,820 | $142.50
2024-07-01 | 12,390 | $138.20
2024-06-01 | 11,850 | $131.90`,
      },
      {
        name: "Python (Pandas, NumPy, Polars)",
        category: "Data Wrangling & Pipeline",
        proficiency: "Advanced · Automation & EDA",
        summary: "Data wrangling, automated API ingestion, vectorised aggregations, and statistical pipelines.",
        previewType: "python",
        codeSnippet: `import pandas as pd
import numpy as np

def clean_and_impute_transactions(df: pd.DataFrame) -> pd.DataFrame:
    # Remove duplicates & normalize ISO country codes
    df = df.drop_duplicates(subset=['order_id']).copy()
    df['country'] = df['country'].str.upper().str.strip()
    
    # Impute missing unit price by category median
    df['price'] = df.groupby('category')['price'].transform(
        lambda x: x.fillna(x.median())
    )
    
    # Calculate gross margin
    df['gross_margin_pct'] = (df['price'] - df['cogs']) / df['price'] * 100
    return df[df['gross_margin_pct'] > 0]`,
        sampleOutput: `[Pipeline Execution] Cleaned 452,190 rows (0 duplicates, 0 nulls). Execution time: 142ms.`,
      },
    ],
  },
  {
    id: "bi-visualization",
    name: "BI & Visualization",
    tag: "02 / VISUALIZE",
    description: "Translating complex multidimensional datasets into intuitive decision dashboards.",
    tools: [
      {
        name: "Power BI & DAX",
        category: "Business Intelligence",
        proficiency: "Advanced · Data Modeling & DAX",
        summary: "Star-schema dimensional modeling, dynamic DAX measures, row-level security, and executive BI portals.",
        previewType: "powerbi",
        codeSnippet: `LTV_Payback_Months = 
VAR Total_CAC = [Blended_Customer_Acquisition_Cost]
VAR Monthly_Gross_Margin = [Monthly_ARPU] * [Gross_Margin_Pct]
RETURN
    DIVIDE(Total_CAC, Monthly_Gross_Margin, BLANK())`,
        sampleOutput: `DAX Measure: Evaluated across 36 periods with dynamic currency conversion and drill-through.`,
        stats: [
          { label: "Active Reports", value: "35+" },
          { label: "Star Schemas", value: "100%" },
        ],
      },
      {
        name: "Excel & Financial Modeling",
        category: "Spreadsheet Analytics",
        proficiency: "Advanced · Power Query & Modeling",
        summary: "Power Query M scripts, complex nested lookups (XLOOKUP, INDEX/MATCH), scenario & sensitivity tables.",
        previewType: "excel",
        codeSnippet: `=LET(
  raw_sales, Table_Sales[GrossRevenue],
  discount_rate, 0.08,
  net_margin, raw_sales * (1 - discount_rate),
  SUM(net_margin)
)`,
        sampleOutput: `Dynamic Array Formula: Auto-calculating sensitivity matrix across 5 interest scenarios.`,
      },
      {
        name: "Tableau",
        category: "Visual Analytics",
        proficiency: "Proficient · Visual Storytelling",
        summary: "LOD expressions, spatial geographic maps, interactive dashboard parameters, and dual-axis chart systems.",
        previewType: "dataform",
        codeSnippet: `{ FIXED [Region], [Product_Category] : 
    SUM([Profit]) / SUM([Sales]) 
}`,
        sampleOutput: `Level of Detail (LOD) Expression verified: 4 Geo-clusters rendered with custom colour ramps.`,
      },
    ],
  },
  {
    id: "statistical-analytics",
    name: "Statistical Analysis & Strategy",
    tag: "03 / INSIGHT",
    description: "Hypothesis testing, exploratory data analysis, and unit economics modeling.",
    tools: [
      {
        name: "Exploratory Data Analysis (EDA)",
        category: "Methodology",
        proficiency: "Core Focus · Diagnostic Analytics",
        summary: "Outlier detection (IQR, Z-scores), skewness normalization, correlation matrices, and missingness audits.",
        previewType: "stats",
        codeSnippet: `# Pearson & Spearman correlation matrix
corr = df[['price', 'discount', 'sessions', 'conversion_rate', 'ltv']].corr()
# Feature importance using Random Forest regression
importance = model.feature_importances_`,
        sampleOutput: `Top feature driver for churn: Customer Inactivity Window (r = -0.74, p < 0.001)`,
        stats: [
          { label: "Hypothesis Tests", value: "99% Conf." },
          { label: "Pipeline Speed", value: "Sub-second" },
        ],
      },
      {
        name: "A/B Testing & Statistical Modeling",
        category: "Experimentation",
        proficiency: "Proficient · Hypothesis Validation",
        summary: "Sample size power calculation, two-tailed t-tests, Chi-square independence tests, and p-value validation.",
        previewType: "stats",
        codeSnippet: `from scipy import stats

t_stat, p_val = stats.ttest_ind(variant_a_conversions, variant_b_conversions)
# p_val = 0.012 (< 0.05 threshold) -> Statistically Significant Lift`,
        sampleOutput: `Variant B demonstrated a statistically significant +8.4% conversion lift (p=0.012, 95% CI: [2.1%, 14.7%]).`,
      },
    ],
  },
];


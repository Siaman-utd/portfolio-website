# Prompt for Antigravity — Build a Full Data Analyst Portfolio Website

Build a **premium, highly interactive, cinematic portfolio website for a Data Analyst named Siam Azad**.

Use this website as the **primary visual and interaction reference**:

**https://datakeeper-eight.vercel.app/**

Study and replicate the **overall design philosophy, layout rhythm, visual hierarchy, minimalism, typography scale, interface structure, transitions, motion language, scroll behavior, card design, borders, and premium product-website feel** of the reference. **Do not copy its branding, text, images, logo, or exact assets.** Reinterpret the experience specifically for a professional **Data Analyst portfolio**.

The final website should feel like a combination of:

* Premium creative portfolio
* Modern data product
* Editorial website
* Interactive analytics experience
* Minimal futuristic software interface

The core storytelling concept of the website is:

> **RAW DATA → CLEAN DATA → ANALYSIS → VISUALIZATION → INSIGHT → DECISION**

The entire website should visually communicate that Siam Azad takes messy, complex data and transforms it into clear, actionable business insights.

---

## 1. TECH STACK

Build the complete website using:

* React
* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP + ScrollTrigger where appropriate
* Three.js / React Three Fiber for the main 3D hero object
* Lucide icons

The website must be:

* Fully responsive
* Desktop-first but excellent on tablet and mobile
* Smooth and performant
* Production-quality
* Accessible
* SEO-friendly
* Component-based and cleanly structured
* Ready for deployment on Vercel

Do not create a generic template or dashboard. This must feel like a carefully art-directed portfolio experience.

---

# 2. OVERALL VISUAL STYLE

Use the reference website's **minimal, structured, high-end visual language** as inspiration.

### Color system

Use a restrained palette:

* Main background: warm off-white / slightly cream
* Primary text: near-black
* Secondary text: dark gray
* Borders: subtle light gray
* Cards/surfaces: extremely subtle tonal variation from the background
* Primary accent: muted data green

Suggested palette:

```text
Background: #F4F3EF
Surface: #ECEBE6
Primary Black: #111111
Secondary Black: #444444
Muted Gray: #8A8A84
Border: #D7D6D0
Data Green: #B6FF4A
Dark Green: #78A52B
White: #FFFFFF
```

Do not overuse the green accent. Use it strategically for:

* Important numbers
* Active states
* Data points
* Small chart highlights
* Status indicators
* Hover details

The overall site should remain approximately **90% monochrome/minimal**.

---

# 3. TYPOGRAPHY

Create a strong contrast between editorial typography and technical/data typography.

### Primary display font

Use:

**Space Grotesk** or **Geist**

For:

* Hero headlines
* Section titles
* Major statements
* Project titles

Typography should be:

* Large
* Bold
* Tight
* Confident
* Minimal
* Editorial

### Technical/data font

Use:

**IBM Plex Mono** or **JetBrains Mono**

For:

* Section numbers
* Labels
* Metadata
* Statistics
* Skills
* Data values
* Chart labels
* Navigation details
* Small UI text

Example visual hierarchy:

```text
01 / INTRODUCTION

Make your
"data"
make sense.

SIAM AZAD
DATA ANALYST

SQL / PYTHON / POWER BI / EXCEL
```

Use oversized typography throughout the site similar to a premium creative/product website.

---

# 4. MAIN HERO SECTION

The hero should be inspired by the structure and visual impact of the reference website.

Create a full-screen hero with a split composition.

## LEFT SIDE

Large editorial text:

### Main headline

Make your
"DATA"
make sense.

The word **DATA should receive subtle emphasis through either:**

* Accent green
* Underline/grid effect
* Animated highlight
* Dynamic text reveal

Below:

> I transform complex data into clear insights, powerful visualizations, and smarter business decisions.

Then a technical identity block:

```text
SIAM AZAD
DATA ANALYST

SQL · PYTHON · POWER BI · EXCEL
```

Include one buttons:

### Primary button

**VIEW MY WORK**

The button should have premium microinteractions inspired by the reference:

* Subtle magnetic movement
* Background inversion
* Smooth arrow movement
* Border transitions
* Cursor response

## RIGHT SIDE — MAIN VISUAL OBJECT

Do NOT use a Rubik's Cube.

Create a custom interactive **3D DATA CUBE**.

This is the signature object of the entire website.

The Data Cube should represent:

* Time
* Customers
* Products
* Revenue
* Growth
* Business dimensions

### Appearance

The object should feel like:

* A futuristic analytical object
* Semi-transparent
* Made from a 3D grid
* Containing floating data points
* Small numerical values
* Thin wireframe structures
* Subtle chart fragments
* Tiny particles
* Occasional green highlighted nodes

Do not make it look like a literal OLAP textbook diagram.

Make it visually artistic and premium.

### Data Cube behavior

The cube should:

1. Slowly rotate automatically
2. Respond subtly to mouse movement
3. Have depth and parallax
4. Contain animated floating data particles
5. Occasionally reorganize internal data points
6. Highlight different dimensions
7. Reveal small labels such as:

```text
REVENUE
CUSTOMERS
PRODUCTS
TIME
GROWTH
```

8. React to scrolling

The animation should feel:

* Precise
* Slow
* Mechanical
* Intelligent
* Calm

Avoid exaggerated gaming-style animation.

---

# 5. HERO INTRO ANIMATION

When the page first loads, create a cinematic sequence.

### Step 1

Blank warm off-white screen.

A tiny technical text appears:

```text
INITIALIZING DATA SYSTEM...
```

A progress line moves.

### Step 2

Random numbers and data fragments begin appearing.

Example:

```text
82.4
19.7
REV_2024
00101101
$124,820
CUSTOMER_024
```

They initially appear scattered.

### Step 3

The data fragments begin organizing themselves.

Thin lines connect them.

Particles move into position.

### Step 4

The fragments construct the 3D Data Cube.

### Step 5

The hero typography reveals itself with a staggered animation:

```text
FIND THE
SIGNAL IN
THE NOISE.
```

### Step 6

The navigation and remaining UI fade/slide into place.

The entire intro should feel elegant and fast enough that it does not frustrate users.

Allow the intro to be skipped automatically after completion and respect reduced-motion preferences.

---

# 6. NAVIGATION

Create a minimal fixed navigation.

Left:

```text
SIAM AZAD
```

Center or right:

```text
ABOUT
SKILLS
PROJECTS
PROCESS
CONTACT
```

Add a small technical indicator:

```text
● AVAILABLE FOR WORK
```

Use muted green for the status dot.

Navigation should:

* Initially blend into the hero
* Become slightly solid/sticky on scroll
* Use subtle backdrop blur
* Have thin borders
* Include animated hover states
* Highlight the current section

On mobile, transform into a clean premium menu.

---

# 7. SCROLL STORYTELLING

The entire website should tell one continuous story.

Use these major sections:

```text
01 — RAW
02 — CLEAN
03 — ANALYZE
04 — VISUALIZE
05 — INSIGHT
06 — CONNECT
```

The Data Cube from the hero should conceptually evolve as the user scrolls.

---

# 8. SECTION 01 — RAW / ABOUT ME

Headline:

## DATA IS ONLY

## USEFUL WHEN IT

## TELLS A STORY.

Introduce Siam Azad.

Suggested copy:

> I'm Siam Azad, a Data Analyst focused on transforming raw information into meaningful insights. I work across data cleaning, analysis, visualization, and business intelligence to help turn numbers into decisions.

Create an asymmetric layout.

### Left

Large statement and biography.

### Right

An animated raw dataset.

Example:

```text
DATE         REVENUE    REGION      PRODUCT
2025-01-02   12450     NORTH       A
2025-01-03   NULL      SOUTH       B
2025-01-04   18700     N/A         A
2025-01-05   15200     NORTH       NULL
```

The dataset should initially appear messy.

On scroll/hover:

* NULL values become highlighted
* Duplicate rows disappear
* Formatting improves
* Data aligns

This visually introduces the idea of data cleaning.

Include small labels:

```text
DATA CLEANING
EXPLORATORY ANALYSIS
BUSINESS INTELLIGENCE
```

---

# 9. SECTION 02 — CLEAN / SKILLS

Create a visually interesting skills section that does NOT look like generic skill progress bars.

Use an interactive analytical system.

Headline:

## MY TOOLKIT FOR

## FINDING CLARITY.

Display skills as modular data blocks.

### Core skills

```text
SQL
PYTHON
POWER BI
EXCEL
TABLEAU
PANDAS
NUMPY
DATA CLEANING
DATA VISUALIZATION
STATISTICAL ANALYSIS
EXPLORATORY DATA ANALYSIS
BUSINESS INTELLIGENCE
```

Create interactive blocks/cards.

Each card should have:

* Tool name
* Short description
* Small technical icon
* Experience/usage indicator
* Animated data visualization fragment

Examples:

### SQL

```text
SELECT INSIGHT
FROM RAW_DATA
WHERE VALUE = 'HIGH';
```

### Python

Animated mini code/data transformation.

### Power BI

Small animated bar chart.

### Excel

Tiny spreadsheet cells reorganizing.

Use hover effects where the internal visualization animates.

Avoid standard percentage skill bars.

---

# 10. SECTION 03 — ANALYZE / PROJECTS

This is one of the most important sections.

Headline:

## SELECTED

## ANALYSES.

Create large horizontal or stacked project cards inspired by premium case-study websites.

Each project should have:

```text
PROJECT NUMBER
CATEGORY
YEAR

PROJECT TITLE

SHORT DESCRIPTION

TOOLS USED

KEY RESULT
```

Use example projects that can later easily be replaced with real projects.

### Project 01

**E-COMMERCE SALES ANALYSIS**

Tools:

```text
SQL / PYTHON / POWER BI
```

Key result:

```text
+24.8%
REVENUE OPPORTUNITY IDENTIFIED
```

Visual:

A beautiful animated data visualization.

### Project 02

**CUSTOMER CHURN ANALYSIS**

Tools:

```text
PYTHON / PANDAS / EXCEL
```

Key result:

```text
18.3%
HIGH-RISK CUSTOMER SEGMENT
```

Visual:

Animated customer segmentation/scatter plot.

### Project 03

**BUSINESS PERFORMANCE DASHBOARD**

Tools:

```text
POWER BI / SQL
```

Visual:

Premium dashboard preview, not a generic screenshot-only card.

### Project 04

**MARKET & PRODUCT INSIGHTS**

Tools:

```text
PYTHON / SQL / TABLEAU
```

Visual:

Data points gradually form a clear visualization.

---

## PROJECT CARD ANIMATIONS

Each project card should:

* Reveal as the user scrolls
* Have image/visual parallax
* Animate numerical values
* Highlight one important KPI
* Expand on click
* Include a smooth cursor-following effect on desktop

On hover, show:

```text
VIEW CASE STUDY →
```

Do not make the cards overly rounded.

Use:

* Sharp or slightly rounded corners
* Thin borders
* Large whitespace
* Strong typography

---

# 11. PROJECT CASE STUDY EXPERIENCE

When a project is opened, create a dedicated case-study page or modal experience.

Structure:

```text
PROJECT OVERVIEW
↓
THE PROBLEM
↓
THE DATA
↓
THE PROCESS
↓
THE ANALYSIS
↓
THE VISUALIZATION
↓
THE INSIGHT
↓
THE BUSINESS IMPACT
```

Include:

### Problem

What business question needed answering?

### Data

Dataset information:

```text
RECORDS
COLUMNS
TIME PERIOD
DATA SOURCES
```

### Process

Visual pipeline:

```text
RAW DATA
    ↓
CLEANING
    ↓
TRANSFORMATION
    ↓
EXPLORATION
    ↓
ANALYSIS
    ↓
VISUALIZATION
    ↓
INSIGHT
```

Animate the pipeline as the user scrolls.

### Insights

Show large statistics.

Example:

```text
24.8%

REVENUE GROWTH OPPORTUNITY
```

### Visualization

Use animated charts.

Charts should:

* Draw themselves on scroll
* Animate values smoothly
* Use the monochrome palette
* Highlight important data with green

Do not overload every chart with animation.

---

# 12. SECTION 04 — VISUALIZE

Create a visually striking data visualization playground.

Headline:

## NUMBERS,

## MADE VISIBLE.

Show several interactive visualization modules.

### Module A

Line chart:

```text
REVENUE OVER TIME
```

### Module B

Scatter plot:

```text
CUSTOMER SEGMENTS
```

### Module C

Bar chart:

```text
TOP PERFORMING CATEGORIES
```

### Module D

Heatmap:

```text
ACTIVITY PATTERNS
```

As the user scrolls, charts should progressively draw themselves.

Important:

Use realistic but clearly sample/generated data.

Do not present fake business results as real client achievements.

Add small labels indicating:

```text
DEMONSTRATION DATA
```

where appropriate.

Make the charts feel like part of the visual design rather than embedded dashboard widgets.

---

# 13. SECTION 05 — INSIGHT / ANALYTICAL PROCESS

This section should be a major storytelling moment.

Headline:

## FROM CHAOS

## TO CLARITY.

Create a large scroll-driven visual transformation.

### Stage 01

Thousands of scattered data points.

Label:

```text
01 / RAW DATA
```

### Stage 02

Points become aligned.

Label:

```text
02 / CLEAN
```

### Stage 03

Patterns emerge.

Label:

```text
03 / ANALYZE
```

### Stage 04

Data transforms into charts.

Label:

```text
04 / VISUALIZE
```

### Stage 05

Everything reduces to one powerful insight.

Example:

```text
+27.4%

GROWTH OPPORTUNITY IDENTIFIED
```

Label:

```text
05 / INSIGHT
```

This section should make the user feel like they have watched an analysis happen.

Use GSAP ScrollTrigger or another performant scroll-driven animation system.

---

# 14. SECTION 06 — CONNECT / CONTACT

Create a strong final section.

Headline:

## LET'S FIND

## THE NEXT

## INSIGHT.

Subtext:

> Have data that needs a story? Let's turn it into something useful.

Include:

* Email
* LinkedIn
* GitHub

Use placeholders that are easy to replace:

```text
EMAIL: your@email.com
LINKEDIN: linkedin.com/in/yourprofile
GITHUB: github.com/yourusername
```

Add a large CTA:

**START A CONVERSATION →**

The final section should contain a subtle transformed version of the hero Data Cube.

The cube should now be simplified and stable, representing the end of the journey:

```text
CHAOS → CLARITY
```

---

# 15. FOOTER

Minimal technical footer.

Example:

```text
SIAM AZAD
DATA ANALYST

© 2026

BUILT WITH DATA, LOGIC & CURIOSITY.
```

Include a small animated system status:

```text
● SYSTEM ONLINE
```

Also include:

```text
BACK TO TOP ↑
```

The back-to-top interaction should smoothly scroll and optionally reverse the analytical journey visually.

---

# 16. MICROINTERACTIONS

Add subtle premium interactions throughout.

### Buttons

* Magnetic hover
* Arrow movement
* Background fill
* Border animation

### Numbers

* Count-up animation
* Rolling number transitions
* Slight digit scrambling before final values

### Links

* Animated underline
* Directional arrow movement

### Cards

* Subtle elevation
* Data lines animate
* KPI values react

### Cursor

On desktop only, create a subtle custom cursor.

Default:

```text
+
```

Over links:

```text
OPEN →
```

Over projects:

```text
VIEW
```

Over the Data Cube:

```text
ANALYZE
```

Do not use an oversized distracting cursor.

---

# 17. PAGE TRANSITIONS

Use smooth transitions between pages and sections.

The motion language should feel:

* Editorial
* Mechanical
* Precise
* Intentional
* Calm

Use:

* Fade
* Clip reveal
* Mask reveal
* Translate
* Scale
* Stagger

Avoid:

* Excessive bouncing
* Random spinning
* Excessive blur
* Overly elastic movement
* Flashy neon effects

---

# 18. LOADING SCREEN

Create a premium analytical loading experience.

Show:

```text
SIAM AZAD / DATA ANALYST

LOADING DATA...
```

Then a progress indicator:

```text
[████████░░░░░░░░] 62%
```

Use animated technical messages:

```text
CONNECTING TO DATA SOURCE...
VALIDATING DATA...
CLEANING RECORDS...
GENERATING INSIGHTS...
READY.
```

Once complete, transition seamlessly into the hero.

---

# 19. RESPONSIVE DESIGN

The desktop version should feel cinematic.

For mobile:

* Simplify the 3D Data Cube
* Reduce heavy particle effects
* Preserve the storytelling
* Use vertical layouts
* Maintain large typography
* Keep charts readable
* Convert navigation to a premium menu
* Avoid horizontal overflow
* Ensure all interactions work with touch

Do not simply shrink the desktop layout.

Create intentional responsive compositions.

---

# 20. PERFORMANCE

Prioritize performance.

Requirements:

* Lazy-load heavy 3D assets
* Pause/reduce unnecessary animations when offscreen
* Optimize particle count
* Use requestAnimationFrame appropriately
* Respect `prefers-reduced-motion`
* Avoid unnecessary rerenders
* Keep mobile GPU usage reasonable
* Use optimized fonts
* Prevent layout shifts

The 3D Data Cube should degrade gracefully on low-performance devices.

---

# 21. CODE STRUCTURE

Use clean reusable components.

Suggested structure:

```text
/components
  Navigation.tsx
  Hero.tsx
  DataCube.tsx
  RawDataSection.tsx
  SkillsSection.tsx
  ProjectsSection.tsx
  ProjectCard.tsx
  VisualizationSection.tsx
  InsightProcess.tsx
  ContactSection.tsx
  Footer.tsx
  LoadingScreen.tsx

/components/charts
  LineChart.tsx
  BarChart.tsx
  ScatterPlot.tsx
  Heatmap.tsx

/components/ui
  MagneticButton.tsx
  SectionLabel.tsx
  AnimatedNumber.tsx
  CustomCursor.tsx

/data
  projects.ts
  skills.ts
  charts.ts
```

Keep project data and personal information easy to edit from centralized files.

---

# 22. IMPORTANT DESIGN RULES

### DO:

* Use the provided reference website as inspiration for design language and interaction quality
* Create a unique Data Analyst identity
* Make the 3D Data Cube the signature visual object
* Use large typography
* Use whitespace generously
* Make data visualization part of the visual storytelling
* Create smooth, purposeful animations
* Build a complete working website
* Use realistic placeholder project data
* Make every major section feel intentional
* Ensure the site feels premium and memorable

### DO NOT:

* Copy the reference website's branding or assets
* Copy its exact text
* Use a Rubik's Cube
* Create a generic Bootstrap-style portfolio
* Fill the site with rounded gradient cards
* Use excessive glassmorphism
* Use excessive neon
* Turn the website into a standard admin dashboard
* Overuse animations
* Use generic stock imagery
* Make every element float or bounce
* Use skill percentage bars
* Add meaningless decorative elements

---

# FINAL CREATIVE DIRECTION

The final website should feel like an **interactive visualization of what a Data Analyst does**.

The user should experience this journey:

```text
MESSY INFORMATION

        ↓

ORGANIZATION

        ↓

ANALYSIS

        ↓

VISUALIZATION

        ↓

PATTERN

        ↓

INSIGHT

        ↓

DECISION
```

The hero's **3D Data Cube** should act as the central metaphor for this process.

The final result must be visually impressive enough that the website itself demonstrates Siam Azad's combination of:

**ANALYTICAL THINKING × DATA VISUALIZATION × TECHNICAL SKILL × ATTENTION TO DETAIL**

Build the website as a complete, polished, interactive experience — not as a wireframe, partial prototype, or static mockup. Prioritize the same premium minimalism and motion quality that make the reference site compelling, while creating an original identity centered entirely around **data analysis and turning complexity into clarity**.

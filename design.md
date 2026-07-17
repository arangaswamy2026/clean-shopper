# Design System: Clean Shopper

> This file is the source of truth for the visual direction of this project. When building, read this file and apply these tokens. Do not introduce colors, fonts, spacing, or radii that are not defined here.

**Direction:** Minimal and modern with an enterprise-grade polish, carried by a single confident accent and a touch of expressive typography
**Feeling:** Calm and in control, with a current of quiet energy
**Generated for:** Ingredient-aware consumers researching clean home and personal care products. Desktop only — no responsive breakpoints, no mobile/tablet layout, no dark mode.

---

## 1. Color

State the role of every color. Do not add colors outside this list.

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F8FA` | Page background, primary surface |
| Surface | `#FFFFFF` | Cards, raised panels |
| Text primary | `#12141A` | Headings and body text |
| Text muted | `#5B6270` | Secondary text, captions |
| Accent | `#2151E5` | Primary actions, links, emphasis |
| Accent hover | `#1A3FC4` | Hover/active state of accent |
| Border | `#E2E4EA` | Dividers, input borders |
| Success | `#1E8E5A` | Positive states — clean assessment |
| Warning | `#B7791F` | Caution states — mixed assessment |
| Error | `#C4362C` | Errors, destructive actions — not-clean assessment |
| Info | `#0E7C93` | Informational states |

**Contrast check (WCAG AA):**
- Text primary on Background: 17.6:1 (pass, exceeds AAA)
- Text muted on Background: 5.8:1 (pass for body, 4.5:1 required)
- White text on Accent background: 6.2:1 (pass for body)

The palette stays quiet: a cool near-white background, a near-black graphite for text, and one confident cobalt accent that carries every action and emphasis point. Functional colors are kept visually distinct from the accent so a clean/not-clean assessment is never confused with an interactive element.

---

## 2. Typography

**Display / headings:** Instrument Sans (Google Fonts), weight 600. A clean geometric sans with just enough character in its letterforms to read as considered rather than default — carries the "modern and expressive" edge without breaking the minimal, enterprise-grade restraint.
**Body:** Inter (Google Fonts), weight 400/500. Highly legible at length, the same register of sans used across serious, professional software.

Type scale (base 16px, ratio 1.333):

| Token | Size | Line height | Weight | Usage |
|-------|------|-------------|--------|-------|
| Display | 50px | 1.15 | 600 | Hero, page title |
| H1 | 38px | 1.15 | 600 | Section title |
| H2 | 28px | 1.2 | 600 | Subsection |
| H3 | 21px | 1.3 | 600 | Card title |
| Body | 16px | 1.6 | 400 | Paragraphs |
| Small | 13px | 1.5 | 500 | Captions, labels |

---

## 3. Spacing, radius, elevation

**Spacing scale** (base 8px, with a 4px half-step): `xs 4px · sm 8px · md 16px · lg 24px · xl 48px · 2xl 80px`
**Radius:** `sm 4px · md 8px · lg 12px · full 9999px`
**Shadow:**
- `sm`: `0 1px 2px rgba(18,20,26,0.05)`
- `md`: `0 4px 10px rgba(18,20,26,0.07)`
- `lg`: `0 16px 32px rgba(18,20,26,0.10)`

Precise, moderate radii and restrained shadows keep the surface feeling engineered rather than decorated. Generous spacing at the xl/2xl steps gives the desktop-only layout the room to breathe that the Apple and Notion references share.

---

## 4. Components

Describe each in terms of the tokens above.

**Button — primary:** background Accent, white text, radius md, padding sm (vertical) / lg (horizontal), hover swaps to Accent hover.
**Button — secondary:** transparent background, Accent text, 1px Accent border, radius md, hover fills Border tint.
**Button — disabled:** Border background, Text muted, no pointer, no hover state.
**Card:** Surface background, 1px Border, radius lg, shadow md, padding lg.
**Input:** Surface background, 1px Border, radius md, padding sm/md. Focus shows a 2px Accent outline with 1px offset, border switches to Accent.
**Link:** Accent color, no underline at rest, underline appears on hover, hover color Accent hover.

---

## 5. Voice

**Person:** Second person, speaking directly to the shopper.
**Rhythm:** Short, confident sentences. State the verdict before the reasoning. No hedging, no filler, no marketing inflation.
**Tone:** Speak like a knowledgeable friend who has already done the research — plain about what is clean and what is not, calm about the complexity underneath, quietly pleased when a product checks out. Avoid alarmist language about "toxins" and avoid borrowing the vague marketing language ("natural," "clean") this product exists to verify. State what the ingredient data shows and let it carry the weight.

---

## 6. Tokens — CSS custom properties

```css
:root {
  /* color */
  --color-bg: #F7F8FA;
  --color-surface: #FFFFFF;
  --color-text: #12141A;
  --color-text-muted: #5B6270;
  --color-accent: #2151E5;
  --color-accent-hover: #1A3FC4;
  --color-border: #E2E4EA;
  --color-success: #1E8E5A;
  --color-warning: #B7791F;
  --color-error: #C4362C;
  --color-info: #0E7C93;

  /* typography */
  --font-display: "Instrument Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --text-display: 3.125rem;
  --text-h1: 2.375rem;
  --text-h2: 1.75rem;
  --text-h3: 1.3125rem;
  --text-body: 1rem;
  --text-small: 0.8125rem;
  --leading-tight: 1.15;
  --leading-normal: 1.6;

  /* spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 3rem;
  --space-2xl: 5rem;

  /* radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-full: 9999px;

  /* shadow */
  --shadow-sm: 0 1px 2px rgba(18,20,26,0.05);
  --shadow-md: 0 4px 10px rgba(18,20,26,0.07);
  --shadow-lg: 0 16px 32px rgba(18,20,26,0.10);

  /* chart — categorical series (fixed order, assigned in sequence, never cycled) */
  --chart-1: #2151E5; /* cobalt — brand accent, slot 1 */
  --chart-2: #1BAF7A; /* aqua */
  --chart-3: #EDA100; /* yellow */
  --chart-4: #008300; /* green */
  --chart-5: #4A3AA7; /* violet */
  --chart-6: #E34948; /* red */
  --chart-7: #E87BA4; /* magenta */
  --chart-8: #EB6834; /* orange */

  /* chart — sequential (magnitude, one hue light→dark) */
  --chart-seq-1: #E7ECFC;
  --chart-seq-2: #C3D0F8;
  --chart-seq-3: #8FA6F0;
  --chart-seq-4: #5578EC;
  --chart-seq-5: #2151E5;
  --chart-seq-6: #1A3FC4;
  --chart-seq-7: #142F92;

  /* chart — chrome & ink */
  --chart-grid: #EDEFF3;    /* hairline gridlines */
  --chart-baseline: #CBD0DA; /* baseline / axis */
  --chart-axis-label: #898781; /* muted tick/axis labels */
}
```

Status series (clean / mixed / not-clean assessments) reuse the semantic colors from section 1 — `--color-success` (good), `--color-warning` (caution/mixed), `--color-error` (critical/not-clean) — always paired with an icon and label, never carried by color alone.

---

## 7. Tokens — Tailwind theme

For projects using Tailwind, add this to `tailwind.config.js` under `theme.extend`. The values mirror the CSS variables above.

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        bg: "#F7F8FA",
        surface: "#FFFFFF",
        text: { DEFAULT: "#12141A", muted: "#5B6270" },
        accent: { DEFAULT: "#2151E5", hover: "#1A3FC4" },
        border: "#E2E4EA",
        success: "#1E8E5A",
        warning: "#B7791F",
        error: "#C4362C",
        info: "#0E7C93",
      },
      fontFamily: {
        display: ["Instrument Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        display: ["3.125rem", { lineHeight: "1.15" }],
        h1: ["2.375rem", { lineHeight: "1.15" }],
        h2: ["1.75rem", { lineHeight: "1.2" }],
        h3: ["1.3125rem", { lineHeight: "1.3" }],
        small: ["0.8125rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(18,20,26,0.05)",
        md: "0 4px 10px rgba(18,20,26,0.07)",
        lg: "0 16px 32px rgba(18,20,26,0.10)",
      },
      colors: {
        chart: {
          1: "#2151E5", 2: "#1BAF7A", 3: "#EDA100", 4: "#008300",
          5: "#4A3AA7", 6: "#E34948", 7: "#E87BA4", 8: "#EB6834",
          "seq-1": "#E7ECFC", "seq-2": "#C3D0F8", "seq-3": "#8FA6F0",
          "seq-4": "#5578EC", "seq-5": "#2151E5", "seq-6": "#1A3FC4", "seq-7": "#142F92",
          grid: "#EDEFF3", baseline: "#CBD0DA", "axis-label": "#898781",
        },
      },
    },
  },
};
```

---

## 8. Data visualization

Charts are read by people and executed by the build. These rules make a chart correct by construction, not by taste. They apply to every chart, sparkline, and stat tile in the product.

### Color, by the job it does

Color is assigned last and each chart color does exactly one job:

- **Categorical (identity — which series).** Use `--chart-1` … `--chart-8` in fixed order, assigned in sequence, never cycled. A 9th series folds into "Other" or small multiples — never a generated hue. Color follows the entity, not its rank; a filter that drops a series must not repaint the survivors.
- **Sequential (magnitude — how much).** One hue, light→dark, `--chart-seq-1` … `--chart-seq-7`. For heatmaps and intensity. Never a rainbow.
- **Status (state — clean / mixed / not-clean).** The semantic colors only (`--color-success`, `--color-warning`, `--color-error`), always with an icon and label. Reserved — never reused as "series 4."

The categorical palette was validated against the white card surface: worst adjacent CVD ΔE 24.2 (target ≥ 12). Aqua, yellow, and magenta sit below 3:1 contrast on white — where used, they ship with visible direct labels or a table view (the relief rule). Text (values, labels, legends) always wears ink tokens (`--color-text`, `--color-text-muted`), never the series color.

### Non-negotiables

- **One axis.** Never two y-scales in one chart. Two measures of different scale → two charts or index to a common base.
- **Legend present for two or more series** (a single series needs none — the title names it); direct-label up to four series; never a number on every point.
- **Recessive chrome.** Gridlines are hairline `--chart-grid`; baseline/axis `--chart-baseline`; tick labels `--chart-axis-label`. Data is the only thing that carries weight.
- **Hover by default.** Line/area charts get a crosshair + tooltip; bar/dot charts get a per-mark tooltip. Only a bare stat tile skips it.

### Marks

- Bars and area data-ends: thin marks with **4px rounded** ends anchored to the baseline; a **2px surface gap** between adjacent bars and between stacked segments.
- Lines: **2px** stroke; point markers **≥ 8px** diameter; a 2px surface ring where marks overlap.
- Area fills: the line's hue at ~12% opacity.

### Charts in cards

A chart widget is a `Card` (section 4) with: an H3 title, an optional muted subtitle or time range, the plot, and a legend beneath for multi-series. Padding `lg`. The plot never bleeds past the card border.

### Sparklines

A sparkline is a chart stripped to its trend — no axes, no labels, no gridlines — sized to sit inline with a number. Used inside stat tiles beside a hero figure and its delta, or inline in table rows. Variants: line, area, bar, and win/loss. The stroke is 2px; a single end-marker (≥ 8px) may mark the latest value. It carries trend, not precise values — the hero number carries the value.

### Stat tiles

A stat tile is often the right answer instead of a chart: an eyebrow label, a hero figure (proportional figures, `tabular-nums` only when values must align in a column), a delta with direction (↑ good in `--color-success`, ↓ in `--color-error` — or reversed when down is good, e.g. flagged items), and an optional sparkline.

# Solified Website - Design Guidelines

## Design Approach

**Selected Framework:** Material Design principles adapted for B2B technology services
**Inspiration:** Enterprise tech leaders (Cisco, IBM Cloud, Microsoft Azure) - clean, structured, credible interfaces that balance technical sophistication with approachability

**Core Philosophy:** Professional credibility through structured information architecture, strategic use of whitespace, and minimal but impactful imagery. Tech-savvy aesthetic achieved through precision, hierarchy, and modern typography rather than heavy visual elements.

---

## Typography System

**Primary Font:** Inter (Google Fonts)
- Clean, modern sans-serif perfect for technical content
- Excellent readability at all sizes

**Font Hierarchy:**
- Hero Headlines: text-5xl md:text-6xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsection Headers: text-2xl, font-semibold
- Body Large: text-lg, font-normal, leading-relaxed
- Body Regular: text-base, leading-relaxed
- Captions/Labels: text-sm, font-medium, uppercase tracking-wide

---

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Grid gaps: gap-8 to gap-12
- Card spacing: p-6 md:p-8

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-6 lg:px-8
- Content-heavy sections: max-w-6xl
- Text content: max-w-4xl

**Grid Systems:**
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Case Studies: grid-cols-1 lg:grid-cols-2 (detailed cards)
- Stats/Metrics: grid-cols-2 md:grid-cols-4
- Partner Logos: grid-cols-2 md:grid-cols-4 lg:grid-cols-6

---

## Component Library

### Navigation
- Fixed header with semi-transparent backdrop blur on scroll
- Logo left, navigation center/right
- Navigation items: text-sm font-medium uppercase tracking-wide
- Mobile: Hamburger menu expanding to full-screen overlay
- CTA button in header: "Get in Touch" with primary styling

### Hero Section
- Height: min-h-[70vh] (not forced full viewport)
- Layout: Two-column on desktop (60/40 split)
  - Left: Headline, subheadline, dual CTAs, trust indicator
  - Right: Single hero image (professional tech/office setting)
- Hero image treatment: rounded-2xl with subtle shadow
- Headline structure: 
  - Overline: "Founded 2024 | Saudi Arabia" (small, muted)
  - Main: "IT Solutions Simplified" (massive, bold)
  - Sub: One-line value proposition
- Trust indicators: "25+ Years Combined Expertise" badge below CTAs

### Service Cards
- Grid layout (3 columns desktop)
- Card structure:
  - Icon area: 56x56px with background circle
  - Title: text-xl font-semibold
  - Description: 2-3 lines, text-base
  - Subtle border, hover: lift effect (shadow + translate-y)
- Use iconography from Heroicons (outline style)
- Each card h-full for consistent heights

### Case Study Components
- Large format cards with imagery
- Structure:
  - Featured image: aspect-video, rounded-lg
  - Client name: text-2xl font-bold
  - Project type: small badge/tag
  - Description: 3-4 lines highlighting scope
  - Key deliverables: Bullet list with checkmarks
  - "View Details" link
- Alternating layout: image left/right per card

### Vision/Mission Section
- Side-by-side cards on desktop
- Each card:
  - Large icon/number
  - "Vision" or "Mission" label
  - Content in clear hierarchy
  - Equal height containers

### Partner Section
- Centered heading: "Technology Partners"
- Logo grid: grayscale filters with hover color restore
- Logos: max-h-16, constrained width, centered
- Clean spacing: gap-12

### Footer
- Three-column layout (desktop)
  - Column 1: Logo, tagline, social links
  - Column 2: Quick links (Services, Projects, About, Contact)
  - Column 3: Contact information with icons
- Bottom bar: Copyright, legal links
- Background: subtle darker treatment

### Contact Section
- Two-column split (form 60%, info 40%)
- Form fields:
  - Name, Email, Phone, Company, Message
  - Full-width inputs with clear labels
  - Large submit button
- Info column:
  - Office hours
  - Email (clickable mailto)
  - Phone numbers (clickable tel)
  - Optional: Map or illustration

---

## Visual Treatments

**Cards & Containers:**
- Border: border with subtle color
- Corners: rounded-lg (8px) for cards, rounded-xl (12px) for featured elements
- Shadows: Minimal - shadow-sm default, shadow-md on hover
- Backgrounds: Subtle variations, not heavy gradients

**Buttons:**
- Primary CTA: px-8 py-3, rounded-lg, font-semibold
- Secondary: outlined version with border-2
- Icon buttons: square with centered icon
- Buttons on images: backdrop-blur-md with semi-transparent background

**Iconography:**
- Heroicons (outline style) throughout
- Icon sizes: 24x24 (normal), 32x32 (featured), 48x48 (hero sections)
- Consistent stroke width

**Borders & Dividers:**
- Section dividers: border-t with opacity
- Card borders: subtle, not heavy
- Use strategically to create rhythm

---

## Images

**Hero Image:**
- Professional office/tech environment or abstract technology visualization
- Position: Right side of hero section
- Treatment: rounded-2xl, subtle shadow
- Size: fills container responsively

**Project Images:**
- One featured image per case study (3 total)
- Restaurant/tech implementation photography for Mawred Al Ousool
- Car wash app UI mockup for Aquamatic Express  
- Network infrastructure for Sprout
- Aspect ratio: 16:9 consistently

**Partner Logos:**
- Ubiquiti logo (networking equipment)
- Hikvision logo (security systems)
- Display in grayscale, restore color on hover
- Clean, professional presentation

**Image Strategy:** Minimal but high-impact - hero establishes credibility, project images show real work, partner logos build trust. No decorative imagery.

---

## Page Structure

**Homepage Flow:**
1. Hero with image (70vh)
2. Services grid (9 services, 3-column)
3. Vision/Mission cards
4. Featured projects (3 case studies)
5. Partners section
6. Contact form with info
7. Footer

**Responsive Behavior:**
- Desktop (lg): Full multi-column layouts
- Tablet (md): 2 columns maximum
- Mobile: Stack to single column, maintain hierarchy
- Navigation: Hamburger menu below md breakpoint

---

## Accessibility & Performance

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support throughout
- Focus states: ring-2 with offset
- Minimum touch targets: 44x44px
- Form validation with clear error states
- Alt text for all images
- Sufficient contrast ratios (WCAG AA minimum)

---

## Animations (Minimal)

- Subtle hover states: transform, shadow transitions (200ms)
- Scroll-triggered fade-ins for sections (intersection observer)
- Navigation backdrop blur on scroll
- No parallax, no heavy animations
- Focus on performance and professionalism
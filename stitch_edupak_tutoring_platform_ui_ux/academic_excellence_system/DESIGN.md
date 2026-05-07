---
name: Academic Excellence System
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dadf'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#ebeef3'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#e0e3e8'
  on-surface: '#181c20'
  on-surface-variant: '#43474f'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f6'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#006e25'
  on-secondary: '#ffffff'
  secondary-container: '#80f98b'
  on-secondary-container: '#007327'
  tertiary: '#1b1f21'
  on-tertiary: '#ffffff'
  tertiary-container: '#303436'
  on-tertiary-container: '#999c9f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#83fc8e'
  secondary-fixed-dim: '#66df75'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531a'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#43474a'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e3e8'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The brand personality is authoritative yet approachable, bridging the gap between traditional Pakistani educational values and modern digital convenience. The design system prioritizes a **Corporate / Modern** aesthetic that emphasizes stability, intelligence, and growth.

The visual narrative focuses on "The Path to Success," utilizing high-quality photography of students and tutors in bright, natural lighting alongside clean, geometric illustrations. The emotional response should be one of immediate trust and relief—parents and students should feel they have found a premium, reliable solution for their educational needs.

## Colors

The palette is anchored by **Deep Blue**, representing the institutional stability of a top-tier educational body. **Success Green** is used strategically as an accent to denote progress, verification, and calls to action, providing a vibrant contrast that feels optimistic.

- **Primary (#003366):** Used for navigation, headings, and primary buttons.
- **Accent (#28A745):** Reserved for "Verified" badges, success states, and secondary conversion points.
- **Surface:** A combination of White for primary content areas and Light Grey for section backgrounds to create distinct visual grouping without heavy borders.

## Typography

**Manrope** is selected for its refined, modern characteristics that communicate both warmth and professionalism. The typeface scale is designed for high legibility across a range of users—from students on mobile devices to parents reviewing tutor profiles on desktop.

Hierarchy is established through substantial weight differences. Use Bold/ExtraBold for headings to project confidence and Regular/Medium for body copy to ensure a smooth reading experience. Headlines use a tighter letter-spacing to feel more compact and modern.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within a 1200px container, and a fluid 4-column grid for mobile. A strict 8px base-unit system ensures rhythmic consistency.

- **Margins:** 24px on mobile, scaled to 48px+ on desktop.
- **Gutter:** 24px to provide ample "air" between cards and content blocks.
- **Section Spacing:** 80px (xl) vertical padding between major landing page sections to maintain a clean, uncluttered professional look.

## Elevation & Depth

Visual hierarchy is managed through **Ambient Shadows** and tonal layering. This design system avoids harsh borders in favor of soft depth cues.

- **Level 1 (Subtle):** Used for static cards. A very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) helps separate elements from the Light Grey background.
- **Level 2 (Hover/Active):** When a user interacts with a card, the shadow tightens and deepens (0px 8px 30px rgba(0, 0, 0, 0.08)) to provide tactile feedback.
- **Tonal Layers:** High-priority cards (like "Featured Tutors") may use a White background on top of the Light Grey page background to create a natural "lift" without relying solely on shadows.

## Shapes

The shape language uses a **Rounded** philosophy (base 8px radius) to soften the formal nature of the Deep Blue color palette. This makes the interface feel more accessible and "warm" for an educational environment.

- **Cards:** 12px (rounded-lg) to create a friendly, modern container for tutor profiles and course info.
- **Buttons:** 8px (rounded-md) to maintain a professional, sturdy feel.
- **Input Fields:** 8px to match button styling for a cohesive form experience.
- **Badges/Chips:** Full pill-shape for "Verified" or "Subject" tags to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Deep Blue background with White text. Bold weight.
- **Secondary:** Success Green background with White text. Used for "Book Now" or "Start Free Trial."
- **Ghost:** Transparent with Deep Blue border. Used for "View Profile."

### Cards (Tutor Profiles)
Cards are the core of this design system. They must feature:
- Top-right corner: Success Green "Verified" badge with a checkmark icon.
- Top-left: A circular avatar with a 2px Deep Blue border.
- Bottom: A subtle 1px border-top (#E9ECEF) separating the tutor bio from the price/booking action.

### Trust Badges
Horizontal strips featuring logos of partner universities or "Safe & Secure" icons. Use grayscale versions of logos with 50% opacity to ensure they don't compete with primary branding.

### Input Fields
Large, accessible fields (48px height) with 16px horizontal padding. On focus, the border transitions from Light Grey to Deep Blue with a soft 2px glow.

### Subject Chips
Small, pill-shaped tags using a 10% tint of the Primary color for the background and the full-strength Primary color for text (e.g., "Mathematics", "Physics").
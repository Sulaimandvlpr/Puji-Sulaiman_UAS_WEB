---
name: Urban Verdant
colors:
  surface: '#fff8f6'
  surface-dim: '#f1d4cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#ffe9e4'
  surface-container-high: '#ffe2db'
  surface-container-highest: '#fadcd5'
  on-surface: '#271814'
  on-surface-variant: '#404943'
  inverse-surface: '#3e2c28'
  inverse-on-surface: '#ffede9'
  outline: '#707972'
  outline-variant: '#c0c9c1'
  surface-tint: '#31694c'
  primary: '#00331e'
  on-primary: '#ffffff'
  primary-container: '#0e4b31'
  on-primary-container: '#80ba99'
  inverse-primary: '#99d3b1'
  secondary: '#006d3b'
  on-secondary: '#ffffff'
  secondary-container: '#98f7b5'
  on-secondary-container: '#01743f'
  tertiary: '#242d2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a4344'
  on-tertiary-container: '#a6b0b0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4f0cc'
  primary-fixed-dim: '#99d3b1'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#165036'
  secondary-fixed: '#98f7b5'
  secondary-fixed-dim: '#7cda9b'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#00522b'
  tertiary-fixed: '#dae4e4'
  tertiary-fixed-dim: '#bec8c8'
  on-tertiary-fixed: '#141d1e'
  on-tertiary-fixed-variant: '#3f4949'
  background: '#fff8f6'
  on-background: '#271814'
  surface-variant: '#fadcd5'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Lexend
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is an intersection of Jakarta’s bustling metropolitan energy and a refined, lush botanical sanctuary. It caters to a trendy, youth-oriented demographic in Senopati who value both social status and "slow living" moments. 

The design style is **Modern Corporate with Glassmorphism accents**. It utilizes a clean, structured layout to maintain professionalism while layering frosted textures and soft depth to feel "fresh" and "vibrant." The aesthetic response should be one of premium comfort—evoking the feeling of a high-end greenhouse cafe.

Key visual principles:
- **Lush Sophistication:** Deep greens paired with crisp white surfaces.
- **Translucent Depth:** Use of glassmorphism for floating navigation and overlay elements to simulate light filtering through leaves.
- **Vibrant Energy:** High-quality photography featuring local Jakarta lifestyle and latte art, framed by generous whitespace.

## Colors
The palette is rooted in a "Deep Forest" theme tailored for an urban environment. 

- **Primary Green (#0E4B31):** Used for brand-heavy moments, primary buttons, and authoritative typography.
- **Secondary Green (#1E824C):** Used for interactive states, success messages, and accents that require more "pop" against the dark primary.
- **Background Canvas (#EAF4F4):** A cool, minty-tinted off-white that prevents the interface from feeling sterile.
- **Surface Card (#FFFFFF):** Pure white for elevated components to create clear separation from the canvas.
- **Text Dark Brown (#2B1B17):** A "Roasted Bean" alternative to pure black, providing softer contrast and a warmer, premium feel.

## Typography
The typography strategy pairs the geometric clarity of **Lexend** with the warm, contemporary proportions of **Be Vietnam Pro**.

- **Headings:** Lexend is used for all headings to provide a bold, trendy, and accessible look. Tighten letter spacing on larger display sizes for a high-end editorial feel.
- **Body:** Be Vietnam Pro offers exceptional readability for menus and descriptions, maintaining a friendly and modern tone.
- **Labels:** Use uppercase for `label-md` to create a structured, "menu-style" hierarchy for categories and metadata.

## Layout & Spacing
This design system utilizes a **fluid grid** with generous internal padding to reflect the spaciousness of the physical cafe.

- **Grid:** 12-column grid for desktop, 4-column grid for mobile.
- **Rhythm:** An 8px linear scale drives all spatial relationships.
- **Negative Space:** Use `spacing.xl` between major sections to emphasize the "Minimalist" aesthetic.
- **Mobile Adaptivity:** On mobile, horizontal margins shrink to `16px`, and vertical spacing between cards reduces to `12px` to ensure content density remains usable while on the go in Jakarta.

## Elevation & Depth
Hierarchy is established through **Ambient Shadows** and **Glassmorphism**.

- **Shadows:** Use large, ultra-soft shadows with a slight primary green tint (`rgba(14, 75, 49, 0.08)`) for cards. This creates a "floating" effect without harsh edges.
- **Glassmorphism:** Navigation bars and "floating" action buttons should use a backdrop blur (12px to 20px) with a semi-transparent white fill (opacity 70-80%). This allows the vibrant colors of food and drink photography to bleed through subtly.
- **Z-Index Tiers:** 
  - Level 0: Canvas (#EAF4F4)
  - Level 1: Cards (#FFFFFF) with soft shadows.
  - Level 2: Overlays and Glassmorphic headers.

## Shapes
The shape language is characterized by a "Large Radius" philosophy to evoke friendliness and modern comfort.

- **Standard Elements:** Buttons and input fields use a `0.5rem` (8px) radius.
- **Containers:** Product cards and image containers use `rounded-lg` (16px) or `rounded-xl` (24px) to emphasize the soft, "pillowy" aesthetic.
- **Icons:** Use icons with rounded terminals and a 2px stroke weight to match the weight of the Be Vietnam Pro typeface.

## Components
- **Buttons:** Primary buttons are Solid Primary Green with white text. Secondary buttons use a Glassmorphic style (blurred background) with Primary Green text.
- **Cards:** White surfaces with a `24px` corner radius. High-quality imagery should bleed to the top edges of the card.
- **Chips/Badges:** Used for coffee origins (e.g., "Aceh Gayo") or dietary tags (e.g., "Oat Milk"). Use Primary Green at 10% opacity with Primary Green text.
- **Input Fields:** Soft grey borders that transition to Secondary Green on focus, featuring an 8px corner radius.
- **Lists:** Clean, borderless list items separated by `1px` dividers in a very light tint of the Primary Green.
- **Bottom Sheet (Mobile):** For quick-adding coffee to a cart, use a rounded-top bottom sheet with a heavy backdrop blur.
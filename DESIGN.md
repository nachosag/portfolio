---
name: Cyber-Architect Terminal
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393d'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#2a292e'
  surface-container-highest: '#353439'
  on-surface: '#e5e1e7'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e5e1e7'
  inverse-on-surface: '#303034'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#ffb3b2'
  on-secondary: '#680012'
  secondary-container: '#ff525c'
  on-secondary-container: '#5b000f'
  tertiary: '#fff9ee'
  on-tertiary: '#373100'
  tertiary-container: '#f7df00'
  on-tertiary-container: '#6d6200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b2'
  on-secondary-fixed: '#410008'
  on-secondary-fixed-variant: '#92001e'
  tertiary-fixed: '#fde400'
  tertiary-fixed-dim: '#dec800'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#504700'
  background: '#131317'
  on-background: '#e5e1e7'
  surface-variant: '#353439'
  surface-bg: '#0d1120'
  ambient-purple: '#7b2ff7'
  grid-line: rgba(0, 245, 255, 0.03)
  terminal-green: '#00ff41'
typography:
  display-lg:
    fontFamily: Orbitron
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
  headline-h1:
    fontFamily: Orbitron
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-h1-mobile:
    fontFamily: Orbitron
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code-mono:
    fontFamily: Share Tech Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Share Tech Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  grid-size: 60px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a "High-Tech, High-Fidelity" philosophy tailored for a software engineering portfolio. It merges the raw, functional aesthetic of a developer terminal with the architectural precision of high-end software interfaces. The style is a refined interpretation of Cyberpunk—moving away from "neon-soaked chaos" toward a "Restrained Architectural Neon" approach. 

Key visual drivers include:
- **Technological Professionalism:** Using monospaced fonts and grid systems to signal engineering rigor.
- **Controlled Luminescence:** Utilizing glow effects and high-saturation accents against a deep, near-black void to create depth and focus.
- **Digital Tactility:** Incorporating subtle CRT scanlines and grid backgrounds to give the digital surface a physical, "hardware-level" presence.

## Colors
The palette is anchored in a "Deep Void" background to maximize the contrast of functional accents. 

- **Primary Cyan:** Used for interactive states, structural borders, and primary information pathways. It represents the "active" state of the system.
- **Secondary Magenta:** Reserved for critical alerts, high-impact branding moments, and specific call-to-action highlights.
- **Tertiary Yellow:** Utilized for warnings, code-level syntax highlighting, and "warning" style UI widgets.
- **Ambient Purple:** Used as a low-opacity glow or shadow tint to add depth to surfaces without breaking the dark-mode immersion.
- **Surface Elevation:** Backgrounds remain at the deepest black, while interactive surfaces use the slightly lighter navy-surface hex to distinguish them from the "void."

## Typography
The typographic hierarchy uses three distinct families to separate brand, content, and utility:

1.  **Display (Orbitron):** Used for site headings and major section titles. Must always be uppercase with increased letter spacing to emphasize the architectural feel.
2.  **Interface/Code (Share Tech Mono):** Used for navigation items, tags, data readouts, and actual code blocks. This anchors the design in the "terminal" aesthetic.
3.  **Content (Inter):** Used for long-form text and descriptions. Its neutrality ensures high readability against the more aggressive display fonts.

*Note: Orbitron is substituted for Space Grotesk in headings where Orbitron is unavailable, but for this system, Orbitron's geometric nature is the preferred lead.*

## Layout & Spacing
The layout is governed by a **Fixed/Fluid Hybrid Grid**. The foundational layer is a 60px visible grid pattern (3% opacity Cyan). 

- **Alignment:** All major UI components (Cards, Terminals) must snap to the 60px grid intersections.
- **Margins:** Desktop utilizes generous 80px side margins to create a "contained system" feel. Mobile collapses to 20px.
- **Scanlines:** A global overlay of subtle horizontal scanlines (1px height, 4px gap, 2% opacity) should be applied to the entire viewport to simulate a CRT monitor.

## Elevation & Depth
In this system, depth is conveyed through **Luminescence and Outlines** rather than traditional shadows.

- **The Glow Stack:** Instead of black shadows, use "Bloom" effects. Components at higher elevations emit a subtle #00f5ff outer glow (5-15px blur).
- **Surface Layering:** The primary background is #050508. Elevated cards use #0d1120. 
- **Borders as Depth:** A 1px solid Cyan border defines the edge of a component. For inactive or background elements, borders should drop to 10-20% opacity.

## Shapes
This system uses a **Sharp (0px)** roundedness philosophy. To reinforce the "architectural" and "terminal" vibe, all corners must remain perfectly square. 

- **Clipped Corners:** For decorative elements or primary buttons, use a 45-degree "stealth" clip (chamfer) on one or more corners (e.g., top-right and bottom-left) to evoke a military-industrial interface.

## Components

- **Terminal Widgets:** Rectangular containers with a header bar containing the "file name" in mono-caps. Must include a blinking block cursor (animation: pulse 1s infinite).
- **Interactive Cards:** #0d1120 background with a 1px #00f5ff border. On hover, the border opacity increases to 100%, and a 10px cyan "bloom" glow is applied.
- **Primary Buttons:** High-contrast Magenta (#ff003c) or Cyan (#00f5ff) fills with black text. Use the "Clipped Corner" shape. Text must be Share Tech Mono.
- **Inputs:** Simple underlined fields or 1px bordered boxes. The active input should have a "scanning" line animation (a horizontal line that moves vertically once upon focus).
- **Status Chips:** Small, square-cornered labels using Share Tech Mono. Use the Tertiary Yellow for "Warning" states and Primary Cyan for "Active" states.
- **Data Visualizers:** Use thin 1px lines for charts and graphs, avoiding solid area fills to maintain the "wireframe" aesthetic.
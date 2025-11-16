# Address Screen (figma_id: 226:68) — Implementation Design Notes

Source artifacts
- Screen YAML: /home/kavia/workspace/code-generation/attachments/screen_226:68.yaml
- Screen image: /home/kavia/workspace/code-generation/attachments/screen_226-68.png
- Exported figma raster: /assets/figmaimages/figma_image_226_68.png

Viewport/canvas
- Device frame: 375 x 812 (iPhone X/11/12 safe-area proportions)
- Background fill: solid white (#FFFFFF)

Overall layout model
- Layout method: Mobile-first, single column. Use flex column for main vertical flow; individual cards use grid for leading icon + texts + trailing actions.
- Safe area: 16px side margins for primary content blocks (cards and bottom CTA). Top bar sits flush with left margin of the circular back button (approx 16px inset).

Regions (vertical flow)
1) Header (Top) — y ≈ 12 from top of screen content, height 45
   - Back button: 45x45 circular, left aligned; contains chevron icon centered.
   - Title “My Address” aligned horizontally with back button center, baseline around 12px from circle top; appears as medium weight label.

2) Address cards list — two cards (“Home”, “Work”)
   - Each card: 327x101, rounded rectangle, light blue-gray background, subtle shadow.
   - Card internal structure: 3 columns grid:
     - Column A: 48x48 circular soft colored icon badge
     - Column B: Text stack: Title (Home/Work) then two-line address
     - Column C: Trailing actions: Edit pencil and Delete trash, aligned to top-right, 16px vertical spacing between if stacked; in design they appear horizontally separated but positioned near the top-right corner with small padding.

3) Bottom CTA button — 327x62, rounded pill with orange gradient/fill; centered horizontally, bottom spacing generous.

Precise element breakdown (from YAML coordinates; margins inferred to round to device pixels)
- Canvas: width 375, height 812

Header group “Top” (id 224:15)
- Frame dims: x -3349, y 4101 (absolute figma doc coords); size 152x45
- Back (id 224:16/17):
  - Ellipse 1294: 45x45 circle
  - Chevron icon: 5x10 centered within circle (approx left-pointing)
  - Visuals: subtle gray stroke/fill. Color estimate: #EDEFF3 circle with inner shadow; chevron #1F2937 at 60% opacity.
- Title “My Address”
  - Position relative to canvas: roughly center-left at x ≈ 61, y ≈ 26 (based on 16px left padding + circle space).
  - Typography: See Typography below.

Card 1: “Home” group (id 224:29)
- Card container: 327x101 rounded rect (Rectangle 1485, style_60)
  - X: 24 (computed from 375 - 327)/2 = 24px side margins
  - Y visual top ≈ 118 (in preview)
  - Fill: soft blue-tinted gray. Likely #F2F6FA with 8px corner radius. Very light shadow (0 2 8 rgba(0,0,0,0.06))
- Leading icon badge (Ellipse 1, id 226:270): 48x48 circle
  - Fill: pale cyan #E6F7FB
  - Inner icon (Group 8252) home glyph 18x20, stroke/fill cyan #5EC5DA
- Texts:
  - Title “Home” (style_50): 43x17; weight semibold
  - Address “2464 Royal Ln. Mesa, New Jersey 45463” (style_61): 233x34; two lines; color muted gray
- Trailing actions (top-right corner):
  - Edit icon group (id 226:75): 15.09x15.09; color orange #FF7A2F
  - Delete icon group (id 223:277): 14.11x15.68; color orange #FF7A2F (same hue)
  - Spacing between edit and delete approx 12px

Card 2: “Work” group (id 224:28)
- Card container: 327x101, same as Card 1
- Leading icon badge (Ellipse 1 id 226:234): 48x48 circle
  - Fill: pale lavender #F1E9FF
  - Office building icon (Group 8254) 20x18; violet #9B7BFF
- Texts:
  - Title “Work”
  - Address “3891 Ranchview Dr. Richardson, California 62639”
- Trailing actions (id 226:80):
  - Edit icon same size/color as above
  - Delete icon group present (id 223:279)

Bottom CTA “Add new address” (id 224:2)
- Background Rectangle 1571: 327x62
- Text “Add new address”: centered
- Fill: bright orange #FF7A2F with subtle glossy gradient; white text

Color tokens (root CSS variables; derived from screenshot + YAML icons)
- --bg-canvas: #FFFFFF
- --text-primary: #111827
- --text-secondary: #6B7280
- --muted: #9CA3AF
- --card-bg: #EEF3F7
- --badge-home-bg: #E6F7FB
- --badge-home-fg: #5EC5DA
- --badge-work-bg: #F1E9FF
- --badge-work-fg: #9B7BFF
- --accent: #FF7A2F
- --accent-pressed: #F2681E
- --icon-neutral: #A1A1AA
- --divider: rgba(0,0,0,0.06)
Note: Values are best approximations; refine using design tokens if available.

Typography (assume “Helvetica Neue, Arial, sans-serif”)
- Title “My Address”
  - Font: 18–20px, weight 600, letter-spacing: 0, color: #1F2937
- Card title (“Home”, “Work”)
  - Font: 14–16px, weight 600, line-height 20, color: var(--text-primary)
- Address lines
  - Font: 12–13px, weight 400, line-height 17–18, color: var(--text-secondary)
- CTA button label
  - Font: 14–16px, weight 600, uppercase: none, letter-spacing: 0.2px, color: white

Spacing and radii
- Page side margins: 24px to align 327px-wide components within 375px canvas
- Vertical spacing:
  - Header bottom to first card: 24px
  - Between cards: 16px
  - Card internal:
    - Card padding: 16px all around
    - Icon badge to text stack gap: 12px
    - Title to address: 4px
  - Bottom CTA top margin: 40px
  - Bottom safe area padding (below CTA): 24px
- Border radius:
  - Cards: 16px
  - Icon badges: 24px (fully circular)
  - Back button: 22.5px (circular)
  - CTA button: 16px

Interactive elements
- Back button (tap target 44x44)
- Edit and Delete icon buttons per card (tap target min 32x32 but visually 15–16px icons; add invisible hit area)
- Bottom CTA button (327x62)
- All interactive items get active states (pressed opacity 0.8) and focus rings for web: outline: 2px solid rgba(255,122,47,0.4)

Layout hierarchy (DOM outline)
- header.header
  - button.back
    - span.icon.chevron-left (SVG)
  - h1.title “My Address”
- main.list
  - article.card[data-type="home"]
    - div.badge > svg.home
    - div.content
      - h2.card-title “Home”
      - p.address-lines
    - div.actions
      - button.icon.edit > svg
      - button.icon.delete > svg
  - article.card[data-type="work"]
    - div.badge > svg.office
    - div.content
      - h2.card-title “Work”
      - p.address-lines
    - div.actions
      - button.icon.edit > svg
      - button.icon.delete > svg
- footer.cta
  - button.primary “Add new address”

Accessibility
- Titles are headings (h1, h2)
- Address text as <address> or <p role="text">; ensure readable contrast
- Buttons have aria-labels: “Back”, “Edit home address”, “Delete home address”, etc.

Responsive behavior
- Mobile baseline: 375px width
- Up to 480px: keep 24px side margins; components scale to container width minus margins
- >= 768px: center column within max-width: 420px; increase card horizontal padding to 20px

Assets required from figmaimages/ (exact paths from YAML)
- /assets/figmaimages/figma_image_226_68.png — screen raster (reference only)
- /assets/figmaimages/figma_image_226_285.svg — delete icon vector (card 1)
- /assets/figmaimages/figma_image_226_270.svg — home badge circle (can be recreated via CSS but included)
- /assets/figmaimages/figma_image_226_289.svg — home glyph
- /assets/figmaimages/figma_image_226_76.svg — edit icon vector (card 1)
- /assets/figmaimages/figma_image_226_77.svg — edit overlay vector (card 1)
- /assets/figmaimages/figma_image_224_18.svg — back button circle
- For “Work” card:
  - /assets/figmaimages/figma_image_226_253.svg — office building bottom
  - /assets/figmaimages/figma_image_226_254.svg — office building tower
Note: Some vector layers for delete icon and others may be simple lines without exported images in YAML; where imagePath is missing, we will recreate with inline SVG.

Exact positions and sizes (relative within 375x812 canvas)
- Header:
  - Back button: left: 16px; top: 12px; size: 45x45; chevron 5x10 centered
  - Title: left: 16px + 45 + 16 = 77px; top: 20px; height: 22px
- Card 1 container: left: 24px; top: 118px; width: 327px; height: 101px
  - Card padding: 16px; internal grid columns: [48px, 1fr, auto], gap: 12px
  - Title: top within card: 16px; font 16px
  - Address: top: 16 + 20 + 4 = 40px; width ~233px
  - Actions: top: 16px; right: 16px; icons 15–16px; horizontal gap: 12px
- Card 2 container: left: 24px; top: 118 + 101 + 16 = 235px; width: 327px; height: 101px
  - Same internal metrics as card 1
- CTA Button: left: 24px; bottom: 24px; width: 327px; height: 62px; label centered

Shadows (approx)
- Cards: box-shadow: 0 4px 12px rgba(17, 24, 39, 0.06)
- Back circle: inset 0 0 0 1px rgba(0,0,0,0.04)
- CTA: 0 10px 20px rgba(255, 122, 47, 0.25)

States
- Hover/focus: raise shadow; outline for accessibility; buttons darken: background var(--accent-pressed)
- Delete icon hover: color darkens to #E05600

Implementation notes
- Use CSS variables for theme
- Use grid layout for card internal; ensure icon buttons have 32x32 hit areas using padding
- Use inline SVGs for chevron, edit, and delete when no external paths are provided for all layers


# UI Context

## Theme

Noodle Theory should feel like a modern, high-energy ramen shop. The visual language is warm, bold, flavorful, and professional. The page should use rich noodle-broth colors, clean cards, strong typography, and mobile-first spacing.

The design should feel like a real restaurant landing page, not a generic template.

## Visual Direction

- Warm ramen-shop atmosphere.
- Modern editorial layout.
- Large hero headline.
- Food-focused colors.
- Rounded cards.
- Strong CTA buttons.
- Clean mobile scrolling experience.
- Sera-inspired feeling: stylish, soft, polished, and premium.

## Colors

Use semantic color tokens where possible. If the project uses shadcn CSS variables, map these ideas into the existing theme variables.

| Role | CSS Variable | Suggested Value | Usage |
| --- | --- | --- | --- |
| Page background | `--background` | `#fff7ed` | Warm cream background |
| Foreground text | `--foreground` | `#24140f` | Main text |
| Primary | `--primary` | `#c2410c` | Order Now button and main accents |
| Primary foreground | `--primary-foreground` | `#ffffff` | Text on primary buttons |
| Secondary | `--secondary` | `#fed7aa` | Soft orange surfaces |
| Secondary foreground | `--secondary-foreground` | `#431407` | Text on secondary surfaces |
| Muted | `--muted` | `#ffedd5` | Section backgrounds |
| Muted foreground | `--muted-foreground` | `#7c2d12` | Supporting text |
| Border | `--border` | `#fdba74` | Soft borders |
| Card | `--card` | `#ffffff` | Menu cards |
| Card foreground | `--card-foreground` | `#24140f` | Text inside cards |
| Accent | `--accent` | `#f97316` | Badges and highlights |
| Accent foreground | `--accent-foreground` | `#ffffff` | Text on accent elements |

## Typography

| Role | Recommendation |
| --- | --- |
| Headline | Large, bold, tight tracking |
| Body | Clean, readable sans-serif |
| Menu item names | Semibold or bold |
| Prices | Bold and easy to scan |
| Small labels | Uppercase or badge style |

Use the project default font unless Sera or another selected font is configured. Keep the typography simple and readable.

## Border Radius

| Context | Class |
| --- | --- |
| Buttons | `rounded-full` or `rounded-xl` |
| Menu cards | `rounded-2xl` |
| Large panels | `rounded-3xl` |
| Badges | `rounded-full` |
| Map placeholder | `rounded-3xl` |

## Component Library

Use shadcn/ui with the Base style.

Recommended components:

- `Button`
- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `Badge`
- `Separator`

Do not overuse components if plain semantic HTML is simpler.

## Layout Patterns

### Page

- Single-page landing layout.
- Centered max-width container.
- Clear vertical sections.
- Strong spacing between sections.

### Hero

- Full-width warm background.
- Large headline.
- CTA buttons.
- Optional decorative ramen bowl card or gradient visual.
- Mobile: text first, visual below or hidden if space is tight.
- Desktop: two-column layout.

### Menu

- Responsive grid.
- Mobile: one column.
- Tablet: two columns.
- Desktop: three or four columns if space allows.
- Each menu item should show name, description, and price.

### Location

- Two-column desktop layout.
- Address and details on one side.
- Map-style card on the other side.
- Mobile: stack vertically.

### Contact / CTA

- Strong final section.
- Clear hours, phone, and button.
- Keep it easy to scan on mobile.

## Icons

Use Lucide React if icons are installed.

Recommended icons:

- MapPin
- Clock
- Phone
- Utensils
- Flame
- Star

Icon sizes:

- Inline icons: `h-4 w-4`
- Button icons: `h-4 w-4`
- Feature icons: `h-5 w-5` or `h-6 w-6`

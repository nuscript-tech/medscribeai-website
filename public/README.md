# Assets to add

Drop these files in to complete the site. The code already references them.

## Logos (this folder — `public/`)

| File | Used in | Notes |
|------|---------|-------|
| `medscribe-logo.png` | Navbar (white background) | Dark/color version of the logo. Recommended height ~32px (displayed at `h-8`), so export at 2x (~64px tall) for retina. Transparent PNG. |
| `medscribe-logo-white.png` | Footer (dark navy background) | White/light version of the same logo, same dimensions. Transparent PNG. |

These are the same filenames the previous site used, so if you still have those
exports you can reuse them directly.

## Favicon (place in the `app/` folder, NOT here)

Next.js App Router auto-detects favicons placed in `app/`:

- `app/favicon.ico` — classic favicon, OR
- `app/icon.png` — modern icon (Next generates the right tags automatically)

No `<link rel="icon">` tag is needed; Next handles it.

## If a logo file is missing

The site still builds and runs — the `<img>` simply shows the alt text
("MedScribeAI") until the file is added. So you can deploy first and add
polished logos later without breaking anything.

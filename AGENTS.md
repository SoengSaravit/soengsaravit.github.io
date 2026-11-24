# Repository guide

## Website overview

This repository contains Saravit Soeng’s personal research portfolio at [www.soengsaravit.com](https://www.soengsaravit.com).

The site uses static HTML, CSS, and JavaScript. No installation or build step is required. It uses Google Fonts (DM Sans and Manrope) with sans-serif fallbacks and no JavaScript libraries. Research illustrations use SVG and CSS.

## Website structure

- `index.html`: page metadata, biography, research, experience, education, skills, contact details, and profile links. An inline script in the document head handles refresh behavior.
- `css/portfolio.css`: colors, typography, component styles, layout, and responsive breakpoints.
- `js/portfolio.js`: mobile navigation, active section tracking, research filters, and footer year.
- `images/saravit-portrait.webp`: optimized profile portrait. Original photos remain in `images/`.
- `images/research-iot.svg`, `images/research-address.svg`, and `images/research-voting.svg`: project illustrations. The other research illustrations are defined in `index.html` and styled in `css/portfolio.css`.
- `images/favicon.svg`: site icon.
- `CNAME`: custom domain configuration.

The page sections are About (`#hero`), Research, Experience, Education, Technical skills, and Contact.

## Local preview

From the repository root, run:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Editing and behavior

- Keep content and navigation available when JavaScript is disabled.
- Refreshing the page starts at the hero section. Opening a direct section link still follows its anchor. Preserve this distinction when editing the inline initialization script.
- Section navigation uses browser history. Active navigation follows the visible section.
- The mobile navigation breakpoint is defined in both CSS and `js/portfolio.js`; keep them synchronized.
- Research filters update the visible cards, pressed state, and accessible project count.
- CSS and JavaScript URLs in `index.html` include `?v=...` cache versions. When changing a linked stylesheet or script, update its version to the first 10 lowercase characters of that file’s SHA-256 hash.
- External links that open a new tab use `rel="noopener noreferrer"` and an accessible new-tab notice.

## Verification

For JavaScript changes, check syntax:

```sh
node --check js/portfolio.js
```

Check inline JavaScript syntax separately when changing the script in `index.html`.

For visual or navigation changes, preview relevant sections on desktop, tablet, and mobile, including narrow phones. Check text wrapping, horizontal overflow, menu behavior, keyboard focus, research filters, section anchors, and refresh behavior as applicable.

Run `git diff --check` before finishing changes.

# Saravit Soeng — Personal Website

Personal research portfolio for Saravit Soeng, Ph.D., Applied AI Researcher.

Website: [www.soengsaravit.com](https://www.soengsaravit.com)

## Local preview

From the repository root, run:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). No install or build step is required.

## Editing

- `index.html`: biography, research, experience, education, skills, and profile links.
- `css/portfolio.css`: colors, typography, layout, and responsive breakpoints.
- `js/portfolio.js`: mobile navigation, active section tracking, research filters, and footer year.
- `images/saravit-portrait.webp`: optimized portrait; the original photos remain in `images/`.

Research illustrations use inline SVG and CSS. The page uses Google Fonts with sans-serif fallbacks and no JavaScript libraries. Content and navigation remain available when JavaScript is disabled.

CSS and JavaScript URLs in `index.html` include `?v=...` versions. Update these values when publishing stylesheet or script changes so returning visitors receive the latest files.

To check the JavaScript syntax:

```sh
node --check js/portfolio.js
```

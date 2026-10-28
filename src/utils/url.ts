/**
 * GitHub Pages project sites are served from a sub-path (e.g. /fullstack-portfolio/),
 * so every internal link and public asset URL must be prefixed with the base.
 *
 * NOTE: Astro's BASE_URL does not guarantee a trailing slash, so normalise it
 * to avoid producing URLs like "/fullstack-portfoliofavicon.svg".
 */
const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase; // "/fullstack-portfolio" or ""

/** Prefix an internal path with the configured Astro base. */
export function withBase(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}


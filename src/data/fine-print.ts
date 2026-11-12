// Fine Print — the footer's policy links (Nov 2026, January enrollment).
// One list, read by the Closing footer. Each policy page is linked from
// outside the site too (enrollment emails, Sawyer checkout), so an `href`
// here is a public contract: never rename one without a redirect in
// vercel.json.
//
// `published: false` keeps a link out of the footer while its page is still
// a draft. Publishing a page is two steps, done together:
//   1. rename its file in src/pages to drop the leading underscore
//      (Astro skips `_`-prefixed files, so the draft has no live URL);
//   2. flip `published` to true here.
export interface FinePrintLink {
  label: string;
  href: string;
  published: boolean;
}

export const FINE_PRINT: FinePrintLink[] = [
  { label: 'Cancellation Policy', href: '/cancellation-policy', published: true },
  // Draft: src/pages/_family-handbook.astro. Copy waits on cohort dates/times.
  { label: 'Family Handbook', href: '/family-handbook', published: false },
];

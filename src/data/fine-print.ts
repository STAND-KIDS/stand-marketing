// Footer "For Family" column (named Fine Print until Nov 26 2026; the
// file and FINE_PRINT keep the old name). The policy links for families.
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
  // Live at /family-guide but deliberately NOT in the footer (Nov 26 brief:
  // "keep it out of navigation and the footer so we can share the link as
  // needed"). To list it under For Family, flip this to true and drop
  // `noindex` in src/pages/family-guide.astro.
  { label: 'Family Guide', href: '/family-guide', published: false },
];

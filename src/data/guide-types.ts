// Content shape for the site's long-form family pages (Family Guide,
// Cancellation and Refund Policy). Data files describe sections and blocks;
// src/layouts/GuidePage.astro decides how they look, so every page in this
// family shares one design.
//
// `html` strings are rendered with set:html so a few can carry links. That
// is only safe because every string is written by us in this repo. Never
// feed visitor- or API-supplied text into these lists.

/** A paragraph; `lead` is a bold lead-in sentence shown before `html`. */
export interface ParagraphBlock {
  kind: 'p';
  lead?: string;
  html: string;
}

/** A bulleted list; each item may have a bold `lead`. */
export interface ListBlock {
  kind: 'list';
  items: { lead?: string; html: string }[];
}

/** A sign-off (name over role), e.g. under the founder's welcome note. */
export interface SignoffBlock {
  kind: 'signoff';
  name: string;
  role: string;
}

export type GuideBlock = ParagraphBlock | ListBlock | SignoffBlock;

export interface GuideSection {
  /** Stable anchor id (e.g. /family-guide#drop-off). Don't rename: shared links use them. */
  id: string;
  title: string;
  blocks: GuideBlock[];
}

/** Per-section presentation. Sections not listed are cream, plain body. */
export interface SectionLook {
  ground: 'cream' | 'green';
  /** Set the section's first paragraph as a large Editorial New line. */
  statement?: boolean;
  /** Hide the section title visually (kept for screen readers and the
   *  #anchor); the body sits in the text column with no title beside it. */
  hideTitle?: boolean;
  /** Set the section as a letter: a sheet of stationery with serif type
   *  and a handwritten signature over the sign-off.
   *  The sheet spans the full content width instead of the text column. */
  letter?: boolean;
}

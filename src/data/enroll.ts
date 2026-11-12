// Enrollment destination — Sawyer (Nov 2026, January Santa Monica cohorts).
// Every "Enroll now" on the site, the FAQ's enroll link, and the nav's
// "Sign up" read ENROLL_HREF from here. The old /enroll flow is retired for
// January and must not be linked.
//
// Paste the Sawyer enrollment URL below when STAND sends it.
export const SAWYER_ENROLL_URL = '';

// Until the URL is set, links point at an inert in-page hash: local dev and
// Vercel preview deploys still build, so the copy can be reviewed. A
// PRODUCTION build stops here instead, so the site can never go live with
// enroll buttons that lead nowhere. (This module runs at build time only,
// in Node, which is why process.env is readable.)
if (!SAWYER_ENROLL_URL && process.env.VERCEL_ENV === 'production') {
  throw new Error(
    'SAWYER_ENROLL_URL is empty in src/data/enroll.ts. Paste the Sawyer link before deploying to production.',
  );
}

export const ENROLL_HREF = SAWYER_ENROLL_URL || '#sawyer-link-pending';

// Cancellation and Refund Policy — final copy, Nov 2, 2026. Rendered by
// src/pages/cancellation-policy.astro through GuidePage (same design as the
// Family Guide). Linked from the footer, the enrollment emails and Sawyer
// checkout, so the URL (/cancellation-policy) must not change. When the copy
// changes, update POLICY_UPDATED in the same commit.
import type { GuideSection } from './guide-types';

export const POLICY_TITLE = 'Cancellation and Refund Policy';
/** ISO date the copy last changed; shown as "Last updated …". */
export const POLICY_UPDATED = '2026-11-02';

export const POLICY: GuideSection[] = [
  {
    id: 'deposit',
    title: 'Deposit',
    blocks: [
      {
        kind: 'p',
        html: "The $100 deposit holds your child's seat in our cohort, goes toward tuition, and is non-refundable.",
      },
    ],
  },
  {
    id: 'before-the-cohort-starts',
    title: 'Before the cohort starts',
    blocks: [
      {
        kind: 'list',
        items: [
          { html: 'The balance of tuition is charged 14 days before the first session.' },
          { html: "If you cancel more than 14 days before the first session, you won't be charged the balance." },
          { html: 'If you cancel within 14 days of the first session, the balance is non-refundable.' },
        ],
      },
    ],
  },
  {
    id: 'after-the-cohort-starts',
    title: 'After the cohort starts',
    blocks: [
      {
        kind: 'list',
        items: [
          { html: 'Once the program begins, there are no refunds.' },
          { html: 'Rather than cancel, you can move to a future STAND cohort if a seat is open.' },
        ],
      },
    ],
  },
  {
    id: 'missed-sessions',
    title: 'Missed sessions',
    blocks: [
      {
        kind: 'p',
        html: "We don't refund, credit, or offer make-ups for missed sessions. When possible, we'll send a recap so your child can catch up.",
      },
    ],
  },
  {
    id: 'if-stand-cancels-a-session',
    title: 'If STAND cancels a session',
    blocks: [
      {
        kind: 'p',
        html: "We'll schedule a make-up session for your child. If we can't, we'll refund that session.",
      },
    ],
  },
  {
    id: 'if-stand-cancels-the-cohort',
    title: 'If STAND cancels the cohort before it starts',
    blocks: [
      {
        kind: 'p',
        html: "You'll get a full refund, including your deposit, or you can move to a future cohort.",
      },
    ],
  },
  {
    id: 'how-to-cancel',
    title: 'How to cancel',
    blocks: [
      {
        kind: 'p',
        html: 'Email <a href="mailto:hello@standkids.com">hello@standkids.com</a>. Cancellations count from the date we receive your email.',
      },
    ],
  },
];

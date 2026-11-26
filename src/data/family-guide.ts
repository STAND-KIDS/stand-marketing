// STAND Family Guide copy — the single source for /family-guide and its
// design protos (/proto/family-guide-b, /proto/family-guide-c). Pages decide
// how it looks; this file decides what it says. Edit copy here only.
//
// Final copy from the Nov 26 2026 brief, with two deliberate changes:
//   - Phone: the brief says to use Lauren's urgent number for now, so
//     URGENT_PHONE replaces the 310 number in the pasted copy. When the space
//     has its own STAND number, change it here.
//   - "Read the full Cancellation and Refund Policy" links to the live page,
//     not the Google Doc.
//
// `html` strings are rendered with set:html so a few can carry links. That
// is only safe because every string here is written by us in this file.
// Never feed visitor- or API-supplied text into this list.

export const EMAIL = 'hello@standkids.com';
export const URGENT_PHONE = { label: '646-522-9433', href: 'tel:+16465229433' };

const email = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;
const phone = `<a href="${URGENT_PHONE.href}">${URGENT_PHONE.label}</a>`;

export const GUIDE_TITLE = 'STAND Family Guide';

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

/** The founder's sign-off under the welcome note. */
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

export const GUIDE: GuideSection[] = [
  {
    id: 'welcome',
    title: 'Welcome',
    blocks: [
      {
        kind: 'p',
        html: 'Welcome to STAND! I’m so excited for your kids to join us and see what they create.',
      },
      {
        kind: 'p',
        html: `This guide covers everything you need to know before getting started, from drop-off and pickup to what to bring and how we work together. If you have any questions, just email us at ${email}.`,
      },
      { kind: 'signoff', name: 'Lauren Kassan', role: 'Founder & CEO' },
    ],
  },
  {
    id: 'what-stand-is',
    title: 'What STAND Is',
    blocks: [
      {
        kind: 'p',
        html: 'STAND is the modern-day lemonade stand. Entrepreneurship is the vehicle, but what kids learn along the way is what matters most.',
      },
      {
        kind: 'p',
        html: 'Over eight weeks, kids ages 8–13 take an idea and turn it into something real. They’ll learn to think for themselves, make decisions, work with others, solve problems, and figure things out as they go.',
      },
      {
        kind: 'p',
        html: 'We wrap up with Pitch Night, where every kid gets to share what they’ve built with family, friends, and guests.',
      },
    ],
  },
  {
    id: 'before-the-first-session',
    title: 'Before the First Session',
    blocks: [
      {
        kind: 'p',
        html: 'Please complete your child’s profile in Sawyer, including allergies and medical needs, emergency contacts, and the names of all adults authorized to pick them up. You’ll also need to sign the waiver and choose your photo preferences.',
      },
      {
        kind: 'p',
        html: 'The remaining tuition balance is charged 14 days before the first session.',
      },
    ],
  },
  {
    id: 'drop-off',
    title: 'Drop-Off and Pickup',
    blocks: [
      {
        kind: 'p',
        html: 'STAND is a drop-off program. Please walk your child in and check in with a team member.',
      },
      {
        kind: 'p',
        html: 'Only adults on your pickup list can collect your child. We’ll check their ID the first time we meet them. If someone else needs to pick up your child for a particular session, email us ahead of time.',
      },
      {
        kind: 'p',
        html: 'All kids must leave with an authorized adult. No one can leave alone, walk home, or take a rideshare, regardless of age.',
      },
      {
        kind: 'p',
        html: `Running late? Call ${phone} so we can let your child know.`,
      },
      {
        kind: 'p',
        html: 'After a 10-minute grace period, late pickups cost $1 per minute. This helps cover the cost of having a team member stay with your child until you arrive.',
      },
    ],
  },
  {
    id: 'what-to-bring',
    title: 'What to Bring',
    blocks: [
      {
        kind: 'p',
        html: 'A water bottle and a willingness to try things! We’ll provide all the materials kids need to create their projects.',
      },
      {
        kind: 'p',
        html: 'Please leave valuables at home. Personal devices aren’t allowed during sessions and should stay in backpacks.',
      },
    ],
  },
  {
    id: 'values',
    title: 'How We Work at STAND',
    blocks: [
      { kind: 'p', html: 'Five values guide everything we do at STAND.' },
      {
        kind: 'list',
        items: [
          { lead: 'Say What You Think.', html: 'Speak up. Give honest feedback, and be kind about it.' },
          { lead: 'Make Something Real.', html: 'An idea becomes something more when you bring it to life.' },
          { lead: 'Figure It Out.', html: 'Get stuck, try again, and ask for help when you need it.' },
          { lead: 'Build With Other People.', html: 'Your cohort is your team. Make something better together.' },
          { lead: 'Own It.', html: 'Take responsibility for your work, your mistakes, and your wins.' },
        ],
      },
    ],
  },
  {
    id: 'parents',
    title: 'What We Ask of Parents',
    blocks: [
      {
        kind: 'p',
        lead: 'Let your kid take the lead.',
        html: 'Cheer them on, ask questions, and give them room to figure things out on their own. The messy parts are often where the best learning happens.',
      },
      {
        kind: 'p',
        lead: 'Join us for Pitch Night.',
        html: 'It’s a chance to celebrate what the kids have created and everything they’ve learned along the way.',
      },
      {
        kind: 'p',
        lead: 'If something doesn’t feel right, tell us early.',
        html: 'We want every kid to feel comfortable, supported, and excited to be here.',
      },
    ],
  },
  {
    id: 'when-things-go-sideways',
    title: 'When Things Go Sideways',
    blocks: [
      {
        kind: 'p',
        html: 'Sometimes things don’t go as planned. When they don’t, we’ll work through it together.',
      },
      {
        kind: 'list',
        items: [
          { html: 'A team member will step in and help redirect things in the moment.' },
          { html: 'If needed, we’ll have a one-on-one conversation with your child.' },
          { html: 'If the issue continues, we’ll talk with you about what’s going on.' },
          {
            html: 'If someone’s safety is at risk, we’ll ask you to pick up your child that day. Repeated safety issues may mean ending their enrollment.',
          },
        ],
      },
      {
        kind: 'p',
        html: 'Bullying, harassment, and physical aggression aren’t tolerated at STAND. These behaviors may result in removal from the program, with no refund.',
      },
    ],
  },
  {
    id: 'health-and-safety',
    title: 'Health and Safety',
    blocks: [
      {
        kind: 'p',
        html: 'Every session has two adults: a lead instructor running the room and a team member supporting check-in, pickup, and anything the kids need. Everyone who works with our kids must pass a fingerprint background check.',
      },
      {
        kind: 'p',
        html: 'Please keep your child home if they’ve had a fever, been vomiting, or had a contagious illness within the past 24 hours.',
      },
      {
        kind: 'p',
        html: 'We don’t administer medication except for an EpiPen or inhaler you provide, with a signed form.',
      },
      { kind: 'p', html: 'In an emergency, we’ll call 911 first, then contact you.' },
    ],
  },
  {
    id: 'photos',
    title: 'Photos',
    blocks: [
      {
        kind: 'p',
        html: 'When you enroll, you’ll choose whether we’re allowed to share your child’s photos and work on STAND’s channels. We use first names only and never identify a child’s school.',
      },
      {
        kind: 'p',
        html: 'If we want to share something with the press, we’ll ask your permission separately each time. You can change your photo preferences at any point by emailing us.',
      },
    ],
  },
  {
    id: 'tuition-and-refunds',
    title: 'Tuition and Refunds',
    blocks: [
      {
        kind: 'p',
        html: 'A $100 deposit holds your child’s spot and goes toward tuition. The remaining balance is charged 14 days before the first session.',
      },
      {
        kind: 'p',
        html: 'If you cancel more than 14 days before the first session, you won’t be charged the remaining balance. Cancellations within 14 days are non-refundable, and we can’t offer refunds once the program begins.',
      },
      {
        kind: 'p',
        html: 'If your plans change, you can move to a future STAND cohort, as long as a seat is available. We don’t refund or make up missed sessions, but we’ll send you a recap of what your child missed.',
      },
      {
        kind: 'p',
        html: 'Read the full <a href="/cancellation-policy">Cancellation and Refund Policy</a>.',
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    blocks: [
      {
        kind: 'p',
        html: 'We’ll send a weekly email with an update on what the kids have been working on and creating.',
      },
      {
        kind: 'p',
        html: `Have a question? Email ${email}, and we’ll get back to you within one business day. If you need to reach us urgently during a session, call ${phone}.`,
      },
    ],
  },
];

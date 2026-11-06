export interface Faq {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'Does Slim’s Painting provide free estimates for their painting and home renovation services?',
    answer:
      'Yes — we provide free, no-obligation estimates for all painting and renovation services. Text or call us to schedule a walkthrough.',
  },
  {
    question: 'What sets Slim’s Painting apart from other painting and home renovation service companies?',
    answer:
      'We combine meticulous prep, premium paints, clear communication, and clean job sites. Every evening you get a video update of progress.',
  },
  {
    question: 'What types of services does Slim’s Painting offer for home renovation projects?',
    answer:
      'Interior painting, exterior painting, kitchen and cabinet refinishing, drywall repair, residential painting, commercial painting, deck staining, and wallpaper removal.',
  },
  {
    question: 'How long does a typical interior painting project take?',
    answer:
      'Most single-room projects take 1-2 days. Whole-home interiors typically take 1-2 weeks depending on size and prep needed.',
  },
  {
    question: 'Do you offer a warranty on your work?',
    answer:
      'Yes — we stand behind our work with a satisfaction guarantee. If anything isn\'t right, we come back and make it right.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, we are fully licensed and insured for both residential and commercial painting work.',
  },
]

export function getAllFaqs(): Faq[] {
  return FAQS
}

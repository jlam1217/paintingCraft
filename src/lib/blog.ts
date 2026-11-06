export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
  author: string
}

import { ADDITIONAL_POSTS } from '@/lib/data/blog-posts'

export const BLOG_POSTS: BlogPost[] = [
  ...ADDITIONAL_POSTS,
  {
    slug: 'choosing-right-paint-colors',
    title: 'Choosing the Right Paint Colors for Your Home',
    excerpt: 'A guide to selecting paint colors that complement your space, lighting, and personal style.',
    content: `
      <p>Choosing paint colors can feel overwhelming. With thousands of options available, how do you know which shade will work in your space?</p>
      <p>Start by considering the room's purpose. Bedrooms benefit from calming, cool tones like soft blues or sage greens. Living rooms can handle warmer, more energetic colors like terracotta or golden yellow.</p>
      <p>Lighting plays a crucial role. Natural light changes throughout the day, so always test paint samples on your walls at different times before committing.</p>
      <p>Our color consultation service helps you navigate these choices with confidence.</p>
    `,
    date: '2025-01-15',
    category: 'Color Consultation',
    image: '/assets/paint-brushes-30804.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'exterior-painting-prep-guide',
    title: 'Exterior Painting Preparation: A Step-by-Step Guide',
    excerpt: 'Proper surface preparation is the secret to a long-lasting exterior paint job. Learn our proven process.',
    content: `
      <p>A beautiful exterior paint job starts long before the first brush stroke. Preparation accounts for 80% of the work—and 100% of the durability.</p>
      <p>Our process begins with a thorough inspection. We check for peeling paint, wood rot, and caulking failures. Every issue gets documented and addressed.</p>
      <p>Next comes cleaning. Power washing removes dirt, mildew, and chalky residue that would prevent proper adhesion.</p>
      <p>We then scrape and sand loose paint, prime bare surfaces, and caulk all gaps and seams. Only then do we apply paint.</p>
      <p>The result? A finish that looks great and protects your home for years.</p>
    `,
    date: '2025-02-10',
    category: 'Exterior Painting',
    image: '/assets/paint-roller-23956075297.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'cabinet-refinishing-vs-replacement',
    title: 'Cabinet Refinishing vs. Replacement: Which Is Right for You?',
    excerpt: 'Compare the costs, timeline, and results of refinishing your kitchen cabinets versus replacing them entirely.',
    content: `
      <p>Kitchen cabinets define the look of your space. When they start showing their age, you have two choices: refinish or replace.</p>
      <p>Refinishing costs a fraction of replacement and typically takes 3-5 days versus weeks for new cabinets. You keep your existing layout and hardware while getting a fresh, modern look.</p>
      <p>Replacement makes sense if your cabinets are structurally damaged or you want a completely different layout. But for most homeowners, refinishing delivers 90% of the impact at 30% of the cost.</p>
      <p>Our cabinet refinishing process includes thorough cleaning, sanding, priming, and two coats of durable enamel paint.</p>
    `,
    date: '2025-03-05',
    category: 'Cabinet Refinishing',
    image: '/assets/tray-brush-roller-paint-4116925693.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'deck-staining-maintenance',
    title: 'Deck Staining Maintenance: How Often Should You Restain?',
    excerpt: 'Keep your deck looking great and protected from the elements with a regular staining schedule.',
    content: `
      <p>Your deck takes a beating from sun, rain, and foot traffic. Regular staining protects the wood and keeps it looking beautiful.</p>
      <p>Most decks need restaining every 2-3 years, depending on exposure and foot traffic. Signs it's time include faded color, water no longer beading, and visible wear on high-traffic areas.</p>
      <p>Our deck staining process includes cleaning, sanding rough spots, and applying a penetrating stain that protects without peeling.</p>
      <p>Regular maintenance extends your deck's life by years and saves thousands in replacement costs.</p>
    `,
    date: '2025-04-01',
    category: 'Deck Staining',
    image: '/assets/painter-paints-a-room-arp.jpg',
    author: 'BrushStroke Pro Team',
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

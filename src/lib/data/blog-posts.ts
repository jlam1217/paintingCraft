import { BlogPost } from '@/lib/blog'

// Additional blog posts for the modernized site
export const ADDITIONAL_POSTS: BlogPost[] = [
  {
    slug: 'interior-painting-cost-guide',
    title: 'How Much Does Interior Painting Cost? A 2025 Guide',
    excerpt: 'Breaking down the real costs of interior painting — room by room, with factors that affect pricing.',
    content: `
      <p>Interior painting costs vary widely based on room size, ceiling height, prep work, and paint quality. Here's a realistic breakdown.</p>
      <p>A typical 12x12 bedroom runs $300-$600 for walls only. Add ceilings, trim, and doors and you're looking at $600-$1,200. Living rooms with vaulted ceilings can run $800-$1,500.</p>
      <p>Key cost factors: surface prep (patching, sanding, priming), paint quality (premium paints cost 2-3x but last longer), and number of coats. Most rooms need 2 coats for even coverage.</p>
      <p>Our free estimates include a detailed breakdown so you know exactly what you're paying for — no surprises.</p>
    `,
    date: '2025-05-15',
    category: 'Pricing',
    image: '/assets/painter-paints-a-room-arp.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'exterior-painting-season-guide',
    title: 'Best Time of Year for Exterior Painting in New England',
    excerpt: 'Timing matters for exterior paint. Learn when to schedule for the best results and longest-lasting finish.',
    content: `
      <p>Exterior painting in New England requires careful timing. The ideal window is late spring through early fall — May through October.</p>
      <p>Temperature matters: paint needs 50°F+ to cure properly. Humidity should be below 85%. Avoid painting in direct midday sun, which causes paint to dry too fast and blister.</p>
      <p>Spring (May-June) is ideal for prep work — power washing, scraping, priming. Summer (July-August) is peak painting season. Fall (September-October) offers cooler temps and lower humidity.</p>
      <p>We book exterior projects months in advance. Contact us early to secure your preferred window.</p>
    `,
    date: '2025-06-01',
    category: 'Exterior Painting',
    image: '/assets/paint-roller-23956075297.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'color-trends-2025',
    title: '2025 Interior Color Trends: What Homeowners Are Choosing',
    excerpt: 'From warm neutrals to bold accent walls — the colors defining interior design this year.',
    content: `
      <p>2025 is all about warmth and personality. The all-white era is over — homeowners are embracing rich, grounded tones.</p>
      <p>Top trends: warm terracotta and clay tones, sage and olive greens, deep navy blues, and creamy off-whites with warm undertones. Accent walls in bold jewel tones (emerald, sapphire, amethyst) are making a comeback.</p>
      <p>The key shift: colors that feel lived-in and personal, not showroom-perfect. Clients are choosing colors that tell a story about who they are.</p>
      <p>Our color consultation service helps you find the perfect palette for your space and lifestyle.</p>
    `,
    date: '2025-06-15',
    category: 'Color Consultation',
    image: '/assets/tray-brush-roller-paint-4116925693.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'cabinet-refinishing-process',
    title: 'What to Expect During Cabinet Refinishing: Day by Day',
    excerpt: 'A walkthrough of our cabinet refinishing process so you know exactly what to expect.',
    content: `
      <p>Day 1: We remove all doors and drawer fronts, label everything, and set up a spray booth. Surfaces are cleaned with a degreaser to remove years of kitchen grime.</p>
      <p>Day 2: Sanding. We scuff-sand all surfaces to create adhesion. Any damage is repaired with wood filler and sanded smooth.</p>
      <p>Day 3: Priming. A bonding primer is sprayed on all surfaces. This is the foundation of a durable finish.</p>
      <p>Day 4-5: Two coats of premium enamel paint, sprayed for a factory-smooth finish. Doors are sprayed in our booth; boxes are sprayed in place with careful masking.</p>
      <p>Day 6: Reassembly. Doors and drawers are reinstalled with new hardware (if requested). Final inspection and touch-ups.</p>
      <p>Most kitchens take 5-7 days. You can use your kitchen (carefully) throughout — we work around your schedule.</p>
    `,
    date: '2025-07-01',
    category: 'Cabinet Refinishing',
    image: '/assets/paint-brushes-30804.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'paint-prep-checklist',
    title: 'The Ultimate Paint Prep Checklist for Homeowners',
    excerpt: 'What to do before the painters arrive to ensure the best results and fastest completion.',
    content: `
      <p>Prep makes or breaks a paint job. Here's what you can do to help:</p>
      <p>1. Clear the room: Move furniture to the center or out entirely. Remove wall hangings, curtains, and outlet covers.</p>
      <p>2. Clean walls: Wipe down walls with a damp cloth to remove dust and cobwebs. For kitchens, use a degreaser.</p>
      <p>3. Repair small holes: Fill nail holes with spackle. We'll handle larger repairs, but small fixes speed things up.</p>
      <p>4. Choose your colors: Have your final color selections ready. We recommend testing samples on the wall first.</p>
      <p>5. Plan for ventilation: Open windows if weather permits. We use low-VOC paints, but airflow helps.</p>
      <p>6. Protect valuables: Remove or cover anything fragile. We bring drop cloths, but extra care is appreciated.</p>
      <p>With good prep, we can start painting on day one and finish faster.</p>
    `,
    date: '2025-07-15',
    category: 'Tips & Tricks',
    image: '/assets/painter-paints-a-room-arp.jpg',
    author: 'BrushStroke Pro Team',
  },
  {
    slug: 'deck-staining-vs-painting',
    title: 'Deck Staining vs. Painting: Which Is Better?',
    excerpt: 'Stain or paint? The right choice depends on your deck material, condition, and goals.',
    content: `
      <p>Staining penetrates the wood and enhances its natural grain. Painting creates a solid film on top. Each has pros and cons.</p>
      <p>Stain: Better for new or well-maintained wood. Shows grain, easier to reapply, less peeling. Needs reapplication every 2-3 years.</p>
      <p>Paint: Better for older, weathered decks. Hides imperfections, wider color range, longer lasting (5-7 years). More prone to peeling if prep is poor.</p>
      <p>Our recommendation: stain for new decks, paint for older decks that need a fresh look. We'll assess your deck and recommend the best approach.</p>
    `,
    date: '2025-08-01',
    category: 'Deck Staining',
    image: '/assets/paint-roller-23956075297.jpg',
    author: 'BrushStroke Pro Team',
  },
]

// Merge with existing blog posts
export function getAllBlogPostsWithAdditional() {
  // This will be used by the blog page
  return ADDITIONAL_POSTS
}

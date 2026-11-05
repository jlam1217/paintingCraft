/**
 * PROJECTS DATA
 *
 * To add a new project:
 * 1. Drop images in: public/projects/YourProjectSlug/before/ and after/
 * 2. Name them: before-1.jpeg, before-2.jpeg, ..., after-1.jpeg, after-2.jpeg, ...
 * 3. Pick one of the pairing methods below:
 *
 * SIMPLE (sequential index matching — before-N pairs with after-N):
 *   pairs: projectImages('YourProjectSlug', 5, 5, [
 *     'Living Room', 'Kitchen', 'Master Bedroom', 'Bathroom', 'Hallway',
 *   ]),
 *
 * EXPLICIT (when before/after files aren't in matching order):
 *   pairs: projectImagePairs('YourProjectSlug', [
 *     { before: 1, after: 10, caption: 'Bathroom' },
 *     { before: 2, after: 8,  caption: 'Hallway' },
 *   ]),
 */

import { PaintingProject, projectImages, projectImagePairs } from './projectTypes'

export const PROJECTS: PaintingProject[] = [
  {
    slug: 'RosemaryNeedham',
    title: 'Rosemary Needham',
    description: 'Complete interior painting transformation including living areas, bedrooms, and bathroom.',
    category: 'interior',
    completedDate: '2024',
    services: ['Interior Painting', 'Wall Prep', 'Caulking', 'Patching'],
    // Explicit before → after mapping so each pair shows the SAME room
    pairs: projectImagePairs('RosemaryNeedham', [
      { before: 1, after: 10, caption: 'Bathroom — Blue Tile' },
      { before: 2, after: 8,  caption: 'Hallway' },
      { before: 3, after: 11, caption: 'Bedroom — Vaulted Ceiling' },
      { before: 4, after: 18, caption: 'Bathroom — Full Renovation' },
      { before: 5, after: 16, caption: 'Bedroom — Two Windows' },
      { before: 6, after: 15, caption: 'Bedroom — Closet' },
      { before: 7, after: 13, caption: 'Bedroom — Hardwood Floors' },
      { before: 8, after: 5,  caption: 'Staircase' },
      { before: 9, after: 3,  caption: 'Living Room — Fireplace' },
      { before: 10, after: 2, caption: 'Living Room — Main' },
    ]),
    featured: true,
  },

  // ── TEMPLATE FOR NEXT PROJECT ──────────────────────────────────────
  // Copy/paste this block and fill in details:
  //
  // {
  //   slug: 'SmithKitchen',
  //   title: 'Smith Kitchen',
  //   description: 'Kitchen cabinet refinishing and wall painting.',
  //   category: 'interior',
  //   completedDate: 'January 2025',
  //   services: ['Cabinet Refinishing', 'Interior Painting'],
  //   pairs: projectImages('SmithKitchen', 3, 3, [
  //     'Kitchen Overview',
  //     'Cabinet Close-up',
  //     'Dining Nook',
  //   ]),
  //   featured: false,
  // },
]

/** Helper to get a project by slug */
export function getProject(slug: string): PaintingProject | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

/** Helper to get featured projects */
export function getFeaturedProjects(): PaintingProject[] {
  return PROJECTS.filter((p) => p.featured)
}

/** Helper to get projects by category */
export function getProjectsByCategory(category: string): PaintingProject[] {
  if (category === 'all') return PROJECTS
  return PROJECTS.filter((p) => p.category === category)
}

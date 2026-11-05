/**
 * Project Types & Data
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Create a folder in public/projects/ named after your project (e.g., "SmithKitchen")
 * 2. Create "before/" and "after/" subfolders
 * 3. Drop your images in with naming: before-1.jpeg, before-2.jpeg, after-1.jpeg, after-2.jpeg
 * 4. Add a new entry to the PROJECTS array below
 * 5. That's it — the gallery, home page, and project pages all auto-update!
 */

export interface ImagePair {
  /** Unique ID for this pair */
  id: string
  /** Path to before image (relative to /public) */
  before: string
  /** Path to after image (relative to /public) */
  after: string
  /** Caption for this specific room/area */
  caption: string
}

export interface PaintingProject {
  /** URL-safe slug used in routes (e.g., "RosemaryNeedham") */
  slug: string
  /** Display name (e.g., "Rosemary Needham") */
  title: string
  /** Short description for cards */
  description: string
  /** Category for filtering */
  category: 'interior' | 'exterior' | 'commercial'
  /** Date the project was completed (displayed as text) */
  completedDate?: string
  /** Services performed */
  services: string[]
  /** All before/after image pairs */
  pairs: ImagePair[]
  /** Whether to show this project on the home page slider */
  featured?: boolean
}

/**
 * Helper to generate image paths for a project using sequential numbering.
 * Pairs before-N with after-N by index.
 */
export function projectImages(
  slug: string,
  beforeCount: number,
  afterCount: number,
  captions: string[] = []
): ImagePair[] {
  const count = Math.min(beforeCount, afterCount)
  return Array.from({ length: count }, (_, i) => ({
    id: `${slug}-${i + 1}`,
    before: `/projects/${slug}/before/before-${i + 1}.jpeg`,
    after: `/projects/${slug}/after/after-${i + 1}.jpeg`,
    caption: captions[i] || `Room ${i + 1}`,
  }))
}

/**
 * Helper to generate image paths with explicit before/after file mapping.
 * Use this when before and after images aren't sequentially numbered.
 *
 * @example
 *   projectImagePairs('MyProject', [
 *     { before: 1, after: 10, caption: 'Bathroom' },
 *     { before: 2, after: 8, caption: 'Hallway' },
 *   ])
 */
export function projectImagePairs(
  slug: string,
  mappings: { before: number; after: number; caption: string }[]
): ImagePair[] {
  return mappings.map((m, i) => ({
    id: `${slug}-${i + 1}`,
    before: `/projects/${slug}/before/before-${m.before}.jpeg`,
    after: `/projects/${slug}/after/after-${m.after}.jpeg`,
    caption: m.caption,
  }))
}

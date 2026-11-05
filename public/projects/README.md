# How to Add a New Project

Adding a new before/after project to your website takes **3 steps** and about 2 minutes.

---

## Step 1: Add Your Images

Create a folder in `web/public/projects/` with your project name:

```
web/public/projects/SmithKitchen/
├── before/
│   ├── before-1.jpeg
│   ├── before-2.jpeg
│   └── before-3.jpeg
└── after/
    ├── after-1.jpeg
    ├── after-2.jpeg
    └── after-3.jpeg
```

**Rules:**
- Folder name must be **PascalCase** with no spaces (e.g., `SmithKitchen`, `JonesExterior`)
- Before images go in `before/` subfolder, after images in `after/`
- Name them: `before-1.jpeg`, `before-2.jpeg`, `after-1.jpeg`, `after-2.jpeg`, etc.
- **The number of before and after images must match** (e.g., 5 before + 5 after)
- Supported formats: `.jpeg`, `.jpg`, `.png`, `.webp`

---

## Step 2: Add Project Entry

Open `web/src/lib/projects.ts` and copy/paste this template:

```typescript
{
  slug: 'SmithKitchen',
  title: 'Smith Kitchen',
  description: 'Kitchen cabinet refinishing and wall painting.',
  category: 'interior',           // 'interior' | 'exterior' | 'commercial'
  completedDate: 'January 2025',  // optional
  services: ['Cabinet Refinishing', 'Interior Painting'],  // optional
  pairs: projectImages('SmithKitchen', 3, 3, [
    'Kitchen Overview',            // caption for pair 1
    'Cabinet Close-up',            // caption for pair 2
    'Dining Nook',                 // caption for pair 3
  ]),
  featured: false,  // set true to show on home page
},
```

**Parameters for `projectImages()`:**
1. `slug` — must match your folder name exactly
2. `beforeCount` — number of before images
3. `afterCount` — number of after images
4. `captions[]` — array of captions (one per pair)

### If your before/after images aren't in matching order

Use `projectImagePairs()` to explicitly map which before file pairs with which after file:

```typescript
{
  slug: 'SmithKitchen',
  title: 'Smith Kitchen',
  description: 'Kitchen cabinet refinishing and wall painting.',
  category: 'interior',
  completedDate: 'January 2025',
  services: ['Cabinet Refinishing', 'Interior Painting'],
  pairs: projectImagePairs('SmithKitchen', [
    { before: 1, after: 10, caption: 'Kitchen Overview' },     // before-1 ↔ after-10
    { before: 2, after: 8,  caption: 'Cabinet Close-up' },     // before-2 ↔ after-8
    { before: 3, after: 15, caption: 'Dining Nook' },          // before-3 ↔ after-15
  ]),
  featured: false,
},
```

**Parameters for `projectImagePairs()`:**
1. `slug` — must match your folder name exactly
2. `mappings[]` — array of `{ before: number, after: number, caption: string }`

---

## Step 3: That's It!

The website automatically picks up your new project:
- ✅ **Gallery page** (`/gallery`) — shows a card with a before/after split preview
- ✅ **Project page** (`/projects/YourSlug`) — full detail page with interactive slider
- ✅ **Home page** — if `featured: true`, shows the interactive slider carousel

No other files need to be touched.

---

## Quick Reference

| File | What It Does |
|------|-------------|
| `public/projects/YourSlug/` | Image folder (before/ + after/) |
| `src/lib/projects.ts` | Project data (add entry here) |
| `src/lib/projectTypes.ts` | Types + helper function (don't edit unless changing structure) |

---

## Tips

- **Resize images first!** Aim for 800-1200px wide. Large photos slow down the website.
- **Match before/after pairs by room.** If you have 10 rooms, take 10 before + 10 after photos.
- **Set `featured: true`** for your best 1-2 projects to showcase on the home page.
- **Captions help** — name them after the room/area (e.g., "Living Room", "Kitchen", "Master Bedroom")

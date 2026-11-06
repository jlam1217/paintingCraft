export interface Review {
  name: string
  location: string
  rating: number
  text: string
  date: string
}

export const REVIEWS: Review[] = [
  {
    name: 'Sushma Vangala',
    location: 'Charlestown, MA',
    rating: 5,
    text: 'I had great experience working with Joe. He was very communicative and detail oriented and finished the project on time. He is also very knowledgeable which is very helpful to answer all the questions I had. I highly recommend him and will definitely hire him for all my future projects!',
    date: '2025-01-15',
  },
  {
    name: 'Catherine Ruas',
    location: 'Danvers, MA',
    rating: 5,
    text: 'Joe was absolutely amazing to work with! We had a massive project - painting the entire interior of our home, including a finished basement - and wanted a professional who could accommodate our schedule while maintaining a high standard of quality. Joe exceeded all expectations.',
    date: '2025-02-10',
  },
  {
    name: 'Phil Michienzi',
    location: 'Needham, MA',
    rating: 5,
    text: 'From walls and trim to railings and stairwells, Slim\'s Painting handled everything for us, and we couldn\'t be happier with the results. Each evening, Joe sent us a video update explaining what he completed that day. We\'ve officially found our go-to painter.',
    date: '2025-03-05',
  },
  {
    name: 'Natalie Denyse',
    location: 'Newton, MA',
    rating: 5,
    text: 'Joe and his team were fantastic! Responsive, adaptable, hard working and incredibly professional! The final result was exceptional. Super clean and meticulous in the final result.',
    date: '2025-04-01',
  },
  {
    name: 'Edward Hong',
    location: 'Cambridge, MA',
    rating: 5,
    text: 'Joe did a phenomenal job with our home wall and ceiling repair/painting. He knew immediately how to take care of our issue. He was professional, prompt, and transparent throughout the whole process.',
    date: '2025-05-12',
  },
  {
    name: 'Maureen Spinney',
    location: 'Brookline, MA',
    rating: 5,
    text: 'Joe was a pleasure to do business with, professional, prompt and efficient. He and his crew were meticulous. Their painting is second to none. I would use their services again and recommend them to others.',
    date: '2025-06-08',
  },
]

export function getAllReviews(): Review[] {
  return REVIEWS
}

export function getAverageRating(): number {
  if (REVIEWS.length === 0) return 0
  const sum = REVIEWS.reduce((acc, r) => acc + r.rating, 0)
  return Math.round((sum / REVIEWS.length) * 100) / 100
}

export function getReviewCount(): number {
  return REVIEWS.length
}

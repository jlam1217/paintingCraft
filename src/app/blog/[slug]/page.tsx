import Link from 'next/link'
import { use } from 'react'
import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/blog'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white min-h-screen">
      <header className="py-16 bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
            {post.category}
          </span>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{post.title}</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90">{post.excerpt}</p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-white/80">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg text-gray-700">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FF5A5F] hover:underline"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </article>
  )
}

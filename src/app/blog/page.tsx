import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">The BrushStroke Journal</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Tips, inspiration, and stories from our painting projects.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3] bg-gray-200">
                    <Image
                      fill
                      src={post.image}
                      alt={post.title}
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5A5F]">
                      {post.category}
                    </span>
                    <h2 className="mt-2 text-xl font-bold text-[#484848] group-hover:text-[#FF5A5F] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

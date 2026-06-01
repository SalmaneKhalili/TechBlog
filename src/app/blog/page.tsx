import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function Blog() {
  const posts = getAllPosts()

  const categories = Array.from(new Set(posts.map((p) => p.category)))

  return (
    <>
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <>
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-border text-muted"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block no-underline"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span className="text-sm text-muted">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted" />
                    <span className="text-sm text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-serif group-hover:text-muted transition-colors">
                    {post.title}
                  </h2>
                  {post.subtitle && (
                    <p className="text-sm text-muted mt-1.5 leading-relaxed max-w-[55ch]">
                      {post.subtitle}
                    </p>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </>
      )}
    </>
  )
}

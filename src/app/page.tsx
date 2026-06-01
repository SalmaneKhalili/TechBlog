import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

const sections = [
  {
    href: "/blog",
    title: "Blog",
    desc: "Long-form writing on databases, systems, and engineering.",
  },
  {
    href: "/projects",
    title: "Projects",
    desc: "Things I have built.",
  },
  {
    href: "/tools",
    title: "Tools",
    desc: "Interactive utilities and experiments.",
  },
  {
    href: "/notes",
    title: "Notes",
    desc: "Short-form thoughts and TILs.",
  },
]

export default function Home() {
  const posts = getAllPosts()
  const latest = posts[0]
  const blogCount = posts.length

  return (
    <div>
      <header className="mb-12">
        <p className="eyebrow">Software Engineer</p>
        <h1>
          Building ideas,<br />explaining systems.
        </h1>
        <p className="text-muted">
          Software engineer interested in database internals, distributed
          systems, and programming languages.
        </p>
      </header>

      {latest && (
        <section aria-label="Latest article" className="mb-12">
          <p className="section-label">Latest article</p>
          <Link
            href={`/blog/${latest.slug}`}
            className="block no-underline p-5 border border-border rounded-lg hover:bg-[#fafafa] dark:hover:bg-[#1a1a1a] transition-colors"
          >
            <span className="text-xs font-medium font-sans uppercase tracking-wider text-muted">
              {latest.category}
            </span>
            <h2 className="text-xl mt-1 mb-1.5">{latest.title}</h2>
            {latest.subtitle && (
              <p className="text-sm text-muted">{latest.subtitle}</p>
            )}
            <p className="text-xs text-muted mt-2">
              {latest.date} &middot; {latest.readTime}
            </p>
          </Link>
        </section>
      )}

      <header className="mb-6">
        <p className="section-label">Explore</p>
      </header>

      <nav aria-label="Site sections" className="space-y-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="flex items-center justify-between no-underline p-4 border border-border rounded-lg hover:bg-[#fafafa] dark:hover:bg-[#1a1a1a] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg">{section.title}</span>
              {section.href === "/blog" && blogCount > 0 && (
                <span className="text-xs text-muted">{blogCount}</span>
              )}
            </div>
            <span className="text-sm text-muted flex-1 ml-4">
              {section.desc}
            </span>
            <span className="text-muted group-hover:text-foreground transition-colors ml-2">
              &rarr;
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkDirective from "remark-directive"
import rehypeKatex from "rehype-katex"
import rehypeSlug from "rehype-slug"
import rehypeHighlight from "rehype-highlight"
import "katex/dist/katex.min.css"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { remarkDirectiveToHast } from "@/lib/remark-plugins"
import Callout from "@/components/Callout"
import Definition from "@/components/Definition"
import TableOfContents from "@/components/TableOfContents"
import ShareBar from "@/components/ShareBar"
import BackToTop from "@/components/BackToTop"

function extractHeadings(
  markdown: string
): Array<{ level: number; text: string; id: string }> {
  const headings: Array<{ level: number; text: string; id: string }> = []
  const regex = /^(#{2,3})\s+(.+)$/gm
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
    headings.push({ level, text, id })
  }
  return headings
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const headings = extractHeadings(post.content)

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      <article className="min-w-0">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors no-underline"
          >
            &larr; Back to blog
          </Link>
        </nav>

        <header className="mb-10">
          <p className="eyebrow">{post.category}</p>
          <h1 className="text-balance">{post.title}</h1>
          {post.subtitle && (
            <p className="text-base text-muted mt-3 max-w-[55ch] leading-relaxed">
              {post.subtitle}
            </p>
          )}
          <div className="flex items-center gap-3 text-xs text-muted mt-4">
            <span>Salmane Khalili</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <time>{post.date}</time>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="lg:flex lg:gap-12">
          <div className="flex-1 min-w-0 max-w-[680px]">
            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[
                  remarkGfm,
                  remarkDirective,
                  remarkDirectiveToHast,
                ]}
                rehypePlugins={[rehypeKatex, rehypeSlug, rehypeHighlight]}
                components={{
                  callout: Callout,
                  definition: Definition,
                  h2: ({ children, ...props }: any) => (
                    <h2 {...props} className="text-balance">
                      {children}
                    </h2>
                  ),
                  a: ({ href, children, ...props }: any) => {
                    const isExternal =
                      href && (href.startsWith("http") || href.startsWith("//"))
                    return (
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        {...props}
                      >
                        {children}
                      </a>
                    )
                  },
                  code: ({
                    className,
                    children,
                    ...props
                  }: {
                    className?: string
                    children?: React.ReactNode
                  }) => {
                    const match = /language-(\w+)/.exec(className || "")
                    const isInline = !match
                    if (isInline) {
                      return (
                        <code
                          className="bg-[var(--border)] px-1.5 py-0.5 rounded text-sm font-mono text-[inherit]"
                          {...props}
                        >
                          {children}
                        </code>
                      )
                    }
                    const lang = match[1]
                    return (
                      <div className="my-6 rounded-lg overflow-hidden border border-border">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[var(--background)]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-[11px] font-mono uppercase text-muted tracking-wider">
                            {lang}
                          </span>
                        </div>
                        <pre className="!m-0 !rounded-none !border-0">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    )
                  },
                  pre: ({ children }: any) => <>{children}</>,
                } as any}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <ShareBar title={post.title} />
          </div>

          <aside className="hidden lg:block w-[220px] flex-shrink-0">
            <div className="sticky top-8">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>

        <div className="mt-10 lg:hidden">
          <TableOfContents headings={headings} />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-10 border-t border-border">
          <h2 className="text-lg font-serif mb-6">Read next</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block p-4 rounded-lg border border-border hover:border-foreground transition-colors no-underline"
              >
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted">
                  {p.category}
                </span>
                <h3 className="text-sm font-medium mt-1.5 group-hover:text-muted transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                  {p.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-muted mt-2">
                  <time>{p.date}</time>
                  <span className="w-1 h-1 rounded-full bg-muted" />
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <BackToTop />
    </>
  )
}

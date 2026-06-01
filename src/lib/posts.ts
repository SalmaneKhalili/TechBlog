import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content", "blog")

export interface Post {
  slug: string
  title: string
  date: string
  rawDate: string
  category: string
  excerpt: string
  subtitle: string
  content: string
  readTime: string
}

function calculateReadTime(content: string): string {
  const words = content.split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
}

function resolveCategory(data: Record<string, any>): string {
  if (data.category) return data.category
  if (Array.isArray(data.categories) && data.categories.length > 0)
    return data.categories[0]
  return "General"
}

function resolveDescription(data: Record<string, any>): string {
  return data.excerpt || data.subtitle || data.description || ""
}

function toPost(slug: string, data: Record<string, any>, content: string): Post {
  return {
    slug,
    title: data.title,
    rawDate: data.date,
    date: formatDate(data.date),
    category: resolveCategory(data),
    excerpt: resolveDescription(data),
    subtitle: resolveDescription(data),
    content,
    readTime: calculateReadTime(content),
  }
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fn) => fn.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf-8")
      const { data, content } = matter(fileContents)
      return toPost(slug, data, content)
    })
    .sort((a, b) => (new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime()))
  return posts
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf-8")
    const { data, content } = matter(fileContents)
    return toPost(slug, data, content)
  } catch {
    return null
  }
}

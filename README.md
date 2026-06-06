# TechBlog

Personal blog built with **Next.js 16**, **Tailwind CSS 4**, and **TypeScript**. Markdown-driven, statically exported.

## Features

- **Markdown posts** with frontmatter (title, date, category, description)
- **KaTeX math rendering** via `rehype-katex`
- **Syntax highlighting** via `rehype-highlight` with a custom warm-earth theme
- **Custom markdown directives** — `:::callout{type="error"}` and `:::definition{term="..."}` using `remark-directive`
- **Table of Contents** sidebar with intersection-observer active heading tracking
- **Dark mode** with system-preference detection and manual toggle
- **Responsive** layout with mobile-first design
- **Share bar** for Twitter and LinkedIn
- **Code blocks** with macOS-style window dots and language labels

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 16 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Markdown | react-markdown, remark-gfm, remark-frontmatter |
| Remark plugins | remark-directive, rehype-slug, rehype-katex, rehype-highlight |
| Frontmatter | gray-matter |

## Project Structure

```
techblog/
├── content/blog/          # Markdown blog posts
├── public/assets/images/  # Static images
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── blog/          # Blog listing + [slug] post page
│   │   ├── about/         # About page
│   │   ├── resume/        # Resume page
│   │   ├── projects/      # Projects page
│   │   ├── notes/         # Notes page
│   │   ├── tools/         # Tools page
│   │   ├── globals.css    # Global styles + theme + syntax highlighting
│   │   └── layout.tsx     # Root layout
│   ├── components/        # Reusable components
│   │   ├── Callout.tsx     # Callout box (:::) 
│   │   ├── Definition.tsx  # Definition card (:::)
│   │   ├── ShareBar.tsx    # Social share buttons
│   │   ├── TableOfContents.tsx  # TOC sidebar
│   │   ├── BackToTop.tsx   # Scroll-to-top button
│   │   ├── Nav.tsx         # Navigation bar
│   │   ├── Footer.tsx      # Site footer
│   │   └── ThemeToggle.tsx # Dark mode toggle
│   └── lib/
│       ├── posts.ts        # Post loading + frontmatter normalization
│       └── remark-plugins.ts  # Custom remark directive plugin
├── next.config.ts          # Static export config
└── package.json
```

## Getting Started

```bash
git clone <repo>
cd techblog
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a Post

Create a `.md` file in `content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-06-01"
category: ["databases"]
description: "A short excerpt."
---

Post content here.
```

### Custom Directives

**Callout:**
```markdown
:::callout{type="error"}
Content inside the callout box.
:::
```

**Definition:**
```markdown
:::definition{term="ACID"}
Atomicity, Consistency, Isolation, Durability.
:::
```

### Math

```latex
$$E = mc^2$$
```

### Code blocks

Syntax-highlighted with language label:

````markdown
```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}
```
````

## Build

```bash
npm run build
```

Produces a static `out/` directory that can be served by any HTTP server.

## License

MIT

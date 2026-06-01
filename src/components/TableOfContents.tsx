"use client"

import { useEffect, useState } from "react"

interface Heading {
  level: number
  text: string
  id: string
}

interface TOCProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    )

    for (const { id } of headings) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
        On this page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition-colors py-0.5 ${
                h.level === 3 ? "pl-4" : ""
              } ${
                activeId === h.id
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

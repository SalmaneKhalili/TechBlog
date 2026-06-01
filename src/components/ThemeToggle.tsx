"use client"

import { useEffect, useState } from "react"

function getInitialDark(): boolean {
  if (typeof window === "undefined") return false
  const stored = localStorage.getItem("theme")
  if (stored) return stored === "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const isDark = getInitialDark()
    setDark(isDark)
    document.documentElement.classList.toggle("dark", isDark)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle("dark", dark)
  }, [dark, mounted])

  function toggle() {
    const next = !dark
    setDark(next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <button
        aria-label="Toggle colour theme"
        className="text-muted hover:text-foreground transition-colors cursor-pointer"
        style={{ width: 16, height: 16 }}
      />
    )
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="text-muted hover:text-foreground transition-colors cursor-pointer"
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3" fill="currentColor" />
          <line x1="8" y1="1" x2="8" y2="2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="8" y1="13.5" x2="8" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="1" y1="8" x2="2.5" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="13.5" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="3.1" y1="3.1" x2="4.2" y2="4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="11.8" y1="11.8" x2="12.9" y2="12.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="3.1" y1="12.9" x2="4.2" y2="11.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="11.8" y1="4.2" x2="12.9" y2="3.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.5 10.5c-1 2.3-3.4 4-6.2 4-3.3 0-6-2.7-6-6C1.3 5.7 3 3.3 5.5 2.3c-1.4 2-1.1 4.8.8 6.7s4.7 2.2 7.2 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

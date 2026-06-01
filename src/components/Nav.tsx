import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "/blog", label: "blog" },
  { href: "/resume", label: "resume" },
  { href: "/projects", label: "projects" },
  { href: "/tools", label: "tools" },
  { href: "/notes", label: "notes" },
  { href: "/about", label: "about" },
]

export default function Nav() {
  return (
    <header className="mb-16">
      <div className="flex items-center justify-between">
        <h1 className="site-name">
          <Link href="/">Salmane Khalili</Link>
        </h1>
        <nav className="flex items-center gap-5">
          <div className="flex gap-5 text-sm text-muted">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

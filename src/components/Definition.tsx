import { ReactNode } from "react"

interface DefinitionProps {
  term: string
  children: ReactNode
}

export default function Definition({ term, children }: DefinitionProps) {
  return (
    <div className="my-6 border border-border rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-[var(--background)]">
        <span className="text-xs font-mono uppercase tracking-wider text-muted">
          {term}
        </span>
      </div>
      <div className="px-4 py-3 text-sm leading-relaxed [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

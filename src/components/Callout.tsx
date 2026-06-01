import { ReactNode } from "react"

interface CalloutProps {
  type?: "info" | "error" | "warning" | "tip"
  title?: string
  children: ReactNode
}

export default function Callout({
  type,
  title,
  children,
}: CalloutProps) {
  const className = type === "error" ? "callout error" : "callout"
  return (
    <div className={className}>
      {title && <span className="callout-title">{title}</span>}
      <div>{children}</div>
    </div>
  )
}

import type { Metadata } from "next"
import Script from "next/script"
import { Bricolage_Grotesque, DM_Mono, Instrument_Serif } from "next/font/google"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
})

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: "400",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Salmane Khalili",
  description: "Personal blog about software engineering",
}

const themeScript = `
  (function() {
    var theme = localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') document.documentElement.classList.add('dark');
  })()
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmMono.variable} ${instrumentSerif.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <div className="mx-auto max-w-[1120px] w-full px-6 py-12 flex flex-col flex-1">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

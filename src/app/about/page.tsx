export default function About() {
  return (
    <article className="prose">
      <h1>About</h1>

      <p>
        I&rsquo;m Salmane. I like computers, coffee, and the specific kind of
        satisfaction that comes from deleting 50 lines of boilerplate.
      </p>

      <p>
        I study CS, contribute to open source when I can, and occasionally
        embarrass myself on LeetCode. I also speak three languages, which
        sounds impressive until you realize it&rsquo;s mostly useful for
        reading Stack Overflow in two additional fonts.
      </p>

      <p>
        This blog is where I write about the things I learn so I don&rsquo;t
        forget them. If someone else finds them useful too, that&rsquo;s a
        bonus.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/salmanekhalili"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-2 hover:text-muted"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/salmane-khalili"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-2 hover:text-muted"
        >
          LinkedIn
        </a>
      </div>
    </article>
  )
}

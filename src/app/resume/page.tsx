export default function Resume() {
  return (
    <article className="max-w-[680px]">
      <header className="mb-10">
        <h1>Salmane Khalili</h1>
        <p className="text-sm text-muted mt-1">
          Casablanca, Morocco &middot; salmajo2001@gmail.com
        </p>
        <div className="flex gap-4 mt-2 text-sm text-muted">
          <a
            href="https://github.com/SalmaneKhalili"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            github.com/SalmaneKhalili
          </a>
          <a
            href="https://linkedin.com/in/salmane-khalili"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            linkedin.com/in/salmane-khalili
          </a>
        </div>
      </header>

      <hr className="border-border mb-8" />

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Education
        </h2>
        <div>
          <h3 className="text-base font-medium">
            University of the People
          </h3>
          <p className="text-sm text-muted italic">B.Sc. Computer Science &middot; Jun 2025 – Expected 2028</p>
          <p className="text-sm text-muted mt-1">
            Relevant: Programming Fundamentals, Databases, Computer Networks
          </p>
        </div>
      </section>

      <hr className="border-border mb-8" />

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Experience
        </h2>

        <div className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-medium">
                Java Ranger &mdash; Google Summer of Code
              </h3>
              <p className="text-sm text-muted italic">JPFTeam, NASA Ames Research Center</p>
            </div>
            <span className="text-xs text-muted whitespace-nowrap shrink-0">May 2026 – Present</span>
          </div>
          <ul className="text-sm text-[var(--foreground)] mt-2 space-y-1 list-disc list-inside">
            <li>
              Built CI benchmarking infrastructure running 15 SV-COMP verification suites, reducing regression detection time from manual checks to automated per-commit reports
            </li>
            <li>
              Delivered 4 PRs merged into NASA&rsquo;s Symbolic PathFinder codebase, adding IEEE 754 floating-point support
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-medium">
                Backend Engineering Intern
              </h3>
              <p className="text-sm text-muted italic">Lotus Capital Gestion, Casablanca</p>
            </div>
            <span className="text-xs text-muted whitespace-nowrap shrink-0">Oct 2025 – Jan 2026</span>
          </div>
          <ul className="text-sm text-[var(--foreground)] mt-2 space-y-1 list-disc list-inside">
            <li>
              Built 12 RESTful endpoints for a trade prediction platform using <strong>Spring Boot</strong>, serving live user requests with PostgreSQL via <strong>JPA/Hibernate</strong>
            </li>
            <li>
              Orchestrated 4 <strong>Spring Cloud</strong> microservices (Eureka, Gateway, Config) with async messaging through <strong>RabbitMQ</strong>, decoupling trade execution from notification delivery
            </li>
            <li>
              Reduced database query latency by 40% by optimizing Hibernate fetch strategies and adding indexed columns identified through slow-query log analysis
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-border mb-8" />

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Projects
        </h2>

        <div className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-medium">
              SoundBytes &mdash; Audio Playback Library
            </h3>
            <span className="text-xs text-muted whitespace-nowrap shrink-0">2026</span>
          </div>
          <ul className="text-sm text-[var(--foreground)] mt-2 space-y-1 list-disc list-inside">
            <li>
              Engineered a lock-free producer-consumer pipeline using <strong>virtual threads</strong> and <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">ArrayBlockingQueue</code>, replacing coarse <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">synchronized</code> blocks with an <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">AtomicReference&lt;AudioStatus&gt;</code> state machine
            </li>
            <li>
              Implemented WAV decoding, TCP streaming over <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">SocketChannel</code>, and SQLite-backed metadata persistence across 6 modules
            </li>
            <li>
              Validated state transitions with 3 unit tests covering play/pause/stop sequences; confirmed dropout-free playback via engine integration test
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-medium">
              CS-Community-BOT &mdash; Discord Bot for 200+ Students
            </h3>
            <span className="text-xs text-muted whitespace-nowrap shrink-0">2026</span>
          </div>
          <ul className="text-sm text-[var(--foreground)] mt-2 space-y-1 list-disc list-inside">
            <li>
              Served 200+ university students daily DSA practice routines using <strong>JDA</strong> with <strong>PostgreSQL</strong> via <strong>HikariCP</strong> connection pooling
            </li>
            <li>
              Implemented 3 feature modules (roadmaps, Codeforces ladders, daily challenges) using Command pattern with layered DAO/service/scheduler architecture
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-base font-medium">
              Joise-Shell &mdash; Unix Shell in Java
            </h3>
            <span className="text-xs text-muted whitespace-nowrap shrink-0">2025</span>
          </div>
          <ul className="text-sm text-[var(--foreground)] mt-2 space-y-1 list-disc list-inside">
            <li>
              Maintained 99.9% uptime thus far, on headless Android phone deployment (Termux)
            </li>
            <li>
              Built a Unix shell capable of I/O redirection (<code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">&gt;</code>, <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">2&gt;</code>, <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">&gt;&gt;</code>) and PATH-based executable resolution using <code className="bg-[var(--border)] px-1 rounded text-[0.85em] font-mono">ProcessBuilder</code>
            </li>
            <li>
              Implemented a state-machine parser for single/double quotes and escape sequences, handling edge cases like nested quotes and empty tokens
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-border mb-8" />

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Key Achievements
        </h2>
        <ul className="text-sm text-[var(--foreground)] space-y-1 list-disc list-inside">
          <li>President&rsquo;s List (UoPeople), GPA &gt;= 3.85</li>
          <li>Rank 51 Nationally on LeetCode</li>
        </ul>
      </section>

      <hr className="border-border mb-8" />

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
          Languages
        </h2>
        <ul className="text-sm space-y-0.5">
          <li><strong>Arabic</strong> &mdash; Native</li>
          <li><strong>English</strong> &mdash; Fluent</li>
          <li><strong>French</strong> &mdash; Professional</li>
        </ul>
      </section>
    </article>
  )
}

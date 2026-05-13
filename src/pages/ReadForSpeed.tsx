import PageShell from "../components/PageShell";

export default function ReadForSpeed() {
  return (
    <PageShell>
      <section className="min-h-screen w-full">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
            <a
              href="https://github.com/Fradedaniela0305/Read-For-Speed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read. For Speed
            </a>
          </h2>

          <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            My favorite project
          </p>

          <p className="mt-2 text-lg italic text-white/60">
            React, Vite, Node.js, Express, Supabase · Feb 2026 – Present
          </p>


          <div className="mt-10 flex w-full flex-col items-start gap-16 lg:flex-row">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-1/2">
              <img
                src="/readforspeed.png"
                alt="Read For Speed screenshot 1"
                className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)]"
              />

              <img
                src="/readforspeed1.png"
                alt="Read For Speed screenshot 2"
                className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)]"
              />

              <img
                src="/readforspeed2.png"
                alt="Read For Speed screenshot 3"
                className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)] sm:col-span-2"
              />
            </div>

            <div className="w-full space-y-6 text-xl leading-relaxed text-white/85 md:text-2xl lg:w-1/2">
              <p>
                <span className="font-semibold text-white">
                  Read. For Speed
                </span>{" "}
                is my ongoing full-stack project: a{" "}
                <span className="text-blue-400">React</span> frontend paired
                with <span className="text-blue-400">Node.js</span>,{" "}
                <span className="text-blue-400">Express</span>, and{" "}
                <span className="text-blue-400">TypeScript REST APIs</span>,
                with <span className="text-blue-400">Supabase</span> handling
                the database and authentication.
              </p>

              <p>
                I developed a{" "}
                <span className="text-blue-400">baseline assessment</span> that
                measures WPM, comprehension accuracy, and effective WPM, plus an{" "}
                <span className="text-blue-400">RSVP reading interface</span>{" "}
                and a <span className="text-blue-400">results dashboard</span>{" "}
                to track progress.
              </p>

              <p>
                Currently, I'm working on{" "} expanding the platform with{" "}
                <span className="text-blue-400">chunked RSVP</span>,{" "}
                <span className="text-blue-400">speed drills</span>, and a{" "}
                <span className="text-blue-400">leaderboard</span>.
              </p>
            </div>
          </div>

          <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-blue-400">
              Currently building next
            </h3>

            <ul className="mt-4 space-y-3 text-lg text-white/80">
              <li>• chunked RSVP mode</li>
              <li>• speed drills mode</li>
              <li>• WPM leaderboard</li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
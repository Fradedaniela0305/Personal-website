import PageShell from "../components/PageShell";

export default function Carades() {
  return (
    <PageShell>
      <section className="min-h-screen w-full">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
            <a
              href="https://github.com/Fradedaniela0305/Carades"
              target="_blank"
              rel="noopener noreferrer"
            >
              CARADES
            </a>
          </h2>

          <p className="mt-2 text-lg text-white/60">
            CMD-F Hackathon · 1st Place
          </p>

          <div className="mt-12 flex w-full flex-col items-start gap-16 lg:flex-row">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-1/2">
              <img
                src="/carades.png"
                alt="Carades main"
                className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)]"
              />

              <img
                src="/carades1.png"
                alt="Carades gameplay"
                className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)]"
              />

              <img
                src="/carades2.png"
                alt="Carades editor"
                className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)] sm:col-span-2"
              />
            </div>

            <div className="w-full space-y-8 text-xl leading-relaxed text-white/85 md:text-2xl lg:w-1/2">
              <p>
                <span className="font-semibold text-white">Carades</span> is a
                real-time multiplayer coding game we built during the CMD-F
                Hackathon, where we won{" "}
                <span className="font-semibold text-blue-400">
                  first place
                </span>
                .
              </p>

              <p>
                One player writes code-based hints while others try to guess the
                concept. Behind that, we implemented a room-based multiplayer
                system using{" "}
                <span className="text-blue-400">
                  Firebase Realtime Database
                </span>
                , with live listeners to synchronize players, timers, scoring,
                and shared game state.
              </p>

              <p>
                We also developed a live collaborative editor using{" "}
                <span className="text-blue-400">Monaco Editor</span>, enabling
                real-time interaction between the coder and guessers. The
                gameplay included progressive hint reveals and a dynamic
                leaderboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
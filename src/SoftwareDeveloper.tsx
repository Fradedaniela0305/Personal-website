import { useNavigate } from "react-router-dom";

export default function SoftwareDeveloper() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white">
      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="relative snap-start min-h-screen w-full px-6 py-16 md:px-16 lg:px-24">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="
            absolute right-6 top-6
            cursor-pointer text-sm text-white/70 transition
            hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]
            md:text-base
          "
        >
          ← Back
        </button>

        {/* Title */}
        <h1 className="text-5xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-7xl">
          SOFTWARE DEVELOPER
        </h1>

        {/* Experience */}
        <div className="mt-16 w-full">
          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
            Experience
          </h2>

          <div className="flex w-full flex-col items-start gap-16 md:flex-row">
            <img
              src="/Kaia.png"
              alt="KAIA Network"
              className="w-[320px] flex-shrink-0 object-contain md:w-[400px]"
            />

            <div className="w-full space-y-8 text-xl leading-relaxed text-white/85 md:text-2xl">
              <p>
                At <span className="font-semibold text-white">KAIA Network</span>,
                I worked as a software developer intern on a
                team of three engineers. 
              </p>

              <p>
                I built and shipped full-stack features using{" "}
                <span className="text-blue-400">
                  React, TypeScript, and Supabase
                </span>
                , including a dynamic resource system that powers content on the
                homepage. I worked directly with Supabase for authentication,
                querying, and rendering dynamic data in the frontend.
              </p>

              <p>
                A big part of my work involved debugging real production issues
                like Supabase query mismatches or deployment
                inconsistencies, improving reliability and making the user
                experience smoother.
              </p>

              <p>
                I also collaborated Git-based workflows,
                contributing to UI improvements, resolving merge conflicts, and
                helping ensure smooth deployments across the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARADES SECTION ================= */}
      <section className="snap-start min-h-screen w-full border-t border-white/5 px-6 py-16 md:px-16 lg:px-24">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
            CARADES
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
                Hackathon with an <span className="font-semibold text-blue-400">
                  incredible-amazing-super-awsome
                </span>  team, where we won{" "}
                <span className="font-semibold text-blue-400">
                  first place
                </span>
                .
              </p>

              <p>
                The idea: One player writes code-based hints
                while others try to guess the concept. Behind that, we
                implemented a room-based multiplayer system using{" "}
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
                leaderboard that updated as players competed.
              </p>

              <p>
                This project wouldn't have been possible without my amazing team.
              </p>
            </div>
          </div>
        </div>

        
      </section>
    </div>
  );
}
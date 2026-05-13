import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white px-6">
      <Navbar />

      <div
        className="
          mx-auto flex min-h-screen w-full max-w-[1800px]
          flex-col items-center justify-center
          gap-4 px-4 pt-24
          md:flex-row md:gap-0
        "
      >
        {/* LEFT SIDE — AVATAR (slightly smaller so text has room) */}
        <div className="flex flex-[1] justify-center">
          <img
            src="/me.png"
            alt="Dani illustration"
            className="
              w-[80vw] md:w-[38vw]
              max-w-[700px]
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
            "
          />
        </div>

        {/* RIGHT SIDE — INTRO */}
        <div
          className="
            flex flex-[1.2] flex-col
            items-center text-center
            md:items-start md:text-left
          "
        >
          {/* Removed the faint "SOFTWARE DEVELOPER" label — the content speaks for itself */}

          <h1 className="mt-3 text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.9)]">
              Dani
            </span>
          </h1>

          {/* Shorter, punchier subtitle that won't wrap awkwardly */}
          <p className="mt-4 max-w-xl text-xl md:text-2xl leading-relaxed text-white/70">
            CS student @ UBC building full-stack apps —
            <br className="hidden md:block" /> and drawing them by hand.
          </p>

          {/* Interests line — smaller, clearly secondary */}
          <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed text-white/45">
            SWE · FullStack Dev · OOP 
          </p>

          {/* Removed redundant tag pills — the stack is shown in projects */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => navigate("/projects")}
              className="
                rounded-full bg-blue-400
                px-7 py-3 font-bold text-black
                transition hover:scale-105 hover:bg-blue-300
              "
            >
              View My Work →
            </button>

            {/* Secondary CTA is now a text link, not a competing button */}
            <button
              onClick={() => navigate("/artist")}
              className="
                text-sm text-white/50
                transition hover:text-blue-400
                underline underline-offset-4
              "
            >
              or see what else I'm into
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

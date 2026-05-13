import Navbar from "../components/Navbar";

export default function Artist() {
  return (
    <section className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white">
      <Navbar />

      {/* FIRST PAGE */}
      <section className="relative snap-start min-h-screen w-full px-6 pt-32 pb-16 md:px-16 lg:px-24">
        {/* DRAWING BLOCK */}
        <div className="absolute left-[7%] top-[18%] z-20 max-w-[520px]">
          <h1 className="text-5xl font-bold tracking-tight text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-7xl">
            DRAWING
          </h1>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/85 md:text-2xl">
            <p>
              I love color pencil drawing. For me, it feels like a kind of
              meditation, something I could do for hours and hours
              (sometimes I do).
            </p>

            <p>
              I’m especially interested in{" "}
              <span className="text-blue-400">semi-realistic anime</span>, and
              in taking on harder and harder pieces that push me to improve.
            </p>
          </div>
        </div>

        {/* DRAWING CHARACTER SPACE */}
        <div className="absolute left-[20%] top-[82%] z-10 -translate-x-1/2 -translate-y-1/2">
          <img
            src="/meDrawing.png"
            alt="Drawing character"
            className="w-[360px] object-contain md:w-[480px] lg:w-[600px]"
          />
        </div>

        {/* MUSIC CHARACTER SPACE */}
        <div className="absolute top-[16%] right-[16%] z-10 translate-x-1/2">
          <img
            src="/meMusic.png"
            alt="Music character"
            className="w-[420px] object-contain md:w-[560px] lg:w-[680px]"
          />
        </div>

        {/* MUSIC BLOCK */}
        <div className="absolute bottom-[10%] right-[7%] z-20 max-w-[520px] text-left">
          <h1 className="text-4xl font-bold tracking-tight text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-6xl">
            MUSIC
          </h1>

          <div className="mt-6 space-y-5 text-left text-lg leading-relaxed text-white/80 md:text-2xl">
            <p>Music is a core part of my life.</p>

            <p>
              I’ve played the <span className="text-blue-400">piano</span>{" "}
              since I was 8 years old.
            </p>

            <p>
              If I had 15 minutes left to live, I would spend them playing the
              piano.
            </p>
          </div>
        </div>
      </section>

      {/* SCROLL INDICATOR */}
<div
  className="
    absolute bottom-8 left-1/2 z-30
    flex -translate-x-1/2 flex-col items-center
    text-white/50
  "
>
  <p className="mb-2 text-xs uppercase tracking-[0.3em]">
    Scroll
  </p>

  <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
    <div className="mt-2 h-3 w-1 rounded-full bg-blue-400" />
  </div>
</div>

 <section className="snap-start relative min-h-screen w-full px-6 pt-32 pb-16 md:px-16 lg:px-24 flex flex-col justify-center">
        
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400/70">Beyond the Code</p>
        <h1 className="mt-3 text-5xl font-bold md:text-7xl leading-tight">
          Where{" "}
          <span className="text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,0.9)]">
            Code
          </span>{" "}
          and{" "}
          <span className="text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,0.9)]">
            Art
          </span>{" "}
          meet
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl">

          {/* Piano → Consistency */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm hover:border-blue-400/30 transition">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400/60 mb-3">Piano → Consistency</p>
            <p className="text-lg leading-relaxed text-white/75">
              Piano taught me that progress comes from showing up every day. Just like I practice a piece daily,
              I try to solve one problem or ship one feature every day.
            </p>
          </div>

          {/* Drawing → Planning */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm hover:border-blue-400/30 transition">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400/60 mb-3">Drawing → Planning</p>
            <p className="text-lg leading-relaxed text-white/75">
              Color pencils are not easily erasable — every choice matters. I approach code the same way:
              I think first about structure, stack, and user experience before I write a single line.
            </p>
          </div>

          {/* Code → Problem Solving */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm hover:border-blue-400/30 transition">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400/60 mb-3">Code → Problem Solving</p>
            <p className="text-lg leading-relaxed text-white/75">
              Programming shaped my drawing too. If I make a mistake, I look for a way to adapt
              instead of starting over — a refactor mindset applied to art.
            </p>
          </div>

          {/* Both → Commitment */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm hover:border-blue-400/30 transition">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400/60 mb-3">Both → Commitment</p>
            <p className="text-lg leading-relaxed text-white/75">
              I spent <span className="text-blue-400">50+ hours</span> on Read. For Speed,
              just like I spent <span className="text-blue-400">100 hours</span> on my Venom drawing.
              When you enjoy the process, the time stops mattering.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-base text-white/40 italic">
          Stuck on code? I draw or play piano. When I come back, things are clearer or I already thought of a solution.
        </p>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/30">
          <p className="mb-2 text-xs uppercase tracking-[0.3em]">Scroll</p>
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">
            <div className="mt-1.5 h-2 w-0.5 rounded-full bg-blue-400" />
          </div>
        </div>
      </section>

   

      <section className="snap-start min-h-screen w-full border-t border-white/5 px-6 pt-32 pb-16 md:px-16 lg:px-24">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
            Drawings
          </h2>

          <p className="mt-2 text-lg text-white/60">
            Prismacolor Color Pencils
          </p>

          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/drawing.jpg"
              alt="Drawing main"
              className="w-full rounded-xl border border-white/10 transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]"
            />

            <img
              src="/drawing1.jpg"
              alt="Drawing 1"
              className="w-full rounded-xl border border-white/10 transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]"
            />

            <img
              src="/drawing2.jpg"
              alt="Drawing 2"
              className="w-full rounded-xl border border-white/10 transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]"
            />
          </div>
        </div>
      </section>

      <section className="snap-start min-h-screen w-full border-t border-white/5 px-6 pt-32 pb-16 md:px-16 lg:px-24">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
            Music
          </h2>

          <p className="mt-2 text-lg text-white/60">
            I love playing the soundtracks of my favorite movies and video games
          </p>

          <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[640px]">
            <div className="flex h-[800px] flex-col gap-6 lg:h-full">
              <img
                src="/games.png"
                alt="Games"
                className="h-0 min-h-0 flex-1 w-full rounded-xl border border-white/10 object-cover transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]"
              />

              <img
                src="/movies.png"
                alt="Movies"
                className="h-0 min-h-0 flex-1 w-full rounded-xl border border-white/10 object-cover transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]"
              />
            </div>

            <video
              className="h-[640px] w-full rounded-xl border border-white/10 object-cover transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)] lg:h-full"
              controls
            >
              <source src="/piano.mp4" type="video/mp4" />
            </video>

            <video
              className="h-[640px] w-full rounded-xl border border-white/10 object-cover transition hover:scale-[1.02] hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.6)] lg:h-full"
              controls
            >
              <source src="/piano3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </section>
  );
}
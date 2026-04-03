import { useNavigate } from "react-router-dom";

export default function Artist() {
    const navigate = useNavigate();

    return (
        <section className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white">
            {/* FIRST PAGE */}
            <section className="relative snap-start min-h-screen w-full px-6 py-16 md:px-16 lg:px-24">
                {/* Back button */}
                <button
                    onClick={() => navigate("/")}
                    className="
            absolute right-6 top-6 z-30
            cursor-pointer text-sm text-white/70 transition
            hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]
            md:text-base
          "
                >
                    ← Back
                </button>

                {/* DRAWING BLOCK */}
                <div className="absolute left-[7%] top-[12%] z-20 max-w-[520px]">
                    <button
                        onClick={() => navigate("/artist/drawing")}
                        className="text-left"
                    >
                        <h1 className="cursor-pointer text-5xl font-bold tracking-tight text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] transition hover:scale-[1.02] md:text-7xl">
                            DRAWING
                        </h1>
                    </button>

                    <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/85 md:text-2xl">
                        <p>
                            I love color pencil drawing. For me, it feels like a kind of
                            meditation — something I could do for hours and hours, and
                            sometimes I do.
                        </p>

                        <p>
                            I especially love drawing my favorite characters and bringing them
                            to life in my own way.
                        </p>

                        <p>
                            I’m especially interested in{" "}
                            <span className="text-blue-400">semi-realistic anime</span>, and in
                            taking on harder and harder pieces that push me to improve.
                        </p>
                    </div>
                </div>

                {/* DRAWING CHARACTER SPACE */}
                <div className="absolute left-[16%] top-[52%] z-10 -translate-x-1/2 -translate-y-1/2">
                    <img
                        src="/drawing-character.png"
                        alt="Drawing character"
                        className="w-[260px] object-contain md:w-[340px] lg:w-[400px]"
                    />
                </div>

                {/* MUSIC CHARACTER SPACE */}
                <div className="absolute bottom-[40%] right-[16%] z-10 translate-x-1/2 translate-y-1/2">
                    <img
                        src="/music-character.png"
                        alt="Music character"
                        className="w-[240px] object-contain md:w-[320px] lg:w-[380px]"
                    />
                </div>

                {/* MUSIC BLOCK */}
                <div className="absolute bottom-[10%] right-[7%] z-20 max-w-[520px] text-right">
                    <button
                        onClick={() => navigate("/artist/music")}
                        className="text-right"
                    >
                        <h1 className="cursor-pointer text-5xl font-bold tracking-tight text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] transition hover:scale-[1.02] md:text-7xl">
                            MUSIC
                        </h1>
                    </button>

                    <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/85 md:text-2xl">
                        <p>Music is a core part of my life.</p>

                        <p>
                            I’ve played the piano since I was{" "}
                            <span className="text-blue-400">8 years old</span>.
                        </p>

                        <p>
                            If there’s something that makes me deeply passionate, it’s music.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECOND PAGE */}
            <section className="snap-start min-h-screen w-full border-t border-white/5 px-6 py-16 md:px-16 lg:px-24">
                <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
                    <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
                        Drawings
                    </h2>

                    <p className="mt-2 text-lg text-white/60">
                        Colored Pencil · Character Art
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
        </section >
    );
}

import { useNavigate } from "react-router-dom";

export default function HowTheyConnect() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] px-6 py-16 text-white md:px-16 lg:px-24">
            <button
                onClick={() => navigate("/")}
                className="
          absolute right-6 top-6
          text-sm text-white/70 transition
          hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]
          md:text-base
        "
            >
                ← Back
            </button>


            <section className="snap-start min-h-screen w-full px-6 py-16 md:px-16 lg:px-24 text-white">
                <h1 className="text-5xl md:text-7xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)]">
                    WHERE THEY BOTH MEET
                </h1>

                <div className="mt-16 max-w-4xl space-y-6 text-lg leading-relaxed text-white/85 md:text-2xl">

                    <p>
                        Piano taught me <span className="text-blue-400">consistency</span>. Progress comes from showing up every day.
                        Just like I practice a piece daily, I try to solve one problem or build one feature every day.
                    </p>

                    <p>
                        Drawing with color pencils requires planning. It is not easily erasable, so every choice matters.
                        I approach programming the same way: I think before I code, about structure, stack, features, and user experience.
                    </p>

                    <p>
                        Programming has shaped my drawing too. It taught me
                        <span className="text-blue-400"> problem solving</span>.
                        If I make a mistake, I look for a way to adapt it instead of starting over.
                    </p>

                    <p>
                        Both have taught me patience and commitment. I've spent around
                        <span className="text-blue-400"> 50 hours </span>
                        on Read. For Speed, just like I spent 
                        <span className="text-blue-400"> 100 hours </span>
                        on my venom drawing. But when you enjoy the process, the time stops mattering.
                    </p>

                    <p>
                        I also move between them. Stuck on code? I draw or play. When I come back,
                        things are clearer, and sometimes the solution is already there.
                    </p>

                </div>
            </section>
        </section>
    );
}

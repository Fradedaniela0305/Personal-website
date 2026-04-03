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


                {/* ================= READ. FOR SPEED. SECTION ================= */}
                <section className="snap-start min-h-screen w-full border-t border-white/5 px-6 py-16 md:px-16 lg:px-24">
                    <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
                        <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
                            Read. For Speed.
                        </h2>

                        <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                            My in-progress full-stack magnum opus / nightmare
                        </p>

                        <p className="mt-2 text-lg italic text-white/60">
                            React, Vite, Node.js, Express, Supabase · Feb 2026 – Present
                        </p>

                        <p className="mt-2 text-lg italic text-white/50">
                            Currently in progress — and getting more complicated every time I touch it.
                        </p>

                        <div className="mt-10 flex w-full flex-col items-start gap-16 lg:flex-row">
                            {/* Images */}
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

                            {/* Text */}
                            <div className="w-full space-y-6 text-xl leading-relaxed text-white/85 md:text-2xl lg:w-1/2">
                                <p>
                                    <span className="font-semibold text-white">Read. For Speed.</span> is my ongoing full-stack project: a
                                    <span className="text-blue-400"> React</span> frontend paired with
                                    <span className="text-blue-400"> Node.js</span>, <span className="text-blue-400">Express</span>, and <span className="text-blue-400">TypeScript</span>
                                    <span className="text-blue-400"> REST APIs</span>, with <span className="text-blue-400">Supabase</span> handling both the database and authentication.
                                </p>

                                <p>
                                    So far, I’ve built a <span className="text-blue-400">baseline assessment</span> that measures WPM, comprehension accuracy, and effective WPM, plus an
                                    <span className="text-blue-400"> RSVP reading interface</span> and a
                                    <span className="text-blue-400"> results dashboard</span> to track progress.
                                </p>

                                <p>
                                    The next step is adding <span className="text-blue-400">adaptive retesting</span> after every five training sessions, then expanding the platform with
                                    <span className="text-blue-400"> chunked RSVP</span>, <span className="text-blue-400">speed drills</span>, and a
                                    <span className="text-blue-400"> leaderboard</span>.
                                </p>

                            </div>
                        </div>

                        {/* Next up */}
                        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h3 className="text-2xl font-semibold text-blue-400">Currently building next</h3>
                            <ul className="mt-4 space-y-3 text-lg text-white/80">
                                <li>• test unlock system after every 5 training sessions</li>
                                <li>• adaptive WPM recalibration</li>
                                <li>• chunked RSVP mode</li>
                                <li>• speed drills</li>
                                <li>• WPM leaderboard</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ================= FRACTAL VISUALIZER ================= */}
                <section className="snap-start min-h-screen w-full border-t border-white/5 px-6 py-16 md:px-16 lg:px-24">
                    <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">

                        {/* Title */}
                        <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
                            Fractal Visualizer
                        </h2>

                        <p className="mt-2 text-lg text-white/60">
                            Python · Pygame · Complex Math
                        </p>

                        {/* Content */}
                        <div className="mt-10 flex w-full flex-col items-start gap-16 lg:flex-row">

                            {/* Images */}
                            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-1/2">
                                <img
                                    src="../public/fractals.png"
                                    alt="Mandelbrot set"
                                    className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)]"
                                />

                                <img
                                    src="../public/fractals1.png"
                                    alt="Sierpinski chaos game"
                                    className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)]"
                                />

                                <img
                                    src="../public/fractals2.png"
                                    alt="Recursive triangle"
                                    className="rounded-xl border border-white/10 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)] transition hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.7)] sm:col-span-2"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full space-y-4 text-xl leading-relaxed text-white/85 md:text-2xl lg:w-1/2">

                                <p>
                                    A <span className="font-semibold text-white">Python + Pygame fractal visualizer</span> exploring how mathematical structures can be rendered in real time using complex-number math.
                                </p>

                                <p>
                                    Features interactive zooming into the <span className="text-blue-400">Mandelbrot set</span> and generation of the <span className="text-blue-400">Sierpinski triangle</span> via both the chaos game and recursion.
                                </p>

                                <p>
                                    Rendering is computationally intensive (<span className="text-blue-400">O(width × height × iterations)</span>), turning deep zoom into a performance challenge.
                                </p>

                                <p>
                                    Explores optimization ideas like incremental rendering and parallelization, along with limits of floating-point precision.
                                </p>

                            </div>
                        </div>

                        {/* Tech / Ideas box */}
                        <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:w-1/2">
                            <h3 className="text-2xl font-semibold text-blue-400">Things I explored</h3>
                            <ul className="mt-4 space-y-3 text-lg text-white/80">
                                <li>• complex number math for pixel rendering</li>
                                <li>• recursive vs iterative fractal generation</li>
                                <li>• performance limits of real-time rendering</li>
                                <li>• floating-point precision and zoom depth limits</li>
                                <li>• potential optimizations (tiling, multiprocessing, caching)</li>
                            </ul>
                        </div>

                    </div>
                </section>


            </section>
        </div>
    );
}
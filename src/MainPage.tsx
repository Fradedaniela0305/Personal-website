import { useNavigate } from "react-router-dom";


export default function MainPage() {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white flex flex-col items-center justify-start px-6 pt-12">


            <h1 className="z-10 text-center text-5xl md:text-7xl font-medium leading-tight">
                Welcome, I'm{" "}
                <button
                    className="
            font-bold text-blue-400 cursor-pointer
            drop-shadow-[0_0_10px_rgba(96,165,250,0.9)]
            hover:scale-105 transition
          "
                >
                    DANI
                </button>
            </h1>


            <div className="relative mt-4 flex w-full items-center justify-center">


                <div className="absolute left-[8%] top-[12%] z-20 hidden md:block text-left">
                    <button
                        onClick={() => navigate("/developer")}
                        className="
    text-5xl md:text-6xl font-bold tracking-tight text-blue-400
    drop-shadow-[0_0_14px_rgba(96,165,250,1)]
    cursor-pointer transition hover:scale-110
  "
                    >
                        SOFTWARE DEV
                    </button>
                    <p
                        className="
      text-3xl md:text-4xl text-white/80 mt-2
      tracking-tight
    "
                    >
                        by day
                    </p>
                </div>


                <img
                    src="/me.png"
                    alt="me"
                    className="
            w-[78vw] md:w-[52vw]
            max-w-none
            translate-x-4
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
          "
                />

                <div className="absolute bottom-[16%] right-[10%] z-20 hidden md:block text-right">
                    <button
                        onClick={() => navigate("/artist")}
                        className="
    text-5xl md:text-6xl font-bold tracking-tight text-blue-400
    drop-shadow-[0_0_14px_rgba(96,165,250,1)]
    cursor-pointer transition hover:scale-110
  "
                    >
                        ARTIST
                    </button>

                    <p
                        className="
      text-3xl md:text-4xl text-white/80 mt-2
      tracking-tight
    "
                    >
                        by night
                    </p>
                    <p className="mt-4 text-sm md:text-lg italic text-white/60">
                        (or the other way around)
                    </p>
                </div>
            </div>

            <p className="mt-4 text-2xl md:text-3xl italic text-white/60">
                (or the other way around)
            </p>
        </section>
    );
}
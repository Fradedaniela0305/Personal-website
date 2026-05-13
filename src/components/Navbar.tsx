import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="
            text-xl font-bold text-blue-400
            drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]
            transition hover:scale-105
          "
        >
          Dani
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">

        <button
            onClick={() => navigate("/whyilovesd")}
            className="transition hover:text-blue-400"
          >
            Why I love SD
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="transition hover:text-blue-400"
          >
            Technical Projects
          </button>

          <button
            onClick={() => navigate("/experience")}
            className="transition hover:text-blue-400"
          >
            Technical Experience
          </button>

          <button
            onClick={() => navigate("/skills")}
            className="transition hover:text-blue-400"
          >
            Skills
          </button>

          <button
            onClick={() => navigate("/education")}
            className="transition hover:text-blue-400"
          >
            Education
          </button>

          <button
            onClick={() => navigate("/artist")}
            className="transition hover:text-blue-400"
          >
            Beyond the Code
          </button>

<a
  href="/resume.pdf"
  download="Dani_Fradinho_Resume.pdf"
  className="
    rounded-full border border-blue-400/70
    px-4 py-2 text-blue-400
    transition hover:bg-blue-400 hover:text-black
  "
>
  Resume
</a>
        </div>
      </div>
    </nav>
  );
}
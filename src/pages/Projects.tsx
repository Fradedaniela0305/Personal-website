import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import readForSpeedImg from "../assets/readForSpeedImg.png";
import caradesImg from "../assets/caradesImg.png";
import ubcEventsImg from "../assets/ubcEventsImg.png";
import mealPlannerImg from "../assets/mealPlannerImg.png";
import nQueensImg from "../assets/nQueensImg.png";
import fractalImg from "../assets/fractalImg.png";
import sleepImg from "../assets/sleepImg.png";
import vcfcImg from "../assets/vcfcImg.png";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  stack: string[];
  github: string;
  image: string;
  badge?: string;
  featured?: boolean;
  detailRoute?: string;
};

const FEATURED: Project[] = [
  {
    title: "Read. For Speed",
    subtitle: "My favorite project",
    description:
      "Full-stack speed reading platform with a WPM baseline assessment, RSVP reading interface, comprehension tracking, and a results dashboard.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Supabase"],
    github: "https://github.com/Fradedaniela0305/Read-For-Speed",
    image: readForSpeedImg,
    featured: true,
    detailRoute: "/projects/read-for-speed",
  },
  {
    title: "Carades",
    subtitle: "CMD-F Hackathon · 1st Place",
    description:
      "Real-time multiplayer coding game where one player writes code-based hints while others guess the concept. Built a room-based system with Firebase live listeners, Monaco Editor, and a dynamic leaderboard.",
    stack: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/Fradedaniela0305/Carades",
    image: caradesImg,
    featured: true,
    detailRoute: "/projects/carades",
  },
];

const BY_SECTION: { label: string; projects: Project[] }[] = [
  {
    label: "Web & Full-Stack",
    projects: [
      {
        title: "Read. For Speed",
        subtitle: "Full-Stack Reading Platform",
        description:
          "Full-stack speed reading platform with a WPM baseline assessment, RSVP reading interface, comprehension tracking, and a results dashboard.",
        stack: ["React", "TypeScript", "Node.js", "Express", "Supabase (PostgreSQL)", "Vitest"],
        github: "https://github.com/Fradedaniela0305/Read-For-Speed",
        image: readForSpeedImg,
        detailRoute: "/developer/readforspeed",
      },
      {
        title: "Carades",
        subtitle: "CMD-F Hackathon · 1st Place",
        description:
          "Real-time multiplayer coding game where one player writes code-based hints while others guess the concept. Built a room-based system with Firebase live listeners, Monaco Editor, and a dynamic leaderboard.",
        stack: ["React", "TypeScript", "Firebase"],
        github: "https://github.com/Fradedaniela0305/Carades",
        image: caradesImg,
        badge: "🏆 1st Place",
        detailRoute: "/developer/carades",
      },
      {
        title: "UBC Events Discovery",
        subtitle: "Hack Camp Hackathon",
        description:
          "Campus event discovery platform that aggregates and surfaces UBC events in one browsable feed.",
        stack: ["React", "JavaScript", "JSON"],
        github:
          "https://github.com/Fradedaniela0305/NW-HackCamp-Project-UBC-Events",
        image: ubcEventsImg,
      },
    ],
  },

  {
    label: "Object-Oriented-Programming",
    projects: [
      {
        title: "Weekly Meal Planner",
        description:
          "Calendar-style desktop meal planner with a full Swing GUI, weekly scheduling, and JUnit-tested business logic.",
        stack: ["Java", "JUnit", "Swing"],
        github: "https://github.com/Fradedaniela0305/Weekly-Meal-Planner",
        image: mealPlannerImg,
      },
    ],
  },

  {
    label: "Python",
    projects: [
      {
        title: "N-Queens Solver",
        description:
          "Interactive N-Queens solver with a Pygame board GUI. Visualizes backtracking in real time as the algorithm places queens.",
        stack: ["Python", "Pygame"],
        github: "https://github.com/Fradedaniela0305/N_Queens",
        image: nQueensImg,
      },
      {
        title: "Fractal Visualizer",
        description:
          "Real-time Mandelbrot set and Sierpinski triangle renderer with interactive zoom. Explores floating-point precision limits and rendering performance.",
        stack: ["Python", "Pygame"],
        github: "https://github.com/Fradedaniela0305/Fractals",
        image: fractalImg,
      },
    ],
  },

  {
    label: "Data & Analysis",
    projects: [
      {
        title: "KNN Sleep Data Analysis",
        description:
          "Sleep disorder predictor using K-nearest neighbours on real clinical data. Includes full EDA pipeline and ggplot2 visualizations.",
        stack: ["R", "tidyverse", "ggplot2"],
        github: "https://github.com/Fradedaniela0305/KNN-Sleep-Data-Analysis",
        image: sleepImg,
      },
      {
        title: "VCFC Data Strategy Analysis",
        subtitle: "UBC BOLT Datathon",
        description:
          "Data-driven strategy analysis for Vancouver City FC — built during UBC's BOLT datathon using real match data.",
        stack: ["R", "tidyverse", "ggplot2"],
        github:
          "https://github.com/Fradedaniela0305/UBC-BOLT-First-Byte-Datathon-Project",
        image: vcfcImg,
      },
    ],
  },
];

function StackPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1 text-xs text-blue-300">
      {label}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="
        mb-6 text-xs uppercase tracking-[0.25em]
        text-blue-400
        drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]
      "
    >
      {children}
    </h2>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const navigate = useNavigate();

  return (
    <div
      className="
        group relative flex flex-col justify-between
        overflow-hidden
        rounded-2xl border border-white/10 bg-white/[0.03]
        p-8 backdrop-blur-sm
        transition duration-300
        hover:border-blue-400/40 hover:bg-white/[0.06]
        hover:drop-shadow-[0_0_30px_rgba(96,165,250,0.15)]
        cursor-pointer
      "
      onClick={() => project.detailRoute && navigate(project.detailRoute)}
    >
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="
          mb-6 h-56 w-full rounded-xl object-cover
          border border-white/10
          transition duration-300
          group-hover:border-blue-400/40
          group-hover:scale-[1.02]
        "
      />

      {project.badge && (
        <span className="mb-4 inline-block w-fit rounded-full bg-blue-400/10 border border-blue-400/30 px-3 py-1 text-xs font-semibold text-blue-300">
          {project.badge}
        </span>
      )}

      <div>
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-300">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 text-sm text-white/40">{project.subtitle}</p>
        )}

        <p className="mt-4 text-base leading-relaxed text-white/65">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <StackPill key={s} label={s} />
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-sm text-white/40 underline underline-offset-4 transition hover:text-blue-400"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}

function SmallCard({ project }: { project: Project }) {
  return (
    <div
      className="
        group flex flex-col justify-between
        overflow-hidden
        rounded-xl border border-white/8 bg-white/[0.02]
        p-6 backdrop-blur-sm
        transition duration-300
        hover:border-blue-400/30 hover:bg-white/[0.05]
        hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.1)]
      "
    >
      <img
        src={project.image}
        alt={`${project.title} preview`}
        className="
          mb-5 h-40 w-full rounded-lg object-cover
          border border-white/10
          transition duration-300
          group-hover:border-blue-400/40
          group-hover:scale-[1.02]
        "
      />

      <div>
        <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
          {project.title}
        </h4>

        {project.subtitle && (
          <p className="mt-0.5 text-xs text-white/35">{project.subtitle}</p>
        )}

        <p className="mt-3 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <StackPill key={s} label={s} />
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/35 underline underline-offset-4 transition hover:text-blue-400"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-12">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400/70">
            Portfolio
          </p>

          <h1 className="mt-3 text-5xl font-bold md:text-7xl">Projects</h1>

          <p className="mt-4 max-w-xl text-lg text-white/45">
            A mix of full-stack apps, algorithms, data analysis, and things I
            built just because I was curious.
          </p>
        </div>

        <section className="mb-20">
          <SectionTitle>Featured</SectionTitle>

          <div className="grid gap-6 md:grid-cols-2">
            {FEATURED.map((p) => (
              <FeaturedCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {BY_SECTION.map((section) => (
          <section key={section.label} className="mb-16">
            <SectionTitle>{section.label}</SectionTitle>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.projects.map((p) => (
                <SmallCard key={p.title} project={p} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
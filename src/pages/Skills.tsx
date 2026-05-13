import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";
import SkillGrid from "../components/SkillGrid";

export default function Skills() {
  return (
    <PageShell>
      <SectionTitle>Skills</SectionTitle>

      <SkillGrid
  title="Core Stack"
  skills={[
    {
      name: "React",
      img: "/react.png",
      details: [
        "Read. For Speed",
        "Carades",
        "KAIA Network",
        "UBC Events Discovery",
      ],
    },
    {
      name: "TypeScript",
      img: "/typescript.png",
      details: [
        "Read. For Speed",
        "Carades",
        "KAIA Network",
      ],
    },
    {
      name: "JavaScript",
      img: "/javascript.png",
      details: [
        "UBC Events Discovery",
        "Frontend development",
      ],
    },
    {
      name: "Node.js",
      img: "/node.png",
      details: [
        "Read. For Speed backend",
        "REST API development",
      ],
    },
    {
      name: "Supabase",
      img: "/supabase.png",
      details: [
        "Read. For Speed",
        "KAIA Network",
        "Authentication + PostgreSQL",
      ],
    },
    {
      name: "Git",
      img: "/git.png",
      details: [
        "KAIA Network",
        "Team collaboration",
        "Merge conflict resolution",
      ],
    },
  ]}
/>
<SkillGrid
  title="Languages"
  skills={[
    {
      name: "Java",
      img: "/java.png",
      details: [
        "Weekly Meal Planner",
        "Swing GUI development",
        "JUnit testing",
        "Object-oriented programming coursework",
      ],
    },
    {
      name: "Python",
      img: "/python.png",
      details: [
        "Fractal Visualizer",
        "N-Queens Solver",
        "Pygame GUI development",
        "Algorithm visualization",
      ],
    },
    {
      name: "C++",
      img: "/cpp.png",
      details: [
        "Coursework",
        "Data structures and algorithms",
        "Systems programming fundamentals",
      ],
    },
    {
      name: "C",
      img: "/c.png",
      details: [
        "Coursework",
        "Memory management",
        "Low-level programming concepts",
      ],
    },
    {
      name: "R",
      img: "/r.png",
      details: [
        "KNN Sleep Data Analysis",
        "VCFC Data Strategy Analysis",
        "Data visualization with ggplot2",
        "Statistical analysis",
      ],
    },
  ]}
/>

<SkillGrid
  title="Other"
  skills={[
    {
      name: "Express",
      img: "/express.png",
      details: [
        "Read. For Speed backend",
        "REST API development",
        "Authentication middleware",
      ],
    },
    {
      name: "HTML",
      img: "/html.png",
      details: [
        "Portfolio website",
        "Frontend web development",
        "Responsive layouts",
      ],
    },
    {
      name: "CSS",
      img: "/css.png",
      details: [
        "Portfolio website",
        "Tailwind CSS",
        "Responsive UI design",
        "Interactive animations",
      ],
    },
    {
      name: "JUnit",
      img: "/junit.png",
      details: [
        "Weekly Meal Planner",
        "Unit testing",
        "Business logic validation",
      ],
    },
  ]}
/>
    </PageShell>
  );
}
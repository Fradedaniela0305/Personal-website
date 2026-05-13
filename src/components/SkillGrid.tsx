type Skill = {
  name: string;
  img: string;
  details?: string[];
};

type SkillGridProps = {
  title: string;
  skills: Skill[];
};

export default function SkillGrid({
  title,
  skills,
}: SkillGridProps) {
  return (
    <div className="mt-20">
      <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              group relative
              flex h-[130px] flex-col items-center justify-center gap-3
              rounded-xl border border-white/10
              bg-white/[0.02]
              p-5
              transition duration-300
              hover:scale-105
              hover:border-blue-400/40
              hover:bg-white/[0.05]
              hover:drop-shadow-[0_0_25px_rgba(96,165,250,0.25)]
            "
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="h-14 w-14 object-contain"
            />

            <p className="text-sm text-white/80">
              {skill.name}
            </p>

            {/* HOVER CARD */}
            {skill.details && (
              <div
                className="
                  pointer-events-none
                  absolute left-1/2 top-[110%]
                  z-50 hidden w-64 -translate-x-1/2
                  rounded-xl border border-blue-400/20
                  bg-[#0f0f0f]/95
                  p-4 backdrop-blur-md
                  group-hover:block
                "
              >
                <p className="mb-2 text-sm font-semibold text-blue-400">
                  Used in:
                </p>

                <ul className="space-y-1 text-sm text-white/75">
                  {skill.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
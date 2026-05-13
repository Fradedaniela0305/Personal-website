import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";

export default function Experience() {
  return (
    <PageShell>
      <SectionTitle>Technical Experience</SectionTitle>

      <div className="mt-16 w-full">
        <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
          Software Developer Intern —{" "}
          <a
            href="https://www.kaia.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          >
            KAIA Network
          </a>
        </h2>

        <div className="flex w-full flex-col items-start gap-16 md:flex-row">
          <img
            src="/Kaia.png"
            alt="KAIA Network"
            className="w-[320px] flex-shrink-0 object-contain md:w-[400px]"
          />

          <div className="w-full space-y-6 text-lg leading-relaxed text-white/80 md:text-xl">
            <p>
              Worked as a software developer intern on a small engineering team,
              building production features for an interdisciplinary AI research
              collaboration platform.
            </p>

            <ul className="space-y-4">
              <li>
                • Built and shipped features using{" "}
                <span className="text-blue-400">
                  React, TypeScript, and Supabase
                </span>
                , including dynamic resource systems and user-facing platform
                improvements.
              </li>

              <li>
                • Worked directly with{" "}
                <span className="text-blue-400">
                  Supabase authentication, queries, and frontend data rendering
                </span>
                .
              </li>

              <li>
                • Performed{" "}
                <span className="text-blue-400">QA testing</span>, debugging,
                and issue reporting across production features.
              </li>

              <li>
                • Debugged{" "}
                <span className="text-blue-400">
                  Supabase query mismatches, deployment inconsistencies, and
                  React frontend issues
                </span>
                .
              </li>

              <li>
                • Collaborated through{" "}
                <span className="text-blue-400">Git-based workflows</span>,
                resolving merge conflicts and contributing to smoother
                deployments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  return (
    <PageShell>
      <SectionTitle>Education</SectionTitle>

      <div className="mt-20 flex flex-col items-center gap-16 md:flex-row md:justify-between">
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-white/85 md:text-2xl">
          <p className="text-2xl font-semibold text-white md:text-3xl">
            University of British Columbia
          </p>

          <p>Bachelor of Science in Computer Science</p>

          <p className="text-white/70">
            Sept. 2024 – Apr. 2028 <br />
            Vancouver, BC
          </p>

          <p>
            <span className="text-blue-400">88.8%</span> average • GPA:{" "}
            <span className="text-blue-400">4.2 / 4.33</span>
          </p>

          <p className="text-white/80">
            <span className="font-semibold text-white">Relevant Coursework:</span>{" "}
            Software Construction • Computer Systems • Models of Computation •
            Data Structures and Algorithms • Applied Machine Learning
          </p>
        </div>

        <img
          src="/ubc.png"
          alt="UBC campus"
          className="w-[420px] rounded-2xl border border-white/10 object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] md:w-[520px] lg:w-[650px]"
        />
      </div>
    </PageShell>
  );
}
import PageShell from "../components/PageShell";
import SectionTitle from "../components/SectionTitle";

export default function WhyILoveSD() {
  return (
    <PageShell>
      <SectionTitle>
        WHY I LOVE <br /> SOFTWARE DEVELOPMENT
      </SectionTitle>

      <div className="mt-20 flex w-full flex-col items-center gap-16 md:flex-row md:justify-between">
        <div className="max-w-3xl space-y-8 text-xl leading-relaxed text-white/85 md:text-2xl">
          <p>
            There is one thing that draws me to software development, and that's
            the <span className="text-blue-400">infinite creative freedom</span>.
          </p>

          <p>
            You can build almost <span className="text-blue-400">anything</span>{" "}
            with code. From <span className="text-blue-400">tools</span> and{" "}
            <span className="text-blue-400">websites</span> to{" "}
            <span className="text-blue-400">video games</span> and products that{" "}
            <span className="text-blue-400">solve real-world issues</span>.
          </p>

          <p>
            The balance between <span className="text-blue-400">logic</span> and{" "}
            <span className="text-blue-400">creativity</span> is what excites me
            most.
          </p>
        </div>

        <img
          src="/SoftwareDevMe.png"
          alt="Software developer portrait"
          className="w-[420px] object-contain md:w-[600px] lg:w-[750px]"
        />
      </div>
    </PageShell>
  );
}
import PageShell from "../components/PageShell";

const HIGHLIGHTS = [
  {
    label: "Full-Stack Architecture",
    detail: "React frontend + Node.js/Express REST API backend, with Supabase handling the database and auth",
  },
  {
    label: "10 RESTful API Endpoints",
    detail: "Designed and deployed endpoints for user profiles, test attempts, and performance analytics with role-based access control",
  },
  {
    label: "Full API Test Coverage",
    detail: "Unit and integration tests with Vitest — validating middleware, route handlers, and core business logic",
  },
  {
    label: "WPM Analytics",
    detail: "Tracks speed, comprehension accuracy, and effective WPM across sessions with a results dashboard",
  },
];

export default function ReadForSpeed() {


    
  return (
    <PageShell>
      <section className="min-h-screen w-full">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_14px_rgba(96,165,250,1)] md:text-5xl">
            <a
              href="https://github.com/Fradedaniela0305/Read-For-Speed"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read. For Speed
            </a>
          </h2>

          <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            My favorite project
          </p>

          <p className="mt-2 text-lg italic text-white/60">
            React, Vite, Node.js, Express, Supabase · Feb 2026 – Present
          </p>


          <div className="mt-10 flex w-full flex-col items-start gap-16 lg:flex-row">
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
{/* <span className="text-blue-400">React</span>  */}
            <div className="w-full space-y-6 text-xl leading-relaxed text-white/85 md:text-2xl lg:w-1/2">
            {HIGHLIGHTS.map(({label, detail}) => (

                <p key={label}>
                    <span className="text-blue-400">{label}</span> : {detail}
                </p>

            ))}
              
            </div>
          </div>

          <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-blue-400">
              Currently building next
            </h3>

            <ul className="mt-4 space-y-3 text-lg text-white/80">
              <li>• chunked RSVP mode</li>
              <li>• speed drills mode</li>
              <li>• WPM leaderboard</li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
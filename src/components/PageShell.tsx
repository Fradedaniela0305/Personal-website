import Navbar from "./Navbar";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] text-white">
      <Navbar />

      <main
        className="
          mx-auto w-full max-w-[1800px]
          px-6 pb-24 pt-32
          md:px-12
          lg:px-20
          xl:px-24
        "
      >
        {children}
      </main>
    </div>
  );
}
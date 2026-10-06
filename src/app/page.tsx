
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "MongoDB",
  "Python",
  "C++",
  "SQL",
  "Pandas",
  "Power BI",
  "Scikit-learn",
];

const projects = [
  {
    number: "01",
    title: "Cricket Website",
    category: "Web Development",
    description:
      "A cricket-focused website designed to present cricket information through a clean and engaging user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Existing Project",
  },
  {
    number: "02",
    title: "Student Management Portal",
    category: "Python Development",
    description:
      "A student management application concept for organizing student records and simplifying administrative tasks.",
    technologies: ["Python"],
    status: "Existing Project",
  },
  {
    number: "03",
    title: "AI Student Result Analysis System",
    category: "Machine Learning",
    description:
      "Analyze student performance, visualize academic results, and identify students who may need additional academic support.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    status: "In Progress",
  },
  {
    number: "04",
    title: "Sales Performance Dashboard",
    category: "Data Analytics",
    description:
      "Explore sales trends, revenue, profit, and product performance through interactive charts and business insights.",
    technologies: ["Python", "SQL", "Power BI", "Excel"],
    status: "Planned",
  },
  {
    number: "05",
    title: "Optical Store CRM & Inventory",
    category: "Full Stack",
    description:
      "A proposed retail management application for customer records, eyewear inventory, sales tracking, and stock management.",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "Planned",
  },
  {
    number: "06",
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description:
      "A recommendation system concept that suggests movies based on user preferences and similarities between films.",
    technologies: ["Python", "Pandas", "Machine Learning"],
    status: "Planned",
  },
  {
    number: "07",
    title: "Reducing Traffic Mortality Using ML",
    category: "AI & Data Science",
    description:
      "Analyze traffic safety data to explore accident risk factors, identify patterns, and develop machine learning-based risk predictions.",
    technologies: ["Python", "Pandas", "Machine Learning", "SHAP"],
    status: "In Progress",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-black">
            ADITYA<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20"
      >
        <div className="pointer-events-none absolute left-1/3 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative grid w-full items-center gap-14 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Welcome to my portfolio
            </div>

            <p className="mb-3 text-lg text-gray-400">Hello, I'm</p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Aditya
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Singh.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
              Full Stack Developer{" "}
              <span className="text-cyan-400">&</span> Python Developer
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              I build web applications and explore data-driven solutions.
              I enjoy solving problems, learning new technologies, and
              turning ideas into useful digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/Aditya-Singh-Resume.pdf"
                download="Aditya-Singh-Resume.pdf"
                className="rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-[#080b14] transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Download Resume ↓
              </a>

              <a
                href="#projects"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Explore Projects →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-gray-400">
              <a
                href="https://github.com/its-adityasingh001"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/aditya-singh-041a49257"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:adityasingh742494@gmail.com"
                className="hover:text-cyan-400"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111a2d] to-[#0b1020] p-7 shadow-2xl shadow-cyan-950/30">
              <div className="absolute -right-3 -top-3 rounded-xl border border-cyan-400/30 bg-[#101b2c] px-4 py-2 text-xs font-semibold text-cyan-300">
                Developer
              </div>

              <div className="flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/20">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/40 bg-[#111827] text-5xl font-black text-cyan-300 shadow-lg shadow-cyan-500/10">
                    AS
                  </div>
                  <p className="mt-6 text-xl font-bold">Aditya Singh</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Code · Create · Improve
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-gray-400">Focus</p>
                  <p className="mt-1 font-semibold">Web Development</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-gray-400">Also exploring</p>
                  <p className="mt-1 font-semibold">Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-white/5 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <p className="leading-8 text-gray-400">
              I'm Aditya Singh, a developer interested in full stack web
              development, Python programming, and data analytics. My
              project work includes a Cricket Website and a Student
              Management Portal. I am continuously improving my technical
              skills and looking for opportunities to contribute to
              real-world software projects.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#0d1220] p-6">
              <p className="text-sm text-gray-400">Current Education</p>
              <h3 className="mt-2 text-xl font-bold">
                Master of Computer Applications
              </h3>
              <p className="mt-2 text-gray-400">AKTU · 2025–2027</p>
              <p className="mt-4 text-sm text-cyan-300">CGPA: 7.8</p>
              <div className="my-5 border-t border-white/10" />
              <p className="text-sm text-gray-400">Previous Education</p>
              <h3 className="mt-2 font-bold">
                Bachelor of Computer Applications
              </h3>
              <p className="mt-2 text-gray-400">2022–2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          What I work with
        </p>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Technologies I use and continue to develop my skills in.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/5"
            >
              <p className="text-xs text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-bold transition group-hover:text-cyan-300">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-white/5 bg-white/[0.02] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Things I'm building
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            A collection of web development, Python, machine learning,
            and data analytics projects.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-3xl border border-white/10 bg-[#0b101d] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-4xl font-black text-white/10">
                    {project.number}
                  </span>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs text-gray-500">
                    {project.status}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-gray-500">
            Project descriptions are summaries. Update each project with
            its actual features, GitHub repository, and live demo when
            available. Only claim completed work that you have actually built.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 text-center sm:p-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Let's connect
          </p>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            I'm open to discussing development opportunities, projects,
            and collaborations. Feel free to get in touch.
          </p>

          <a
            href="mailto:adityasingh742494@gmail.com"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-7 py-4 font-bold text-[#080b14] transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Contact Me →
          </a>

          <p className="mt-5 break-all text-sm text-gray-400">
            adityasingh742494@gmail.com
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/its-adityasingh001"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aditya-singh-041a49257"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Aditya Singh. All rights reserved.
          </p>
          <a href="#home" className="transition hover:text-cyan-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

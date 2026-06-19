import Link from "next/link";
import Image from "next/image";
import myImage from "../../public/sabeeh.jpeg";
import { allProjects, allTestimonials, AllExperience } from "./data";
export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-5 overflow-hidden"
      >
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="reveal in text-sm font-medium text-accent tracking-widest uppercase mb-4">
                Available for work
              </p>
              <h1 className="reveal in d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                Hi, I'm <span className="text-accent">Sabeeh</span>
              </h1>
              <p className="reveal in d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
                Experienced{" "}
                <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                  MERN Stack Developer
                </strong>
                . I build scalable, full-stack web applications that people love
                to use — fast, secure, and intuitive.
              </p>
              <div className="reveal in d3 flex flex-wrap gap-4">
                <Link
                  href="#work"
                  className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
                >
                  View my work
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
                >
                  Get in touch
                </Link>
              </div>
              <div className="reveal in d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                    15+
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Projects done
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                    8+
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Happy clients
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                    1.5+y
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal in d2 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="pf w-full h-full rounded-3xl relative overflow-hidden">
                  <Image
                    src={myImage.src}
                    alt="Sabeeh — MERN Stack Developer"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">
                  Open to projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
              What I do
            </p>
            <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
              Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="reveal in d1 card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
                Full Stack Dev
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                End-to-end web application development using the MERN stack
                (MongoDB, Express, React, Node.js). Scalable, secure, and
                production-ready architectures.
              </p>
            </article>

            <article className="reveal in d2 card-h group bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-accent">
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Frontend Dev
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Building highly interactive, pixel-perfect, and responsive user
                interfaces with React, Next.js, and Tailwind CSS. Focus on
                performance and user experience.
              </p>
            </article>

            <article className="reveal in d3 card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
                Backend & APIs
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Architecting robust backend systems and RESTful APIs. Managing
                databases and authentication with Node.js, Express, MongoDB, and
                JWT.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ WORK ═══ */}
      <section id="work" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
                Portfolio
              </p>
              <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
                Selected work
              </h2>
            </div>
            <Link
              href="/projects"
              className="reveal in d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
            >
              All projects &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allProjects.slice(0, 3).map((p, index) => {
              const isFirst = index === 0;
              const delayClass = index === 0 ? "d1" : index === 1 ? "d2" : "d3";
              return (
                <article
                  key={p.id}
                  className={`card-h reveal in ${delayClass} group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent ${isFirst ? "md:row-span-2" : ""}`}
                >
                  <div
                    className={`pf w-full ${isFirst ? "h-64 md:h-80" : "h-48"} relative`}
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={isFirst ? "p-7" : "p-6"}>
                    <div
                      className={`flex flex-wrap gap-2 ${isFirst ? "mb-4" : "mb-3"}`}
                    >
                      {p.tags.slice(0, 6).map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-xs ${i === 0 ? "bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"} px-3 py-1 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={p.url}>
                      <h3
                        className={`font-display font-bold ${isFirst ? "text-2xl mb-2" : "text-xl mb-1.5"} text-zinc-900 dark:text-white`}
                      >
                        {p.title}
                      </h3>
                    </Link>
                    <p
                      className={`text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed ${isFirst ? "mb-5" : "mb-4"}`}
                    >
                      {isFirst && p.longDesc ? p.longDesc : p.desc}
                    </p>
                    <Link
                      href={p.url}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                    >
                      View project{" "}
                      {isFirst ? (
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      ) : (
                        <>&rarr;</>
                      )}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal in order-2 md:order-1">
              <div className="pf w-full aspect-square max-w-sm mx-auto rounded-3xl relative overflow-hidden">
                <Image
                  src={myImage.src}
                  alt="Sabeeh — MERN Stack Developer"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
                About me
              </p>
              <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
                A bit about
                <br />
                who I am
              </h2>
              <p className="reveal in d2 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                I am a Junior Software Engineer with 1.5+ years of professional
                experience specializing in frontend development using React.js,
                Next.js, TypeScript, Redux Toolkit, and modern UI technologies.
                I am experienced in building scalable admin dashboards, HRMS
                platforms, booking systems, and business management
                applications.
              </p>
              <p className="reveal in d3 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                Skilled in API integration, state management, form validation,
                responsive design, and performance optimization, I also possess
                working knowledge of full-stack development with Node.js,
                Express.js, MongoDB, and PostgreSQL. Currently, I am pursuing a
                Bachelor of Computer Applications (BCA) while contributing to
                production-grade software solutions in a collaborative
                development environment.
              </p>
              <div className="reveal in d4">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-4">
                  Stack & tools
                </p>
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2.5">
                      Programming Languages
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list">
                      {["JavaScript", "TypeScript", "HTML5", "CSS3"].map(
                        (skill) => (
                          <span
                            key={skill}
                            role="listitem"
                            className="stag text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full hover:border-accent transition-colors"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2.5">
                      Web Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list">
                      {[
                        "React.js",
                        "Next.js",
                        "Redux Toolkit",
                        "RTK Query",
                        "React Hook Form",
                        "Zod",
                        "REST APIs",
                      ].map((skill) => (
                        <span
                          key={skill}
                          role="listitem"
                          className="stag text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full hover:border-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2.5">
                      Styling & UI
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list">
                      {[
                        "Tailwind CSS",
                        "Shadcn UI",
                        "Bootstrap",
                        "SCSS",
                        "Material UI",
                      ].map((skill) => (
                        <span
                          key={skill}
                          role="listitem"
                          className="stag text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full hover:border-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2.5">
                      Backend & Databases
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list">
                      {[
                        "Node.js",
                        "Express.js",
                        "JWT",
                        "Socket.IO",
                        "MongoDB",
                        "PostgreSQL",
                      ].map((skill) => (
                        <span
                          key={skill}
                          role="listitem"
                          className="stag text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full hover:border-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2.5">
                      Tools & Concepts
                    </h3>
                    <div className="flex flex-wrap gap-2" role="list">
                      {[
                        "Git",
                        "GitHub",
                        "AWS",
                        "NGINX",
                        "Figma",
                        "MVC",
                        "Multer",
                      ].map((skill) => (
                        <span
                          key={skill}
                          role="listitem"
                          className="stag text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full hover:border-accent transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Career path
            </p>
            <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
              Experience
            </h2>
          </div>

          <div className="max-w-3xl flex flex-col gap-8">
            {AllExperience.map((exp, index) => {
              const delayClass = index === 0 ? "d1" : index === 1 ? "d2" : "d3";
              const bullets = exp.bulletPoints;
              
              return (
                <div key={exp.id} className={`reveal in ${delayClass} relative pl-8 border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0`}>
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-white dark:ring-zinc-950"></div>
                  
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-6 sm:p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 font-medium">{exp.company}</p>
                        <p className="text-sm text-zinc-500 mt-1">{exp.location}</p>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-block bg-white dark:bg-zinc-800 text-accent text-xs font-medium border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className={`space-y-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed ${exp.tags && exp.tags.length > 0 ? "mb-6" : ""}`}>
                      {bullets?.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent mt-1 shrink-0">✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full transition-colors hover:border-accent">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="reviews" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Social proof
            </p>
            <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
              What clients say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allTestimonials.map((t, index) => {
              const delayClass = index === 0 ? "d1" : index === 1 ? "d2" : "d3";
              return (
                <blockquote
                  key={t.id}
                  className={`reveal in ${delayClass} bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800`}
                >
                  <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-accent fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <footer className="flex items-center gap-3">
                    <div className="pf w-10 h-10 rounded-full shrink-0 relative overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-zinc-900 dark:text-white">
                        {t.name}
                      </p>
                      {t.role && (
                        <p className="text-xs text-zinc-500">{t.role}</p>
                      )}
                    </div>
                  </footer>
                </blockquote>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      {/* <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">Thoughts</p>
              <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">From the blog</h2>
            </div>
            <Link href="/blog" className="reveal in d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl">All articles &rarr;</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <article className="reveal in d1 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
              <div className="pf w-full h-44 relative">
                <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80" alt="Why I ditched CSS frameworks" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">Design</span>
                  <span className="text-xs text-zinc-400">Mar 8, 2025</span>
                </div>
                <Link href="/blog-article">
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">Why I ditched heavy CSS frameworks for Tailwind</h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">After years of fighting specificity wars, here's what finally convinced me to make the switch.</p>
                <Link href="/blog-article" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">Read more &rarr;</Link>
              </div>
            </article>

            <article className="reveal in d2 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
              <div className="pf w-full h-44 relative">
                <Image src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80" alt="Design systems" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">Dev</span>
                  <span className="text-xs text-zinc-400">Feb 21, 2025</span>
                </div>
                <Link href="/blog-article">
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">Building a design system from scratch in a weekend</h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">Tokens, components, docs — the process I follow to spin up a coherent system in 48 hours.</p>
                <Link href="/blog-article" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">Read more &rarr;</Link>
              </div>
            </article>

            <article className="reveal in d3 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
              <div className="pf w-full h-44 relative">
                <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80" alt="Freelance lessons" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">Freelance</span>
                  <span className="text-xs text-zinc-400">Jan 14, 2025</span>
                </div>
                <Link href="/blog-article">
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">5 lessons from my first year of full-time freelancing</h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">Contracts, pricing, scope creep — the things nobody tells you before you go solo.</p>
                <Link href="/blog-article" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">Read more &rarr;</Link>
              </div>
            </article>

          </div>
        </div>
      </section> */}

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
                  Get in touch
                </p>
                <h2 className="reveal in d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                  Let's work
                  <br />
                  together
                </h2>
                <p className="reveal in d2 text-zinc-400 leading-relaxed mb-8">
                  I'm open to full-stack and frontend development opportunities, short or long-term.
                  Whether you need a complete MERN stack application, a robust API, or a responsive frontend — let's talk.
                </p>

                <div className="reveal in d3 flex flex-col gap-4">
                  <a
                    href="mailto:mohammedsabeehkc@gmail.com"
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm">mohammedsabeehkc@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sabeeh-kc"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </span>
                    <span className="text-sm">linkedin.com/in/sabeeh-kc</span>
                  </a>
                  <a
                    href="https://github.com/sabeehkc"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </span>
                    <span className="text-sm">github.com/sabeehkc</span>
                  </a>
                </div>
              </div>

              <div className="reveal in d2">
                <form action="#" method="POST" noValidate>
                  <div className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fname"
                          className="block text-xs font-medium text-zinc-400 mb-1.5"
                        >
                          Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="fname"
                          name="name"
                          placeholder="Jane Smith"
                          required
                          autoComplete="name"
                          className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="femail"
                          className="block text-xs font-medium text-zinc-400 mb-1.5"
                        >
                          Email <span aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="femail"
                          name="email"
                          placeholder="jane@company.com"
                          required
                          autoComplete="email"
                          className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="fsubject"
                        className="block text-xs font-medium text-zinc-400 mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="fsubject"
                        name="subject"
                        placeholder="Project inquiry"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fmessage"
                        className="block text-xs font-medium text-zinc-400 mb-1.5"
                      >
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="fmessage"
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        required
                        className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors"
                    >
                      Send message &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

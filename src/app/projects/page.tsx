"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "../data";

const filterOptions = [
  { value: "all", label: "All (4)" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "webapp", label: "Web App" },
  { value: "template", label: "Template" },
];



export default function Projects() {
  const [filter, setFilter] = useState("all");

  const visibleProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-36 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="reveal in font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
            All Projects
          </h1>
          <p className="reveal in text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
            A complete look at my work across UI/UX design, frontend development and landing pages.
          </p>
          <div className="reveal in flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  filter === f.value
                    ? "bg-accent text-white border-accent"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((p) => (
              <div
                key={p.id}
                className="animate-in fade-in zoom-in-95 duration-300"
              >
                <article className="project-card group h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
                  <Link href={p.url} className="block pf w-full h-52 relative">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                  <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-full ${
                            tag === p.categoryLabel
                              ? "bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700"
                              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={p.url}>
                      <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 grow">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        href={p.url}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                      >
                        View project &rarr;
                      </Link>
                      <span className="text-xs text-zinc-400">{p.year}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          {visibleProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-sm">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-4">
                Ready to start?
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Want your project here?
              </h2>
              <p className="text-zinc-400 max-w-md mx-auto mb-8">
                I'm available for new projects. Tell me about what you're building
                and let's see if we're a good fit.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 shimmer bg-accent text-white font-medium px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
              >
                Start a project &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

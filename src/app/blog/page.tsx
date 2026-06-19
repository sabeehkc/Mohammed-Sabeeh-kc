"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allPosts = [
  {
    id: 1,
    title: "Building a design system from scratch in a weekend",
    category: "Dev",
    date: "Feb 21, 2025",
    desc: "Tokens, components, docs — the exact process I follow to spin up a coherent design system in 48 hours.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80",
    url: "/blog-article",
    delay: "reveal-delay-1",
  },
  {
    id: 2,
    title: "5 lessons from my first year of full-time freelancing",
    category: "Freelance",
    date: "Jan 14, 2025",
    desc: "Contracts, pricing, scope creep, burnout — the things nobody tells you before you go solo.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
    url: "/blog-article",
    delay: "reveal-delay-2",
  },
  {
    id: 3,
    title: "Alpine.js is the jQuery of the modern era — and that's a compliment",
    category: "Dev",
    date: "Dec 3, 2024",
    desc: "No build step, no virtual DOM, no config hell. Just sprinkle some behaviour and ship.",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80",
    url: "/blog-article",
    delay: "reveal-delay-3",
  },
  {
    id: 4,
    title: "The 7 UX laws every frontend dev should memorise",
    category: "Design",
    date: "Nov 18, 2024",
    desc: "Fitts's Law, Hick's Law, Jakob's Law — the cognitive science behind every good interface decision.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80",
    url: "/blog-article",
    delay: "reveal-delay-1",
  },
  {
    id: 5,
    title: "How I manage 3 client projects at once without losing my mind",
    category: "Freelance",
    date: "Oct 30, 2024",
    desc: "My exact Notion setup, communication rhythms, and the one rule I never break.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80",
    url: "/blog-article",
    delay: "reveal-delay-2",
  },
  {
    id: 6,
    title: "Dark mode done right: beyond just inverting colours",
    category: "Dev",
    date: "Oct 5, 2024",
    desc: "Contrast ratios, elevation, shadows — what most dark mode implementations get completely wrong.",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80",
    url: "/blog-article",
    delay: "reveal-delay-3",
  },
];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visiblePosts =
    activeFilter === "all"
      ? allPosts
      : allPosts.filter((post) => post.category.toLowerCase() === activeFilter);

  return (
    <>
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <p className="reveal in text-xs font-medium text-accent tracking-widest uppercase mb-3">Writing</p>
          <h1 className="reveal in d1 font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
            The Blog
          </h1>
          <p className="reveal in d2 text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
            Thoughts on UI/UX design, frontend development, and the realities of full-time freelancing. No fluff.
          </p>

          <div className="reveal in d3 flex flex-wrap gap-2 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeFilter === "all"
                  ? "bg-accent text-white border-accent"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("design")}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeFilter === "design"
                  ? "bg-accent text-white border-accent"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveFilter("dev")}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeFilter === "dev"
                  ? "bg-accent text-white border-accent"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
              }`}
            >
              Dev
            </button>
            <button
              onClick={() => setActiveFilter("freelance")}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeFilter === "freelance"
                  ? "bg-accent text-white border-accent"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
              }`}
            >
              Freelance
            </button>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blog-article"
            className="reveal in group block rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors"
          >
            <div className="grid md:grid-cols-2">
              <div className="photo-frame h-64 md:h-auto relative">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80"
                  alt="Why I ditched CSS frameworks"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                    Design
                  </span>
                  <span className="text-xs text-zinc-400">March 8, 2025 &middot; 7 min read</span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                  Why I ditched heavy CSS frameworks for Tailwind — and what changed
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                  After years of fighting specificity wars and unused kilobytes, here's what finally convinced me to
                  make the switch — and the measurable impact it had on both my workflow and my clients' performance scores.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent nav-link">
                  Read article &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <article
                key={post.id}
                className="animate-in fade-in zoom-in-95 duration-300 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent"
              >
                <div className="photo-frame w-full h-44 relative">
                  <Image src={post.img} alt={post.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-400">{post.date}</span>
                  </div>
                  <Link href={post.url}>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{post.desc}</p>
                  <Link
                    href={post.url}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {visiblePosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 text-sm">No posts in this category yet.</p>
            </div>
          )}

          <nav className="reveal in flex items-center justify-center gap-2 mt-14" aria-label="Pagination">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent text-white text-sm font-medium">1</span>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
            >
              2
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
            >
              3
            </Link>
            <span className="text-zinc-400 text-sm px-1">&hellip;</span>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogArticle() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(Math.min(100, Math.round((window.scrollY / scrollHeight) * 100)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-[#FF6B2B] z-[100] transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      ></div>

      <article>
        <header className="pt-32 pb-12 max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
              Design
            </span>
            <span className="text-xs text-zinc-400">March 8, 2025 &middot; 7 min read</span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
            Why I ditched heavy CSS frameworks for Tailwind — and what changed
          </h1>

          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            After years of fighting specificity wars and unused kilobytes, here's what finally convinced me to make the switch —
            and the measurable impact it had on both my workflow and my clients' performance scores.
          </p>

          <div className="flex items-center gap-4 py-6 border-t border-b border-zinc-100 dark:border-zinc-900">
            <div className="photo-frame w-12 h-12 rounded-full shrink-0 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Eliott"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">Eliott</p>
              <p className="text-xs text-zinc-500">UI/UX Designer &amp; Frontend Developer</p>
            </div>
            <div className="ml-auto flex gap-3">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent hover:border-accent transition-colors"
                aria-label="Share on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-accent hover:border-accent transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="photo-frame w-full h-72 md:h-96 rounded-2xl relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
              alt="Code editor with CSS"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-16 prose-article">
          <h2>The problem with traditional CSS frameworks</h2>
          <p>
            I spent three years building projects with Bootstrap and Bulma. They're great frameworks — I won't pretend
            otherwise. But the longer I used them, the more I found myself fighting the system rather than working with it.
          </p>
          <p>
            Every new project started the same way: import the framework, immediately override half of it, write a mountain
            of custom CSS to undo the defaults, then spend 40% of dev time debugging specificity issues. The final CSS bundle
            was usually 80–120kb, of which maybe 15% was actually used.
          </p>

          <blockquote>
            <p>"The moment you start writing <code>!important</code> to override a framework's defaults, something has gone fundamentally wrong."</p>
          </blockquote>

          <h2>What made me give Tailwind a proper shot</h2>
          <p>
            I'd dismissed Tailwind for a long time. The utility-class approach looked messy in the HTML, and I was convinced
            it would make templates unreadable. Then a client asked me to maintain an existing Tailwind project, and I had no
            choice.
          </p>
          <p>Two weeks in, I was converted. Here's what changed my mind:</p>
          <ul>
            <li>
              <strong>No context switching.</strong> I stopped bouncing between HTML and CSS files. Everything is right there in
              the markup.
            </li>
            <li>
              <strong>Zero specificity wars.</strong> Utility classes are all single-level selectors. You never fight the
              cascade.
            </li>
            <li>
              <strong>Tiny final bundles.</strong> PurgeCSS (now built in) means production builds are typically 5–15kb. My
              average went from 110kb to 8kb.
            </li>
            <li>
              <strong>The design system is the config.</strong> Spacing, colours, typography — all centralised in{" "}
              <code>tailwind.config.js</code> (or CSS theme file in Tailwind v4).
            </li>
          </ul>

          <h2>The real-world performance impact</h2>
          <p>
            I rebuilt a client's marketing site using Tailwind CSS + React, replacing their WordPress + Bootstrap 4 stack.
            The results after one month were hard to argue with:
          </p>
          <ul>
            <li>Lighthouse performance score: <strong>47 &rarr; 96</strong></li>
            <li>CSS bundle: <strong>118kb &rarr; 7kb</strong></li>
            <li>Time to first contentful paint: <strong>3.8s &rarr; 0.9s</strong></li>
            <li>Bounce rate: <strong>-22%</strong></li>
          </ul>

          <h2>What I still miss from traditional frameworks</h2>
          <p>
            It's not all perfect. A few things I still reach for plugins or custom components to replace:
          </p>
          <ul>
            <li>Pre-built complex components like modals, dropdowns, and datepickers</li>
            <li>Form validation styling</li>
            <li>Opinionated grid systems — Tailwind's grid is powerful but verbose for complex layouts</li>
          </ul>
          <p>
            The ecosystem has largely caught up here. Headless UI, Radix UI, and shadcn/ui cover most of the gaps beautifully
            without adding unnecessary weight.
          </p>

          <h2>My recommendation</h2>
          <p>
            If you're building anything custom — a SaaS product, a portfolio, a landing page — Tailwind is the right tool.
            The initial learning curve is about a week. After that, you'll ship faster than you ever did before.
          </p>
          <p>
            If you need a WordPress theme or a simple brochure site with minimal custom styling, Bootstrap is still perfectly
            fine. Use the right tool for the job.
          </p>

          <hr />
          <p>
            <em>
              If this was helpful, share it with a frontend dev friend who's still on Bootstrap 4. 🧡
            </em>
          </p>
        </div>
      </article>

      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-8">More from the blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="reveal in card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <div className="photo-frame w-full h-40 relative">
                <Image
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80"
                  alt="Alpine.js"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-zinc-400 mb-2 block">Dec 3, 2024 &middot; Dev</span>
                <Link href="/blog-article">
                  <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    Alpine.js is the jQuery of the modern era
                  </h3>
                </Link>
                <Link href="/blog-article" className="text-sm font-medium text-accent nav-link">
                  Read &rarr;
                </Link>
              </div>
            </article>

            <article className="reveal in card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <div className="photo-frame w-full h-40 relative">
                <Image
                  src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80"
                  alt="Dark mode"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-zinc-400 mb-2 block">Oct 5, 2024 &middot; Dev</span>
                <Link href="/blog-article">
                  <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    Dark mode done right: beyond just inverting colours
                  </h3>
                </Link>
                <Link href="/blog-article" className="text-sm font-medium text-accent nav-link">
                  Read &rarr;
                </Link>
              </div>
            </article>

            <article className="reveal in card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
              <div className="photo-frame w-full h-40 relative">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80"
                  alt="UX laws"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-zinc-400 mb-2 block">Nov 18, 2024 &middot; Design</span>
                <Link href="/blog-article">
                  <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    The 7 UX laws every frontend dev should memorise
                  </h3>
                </Link>
                <Link href="/blog-article" className="text-sm font-medium text-accent nav-link">
                  Read &rarr;
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

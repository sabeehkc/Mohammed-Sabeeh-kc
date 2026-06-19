import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects } from "../../data";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = allProjects.find((p) => p.id === parseInt(resolvedParams.id, 10));

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-accent transition-colors mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to projects
        </Link>
        
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-4 py-1.5 rounded-full">
              {project.categoryLabel}
            </span>
            <span className="text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-4 py-1.5 rounded-full">
              {project.year}
            </span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-8">
            {project.title}
          </h1>
          
          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl">
            {project.desc}
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
        <div className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden relative shadow-2xl">
          <Image 
            src={project.img} 
            alt={project.title} 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 prose prose-zinc dark:prose-invert prose-lg max-w-none">
          <h2 className="font-display font-bold text-3xl mb-6 text-zinc-900 dark:text-white">About the project</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {project.longDesc || project.desc}
          </p>
        </div>
        
        <div>
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800">
            <h3 className="font-display font-bold text-xl mb-6 text-zinc-900 dark:text-white">Technologies</h3>
            <ul className="flex flex-col gap-3">
              {project.tags.map((tag) => (
                <li key={tag} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {tag}
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <a 
                href={project.url} 
                className="w-full inline-flex justify-center items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-6 py-3.5 rounded-xl hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Visit Live Site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

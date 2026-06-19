import { MetadataRoute } from 'next'
import { allProjects } from './data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sabeehkc.vercel.app'

  // Dynamic projects routes
  const projects = allProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projects,
  ]
}

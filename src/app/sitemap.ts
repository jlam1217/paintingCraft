import { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/projects'
import { NAV_ITEMS } from '@/lib/constants'
import { getAllServices } from '@/lib/data'

const baseUrl = 'https://brushstrokepro.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = NAV_ITEMS.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }))

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const serviceRoutes = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const extraRoutes = ['/reviews', '/faq', '/service-areas'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...extraRoutes]
}


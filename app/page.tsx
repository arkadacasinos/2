import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ContentSections } from '@/components/content-sections'
import { Faq } from '@/components/faq'
import { Reviews } from '@/components/reviews'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ContentSections />
        <Faq />
        <Reviews />
      </main>
      <SiteFooter />
    </div>
  )
}

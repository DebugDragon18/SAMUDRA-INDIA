import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const newsArticles = [
  {
    id: '1',
    title: 'New Ocean Data Reveals Surprising Marine Life Migration Patterns',
    description: 'A recent study published in "Oceanic Science" highlights unexpected migration routes of several key marine species, likely influenced by changing sea temperatures.',
    imageUrl: 'https://picsum.photos/seed/news-1/600/400',
    imageHint: 'marine life',
    link: '#',
  },
  {
    id: '2',
    title: 'AquaLens Platform Instrumental in a Major Coral Reef Restoration Project',
    description: 'Researchers have successfully used the AquaLens data platform to monitor and manage a large-scale coral reef restoration effort, leading to a 40% increase in coral health.',
    imageUrl: 'https://picsum.photos/seed/news-2/600/400',
    imageHint: 'coral reef',
    link: '#',
  },
  {
    id: '3',
    title: 'Announcing Our Partnership with the Global Oceanographic Institute',
    description: 'We are thrilled to partner with the GOI to further our mission of making ocean data universally accessible and actionable for researchers and policymakers worldwide.',
    imageUrl: 'https://picsum.photos/seed/news-3/600/400',
    imageHint: 'research institute',
    link: '#',
  },
];

export function LatestNewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Latest News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Stay updated with the latest developments, research, and stories from the world of ocean data.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <Card key={article.id} className="flex flex-col overflow-hidden border-white/10 bg-card">
              <div className="relative h-48 w-full">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  data-ai-hint={article.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-foreground/80">{article.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={article.link}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

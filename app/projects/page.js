import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Application météo',
    description: 'Application web permettant d etre informé sur la météo en France. Projet conçu lors de ma deuxième année de BTS.',
    image: 'https://meteo-mc.fr/wp-content/uploads/2025/02/Previsions-meteorologiques-A-quoi-sattendre-cette-semaine-800x530.png',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/josh1710/Meteo',
  },
  {
    title: 'Site E-commerce',
    description: 'Plateforme e-commerce complète avec système de paiement, gestion des commandes. Projet conçu lors de ma première année de BTS.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/josh1710/ProjetWEB',
  },
  {
    title: 'Jeu Snake',
    description: 'Jeu Snake conçu lors de ma première année de BTS.',
    image: 'https://crestwoodvethospital.com/wp-content/uploads/2023/05/Garter_Snake-800x530-1.jpg',
    technologies: ['Python'],
    github: 'https://github.com/josh1710/SNAKE/tree/main',
  },
  {
    title: 'Outils Traçage Crypto',
    description: 'Outils de Traçage de portefeuille sur la blockchain solana conçu lors de mon temps libre au cours de ma deuxième année de BTS.',
    image: 'https://watcher.guru/news/wp-content/uploads/2024/12/Screen-Shot-2024-12-08-at-9.03.22-PM-800x530.jpg.webp',
    technologies: ['Python'],
    github: 'https://github.com/josh1710/Wallet-tracker/tree/main',
  }
];

export default function Projects() {
  return (
    <div className="text-[#1E40AF] container mx-auto px-4 py-16">
      <SectionHeader
        title="Mes Projets"
        description="Découvrez les projets que j'ai réalisés dans le cadre de ma formation BTS SIO."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#1E40AF] text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code source
                  </a>
                </Button>
                <Button asChild>

                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
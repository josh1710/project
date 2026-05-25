import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Download } from 'lucide-react';

const experiences = [
  {
    title: 'Stage Développeur Web',
    company: 'Entreprise SAGE',
    period: 'Janvier 2022 - Février 2022',
    description: "Premier pas dans le développement web et logiciel, avec la découverte des langages CSS et HTML à travers le développement d'une calculatrice et d'un jeu Snake.",
    technologies: ['CSS', 'HTML']
  },
  {
    title: 'Alternance BTS SIO',
    company: 'STAGO',
    period: 'Aout 2023 - Juillet 2026',
    description: "Conception et développement d'un site web vitrine pour une association locale. Migration de bases de données internes de l'entreprise. Tests d'un site web intranet avant sa publication.",
    technologies: ['SQL', 'HTML', 'CSS', 'JavaScript'],
    synthesisFile: '/documents/tableau-synthese-e4-bts-sio-2026.xlsx'
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16 text-[#1E40AF]">
      <SectionHeader
        title="Expérience professionnelle"
        description="Mes expériences professionnelles et projets clients réalisés pendant ma formation."
      />

      <div className="mt-16 space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.title} className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                {exp.synthesisFile ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="-ml-4 h-auto gap-2 px-4 py-2 text-xl font-bold text-[#1E40AF] hover:text-[#1E40AF]"
                      >
                        {exp.title}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-72">
                      <DropdownMenuItem asChild>
                        <a href={exp.synthesisFile} download>
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger le tableau de synthèse
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <h3 className="text-xl font-bold text-[#1E40AF]">{exp.title}</h3>
                )}
                <p className="text-[#1E40AF]">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <p className="mt-4 text-[#1E40AF]">{exp.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

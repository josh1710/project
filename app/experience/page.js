import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Stage Développeur Web',
    company: 'Entreprise SAGE',
    period: 'Janvier 2022 - Février 2022',
    description: "Premier pas dans le développement WEB et logiciel découverte des langages CSS et HTML (developpement calculatrice ou encore jeu snake).",
    technologies: ['CSS', 'HTML']
  },
  {
    title: 'Alternance BTS SIO',
    company: 'STAGO',
    period: 'Aout 2023 - Juillet 2025',
    description: "Conception et développement d'un site web vitrine pour une association locale. Migration de bases de donnée interne de l'entreprise. Testing d'un site web intranet avant sa publication.",
    technologies: ['SQL', 'HTML', 'CSS', 'JavaScript']
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
                <h3 className="text-xl text-[#1E40AF] font-bold">{exp.title}</h3>
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
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { 
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone
} from 'lucide-react';

const skills = [
  {
    icon: Globe,
    title: 'Développement Web',
    description: 'HTML, CSS, JavaScript, React, Next.js'
  },
  {
    icon: Server,
    title: 'Back-end',
    description: 'Node.js, PHP, Python, APIs RESTful'
  },
  {
    icon: Database,
    title: 'Bases de données',
    description: 'MySQL, PostgreSQL, MongoDB'
  },
  {
    icon: Smartphone,
    title: 'Développement Mobile',
    description: 'React Native, Progressive Web Apps'
  },
  {
    icon: Code,
    title: 'Langages de programmation',
    description: 'Java, C#, Python'
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, Responsive Design'
  }
];

export default function About() {
  return (
    <div className="container text-[#1E40AF] mx-auto px-4 py-16">
      <SectionHeader
        title="À propos de moi"
        description="Passionné par l'informatique et le développement, je suis actuellement en formation BTS SIO option SLAM."
      />

      <div className="mt-16">
        <div className="prose mx-auto max-w-[700px] dark:prose-invert">
          <p className="text-lg">
            Je suis un étudiant en BTS Services Informatiques aux Organisations,
            spécialisé dans le développement d'applications. Ma passion pour
            l'informatique m'a conduit à poursuivre cette formation, où j'ai pu
            développer mes compétences techniques et ma créativité.
          </p>
          <p className="text-lg">
            Mon objectif est de devenir un développeur full-stack capable de
            concevoir et réaliser des applications web innovantes et performantes.
            Je m'intéresse particulièrement aux nouvelles technologies et aux
            bonnes pratiques de développement.
          </p>
        </div>

        <h3 className="mt-16 mb-8 text-center text-2xl font-bold">
          Mes compétences
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} className="p-6">
                <Icon className="h-12 w-12  text-[#1E40AF]" />
                <h4 className="mt-4 text-[#1E40AF] font-bold">{skill.title}</h4>
                <p className="mt-2 text-sm text-[#1E40AF]">
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
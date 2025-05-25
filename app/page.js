import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl text-[#1E40AF] font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="mt-4 max-w-[700px] text-[#1E40AF] ">
          Étudiant en BTS Services Informatiques aux Organisations, passionné par
          le développement web et les nouvelles technologies.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/projects">
              Voir mes projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Me contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
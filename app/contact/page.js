'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/toast';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message envoyé !',
      description: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="text-[#1E40AF] container mx-auto px-4 py-16">
      <SectionHeader
        title="Contact"
        description="N'hésitez pas à me contacter pour toute question ou proposition de collaboration."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <h3 className=" text-[#1E40AF] text-xl font-bold">Formulaire de contact</h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nom
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h3 className=" text-[#1E40AF] text-xl font-bold">Autres moyens de contact</h3>
          <div className="mt-4 space-y-4">
            <a
              href="mailto:joshuaribeiro17@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              joshuaribeiro17@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/josh-ribeiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/josh1710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
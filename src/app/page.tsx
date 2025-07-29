import { Github, Linkedin, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Admin dashboard built with Angular, REST API integration, and NgRx state management',
      link: 'https://github.com/saiabbhiram/ecommerce-dashboard',
      linkLabel: 'View on GitHub'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Angular and Tailwind CSS',
      link: 'https://saiabbhiram.dev',
      linkLabel: 'Visit Website'
    }
  ];

  const skills = [
    'Angular',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'NgRx & RxJS',
    'Git & GitHub',
    'REST APIs',
    'Firebase'
  ];

  return (
    <main className="min-h-dvh bg-background p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-foreground">Sai Abbhiram Valupadasu</h1>
        <p className="text-lg text-muted-foreground">Angular Frontend Developer</p>
        <div className="flex justify-center mt-4 gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/saiabbhiram" aria-label="GitHub">
              <Github className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:saiabbhiram@example.com" aria-label="Email">
              <Mail className="size-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/saiabbhiram" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
          </Button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkLabel} →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Technical Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">{skill}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-center text-sm text-muted-foreground mt-12 pb-6">
        © {new Date().getFullYear()} Sai Abbhiram Valupadasu. All rights reserved.
      </footer>
    </main>
  );
}
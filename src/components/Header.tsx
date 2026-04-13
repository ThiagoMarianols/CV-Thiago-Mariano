'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const { data } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* <div className="font-bold text-xl text-primary">{data.name.split(' ')[0]}</div> */}
        
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Experiência
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </button>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}

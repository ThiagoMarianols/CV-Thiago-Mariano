'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function Skills() {
  const { data, text } = useLanguage();

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-primary">{text.skills}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skills.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">{text.softSkills}</h3>
          <div className="flex flex-wrap gap-3">
            {data.softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium rounded-full border border-border text-muted-foreground hover:border-primary hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">{text.languages}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary"
              >
                <span className="font-medium text-foreground">{lang.name}</span>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

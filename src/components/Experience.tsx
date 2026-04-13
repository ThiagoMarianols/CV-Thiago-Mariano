'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function Experience() {
  const { data, text } = useLanguage();

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-primary">{text.experience}</h2>
        
        <div className="space-y-8">
          {data.experience.map((job, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{job.period}</span>
              </div>
              
              {job.project && (
                <p className="text-muted-foreground mb-4">{job.project}</p>
              )}
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <ul className="space-y-2">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

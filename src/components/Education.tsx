'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function Education() {
  const { data, text } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-primary">{text.education}</h2>
        
        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              {edu.focus && (
                <p className="text-sm text-muted-foreground">{edu.focus}</p>
              )}
              {edu.location && (
                <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground">{text.certifications}</h3>
          <ul className="space-y-3">
            {data.certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex items-center gap-2">
                  <span>{cert.name}</span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Ver certificado"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

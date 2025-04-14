import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Sage University, indore',
    period: '2024 - 2028',
    score: '80%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Evergreen English Higher Secondary School',
    period: '2023 - 2024',
    score: '82%',
  },
  {
    degree: 'Secondary (X)',
    institution: "Evergreen English Higher Secondary School",
    period: '2021 - 2022',
    score: '80%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

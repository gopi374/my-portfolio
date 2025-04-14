import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

// Method 1: Import images directly
import notesNeoImg from '/public/assets/notesneo.png';
import neoCodeImg from '/public/assets/emi.png';
import portfolioImg from '/public/assets/portfolio.png';

const projects = [
  {
    title: 'NotesNeo',
    description: 'A comprehensive semester notes platform for students. Access academic notes anytime, anywhere with high-quality content.',
    // Method 1: Use imported image
    image: notesNeoImg,
    // Method 2: Use relative path from public
    // image: './assets/notesneo.png',
    link: 'https://notesneo.app',
    github: 'https://github.com/gopibanjara/notesneo',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'EMI Calculater',
    description: 'A simple EMI calculator to help users calculate their monthly loan payments based on the principal amount, interest rate, and loan term.',
    image: neoCodeImg,
    link: 'https://calculator-emi-bolt.netlify.app/',
    github: 'https://github.com/gopibanjara374/',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing projects and skills with modern design and smooth animations.',
    image: portfolioImg,
    link: 'https://gopibanjara.netlify.app',
    github: 'https://github.com/gopibanjara/portfolio',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
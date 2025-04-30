import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

// Method 1: Import images directly
// import notesNeoImg from '/public/assets/notesneo.png';
import neoCodeImg from '/public/assets/emi.png';
import portfolioImg from '/public/assets/portfolio.png';

const projects = [
  {
    title: 'karan-mehandi-art',
    description: 'The Mehndi Art Website is a beautifully designed, static Next.js-powered website that showcases traditional and modern henna/mehndi art designs.',
    image: '/assets/krn.png', // Using relative path from public directory
    link: 'https://karan-mehandi-art.netlify.app/',
    github: 'https://github.com/gopi374/karan-mehandi-art',
    tags: ['React', 'Node.js', 'HTML/css'],
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
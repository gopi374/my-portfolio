import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

// Method 1: Import images directly
// import notesNeoImg from '/public/assets/notesneo.png';

const projects = [
  {
    title: 'Food share',
    description: 'A modern Full stack application for a Food Donation Platform that helps reduce food waste by connecting food donors with NGOs and food banks. ',
    image: '/assets/food.png', // Using relative path from public directory
    link: 'https://food-share1.netlify.app/',
    github: 'https://github.com/gopi374/Food-Management-frontend',
    tags: ['React', 'Node.js', 'HTML/css','JS','MONGODB','Express JS'],
  },
  {
    title: 'Expense Tracker',
    description: 'Built full-stack expense platform with 5+ core features for tracking and financial summaries Implemented JWT authentication and protected APIs for secure user data',
    image: '/assets/image.png', // Using relative path from public directory
    link: 'https://expense-tracker-0906.netlify.app/',
    github: 'https://github.com/gopi374/Expense_Tracker',
    tags: ['React', 'Node.js', 'HTML/css','JS','MONGODB','Express JS'],
  },
  {
    title: 'karan-mehandi-art',
    description: 'The Mehndi Art Website is a beautifully designed, static Next.js-powered website that showcases traditional and modern henna/mehndi art designs.',
    image: '/assets/krn.png', // Using relative path from public directory
    link: 'https://karan-mehandi-art.netlify.app/',
    github: 'https://github.com/gopi374/karan-mehandi-art',
    tags: ['React', 'Node.js', 'HTML/css'],
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing projects and skills with modern design and smooth animations.',
    image: '/assets/portfolio.png',
    link: 'https://portfolio-gopibanjara.netlify.app',
    github: 'https://github.com/gopi374/my-portfolio',
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
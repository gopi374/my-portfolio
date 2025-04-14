import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#1a1f2e] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-[#2d3548] text-blue-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#2d3548] text-white rounded-lg hover:bg-[#3d4558] transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

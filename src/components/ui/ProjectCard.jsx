import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-slate-700 shadow-xl">
      {/* Image Section */}
      <div className="h-48 overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded border border-indigo-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-slate-700 pt-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <Github size={16} /> Code
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
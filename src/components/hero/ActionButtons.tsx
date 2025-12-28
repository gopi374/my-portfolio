import React from 'react';
import { Mail } from 'lucide-react';

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <a
        href="#contact"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 transition-transform duration-300 transform hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </a>
    </div>
  );
}

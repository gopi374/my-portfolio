import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "DSA Enthusiast",
    "Problem Solver",
    "Content Creator",
    "Tech Innovator",
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900" />
        
        {/* Animated overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(17,24,39,1))]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-20" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Mesh gradient */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,149,193,0.15),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.15),transparent)]" />
        </div>
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100/10 backdrop-blur-sm text-blue-300 text-sm font-medium px-4 py-2 rounded-full">
                Hey! <span className="inline-block origin-[70%_70%] animate-wave">👋</span> I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                ~gopi Banjara
              </h1>
              <div className="text-xl md:text-2xl text-gray-300">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2">
            {/* Glowing orbs */}
            <div className="absolute w-24 h-24 bg-blue-500/40 top-0 left-0 rounded-full blur-xl animate-floating" />
            <div className="absolute w-24 h-24 bg-purple-500/40 bottom-0 right-0 rounded-full blur-xl animate-floating delay-150" />
            <div className="absolute w-20 h-20 bg-green-500/40 top-4 right-4 rounded-full blur-xl animate-floating delay-300" />
            <div className="absolute w-20 h-20 bg-yellow-500/40 bottom-4 left-4 rounded-full blur-xl animate-floating delay-450" />

            {/* Profile image with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/assets/profile.jpg"
                alt="Gopi Banjara"
                className="relative w-full max-w-lg mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500 ring-4 ring-white/10"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

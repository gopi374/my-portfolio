import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHub } from './components/GitHub';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import useLoading from './hooks/useLoading';
import LoadingScreen from './components/loading/LoadingScreen';

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHub />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        {import.meta.env.PROD && <Analytics />}
      </div>
    </>
  );
}

export default App;
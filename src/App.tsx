import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { PracticalExperience } from './components/PracticalExperience';
import { SoftSkills } from './components/SoftSkills';
import { BeyondCode } from './components/BeyondCode';
import { CareerRoadmap } from './components/CareerRoadmap';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'skills', 'projects', 'interests', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#051424] text-[#d4e4fa] flex flex-col selection:bg-[#4cd7f6]/30 selection:text-[#ffffff]">
      {/* Top Fixed Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 flex flex-col">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <PracticalExperience />
        <SoftSkills />
        <BeyondCode />
        <CareerRoadmap />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <BottomNav activeSection={activeSection} onNavigate={handleNavigate} />
    </div>
  );
}

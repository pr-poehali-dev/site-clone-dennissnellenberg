import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Digital Experience Platform',
      category: 'Web Design & Development',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Branding & Strategy',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Revolution',
      category: 'UX/UI Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile App Experience',
      category: 'Product Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1618005198920-f0cb6201c115?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden smooth-scroll">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8">
        <nav className="flex items-center justify-between">
          <div 
            className="text-xl md:text-2xl font-bold tracking-tight opacity-0 animate-fade-in"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            DENNIS SNELLENBERG
          </div>
          <div className="flex items-center gap-6 md:gap-8 opacity-0 animate-fade-in delay-200">
            <a 
              href="#work" 
              className="text-sm md:text-base hover:text-gray-400 transition-colors duration-300"
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-sm md:text-base hover:text-gray-400 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm md:text-base hover:text-gray-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 md:px-12 relative transition-opacity duration-700"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 800
        }}
      >
        <div className="max-w-7xl w-full">
          <div className="space-y-4 md:space-y-6">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              FREELANCE
            </h1>
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up [animation-delay:0.2s]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DESIGNER &
            </h1>
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up [animation-delay:0.3s]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DEVELOPER
            </h1>
          </div>
          <div className="mt-8 md:mt-12 opacity-0 animate-fade-in [animation-delay:0.5s]">
            <p className="text-base md:text-lg text-gray-400 max-w-md">
              Based in Amsterdam, specializing in creating digital experiences that combine innovative design with seamless functionality.
            </p>
          </div>
          <div className="mt-8 md:mt-10 opacity-0 animate-fade-in [animation-delay:0.6s]">
            <a 
              href="#work"
              className="inline-flex items-center gap-2 text-sm md:text-base border border-white px-6 md:px-8 py-3 md:py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              View My Work
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-delay:0.7s]">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <Icon name="ChevronDown" size={20} className="animate-bounce text-gray-500" />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section 
        id="work" 
        className="py-20 md:py-32 px-6 md:px-12 opacity-0 transition-all duration-1000 ease-out translate-y-20"
        style={{
          transform: `translateY(${Math.max(0, (scrollY - 400) * -0.05)}px)`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-white mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                className="project-card group block"
                style={{
                  opacity: 0,
                  animation: `slideUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="overflow-hidden bg-[#1A1A1A] rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="mt-4 md:mt-6">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 
                      className="text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-gray-400 transition-colors duration-300"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-400">{project.category}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 md:py-32 px-6 md:px-12 bg-[#0F0F0F] opacity-0 transition-all duration-1000 ease-out translate-y-20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 md:mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            About Me
          </h2>
          <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
            <p>
              I'm a freelance designer and developer based in Amsterdam, working at the intersection of design and technology. With over 8 years of experience, I help brands and startups create meaningful digital experiences.
            </p>
            <p>
              My approach combines strategic thinking with meticulous attention to detail. I believe that great design is not just about aesthetics—it's about solving problems and creating value for users.
            </p>
            <p>
              I've had the privilege of working with diverse clients, from innovative startups to established brands, always striving to push boundaries and explore new possibilities in digital design.
            </p>
          </div>
          
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 
                className="text-xl md:text-2xl font-semibold mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Services
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Web Design & Development</li>
                <li>Brand Identity</li>
                <li>UX/UI Design</li>
                <li>Product Strategy</li>
                <li>Creative Direction</li>
              </ul>
            </div>
            <div>
              <h3 
                className="text-xl md:text-2xl font-semibold mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Tools & Tech
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>React & Next.js</li>
                <li>Figma & Adobe Suite</li>
                <li>Three.js & GSAP</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 md:py-32 px-6 md:px-12 opacity-0 transition-all duration-1000 ease-out translate-y-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto">
              I'm currently available for freelance projects. Let's create something amazing together.
            </p>
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-base md:text-lg border border-white px-8 md:px-10 py-4 md:py-5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get In Touch
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-8 md:py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-500">
              © 2024 Dennis Snellenberg. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
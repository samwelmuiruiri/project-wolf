/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Code, 
  Crop, 
  Smartphone, 
  ExternalLink, 
  Send, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram,
  Download,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    alert("Thank you! Your message has been sent.");
    (e.target as HTMLFormElement).reset();
  };

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Header / Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#080808]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://picsum.photos/seed/samwel/100/100" 
              alt="Logo" 
              className="w-10 h-10 rounded-full border-2 border-primary object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tighter">SAMWEL</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-64 h-full bg-primary z-[70] md:hidden p-8 flex flex-col"
            >
              <button className="self-end mb-12" onClick={toggleMenu}>
                <X size={32} />
              </button>
              <ul className="flex flex-col gap-6">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-xl font-semibold"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-[#080808]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-white/10 backdrop-blur-md border-l-4 border-primary p-4 rounded-r-lg mb-8">
              <p className="text-gray-300 text-sm md:text-base space-y-1">
                <span className="block">Networking setup & troubleshooting</span>
                <span className="block">Electronics & circuit design</span>
                <span className="block">Computer software expert</span>
                <span className="block">UI/UX & Web Developer</span>
              </p>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-4">
              Hi, I am <span className="text-primary">Samwel</span><br />
              from Kenya
            </h1>
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-full font-semibold mt-8 hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
            >
              View My Work <ChevronRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <img 
                src="https://picsum.photos/seed/study/600/800" 
                alt="About Samwel" 
                className="w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="w-full md:w-2/3">
              <h2 className="text-5xl font-bold mb-8">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                I am a passionate designer and developer with experience in UI/UX, web development, and app creation. 
                My expertise spans across technical networking, electronics, and modern software solutions.
              </p>

              {/* Tabs */}
              <div className="flex gap-8 border-b border-white/10 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 text-lg font-medium transition-all relative ${activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'skills' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">Tech & Networking Services</span>
                      <p className="text-gray-300">Network Setup & Troubleshooting: Installing routers, switches, and Wi-Fi systems for homes, schools, and businesses.</p>
                    </li>
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">Web & App Development</span>
                      <p className="text-gray-300">Responsive Website Design: Creating modern, mobile-friendly websites for businesses, schools, and individuals.</p>
                    </li>
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">Electronics & Technical Support</span>
                      <p className="text-gray-300">Basic Electronics Projects: Circuit design, lab setups, and troubleshooting small devices. Technical Documentation: Clear manuals, guides, and reports.</p>
                    </li>
                  </motion.ul>
                )}

                {activeTab === 'experience' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">2025 - 2026</span>
                      <p className="text-gray-300 text-xl">ICT Technician & Studio Lead</p>
                    </li>
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">2025</span>
                      <p className="text-gray-300 text-xl">Graphic Design & Animation</p>
                    </li>
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">Present</span>
                      <p className="text-gray-300 text-xl">Freelance Projects</p>
                    </li>
                  </motion.ul>
                )}

                {activeTab === 'education' && (
                  <motion.ul 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">Subukia TVC</span>
                      <p className="text-gray-300 text-xl">Diploma in ICT (Level 6)</p>
                    </li>
                    <li>
                      <span className="text-primary font-bold block mb-1 uppercase text-xs tracking-widest">Secondary</span>
                      <p className="text-gray-300 text-xl">KCSE Certificate</p>
                    </li>
                  </motion.ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#121212]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-bold mb-16 text-center">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code size={40} />, title: 'Web Design', desc: 'Creating modern, responsive websites tailored to your needs.' },
              { icon: <Crop size={40} />, title: 'UI/UX Design', desc: 'Designing intuitive interfaces for web and mobile applications.' },
              { icon: <Smartphone size={40} />, title: 'App Development', desc: 'Building Android and iOS applications with user-friendly design.' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-[#262626] p-10 rounded-xl hover:bg-primary transition-all duration-500 group"
              >
                <div className="text-primary group-hover:text-white mb-6 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-white/80 transition-colors">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl font-bold mb-16 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1000', title: 'Computer Software', desc: 'Specializing in OS management, UI/UX, and responsive web apps.' },
              { img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000', title: 'Networking', desc: 'Modular network layout and troubleshooting using Cisco tools.' },
              { img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000', title: 'Electronics', desc: 'Circuit design and hardware-software integration.' }
            ].map((work, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl aspect-[4/5]">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center translate-y-full group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <p className="text-sm text-white/80 mb-6">{work.desc}</p>
                  <a href="#" className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-200 transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="#" className="inline-block border border-primary px-12 py-4 rounded-lg hover:bg-primary transition-all">
              See More
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#121212]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 className="text-5xl font-bold mb-8">Contact Me</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="text-primary"><Send size={24} /></div>
                  <p className="text-gray-300">sameelheritage@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary"><Phone size={24} /></div>
                  <p className="text-gray-300">0717114899</p>
                </div>
                <div className="flex gap-4 pt-4">
                  {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="text-gray-500 hover:text-primary transition-all hover:-translate-y-1">
                      <Icon size={28} />
                    </a>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/80 transition-all"
                >
                  <Download size={20} /> Download CV
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="w-full bg-[#262626] border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full bg-[#262626] border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                <textarea 
                  rows={6} 
                  placeholder="Your Message" 
                  className="w-full bg-[#262626] border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="bg-primary px-12 py-4 rounded-lg font-semibold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#080808] border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Samwel Muiruri. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

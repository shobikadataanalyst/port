// Full React Portfolio Code for Shobika D | Developer
// Folder: shobika-portfolio
// Ready to deploy on Vercel

import React from 'react';
import './index.css';

const portfolio = {
  name: 'Shobika D',
  tagline: 'Developer',
  email: 'shobikaadayanidhi@gmail.com',
  phone: '+91 9543618829',
  resumeUrl: '/autoCV.pdf',
  socials: {
    github: 'https://github.com/shobikadataanalyst',
    linkedin: 'https://linkedin.com/in/shobika-dayanidhi',
    leetcode: 'https://leetcode.com/u/shobikadayanidhi/',
    portfolio: 'https://art-duo-port-rdfl.vercel.app/'
  },
  about: `Sophomore CSE student (St. Joseph’s College of Engineering, CGPA 9.47/10) and Research Head @ ACM.
I build data- and cloud-centric apps and love turning ideas into clean, working products.`,
  highlights: [
    'Research Head – ACM (Dec 2024 – Present)',
    'Cloud Intern – KONE Elevator (Apr–Jul 2025)',
    'SDE Intern – Seyasoft Technologies (Aug–Dec 2024)',
  ],
  projects: [
    {
      name: 'EventPulse – Real-time Event Operations Dashboard',
      description: 'Crowd monitoring, incident alerts, and live dashboards. Built with HTML, CSS, JS, Node.js, Express.',
      link: 'https://event-pulse-final.vercel.app/login.html'
    },
    {
      name: 'Jal Rakshak – Water Footprint Calculator',
      description: 'Web app to track, analyze and suggest water conservation measures. Stack: HTML/CSS/JS + Flask.',
      link: 'https://aqua-guard-harmony.vercel.app/'
    },
    {
      name: 'Artified Duo – Portfolio Website',
      description: 'Entrepreneurial site built from WebWave templates, deployed on Vercel.',
      link: 'https://art-duo-port-yele.vercel.app/'
    }
  ],
  skills: ['Java', 'Python', 'DSA', 'SQL', 'Networks', 'OS', 'HTML', 'CSS', 'JavaScript', 'React'],
};

function Hero() {
  return (
    <header className="bg-gradient-to-b from-black to-gray-900 text-white py-24 text-center">
      <h1 className="text-5xl font-bold">{portfolio.name}</h1>
      <p className="text-lg text-violet-400 mt-2">{portfolio.tagline}</p>
      <div className="mt-5 flex justify-center gap-4">
        <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
        <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
        <a href={portfolio.socials.leetcode} target="_blank" rel="noreferrer" className="btn">LeetCode</a>
        <a href={portfolio.resumeUrl} target="_blank" rel="noreferrer" className="btn">Download Resume</a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="bg-gray-950 text-gray-200 py-20 px-8 md:px-24">
      <h2 className="text-3xl font-semibold mb-6">About</h2>
      <p>{portfolio.about}</p>
      <ul className="mt-6 list-disc ml-6 space-y-2">
        {portfolio.highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-gray-100 py-20 px-8 md:px-24">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolio.projects.map((project) => (
          <div key={project.name} className="p-5 bg-gray-800 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="btn mt-3 inline-block">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-black text-gray-100 py-20 px-8 md:px-24">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {portfolio.skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full border border-violet-700 text-sm">{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 text-center py-8">
      © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

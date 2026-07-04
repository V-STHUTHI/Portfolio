import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
  FaDatabase,
  FaChartBar,
  FaJava,
} from 'react-icons/fa';
import { SiPython } from 'react-icons/si';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const taglines = ['Software Developer', 'Data Analyst', 'NLP & Automation Engineer'];

const educationData = [
  {
    year: '2025 – Present',
    title: 'Master of Computer Applications (MCA)',
    school: 'BMS Institute of Technology and Management (BMSIT), Bangalore',
    detail: 'Department of MCA',
  },
  {
    year: 'Sep 2022 – May 2025',
    title: 'Bachelor of Computer Applications (BCA)',
    school: 'Dayananda Sagar University, Bangalore',
    detail: 'CGPA 8.64',
  },
  {
    year: 'Jul 2020 – Jul 2022',
    title: 'PUC',
    school: 'Sri Chaitanya, Bangalore',
    detail: '81.4%',
  },
  {
    year: 'Mar 2019 – Mar 2020',
    title: '10th Grade',
    school: 'Mount Litera Zee School, Bangalore',
    detail: '89%',
  },
];

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'C++', 'C'],
    icon: <SiPython className="text-sky-400" />, 
  },
  {
    title: 'Frameworks & Web Tech',
    items: ['React', 'Spring Boot', 'Hibernate', 'Java Servlets', 'Tailwind CSS'],
    icon: <FaJava className="text-orange-500" />,
  },
  {
    title: 'Databases & Schema Design',
    items: ['MySQL', 'SQL', 'Relational Database Design', 'ER Mapping'],
    icon: <FaDatabase className="text-cyan-400" />, 
  },
  {
    title: 'Data Science & Analytics',
    items: ['Exploratory Data Analysis (EDA)', 'Univariate Analysis', 'Machine Learning Pipelines', 'Data Visualization'],
    icon: <FaChartBar className="text-violet-400" />,
  },
  {
    title: 'Dev Tools & BI Platforms',
    items: ['Tableau', 'Power BI', 'Excel', 'Git', 'GitHub'],
    icon: <FaChartBar className="text-emerald-400" />,
  },
  {
    title: 'Core Concepts',
    items: ['OOP', 'Data Structures & Algorithms (DSA)', 'REST APIs', 'Competitive Programming'],
  },
];

const projects = [
  {
    title: 'High-Performance Sentiment Analysis Engine',
    date: 'Apr 2026',
    metrics: ['93% Accuracy', 'Transformer NLP', 'Interactive Dashboard'],
    description:
      'Developed a deep learning NLP engine using fine-tuned BERT models via the Hugging Face library. Deployed with an interactive visual dashboard for sentiment analytics tracking.',
    tags: ['Python', 'NLP', 'BERT', 'Transformers', 'Hugging Face'],
  },
  {
    title: 'Job Discovery Automation Tool',
    date: 'Apr 2026',
    metrics: ['Daily Curated Feeds', 'Self-Hosted Flow', 'Custom Filters'],
    description:
      'Built a fully self-hosted web scraping pipeline using Apify and n8n to automate candidate search queries, filtering out noise to deliver tailored daily LinkedIn listings.',
    tags: ['Python', 'n8n', 'Apify', 'Web Scraping', 'Automation'],
  },
  {
    title: 'Content-Based Movie Recommendation System',
    date: 'Feb 2026',
    metrics: ['Cosine Similarity', 'TF-IDF Vectors', 'Streamlit UI'],
    description:
      'Designed and deployed an end-to-end matching platform utilizing IMDB metadata vectors. Built a lightweight and fast user front-end via Streamlit for localized discovery.',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'TF-IDF', 'Scikit-learn'],
  },
  {
    title: 'Hogwarts Archives Custom Data Pipeline',
    date: 'Mar 2026',
    metrics: ['API Extraction', 'Structured Profiles', 'Kaggle Dataset'],
    description:
      'Curated a robust database by engineering a statistical pipeline extracting entity maps (Characters, Spells, Potions) directly out of the raw Potter DB API.',
    tags: ['Python', 'API Integration', 'Data Curation', 'ETL'],
  },
];

const certifications = [
  'Python-Basic Assessment — HackerRank',
  'SQL-Basic Assessment — HackerRank',
  'Data Analysis Essentials — Udemy',
  'Introduction to Cloud Computing — SimpliLearn',
  'Data Science with Python — Infosys Springboard'
];

const competencies = [
  'Full-Stack Web Development', 
  'Database Management & SQL Joins', 
  'Exploratory Data Analysis (EDA)', 
  'Competitive Programming', 
  'Workflow Automation Pipelines',
  'Problem-Solving', 
  'Technical Project Curation'
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTaglineIndex((prev) => (prev + 1) % taglines.length), 2200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-transparent text-slate-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <a href="#home" className="font-display text-lg font-bold tracking-wide text-white">Sthuthi Portfolio</a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm transition ${activeSection === item.id ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/20"
            aria-label="Toggle color mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-5%] top-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute right-[5%] top-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Building polished, production-ready digital experiences</p>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-400 bg-clip-text text-transparent">Sthuthi Portfolio</span>
              </h1>
              <div className="mt-4 h-12 text-2xl font-semibold text-slate-200 sm:text-3xl">
                <span className="text-cyan-300">{taglines[taglineIndex]}</span>
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Master of Computer Applications (MCA) student at BMSIT with an established expertise in software engineering, pipeline automation, exploratory data analytics, and relational database systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.03]">View Projects</a>
                <a href="/V SthuthiResume.pdf" className="rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20" download>
                  <span className="inline-flex items-center gap-2"><FaDownload /> Download Resume</span>
                </a>
                <a href="#contact" className="rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-3 font-semibold text-orange-200 transition hover:bg-orange-500/20">Contact Me</a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <a href="https://www.linkedin.com/in/sthuthi-v/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 hover:text-cyan-300"><FaLinkedin /> LinkedIn Profile</a>
                <a href="mailto:sthtuhimarathe@gmail.com" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 hover:text-cyan-300"><FaEnvelope /> Email</a>
                <a href="tel:+918548012996" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 hover:text-cyan-300"><FaPhone /> Contact Link</a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400"><FaMapMarkerAlt /> Bangalore, India</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_35%)]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Snapshot</p>
                    <h2 className="mt-2 font-display text-2xl font-semibold">Results-driven builder</h2>
                  </div>
                  <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">Open to opportunities</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ['4+', 'Core Applications Shipped'],
                    ['MCA', 'Advanced Academics'],
                    ['Python / Java', 'Development Strengths'],
                    ['SQL', 'Advanced Database Design'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-sm text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">About Me</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">A data-centric framework mixed with structural code logic.</h2>
            </div>
            <div className="space-y-4 text-lg leading-8 text-slate-300">
              <p>
                I am an MCA student at BMSIT passionate about translating intricate algorithms and relational datasets into dynamic, user-facing programs. My skillset ranges from full-stack system patterns down to detailed analytics implementations.
              </p>
              <p>
                Whether it is engineering natural language processing models, organizing multi-tiered custom ETL pipelines from raw APIs, or designing intricate SQL relational databases, I approach every build focusing on code maintainability and execution performance.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Education</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Academic timeline</h2>
            </div>
          </div>
          <div className="relative before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-violet-500 before:to-orange-400 md:before:left-1/2">
            {educationData.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className={`relative mb-6 md:mb-8 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="ml-10 max-w-xl rounded-2xl border border-white/10 bg-slate-900/70 p-5 md:ml-0 md:w-[calc(50%-1.5rem)]">
                    <div className="absolute left-2.5 top-4 h-4 w-4 rounded-full border-2 border-slate-950 bg-gradient-to-r from-cyan-400 to-violet-500 md:left-1/2 md:-translate-x-1/2" />
                    <p className="text-sm text-cyan-300">{item.year}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-slate-300">{item.school}</p>
                    <p className="mt-2 font-medium text-white">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Skills</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Core stack and capabilities</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6">
                <div className="mb-4 flex items-center gap-3">
                  {group.icon}
                  <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 px-3 py-2 text-sm text-slate-200 transition hover:scale-105">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Projects</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Featured portfolio projects</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow transition hover:-translate-y-1 hover:border-cyan-400/40">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm text-slate-400">{project.date}</p>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">Featured</span>
                </div>
                <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs font-semibold text-white flex items-center justify-center">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:gap-3">
                  Discuss this implementation <FaArrowRight />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-violet-300">Certifications & Assessment Badges</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {certifications.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Core Competencies</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {competencies.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-4 text-sm font-semibold text-slate-100">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Contact</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Let’s connect.</h2>
              <div className="mt-6 space-y-3 text-slate-300">
                <p className="flex items-center gap-2"><FaEnvelope /> sthuthimarathe@gmail.com</p>
                <p className="flex items-center gap-2"><FaPhone /> +91 8548012996</p>
                <p className="flex items-center gap-2"><FaLinkedin /> <a href="https://www.linkedin.com/in/sthuthi-v/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">LinkedIn Profile</a></p>
                <p className="flex items-center gap-2"><FaMapMarkerAlt /> Bangalore, India</p>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Your name" />
                <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Your email" />
              </div>
              <textarea className="min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400" placeholder="Message details..." />
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.02]">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        <p>© 2026 Sthuthi Portfolio. Designed with React, Tailwind, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
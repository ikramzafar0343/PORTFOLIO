import './App.css'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaBrain,
  FaExternalLinkAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import {
  SiExpress,
  SiMongodb,
  SiPython,
  SiUnity,
  SiJsonwebtokens,
  SiCloudinary,
  SiDjango,
  SiPostgresql,
} from 'react-icons/si'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebaseClient'
import { fadeUp, fadeIn, staggerContainer, buttonHover, cardHover, iconHover } from './animations'

const Motion = motion

const techIconMap = {
  react: FaReact,
  node: FaNodeJs,
  express: SiExpress,
  mongo: SiMongodb,
  mongoAtlas: SiMongodb,
  ai: FaBrain,
  arvr: SiUnity,
  jwt: SiJsonwebtokens,
  git: FaGithub,
  django: SiDjango,
  drf: SiDjango,
  postgres: SiPostgresql,
  cloudinary: SiCloudinary,
}

const projectDetails = {
  sportify: {
    id: 'sportify',
    title: 'SPORTIFY — AI Sports E‑Commerce Platform',
    role: 'Full Stack Developer | Jan 2025 – Jun 2025 | Lahore',
    descriptionIntro:
      'SPORTIFY is a full-scale, AI-driven sports e-commerce platform for new and second-hand gear, live auctions, and immersive AR/VR shopping.',
    descriptionExtra:
      'I designed and maintained the full-stack architecture with a focus on scalable APIs, intelligent user journeys, and secure transactional flows.',
    contributions: [
      'Built a full-stack React, Node.js, Express.js, and MongoDB application.',
      'Created responsive, high-performance UI with cross-browser support.',
      'Developed secure RESTful APIs for auth, products, orders, and auctions.',
      'Integrated AR/VR 3D product visualization for immersive shopping.',
      'Implemented AI-based recommendations to personalize the experience.',
      'Contributed to AI-driven fraud detection for suspicious transactions.',
      'Optimized MongoDB queries for fast product and order retrieval.',
      'Followed Agile practices with Git-based workflows and clean code.',
    ],
    techStack: [
      { id: 'react', label: 'React.js', icon: 'react' },
      { id: 'node', label: 'Node.js', icon: 'node' },
      { id: 'express', label: 'Express.js', icon: 'express' },
      { id: 'mongo', label: 'MongoDB', icon: 'mongo' },
      { id: 'ai', label: 'AI/ML', icon: 'ai' },
      { id: 'arvr', label: 'AR/VR', icon: 'arvr' },
      { id: 'jwt', label: 'JWT', icon: 'jwt' },
      { id: 'git', label: 'Git', icon: 'git' },
    ],
    githubUrl: 'https://github.com/ikramzafar0343/SPORTIFY',
    liveUrl: 'https://sportify-frontend-92vz.onrender.com',
    thumbClass: 'project-thumb-one',
  },
  stylesathi: {
    id: 'stylesathi',
    title: 'STYLE SATHI — AR Fashion E‑Commerce Platform',
    role: 'Full Stack Developer (Django / React) | Jul 2025 – Sep 2025 | Lahore',
    descriptionIntro:
      'STYLE SATHI is a fashion e-commerce platform that brings AR/VR virtual try-ons to online shopping for accessories and apparel.',
    descriptionExtra:
      'I owned full-stack development, designing secure APIs and a modular architecture that keeps frontend and backend loosely coupled.',
    contributions: [
      'Developed a React frontend with a Django REST Framework backend.',
      'Built RESTful APIs for auth, catalog, cart, orders, and profiles.',
      'Integrated AR/VR virtual try-on for rings, shoes, watches, and accessories.',
      'Implemented role-based access for customers, sellers, and admins.',
      'Managed relational data models with optimized database queries.',
      'Ensured responsive UI and secure frontend–backend communication.',
      'Followed Agile methodology for maintainable, scalable code.',
    ],
    techStack: [
      { id: 'react', label: 'React.js', icon: 'react' },
      { id: 'django', label: 'Django', icon: 'django' },
      { id: 'drf', label: 'Django REST Framework', icon: 'drf' },
      { id: 'postgres', label: 'PostgreSQL', icon: 'postgres' },
      { id: 'arvr', label: 'AR/VR', icon: 'arvr' },
      { id: 'jwt', label: 'JWT', icon: 'jwt' },
      { id: 'git', label: 'Git', icon: 'git' },
    ],
    githubUrl: 'https://github.com/ikramzafar0343/Style-Sathi',
    liveUrl: 'https://stylesathi-frontend.onrender.com',
    thumbClass: 'project-thumb-two',
  },
  pawmate: {
    id: 'pawmate',
    title: 'PAWMATE — AI Pet Care Management System',
    role: 'Full Stack Developer | Oct 2025 – Dec 2025 | Lahore',
    descriptionIntro:
      'PAWMATE is a pet care management platform that connects owners, veterinarians, and admins for appointments, records, and services.',
    descriptionExtra:
      'I led full-stack development with emphasis on security, AI integration, and cloud-ready architecture for pet health data.',
    contributions: [
      'Built a React.js SPA backed by a Node.js and Express.js API layer.',
      'Used MongoDB Atlas for scalable, cloud-based data storage.',
      'Implemented JWT-based role access for owners, vets, and admins.',
      'Designed APIs for pets, medical records, appointments, and prescriptions.',
      'Integrated AI-assisted disease prediction for early diagnosis support.',
      'Configured Cloudinary for secure image and document uploads.',
      'Developed admin dashboards for analytics and user management.',
      'Applied Agile practices to keep the codebase secure and maintainable.',
    ],
    techStack: [
      { id: 'react', label: 'React.js', icon: 'react' },
      { id: 'node', label: 'Node.js', icon: 'node' },
      { id: 'express', label: 'Express.js', icon: 'express' },
      { id: 'mongoAtlas', label: 'MongoDB Atlas', icon: 'mongoAtlas' },
      { id: 'ai', label: 'AI/ML', icon: 'ai' },
      { id: 'jwt', label: 'JWT', icon: 'jwt' },
      { id: 'cloudinary', label: 'Cloudinary', icon: 'cloudinary' },
      { id: 'git', label: 'Git', icon: 'git' },
    ],
    githubUrl: 'https://github.com/ikramzafar0343/PAWMATE',
    liveUrl: 'https://pawmate-frontend.onrender.com',
    thumbClass: 'project-thumb-three',
  },
}

function ProjectModal({ project, onClose }) {
  if (!project) {
    return null
  }

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="project-modal-close" onClick={onClose}>
          ×
        </button>
        <div className={`project-thumb project-modal-thumb ${project.thumbClass}`} />
        <h3 className="project-modal-title">{project.title}</h3>
        <p className="project-modal-role">{project.role}</p>
        <h4 className="project-modal-subheading">Description</h4>
        <p className="project-modal-text">{project.descriptionIntro}</p>
        <p className="project-modal-text">{project.descriptionExtra}</p>
        <h4 className="project-modal-subheading">Key Contributions</h4>
        <ul className="project-modal-list">
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h4 className="project-modal-subheading">Tech Stack</h4>
        <div className="project-modal-tech-row">
          {project.techStack.map((tech) => {
            const Icon = techIconMap[tech.icon]
            return (
              <span key={tech.id} className="project-tech-pill">
                {Icon && (
                  <span className="project-tech-pill-icon">
                    <Icon />
                  </span>
                )}
                <span className="project-tech-pill-label">{tech.label}</span>
              </span>
            )
          })}
        </div>
        <div className="project-modal-links">
          <a
            href={project.githubUrl}
            className="pill-outline"
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-modal-link-icon">
              <FaGithub />
            </span>
            <span>GitHub</span>
          </a>
          <a href={project.liveUrl} className="pill-small" target="_blank" rel="noreferrer">
            <span className="project-modal-link-icon">
              <FaExternalLinkAlt />
            </span>
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function App() {
  const roleText = 'Full stack developer'
  const [activeProjectId, setActiveProjectId] = useState(null)
  const [contactStatus, setContactStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) {
      return
    }

    const formData = new FormData(event.target)
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name || !email || !message) {
      setContactStatus('Please fill in all fields before sending.')
      return
    }

    try {
      setIsSubmitting(true)
      setContactStatus('Sending your message...')

      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      })

      setContactStatus('Message sent successfully. I will get back to you soon.')
      event.target.reset()
      setTimeout(() => {
        setContactStatus('')
      }, 4000)
    } catch (error) {
      console.error('Failed to send contact message', error)
      setContactStatus('Something went wrong. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <div className="portfolio-container">
          <div className="brand">IkramZafar</div>
          <nav className="nav-links">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <motion.section
          id="home"
          className="hero-section"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="portfolio-container hero-grid">
            <div className="hero-text">
              <motion.h1 className="hero-title" data-text="Hi, I'm Ikram Zafar" variants={fadeUp}>
                Hi, I&apos;m Ikram Zafar
              </motion.h1>
              <div className="hero-role-wrapper">
                <motion.p className="hero-role typewriter-animation" variants={fadeIn}>
                  {roleText}
                </motion.p>
              </div>
              <motion.p className="hero-description" variants={fadeUp}>
                Crafting modern, responsive, and user-friendly websites with passion and precision.
              </motion.p>
              <div className="hero-actions">
                <motion.a
                  href="/IKRAM_ZAFAR_ATS.pdf"
                  className="btn-gradient"
                  download
                  initial="rest"
                  whileHover={shouldReduceMotion ? undefined : 'hover'}
                  whileTap="tap"
                  variants={buttonHover}
                >
                  <span>Download Resume</span>
                  <span className="btn-icon">↓</span>
                </motion.a>
                <div className="hero-social">
                  <motion.a
                    href="https://github.com/ikramzafar0343"
                    className="social-circle social-github"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                    initial="rest"
                    whileHover={shouldReduceMotion ? undefined : 'hover'}
                    variants={iconHover}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ikram-zafar-l1f21bsse0343"
                    className="social-circle social-linkedin"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                    initial="rest"
                    whileHover={shouldReduceMotion ? undefined : 'hover'}
                    variants={iconHover}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/ikramzafar_/"
                    className="social-circle social-instagram"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                    initial="rest"
                    whileHover={shouldReduceMotion ? undefined : 'hover'}
                    variants={iconHover}
                  >
                    <FaInstagram />
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar" />
                <div className="tech-badge tech-badge-react">
                  <FaReact />
                </div>
                <div className="tech-badge tech-badge-node">
                  <FaNodeJs />
                </div>
                <div className="tech-badge tech-badge-html">
                  <FaHtml5 />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="section about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="portfolio-container about-grid">
            <div className="about-image-wrapper">
              <motion.div className="about-avatar" variants={fadeUp} />
            </div>
            <div className="about-content">
              <motion.h2 className="section-title" variants={fadeUp}>About Me</motion.h2>
              <motion.h3 className="about-heading typewriter-about" variants={fadeUp}>I&apos;m Ikram Zafar</motion.h3>
              <motion.p className="about-text" variants={fadeUp}>
                Software engineering graduate and full stack web developer specializing in React,
                Node.js, Express, and modern databases. I design scalable APIs and polished,
                responsive interfaces that turn business requirements into production-ready
                applications.
              </motion.p>
              <div className="about-tags">
                <button type="button" className="outline-pill">
                  Web Application Development
                </button>
                <button type="button" className="outline-pill">
                  AI & Automation
                </button>
                <button type="button" className="outline-pill">
                  Problem Solving
                </button>
                <button type="button" className="outline-pill">
                  AR/VR Experiences
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="skills" className="section skills-section">
          <div className="portfolio-container">
            <h2 className="section-title text-center">My Skills</h2>
            <div className="skills-grid">
              <div className="skills-column">
                <div className="skill-line skill-html">
                  <div className="skill-icon skill-icon-html">
                    <FaHtml5 />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-css">
                  <div className="skill-icon skill-icon-css">
                    <FaCss3Alt />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-js">
                  <div className="skill-icon skill-icon-js">
                    <FaJsSquare />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-react">
                  <div className="skill-icon skill-icon-react">
                    <FaReact />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="skills-column">
                <div className="skill-line skill-node">
                  <div className="skill-icon skill-icon-node">
                    <FaNodeJs />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-express">
                  <div className="skill-icon skill-icon-express">
                    <SiExpress />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-mongo">
                  <div className="skill-icon skill-icon-mongo">
                    <SiMongodb />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-git">
                  <div className="skill-icon skill-icon-git">
                    <FaGithub />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="skills-column">
                <div className="skill-line skill-python">
                  <div className="skill-icon skill-icon-python">
                    <SiPython />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-ai">
                  <div className="skill-icon skill-icon-ai">
                    <FaBrain />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
                <div className="skill-line skill-arvr">
                  <div className="skill-icon skill-icon-arvr">
                    <SiUnity />
                  </div>
                  <div className="skill-dots">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} className="skill-dot" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.section
          id="projects"
          className="section projects-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="portfolio-container">
            <h2 className="section-title text-center">My Projects</h2>
            <div className="project-filters">
              <button type="button" className="pill-filter">
                Web Applications
              </button>
            </div>
            <div className="projects-grid">
              <motion.article
                className="project-card"
                onClick={() => setActiveProjectId(projectDetails.sportify.id)}
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : 'hover'}
                variants={cardHover}
              >
                <div className="project-thumb project-thumb-one" />
                <h3 className="project-title">SPORTIFY — AI Sports E‑Commerce Platform</h3>
                <p className="project-text">
                  Full-stack sports commerce platform with AR/VR product previews, AI
                  recommendations, and fraud-aware checkout built on React, Node, Express, and
                  MongoDB.
                </p>
                <div
                  className="project-footer"
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  <a
                    href="https://github.com/ikramzafar0343/SPORTIFY"
                    className="pill-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    href="https://sportify-frontend-92vz.onrender.com"
                    className="pill-small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </motion.article>
              <motion.article
                className="project-card"
                onClick={() => setActiveProjectId(projectDetails.stylesathi.id)}
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : 'hover'}
                variants={cardHover}
              >
                <div className="project-thumb project-thumb-two" />
                <h3 className="project-title">STYLE SATHI — AR Fashion E‑Commerce Platform</h3>
                <p className="project-text">
                  React + Django REST fashion store with AR/VR try-on, secure product and order
                  APIs, and role-based access across customer, seller, and admin experiences.
                </p>
                <div
                  className="project-footer"
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  <a
                    href="https://github.com/ikramzafar0343/Style-Sathi"
                    className="pill-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    href="https://stylesathi-frontend.onrender.com"
                    className="pill-small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </motion.article>
              <motion.article
                className="project-card"
                onClick={() => setActiveProjectId(projectDetails.pawmate.id)}
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : 'hover'}
                variants={cardHover}
              >
                <div className="project-thumb project-thumb-three" />
                <h3 className="project-title">PAWMATE — AI Pet Care Management System</h3>
                <p className="project-text">
                  Pet health platform connecting owners and vets with JWT-secured dashboards,
                  AI-assisted disease prediction, booking flows, and Cloudinary-based media
                  uploads.
                </p>
                <div
                  className="project-footer"
                  onClick={(event) => {
                    event.stopPropagation()
                  }}
                >
                  <a
                    href="https://github.com/ikramzafar0343/PAWMATE"
                    className="pill-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository
                  </a>
                  <a
                    href="https://pawmate-frontend.onrender.com"
                    className="pill-small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="portfolio-container">
            <h2 className="section-title text-center">Contact</h2>
            <div className="contact-card">
              <form onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" aria-label="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="Your email" aria-label="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project"
                    aria-label="Your message"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-gradient full-width"
                  disabled={isSubmitting}
                  initial="rest"
                  whileHover={shouldReduceMotion ? undefined : 'hover'}
                  whileTap="tap"
                  variants={buttonHover}
                >
                  <span>{isSubmitting ? 'Sending…' : 'Send a message'}</span>
                </motion.button>
              </form>
              {contactStatus && <p className="contact-status">{contactStatus}</p>}
            </div>
            <div className="contact-social">
              <motion.a
                href="https://github.com/ikramzafar0343"
                className="contact-social-icon contact-social-github"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : 'hover'}
                variants={iconHover}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ikram-zafar-l1f21bsse0343"
                className="contact-social-icon contact-social-linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : 'hover'}
                variants={iconHover}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ikramzafar_/"
                className="contact-social-icon contact-social-instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : 'hover'}
                variants={iconHover}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </motion.section>
        {activeProjectId && (
          <ProjectModal
            project={projectDetails[activeProjectId]}
            onClose={() => setActiveProjectId(null)}
          />
        )}
      </main>
      <a
        href="https://wa.me/923079222055?text=Hello%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
        className="floating-whatsapp"
        aria-label="WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default App

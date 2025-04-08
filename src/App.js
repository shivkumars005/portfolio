import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaDownload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  const projects = [
    {
      title: 'Movie Recommendation System',
      description: 'A ML-powered web app that recommends movies based on user preferences.',
      link: 'https://github.com/shivkumars005/MoviesRecommend',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather forecasting app built using OpenWeather API and React.',
      link: 'https://github.com/shivkumars005/Weather',
    },
    {
      title: 'CropConnect AI',
      description: 'An AI-based marketplace and crop advisory system connecting farmers with buyers.',
      link: 'https://github.com/shivkumars005/CropConnectAI',
    },
    {
      title: 'AI Discharge Summary',
      description: 'Automates discharge summary creation using NLP and AI, tailored for healthcare.',
      link: 'https://github.com/shivkumars005/AIDischargeSummary',
    }
  ];

  const playSound = () => {
    const audio = new Audio("https://www.myinstants.com/media/sounds/notification-sound.mp3");
    audio.play();
  };

  const handleFormSubmit = (e) => {
    setShowToast(true);
    playSound();
    e.target.reset();
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className={`portfolio-container ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`} style={{ minHeight: '100vh', transition: 'background-color 0.5s, color 0.5s' }}>
      <header className={`py-3 shadow-sm ${darkMode ? 'bg-black text-white' : 'bg-light text-dark'}`}> 
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h4 fw-bold mb-0" role="button" onClick={() => scrollToSection('home')}>Shiva Kumar Souta</h1>
          <div className="d-flex align-items-center">
            <ul className="nav me-3">
              {['about', 'skills', 'projects', 'blog', 'contact'].map(section => (
                <li key={section} className="nav-item">
                  <span
                    className={`nav-link px-2 ${darkMode ? 'text-white' : 'text-muted'}`}
                    role="button"
                    onClick={() => scrollToSection(section)}
                  >{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                </li>
              ))}
              <li className="nav-item">
                <a href="/ShivaKumarResume.pdf" className={`nav-link px-2 ${darkMode ? 'text-white' : 'text-muted'}`} target="_blank" rel="noopener noreferrer">
                  <FaDownload className="me-1" /> Resume
                </a>
              </li>
            </ul>
            <button onClick={toggleDarkMode} className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`} title="Toggle theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="position-relative text-center py-5 overflow-hidden">
  <motion.div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ background: 'rgba(0,0,0,0.4)', zIndex: 1 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  ></motion.div>

  <div className="position-relative z-2">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ rotate: 2, boxShadow: '0px 8px 20px rgba(0,0,0,0.3)' }}
      className="mx-auto mb-3"
      style={{
        width: '160px',
        height: '160px',
        padding: '6px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #0dcaf0, #6610f2)',
        display: 'inline-block',
      }}
    >
      <img
        src="https://th.bing.com/th/id/OIP.Gw1VGZw-s5e0T6i4qvufKwHaHa?w=250&h=250"
        alt="Shiva Kumar Souta"
        className="img-fluid rounded-circle w-100 h-100"
        style={{ objectFit: 'cover' }}
      />
    </motion.div>

    <motion.h1
      className="display-5 fw-bold"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Hello, I'm 
      Shiva Kumar Souta
    </motion.h1>
    <p className="lead text-info">AI & ML Enthusiast | Full-Stack Developer</p>
    <div className="d-flex justify-content-center gap-3 mt-4">
  <a href="#projects" className="btn btn-primary px-4 py-2">
    My works
  </a>
  <a href="#contact" className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} px-4 py-2`}>
    Get in touch
  </a>
</div>

  </div>
  
</section>


      <section id="about" className="container py-5">
        <h2 className="text-info mb-4">About Me</h2>
        <p className="fs-5">
          A highly motivated B.Tech (AI & ML) student with expertise in Artificial Intelligence, Machine Learning,
          and Full-Stack Development. Proficient in Python, Data Science, Web Technologies, and Databases with
          hands-on experience in building AI-driven applications. A fast learner with strong problem-solving skills,
          seeking opportunities to contribute to innovative projects in the tech industry.
        </p>
        
      </section>

      <section id="skills" className={`${darkMode ? 'text-white' : 'text-dark'} py-5`}>
        <div className="container">
          <h2 className="text-info mb-4">Skills</h2>
          <div className="row g-4">
            {skills.map(skill => (
              <div key={skill.name} className="col-6 col-sm-4 col-md-2 text-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img src={skill.img} alt={skill.name} className="mb-2" style={{ width: '40px', height: '40px' }} />
                  <p>{skill.name}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={`${darkMode ? 'text-white' : 'text-dark'} py-5`}>
  <div className="container">
    <div className="text-center mb-5">
      <p className="text-primary fw-bold">MY WORK</p>
      <h2 className="fw-bold">Featured Projects</h2>
      <p className="lead">
        A collection of AI/ML and software development projects that <br />
        showcase my technical skills and expertise.
      </p>
    </div>

    <div className="row g-4">
      {[
        {
          title: "CineHeist - A Movies Recommendation System",
          description: "Machine learning model that suggests movies based on the title or the plot entered by the user.",
          image: "/images/CineHeist.jpg",
          tags: ["Machine Learning", "Python", "Scikit-learn", "AI"],
          link: "https://github.com/shivkumars005/moviesrecommend" 
        },
        {
          title: "Weather Application",
          description: "Application developed to give the real time weather updates to the user.",
          image: "/images/WeatherBySKS.jpg",
          tags: ["HTML", "CSS", "JS", "API"],
          link: "https://github.com/shivkumars005/weather"
        },
        {
          title: "CropConnect AI",
          description: "An application developed to help illiterate farmers to get real time market price alerts.",
          image: "/images/cropconnect.jpg",
          tags: ["HTML", "CSS", "JS", "API", "Machine learning"],
          link: "https://github.com/shivkumars005/CropConnectAI"
        },
        {
          title: "AI Doctor",
          description: "Application to generate patient's discharge summaries using AI.",
          image: "/images/AI-Doctor.jpg",
          tags: ["Machine learning", "Hospitals", "Streamlit"],
          link: "https://github.com/shivkumars005/AIDischargeSummary"
        }
      ].map((project, idx) => (
        <div key={idx} className="col-md-6">
          <div className={`card border-0 rounded-4 h-100 ${darkMode ? 'bg-dark text-light' : 'bg-white shadow-sm'}`}>
            <img src={project.image} alt={project.title} className="card-img-top rounded-top-4" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <div className="d-flex flex-wrap gap-2 mt-3 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="badge bg-primary-subtle text-primary border border-primary rounded-pill px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'}`}
                >
                   View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <section id="blog" className="container py-5">
        <h2 className="text-info mb-4">Blog</h2>
        <div className="row g-4">
          <motion.div className="col-md-12" whileHover={{ scale: 1.02 }}>
            <div className={`card h-100 ${darkMode ? 'bg-dark text-white border-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">Tech Tales</h5>
                <p className="card-text">Sharing insights, tutorials, and stories from my tech journey.</p>
                <a href="https://techtalesbyshivakumar.blogspot.com" target="_blank" rel="noopener noreferrer" className="text-info">Visit Blog</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className={`${darkMode ? 'text-white' : 'text-dark'} py-5`}>
  <div className="container">
    <div className="text-center mb-5">
      <p className="text-primary fw-bold">GET IN TOUCH</p>
      <h2 className="fw-bold">Let's Work Together</h2>
      <p className="lead">
        Have a project in mind or want to say hello? Feel free to reach out,<br />
        and I'll get back to you as soon as possible.
      </p>
    </div>

    <div className="d-flex justify-content-center">
      <div className={`p-5 rounded-4 ${darkMode ? 'bg-dark text-light' : 'bg-white shadow'} w-75`}>
        <h4 className="fw-bold mb-4">Contact Information</h4>

        {/* Email */}
        <div className="mb-3 d-flex align-items-start gap-3">
          <i className="fas fa-envelope fa-lg text-primary"></i>
          <div>
            <strong>Email</strong>
            <p className="mb-0">shivakumarsouta18@gmail.com</p>
          </div>
        </div>

        {/* Location */}
        <div className="mb-4 d-flex align-items-start gap-3">
          <i className="fas fa-map-marker-alt fa-lg text-primary"></i>
          <div>
            <strong>Location</strong>
            <p className="mb-0">Hyderabad, Telangana, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-4">
          <h5 className="fw-bold">Connect with me</h5>
          <div className="d-flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/shivakumarsouta" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x text-primary"></i>
            </a>
            <a href="https://x.com/soutashivakumar?t=N-gyupa5FaUjFjd5ycFQ6A&s=08" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x text-primary"></i>
            </a>
            <a href="https://www.facebook.com/share/163fycC6cD/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x text-primary"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




<footer className={`${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} py-4 mt-5`}>
  <div className="container d-flex justify-content-between align-items-center">
    <span>© {new Date().getFullYear()} Shivakumar Souta. All rights reserved.</span>
    <div className="d-flex gap-3">
      <a href="https://github.com/shivkumars005" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github fa-lg text-primary"></i>
      </a>
      <a href="https://www.linkedin.com/in/shivakumarsouta" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-lg text-primary"></i>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

// Projects.jsx
import React from "react";
import "./Projects.css"; // For styling

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I have worked on. These range from
        personal projects to freelance and internship-based work. I love solving
        problems through clean and functional user interfaces.
      </p>

      <div className="project-card">
        <h2>🩺 RAMA CARE POLYCLINIC DUBAI WEBSITE</h2>
        <p>
          A CRM-based web application designed for Rama Care Polyclinic, Dubai,
          to streamline lead management, client communication, and social media
          integration.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong> React.js, JavaScript, HTML, CSS
          </li>
          <li>
            <strong>Features:</strong> Lead Dashboard, Deal Tracking, Invoicing
            System, Admin Panel, Social Media Integration (Facebook, Instagram,
            Twitter, LinkedIn), and Analytics Overview.
          </li>
          <li>
            <a
              href="https://github.com/your-username/hospital-management-system"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>📝🧑‍💼EMPLOYEE MANAGEMENT SYSTEM</h2>
        <p>
          A desktop-based Java application designed to manage employee records
          efficiently within an organization.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong>Core Java, Swing, AWT, JDBC, MySQL
          </li>
          <li>
            <strong>Features:</strong> Employee registration, data update,
            deletion, salary management, and login system.
          </li>
          <li>
            <a
              href="https://your-gallery-app.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>🌐 Portfolio Website</h2>
        <p>
          A personal portfolio website to showcase my web development skills,
          projects, and professional journey in a clean and responsive design.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React.js
          </li>
          <li>
            <strong>Features:</strong>About section, project highlights, contact
            form, responsive layout, and smooth scrolling navigation.
          </li>
          <li>
            <a
              href="https://github.com/your-username/weather-app"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>🎮 Snack Game using C</h2>
        <p>
          A simple console-based snake game built using the C programming
          language. The game is designed for fun and to practice logic building,
          input handling, and screen rendering using basic C libraries.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong> C Language (stdio.h, conio.h,
            windows.h)
          </li>
          <li>
            <strong>Features:</strong> Snake movement, food spawning, scoring
            system, collision detection, and game over conditions.
          </li>
          <li>
            <li>
              <strong>Type:</strong> Personal Project
            </li>
            <a
              href="https://your-blog-platform.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </a>
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>🛍️ JINGLE HOLIDAY BAZAR</h2>
        <p>
          A frontend web application built for an online holiday shopping
          bazaar, focusing on showcasing products, offers, and a user-friendly
          shopping experience.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React.js
          </li>
          <li>
            <strong>Features:</strong> Product listing, promotional banners,
            responsive design, and user navigation enhancements.
          </li>
          <li>
            <a
              href="https://github.com/your-username/ecommerce-store"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>🏦 BANK MANAGEMENT SYSTEM</h2>
        <p>
          A console-based banking application designed to manage basic banking
          operations such as account creation, balance inquiry, deposit,
          withdrawal, and transaction history.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong> Core Java, JDBC, MySQL
          </li>
          <li>
            <strong>Features:</strong> Create account, deposit/withdraw money,
            check balance, and view transaction history.
          </li>
          <li>
            <strong>Type:</strong> Academic Project / Passion Project
          </li>
          <li>
            <a
              href="https://github.com/your-username/ecommerce-store"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>☕ JetVend Backend Engine (Currently Working On)</h2>
        <p>
          A backend system developed for managing and operating vending machines
          using Core Java. It handles real-time machine operations, command
          processing, and data management.
        </p>
        <ul>
          <li>
            <strong>Tech Stack:</strong> Core Java, JDBC, MySQL
          </li>
          <li>
            <strong>Features:</strong> Machine command execution, live item
            tracking, database management, error logging, and communication with
            vending hardware systems.
          </li>
          <li>
            <strong>Status:</strong> In Development
          </li>
          <li>
            <a
              href="https://your-chat-app.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Try it Live
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;

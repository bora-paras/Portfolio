// Home.jsx
import React from "react";
import "./Home.css"; // Importing the CSS file
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I'm <strong>Paras Singh Bora</strong>, a passionate web
          developer with a focus on front-end technologies like React, HTML,
          CSS, and JavaScript. I also have a solid understanding of Core Java
          and work with MySQL databases, allowing me to build dynamic,
          full-stack web applications. I love creating responsive, user-friendly
          websites that offer seamless experiences.
        </p>
        <Link to="/about">
          <button className="cta-button">Learn More</button>
        </Link>
      </header>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I am a self-taught developer with a background in Computer Science.
          With a keen interest in web technologies, I have developed several
          projects using JavaScript, React, and other web frameworks. I am
          passionate about coding, problem-solving, and building intuitive user
          interfaces.
        </p>
        <p>
          In my free time, I enjoy contributing to open-source projects,
          exploring new technologies, and learning more about UI/UX design.
        </p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <ul>
          <li>React.js & JavaScript</li>
          <li>HTML & CSS</li>
          <li>core java</li>
          <li>Git & GitHub</li>
          <li>APIs and Web Services</li>
          <li>Responsive Design (Mobile-first approach)</li>
          <li>UI/UX Design Principles</li>
          <li>MySQL</li>
          <li>c</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <h3>Project 1: SNACK GAME using C (2020)</h3>
          <p>
            A classic console-based Snake Game developed using the C programming
            language. The game utilizes basic C concepts like structures,
            arrays, and loops along with system libraries like conio.h and
            windows.h for rendering and real-time keyboard input. The snake
            moves across the screen, eats food, and grows in size while avoiding
            collisions with the walls and itself. This project helped me
            understand real-time logic implementation, keyboard handling, and
            the fundamentals of game development using core C programming.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Project 2: BANK MANAGEMENT SYSTEM (2022)</h3>
          <p>
            A console-based Bank Management System developed using the C
            programming language. This project simulates core banking operations
            such as creating new accounts, depositing and withdrawing money,
            viewing account details, and deleting accounts. File handling in C
            is used to store and manage customer data securely. The system
            provides a menu-driven interface, making it easy to navigate through
            different banking functionalities. This project enhanced my
            understanding of data structures, file operations, and logic
            building in C.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositorie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Project 3: EMPLOYEE MANAGEMENT SYSTEM (2023)</h3>
          <p>
            The Employee Management System is a comprehensive desktop
            application developed using Java Swing for the front-end and MySQL
            for the back-end database. This system allows administrators to
            manage employee records efficiently, with full support for CRUD
            (Create, Read, Update, Delete) operations. The application includes
            modules for adding new employees, viewing employee details, updating
            employee information, and deleting records. Employees can be added
            with fields such as name, father’s name, date of birth, salary,
            contact details, education, designation, and more. The system
            generates a unique Employee ID automatically and stores all
            information in the MySQL database. The user interface is clean and
            intuitive, featuring components like JTextField, JLabel, JComboBox,
            and JDateChooser for smooth data entry. All actions are handled
            through JDBC (Java Database Connectivity), ensuring seamless
            interaction between the user interface and the database. The Login
            screen is secure, preventing unauthorized access, while the Splash
            screen provides a professional and engaging introduction to the
            system. This system demonstrates the power of Java for building
            full-fledged desktop applications and managing data effectively
            through a well-organized user interface and relational database
            integration.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositorie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Project 4:RAMA CARE POLYCLINIC DUBAI WEBSITE (2025) </h3>
          <p>
            “RAMA CARE POLYCLINIC DUBAI WEBSITE (2025)” is a fully functional,
            modern CRM-based web application with a strong focus on the Lead
            Panel frontend. The project includes essential modules such as
            Signin/Signup pages, Admin Dashboard, Lead Dashboard, Deal
            Dashboard, and a complete Invoice Management System, allowing users
            to create new invoices, view details, and efficiently handle client
            billing. Additionally, the application integrates an extensive
            Social Media Management system with dedicated overview and messaging
            pages for Facebook, Instagram, Twitter, LinkedIn, and Google
            Analytics. A responsive Header Navigation with essential sections
            like Mail and Notifications is also part of the interface. Designed
            with user experience and interface responsiveness in mind, this CRM
            system is an effective solution for managing leads, tracking deals,
            and monitoring social engagement in the healthcare industry.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositorie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Project 5: JINGLE HOLIDAY BAZAR (2025)</h3>
          <p>
            “Jingle Holiday Bazar” is a travel and holiday booking website
            designed to offer a seamless and user-friendly experience for
            travelers. The platform features essential functionalities such as
            destination browsing, package booking, itinerary planning, customer
            inquiries, and secure payment integration. With a modern and
            visually appealing frontend built using technologies like HTML, CSS,
            JavaScript, and React. the website ensures smooth performance and
            real-time data handling. The goal of this project is to provide
            customers with a convenient way to explore and book travel packages
            online, while also enabling administrators to manage bookings,
            leads, and customer support efficiently.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositorie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Project 6: PORTFOLIO WEBSITE(2025)</h3>
          <p>
            The Portfolio Website is a personal project designed to showcase my
            skills, projects, and background as a front-end web developer. Built
            using React, HTML, CSS, and JavaScript, the website features a
            modern, responsive layout with smooth navigation and visually
            appealing sections like About Me, Projects, Skills, and Contact. I
            also integrated EmailJS to enable real-time message sending through
            the contact form without needing a backend. The goal of this project
            was to create a dynamic and engaging personal brand space,
            highlighting both technical expertise and creative design.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositorie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Project 7: JetVend Backend Engine(Currently Working On)</h3>
          <p>
            The JetVend Backend System is a Core Java-based backend application
            designed to manage and control vending machine operations
            efficiently. This project focuses on implementing essential backend
            functionalities such as handling machine and item data, managing
            machine-item mappings, and processing command instructions through a
            MySQL database. Built without using any external frameworks, the
            system demonstrates how pure Java (JDBC) can be leveraged for robust
            database interaction, CRUD operations, and backend logic. It serves
            as a scalable foundation for vending machine automation and can be
            integrated with front-end interfaces or machine firmware for
            real-time performance.
          </p>
          <a
            href="https://github.com/Pa-ras?tab=repositorie"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          If you'd like to collaborate or just want to say hello, feel free to
          reach out!
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:your.email@example.com">pbora3112@gmail.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/paras-bora-1428aa261"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/Pa-ras?tab=repositorie"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Pa-ras?tab=repositorie
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

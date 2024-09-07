import React from "react";
import './App.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

const Header = ({ scrollToSection }) => (
  <header className="bg-blue-600 text-white p-4 fixed w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="flex space-x-4">
        <button onClick={() => scrollToSection("about")} className="hover:underline">About</button>
        <button onClick={() => scrollToSection("projects")} className="hover:underline">Projects</button>
        <button onClick={() => scrollToSection("contact")} className="hover:underline">Contact</button>
      </nav>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg">I'm a passionate web developer with a focus on building responsive and dynamic applications using modern technologies.</p>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="min-h-screen bg-white flex items-center justify-center">
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded shadow-lg">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p>Details about this project.</p>
        </div>
        <div className="border p-4 rounded shadow-lg">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p>Details about this project.</p>
        </div>
        <div className="border p-4 rounded shadow-lg">
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p>Details about this project.</p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg">Feel free to reach out for collaboration or questions.</p>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded w-full mb-4" />
        <textarea placeholder="Your Message" className="border p-2 rounded w-full mb-4" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </div>
  </section>
);

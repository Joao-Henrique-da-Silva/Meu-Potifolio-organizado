import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Courses } from './components/Courses';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Courses />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
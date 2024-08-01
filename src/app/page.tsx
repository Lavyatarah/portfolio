import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';  // Assuming you have an About component
import Projects from './components/Projects';  // Assuming you have a Projects component
import Contact from './components/Contact';  // Assuming you have a Contact component
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <About />
          </div>
        </section>
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <Projects />
          </div>
        </section>
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

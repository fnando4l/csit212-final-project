import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sikavia from "./components/Sikavia";
import HowIBuiltThis from "./components/HowIBuiltThis";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Sikavia />
        <HowIBuiltThis />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

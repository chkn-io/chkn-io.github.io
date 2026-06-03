
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-[#0D1117] min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

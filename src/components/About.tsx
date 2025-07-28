import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern technologies like PHP, Laravel, and WordPress."
    },
    {
      title: "E-commerce Solutions",
      description: "Building and maintaining online stores using Shopify, implementing custom features with Liquid and GraphQL."
    },
    {
      title: "Data Analysis",
      description: "Analyzing complex datasets and creating insightful visualizations using PowerBI and Microsoft Office tools."
    },
    {
      title: "API Development",
      description: "Designing and implementing robust APIs for seamless system integration and data exchange."
    },
    {
      title: "Project Management",
      description: "Leading projects using SCRUM methodology to ensure efficient delivery and stakeholder satisfaction."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            <p className="text-lg text-gray-400 mb-6">
              I'm a passionate Full Stack Developer with extensive experience in web development
              and data analysis. My expertise spans across modern web technologies, database management,
              and e-commerce solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              With a strong foundation in both client-side and server-side development,
              I specialize in creating robust web applications and implementing effective
              data analysis solutions. My approach combines technical expertise with
              project management skills to deliver high-quality results.
            </p>
             <Link
              to="/Resume 7-28-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </Link>
          </div>
          <div className="relative animate-slide-up">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src="/uploads/c6340ee8-1b05-4d88-b834-224eb1b4e773.png"
              alt="Developer Illustration"
              className="relative z-10 w-3/4 md:w-full mx-auto h-auto"
            />
          </div>
        </div>

        <div className="mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What I Can Do For You
          </motion.h2>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_40%] px-4">
                  <div className="bg-secondary/50 p-6 rounded-xl h-full border border-primary/10">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

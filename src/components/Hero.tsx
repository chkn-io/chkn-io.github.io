
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="md:w-1/2 relative w-full h-[400px] md:h-[600px]">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src="/uploads/04199b5d-364a-4537-8296-4f0863d62992.png"
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="animate-fade-in md:w-1/2">
            <span className="text-primary mb-4 inline-block">Hello Everyone</span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <TypeAnimation
                sequence={[
                  'Percian Joseph',
                  2000,
                  'a Web Developer',
                  2000,
                  'a Data Analyst',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-primary"
                repeat={Infinity}
              />
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-secondary px-6 py-2 rounded-full border border-primary/20 inline-flex items-center gap-2">
                Web Developer & Data Analyst
                <span className="text-primary">→</span>
              </span>
            </div>
            <div className="text-base md:text-xl text-gray-400 max-w-2xl mb-12">
              <p>
                Based in the Philippines, I specialize in creating exceptional digital solutions through web development using PHP, WordPress, Shopify, and JavaScript. I also excel in data analytics, leveraging tools like PowerBI, Excel, and LookerStudio to derive meaningful insights from complex datasets.
              </p>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer inline-block"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

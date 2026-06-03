import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, ShoppingCart, BarChart3, Layers, Settings, Rocket } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack web apps built with PHP, Laravel, JavaScript, and React — fast, secure, and scalable.",
    color: "from-emerald-500/20 to-cyan-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    tags: ["PHP", "Laravel", "React", "MySQL"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Custom Shopify stores with Liquid, GraphQL, and third-party integrations that convert and retain customers.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    tags: ["Shopify", "Liquid", "GraphQL", "Payments"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into powerful insights with PowerBI dashboards, Excel models, and LookerStudio reports.",
    color: "from-blue-500/20 to-purple-500/10",
    border: "border-blue-500/20 hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    tags: ["PowerBI", "Excel", "LookerStudio", "SQL"],
  },
  {
    icon: Layers,
    title: "WordPress & CMS",
    description: "Beautiful, fast, and SEO-friendly WordPress websites with custom themes, plugins, and page builders.",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20 hover:border-purple-500/50",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    tags: ["WordPress", "ACF", "Elementor", "WooCommerce"],
  },
  {
    icon: Settings,
    title: "API Development",
    description: "Robust, well-documented REST APIs and third-party integrations for seamless system connectivity.",
    color: "from-teal-500/20 to-emerald-500/10",
    border: "border-teal-500/20 hover:border-teal-500/50",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    tags: ["REST API", "JSON", "OAuth", "Webhooks"],
  },
  {
    icon: Rocket,
    title: "Project Management",
    description: "Efficient project delivery using SCRUM/Agile methodology — on time, in scope, and within budget.",
    color: "from-orange-500/20 to-yellow-500/10",
    border: "border-orange-500/20 hover:border-orange-500/50",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    tags: ["SCRUM", "Agile", "Jira", "Stakeholders"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`group relative rounded-2xl p-6 border ${service.border} bg-gradient-to-br ${service.color} backdrop-blur-sm cursor-default transition-all duration-300 overflow-hidden hover:shadow-2xl`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/3 to-transparent rounded-2xl" />
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.iconBg} mb-5`}>
        <Icon size={22} className={service.iconColor} />
      </div>
      {/* Title */}
      <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/8"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shapesY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="services" ref={sectionRef} className="relative py-28 overflow-hidden bg-[#0A0F16]">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-emerald-500/6 rounded-full blur-[90px] animate-glow-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-cyan-500/6 rounded-full blur-[100px] animate-glow-pulse-delay" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </motion.div>

      {/* Parallax floating shapes */}
      <motion.div style={{ y: shapesY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[20%] w-24 h-24 border border-emerald-500/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-20 left-[15%] w-16 h-16 border border-cyan-500/10 rotate-45 animate-float-slow" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium border border-emerald-500/25 bg-emerald-500/5 mb-5"
          >
            What I Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services &amp;{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            End-to-end digital solutions — from pixel-perfect front-ends to robust back-ends
            and data-driven insights.
          </motion.p>
          <div className="section-line mx-auto mt-6" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-5">
            Need something specific? Let's talk about your project.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-300 btn-shine glow-emerald-sm hover:scale-105"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

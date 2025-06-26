import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "16539223-f516-46ba-b799-8fd17803232c",
          name: form.name,
          email: form.email,
          from_name: form.name,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/percianborja",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/chkn-io",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/percian15",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sirpborja/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary relative">
      <div className="absolute inset-0 bg-[url('/path-to-pattern.jpg')] bg-fixed opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-foreground"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Contact Details and Social Media */}
            <div className="space-y-6">
              <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:percian0296@gmail.com" className="hover:text-primary transition-colors">
                      percian0296@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:+639276676145" className="hover:text-primary transition-colors">
                      +63 927 667 6145
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Social Media</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-background/5 hover:bg-primary/20 transition-colors text-gray-300 hover:text-primary"
                    >
                      <span className="text-primary">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Contact Form */}
            <div className="relative bg-gradient-to-br from-primary/10 via-background/80 to-primary/5 shadow-2xl p-8 rounded-2xl border-2 border-primary/40 flex flex-col justify-center transition-transform duration-300 hover:scale-[1.025] focus-within:scale-[1.025]">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg border-4 border-background">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center tracking-tight">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 mt-2">
                <input type="hidden" name="from_name" value={form.name} />
                <div>
                  <label htmlFor="name" className="block text-foreground font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-background/40 border-2 border-primary/20 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-background/40 border-2 border-primary/20 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-foreground font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg bg-background/40 border-2 border-primary/20 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                  />
                </div>
                <button     
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-bold text-lg shadow-lg hover:from-primary/90 hover:to-primary/70 transition-colors disabled:opacity-60 mt-2"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                {success && <div className="text-green-500 text-center font-semibold mt-2">{success}</div>}
                {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>        
    </section>
  );
};

export default Contact;

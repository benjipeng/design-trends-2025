"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Type, Palette, Sparkles, Layers, Code, Zap } from "lucide-react";
import { useRef } from "react";

export default function TypeflowPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: <Type className="w-12 h-12" />,
      title: "Brand Typography",
      description: "Custom typefaces that speak your brand's language",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Visual Identity",
      description: "Cohesive design systems that scale beautifully",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Motion Design",
      description: "Kinetic typography that brings words to life",
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Web Design",
      description: "Interfaces where typography takes center stage",
    },
  ];

  const projects = [
    { name: "Quantum", category: "Tech Startup", year: "2025" },
    { name: "Ethereal", category: "Fashion Brand", year: "2025" },
    { name: "Nexus", category: "Architecture", year: "2024" },
    { name: "Lumina", category: "Wellness", year: "2024" },
  ];

  return (
    <div className="min-h-screen typeflow-gradient">
      {/* Hero Section */}
      <section ref={targetRef} className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            style={{ scale, opacity }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-9xl font-bold mb-8 typeflow-text-gradient font-inter leading-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontVariationSettings: "'wght' 900",
              }}
            >
              Typeflow
              <br />
              <motion.span
                className="text-5xl md:text-8xl"
                style={{
                  fontVariationSettings: "'wght' 300",
                }}
              >
                Studio
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl typeflow-text font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontVariationSettings: "'wght' 500",
              }}
            >
              Where typography becomes an experience.
              <br />
              We craft visual language that resonates.
            </motion.p>
          </motion.div>
        </div>

        {/* Floating text elements */}
        <motion.div
          className="absolute top-20 left-10 text-8xl typeflow-text-gradient opacity-10 font-inter"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontVariationSettings: "'wght' 900",
          }}
        >
          A
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-9xl typeflow-text-gradient opacity-10 font-inter"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontVariationSettings: "'wght' 900",
          }}
        >
          Z
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-12 typeflow-text font-inter"
              whileInView={{ fontVariationSettings: "'wght' 900" }}
              style={{
                fontVariationSettings: "'wght' 300",
              }}
              transition={{ duration: 0.6 }}
            >
              Typography is not just seen.
              <br />
              <span className="typeflow-text-gradient">It's experienced.</span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl typeflow-text font-inter leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We believe great design starts with intentional typography.
              Every letter, every space, every curve tells a story.
              Let us help you tell yours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold typeflow-text-gradient font-inter text-center mb-4">
              Our Services
            </h2>
            <p className="text-xl text-center typeflow-text font-inter">
              Comprehensive design solutions centered around typography
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="kinetic-card p-10 group cursor-pointer"
              >
                <motion.div
                  className="mb-6 typeflow-text-gradient"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                <motion.h3
                  className="text-3xl font-bold mb-4 typeflow-text font-inter"
                  style={{
                    fontVariationSettings: "'wght' 700",
                  }}
                  whileHover={{
                    fontVariationSettings: "'wght' 900",
                    letterSpacing: "0.02em",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>

                <p className="text-lg typeflow-text opacity-80 font-inter">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold typeflow-text-gradient font-inter text-center">
              Selected Work
            </h2>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  x: 20,
                  transition: { duration: 0.3 },
                }}
                className="kinetic-card p-10 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <motion.h3
                      className="text-5xl md:text-7xl font-bold typeflow-text-gradient font-inter mb-2"
                      style={{
                        fontVariationSettings: "'wght' 800",
                      }}
                      whileHover={{
                        fontVariationSettings: "'wght' 900",
                        letterSpacing: "0.03em",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.name}
                    </motion.h3>
                    <p className="text-lg typeflow-text opacity-70 font-inter">
                      {project.category}
                    </p>
                  </div>
                  <div className="text-3xl typeflow-text-gradient font-inter mt-4 md:mt-0">
                    {project.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with Kinetic Numbers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="text-7xl md:text-8xl font-bold typeflow-text-gradient font-inter mb-4"
                  style={{
                    fontVariationSettings: "'wght' 900",
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-xl typeflow-text font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-bold mb-8 typeflow-text-gradient font-inter"
              style={{
                fontVariationSettings: "'wght' 900",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              Let's Create
              <br />
              Something
              <br />
              Beautiful
            </motion.h2>

            <motion.p
              className="text-2xl mb-12 typeflow-text font-inter max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Ready to elevate your brand with exceptional typography?
            </motion.p>

            <motion.button
              className="px-12 py-6 rounded-full text-xl font-inter font-bold kinetic-card"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

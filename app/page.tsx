"use client";

import { motion } from "motion/react";
import { Sparkles, Eye, Zap, Shield } from "lucide-react";

export default function AuroraGlassPage() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Crystal Clear",
      description: "Advanced nano-coating technology ensures perfect transparency in any condition.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Control",
      description: "Switch from transparent to opaque instantly with our smart tint technology.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Efficient",
      description: "Reduce heating and cooling costs by up to 40% with intelligent thermal regulation.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ultra Durable",
      description: "Military-grade strengthened glass that's 10x stronger than traditional windows.",
    },
  ];

  return (
    <div className="min-h-screen aurora-gradient">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-pink-300/20 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 md:p-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 aurora-text font-playfair"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Future of Glass
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 aurora-text-secondary font-lora"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Smart glass technology that adapts to your environment,
              <br />
              combining elegance with innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="glass-button px-8 py-4 rounded-full font-semibold text-lg font-lora"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.button>

              <motion.button
                className="glass-button-outline px-8 py-4 rounded-full font-semibold text-lg font-lora"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 aurora-text font-playfair">
              Revolutionary Features
            </h2>
            <p className="text-xl aurora-text-secondary font-lora">
              Experience the next generation of architectural glass
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-icon-bg mb-6 aurora-text"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 aurora-text font-playfair">
                  {feature.title}
                </h3>

                <p className="aurora-text-secondary font-lora">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 aurora-text font-playfair">
              Transform Your Space
            </h2>

            <p className="text-xl mb-8 aurora-text-secondary font-lora">
              Join thousands of architects and designers who trust Aurora Glass
              for their most ambitious projects.
            </p>

            <motion.button
              className="glass-button px-10 py-5 rounded-full font-semibold text-lg font-lora"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

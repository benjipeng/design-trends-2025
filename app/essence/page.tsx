"use client";

import { motion } from "motion/react";
import { Clock, Award, Shield, Gem } from "lucide-react";

export default function EssencePage() {
  const collection = [
    {
      name: "Classic",
      price: "$12,500",
      description: "Timeless elegance",
    },
    {
      name: "Heritage",
      price: "$18,900",
      description: "Traditional craftsmanship",
    },
    {
      name: "Modern",
      price: "$15,700",
      description: "Contemporary design",
    },
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Swiss Movement",
      description: "Precision engineered",
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Sapphire Crystal",
      description: "Scratch resistant",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5 Year Warranty",
      description: "Guaranteed quality",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winning",
      description: "Design excellence",
    },
  ];

  return (
    <div className="min-h-screen essence-bg">
      {/* Hero Section - Maximum whitespace, huge typography */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="accent-line mx-auto mb-8" />
            </motion.div>

            <motion.h1
              className="text-8xl md:text-[12rem] lg:text-[16rem] font-bold mb-8 essence-text font-josefin tracking-tighter leading-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              ESSENCE
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl essence-text-secondary font-lato max-w-2xl mx-auto font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Where time meets artistry
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Minimal text, maximum impact */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="accent-line mx-auto mb-12" />

            <h2 className="text-5xl md:text-7xl font-bold mb-12 essence-text font-josefin">
              Crafted for
              <br />
              <span className="essence-accent">Eternity</span>
            </h2>

            <p className="text-xl md:text-2xl essence-text-secondary font-lato font-light leading-relaxed">
              Each timepiece is a masterpiece of Swiss engineering,
              <br className="hidden md:block" />
              designed to transcend generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collection Section - Clean cards, lots of space */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="accent-line mx-auto mb-12" />
            <h2 className="text-6xl md:text-8xl font-bold essence-text font-josefin mb-6">
              Collection
            </h2>
            <p className="text-xl essence-text-secondary font-lato font-light">
              Three signatures of excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {collection.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8 }}
                className="minimal-card p-12 text-center group cursor-pointer"
              >
                {/* Placeholder for watch image - using geometric shape */}
                <motion.div
                  className="w-48 h-48 mx-auto mb-12 rounded-full border-2 essence-text flex items-center justify-center"
                  whileHover={{ scale: 1.05, borderColor: "#ff6b6b" }}
                  transition={{ duration: 0.3 }}
                >
                  <Clock className="w-20 h-20 essence-text-secondary" />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-bold mb-4 essence-text font-josefin">
                  {item.name}
                </h3>

                <p className="text-lg essence-text-secondary font-lato font-light mb-6">
                  {item.description}
                </p>

                <div className="text-3xl font-bold essence-accent font-lato">
                  {item.price}
                </div>

                <div className="accent-line mx-auto mt-8 group-hover:w-24 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Minimal presentation */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 essence-text mb-6"
                  whileHover={{ scale: 1.1, borderColor: "#ff6b6b" }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-2 essence-text font-josefin">
                  {feature.title}
                </h3>

                <p className="text-sm essence-text-secondary font-lato font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section - Bold statement */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="minimal-card p-16 md:p-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-8xl md:text-9xl font-bold essence-accent font-josefin mb-6">
                  1847
                </div>
                <p className="text-2xl md:text-3xl essence-text-secondary font-lato font-light">
                  Years of Swiss excellence
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section - Pure typography */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="accent-line mx-auto mb-12" />

            <blockquote className="text-4xl md:text-6xl font-light essence-text font-josefin leading-relaxed mb-12">
              "Time is the most
              <br />
              <span className="essence-accent font-bold">valuable</span>
              <br />
              thing we own"
            </blockquote>

            <p className="text-xl essence-text-secondary font-lato">
              — Essence Philosophy
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Minimal and elegant */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line mx-auto mb-12" />

            <h2 className="text-6xl md:text-8xl font-bold mb-12 essence-text font-josefin">
              Discover
              <br />
              Timeless
            </h2>

            <motion.button
              className="px-16 py-6 border-2 essence-text rounded-full text-xl font-josefin font-bold hover:bg-current hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: "currentColor" }}
            >
              Explore Collection
            </motion.button>

            <motion.p
              className="mt-12 text-lg essence-text-secondary font-lato font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Visit our boutique or schedule a private viewing
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

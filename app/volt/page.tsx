"use client";

import { motion } from "motion/react";
import { Zap, Battery, Flame, Rocket, TrendingUp, Users } from "lucide-react";

export default function VoltPage() {
  const features = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "300mg Caffeine",
      description: "Maximum energy boost for peak performance",
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Zero Crash",
      description: "Sustained energy without the downturn",
    },
    {
      icon: <Flame className="w-10 h-10" />,
      title: "Thermogenic",
      description: "Accelerate your metabolism naturally",
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Fast Acting",
      description: "Feel the surge within 15 minutes",
    },
  ];

  const flavors = [
    { name: "Neon Surge", color: "#FF007A", description: "Electric Berry Blast" },
    { name: "Cyber Mint", color: "#00FFB3", description: "Cool Mint Energy" },
    { name: "Plasma Punch", color: "#0abdc6", description: "Tropical Thunder" },
    { name: "Dark Matter", color: "#A700FF", description: "Midnight Grape" },
  ];

  return (
    <div className="min-h-screen volt-gradient">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#00FFB3 1px, transparent 1px), linear-gradient(90deg, #00FFB3 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6 neon-glow-text font-space-grotesk tracking-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 0, 122, 0.5)",
                  "0 0 40px rgba(255, 0, 122, 0.8)",
                  "0 0 20px rgba(255, 0, 122, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              VOLT
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl mb-8 volt-text font-inter uppercase tracking-widest font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Charge Your Limits
            </motion.p>

            <motion.p
              className="text-lg md:text-xl mb-12 volt-text-secondary font-inter max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Engineered for those who push boundaries. Fuel your unstoppable drive with cutting-edge energy science.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="neon-button px-10 py-5 rounded-full text-lg font-jetbrains"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 0, 122, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                GET CHARGED
              </motion.button>

              <motion.button
                className="px-10 py-5 rounded-full text-lg font-jetbrains border-2 volt-text font-bold uppercase"
                style={{ borderColor: "currentColor" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FIND STORES
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 rounded-full border-4 border-current opacity-20"
          style={{ borderColor: "#FF007A" }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 neon-glow-text font-space-grotesk uppercase">
              Power Stats
            </h2>
            <p className="text-xl volt-text-secondary font-inter">
              Engineered for maximum performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="neon-card p-8 text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center mb-6 neon-glow-text"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3 volt-text font-space-grotesk uppercase">
                  {feature.title}
                </h3>

                <p className="volt-text-secondary font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 neon-glow-text font-space-grotesk uppercase">
              Choose Your Charge
            </h2>
            <p className="text-xl volt-text-secondary font-inter">
              Four electrifying flavors, one unstoppable energy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavors.map((flavor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="neon-card p-8 text-center cursor-pointer"
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full"
                  style={{
                    background: flavor.color,
                    boxShadow: `0 0 40px ${flavor.color}40`,
                  }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${flavor.color}40`,
                      `0 0 40px ${flavor.color}60`,
                      `0 0 20px ${flavor.color}40`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <h3 className="text-2xl font-bold mb-2 volt-text font-space-grotesk uppercase">
                  {flavor.name}
                </h3>

                <p className="volt-text-secondary font-inter">
                  {flavor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="neon-card p-12 md:p-16"
          >
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-12 h-12 neon-glow-text" />
                </div>
                <div className="text-5xl font-bold mb-2 neon-glow-text font-jetbrains">
                  2M+
                </div>
                <div className="volt-text-secondary font-inter uppercase text-sm tracking-wider">
                  Cans Sold
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-12 h-12 neon-glow-text" />
                </div>
                <div className="text-5xl font-bold mb-2 neon-glow-text font-jetbrains">
                  500K+
                </div>
                <div className="volt-text-secondary font-inter uppercase text-sm tracking-wider">
                  Active Users
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Rocket className="w-12 h-12 neon-glow-text" />
                </div>
                <div className="text-5xl font-bold mb-2 neon-glow-text font-jetbrains">
                  98%
                </div>
                <div className="volt-text-secondary font-inter uppercase text-sm tracking-wider">
                  Satisfaction
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 neon-glow-text font-space-grotesk uppercase">
              Power Up Now
            </h2>

            <p className="text-xl mb-12 volt-text-secondary font-inter max-w-2xl mx-auto">
              Join the energy revolution. Get Volt delivered to your door and experience unstoppable energy.
            </p>

            <motion.button
              className="neon-button px-12 py-6 rounded-full text-xl font-jetbrains"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 0, 122, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 0, 122, 0.4)",
                  "0 0 40px rgba(255, 0, 122, 0.6)",
                  "0 0 20px rgba(255, 0, 122, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ORDER NOW
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

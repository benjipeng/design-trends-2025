"use client";

import { motion } from "motion/react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Shield,
  Database,
  LineChart,
  PieChart,
  Activity,
  Layers,
  Target,
} from "lucide-react";

export default function MosaicPage() {
  const stats = [
    { label: "Active Users", value: "2.4M+", icon: <Users className="w-6 h-6" /> },
    { label: "Data Points", value: "15B+", icon: <Database className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Activity className="w-6 h-6" /> },
    { label: "Countries", value: "120+", icon: <Globe className="w-6 h-6" /> },
  ];

  const features = [
    {
      title: "Real-Time Analytics",
      description: "Track your metrics as they happen with millisecond precision",
      icon: <Zap className="w-8 h-8" />,
      size: "large",
    },
    {
      title: "Predictive Insights",
      description: "AI-powered forecasting for smarter decisions",
      icon: <TrendingUp className="w-8 h-8" />,
      size: "medium",
    },
    {
      title: "Custom Dashboards",
      description: "Build exactly what you need",
      icon: <Layers className="w-8 h-8" />,
      size: "small",
    },
    {
      title: "Data Security",
      description: "Enterprise-grade encryption and compliance",
      icon: <Shield className="w-8 h-8" />,
      size: "medium",
    },
    {
      title: "Multi-Source Integration",
      description: "Connect all your data sources seamlessly",
      icon: <Database className="w-8 h-8" />,
      size: "small",
    },
    {
      title: "Advanced Visualization",
      description: "Beautiful charts that tell your story",
      icon: <BarChart3 className="w-8 h-8" />,
      size: "large",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["Up to 100K events", "5 team members", "7-day data retention", "Email support"],
      gradient: "bento-card",
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: ["Up to 1M events", "20 team members", "90-day data retention", "Priority support", "Custom integrations"],
      gradient: "bento-card-primary",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited events", "Unlimited team members", "Unlimited data retention", "24/7 dedicated support", "Custom SLA", "On-premise option"],
      gradient: "bento-card-secondary",
    },
  ];

  return (
    <div className="min-h-screen mosaic-bg">
      {/* Hero Section with Bento Grid Stats */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-poppins font-semibold text-indigo-600">
                  Analytics Platform
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mosaic-text font-poppins mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Data That
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Drives Decisions
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mosaic-text opacity-70 font-roboto max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Transform your raw data into actionable insights with our
              cutting-edge analytics platform
            </motion.p>
          </motion.div>

          {/* Stats Bento Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bento-card p-8 text-center"
              >
                <div className="flex justify-center mb-4 text-indigo-600">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mosaic-text font-roboto-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-sm mosaic-text opacity-60 font-roboto">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mosaic-text font-poppins mb-4">
              Everything You Need
            </h2>
            <p className="text-xl mosaic-text opacity-70 font-roboto">
              Powerful features designed for modern teams
            </p>
          </motion.div>

          {/* Custom Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Real-Time Analytics - Large */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bento-card-primary p-10 md:col-span-2 lg:row-span-2"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-white/20 rounded-xl">{features[0].icon}</div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
                {features[0].title}
              </h3>
              <p className="text-lg font-roboto opacity-90 mb-8">
                {features[0].description}
              </p>

              {/* Decorative chart visual */}
              <div className="mt-auto">
                <div className="flex items-end gap-2 h-32">
                  {[40, 60, 45, 80, 55, 90, 65, 75].map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-white/30 rounded-t-lg"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Predictive Insights - Medium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bento-card p-8"
            >
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl inline-flex mb-6 text-indigo-600">
                {features[1].icon}
              </div>
              <h3 className="text-2xl font-bold mosaic-text font-poppins mb-3">
                {features[1].title}
              </h3>
              <p className="mosaic-text opacity-70 font-roboto">
                {features[1].description}
              </p>
            </motion.div>

            {/* Custom Dashboards - Small */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="bento-card-accent p-8"
            >
              <div className="p-3 bg-white/20 rounded-xl inline-flex mb-6">
                {features[2].icon}
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-3">
                {features[2].title}
              </h3>
              <p className="opacity-90 font-roboto">{features[2].description}</p>
            </motion.div>

            {/* Data Security - Medium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="bento-card p-8 md:col-span-2 lg:col-span-1"
            >
              <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl inline-flex mb-6 text-cyan-600">
                {features[3].icon}
              </div>
              <h3 className="text-2xl font-bold mosaic-text font-poppins mb-3">
                {features[3].title}
              </h3>
              <p className="mosaic-text opacity-70 font-roboto">
                {features[3].description}
              </p>
            </motion.div>

            {/* Multi-Source Integration - Small */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="bento-card-secondary p-8"
            >
              <div className="p-3 bg-white/20 rounded-xl inline-flex mb-6">
                {features[4].icon}
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-3">
                {features[4].title}
              </h3>
              <p className="opacity-90 font-roboto">{features[4].description}</p>
            </motion.div>

            {/* Advanced Visualization - Large */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -4 }}
              className="bento-card p-8 md:col-span-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600">
                  {features[5].icon}
                </div>
                <div className="flex gap-2">
                  <LineChart className="w-6 h-6 mosaic-text opacity-40" />
                  <PieChart className="w-6 h-6 mosaic-text opacity-40" />
                  <Target className="w-6 h-6 mosaic-text opacity-40" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mosaic-text font-poppins mb-3">
                {features[5].title}
              </h3>
              <p className="text-lg mosaic-text opacity-70 font-roboto">
                {features[5].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card p-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 mb-6">
                <Database className="w-4 h-4" />
                <span className="text-sm font-poppins font-semibold">
                  Integrations
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mosaic-text font-poppins mb-6">
                Connect Your Entire Stack
              </h2>

              <p className="text-xl mosaic-text opacity-70 font-roboto mb-8">
                Seamlessly integrate with 200+ tools and platforms. From databases
                to marketing tools, we've got you covered.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded bg-white/50 dark:bg-white/10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card-primary p-12 flex flex-col justify-center"
            >
              <div className="text-7xl md:text-8xl font-bold font-roboto-mono mb-4">
                200+
              </div>
              <h3 className="text-3xl font-bold font-poppins mb-4">
                Integrations Ready
              </h3>
              <p className="text-lg opacity-90 font-roboto mb-8">
                Connect your favorite tools with just a few clicks. No code required.
              </p>
              <motion.button
                className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-poppins font-bold text-lg self-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Integrations
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mosaic-text font-poppins mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl mosaic-text opacity-70 font-roboto">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${plan.gradient} p-10 relative ${
                  plan.popular ? "md:scale-105 md:shadow-2xl" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-poppins font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold font-poppins mb-2 ${
                    plan.gradient === "bento-card" ? "mosaic-text" : ""
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mb-8">
                  <span
                    className={`text-5xl font-bold font-roboto-mono ${
                      plan.gradient === "bento-card" ? "mosaic-text" : ""
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.gradient === "bento-card"
                        ? "mosaic-text opacity-60"
                        : "opacity-80"
                    } font-roboto`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.gradient === "bento-card"
                            ? "bg-indigo-100 dark:bg-indigo-900/30"
                            : "bg-white/20"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            plan.gradient === "bento-card"
                              ? "bg-indigo-600"
                              : "bg-white"
                          }`}
                        />
                      </div>
                      <span
                        className={`font-roboto ${
                          plan.gradient === "bento-card"
                            ? "mosaic-text"
                            : "opacity-90"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-4 rounded-xl font-poppins font-bold ${
                    plan.gradient === "bento-card"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-white text-indigo-600 hover:bg-white/90"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card-primary p-16 md:p-24 text-center rounded-3xl"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold font-poppins mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform
              <br />
              Your Data?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl opacity-90 font-roboto mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join thousands of teams making smarter decisions with Mosaic
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="px-10 py-5 bg-white text-indigo-600 rounded-xl font-poppins font-bold text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>

              <motion.button
                className="px-10 py-5 border-2 border-white/30 rounded-xl font-poppins font-bold text-lg backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            <motion.p
              className="mt-8 opacity-80 font-roboto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaCertificate,
  FaLaptopCode,
  FaAccessibleIcon,
  FaChartLine
} from 'react-icons/fa';

const FuturePlans = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const immediateGoals = [
    {
      icon: FaBriefcase,
      title: 'Continue as Process Associate',
      description: 'Maintain excellence in my current role at Genpact while gaining valuable experience.',
    },
    {
      icon: FaGraduationCap,
      title: 'Academic Excellence',
      description: 'Complete my Computer Science degree with strong fundamentals and practical skills.',
    },
    {
      icon: FaLaptopCode,
      title: 'Technical Skill Development',
      description: 'Continuously improve programming skills and stay updated with industry trends.',
    },
  ];

  const longTermGoals = [
    {
      icon: FaLaptopCode,
      title: 'Software Development Career',
      description: 'Transition into software development, systems analysis, or UI/UX design roles.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaAccessibleIcon,
      title: 'Impactful Projects',
      description: 'Work on projects in education, accessibility, and local government systems.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FaUsers,
      title: 'User-Centered Solutions',
      description: 'Leverage customer service experience to build solutions that truly serve users.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaChartLine,
      title: 'Continuous Learning',
      description: 'Earn certifications and stay current with evolving technology landscape.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="future" className="py-20 bg-gradient-to-br from-pastel-mint to-pastel-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Future Plans & Goals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-text-dark/70 max-w-3xl mx-auto">
              Looking ahead with purpose and determination, here's my roadmap for professional growth and impact.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-16 shadow-xl">
            <h3 className="text-2xl font-bold text-text-dark mb-6 text-center">My Vision</h3>
            <p className="text-lg text-text-dark/80 leading-relaxed">
              My immediate goal is to continue working as a Process Associate at Genpact while consistently gaining more knowledge, 
              experience, and confidence. I plan to use this time to improve my technical skills, build a stronger portfolio, 
              and prepare myself to eventually transition into a career that's directly related to my course — Computer Science.
            </p>
          </div>

          {/* Immediate Goals */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-text-dark mb-12 text-center">Immediate Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {immediateGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 text-center"
                  >
                    <div className="inline-flex p-6 rounded-full bg-pastel-lavender text-purple-600 mb-6">
                      <Icon size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-text-dark mb-4">{goal.title}</h4>
                    <p className="text-text-dark/70 leading-relaxed">{goal.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Long-term Goals */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-text-dark mb-12 text-center">Long-term Aspirations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {longTermGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${goal.color} text-white flex-shrink-0`}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-dark mb-3">{goal.title}</h4>
                        <p className="text-text-dark/70 leading-relaxed">{goal.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-text-dark mb-8 text-center">My Career Roadmap</h3>
            <div className="relative border-l-4 border-purple-600 pl-6 space-y-10">

              {[
                {
                  title: "2019–2020: Ground-Level Hustle",
                  desc: "Started as a DoorDash delivery rider and Customer Service Representative. Gained exposure to frontline customer experience, multitasking, and time management in high-pressure environments."
                },
                {
                  title: "2020–2025: Mediation & Remote Responsibility",
                  desc: "Joined eBay as a Member-to-Member Mediator, resolving disputes and promoting fair user interactions. At the same time, worked at Canva as a Canva for Education Application Reviewer, helping educators gain access to digital tools."
                },
                {
                  title: "2022–Present: Academic Ascent",
                  desc: "Currently pursuing a BS in Computer Science at Cavite State University – Bacoor Campus. Specializing in software engineering, algorithms, system design, and UI/UX."
                },
                {
                  title: "2025–Present: Strengthening as a Process Associate",
                  desc: "Currently employed at Portfolio Recovery Associates. Focused on compliance, documentation, and mastering internal tools."
                },
                {
                  title: "2024–2025: Portfolio & Thesis Completion",
                  desc: "Finalizing my thesis project on an intelligent traffic navigation system and building a personal portfolio."
                },
                {
                  title: "2026–2027: Career Crossover into Tech",
                  desc: "Aiming to transition into roles like software developer, QA analyst, or UI/UX designer."
                },
                {
                  title: "2028 & Beyond: Meaningful Impact",
                  desc: "Aspire to lead impactful projects in tech—especially in education, accessibility, and automation—and mentor others in tech."
                },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-2.5 w-5 h-5 bg-purple-600 rounded-full"></div>
                  <h4 className="text-lg font-bold text-text-dark">{step.title}</h4>
                  <p className="text-text-dark/70">{step.desc}</p>
                </div>
              ))}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlans;
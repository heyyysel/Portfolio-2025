import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaDesktop, FaMobile, FaComments, FaBrain, FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'HTML/CSS', level: 10, icon: FaCode, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 10, icon: FaCode, color: 'bg-yellow-500' },
    { name: 'React', level: 10, icon: FaDesktop, color: 'bg-blue-500' },
    { name: 'PHP', level: 10, icon: FaCode, color: 'bg-purple-500' },
    { name: 'MySQL', level: 10, icon: FaDatabase, color: 'bg-blue-600' },
    { name: 'UI/UX Design', level: 10, icon: FaMobile, color: 'bg-pink-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-pastel-lavender to-pastel-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Skills, Trainings & Certificates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-text-dark mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${skill.color} text-white mr-4`}>
                      <skill.icon size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-text-dark">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                      style={{ width: inView ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <p className="text-sm text-text-dark/60 mt-2">{skill.level}% Proficiency</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
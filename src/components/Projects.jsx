import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaPlus } from 'react-icons/fa';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Memory Haze',
      description: 'A memory card matching game built to enhance cognitive reflexes and concentration.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1314544/pexels-photo-1314544.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/heyyysel/Memory-Haze',
    },
    {
      title: 'Dodge the Creeps',
      description: 'Fast-paced 2D arcade-style game where players dodge enemies for as long as possible.',
      technologies: ['Godot Engine', 'GDScript'],
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/heyyysel/Dodge-the-Creeps-',
    },
    {
      title: 'Dungeon Rush',
      description: 'Side-scrolling pixel dungeon game with traps, enemies, and a treasure-hunting hero.',
      technologies: ['Godot Engine', 'Pixel Art', 'GDScript'],
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/heyyysel/Dungeon-Rush',
    },
    {
      title: 'Youth Saver',
      description: 'A youth-focused responsive website promoting mental health awareness and resources.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/heyyysel/Youth-Saver',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal responsive portfolio showcasing my projects, resume, and contact form.',
      technologies: ['React', 'Tailwind CSS', 'EmailJS'],
      image: 'https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/heyyysel/Hazel-Baldava-Portfolio',
    },
    {
      title: 'E-Commerce Website',
      description: 'A complete online store platform with product listings, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/heyyysel/e-commerce',
    },
  ];

  const techColors = {
    'HTML': 'bg-orange-100 text-orange-800',
    'CSS': 'bg-blue-100 text-blue-800',
    'JavaScript': 'bg-yellow-100 text-yellow-800',
    'PHP': 'bg-purple-100 text-purple-800',
    'MySQL': 'bg-blue-100 text-blue-800',
    'React': 'bg-cyan-100 text-cyan-800',
    'Node.js': 'bg-green-100 text-green-800',
    'MongoDB': 'bg-green-100 text-green-800',
    'Express': 'bg-gray-100 text-gray-800',
    'Vue.js': 'bg-green-100 text-green-800',
    'Firebase': 'bg-orange-100 text-orange-800',
    'Tailwind CSS': 'bg-teal-100 text-teal-800',
    'OpenWeather API': 'bg-indigo-100 text-indigo-800',
    'Chart.js': 'bg-pink-100 text-pink-800',
    'EmailJS': 'bg-red-100 text-red-800',
  };

  return (
    <section id="projects" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-text-dark/70 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in web development, 
              database management, and user interface design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-dark mb-3">{project.title}</h3>
                  <p className="text-text-dark/70 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || 'bg-gray-100 text-gray-800'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-pastel-lavender to-pastel-mint rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group flex items-center justify-center min-h-[400px]">
              <div className="text-center p-6">
                <div className="inline-flex p-6 rounded-full bg-white/30 text-purple-600 mb-6 group-hover:animate-bounce-gentle">
                  <FaPlus size={48} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-3">Coming Soon</h3>
                <p className="text-text-dark/70 text-lg">More projects in development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

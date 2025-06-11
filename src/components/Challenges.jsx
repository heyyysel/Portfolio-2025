import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaClock, FaLaptopCode, FaUsers, FaDollarSign, FaLightbulb, FaUserFriends, FaHeart, FaRocket } from 'react-icons/fa';

const Challenges = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const challenges = [
    {
      icon: FaClock,
      title: 'Balancing Work and Studies',
      description: 'Managing full-time work and academic requirements while maintaining quality in both',
      color: 'bg-red-500',
    },
    {
      icon: FaLaptopCode,
      title: 'Self-Learning Tech Tools',
      description: 'Adapting to new technologies and frameworks as a self-learner without formal mentorship',
      color: 'bg-blue-500',
    },
    {
      icon: FaUsers,
      title: 'Client Adaptation',
      description: 'Working with clients who prefer traditional methods over modern automation solutions',
      color: 'bg-green-500',
    },
    {
      icon: FaDollarSign,
      title: 'Limited Resources',
      description: 'Building efficient systems and solutions within budget constraints and limited tools',
      color: 'bg-yellow-500',
    },
  ];

  const learnings = [
    {
      icon: FaRocket,
      title: 'Efficiency Over Complexity',
      description: 'Simple, well-executed solutions often outperform complex ones',
      color: 'bg-purple-500',
    },
    {
      icon: FaLightbulb,
      title: 'UI/UX Impact',
      description: 'Good design and user experience can fundamentally change user behavior',
      color: 'bg-orange-500',
    },
    {
      icon: FaHeart,
      title: 'Empathy in Design',
      description: 'Understanding real people\'s needs is key when designing systems and interfaces',
      color: 'bg-pink-500',
    },
    {
      icon: FaClock,
      title: 'Time Management Superpower',
      description: 'Effective time management is crucial, especially for working students',
      color: 'bg-teal-500',
    },
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-br from-pastel-peach to-pastel-pink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              My Journey: Challenges & Learnings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-text-dark/70 max-w-3xl mx-auto">
              Every challenge is an opportunity to grow. Here's what shaped my perspective and approach to problem-solving.
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-text-dark mb-12 text-center">Challenges Faced</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 rounded-2xl ${challenge.color} text-white flex-shrink-0`}>
                      <challenge.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-dark mb-3">{challenge.title}</h4>
                      <p className="text-text-dark/70 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Life Learnings */}
          <div>
            <h3 className="text-3xl font-bold text-text-dark mb-12 text-center">Life Learnings</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {learnings.map((learning, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 rounded-2xl ${learning.color} text-white flex-shrink-0`}>
                      <learning.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-dark mb-3">{learning.title}</h4>
                      <p className="text-text-dark/70 leading-relaxed">{learning.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
              <blockquote className="text-2xl md:text-3xl font-medium text-text-dark italic mb-4">
                "Every challenge I faced has taught me that the best solutions come from understanding real people's needs 
                and building with both efficiency and empathy in mind."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
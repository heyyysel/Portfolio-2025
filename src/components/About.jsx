import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                  <span className="w-3 h-3 bg-pastel-lavender rounded-full mr-3"></span>
                  Relevant Information
                </h3>
                <p className="text-text-dark/80 leading-relaxed">
                  Hi! I'm a 3rd year Bachelor of Science in Computer Science student at Cavite State University - Bacoor Campus. 
                  With over 6 years of customer service experience in chat and voice accounts (including roles at DoorDash, eBay, and Canva), 
                  I bring a strong communication foundation into my journey as an aspiring software developer. I'm passionate about combining 
                  real-world needs with efficient systems and creative design, with a growing skillset in UI/UX, software development, and automation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                  <span className="w-3 h-3 bg-pastel-mint rounded-full mr-3"></span>
                  Who I Really Am
                </h3>
                <p className="text-text-dark/80 leading-relaxed">
                  I'm resourceful, observant, and someone who learns best by doing. Whether it's simplifying a complicated task 
                  or finding a smarter way to present user interfaces, I thrive on building practical, efficient, and aesthetically 
                  pleasing solutions. I'm also passionate about helping others — which reflects in my career goals, my thesis 
                  (focused on public utility and accessibility), and my collaborative attitude in every project.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pastel-peach to-pastel-pink rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text-dark mb-4 flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  Family Background
                </h3>
                <p className="text-text-dark/80 leading-relaxed">
                  We are a family of five — I have one sister and one brother. My mother is originally from North Cotabato, Mindanao, 
                  and my father is from Bacolod, Negros Occidental. Growing up in a family with roots from different regions of the 
                  Philippines gave me a deep appreciation for culture, diversity, and values like respect and resilience. My family 
                  has always been supportive of my goals, and their work ethic and strength continue to inspire me every day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                  <div className="text-text-dark/80 font-medium">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3rd</div>
                  <div className="text-text-dark/80 font-medium">Year CS Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
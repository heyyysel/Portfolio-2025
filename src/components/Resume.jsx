import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaUser, FaBriefcase, FaGraduationCap, FaCogs } from 'react-icons/fa';

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-20 bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">Resume</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <a
              href="/Hazel-Baldava-Resume.pdf"
             download="Hazel-Baldava-Resume.pdf"
             className="inline-flex items-center space-x-3 bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
            <FaDownload />
            <span>Download Resume</span>
            </a>

           </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
              <h1 className="text-3xl font-bold mb-2">Hazel Baldava</h1>
              <p className="text-xl opacity-90">Computer Science Student | Process Associate | Aspiring Software Developer</p>
              <div className="mt-4 text-sm opacity-80">
                <p>hazelbaldava016@gmail.com | 09764870858</p>
                <p>Cavite, Philippines | <a href="#" className="underline">Portfolio</a></p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Professional Summary */}
              <div>
                <div className="flex items-center mb-4">
                  <FaUser className="text-purple-600 mr-3" size={20} />
                  <h3 className="text-2xl font-bold text-text-dark">Professional Summary</h3>
                </div>
                <p className="text-text-dark/80 leading-relaxed">
                  3rd year Computer Science student with 5+ years of customer service experience across chat and voice accounts. 
                  Skilled in combining technical knowledge with strong communication abilities to create user-centered solutions. 
                  Passionate about UI/UX design, software development, and automation with a focus on accessibility and efficiency.
                </p>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center mb-6">
                  <FaBriefcase className="text-purple-600 mr-3" size={20} />
                  <h3 className="text-2xl font-bold text-text-dark">Experience</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-lg font-bold text-text-dark">Process Associate</h4>
                    <p className="text-purple-600 font-medium">Genpact | 2025 - Present</p>
                    <ul className="text-text-dark/80 mt-2 list-disc list-inside space-y-1">
                      <li>Handled processing and management of charged-off consumer debt accounts.</li>
                      <li>Ensured all collections and account activities complied with FDCPA and company policies.</li>
                      <li>Identified and resolved discrepancies in account data or documentation.</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-lg font-bold text-text-dark">Customer Service Representative</h4>
                    <p className="text-purple-600 font-medium">Canva | 2021 - 2023</p>
                    <ul className="text-text-dark/80 mt-2 list-disc list-inside space-y-1">
                      <li>Reviewed applications for Canva’s educational program with a focus on quality and eligibility.</li>
                      <li>Verified applicant credentials such as teaching licenses and institutional affiliations.</li>
                      <li>Maintained accurate records and ensured GDPR/compliance standards were followed.</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-lg font-bold text-text-dark">Customer Service Representative</h4>
                    <p className="text-purple-600 font-medium">DoorDash, eBay | 2019 - 2021</p>
                    <ul className="text-text-dark/80 mt-2 list-disc list-inside space-y-1">
                      <li>Communicated resolutions clearly to involved parties to maintain trust and satisfaction.</li>
                      <li>Analyzed case details, reviewed communication history, and ensured policy compliance.</li>
                      <li>Maintained high customer satisfaction ratings consistently.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center mb-6">
                  <FaGraduationCap className="text-purple-600 mr-3" size={20} />
                  <h3 className="text-2xl font-bold text-text-dark">Education</h3>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-bold text-text-dark">Bachelor of Science in Computer Science</h4>
                  <p className="text-purple-600 font-medium">Cavite State University - Bacoor Campus | 2022 - 2026 (Expected)</p>
                  <p className="text-text-dark/80 mt-2">Currently in 3rd year, focusing on software development, database management, and system analysis.</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center mb-6">
                  <FaCogs className="text-purple-600 mr-3" size={20} />
                  <h3 className="text-2xl font-bold text-text-dark">Technical Skills</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-text-dark mb-3">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {['HTML/CSS', 'JavaScript', 'PHP', 'Python', 'Java'].map((skill) => (
                        <span key={skill} className="bg-pastel-lavender text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark mb-3">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MySQL', 'MongoDB', 'Git'].map((skill) => (
                        <span key={skill} className="bg-pastel-mint text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;

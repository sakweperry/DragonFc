import React from 'react';
import ben from "../assets/ben.jpeg";
import manager from "../assets/manager.jpeg";
import Captain from "../assets/Captain.jpeg";
import keep from "../assets/keep.jpeg";

const About = () => {
  const aboutData = {
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Our Story',
    paragraphs: [
      "With time, we realized that our shared love for the game could become more than just friendly matches. This inspired us to establish a proper football club with the vision of competing and building a strong football community.",
      "By 2025, Dragon Football Club took a major step forward by participating in tournaments and competing with other clubs. Through dedication, teamwork, and determination, we continued to grow and improve.",
      "Today, in 2026, Dragon Football Club stands proudly as a respected and competitive team, recording about 10 victories and continuing to make progress. Our journey reflects passion, unity, and the belief that great things can grow from humble beginnings."
    ]
  };

  const teamMembers = [
    { name: 'Bernard', role: 'Founder of AziBen', image: ben },
    { name: 'Azipoh', role: 'Manager of Dragon FC', image: manager },
    { name: 'Abdel', role: 'Captain of Dragon FC', image: Captain },
    { name: 'Perry', role: 'Goalkeeper of Dragon FC', image: keep }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-900 to-slate-900 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dragon Football Club</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover the passion behind the platform</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <img src={aboutData.image} alt="Football stadium" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{aboutData.title}</h2>
              {aboutData.paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-600 text-lg leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="text-center bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
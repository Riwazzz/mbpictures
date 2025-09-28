import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black/90 text-gold text-center">
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl mb-6">
          At MB Pictures Canada Inc., we are passionate about turning stories into cinematic experiences. Based in London, Ontario, we operate nationwide, offering a complete solution—from concept and casting to post-production and distribution.
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gold/80">To produce films, music videos, documentaries, and art projects that inspire audiences, while supporting creators with world-class production and distribution.</p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Creativity','Integrity','Excellence','Innovation'].map(v => (
              <div key={v} className="bg-black/80 border-2 border-gold rounded-xl p-4 font-semibold">{v}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

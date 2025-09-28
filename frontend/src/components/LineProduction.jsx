import React from "react";

const LineProduction = () => {
  return (
    <section id="line-production" className="py-20 px-4 bg-black/95 text-gold">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Nationwide Line Production Services</h2>
        <p className="text-gold/90 text-center mb-10">
          We provide professional line production services across Canada. With a strong network of talent, crew, and industry connections, we handle every project with efficiency and creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/80 border-2 border-gold rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">Location Scouting & Permits</h3>
            <p>Urban settings, rural landscapes, studios, and everything in between.</p>
          </div>
          <div className="bg-black/80 border-2 border-gold rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">Casting & Talent Management</h3>
            <p>Actors, extras, and performers for every type of project.</p>
          </div>
          <div className="bg-black/80 border-2 border-gold rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">Crew & Equipment</h3>
            <p>Skilled professionals and high-quality gear ready anywhere in Canada.</p>
          </div>
          <div className="bg-black/80 border-2 border-gold rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">Logistics & Scheduling</h3>
            <p>Travel, accommodation, catering, and day-to-day management.</p>
          </div>
          <div className="bg-black/80 border-2 border-gold rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">Budget Management</h3>
            <p>Transparent financial planning to maximize production value.</p>
          </div>
          <div className="bg-black/80 border-2 border-gold rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">On-Set Support</h3>
            <p>Full supervision to ensure smooth execution.</p>
          </div>
        </div>
        <div className="mt-10 bg-black/80 border border-gold rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="mb-2">Nationwide reach with local expertise.</p>
          <p className="mb-2">Experienced in managing small to large productions.</p>
          <p>A one-stop solution: from planning to delivery.</p>
        </div>
      </div>
    </section>
  );
};

export default LineProduction;



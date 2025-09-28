import React from "react";

const News = () => {
  const items = [
    { title: "Latest productions in progress", desc: "A slate of new shorts and features in development." },
    { title: "Festival selections & awards", desc: "Our recent projects are screening internationally." },
    { title: "Casting calls and opportunities", desc: "Open submissions for upcoming productions." },
    { title: "Behind-the-scenes stories", desc: "Insights from set and the edit suite." }
  ];

  return (
    <section id="news" className="py-20 px-4 bg-black/90 text-gold">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((n) => (
            <div key={n.title} className="bg-black/80 border-2 border-gold rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-2">{n.title}</h3>
              <p className="text-gold/80">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;



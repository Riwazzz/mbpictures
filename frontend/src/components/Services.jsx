import React, { useRef, useState, useEffect } from "react";
import { useContent } from "../context/ContentContext.jsx";

// Sample images for services - replace with your actual images
const serviceImages = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80", // Feature Films
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80", // Shorts
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", // Music Videos
  "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?auto=format&fit=crop&w=800&q=80", // Documentaries
  "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80", // Post-Production
  "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80", // Casting
  "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?auto=format&fit=crop&w=800&q=80", // Daily Programs
  "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=800&q=80", // Line Producing
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80", // Distribution
];

const Services = () => {
  const { data } = useContent();
  const items = data?.services?.items || [];
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (autoplayPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [items.length, autoplayPaused]);

  // Handle mouse events for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
    setAutoplayPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // If dragged far enough, change slide
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        // Dragged right - go to previous slide (with infinite loop)
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      } else if (dragOffset < 0) {
        // Dragged left - go to next slide (with infinite loop)
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }
    
    setDragOffset(0);
    
    // Resume autoplay after 3 seconds
    setTimeout(() => {
      setAutoplayPaused(false);
    }, 3000);
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
    setAutoplayPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  // Get visible slides (previous, current, next) with infinite wrapping
  const getVisibleSlides = () => {
    const slides = [];
    
    // Always show 3 slides with wrapping for infinite carousel
    if (items.length > 0) {
      // Previous slide (with wrapping)
      const prevIndex = (activeIndex - 1 + items.length) % items.length;
      slides.push({
        index: prevIndex,
        position: 'left',
        service: items[prevIndex],
        image: serviceImages[prevIndex % serviceImages.length]
      });
      
      // Current slide
      slides.push({
        index: activeIndex,
        position: 'center',
        service: items[activeIndex],
        image: serviceImages[activeIndex % serviceImages.length]
      });
      
      // Next slide (with wrapping)
      const nextIndex = (activeIndex + 1) % items.length;
      slides.push({
        index: nextIndex,
        position: 'right',
        service: items[nextIndex],
        image: serviceImages[nextIndex % serviceImages.length]
      });
    }
    
    return slides;
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
    setAutoplayPaused(true);
    
    // Resume autoplay after 3 seconds
    setTimeout(() => {
      setAutoplayPaused(false);
    }, 3000);
  };

  return (
    <section
      id="services"
      className="py-20 bg-black text-gold overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      
      <div 
        ref={carouselRef}
        className="relative h-[70vh] mx-auto overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${dragOffset}px)` }}
        >
          {getVisibleSlides().map((slide) => (
            <div
              key={slide.index}
              className={`absolute transition-all duration-500 ease-out ${
                slide.position === 'center' 
                  ? 'z-20 scale-100 opacity-100' 
                  : slide.position === 'left'
                    ? 'z-10 -translate-x-[calc(100%-6rem)] scale-75 opacity-50'
                    : 'z-10 translate-x-[calc(100%-6rem)] scale-75 opacity-50'
              }`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl group" style={{ width: '80vw', maxWidth: '1000px', height: '60vh' }}>
                <img 
                  src={slide.image} 
                  alt={slide.service}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-4xl font-bold mb-2">{slide.service}</h3>
                  <p className="text-xl text-gold/80 max-w-xl mb-6">
                    Professional {slide.service.toLowerCase()} services tailored to your creative vision.
                  </p>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      data-cursor="view"
                      className="flex items-center justify-center w-14 h-14 rounded-full border border-white hover:border-gold transition-all duration-300 scale-100 hover:scale-105"
                      onClick={() => {}}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <div className="w-0 h-0 ml-1 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent hover:border-l-gold transition-colors duration-300"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-8 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-gold w-6' : 'bg-gold/40'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

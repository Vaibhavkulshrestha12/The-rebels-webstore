import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50",
    title: "FALL/WINTER '24",
    subtitle: "NEW ARRIVALS",
    link: "/cart"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    title: "SPRING COLLECTION",
    subtitle: "COMING SOON",
    link: "/cart"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    title: "LIMITED EDITION",
    subtitle: "SHOP NOW",
    link: "/cart"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rebel-dark/50 to-transparent">
            <div className="absolute bottom-16 left-16">
              <h2 className="text-xl font-nofex mb-2 text-rebel-light/80">
                {slide.subtitle}
              </h2>
              <h1 className="text-6xl font-nofex font-bold mb-6">
                {slide.title}
              </h1>
              <a
                href={slide.link}
                className="text-rebel-light text-lg font-nofex hover:text-orange-500 transition-colors border-b border-transparent hover:border-orange-500"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
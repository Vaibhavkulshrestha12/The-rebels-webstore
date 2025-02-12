import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';
import CollectionCard from './CollectionCard';

const collections = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50",
    title: "Anime Collection",
    description: "Inspired by your favorite anime series",
    category: "anime"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1547638375-ebf04735d792",
    title: "Gaming Series",
    description: "Wear your gaming passion",
    category: "gaming"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    title: "Souls Collection",
    description: "Dark and mysterious designs",
    category: "souls"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    title: "Band Merch",
    description: "Rock your style",
    category: "band"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    title: "Movie Collection",
    description: "Inspired by classic films",
    category: "movie"
  }
];

const Collections = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-nofex font-bold mb-8">Collections</h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-rebel-light" />
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                image={collection.image}
                title={collection.title}
                description={collection.description}
                category={collection.category}
              />
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black transition-colors"
          >
            <FiChevronRight className="w-6 h-6 text-rebel-light" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
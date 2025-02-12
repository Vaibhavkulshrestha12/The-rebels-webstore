import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';
import ProductCard from './ProductCard';

const popularProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    name: "Black Rebel Hoodie",
    price: 79.99
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    name: "Dark Denim Jacket",
    price: 129.99
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
    name: "Vintage Leather Jacket",
    price: 199.99
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
    name: "Graphic Print Tee",
    price: 34.99
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
    name: "Cargo Pants",
    price: 89.99
  }
];

const PopularProducts = () => {
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
        <h2 className="text-3xl font-nofex font-bold mb-8">Popular Now</h2>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-rebel-light" />
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {popularProducts.map((product) => (
              <div key={product.id} className="flex-none w-72">
                <ProductCard {...product} />
              </div>
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

export default PopularProducts;
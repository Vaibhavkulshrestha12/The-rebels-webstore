import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const popularProducts = [
  {
    id: 1,
    image: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    ],
    name: "Black Rebel Hoodie",
    price: 79.99,
    description:
      "A stylish oversized hoodie with a solid design, perfect for casual wear.",
    sizes: ["S", "M", "L", "XL"],
    keyHighlights: {
      design: "Solid",
      fit: "Oversized Fit",
      occasion: "Casual Wear",
      closure: "Drawstring",
      washCare: "Machine wash as per tag",
      packOf: 1,
    },
  },
  {
    id: 2,
    image: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    ],
    name: "Dark Denim Jacket",
    price: 129.99,
    description:
      "A rugged denim jacket with a classic look, ideal for layering.",
    sizes: ["S", "M", "L", "XL"],
    keyHighlights: {
      design: "Solid",
      fit: "Regular Fit",
      occasion: "Casual Wear",
      closure: "Button-Up",
      washCare: "Machine wash as per tag",
      packOf: 1,
    },
  },
  {
    id: 3,
    image: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
    ],
    name: "Vintage Leather Jacket",
    price: 199.99,
    description:
      "A premium leather jacket with a vintage touch for timeless style.",
    sizes: ["S", "M", "L", "XL"],
    keyHighlights: {
      design: "Solid",
      fit: "Slim Fit",
      occasion: "Casual Wear",
      closure: "Zipper",
      washCare: "Specialized leather cleaning only",
      packOf: 1,
    },
  },
  {
    id: 4,
    image: [
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
    ],
    name: "Graphic Print Tee",
    price: 34.99,
    description:
      "A trendy graphic print tee, perfect for everyday casual outfits.",
    sizes: ["S", "M", "L", "XL"],
    keyHighlights: {
      design: "Graphic Print",
      fit: "Regular Fit",
      occasion: "Casual Wear",
      closure: "Pull-On",
      washCare: "Machine wash as per tag",
      packOf: 1,
    },
  },
  {
    id: 5,
    image: [
      "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
      "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
    ],
    name: "Cargo Pants",
    price: 89.99,
    description:
      "Durable cargo pants with multiple pockets for a functional yet stylish look.",
    sizes: ["S", "M", "L", "XL"],
    keyHighlights: {
      design: "Solid",
      fit: "Relaxed Fit",
      occasion: "Casual Wear",
      closure: "Button & Zipper",
      washCare: "Machine wash as per tag",
      packOf: 1,
    },
  },
];


const PopularProducts = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleProductClick = (product: (typeof popularProducts)[0]) => {
    navigate(`/products/${product.name}`, { state: { product } });
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-nofex font-bold mb-8">Popular Now</h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black transition-colors"
          >
            <FiChevronLeft className="w-6 h-6 text-rebel-light" />
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {popularProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
              >
                <div className="flex-none w-72">
                  <ProductCard {...product} />
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
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

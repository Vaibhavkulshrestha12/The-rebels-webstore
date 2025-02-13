import { FiHeart } from "react-icons/fi";

const SimilarProducts = () => {
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-nofex font-bold">You May Also Like</h2>
        <button className="text-rebel-light hover:underline">View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative mb-4">
              {/* Image Container */}
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                <FiHeart className="w-5 h-5 text-rebel-light" />
              </button>
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <h3 className="font-nofex text-lg font-semibold group-hover:text-rebel-light transition-colors">
                {product.name}
              </h3>

              <div className="flex justify-between items-baseline">
                <span className="font-bold text-lg">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  {product.sizes.join(" · ")}
                </span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;

import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SimilarProducts from "../components/SimilarProducts";

interface ProductKeyHighlights {
  [key: string]: string;
}

interface Product {
  name: string;
  image: string[];
  description: string;
  keyHighlights: ProductKeyHighlights;
  sizes: string[];
  price: number;
}

interface LocationState {
  product: Product;
}



const ProductPage = () => {
  const { productName: _ } = useParams();
  const location = useLocation();
  const product = (location.state as LocationState)?.product;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Carousel */}
        <div className="md:sticky md:top-24">
          <Carousel
            showThumbs={true}
            infiniteLoop
            showStatus={false}
            className="w-full"
            thumbWidth={60}
          >
            {product.image.map((img: string, index: number) => (
              <div key={index} className="aspect-square">
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6 px-4">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-nofex font-bold">{product.name}</h1>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <FiHeart className="w-6 h-6 text-rebel-light" />
            </button>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Select Size</h2>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`py-3 border border-rebel-light rounded-md hover:bg-rebel-light hover:text-rebel-dark transition-colors ${
                    selectedSize === size
                      ? "bg-rebel-light text-rebel-dark"
                      : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full py-4 bg-orange-600 text-rebel-dark hover:text-white font-semibold rounded-md hover:opacity-90 transition-opacity">
            Add to Cart
          </button>

          <div className="prose max-w-none">
            <h2 className="font-semibold text-lg">Description</h2>
            <p className="text-gray-400">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Key Features</h2>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(product.keyHighlights).map(
                ([key, value]: [string, string]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium">{key}</span>
                    <span className="text-gray-400">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
};

export default ProductPage;

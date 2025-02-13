import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useState } from 'react';

interface ProductCardProps {
  image: string | string[];
  name: string;
  price: number;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const inrPrice = Math.round(price * 83);
  const imageUrl = Array.isArray(image) ? image[0] : image;

  return (
    <div className="group relative w-72 bg-rebel-dark rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-rebel-light/20">
      <div className="relative h-80">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black transition-colors"
        >
          {/* <FiHeart
            className={w-5 h-5 transition-colors ${isWishlisted ? 'text-orange-500 fill-orange-500' : 'text-rebel-light'}}
          /> */}
        </button>
      </div>
      <div className="p-4 text-rebel-light">
        <h3 className="text-lg font-nofex font-semibold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-impact">₹{inrPrice}</span>
          <button className="flex items-center space-x-2 bg-rebel-light text-rebel-dark px-4 py-2 rounded-full hover:bg-rebel-light/80 transition-colors font-nofex">
            <FiShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

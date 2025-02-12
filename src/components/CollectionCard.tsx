import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const CollectionCard = ({ image, title, description, category }: CollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/collections/${category}`}
      className="relative w-72 h-96 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rebel-dark via-rebel-dark/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-rebel-light">
        <h3 className="text-2xl font-nofex font-bold mb-2">{title}</h3>
        <p className="text-rebel-light/70 font-nofex transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CollectionCard;
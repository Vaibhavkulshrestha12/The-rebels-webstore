import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const collections = {
  anime: {
    title: "Anime Collection",
    description: "Inspired by your favorite anime series",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "Naruto Graphic Hoodie",
        price: 79.99
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "Dragon Ball Z Jacket",
        price: 89.99
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "One Piece Denim Jacket",
        price: 99.99
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
        name: "Attack on Titan Tee",
        price: 34.99
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
        name: "Demon Slayer Hoodie",
        price: 79.99
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "Jujutsu Kaisen Tee",
        price: 34.99
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "My Hero Academia Jacket",
        price: 89.99
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "Tokyo Revengers Hoodie",
        price: 79.99
      }
    ]
  },
  gaming: {
    title: "Gaming Series",
    description: "Wear your gaming passion",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "Dark Souls Hoodie",
        price: 79.99
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "Elden Ring Jacket",
        price: 89.99
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "God of War Leather Jacket",
        price: 129.99
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
        name: "Cyberpunk 2077 Tee",
        price: 34.99
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1547638375-ebf04735d792?w=500&h=500&fit=crop",
        name: "Final Fantasy VII Hoodie",
        price: 79.99
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "The Witcher 3 Tee",
        price: 34.99
      },
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "Red Dead Redemption 2 Jacket",
        price: 89.99
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "Skyrim Hoodie",
        price: 79.99
      }
    ]
  },
  souls: {
    title: "Souls Collection",
    description: "Dark and mysterious designs",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "Dark Souls III Hoodie",
        price: 79.99
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "Bloodborne Jacket",
        price: 89.99
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "Demon's Souls Hoodie",
        price: 79.99
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
        name: "Elden Ring Tee",
        price: 34.99
      }
    ]
  },
  band: {
    title: "Band Merch",
    description: "Rock your style",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "Metallica Hoodie",
        price: 79.99
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "Iron Maiden Jacket",
        price: 89.99
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "AC/DC Hoodie",
        price: 79.99
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
        name: "Pink Floyd Tee",
        price: 34.99
      }
    ]
  },
  movie: {
    title: "Movie Collection",
    description: "Inspired by classic films",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
        name: "Fight Club Hoodie",
        price: 79.99
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        name: "Matrix Jacket",
        price: 89.99
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
        name: "Pulp Fiction Hoodie",
        price: 79.99
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=500&fit=crop",
        name: "The Godfather Tee",
        price: 34.99
      }
    ]
  }
};

const CollectionPage = () => {
  const { category } = useParams();
  const collection = category ? collections[category as keyof typeof collections] : null;

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Collection not found</h1>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-nofex font-bold mb-4">{collection.title}</h1>
          <p className="text-rebel-light/70 text-lg">{collection.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collection.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
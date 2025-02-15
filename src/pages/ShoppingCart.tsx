import React, { useState } from "react";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

const ShoppingCart = () => {
  const popularProducts = [
    {
      id: 1,
      image: [
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      ],
      name: "Black Rebel Hoodie",
      price: 79.99,
      description:
        "A stylish oversized hoodie with a solid design, perfect for casual wear.",
      selectedSize: "M",
      quantity: 1,
    },
    {
      id: 2,
      image: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      ],
      name: "Dark Denim Jacket",
      price: 129.99,
      description:
        "A rugged denim jacket with a classic look, ideal for layering.",
      selectedSize: "L",
      quantity: 1,
    },
    {
      id: 3,
      image: [
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&h=500&fit=crop",
      ],
      name: "Vintage Leather Jacket",
      price: 199.99,
      description:
        "A premium leather jacket with a vintage touch for timeless style.",
      selectedSize: "XL",
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(popularProducts);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-x-hidden">
      <h1 className="text-3xl font-nofex font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 bg-white rounded-lg shadow-sm"
            >
              {/* Product Image */}
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-nofex font-semibold text-black">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-rebel-light transition-colors"
                  >
                    <FiTrash2 className="w-5 h-5 text-black" />
                  </button>
                </div>

                <p className="text-sm text-gray-600">
                  Size: {item.selectedSize}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-black gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className=" text-black font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <h2 className="text-xl font-nofex font-semibold">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-black">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg text-black">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-rebel-light text-rebel-dark font-semibold rounded-md hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>

            <p className="text-sm text-gray-500 text-center">
              Free shipping on orders over $200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

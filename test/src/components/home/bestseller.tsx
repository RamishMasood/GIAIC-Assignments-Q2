import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover1.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 2,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover2.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 3,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover3.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 4,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover4.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 5,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover5.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 6,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover6.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 7,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover7.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
    {
      id: 8,
      name: "Graphic Design",
      department: "English Department",
      price: 16.48,
      salePrice: 6.48,
      image: "/cover8.png",
      colors: ["bg-blue-500", "bg-green-700", "bg-orange-600", "bg-slate-700"]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-gray-600 mb-2 font-semibold">Featured Products</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-600 font-semibold">Problems trying to resolve the conflict between</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Product Image Container */}
            <div className="relative overflow-hidden aspect-[1/2] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="text-center">
              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
              <p className="text-gray-600 font-bold text-sm mb-2">{product.department}</p>
              
              {/* Price */}
              <div className="flex justify-center gap-2">
                <span className="text-gray-400 font-bold">${product.price}</span>
                <span className="text-green-700 font-bold">${product.salePrice}</span>
              </div>

              {/* Color Options */}
              <div className="flex justify-center gap-2 mt-3">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${color} cursor-pointer hover:ring-2 ring-offset-2 transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
// components/ProductCard.js
export default function ProductCard({ product }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    );
  }
  
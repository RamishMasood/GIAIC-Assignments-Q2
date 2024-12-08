// components/Navbar.js
export default function Navbar() {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Ecommerce</div>
          <ul className="flex space-x-6">
            <li className="text-gray-700 hover:text-black cursor-pointer">Home</li>
            <li className="text-gray-700 hover:text-black cursor-pointer">Shop</li>
            <li className="text-gray-700 hover:text-black cursor-pointer">About</li>
            <li className="text-gray-700 hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    );
  }
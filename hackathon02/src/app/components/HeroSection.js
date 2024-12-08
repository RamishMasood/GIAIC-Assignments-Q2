// components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">New Collection Out Now!</h1>
          <p className="text-gray-600 mb-6">Discover the latest trends and styles.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </section>
    );
  }
  
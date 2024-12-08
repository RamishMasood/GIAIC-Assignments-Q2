import React from 'react';
import Image from 'next/image';


const ProductHero = () => {
  return (
    <div className="bg-emerald-600 min-h-[300px]">
      <div className="container mx-auto px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Content Section */}
          <div className="w-full md:w-1/2 text-white space-y-6 z-10">
            <div className="uppercase tracking-wide text-sm">
              SUMMER 2020
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-y-2">
              <div>Vita Classic</div>
              <div>Product</div>
            </h1>
            
            <p className="text-white/80 max-w-md">
              We know how large objects will act. We know
              how are objects will act. We know
            </p>
            
            <div className="flex items-center gap-6">
              <div className="text-2xl font-bold">
                $16.48
              </div>
              <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-[510px] flex-col justify-start items-start inline-flex">
            <Image 
                          src="/man.png"
                          width={443}
                          height={685}
                          alt="Man in white sweater">
            </Image>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
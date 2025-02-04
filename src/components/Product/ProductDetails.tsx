// export default function ProductDetailsComp() {
//     return (
//       <div className="flex flex-col lg:flex-row gap-8 p-6">
//         {/* Left Side - Image Gallery */}
//         <div className="flex gap-4 md:w-[50%] flex-col md:flex-row">
//           <div className="flex md:flex-col flex-row gap-4 order-2 md:order-1">
//             <img src="/images/cat1.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream" />
//             <img src="/images/cat2.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream" />
//             <img src="/images/cat3.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream" />
//             <img src="/images/cat1.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream" />
//           </div>
//           <div className="bg-cream p-4 rounded-lg order-1 md:order-2">
//             <img src="/images/cat1.png" alt="Asgaard sofa" className="w-full h-96 rounded-lg" />
//           </div>
//         </div>
  
//         {/* Right Side - Product Info */}
//         <div className="flex flex-col gap-4 md:w-[50%]">
//           <h1 className="text-3xl font-bold">Asgaard sofa</h1>
//           <p className="text-gray-500 text-lg">Rs. 250,000.00</p>
//           <div className="flex items-center gap-2">
//             <span className="text-yellow-500">★★★★★</span>
//             <span className="text-gray-400">5 Customer Review</span>
//           </div>
//           <p className="text-gray-600">
//             Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
//             stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
//             highs for a sound.
//           </p>
          
//           {/* Size Selection */}
//           <div>
//             <h2 className="text-sm font-semibold">Size</h2>
//             <div className="flex gap-2 mt-1 ">
//               <button className="px-3 py-1 border rounded-lg bg-yellow-600 text-white">L</ button>
//               <button className="px-3 py-1 border rounded-lg">XL</button>
//               <button className="px-3 py-1 border rounded-lg">XS</button>
//             </div>
//           </div>
  
//           {/* Color Selection */}
//           <div>
//             <h2 className="text-sm font-semibold">Color</h2>
//             <div className="flex gap-2 mt-1">
//               <span className="w-6 h-6 rounded-full bg-purple-600 block"></span>
//               <span className="w-6 h-6 rounded-full bg-black block"></span>
//               <span className="w-6 h-6 rounded-full bg-yellow-600 block"></span>
//             </div>
//           </div>
  
//           {/* Quantity and Buttons */}
//           <div className="flex items-center gap-4 mt-4 flex-col md:flex-row">
//             <div className="flex items-center border rounded-lg">
//               <button className="px-3 py-2">-</button>
//               <span className="px-4">1</span>
//               <button className="px-3 py-2">+</button>
//             </div>
//             <button className="px-6 py-3 border rounded-lg">Add To Cart</button>
//             <button className="px-6 py-3 border rounded-lg">+ Compare</button>
//           </div>
  
//           {/* Product Meta Info */}
//           <div className="text-gray-500 text-sm mt-4">
//             <p><strong>SKU:</strong> SS001</p>
//             <p><strong>Category:</strong> Sofas</p>
//             <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
//             <p><strong>Share:</strong> <span className="text-black">●</span> <span className="text-black">●</span> <span className="text-black">●</span></p>
//           </div>
//         </div>   
//       </div>
//     );
//   }
  


export default function ProductDetailsComp() {
    return (
      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
        {/* Left Side - Image Gallery */}
        <div className="flex gap-4 lg:w-1/2 flex-col md:flex-row">
          <div className="flex md:flex-col flex-row gap-4 order-2 md:order-1">
            <img src="/images/cat1.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream object-cover" />
            <img src="/images/cat2.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream object-cover" />
            <img src="/images/cat3.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream object-cover" />
            <img src="/images/cat1.png" alt="Thumbnail" className="w-16 h-16 rounded-lg bg-cream object-cover" />
          </div>
          <div className="bg-cream p-4 rounded-lg order-1 md:order-2 w-full">
            <img src="/images/cat1.png" alt="Asgaard sofa" className="w-full h-96 rounded-lg object-cover" />
          </div>
        </div>
  
        {/* Right Side - Product Info */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-3xl font-bold">Asgaard sofa</h1>
          <p className="text-gray-500 text-lg">Rs. 250,000.00</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-400">5 Customer Review</span>
          </div>
          <p className="text-gray-600">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>
          
          {/* Size Selection */}
          <div>
            <h2 className="text-sm font-semibold">Size</h2>
            <div className="flex gap-2 mt-1 ">
              <button className="px-3 py-1 border rounded-lg bg-yellow-600 text-white">L</button>
              <button className="px-3 py-1 border rounded-lg">XL</button>
              <button className="px-3 py-1 border rounded-lg">XS</button>
            </div>
          </div>
  
          {/* Color Selection */}
          <div>
            <h2 className="text-sm font-semibold">Color</h2>
            <div className="flex gap-2 mt-1">
              <span className="w-6 h-6 rounded-full bg-purple-600 block"></span>
              <span className="w-6 h-6 rounded-full bg-black block"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-600 block"></span>
            </div>
          </div>
  
          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4 mt-4 flex-col md:flex-row">
            <div className="flex items-center border rounded-lg">
              <button className="px-3 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2">+</button>
            </div>
            <button className="px-6 py-3 border rounded-lg">Add To Cart</button>
            <button className="px-6 py-3 border rounded-lg">+ Compare</button>
          </div>
  
          {/* Product Meta Info */}
          <div className="text-gray-500 text-sm mt-4">
            <p><strong>SKU:</strong> SS001</p>
            <p><strong>Category:</strong> Sofas</p>
            <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
            <p><strong>Share:</strong> <span className="text-black">●</span> <span className="text-black">●</span> <span className="text-black">●</span></p>
          </div>
        </div>
      </div>
    );
  }
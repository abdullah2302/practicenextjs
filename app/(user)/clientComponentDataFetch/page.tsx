'use client';
import { useEffect, useState } from "react";

const FetchingData = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://dummyjson.com/products";
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        This is the fetching data page
      </h1>

      <h2 className="text-xl font-semibold mb-6">Products</h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300"
          >
            
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-cover rounded-lg mb-3"
            />

            
            <h3 className="text-lg font-bold mb-2 text-gray-800">
              {product.title}
            </h3>

            
            <p className="text-sm text-gray-600 mb-2">
              {product.description.substring(0, 60)}...
            </p>

            
            <p className="text-blue-600 font-semibold mb-2">
              ${product.price}
            </p>

            
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingData;
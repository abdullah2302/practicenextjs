'use client';
import { useState } from "react";

export default function FetchDataClientComponent() {

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    setUsers(Array.isArray(data.users) ? data.users : []);
  };

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProducts(Array.isArray(data.products) ? data.products : []);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchUsers}
        >
          Fetch Users
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchProducts}
        >
          Fetch Products
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        
        <div>
          <h2 className="text-xl font-bold mb-4">Users</h2>
          {users.map((user: any) => (
            <div key={user.id} className="border p-2 mb-2 rounded">
              <p>{user.firstName} {user.lastName}</p>
            </div>
          ))}
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Products</h2>
          {products.map((product: any) => (
            <div key={product.id} className="border p-2 mb-2 rounded">
              <p>{product.title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
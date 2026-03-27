async function fetchData() {
  const [userRes, productRes] = await Promise.all([
    fetch("https://dummyjson.com/users"),
    fetch("https://dummyjson.com/products"),
  ]);

  const userData = await userRes.json();
  const productData = await productRes.json();

  return {
    users: userData.users,
    products: productData.products,
  };
}

export default async function FetchDataPage() {
  const data = await fetchData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">This is the fetch data page</h1>

      <div className="grid grid-cols-2 gap-6">
        
        
        <div>
          <h2 className="text-xl font-bold mb-4">Users</h2>
          {data.users.map((user: any) => (
            <div key={user.id} className="border p-2 mb-2 rounded">
              <p>{user.firstName} {user.lastName}</p>
            </div>
          ))}
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Products</h2>
          {data.products.map((product: any) => (
            <div key={product.id} className="border p-2 mb-2 rounded">
              <p>{product.title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
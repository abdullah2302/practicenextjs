const fetchingData=async()=> {
    const URL='https://dummyjson.com/products';
    const res = await fetch(URL);
    const data = await res.json();
    //console.log(data);
   return (
   <>
   <h1>See in inspect</h1>
    <h1 className="text-2xl font-bold ">This is the fetching data page</h1>
    <p>{data.products[0].title}</p>
    <h1 className="text-xl font-bold mb-2s p-4">Products</h1>
    {data.products.map((product:any)=>(
        <div >
        <div key={product.id}> Product ID: {product.id}
            <h2>{product.title} Product Title</h2>
            <h2>{product.description} Product Description</h2>
        </div>
    </div>
    ))}
  </>
   );
};
export default fetchingData;
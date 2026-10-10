import Link from "next/link";

const DarazProducts = async () => {

  const res = await fetch("https://dummyjson.com/products?limit=10");
  const { products } = await res.json();

  return (
    <div className="space-y-20 p-10">
      {
        products?.map(data => (
          <div className="border-1 border-black p-10" key={data.id}>
            <p>Title: {data.title}</p>
            <p>Description: {data.description}</p>
            <p>Category: {data.category}</p>
            <Link href={`Daraz/${data.id}`} className="border border-black py-2 px-3">See Details</Link>
          </div>
        ))
      }
    </div>
  );
};

export default DarazProducts;
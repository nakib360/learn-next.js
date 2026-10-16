import Image from "next/image";
import Link from "next/link";

const ProductsPage = async () => {
    const productsApi = await fetch(`https://dummyjson.com/products`);
    const data = await productsApi.json();
    const Products = await data.products;

    return (
        <div>
            <p className="text-2xl font-bold">All Products</p>
            <div className="flex flex-col gap-3">
            {Products.map(product => (
                    <div
                        key={product.id}
                        className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                        <div className="relative w-full h-48 bg-gray-100">
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                            <p className="text-sm text-gray-600 line-clamp-3">
                                {product.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
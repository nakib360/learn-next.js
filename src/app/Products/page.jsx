const ProductsPage = () => {
    const products = [
        { id: 1, name: "product 1" },
        { id: 2, name: "product 2" },
        { id: 3, name: "product 3" },
        { id: 4, name: "product 4" },
        { id: 5, name: "product 5" },
    ]
    return (
        <div>
            <p className="text-2xl font-bold">All Products</p>
            <div className="flex flex-col gap-3">
                {
                    products.map(product => (
                        <div key={product.id}>
                            {product.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;
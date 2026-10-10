const productDetails = async ({ params }) => {
    const { Id } = await params;
    const res = await fetch(`https://dummyjson.com/products/${parseInt(Id)}`);
    const product = await res.json();

    return (
        <div className="p-10">
            <p>Product Details</p>
            <p>Product Id: {Id}</p>
            <p>Title: {product?.title}</p>
            <p>Description: {product?.description}</p>
            <p>Category: {product?.category}</p>
        </div>
    );
};

export default productDetails;
const ProductDetails = async ({ params }) => {
    const { ProductId } = await params;
    return (
        <div>
            About the product {ProductId}
        </div>
    );
};

export default ProductDetails;
const ProductReview = async ({ params }) => {
    const { ProductId, ReviewId } = await params;
    return (
        <div>
            Review {ReviewId} for the product {ProductId}
        </div>
    );
};

export default ProductReview;
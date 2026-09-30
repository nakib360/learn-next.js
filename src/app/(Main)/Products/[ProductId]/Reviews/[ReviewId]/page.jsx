import { notFound } from "next/navigation";

const ProductReview = async ({ params }) => {
    const { ProductId, ReviewId } = await params;
    if (parseInt(ReviewId) > 1000){
        notFound();
    }
        return (
            <div>
                Review {ReviewId} for the product {ProductId}
            </div>
        );
};

export default ProductReview;
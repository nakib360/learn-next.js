"use client"
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const ProductId = pathname.split("/")[2];
  const ReviewId = pathname.split("/")[4];
  console.log({ ProductId, ReviewId });
  return (
    <div>
      <p>The Review {ReviewId} is not found of the product {ProductId}.</p>
    </div>
  );
};

export default NotFound;
"use client" 

import { useParams } from "next/navigation";
import { getProductWithStoreId } from "@/services/productService";
import { formatCurrency } from "@/utils/currency";

export default function StorePage() {
    const params = useParams();
    const productId = params.id;
    const product = getProductWithStoreId(productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>Product</div>
    )
}
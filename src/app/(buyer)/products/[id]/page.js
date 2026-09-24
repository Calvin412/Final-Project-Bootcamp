"use client"

import { useParams } from "next/navigation";
import { getProductWithStoreId } from "@/services/productService";
import { formatCurrency } from "@/utils/currency";
import Link from "next/link";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function ProductPage() {
    const params = useParams();
    const productId = params.id;
    const product = getProductWithStoreId(productId);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [selectedType, setSelectedType] = useState(product.variants[0]?.name || "");
    const selectedVariant = product.variants.find((variant) => variant.name === selectedType);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="mt-30 mx-20 mb-10">
            <div className="flex gap-7">
                <div className="flex w-fit h-96 shrink-0">
                    {/* Image */}
                    <img src={product.image[currentImageIndex]} alt={product.name} className="w-96 h-96 object-contain border border-gray-300 bg-white rounded-md" />
                    <Carousel opts={{ align: "start" }} className="mx-7" orientation="vertical">
                        <CarouselContent className="flex gap-3 mt-5 cursor-pointer">
                            {product.image.map((image, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`h-20 w-20 overflow-hidden border rounded-md ${currentImageIndex === index ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={image} alt={product.name} className="block h-full w-full object-cover" />
                                </button>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                        <CarouselNext className="border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                    </Carousel>
                </div>
                {/* Product Details */}
                <div className="flex flex-col gap-4">
                    <div>
                        <Link href={`stores/${product.store.id}`} className="w-fit text-blue-500 text-base hover:underline">
                            {product.store.name}
                        </Link>
                        <h1 className="text-2xl font-bold mt-1">{product.name}</h1>
                    </div>
                    <div className="text-3xl font-bold">{formatCurrency(selectedVariant?.price ?? 0)}</div>
                    <div>
                        <p className="pb-2">Product Type: <strong>{selectedType}</strong></p>
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((variant) => (
                                <button
                                    key={variant.name}
                                    className={`border border-gray-300 px-3 py-1 rounded-md cursor-pointer ${selectedType === variant.name ? ' bg-blue-200 text-blue-600' : 'hover:border-blue-200 hover:text-blue-600'}`}
                                    onClick={() => setSelectedType(variant.name)}
                                >
                                    {variant.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-base text-gray-600 whitespace-pre-line">{product.description}</p>
                    <button type="button" className="w-32 px-3 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-800">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
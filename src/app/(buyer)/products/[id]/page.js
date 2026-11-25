"use client"

import { useParams } from "next/navigation";
import { getProductWithStoreId } from "@/services/productService";
import { formatCurrency } from "@/utils/currency";
import Link from "next/link";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
    const params = useParams();
    const productId = params.id;
    const product = getProductWithStoreId(productId);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [selectedType, setSelectedType] = useState(product.variants[0]?.name || "");
    const selectedVariant = product.variants.find((variant) => variant.name === selectedType);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="mt-30 mx-20 mb-10">
            <div className="flex gap-7">
                <div className="flex w-fit h-96 shrink-0">
                    {/* Image */}
                    <img src={product.image[currentImageIndex]} alt={product.name} className="w-96 h-96 object-contain border border-gray-300 bg-white rounded-md" />
                    <Carousel opts={{ align: "start", dragFree: true }} className="mx-7 h-96 w-22 shrink-0" orientation="vertical">
                        <CarouselPrevious className="z-10 top-0 border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                        <CarouselContent viewportClassName="mr-0 mt-10 h-[calc(100%-5rem)]" className="mt-0 h-full gap-3 py-1">
                            {product.image.map((image, index) => (
                                <CarouselItem key={index} className="basis-auto p-0 flex justify-center">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-20 w-20 shrink-0 overflow-hidden border rounded-md ${currentImageIndex === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <span className={`block h-full w-full rounded-md overflow-hidden ${currentImageIndex === index ? 'border border-blue-500' : 'border-transparent'}`}>
                                            <img src={image} alt={product.name} className="block h-full w-full object-cover" />
                                        </span>
                                    </button>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="z-10 bottom-0 border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                    </Carousel>
                </div>
                {/* Product Details */}
                <div className="flex flex-col gap-3">
                    <div>
                        {/* Store */}
                        <Link href={`stores/${product.store.id}`} className="w-fit text-blue-500 text-base hover:underline">
                            {product.store.name}
                        </Link>
                        {/* Name */}
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                    </div>
                    {/* Price */}
                    <div className="text-3xl font-bold">{formatCurrency(selectedVariant?.price ?? 0)}</div>
                    {/* Type */}
                    <div>
                        <p className="pb-1">Product Type: <strong>{selectedType}</strong></p>
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((variant) => (
                                <button
                                    key={variant.name}
                                    className={`border border-gray-300 px-3 py-1 rounded-full text-sm cursor-pointer ${selectedType === variant.name ? ' bg-blue-200 text-blue-600' : 'hover:border-blue-200 hover:text-blue-600'}`}
                                    onClick={() => setSelectedType(variant.name)}
                                >
                                    {variant.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Quantity */}
                    <div>
                        <div role="group" aria-label="Quantity" className="inline-flex h-11 w-fit items-center overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm my-2">
                            <button
                                type="button"
                                aria-label="Decrease quantity"
                                disabled={quantity === 1}
                                onClick={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
                                className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-white"
                            >
                                <svg className="block" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5 13v-2h14v2z" />
                                </svg>
                            </button>
                            <span aria-live="polite" className="flex h-10 min-w-16 items-center justify-center border-x border-gray-200 px-3 text-sm font-semibold tabular-nums text-gray-900">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => setQuantity((currentQuantity) => currentQuantity + 1)}
                                className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-blue-600"
                            >
                                <svg className="block" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button type="button" className="inline-flex min-h-11 min-w-48 items-center justify-center gap-2 rounded-md border border-blue-600 bg-white px-4 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            <svg aria-hidden="true" className="block shrink-0" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" />
                            </svg>
                            Add to Cart
                        </button>
                        <button type="button" className="inline-flex min-h-11 min-w-48 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            {/* Product information */}
            <div className="mt-12 grid gap-8 border-t border-gray-200 pt-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,1fr)]">
                <section aria-labelledby="product-description-heading" className="min-w-0">
                    <h2 id="product-description-heading" className="text-xl font-semibold text-gray-900">
                        Description
                    </h2>
                    <p className="mt-4 whitespace-pre-line text-base leading-7 text-gray-600">
                        {product.description}
                    </p>
                </section>
                <section aria-labelledby="product-specifications-heading" className="min-w-0">
                    <h2 id="product-specifications-heading" className="text-xl font-semibold text-gray-900">
                        Specifications
                    </h2>
                    <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                        <table className="w-full border-collapse text-sm">
                            <tbody>
                                {product.specifications.map((specification, index) => (
                                    <tr
                                        key={specification.name}
                                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                    >
                                        <th
                                            scope="row"
                                            className="w-2/5 border-b border-gray-200 px-4 py-3 text-left font-medium text-gray-700"
                                        >
                                            {specification.name}
                                        </th>
                                        <td className="border-b border-gray-200 px-4 py-3 text-gray-600">
                                            {specification.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            {/* Recommended Product */}
            <div className="text-2xl font-bold mt-8 mb-3">You may also like</div>
            <ProductCard excludeProductId={product.id} />
        </div>
    )
}
"use client"

import Link from "next/link"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { getProduct } from "@/services/productService"
import { useState, useEffect } from "react"
import { formatCurrency } from "@/utils/currency"
import { getLowestProductPrice } from "@/utils/product"

export default function RecommendProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = getProduct();
        setProducts(data);
    }, []);

    const [random, setRandom] = useState([]);

    useEffect(() => {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        setRandom(shuffled.slice(0, 10));
    }, [products]);

    return (
        <div>
            <h1 className="w-full text-2xl font-bold pb-3">Recommended Product</h1>
            <Carousel opts={{ align: "start", dragFree: true }} className="mx-10">
                <CarouselContent>
                    {random.map((product) => (
                        <Link href={`products/${product.id}`} key={product.id} className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <img src={product.image} alt={product.name} className="h-44 w-full items-center object-contain border-b border-gray-400 bg-white" />
                            <div className="flex flex-1 flex-col bg-white p-4">
                                <div className="w-fit rounded-full bg-blue-600 px-3 py-1 text-white text-sm">{product.category}</div>
                                <div className="py-3 font-bold text-lg">{product.name}</div>
                                <div className="mt-auto flex items-center justify-between border-t border-gray-400 py-2 font-bold">
                                    <div className="text-xl text-blue-600">{formatCurrency(getLowestProductPrice(product))}</div>
                                    <button type="button" className=" px-2 py-1 bg-blue-600 text-white rounded-sm cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="p-5 border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                <CarouselNext className="p-5 border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
            </Carousel>
        </div>
    )
}
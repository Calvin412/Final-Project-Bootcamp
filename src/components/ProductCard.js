"use client"

import { getFilterProduct } from "@/services/productService";
import { useSearchParams } from "next/navigation";
import { formatCurrency } from "@/utils/currency";
import { getLowestProductPrice } from "@/utils/product";
import Pagination from "./Pagination";
import Link from "next/link";

export default function ProductCard() {
    const searchParams = useSearchParams();

    const { products, totalPages, currentPage } = getFilterProduct({
        categories: searchParams.get("categories")?.split(",").filter(Boolean) || [],
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        sortBy: searchParams.get("sortBy") || "default",
        keyword: searchParams.get("q") || "",
        page: Number(searchParams.get("page")) || 1,
        perPage: 20,
    });

    return (
        <div>
            <div className="grid grid-cols-5 gap-7">
                {products.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id} className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-lg border border-gray-300 shadow-md">
                        <img src={product.image} alt={product.name} className="w-52 h-56 object-contain border-b border-gray-400 bg-white" />
                        <div className="flex flex-1 flex-col bg-white py-4 px-2">
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
            </div>
            {products.length === 0 && (
                <p className="text-center text-gray-500 py-10">Product not found.</p>
            )}
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}
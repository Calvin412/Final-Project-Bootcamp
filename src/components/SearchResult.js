"use client"

import { useSearchParams } from "next/navigation";
import { getFilterProduct } from "@/services/productService";
import { formatCurrency } from "@/utils/currency";
import { getLowestProductPrice } from "@/utils/product";
import Link from "next/link";
import Pagination from "@/components/Pagination";

export default function SearchResults() {
    const searchParams = useSearchParams();
    const keyword = searchParams.get("q") || "";

    const { products, totalItems, totalPages, currentPage } = getFilterProduct({
        categories: searchParams.get("categories")?.split(",").filter(Boolean) || [],
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        sortBy: searchParams.get("sortBy") || "default",
        keyword,
        page: Number(searchParams.get("page")) || 1,
        perPage: 20,
    });

    return (
        <div>
            <h1 className="text-2xl font-bold pb-1">
                Search results for &quot;{keyword}&quot;
            </h1>
            <p className="text-gray-500 pb-5">{totalItems} products found</p>

            <div className="grid grid-cols-5 gap-7">
                {products.map((product) => (
                    <Link href="/" key={product.id} className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-lg border border-gray-300 shadow-md">
                        <img src={product.image} alt={product.name} className="w-52 h-56 object-contain border-b border-gray-400 bg-white" />
                        <div className="flex flex-1 flex-col bg-white p-4">
                            <div className="w-fit rounded-full bg-blue-600 px-4 py-1 text-white text-sm">{product.category}</div>
                            <div className="py-3 font-bold text-lg">{product.name}</div>
                            <div className="mt-auto flex items-center justify-between border-t border-gray-400 py-2 font-bold">
                                <div className="text-xl text-blue-600">{formatCurrency(getLowestProductPrice(product))}</div>
                                <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-lg cursor-pointer">
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
                <p className="text-center text-gray-500 py-5">
                    No results found for <span className="font-bold">"{keyword}"</span>. Try checking your keywords or filters.
                </p>
            )}

            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
}
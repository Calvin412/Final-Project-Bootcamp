"use client"

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getCategories } from "@/utils/product";

const categories = getCategories();

export default function ProductFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [selectedCategories, setSelectedCategories] = useState(searchParams.get("categories")?.split(",").filter(Boolean) || []);
    const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
    const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "default");

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const handleApply = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (selectedCategories.length) {
            params.set("categories", selectedCategories.join(","));
        } else {
            params.delete("categories");
        }
        if (minPrice) params.set("minPrice", minPrice);
        else params.delete("minPrice");

        if (maxPrice) params.set("maxPrice", maxPrice);
        else params.delete("maxPrice");

        if (sortBy && sortBy !== "default") params.set("sortBy", sortBy);
        else params.delete("sortBy");

        params.delete("page"); 
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleReset = () => {
        setSelectedCategories([]);
        setMinPrice("");
        setMaxPrice("");
        setSortBy("default");
        
        const params = new URLSearchParams(searchParams.toString());
        params.delete("categories");
        params.delete("minPrice");
        params.delete("maxPrice");
        params.delete("sortBy");
        params.delete("page");

        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="h-fit max-w-72 p-5 bg-white rounded-lg shadow-md border border-gray-400 ">
            {/* Filter */}
            <div className="font-bold text-xl pb-3">Filters</div>
            {/* Price Range */}
            <div className="pt-3 border-t border-gray-400">
                <div className="font-semibold text-lg pb-2">Price Range</div>
                <div className="flex items-center justify-between">
                    <input type="number" placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-1/2 px-3 py-1 border border-gray-400 bg-gray-100 rounded-md" />
                    <span className="mx-2">-</span>
                    <input type="number" placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-1/2 px-3 py-1 border border-gray-400 bg-gray-100 rounded-md" />
                </div>
            </div>
            {/* Sort By */}
            <div className="pt-3 border-gray-400">
                <div className="font-semibold text-lg pb-2">Sort By</div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full p-2 border border-gray-400 bg-gray-100 rounded-md">
                    <option value="default">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>
            {/* Category */}
            <div className="font-bold text-xl pt-7 pb-3">Category</div>
            <div className="border-t border-gray-400">
                {categories.map((category) => (
                    <div key={category} className="flex items-center pt-3">
                        <input
                            id={category}
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="h-5 w-5 cursor-pointer border-gray-300 rounded text-blue-600 accent-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={category} className="font-medium text-gray-700 select-none pl-2 cursor-pointer">
                            {category}
                        </label>
                    </div>
                ))}
            </div>
            {/* Button */}
            <div className="flex items-center justify-between gap-3 pt-7">
                {/* Reset All */}
                <button type="button" onClick={handleReset} className="w-full px-4 py-2 rounded-lg cursor-pointer border border-gray-600 hover:bg-gray-200">
                    Reset All
                </button>
                {/* Apply Filter */}
                <button type="button" onClick={handleApply} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
                    Apply Filter
                </button>
            </div>
        </div>
    )
}
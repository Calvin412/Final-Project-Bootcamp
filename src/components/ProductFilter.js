"use client"

import { useState } from "react";

export default function ProductFilter() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    const categories = ["Laptop", "Controller", "PC", "Headphone", "Smartphone"];

    return (
        <div className="h-fit w-sm p-5 bg-white rounded-lg shadow-md border border-gray-400 ">
            {/* Filter */}
            <div className="font-bold text-2xl pb-3">Filters</div>
            {/* Price Range */}
            <div className="pt-3 border-t border-gray-400">
                <div className="font-semibold text-lg pb-2">Price Range</div>
                <div className="flex items-center justify-between">
                    <input type="number" placeholder="Min" className="w-1/2 p-2 border border-gray-400 bg-gray-100 rounded-md" />
                    <span className="mx-2">-</span>
                    <input type="number" placeholder="Max" className="w-1/2 p-2 border border-gray-400 bg-gray-100 rounded-md" />
                </div>
            </div>
            {/* Sort By */}
            <div className="pt-3 border-gray-400">
                <div className="font-semibold text-lg pb-2">Sort By</div>
                <select className="w-full p-2 border border-gray-400 bg-gray-100 rounded-md">
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>
            {/* Category */}
            <div className="font-bold text-2xl pt-10 pb-3">Category</div>
            <div className="flex flex-col border-t border-gray-400">
                {categories.map((category) => (
                    <div key={category} className="flex items-center pt-3">
                        <input
                            id={category}
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="h-5 w-5 border-gray-300 rounded text-blue-600 accent-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={category} className="text-lg font-medium text-gray-700 select-none cursor-pointer pl-2">
                            {category}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
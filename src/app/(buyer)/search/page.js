import { Suspense } from "react";
import ProductFilter from "@/components/ProductFilter";
import SearchResults from "@/components/SearchResult";

export default function SearchPage() {
    return (
        <div className="flex flex-col gap-5 mx-5 mt-30 mb-10">
            <div className="pt-5 flex gap-5">
                <ProductFilter />
                <div className="w-full">
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchResults />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
"use client"

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages, currentPage }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const getPageNumbers = () => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 4) {
            return [1, 2, 3, 4, 5, "ellipsis", totalPages];
        }

        if (currentPage >= totalPages - 3) {
            return [1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }

        return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
    };

    const pageNumbers = getPageNumbers();

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page);
        router.push(`?${params.toString()}`);
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 pt-6">
            <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-40 cursor-pointer"
            >
                Prev
            </button>

            {pageNumbers.map((page, index) => {
                if (page === "ellipsis") {
                    return (
                        <span key={`ellipsis-${index}`} className="px-2 text-gray-500 select-none">
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`px-3 py-1 border border-gray-300 rounded-md cursor-pointer ${page === currentPage ? "bg-blue-600 text-white" : ""
                            }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-40 cursor-pointer"
            >
                Next
            </button>
        </div>
    );
}
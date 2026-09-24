import { products } from "@/data";

export function getLowestProductPrice(product) {
    const prices = (product.variants || [])
        .map((variant) => Number(variant.price))
        .filter(Number.isFinite);

    return prices.length > 0 ? Math.min(...prices) : 0;
}

export function getCategories() {
    return [...new Set(products.map((product) => product.category))];
}
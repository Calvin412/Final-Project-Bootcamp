import { products } from "@/data";
import { stores } from "@/data";
import { getLowestProductPrice } from "@/utils/product";

export function getProduct() {
    return products;
}

export function getProductById(productId) {
    return products.find(
        (product) => product.id === productId
    );
}

export function getProductBySeller(sellerId) {
    return products.filter(
        (product) => product.sellerId === sellerId
    );
}

export function getProductByStore(storeId) {
    return products.filter(
        (product) => product.storeId === storeId
    );
}

export function getProductWithStoreId(id) {
    const product = products.find((product) => product.id === id);

    if (!product) {
        return null;
    }

    const store = stores.find((store) => store.id === product.storeId);

    return {
        ...product,
        store,
    }
}

export function getFilterProduct({
    categories = [],
    minPrice,
    maxPrice,
    sortBy,
    keyword = "",
    page = 1,
    perPage = 20,
} = {}) {
    let result = [...products];

    // Search by keyword
    if (keyword.trim()) {
        const lower = keyword.toLocaleLowerCase();
        result = result.filter((product) =>
            product.name.toLocaleLowerCase().includes(lower) ||
            product.category.toLocaleLowerCase().includes(lower)
        );
    }

    // Filter by categories
    if (categories.length > 0) {
        result = result.filter((product) => categories.includes(product.category));
    }

    // Filter by price range
    if (minPrice !== undefined && minPrice !== "") {
        result = result.filter((product) => getLowestProductPrice(product) >= Number(minPrice));
    }

    if (maxPrice !== undefined && maxPrice !== "") {
        result = result.filter((product) => getLowestProductPrice(product) <= Number(maxPrice));
    }

    // Sort products
    switch (sortBy) {
        case "price-asc":
            result.sort((a, b) => getLowestProductPrice(a) - getLowestProductPrice(b));
            break;
        case "price-desc":
            result.sort((a, b) => getLowestProductPrice(b) - getLowestProductPrice(a));
            break;
        case "name-asc":
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            result.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }

    // Pagination
    const totalItems = result.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    const currentPage = Math.min(Math.max(1, page), totalItems);
    const start = (currentPage - 1) * perPage;
    const paginatedResult = result.slice(start, start + perPage);

    return {
        products: paginatedResult,
        totalItems,
        totalPages,
        currentPage,
    };
}
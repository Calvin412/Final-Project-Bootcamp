import { carts } from "@/data";
import { products } from "@/data";

export function getCartByUser(userId) {
    return carts.find(
        (cart) => cart.userId === userId
    )
}

export function getCartItems(userId) {
    const cart = getCartByUser(userId);

    if (!cart){
        return [];
    }

    return cart.items.map((item) => {
        const product = products.find(
            (product) => product.id === item.productId
        );

        return {
            ...product,
            quantity: item.quantity,
            lineTotal: product.price * item.quantity,
        };
    });
}

export function getCartSubtotal(userId) {
    const items = getCartItems(userId);

    return items.reduce(
        (total, item) => total + item.lineTotal,
        0
    );
}
import { orders } from "@/data";

export function getOrdersByBuyer(buyerId) {
    return orders.filter(
        (order) => order.buyerId === buyerId
    );
}

export function getOrderById(orderId){
    return orders.find(
        (order) => order.orderId === orderId
    );
}

export function getOrdersBySeller(sellerId) {
    return orders.map((order) => {
        const sellerItems = order.items.filter(
            (item) => item.sellerId === sellerId
        );

        if (sellerItems.length === 0) {
            return null;
        }

        return {
            ...order, 
            items: sellerItems,
        };
    }).filter(Boolean);
}

export function updateOrderItemStatus(orderId, productId, newStatus) {
    const order = orders.find(
        (order) => order.id === orderId
    );

    if (!order) {
        return null;
    }

    const item = order.items.find(
        (item) => item.productId === productId
    );

    if (!item) {
        return null;
    }

    item.status = newStatus;

    return order;
}
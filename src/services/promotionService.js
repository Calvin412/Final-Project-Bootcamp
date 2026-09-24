import { promotions } from "@/data";

export function getPromotionByCode(code) {
    return promotions.find(
        (promotion) => promotion.code.toLowerCase() && promotion.active
    );
}

export function calculateDiscount(subtotal, promotion) {
    if (!promotion) {
        return 0;
    }

    if (promotion.type === "percentage"){
        return subtotal * (promotion.value / 100);
    }

    if (promotion.type === "fixed"){
        return Math.min(
            promotion.value, subtotal
        );
    }

    return 0;
}
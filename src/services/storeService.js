import { stores } from "@/data";

export function getStores() {
    return stores;
}

export function getStoreById(storeId) {
    return stores.find(
        (store) => store.id === storeId
    );
}

export function getStoreByOwner(ownerId){
    return stores.find(
        (store) => store.ownerId === ownerId
    );
}
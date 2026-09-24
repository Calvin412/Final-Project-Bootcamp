import { users } from "@/data";

export function getUsers(){
    return users;
}

export function getUserById(userId) {
    return users.find(
        (user) => user.id === userId
    );
}

export function getUserByEmail(email) {
    return users.find(
        (user) => user.email === email
    );
}

export function isSeller(userId){
    const user = getUserById(userId);

    return user?.sellerEnabled === true;
}
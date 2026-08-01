import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function getFirebaseConfig() {
    return {
        apiKey: "AIzaSyCdsMb7EVbC9fmP3w-EEN9FNpGNbryrU1M",
        authDomain: "final-project-59150.firebaseapp.com",
        projectId: "final-project-59150",
        storageBucket: "final-project-59150.firebasestorage.app",
        messagingSenderId: "934295237094",
        appId: "1:934295237094:web:f222a049e9ed120d28e627"
    };
}

export default function getConfig() {
    const firebaseConfig = getFirebaseConfig();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return { db, app };
}
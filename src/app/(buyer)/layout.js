import AppBar from "@/components/Appbar";

export default function BuyerLayout({ children }) {
    return (
        <>
            <AppBar />
            <main>
                {children}
            </main>
        </>
    );
}

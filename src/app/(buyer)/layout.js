import BuyerAppBar from "@/components/BuyerAppbar";

export default function BuyerLayout({ children }) {
    return (
        <>
            <BuyerAppBar />
            <main>
                {children}
            </main>
        </>
    );
}

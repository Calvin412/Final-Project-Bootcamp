import SearchBar from "./SearchBar";
import Link from "next/link";

export default function BuyerAppBar() {
    return (
        <nav className="fixed inset-x-0 top-0 left-0 z-50 h-24 bg-white border-b border-gray-200 shadow-md">
            <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <img src="logo.png" alt="Logo" className="h-auto max-w-52" />
                </Link>
                <div className="flex flex-1 justify-end items-center">
                    {/* Search Bar */}
                    <SearchBar />
                    {/* History Button */}
                    <Link href="/orders" className="p-3 ml-5 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V5H8v11h9v3q0 .425.288.713T18 20M9 9V7h6v2zm0 3v-2h6v2zm8-3q-.425 0-.712-.288T16 8t.288-.712T17 7t.713.288T18 8t-.288.713T17 9m0 3q-.425 0-.712-.288T16 11t.288-.712T17 10t.713.288T18 11t-.288.713T17 12M6 20h9v-2H5v1q0 .425.288.713T6 20m-1 0v-2z"/>
                        </svg>
                    </Link>
                    {/* Cart Button */}
                    <Link href="/cart" className="p-3 ml-2 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5.588 21.413Q5 20.825 5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22t-1.412-.587m10 0Q15 20.825 15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22t-1.412-.587M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"/>
                        </svg>
                    </Link>
                    {/* Login Button */}
                    <Link href="/login" className="px-5 py-1.5 ml-5 rounded-md border-2 font-bold text-blue-600 border-blue-600 hover:bg-blue-800 hover:text-white">
                        Login
                    </Link>
                    {/* Register Button */}
                    <Link href="/register" className="px-5 py-1.5 ml-2 rounded-md border-2 border-blue-600 bg-blue-600 text-white font-bold hover:bg-blue-800">
                        Register
                    </Link>
                    {/* Profile
                    <div className="p-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1m3.663-5.113Q8.5 10.976 8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13t-2.488-1.012M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>
                        </svg>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}
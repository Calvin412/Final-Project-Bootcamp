"use client"

import SearchBar from "./SearchBar";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function AppBar() {
    return (
        <nav className="fixed inset-x-0 top-0 left-0 z-50 h-24 bg-white border-b border-gray-200 shadow-md">
            <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <img src="/logo.png" alt="Logo" className="h-auto max-w-52" />
                </Link>
                <div className="flex w-full justify-end items-center pl-20">
                    {/* Search Bar */}
                    <SearchBar />
                    {/* History Button */}
                    <Link href="/orders" className="p-3 ml-5 rounded-full hover:bg-blue-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V5H8v11h9v3q0 .425.288.713T18 20M9 9V7h6v2zm0 3v-2h6v2zm8-3q-.425 0-.712-.288T16 8t.288-.712T17 7t.713.288T18 8t-.288.713T17 9m0 3q-.425 0-.712-.288T16 11t.288-.712T17 10t.713.288T18 11t-.288.713T17 12M6 20h9v-2H5v1q0 .425.288.713T6 20m-1 0v-2z" />
                        </svg>
                    </Link>
                    {/* Cart Button */}
                    <Link href="/cart" className="p-3 ml-2 mr-5 rounded-full hover:bg-blue-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5.588 21.413Q5 20.825 5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22t-1.412-.587m10 0Q15 20.825 15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22t-1.412-.587M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z" />
                        </svg>
                    </Link>
                    {/* Login Button */}
                    {/* <Link href="/login" className="px-5 py-1.5 rounded-md border-2 font-bold text-blue-600 border-blue-600 hover:bg-blue-800 hover:text-white">
                        Login
                    </Link> */}
                    {/* Register Button */}
                    {/* <Link href="/register" className="px-5 py-1.5 ml-2 rounded-md border-2 border-blue-600 bg-blue-600 text-white font-bold hover:bg-blue-800">
                        Register
                    </Link> */}
                    {/* Profile */}
                    <DropdownMenu>
                        <DropdownMenuTrigger render={
                            <Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                                    <AvatarFallback>TM</AvatarFallback>
                                </Avatar>
                            </Button>} />

                        <DropdownMenuContent align="end">
                            <DropdownMenuGroup>
                                <DropdownMenuItem render={<Link href="/" />}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M9.175 10.825Q8 9.65 8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12t-2.825-1.175M4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm7.413-8.587Q14 8.825 14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10t1.413-.587M12 18" />
                                    </svg>
                                    Account
                                </DropdownMenuItem>
                                <DropdownMenuItem render={<Link href="/seller" />}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M2 21v-2h20v2zm1-3v-7h3v7zm5 0V6h3v12zm5 0V9h3v9zm5 0V3h3v15z" />
                                    </svg>
                                    Dashboard
                                </DropdownMenuItem>
                                <DropdownMenuItem render={<Link href="/orders" />}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6 22q-1.25 0-2.125-.875T3 19v-3h3V2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v17q0 1.25-.875 2.125T18 22zm12-2q.425 0 .713-.288T19 19V5H8v11h9v3q0 .425.288.713T18 20M9 9V7h6v2zm0 3v-2h6v2zm8-3q-.425 0-.712-.288T16 8t.288-.712T17 7t.713.288T18 8t-.288.713T17 9m0 3q-.425 0-.712-.288T16 11t.288-.712T17 10t.713.288T18 11t-.288.713T17 12M6 20h9v-2H5v1q0 .425.288.713T6 20m-1 0v-2z" />
                                    </svg>
                                    Order History
                                </DropdownMenuItem>
                                <DropdownMenuItem render={<Link href="/cart" />}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M5.588 21.413Q5 20.825 5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22t-1.412-.587m10 0Q15 20.825 15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22t-1.412-.587M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z" />
                                    </svg>
                                    Cart
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem render={<Link href="/" />}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M8.502 11.5a1.002 1.002 0 1 1 0 2.004a1.002 1.002 0 0 1 0-2.005M12 4.353v6.65h7.442L17.72 9.28a.75.75 0 0 1-.073-.977l.073-.084a.75.75 0 0 1 .976-.072l.084.072l2.997 2.998a.75.75 0 0 1 .073.976l-.073.084l-2.996 3.003a.75.75 0 0 1-1.134-.975l.072-.084l1.713-1.717h-7.431L12 19.25a.75.75 0 0 1-.88.738l-8.5-1.501a.75.75 0 0 1-.62-.739V5.75a.75.75 0 0 1 .628-.74l8.5-1.396a.75.75 0 0 1 .872.74m-1.5.883l-7 1.15v10.732l7 1.236zM13 18.5h.765l.102-.007a.75.75 0 0 0 .648-.744l-.007-4.25H13zm.002-8.5L13 8.725V5h.745a.75.75 0 0 1 .743.647l.007.101l.007 4.252z"/>
                                </svg>
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}
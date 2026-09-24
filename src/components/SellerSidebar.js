import Link from "next/link"

export default function SellerSidebar() {
    const menuItems= [
        { name: "Dashboard", href: "/seller" },
        { name: "Product", href: "/seller" },
        { name: "Dashboard", href: "/seller" },
        { name: "Dashboard", href: "/seller" },
    ]
    return (
        <div>
            {/* Sidebar */}
            <div className="h-screen w-full max-w-64 border-r border-gray-300 bg-white">
                {/* Logo */}
                <Link href="/seller">
                    <img src="logo.png" alt="Logo" className="h-auto max-w-44 object-cover ml-5" />
                </Link>
                <div className="flex flex-row gap-5 pt-5">
                    <div className="flex items-center gap-3 w-full px-5 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 11h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1m-1 8h-4v-6h4zm-9-4H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 4H5v-2h4zM20 3h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 4h-4V5h4zm-9-4H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 8H5V5h4z"/>
                        </svg>
                        <p className="text-lg">Dashboard</p>
                    </div>
                </div>
            </div>
            {/* Appbar */}
            <div>

            </div>
        </div>
    )
}
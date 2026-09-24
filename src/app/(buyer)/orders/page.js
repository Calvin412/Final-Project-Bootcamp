"use client"

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useState } from "react"
import { formatCurrency } from "@/utils/currency";
import { formatDate } from "@/utils/formatDate";

export default function OrderPage() {
    const [selectedOrders, setSelectedOrders] = useState(null);
    const [open, setOpen] = useState(false);

    const orders = [
        {
            id: "ORD-2406202601",
            buyerId: "user-5",
            items: [
                {
                    productId: "product-1",
                    productName: "ASUS ROG Strix G16",
                    productImg: "https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200",
                    productType: "Black",
                    quantity: 1,
                    price: 24999000
                },
                {
                    productId: "product-2",
                    productName: "ASUS ROG Strix G16",
                    productImg: "https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200",
                    productType: "Black",
                    quantity: 1,
                    price: 24999000
                },
            ],
            subtotal: 24999000,
            discount: 2499900,
            shippingFee: 25000,
            tax: 2749890,
            totalPrice: 24774990,
            promoCode: "FIRSTTIME",
            status: "Delivered",
            date_ordered: "2025-07-15T12:00:00"
        },
        {
            id: "ORD-2705202602",
            buyerId: "user-5",
            items: [
                {
                    productId: "product-1",
                    productName: "Logitech Gamepad F310",
                    productImg: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png",
                    productType: "Black",
                    quantity: 1,
                    price: 24999000
                },
                {
                    productId: "product-2",
                    productName: "ASUS ROG Strix G16",
                    productImg: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png",
                    productType: "Black",
                    quantity: 1,
                    price: 24999000
                },
                {
                    productId: "product-1",
                    productName: "Logitech Gamepad F310",
                    productImg: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png",
                    productType: "Black",
                    quantity: 1,
                    price: 24999000
                },
                {
                    productId: "product-2",
                    productName: "ASUS ROG Strix G16",
                    productImg: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png",
                    productType: "Black",
                    quantity: 1,
                    price: 24999000
                },
            ],
            subtotal: 24999000,
            discount: 2499900,
            shippingFee: 25000,
            tax: 2749890,
            totalPrice: 24774990,
            promoCode: "FIRSTTIME",
            status: "Shipped",
            date_ordered: "2025-10-15T12:00:00"
        },
    ];

    const handleDrawer = (orders) => {
        setSelectedOrders(orders);
        setOpen(true);
    }

    return (
        <div>
            <div className="mt-30 mx-10 mb-10 bg-white border border-gray-200 rounded-lg p-6">
                <h1 className="text-2xl font-bold border-b-2 pb-3 border-gray-300">Order History</h1>
                {/* Product History */}
                <table className="w-full table-auto text-center">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="w-[17%] p-3 text-xl font-medium">Order ID</th>
                            <th className="w-[38%] p-3 text-xl font-medium">Items Ordered</th>
                            <th className="w-[20%] p-3 text-xl font-medium">Price</th>
                            <th className="w-[15%] p-3 text-xl font-medium">Date Ordered</th>
                            <th className="w-[10%] p-3 text-xl font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} onClick={() => handleDrawer(order)} className="border-t border-gray-300 hover:bg-gray-100 cursor-pointer">
                                {/* Order ID */}
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img src={order.items[0].productImg} alt={order.items[0].productName} className="h-16 w-16 object-contain p-2" />
                                        <p className="text-sm text-gray-500 font-medium">{order.id}</p>
                                    </div>
                                </td>
                                {/* Items */}
                                <td>
                                    <p className="text-base font-medium">
                                        {order.items.slice(0, 2).map((item) => item.productName).join(", ")}
                                        <span className="text-gray-500 text-sm">{order.items.length > 2 && `, and ${order.items.length - 2} more`}</span>
                                    </p>
                                </td>
                                {/* totalPrice */}
                                <td className="font-bold">{formatCurrency(order.totalPrice)}</td>
                                {/* Date Ordered */}
                                <td>{formatDate(order.date_ordered)}</td>
                                {/* Status */}
                                <td>
                                    <div className={`inline-flex px-4 py-1 rounded-full font-medium ${order.status === "Delivered" ? "bg-green-200 text-green-800" : order.status === "Shipped" ? "bg-yellow-200 text-yellow-800" : order.status === "Processing" ? "bg-purple-200 text-purple-800" : order.status === "Cancelled" ? "bg-red-200 text-red-800" : "bg-gray-200 text-gray-800"}`}>
                                        {order.status}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Drawer */}
            <Drawer open={open} onOpenChange={(value) => {
                setOpen(value);
                if (!value) {
                    setSelectedOrders(null);
                }
            }}>
                <DrawerContent className="cursor-default w-[65vh]">
                    <DrawerHeader>
                        <DrawerTitle className="text-2xl font-bold border-b border-gray-400 pb-2">Order Detail</DrawerTitle>
                        <DrawerClose className="fixed top-4.5 right-5 p-1.5 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                            </svg>
                        </DrawerClose>
                    </DrawerHeader>

                    {selectedOrders && (
                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-5">
                            {/* Order Status */}
                            <div className={`inline-flex px-4 py-1 rounded-full text-sm font-medium mt-5 ${selectedOrders.status === "Delivered" ? "bg-green-200 text-green-800" : selectedOrders.status === "Shipped" ? "bg-yellow-200 text-yellow-800" : selectedOrders.status === "Processing" ? "bg-purple-200 text-purple-800" : selectedOrders.status === "Cancelled" ? "bg-red-200 text-red-800" : "bg-gray-200 text-gray-800"}`}>
                                {selectedOrders.status}
                            </div>
                            {/* Order ID */}
                            <p className="pt-3 text-lg font-semibold">Order ID: #{selectedOrders.id}</p>
                            {/* Date Ordered */}
                            <p className="text-sm text-gray-500">Ordered on {formatDate(selectedOrders.date_ordered)}</p>
                            {/* Product Detail */}
                            <div className="mt-5 border-t border-gray-300 pt-5 text-xl font-bold">
                                Order Summary
                            </div>
                            <div className="flex flex-col gap-4 mt-5">
                                {selectedOrders.items.map((item, index) => (
                                    <div key={`${item.productId}-${index}`} className="flex items-center gap-4">
                                        <img src={item.productImg} alt={item.productName} className="h-20 w-20 object-contain p-2" />
                                        <div className="flex w-full flex-col">
                                            <div className="flex w-full items-center justify-between">
                                                <p className="text-lg font-medium">{item.quantity} {"\u00D7"} {item.productName}</p>
                                                <p className="text-lg font-bold">{formatCurrency(item.price)}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{item.productType}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Payment Details */}
                            <div className="mt-5 border-t border-gray-300 pt-5 text-xl font-bold">
                                Payment Details
                            </div>
                            <div className="flex flex-col w-full gap-2 mt-5">
                                {/* Subtotal */}
                                <div className="text-base flex justify-between">
                                    <p className="text-gray-500">Subtotal Product</p>
                                    <p className="font-semibold">{formatCurrency(selectedOrders.subtotal)}</p>
                                </div>
                                {/* Shipping Cost */}
                                <div className="text-base flex justify-between">
                                    <p className="text-gray-500">Shipping Cost</p>
                                    <p className="font-semibold">{formatCurrency(selectedOrders.shippingFee)}</p>
                                </div>
                                {/* Discount Total */}
                                <div className="text-base flex justify-between">
                                    <p className="text-gray-500">Coupon Discount</p>
                                    <p className="font-semibold text-green-500">- {formatCurrency(selectedOrders.discount)}</p>
                                </div>
                                {/* Tax */}
                                <div className="text-base flex justify-between">
                                    <p className="text-gray-500">Tax</p>
                                    <p className="font-semibold">{formatCurrency(selectedOrders.tax)}</p>
                                </div>
                                {/* Total */}
                                <div className="mt-2 text-lg flex justify-between border-t border-gray-200 pt-2">
                                    <p className="font-medium">Total</p>
                                    <p className="font-bold text-2xl">{formatCurrency(selectedOrders.totalPrice)}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <DrawerFooter>
                        <button type="button" className="text-lg py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-700">Reorder</button>
                        <button type="button" className="text-lg py-2 border border-gray-500 rounded-md cursor-pointer hover:bg-gray-300">Download Invoice</button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
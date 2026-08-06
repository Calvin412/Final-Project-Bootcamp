"use client"

import { useState } from "react";

import AppBar from "@/components/appbar"
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
    const [selectedProduct, setSelectedProduct] = useState([]);

    return (
        <div>
            <AppBar />
            <div className="mt-30 mx-10 mb-10 bg-white border border-gray-200 rounded-lg p-6">
                <h1 className="text-2xl font-bold border-b-2 pb-3 border-gray-300">Shopping Cart</h1>
                <div className="flex justify-between mt-3 gap-7 pb-10">
                    {/* Table */}
                    <table className="w-full table-auto text-center">    
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="w-[7%] p-3">
                                    <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                                </th>
                                <th className="w-[63%] p-3 text-xl font-medium">Product</th>
                                <th className="w-[15%] p-3 text-xl font-medium">Total</th>
                                <th className="w-[15%] p-3 text-xl font-medium">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-200">
                                <td className="p-3">
                                    <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-row items-center gap-7">
                                        <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Cart 1" className="h-24 w-auto object-contain" />
                                        <div className="text-lg font-medium">Legion 7i (16, Gen 7)</div>
                                    </div>
                                </td>
                                <td className="p-3 align-middle">$1.299,99</td>
                                <td className="p-3">
                                    <div className="inline-flex items-center justify-center gap-3">
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 11H5v2h14z" />
                                            </svg>
                                        </button>
                                        <span className="text-base">1</span>
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="p-3">
                                    <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-row items-center gap-7">
                                        <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Cart 1" className="h-24 w-auto object-contain" />
                                        <div className="text-lg font-medium">Legion 7i (16, Gen 7)</div>
                                    </div>
                                </td>
                                <td className="p-3 align-middle">$1.299,99</td>
                                <td className="p-3">
                                    <div className="inline-flex items-center justify-center gap-3">
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 11H5v2h14z" />
                                            </svg>
                                        </button>
                                        <span className="text-base">1</span>
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="p-3">
                                    <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-row items-center gap-7">
                                        <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Cart 1" className="h-24 w-auto object-contain" />
                                        <div className="text-lg font-medium">Legion 7i (16, Gen 7)</div>
                                    </div>
                                </td>
                                <td className="p-3 align-middle">$1.299,99</td>
                                <td className="p-3">
                                    <div className="inline-flex items-center justify-center gap-3">
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 11H5v2h14z" />
                                            </svg>
                                        </button>
                                        <span className="text-base">1</span>
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="p-3">
                                    <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-row items-center gap-7">
                                        <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Cart 1" className="h-24 w-auto object-contain" />
                                        <div className="text-lg font-medium">Legion 7i (16, Gen 7)</div>
                                    </div>
                                </td>
                                <td className="p-3 align-middle">$1.299,99</td>
                                <td className="p-3">
                                    <div className="inline-flex items-center justify-center gap-3">
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 11H5v2h14z" />
                                            </svg>
                                        </button>
                                        <span className="text-base">1</span>
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="p-3">
                                    <input type="checkbox" className="h-5 w-5 rounded border-gray-300" />
                                </td>
                                <td className="p-3">
                                    <div className="flex flex-row items-center gap-7">
                                        <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Cart 1" className="h-24 w-auto object-contain" />
                                        <div className="text-lg font-medium">Legion 7i (16, Gen 7)</div>
                                    </div>
                                </td>
                                <td className="p-3 align-middle">$1.299,99</td>
                                <td className="p-3">
                                    <div className="inline-flex items-center justify-center gap-3">
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 11H5v2h14z" />
                                            </svg>
                                        </button>
                                        <span className="text-base">1</span>
                                        <button type="button" className="rounded-full border border-gray-300 p-1 cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Total */}
                    <div className="w-full max-w-72 h-fit border border-gray-400 rounded-md px-5 py-3">
                        <div className="font-semibold text-lg border-b pb-1 border-gray-300">Order Summary</div>
                        <div className="-space-y-4 border-b pb-3 border-gray-300">
                            {/* Subtotal */}
                            <div className="mt-4 text-md flex justify-between">
                                <p>Subtotal (3 items)</p>
                                <p className="font-semibold">$3,000,00</p>
                            </div>
                            {/* Tax */}
                            <div className="mt-4 text-md flex justify-between">
                                <p>Estimated Tax</p>
                                <p className="font-semibold">$210.00</p>
                            </div>
                        </div>
                        {/* Total */}
                        <div className="mt-4 text-lg flex justify-between pb-7">
                            <p className="font-medium">Total</p>
                            <p className="font-bold text-2xl">$3,210.00</p>
                        </div>
                        {/* Checkout */}
                        <button type="button" className="flex items-center justify-center text-center gap-3 w-full font-semibold cursor-pointer px-7 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Recommended Product */}
                <div className="text-2xl font-bold mb-3">You may also like</div>
                <ProductCard />
            </div>
        </div>
    )
}
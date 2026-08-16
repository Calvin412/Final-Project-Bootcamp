import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export default function RecommendProduct() {
    return (
        <div>
            <h1 className="w-full text-2xl font-bold pb-3">Recommended Product</h1>
            <div>
                {/* Recommended Products */}
                <Carousel opts={{ align: "start", }} className="mx-10">
                    <CarouselContent>
                        <Link href="#" className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="h-32 w-32 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-white text-sm">Laptop</div>
                                <div className="py-3 font-bold text-lg border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png" alt="Product 2" className="h-32 w-32 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-white text-sm">Controller</div>
                                <div className="py-3 font-bold text-lg border-b border-gray-400">Logitech Gamepad F310</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-xl text-blue-600">$19.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="h-32 w-32 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-white text-sm">Laptop</div>
                                <div className="py-3 font-bold text-lg border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="h-32 w-32 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-white text-sm">Laptop</div>
                                <div className="py-3 font-bold text-lg border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png" alt="Product 2" className="h-32 w-32 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-white text-sm">Controller</div>
                                <div className="py-3 font-bold text-lg border-b border-gray-400">Logitech Gamepad F310</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-xl text-blue-600">$19.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-80 shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f310/f310-gallery-1.png" alt="Product 2" className="h-32 w-32 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-3 py-1 text-white text-sm">Controller</div>
                                <div className="py-3 font-bold text-lg border-b border-gray-400">Logitech Gamepad F310</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-xl text-blue-600">$19.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-md cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </CarouselContent>
                    <CarouselPrevious className="p-5 border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                    <CarouselNext className="p-5 border border-gray-600 cursor-pointer hover:bg-blue-800 hover:text-white" />
                </Carousel>
            </div>
        </div>
    )
}
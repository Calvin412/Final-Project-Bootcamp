import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export default function RecommendProduct() {
    return (
        <div>
            <h1 className="w-full text-3xl font-bold pb-3">Recommended Product</h1>
            <div className="">
                {/* Recommended Products */}
                <Carousel opts={{ align: "start", }} className="mx-10">
                    <CarouselContent>
                        <Link href="#" className="w-full max-w-sm shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="max-h-40 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-white">Laptop</div>
                                <div className="py-3 font-bold text-xl border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-2xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-xl cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-sm shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="max-h-40 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-white">Laptop</div>
                                <div className="py-3 font-bold text-xl border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-2xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-xl cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-sm shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="max-h-40 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-white">Laptop</div>
                                <div className="py-3 font-bold text-xl border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-2xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-xl cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-sm shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="max-h-40 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-white">Laptop</div>
                                <div className="py-3 font-bold text-xl border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-2xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-xl cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                        <Link href="#" className="w-full max-w-sm shrink-0 overflow-hidden rounded-lg border border-gray-300 shadow-md mr-7">
                            <div className="flex justify-center border-b border-gray-400 bg-gray-100 p-7">
                                <img src="https://p3-ofp.static.pub//fes/cms/2024/10/30/owe4noysc71ah4qutx5htliga1bugf930316.png?width=1200&height=1200" alt="Product 1" className="max-h-40 object-contain" />
                            </div>
                            <div className="bg-white p-4">
                                <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-white">Laptop</div>
                                <div className="py-3 font-bold text-xl border-b border-gray-400">Legion 7i (16, Gen 7)</div>
                                <div className="flex items-center justify-between py-2 font-bold">
                                    <div className="text-2xl text-blue-600">$1,299.99</div>
                                    <button type="button" className=" px-3 py-1 bg-blue-600 text-white rounded-xl cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
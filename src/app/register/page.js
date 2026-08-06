"use client"

import Link from "next/link";
import { useState } from "react"


export default function RegisterPage() {
    const [role, setRole] = useState('user');
    const roles = ['user', 'seller'];
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible((prev) => !prev);

    return (
        <div className="flex w-full h-screen">
            <img src="auth_bg.png" className="w-full max-w-3xl h-auto object-cover object-left" />
            <div className="flex w-full h-full text-center items-center justify-center">
                <div className="w-full max-w-lg flex flex-col gap-2">
                    <p className="font-bold text-3xl mb-5">Register</p>
                    {/* Name */}
                    <div className="mb-3">
                        <p className="text-start font-semibold text-lg mb-1">Full Name</p>
                        <div className="flex items-center gap-3 border border-gray-600 rounded-md px-4 py-2 text-base">
                            <div className="border-r-2 border-gray-400 pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9.175 10.825Q8 9.65 8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12t-2.825-1.175M4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20zm2-2h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15t-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm7.413-8.587Q14 8.825 14 8t-.587-1.412T12 6t-1.412.588T10 8t.588 1.413T12 10t1.413-.587M12 18" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Input your full name" className="w-full focus:outline-none" />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="mb-3">
                        <p className="text-start font-semibold text-lg mb-1">Email</p>
                        <div className="flex items-center gap-3 border border-gray-600 rounded-md px-4 py-2 text-base">
                            <div className="border-r-2 border-gray-400 pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" />
                                </svg>
                            </div>
                            <input type="text" placeholder="Input your full name" className="w-full focus:outline-none" />
                        </div>
                    </div>
                    {/* Password */}
                    <div>
                        <p className="text-start font-semibold text-lg mb-1">Password</p>
                        <div className="flex items-center gap-3 border border-gray-600 rounded-md px-4 py-2 text-base">
                            <div className="border-r-2 border-gray-400 pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm7.413-3.588Q14 15.826 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z" />
                                </svg>
                            </div>
                            <input id="password" type={isVisible ? "text" : "password"} placeholder="Input your password" className="w-full focus:outline-none" />
                            <button type="button" onClick={toggleVisibility} className="cursor-pointer text-gray-600 hover:text-gray-800">{isVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19s-7.764-4.013-9.257-5.962a1.69 1.69 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5s7.764 4.013 9.257 5.962" /><circle cx="12" cy="12" r="3" /></g>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l2.847-2.847c1.367.644 2.94 1.067 4.623 1.067c2.684 0 5.09-1.077 6.82-2.405c.867-.665 1.583-1.407 2.089-2.136c.492-.709.841-1.486.841-2.209s-.35-1.5-.841-2.209c-.506-.729-1.222-1.47-2.088-2.136q-.394-.303-.832-.583zM16.9 8.161l-1.771 1.771a3.75 3.75 0 0 1-5.197 5.197l-1.417 1.416A9.3 9.3 0 0 0 12 17.25c2.287 0 4.38-.923 5.907-2.095c.762-.585 1.364-1.218 1.77-1.801c.419-.604.573-1.077.573-1.354s-.154-.75-.573-1.354c-.406-.583-1.008-1.216-1.77-1.801q-.47-.361-1.008-.684m-5.87 5.87a2.25 2.25 0 0 0 3-3z" clipRule="evenodd" /><path fill="currentColor" d="M12 5.25c1.032 0 2.024.16 2.951.431a.243.243 0 0 1 .1.407l-.824.825a.25.25 0 0 1-.237.067A9 9 0 0 0 12 6.75c-2.287 0-4.38.923-5.907 2.095c-.762.585-1.364 1.218-1.77 1.801c-.419.604-.573 1.077-.573 1.354s.154.75.573 1.354c.354.51.858 1.057 1.488 1.577c.116.095.127.27.02.377l-.708.709a.246.246 0 0 1-.333.016a9.5 9.5 0 0 1-1.699-1.824C2.6 13.5 2.25 12.723 2.25 12s.35-1.5.841-2.209c.506-.729 1.222-1.47 2.088-2.136C6.91 6.327 9.316 5.25 12 5.25" /><path fill="currentColor" d="M12 8.25q.178 0 .351.016c.197.019.268.254.129.394l-1.213 1.212a2.26 2.26 0 0 0-1.395 1.395L8.66 12.48c-.14.14-.375.068-.394-.129A3.75 3.75 0 0 1 12 8.25" />
                                </svg>
                            )}
                            </button>
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <p className="text-start font-semibold text-lg mb-1">Confirm Password</p>
                        <div className="flex items-center gap-3 border border-gray-600 rounded-md px-4 py-2 text-base">
                            <div className="border-r-2 border-gray-400 pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm7.413-3.588Q14 15.826 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z" />
                                </svg>
                            </div>
                            <input id="password" type={isVisible ? "text" : "password"} placeholder="Confirm your password" className="w-full focus:outline-none" />
                            <button type="button" onClick={toggleVisibility} className="cursor-pointer text-gray-600 hover:text-gray-800">{isVisible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19s-7.764-4.013-9.257-5.962a1.69 1.69 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5s7.764 4.013 9.257 5.962" /><circle cx="12" cy="12" r="3" /></g>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l-16 16a.75.75 0 1 0 1.06 1.06l2.847-2.847c1.367.644 2.94 1.067 4.623 1.067c2.684 0 5.09-1.077 6.82-2.405c.867-.665 1.583-1.407 2.089-2.136c.492-.709.841-1.486.841-2.209s-.35-1.5-.841-2.209c-.506-.729-1.222-1.47-2.088-2.136q-.394-.303-.832-.583zM16.9 8.161l-1.771 1.771a3.75 3.75 0 0 1-5.197 5.197l-1.417 1.416A9.3 9.3 0 0 0 12 17.25c2.287 0 4.38-.923 5.907-2.095c.762-.585 1.364-1.218 1.77-1.801c.419-.604.573-1.077.573-1.354s-.154-.75-.573-1.354c-.406-.583-1.008-1.216-1.77-1.801q-.47-.361-1.008-.684m-5.87 5.87a2.25 2.25 0 0 0 3-3z" clipRule="evenodd" /><path fill="currentColor" d="M12 5.25c1.032 0 2.024.16 2.951.431a.243.243 0 0 1 .1.407l-.824.825a.25.25 0 0 1-.237.067A9 9 0 0 0 12 6.75c-2.287 0-4.38.923-5.907 2.095c-.762.585-1.364 1.218-1.77 1.801c-.419.604-.573 1.077-.573 1.354s.154.75.573 1.354c.354.51.858 1.057 1.488 1.577c.116.095.127.27.02.377l-.708.709a.246.246 0 0 1-.333.016a9.5 9.5 0 0 1-1.699-1.824C2.6 13.5 2.25 12.723 2.25 12s.35-1.5.841-2.209c.506-.729 1.222-1.47 2.088-2.136C6.91 6.327 9.316 5.25 12 5.25" /><path fill="currentColor" d="M12 8.25q.178 0 .351.016c.197.019.268.254.129.394l-1.213 1.212a2.26 2.26 0 0 0-1.395 1.395L8.66 12.48c-.14.14-.375.068-.394-.129A3.75 3.75 0 0 1 12 8.25" />
                                </svg>
                            )}
                            </button>
                        </div>
                    </div>
                    {/* Role */}
                    <div className="mb-3">
                        <p className="text-start font-semibold text-lg mb-1">Role</p>
                        <div className="flex items-center justify-between w-full gap-2 border border-gray-600 rounded-full px-2 py-1">
                            {roles.map((r) => (
                                <button
                                    key={r}
                                    type="button"
                                    onClick={() => setRole(r)}
                                    className={`w-full px-4 py-2 text-base font-medium rounded-full transition-colors ${role === r ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-200'}`}>
                                    {r.charAt(0).toUpperCase() + r.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Confirm Button */}
                    <button type="button" className="text-lg font-bold bg-blue-600 text-white mt-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
                        Register
                    </button>
                    {/* Login Page */}
                    <div className="flex justify-center gap-1 mt-1">
                        Already have an account?
                        <Link href="/login" className="text-blue-600 hover:text-blue-900 border-b-2 border-transparent hover:border-blue-700">Click here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
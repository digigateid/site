'use client'
import "@/app/globals.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-white shadow-sm shadow-light-500">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                        <button className="lg:hidden focus:outline-none" title="menu" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="icon mr-4 cursor-pointer" width="20" height="20"><path d={isOpen ? "M448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" : "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM0 416c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"} /></svg>
                    </button>
                    <Link href="/" className="md:w-[160px]">
                        <Image src="/Assets/icons/Logo-digigate.png" alt="Logo Digigate" width="120" height="40" />
                    </Link>
                </div>
                <div className={`items-center gap-6 text-sm text-gray-800 hidden lg:flex lg:px-4`}>
                    <ul className="flex">
                        <li className="mr-6"><Link href="/" className="hover:text-gray-400 hover:border-b-2 pb-2 hover:border-sky-400">Home</Link></li>
                        <li className="mr-6"><Link href="#about" className="hover:text-gray-400 hover:border-b-2 pb-2 hover:border-sky-400">About Us</Link></li>
                        <li className="mr-6"><Link href="#product" className="hover:text-gray-400 hover:border-b-2 pb-2 hover:border-sky-400">Product</Link></li>
                        <li className="mr-6"><Link href="#" className="hover:text-gray-400 hover:border-b-2 pb-2 hover:border-sky-400">Catalog</Link></li>
                        <li className="mr-6"><Link href="#footer" className="hover:text-gray-400 hover:border-b-2 pb-2 hover:border-sky-400">Contact</Link></li>
                    </ul>
                </div>
                {/* Sidebar */}
                {isOpen && (
                    <div className="fixed top-0 left-0 h-full w-3/4 bg-white z-50">
                        <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
                            <div>
                                <h2 className="text-lg font-semibold">Menu</h2>
                            </div>
                            <button className="focus:outline-none" onClick={() => setIsOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6 text-gray-700">
                                    <path fill="currentColor" d="M12.7 7.3a.75.75 0 0 1 1.06 1.06L11.06 11l2.72 2.72a.75.75 0 1 1-1.06 1.06L10 12.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L8.94 11 6.22 8.28a.75.75 0 1 1 1.06-1.06L10 9.94l2.72-2.72z"/>
                                </svg>
                            </button>
                        </div>
                        <ul className="pt-4 pl-6">
                            <li className="mb-6"><Link href="/" className="text-gray-900 hover:text-gray-400">Home</Link></li>
                            <li className="mb-6"><Link href="#about" className="text-gray-900 hover:text-gray-400">About Us</Link></li>
                            <li className="mb-6"><Link href="#product" className="text-gray-900 hover:text-gray-400">Product</Link></li>
                            <li className="mb-6"><Link href="#" className="text-gray-900 hover:text-gray-400">Catalog</Link></li>
                            <li className="mb-6"><Link href="#footer" className="text-gray-900 hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </div>
                )}

                <div className="flex gap-4 justify-end items-center md:w-[160px] flex-1 ml-auto">
                    {/* <form className="relative items-center flex-1 -space-x-px rounded-md shadow-sm hidden sm:inline-flex max-w-[320px] w-[60%]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon absolute z-10 opacity-50 pointer-events-none left-2" width="20" height="20"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                        <input type="text" placeholder="Search Products..." className="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-md shadow-inner outline-none bg-gray-50 shadow-gray-200"/>
                    </form>
                    <div className="relative cursor-pointer sm:hidden" title="search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon mr-1 md:mr-0" width="20" height="20"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </div>
                    <Link href="#" title="cart">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="mr-1 md:mr-0" width="20" height="20"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    </Link>
                    <Link href="#" className="hidden sm:block" title="user">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    </Link> */}
                    <Link href="#">
                        <button className="bg-sky-400 text-white flex text-center justify-center items-center gap-2 py-2 px-4 rounded-full border border-sky-400 hover:bg-white hover:text-sky-400 hover:fill-sky-400">
                            Catalog
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-current" width="15" height="15"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function obfuscateEmail(email) {
    return email.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
}

const Footer = () => {
    const email = 'info@digigate.id';
    const obfuscatedEmail = obfuscateEmail(email);
    const whatsApp = 'https://wa.me/6281511207866?text=Hallo,%20Saya%20tertarik%20dengan%20product%20anda';
    const instagram = 'https://www.instagram.com/digigate.id/';

    return (
        <footer id="footer" className="bg-white order-last border-t">
            <div className="container mx-auto flex flex-wrap justify-between gap-8 p-4 my-10 lg:my-24 lg:gap-20">
            {/* <div className="container mx-auto text-center items-center grid grid-cols-1 gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 my-10 lg:my-24"> */}
                <div className="w-auto md:w-1/3">
                    <Link href="/" className="md:w-[160px]">
                        <Image src="/Assets/icons/Logo-digigate.png" alt="Logo Digigate" width={120} height={40} />
                    </Link>
                    <p className="mt-4 ml-1 text-sm text-gray-700 xl:max-w-md">
                    Established in 2023, PT. Gerbang Digital Indonesia is a pioneering company committed to providing the latest networking solutions. 
                    Our flagship product, DigiGate, encompasses various types of networking devices, including open-source networking devices, as well as OLT and ONU devices. 
                    Choose DigiGate for unmatched quality, durability, and pricing in networking solutions. Join us as we pave the way towards a more connected and prosperous future. 
                    Strengthen your network with DigiGate.
                    </p>
                </div>
                <div className="flex flex-wrap justify-start gap-8 lg:gap-20">
                    <div className="w-auto">
                            <div className="mb-1 font-semibold font-sans text-black">Information</div>
                            <div className="text-sm text-gray-700">
                                <Link href="#about" className="py-1.5 block">About Us</Link>
                                <Link href="#product" className="py-1.5 block">Product</Link>
                                <Link href="#faq" className="py-1.5 block">FAQ</Link>
                                {/* <Link href="#" className="py-1.5 block">Catalog</Link> */}
                                {/* <Link href="#" className="py-1.5 block">My Account</Link> */}
                            </div>
                    </div>
                    <div className="w-auto">
                        <div className="mb-1 font-semibold font-sans text-black">Customer Services</div>
                        <div className="text-sm text-gray-700">
                            {/* <Link href="#" className="py-1.5 block">Contact Us</Link> */}
                            {/* <h2 className="py-1.5 block">+62 000 000 000</h2> */}
                            <h2 className="py-1.5 block">
                                <Link href={`mailto:${obfuscatedEmail}`}>{email}</Link>
                            </h2>
                        </div>
                    </div>
                    <div className="w-auto">
                            <div className="mb-1 font-semibold font-sans text-black">Address</div>
                            <div className="text-sm text-gray-700">
                                <Link href={`mailto:${obfuscatedEmail}`} className="py-1.5 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2" width="20" height="20"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                                    Email
                                </Link>
                                <Link href={`${instagram}`} target="_blank" className="py-1.5 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2" width="20" height="20"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                    Instagram
                                </Link>
                                <Link href="#" target="_blank" className="py-1.5 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2" width="20" height="20"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                                    Facebook
                                </Link>
                                <Link href={`${whatsApp}`} target="_blank" className="py-1.5 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mr-2" width="20" height="20"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                    WhatsApp
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="border-t text-center py-6">
                {/* <h2 className="text-black text-sm lg:text-xl font-bold font-sans"><span className="font-emoji text-sky-600">DigiGate</span> Indonesia</h2> */}
                <p className="container mx-auto text-[10px] md:text-sm text-gray-600">Copyright © 2024 DigiGate All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
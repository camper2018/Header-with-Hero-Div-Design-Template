'use client';
import "../app/globals.css";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiOutlineLogin } from "react-icons/ai";
const Header = () => {
    // handles opening and closing of kebab menu on right side of the screen
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
        setLeftMenuOpen(false);
    }
    // handles opening and closing of hamburger menu on left side of the screen
    const [leftMenuOpen, setLeftMenuOpen] = useState(false);
    const toggleLeftMenu = () => {
        setLeftMenuOpen((prevState) => !prevState);
        setMenuOpen(false);
    }
    // handles closing of both the menus when clicked anywhere outside the header
    const headerRef = useRef(null);
    const handleClickOutside = (event) => {
        if (!headerRef.current?.contains(event.target)) {
            setMenuOpen(false);
            setLeftMenuOpen(false);
        }
    };
    useEffect(() => {
        // using mousedown instead of click (combination of mousedown and mouseup) to have faster response and better user experience  
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <header ref={headerRef} className="py-2 mx-auto border-2 border-b-3 border-b-gray-400 bg-gradient-to-l from-indigo-300">
                <div className="flex justify-between items-center relative">
                    {/* Logo and left hamburger menu div */}
                    <div className="text-sm font-bold flex items-center justify-between">
                        {/* hamburger icon*/}
                        <div className="lg:hidden">
                            <button onClick={toggleLeftMenu} className="focus:outline-none">
                                <svg className={` ${leftMenuOpen ? "hidden" : 'mx-3 transition-all ease-in-out duration-200'}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50" fill="purple">
                                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                                </svg>
                            </button>
                        </div>
                        {/* logo */}
                        <div className={`${leftMenuOpen? "hidden": "block"}`}>
                            <Image
                                src="/bvt-logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                            />
                        </div>
                        {/* place title here if needed*/}
                    </div>
                    {/* hamburger menu contents div (left menu)*/}
                    {/* hidden on large screens. */}
                    <div className={`md:w-1/3 sm:w-1/2 w-2/3 pe-3 lg:hidden flex flex-col fixed left-0 top-0 h-screen  text-xl transition-all ease-in-out duration-200 bg-slate-100 text-indigo-500 font-medium ${leftMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <button onClick={toggleLeftMenu} className="focus:outline-none absolute right-5 top-11">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 50 50" fill="purple">

                                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                            </svg>
                        </button>
                        <div className="ps-2 flex mt-20">
                            <Image
                                src="/bvt-logo.png"
                                alt="Logo"
                                width={60}
                                height={60}
                            />
                            {/* search bar */}
                            <div className="flex items-center lg:flex lg:mr-10">
                                <input type="text" id="simple-search" className="bg-silver-500 text-gray-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-500 focus:text-black block w-2/3  p-2.5" placeholder="Search..." required />
                                <button type="submit" className="p-2 ms-2 text-md sm:text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-700 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                        <div className="px-6">
                            <hr className="border border-gray-300 mt-12" />
                            <a href="#" className="block p-3 hover:bg-gray-300 hover:text-blue-800 py-3">Profile</a>
                            <hr className="border border-gray-300" />
                            <a href="#" className="block p-3 hover:bg-gray-200 hover:text-blue-800 py-3">Settings</a>
                            <hr className="border border-gray-300" />
                            <a href="#" className="block p-3 hover:bg-gray-200 hover:text-blue-800 py-3">FAQs</a>
                            <hr className="border border-gray-300" />
                            <a href="#" className="block p-3 hover:bg-gray-200 hover:text-blue-800 py-3">Ask the Bot</a>
                            <hr className="border border-gray-300" />
                        </div>
                    </div>
                    {/* navbar containing links only visible in screen sizes medium (768px) or larger*/}
                    <nav className="hidden md:flex justify-center items-center">
                        <div className="space-x-6 text-xl text-gray-800">
                            <a href="#" className="visited:text-purple-500 hover:text-blue-700">Home</a>
                            <a href="/about" className="visited:text-purple-500 hover:text-blue-700">About</a>
                            <a href="/services" className="visited:text-purple-500 hover:text-blue-700">Services</a>
                            <a href="/contact" className="visited:text-purple-500 hover:text-blue-700">Contact</a>
                        </div>
                    </nav>
                    <div className="flex justify-evenly items-center">
                        {/* search bar in nav */}
                        <div className="hidden lg:flex lg:mr-10 flex mr-0 items-center">
                            <input type="text" id="simple-search" className="bg-gray-100 text-gray-800 text-sm rounded-lg focus:ring-gray-200 focus:border-gray-600 focus:text-black block w-full  p-2.5" placeholder="Search..." required />
                            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-indigo-500 rounded-lg border border-indigo-700 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        {/* Login button only visible in screen sizes medium or larger */}
                        <button className="p-2 hover:text-indigo-700 rounded-md hidden md:flex items-center space-x-6 text-xl">
                            <a href="/login" className="flex flex-row items-center">
                                <span>Login</span>
                                <AiOutlineLogin size={25} />
                            </a>
                        </button>
                    </div>
                    {/* Kebab menu button only visible in screen sizes smaller than 768px and contains navbar links */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <svg
                                height="80px"
                                width="80px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                className={menuOpen ? 'rotate-90 duration-300' : 'rotate-0 duration-300'}
                            >
                                <g>
                                    <circle
                                        cx="256"
                                        cy="159.9"
                                        r="25.1"
                                        fill="purple"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="10"
                                    />
                                    <circle
                                        cx="256"
                                        cy="245.3"
                                        r="25.1"
                                        fill="purple"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="10"
                                    />
                                    <circle
                                        cx="256"
                                        cy="330.6"
                                        r="25.1"
                                        fill="purple"
                                        stroke="#000000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="10"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Kebab menu contents div */}
                {/* hidden on medium and larger screens (>=768px). */}
                <div className={`md:hidden flex flex-col fixed right-0 mt-2.5 w-2/4 p-4 pt-12 h-screen text-xl transition-all ease-in-out duration-200 bg-slate-100 text-gray-600 font-medium ${menuOpen ? '-translate-x-0' : 'translate-x-full '}`}>
                    <hr className="border border-gray-300 mt-12" />
                    <a href="#" className="block p-3 text-indigo-500 hover:bg-gray-200 hover:text-blue-800 py-3">Home</a>
                    <hr className="border border-gray-300" />
                    <a href="#" className="block p-3 text-indigo-500 hover:bg-gray-200 hover:text-blue-800 py-3">About</a>
                    <hr className="border border-gray-300" />
                    <a href="#" className="block p-3 text-indigo-500 hover:bg-gray-200 hover:text-blue-800 py-3">Services</a>
                    <hr className="border border-gray-300" />
                    <a href="#" className="block p-3 text-indigo-500 hover:bg-gray-200 hover:text-blue-800 py-3">Contact</a>
                    <hr className="border border-gray-300" />
                    <a href="#" className="block p-3 text-indigo-500 hover:bg-gray-200 hover:text-blue-800 flex flex-row items-center py-3"><span>Login</span><AiOutlineLogin size={25} /></a>
                    <hr className="border border-gray-300" />
                </div>
            </header >
            {/* sidebar (only visible on larger screens) & hero div */}
            <main className="mt-2">
                <hr className="border-indigo-500 h-30 border-2 mt-6" />
                {/* <div className="flex flex-col md:flex-row"> */}
                <div className="flex">
                    {/* sidebar div that takes 1/4 width on larger screens and is hidden on smaller screens --> */}
                    <div className="mt-6 lg:w-1/4 hidden lg:block bg-gray-100 h-screen text-lg">
                        {/* Content for sidebar. Displayed as hamburger menu contents in small to medium screens */}
                        <hr className="border border-gray-300 mt-12" />
                        <a href="#" className="block p-3 text-indigo-500 font-bold hover:bg-gray-200 hover:text-blue-800 py-3">Profile</a>
                        <hr className="border border-gray-300" />
                        <a href="#" className="block p-3 text-indigo-500 font-bold hover:bg-gray-200 hover:text-blue-800 py-3">Settings</a>
                        <hr className="border border-gray-300" />
                        <a href="#" className="block p-3 text-indigo-500 font-bold hover:bg-gray-200 hover:text-blue-800 py-3">FAQs</a>
                        <hr className="border border-gray-300" />
                        <a href="#" className="block p-3 text-indigo-500 font-bold hover:bg-gray-200 hover:text-blue-800 py-3">Ask the Bot</a>
                        <hr />
                    </div>

                    {/* Hero div that takes 3/4 width on large screens and full width on medium to small screens --> */}
                    <div className="mx-auto py-6 w-full h-1/2-screen">
                    {/* <div className="p-6 w-full h-1/2-screen"> */}
                        
                        {/* Content of Hero div --> */}
                        <div className="flex flex-col md:flex-row w-full">
                            {/* text div that takes 1/2 width on medium to large screens and full width on smaller screens --> */}
                            <div className="px-4 md:ps-0 lg:ps-10 w-full md:w-1/2 order-last md:order-first" >
                                <div className="flex flex-col justify-between items-start py-12">
                                    <h1 className="text-2xl text-gray-700 font-bold">I'm A Responsive Hero Div</h1>
                                    <h5 className="py-4 text-lg font-semibold text-gray-500">A Fully Responsive Template For All Screen Sizes.</h5>
                                    <p className="py-7 text-gray-500">Aenean ornare velit lacus, ac varius enim ullamcorper eu.
                                        Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.
                                        Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam.
                                        Lorem ipsum dolor sit nullam.</p>
                                    <button className="my-5 bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-700 active:bg-indigo-900">Learn More</button>
                                </div>
                            </div>

                            {/* Image div takes half width on medium to larger screens and full width on smaller screens --> */}
                            <div class="flex md:justify-center w-full lg:w-1/2  order-first md:order-last">
                                <div className="h-2/4 md:h-full me-0 flex flex-col ps-5 pt-12 md:pe-0 pe-5 md:pe-0">
                                    <Image
                                        src="/fairy-tale.jpg"
                                        alt="Image of a fairy"
                                        objectFit="contain"
                                        width={500}
                                        height={560}
                                        className="rounded-xl"
                                        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 25vw, 20vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};
export default Header;

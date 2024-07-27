'use client';

import "../app/globals.css";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiOutlineLogin } from "react-icons/ai";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prevState)=> !prevState);
    }
    const headerRef = useRef(null);
    const handleClickOutside = (event) => {
        if ( headerRef.current && !headerRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // To close menu upon clicking anywhere outside the header component
        // using mousedown instead of click (combination of mousedown and mouseup) to have faster response and better user experience  
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header ref={headerRef} className="bg-blue-800 text-white p-3">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-sm font-bold">
                    <Image
                        src="/bvt-logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                    {/* place label here if needed*/}
                </div>
                {/* navbar containing links only visible in screen sizes medium (768px) or larger*/}
                <nav className="hidden md:flex space-x-6 text-xl">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
                {/* Login button only visible in screen sizes medium or larger */}
                <button className="p-2 rounded-md hover:bg-blue-100 hover:text-blue-900 hidden md:flex items-center space-x-6 text-xl">
                    <a href="#" className="flex flex-row items-center">
                        <span>Login</span>
                        <AiOutlineLogin size={25} />
                    </a>
                </button>
                {/* Menu button only visible in screen sizes smaller than 768px */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? (<svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="w-6 h-6 transition-all ease-in-out duration-200"
                        >
                            <path
                                fill="currentColor"
                                d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 000-.707L13.561.146a.499.499 0 00-.707 0L8 5 3.146.146a.5.5 0 00-.707 0L.146 2.439a.499.499 0 000 .707L5 8 .146 12.854a.5.5 0 000 .707l2.293 2.293a.499.499 0 00.707 0L8 11l4.854 4.854a.5.5 0 00.707 0l2.293-2.293a.499.499 0 000-.707z"
                            />
                        </svg>) :
                            (<svg 
                                className={`w-9 h-9 transition-all ease-in-out duration-200`} 
                                fill="none" stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>)}
                    </button>
                </div>
            </div>
            {/* menu contents div */}
            {/* hidden on medium (768px) and larger screens. */}
            <div className={`md:hidden flex flex-col fixed right-0 mt-3 w-2/4 p-4 pt-8 h-screen text-xl transition-all ease-in-out duration-200 bg-slate-100 text-blue-800 font-medium ${menuOpen ? '-translate-x-0' : 'translate-x-full '}`}>
                <a href="#" className="block px-2 py-1 hover:bg-blue-700 hover:text-white py-3">Home</a>
                <a href="#" className="block px-2 py-1 hover:bg-blue-700 hover:text-white py-3">About</a>
                <a href="#" className="block px-2 py-1 hover:bg-blue-700 hover:text-white py-3">Services</a>
                <a href="#" className="block px-2 py-1 hover:bg-blue-700 hover:text-white py-3">Contact</a>
                <a href="#" className="block px-2 py-1 hover:bg-blue-700 hover:text-white flex flex-row items-center py-3"><span>Login</span><AiOutlineLogin size={25} /></a>
            </div>
        </header>
    );
};
export default Header;
import React, { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="navbar bg-[#F5F7FA] p-4">
                <div className="flex flex-row items-center justify-between w-full">
                    <img className="logo" src="/assets/Logo.png" alt="Logo" />
                    <div className="hidden lg:flex justify-end space-x-32 items-center w-full">
                        <a href="#home">Home</a>
                        <a href="#service">Service</a>
                        <a href="#feature">Feature</a>
                        <a href="#product">Product</a>
                        <a href="#testmonial">Testimonial</a>
                        <a href="#faq">FAQ</a>

                        <div className='flex justify-end space-x-8 items-center'>
                            <a href="#login" className='text-[#66BB69]'>Login</a>
                            <button className="btn bg-[#66BB69] text-white">Sign up</button>
                        </div>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-[#66BB69]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-[#F5F7FA] w-full py-4">
                    <ul className="flex flex-col items-center space-y-4">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#feature">Feature</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#testmonial">Testimonial</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#login" className='text-[#66BB69]'>Login</a></li>
                        <li><button className="btn bg-[#66BB69] text-white">Sign up</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

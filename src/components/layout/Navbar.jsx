import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
            ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md'
            : 'bg-transparent'
    }`}
>

            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">X</span>
                        </div>
                        <span className={`text-xl font-bold transition-colors duration-300 text-white
                            }`}>
                            Codex
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`font-medium transition-colors duration-300 hover:text-purple-400 text-gray-300 '
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
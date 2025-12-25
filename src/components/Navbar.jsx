import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    const services = [
        { name: 'Astrology', path: '/astrology' },
        { name: 'Palmistry', path: '/palmistry' },
        { name: 'Numerology', path: '/numerology' },
        { name: 'Vastu', path: '/vastu' },
        { name: 'Tantra', path: '/tantra' },
        { name: 'Horoscope', path: '/horoscope' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services', dropdown: true },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <motion.img style={{ borderRadius: '50%' }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            src={logo}
                            alt="Astro Veda"
                            className="h-12 w-12"
                        />
                        <span className="text-2xl font-serif font-bold astro-text-gradient group-hover:scale-105 transition-transform">
                            ASTRO-VEDA
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <div
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                        className="flex items-center space-x-1 cursor-pointer py-2"
                                    >
                                        <Link to={link.path} className="text-secondary-text hover:text-astro-pink transition-colors font-medium">
                                            {link.name}
                                        </Link>
                                        <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />

                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute left-0 mt-2 w-56 glass-card rounded-xl overflow-hidden py-2 top-full"
                                                >
                                                    {services.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.path}
                                                            className="block px-4 py-2 text-sm text-secondary-text hover:bg-astro-pink/10 hover:text-astro-pink transition-colors"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link to={link.path} className="text-secondary-text hover:text-astro-pink transition-colors font-medium">
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-3">
                            <Link
                                to="/login"
                                className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-astro-pink text-astro-pink font-medium hover:bg-astro-pink hover:text-white transition-all hover:scale-105"
                            >
                                <LogIn size={18} />
                                Sign In
                            </Link>
                            <Link
                                to="/booking"
                                className="astro-gradient text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary-text p-2 rounded-md"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="block px-3 py-4 text-lg font-medium text-secondary-text hover:text-astro-pink"
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && (
                                        <div className="pl-6 space-y-2 pb-2">
                                            {services.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.path}
                                                    className="block py-2 text-sm text-secondary-text hover:text-astro-pink"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Auth Buttons */}
                            <div className="space-y-3 mt-4">
                                <Link
                                    to="/login"
                                    className="flex items-center justify-center gap-2 border-2 border-astro-pink text-astro-pink px-6 py-3 rounded-full font-medium"
                                >
                                    <LogIn size={20} />
                                    Sign In
                                </Link>
                                <Link
                                    to="/booking"
                                    className="block text-center astro-gradient text-white px-6 py-3 rounded-full font-medium"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

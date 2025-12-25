import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail, Sparkles, Send } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        quick: [
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' },
            { name: 'Privacy Policy', path: '/privacy' }
        ],
        services: [
            { name: 'Horoscope Reading', path: '/services' },
            { name: 'Vastu Guidance', path: '/services' },
            { name: 'Palmistry', path: '/services' },
            { name: 'Numerology', path: '/services' },
            { name: 'Astro Remedies', path: '/services' }
        ]
    };

    return (
        <footer className="relative bg-[#0F0F0F] text-white pt-24 pb-12 overflow-hidden">
            {/* Celestial Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-astro-gold/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-astro-pink/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-astro-gold/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                        >
                            <img
                                src={logo}
                                alt="Astro Veda Logo"
                                className="h-14 w-14 rounded-full border-2 border-astro-gold/20 p-0.5"
                            />
                            <div>
                                <h2 className="text-2xl font-serif font-bold tracking-wider astro-text-gradient">ASTRO VEDA</h2>
                                <p className="text-[10px] text-astro-gold uppercase tracking-[0.3em] font-bold">Creations</p>
                            </div>
                        </motion.div>

                        <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
                            Providing timeless Vedic wisdom to bring harmony, clarity, and prosperity to your modern life journey.
                        </p>

                        <div className="flex space-x-4">
                            {[
                                { icon: <Instagram size={20} />, label: 'Instagram', url: 'https://www.instagram.com/astrovedacreations/' },
                                { icon: <Facebook size={20} />, label: 'Facebook', url: 'https://www.facebook.com/people/AstroVeda-Creations/61573762419481/' },
                                { icon: <Youtube size={20} />, label: 'YouTube', url: 'https://youtube.com/@AstroVedaCreations?si=LhHahrJp8xaAuZZO' }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-astro-pink hover:text-white hover:border-astro-pink transition-all duration-300 shadow-lg backdrop-blur-sm"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-serif text-xl font-bold mb-8 flex items-center gap-2">
                                <Sparkles size={16} className="text-astro-gold" />
                                Explore
                            </h3>
                            <ul className="space-y-4">
                                {footerLinks.quick.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-astro-pink transition-all duration-300 hover:translate-x-2 inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-serif text-xl font-bold mb-8 flex items-center gap-2">
                                <Sparkles size={16} className="text-astro-gold" />
                                Services
                            </h3>
                            <ul className="space-y-4">
                                {footerLinks.services.map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            to={service.path}
                                            className="text-gray-400 hover:text-astro-pink transition-all duration-300 hover:translate-x-2 inline-block"
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-astro-orange/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-astro-orange/10 transition-colors duration-500" />

                        <h3 className="text-white font-serif text-xl font-bold mb-8">Reach Us</h3>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start space-x-4 group/item">
                                <div className="w-10 h-10 rounded-xl bg-astro-pink/10 flex items-center justify-center text-astro-pink group-hover/item:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-gray-400 text-sm leading-relaxed pt-1">Shop No:4,Road No:8B,Bandari Layout,Vasanth Nagar Colony,Nizampet, Hyderabad, Ts.</span>
                            </li>
                            <li className="flex items-center space-x-4 group/item">
                                <div className="w-10 h-10 rounded-xl bg-astro-orange/10 flex items-center justify-center text-astro-orange group-hover/item:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <span className="text-gray-400 text-sm">+91-8890615200</span>
                            </li>
                            <li className="flex items-center space-x-4 group/item">
                                <div className="w-10 h-10 rounded-xl bg-astro-gold/10 flex items-center justify-center text-astro-gold group-hover/item:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <span className="text-gray-400 text-sm">info@astroveda.com</span>
                            </li>
                        </ul>

                        <motion.a
                            href="https://wa.me/918890615200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-10 flex items-center justify-center space-x-3 bg-[#25D366] text-white rounded-2xl py-4 font-bold shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(37,211,102,0.6)] transition-all relative z-10"
                        >
                            <MessageCircle size={22} className="animate-pulse" />
                            <span>Connect on WhatsApp</span>
                        </motion.a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} <span className="text-astro-gold font-bold">Astro Veda Creations</span>. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Terms</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Privacy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

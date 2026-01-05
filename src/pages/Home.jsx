import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Moon, Sun, ArrowRight, Star, Heart, Shield, Plus, Minus, FileText, Download, Eye, Calendar, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import heroImg from "../assets/images/astrology-img1.jpg"
import kundliReportImg from '../assets/images/kundli-report.png';
import sampleKundliPdf from '../assets/pdf/Astroindia.pdf';
import icon1 from "../assets/images/icons/astrology.png"
import icon2 from "../assets/images/icons/chiromancy.png"
import icon3 from "../assets/images/icons/numerology.png"
import icon4 from "../assets/images/icons/compass.png"
import icon5 from "../assets/images/icons/sahasrara.png"
import icon6 from "../assets/images/icons/horoscope.png"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/img5.jpg"
import img6 from "../assets/images/img6.jpg"
import img7 from "../assets/images/img7.jpg"
import img8 from "../assets/images/img8.jpg"
import img9 from "../assets/images/img9.jpg"
import img10 from "../assets/images/img10.jpg"
import img11 from "../assets/images/img11.1.jpg"
import img12 from "../assets/images/img12.jpg"
import api from '../utils/api';

const Home = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [latestBlogs, setLatestBlogs] = useState([]);

    // Fetch Latest Blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await api.get('/blogs');
                const data = response.data;
                setLatestBlogs(Array.isArray(data) ? data.slice(0, 3) : []);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    const faqs = [
        {
            question: "What is Vedic astrology, and how is it different from Western astrology?",
            answer: "Vedic astrology, also known as Jyotish Shastra, is an ancient Indian system based on the sidereal zodiac, while Western astrology uses the tropical zodiac. Vedic astrology places greater emphasis on the Ascendant (Rising) & Moon sign, Rashis (Zodiac signs) and Nakshatras (lunar constellations) rather than just the Sun sign. The calculations have more precision in the sidereal zodiac that looks at the exact position of the planets in the sky at the given time."
        },
        {
            question: "How is a Vedic birth chart (kundli) prepared?",
            answer: "A Kundli is prepared based on the exact date, time, and place of birth. It maps the positions of planets in the 12 houses at the moment of your birth. This celestial snapshot acts as a roadmap for your life's journey, revealing your strengths, challenges, and destiny."
        },
        {
            question: "What is the significance of the 12 houses in Vedic astrology?",
            answer: "Each of the 12 houses in a birth chart represents different areas of life, such as career, relationships, health, and wealth. For instance, the 1st house represents self and personality, the 7th house governs partnerships, and the 10th house relates to profession and public life. The placement of planets in these houses determines the experiences and outcomes in those specific areas."
        },
        {
            question: "Can astrology help in career and relationship decisions?",
            answer: "Yes, astrology provides valuable insights into your natural inclinations, strengths, and timing of opportunities. By analyzing planetary transits and dashas, an astrologer can guide you on the best times for career changes or help you understand compatibility in relationships for long-term harmony."
        }
    ];

    const floatingIcons = [
        { Icon: Moon, top: '20%', left: '10%', color: '#FF7BB5', delay: 0 },
        { Icon: Sun, top: '15%', right: '15%', color: '#FFB86B', delay: 1 },
        { Icon: Star, bottom: '25%', left: '20%', color: '#FFE07A', delay: 0.5 },
        { Icon: Sparkles, bottom: '20%', right: '10%', color: '#FF7BB5', delay: 1.5 },
    ];

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-10 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-astro-pink/10 blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-astro-yellow/10 blur-[120px]" />
                </div>

                {/* Floating Icons */}
                {floatingIcons.map(({ Icon, top, left, right, bottom, color, delay }, index) => (
                    <motion.div
                        key={index}
                        className="absolute hidden lg:block"
                        style={{ top, left, right, bottom }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon size={60} color={color} className="opacity-40" />
                    </motion.div>
                ))}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.img style={{ borderRadius: '50%' }}
                        src={logo}
                        alt="Astro Veda Logo"
                        className="h-60 w-auto mx-auto mb-8 transition-transform border-lg hover:scale-110 duration-500"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.h1
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 text-primary-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Guiding Your Life with <br />
                        <span className="astro-text-gradient">Celestial Wisdom</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-secondary-text mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Astro Veda Creations brings you expert astrological guidance, Vastu solutions, and spiritual remedies to help you navigate life's journey with clarity.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <Link to="/booking" className="astro-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
                            Book a Consultation <ArrowRight size={20} />
                        </Link>
                        <Link to="/services" className="px-8 py-4 rounded-full font-bold text-lg border-2 border-astro-pink text-astro-pink hover:bg-astro-pink hover:text-white transition-all flex items-center gap-2">
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Services (Redesigned based on achosenson.com) */}
            <Section className="section-glow">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold  mb-4">Our Services</h2>
                    {/* <p className="text-xl text-secondary-text">Unlock your true potential with us.</p> */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-full max-w-[100px] bg-[#FF7BB5]"></div>
                        <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                        <div className="h-[1px] w-full max-w-[100px] bg-[#FF7BB5]"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Astrology",
                            desc: "Deep insights into your personality and future based on your birth chart. Get absolute clarity about your life.",
                            icon: icon1,
                            action: "Book Now!"
                        },
                        {
                            title: "Palmistry",
                            desc: "Align your home and workspace with cosmic energies for prosperity, health, and mental peace.",
                            icon: icon2,
                            action: "Book Now!"
                        },
                        {
                            title: "Numerology",
                            desc: "Effective solutions and rituals to mitigate planetary afflictions and bring positive changes to your life.",
                            icon: icon3,
                            action: "Book Now!"
                        },
                        {
                            title: "Vastu",
                            desc: "Effective solutions and rituals to mitigate planetary afflictions and bring positive changes to your life.",
                            icon: icon4,
                            action: "Book Now!"
                        },
                        {
                            title: "Tantra",
                            desc: "Effective solutions and rituals to mitigate planetary afflictions and bring positive changes to your life.",
                            icon: icon5,
                            action: "Book Now!"
                        },
                        {
                            title: "Horoscope",
                            desc: "Effective solutions and rituals to mitigate planetary afflictions and bring positive changes to your life.",
                            icon: icon6,
                            action: "Book Now!"
                        }
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="ornate-frame mb-8 group-hover:scale-105 transition-transform duration-300">
                                <div className="w-25 h-25 bg-astro-gold/5 rounded-full flex items-center justify-center">
                                    {typeof service.icon === 'string' ? (
                                        <img src={service.icon} alt={service.title} className="w-40 h-40 object-contain" />
                                    ) : (
                                        service.icon
                                    )}
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 text-astro-pink">{service.title}</h3>
                            <p className="text-lg text-secondary-text mb-8 leading-relaxed">{service.desc}</p>
                            <Link
                                to="/booking"
                                className="astro-gradient text-white px-10 py-3 rounded-full font-bold hover:bg-black transition-colors shadow-lg"
                            >
                                {service.action}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* About Us Preview */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-full max-w-[70px] bg-[#FF7BB5]"></div>
                        <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                        <div className="h-[1px] w-full max-w-[70px] bg-[#FF7BB5]"></div>
                    </div>
                    <p className="text-xl text-secondary-text">At Astro Veda Creations, we bridge the gap between ancient wisdom and modern living.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Astrology Chart"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 astro-gradient rounded-3xl -z-10 opacity-20" />
                        <div className="absolute -top-8 -left-8 w-48 h-48 astro-gradient rounded-full -z-10 opacity-10 blur-2xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">Celestial Guidance for a Harmonious Life</h2>
                        <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                            At Astro Veda Creations, we believe that the stars don't just tell where we are, but where we can go. Our expert astrologers combine ancient Vedic wisdom with modern intuition to provide you with actionable guidance.
                        </p>
                        <div className="space-y-4 mb-10">
                            {[
                                { icon: <Star size={20} />, text: "15+ Years of Vedic Experience" },
                                { icon: <Heart size={20} />, text: "personalized & Empathetic Approach" },
                                { icon: <Shield size={20} />, text: "Confidentiality & Accuracy Guaranteed" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-secondary-text font-medium">
                                    <div className="text-astro-orange">{item.icon}</div>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="text-lg font-bold text-primary-text border-b-2 border-astro-pink pb-1 hover:border-astro-orange transition-all">
                            Discover Our Story
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Free Astrology Readings Section */}
            {/* Free Astrology Readings Section */}
            <Section className="bg-white">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                        Free Astrology Readings
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-full max-w-[200px] bg-[#FF7BB5]"></div>
                    <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                    <div className="h-[1px] w-full max-w-[200px] bg-[#FF7BB5]"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-14">
                    {[
                        { name: "Match Making", src: img2 },
                        { name: "Kundli", src: img1 },
                        { name: "Planet Transits", src: img3 },
                        { name: "Remedies", src: img4 },
                        { name: "Love", src: img5 },
                        { name: "Panchang", src: img6 },

                        { name: "Tarot Reading", src: img7 },
                        { name: "Numerology", src: img8 },
                        { name: "Vastu", src: img9 },
                        { name: "Zodiac Signs", src: img10 },
                        { name: "Festivals", src: img11 },
                        { name: "Spirituality", src: img12 },
                    ].map((service, index) => (
                        <div key={index} className="text-center">

                            {/* Image */}
                            <div className="rounded-3xl overflow-hidden shadow-md">
                                <img
                                    src={service.src}
                                    alt={service.name}
                                    className="w-full aspect-square object-cover"
                                />
                            </div>

                            {/* Text Below Image */}
                            <h3 className="mt-5 text-lg font-semibold text-black">
                                {service.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </Section>



            <Section>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">Why ASTRO-VEDA</h2>
                    <p className="text-xl md:text-2xl  font-serif mb-8 italic">Because we provide the most authentic Vedic guidance</p>

                    {/* Ornamental Divider */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-full max-w-[200px] bg-[#FF7BB5]"></div>
                        <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                        <div className="h-[1px] w-full max-w-[200px] bg-[#FF7BB5]"></div>
                    </div>

                    <div className="uppercase tracking-[0.2em]  font-bold text-sm md:text-base mb-10 leading-relaxed max-w-3xl mx-auto">
                        GET PERSONALIZED ASTROLOGICAL GUIDANCE. NAVIGATE LIFE'S JOURNEY WITH COSMIC WISDOM TAILORED TO YOU BY ASTRO-VEDA.
                    </div>

                    <div>
                        <p className='text-lg text-secondary-text mb-8 leading-relaxed'>
                            ASTRO-VEDA firmly believes that, akin to physical health, every individual possesses spiritual well-being to nurture. Spiritual vitality plays a crucial role in shaping one's karma, overall well-being, and connection with the universe. According to us, Astrology is not just fortune-telling; it is the means of course correction, aligning planetary energies to foster personal growth and upliftment.
                        </p>

                    </div>
                    <Link
                        to="/about"
                        className="inline-block text-center mt-3 astro-gradient text-white px-4 py-1.5 text-sm rounded-full font-medium"
                    >
                        Read More
                    </Link>


                </div>

            </Section>

            {/* Detailed Janam Kundli Report Section */}
            <Section className="bg-astro-pink/5 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-astro-pink font-bold tracking-widest uppercase text-sm mb-4 block">Premium Offering</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-text mb-2">Detailed Janam Kundli Report</h2>
                        <h3 className="text-2xl font-serif text-astro-orange mb-6 italic">Kundli / Horoscope by Astrologer Saahil Kohli</h3>

                        <div className="space-y-6 text-lg text-secondary-text leading-relaxed mb-10">
                            <p>
                                Understanding your birth chart is your complete guide to uncovering what the stars reveal about your path. This in-depth Janam Kundli report includes a comprehensive analysis of your Dasha, Bhukti, and the strength and influence of each planet.
                            </p>
                            <p>
                                It provides clear, actionable insights into your career, relationships, health, finances, and spiritual growth. With accurate astrological guidance, you can navigate your life path better, plan your future wisely, and stay aligned with universal energies.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={sampleKundliPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="astro-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center justify-center gap-2"
                            >
                                <Eye size={20} /> View Sample Report
                            </a>


                            <Link
                                to="/contact"
                                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-astro-pink text-astro-pink hover:bg-astro-pink hover:text-white transition-all flex items-center justify-center gap-2"
                            >
                                Get Your Kundli
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Premium Visual with Generated Image */}
                        <div className="relative group">
                            <motion.div
                                className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-pink-100 overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={kundliReportImg}
                                    alt="Detailed Janam Kundli Preview"
                                    className="w-full h-auto rounded-[2rem] shadow-inner"
                                />

                                {/* Overlay Mockup elements for "Report" feel */}
                                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-50 flex items-center gap-2">
                                    <FileText size={18} className="text-astro-pink" />
                                    <span className="text-xs font-bold text-primary-text uppercase tracking-wider">Premium Report Sample</span>
                                </div>

                                <div className="absolute bottom-8 right-8 bg-astro-orange/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-orange-100 text-white flex items-center gap-2">
                                    <Sparkles size={18} />
                                    <span className="text-sm font-bold">Saahil Kohli Verified</span>
                                </div>
                            </motion.div>

                            {/* Decorative frames behind the main image */}
                            <div className="absolute -inset-4 border-2 border-astro-pink/10 rounded-[3rem] -z-10 animate-pulse" />
                            <div className="absolute -inset-8 border border-astro-orange/10 rounded-[3.5rem] -z-20" />
                        </div>

                        {/* Background Decorative Elements */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-astro-orange/10 rounded-full blur-3xl -z-30 animate-pulse" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-astro-pink/10 rounded-full blur-3xl -z-30" />
                    </motion.div>
                </div>
            </Section>
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold  mb-4">Astrology FAQs</h2>
                        {/* <div className="h-1.5 w-24 astro-gradient mx-auto rounded-full" /> */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-full max-w-[120px] bg-[#FF7BB5]"></div>
                            <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                            <div className="h-[1px] w-full max-w-[120px] bg-[#FF7BB5]"></div>
                        </div>

                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-gray-100 last:border-0"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full py-6 flex items-center justify-between text-left group transition-all"
                                >
                                    <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-astro-pink' : 'text-primary-text group-hover:text-astro-pink'}`}>
                                        {index + 1}. {faq.question}
                                    </span>
                                    <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-astro-pink' : 'text-gray-400 group-hover:text-astro-pink'}`}>
                                        {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-lg text-secondary-text pb-8 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* YouTube Tutorials Section - Infinite Marquee */}
            <Section className="bg-gray-50/50 overflow-hidden py-20 relative">
                {/* CSS for Marquee Animation */}
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: marquee 50s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="text-center mb-16 relative z-10 px-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-text mb-4">Explore Our Tutorials</h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-full max-w-[150px] bg-[#FF7BB5]"></div>
                        <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                        <div className="h-[1px] w-full max-w-[150px] bg-[#FF7BB5]"></div>
                    </div>

                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden group">
                    {/* Gradient Masks for profesional fade effect */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-marquee flex gap-8 px-4">
                        {/* Duplicate the list to create seamless loop */}
                        {[
                            "https://www.youtube.com/embed/YdHRiWQr-HY?si=4dot-_sbz4KJ-eT_",
                            "https://www.youtube.com/embed/MmDao1Z6Wqo?si=DX0A7gbeFQLjbiYM",
                            "https://www.youtube.com/embed/7XnCW-FJ-oc?si=_mtcdCjao7LflZjk",
                            "https://www.youtube.com/embed/MKMs45LAdLk?si=PsJHoCXuPfGzPBvv",
                            "https://www.youtube.com/embed/qdZak6-6F8Y?si=0BYbCJcmoDDZO7vp",
                            "https://www.youtube.com/embed/BvILX3D_YgQ?si=kSFEM2X9z0Ur84pg",
                            "https://www.youtube.com/embed/uF5iY5ib_bg?si=S0g8PtGeLUSXuFP-",
                            "https://www.youtube.com/embed/MKMs45LAdLk?si=cdgLLjMVbo4UaOxN",
                            "https://www.youtube.com/embed/iwS6uysbvu0?si=SH2xw8IYTnRusIH5",
                            "https://www.youtube.com/embed/nFTxX9S2MS8?si=U3u0vaNUbMkt8Qzr"
                        ].map((src, i) => (
                            <div
                                key={i}
                                className="w-[350px] md:w-[450px] flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={src}
                                        title={`Tutorial ${i}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Section className="bg-astro-pink/5">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-text mb-4">What Our Clients Say</h2>
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="h-[1px] w-full max-w-[150px] bg-[#FF7BB5]"></div>
                            <div className="text-astro-pink"><Sparkles size={20} fill="currentColor" /></div>
                            <div className="h-[1px] w-full max-w-[150px] bg-[#FF7BB5]"></div>
                        </div>

                    </div>

                    {/* Testimonial Content (Now on Top) */}
                    <div className="relative min-h-[300px] flex items-center justify-center mb-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-pink-100 relative w-full max-w-1xl"
                            >
                                <div className="absolute top-4 left-6 text-7xl text-astro-pink/10 font-serif leading-none select-none">“</div>
                                <div className="relative z-10">
                                    <p className="text-lg md:text-2xl text-primary-text font-serif leading-relaxed mb-8 text-center">
                                        {[
                                            "The Vastu consultation completely transformed the energy of my office. I've seen a noticeable improvement in productivity and growth.",
                                            "Astro Veda's horoscope reading was shockingly accurate. It gave me the clarity I needed to make a major career transition.",
                                            "The Astro Remedies suggested were simple yet powerful. I feel much more balanced and aligned with my purpose now."
                                        ][activeTestimonial]}
                                    </p>
                                    <div className="flex flex-col items-center">
                                        <div className="h-0.5 w-10 bg-astro-orange/30 rounded-full mb-4" />
                                        <h4 className="text-xl font-bold text-astro-pink mb-1">
                                            {["Priya Sharma", "Rahul Mehra", "Anjali Gupta"][activeTestimonial]}
                                        </h4>
                                        <p className="text-secondary-text uppercase tracking-widest text-xs font-bold">
                                            {["Business Owner", "Software Engineer", "Artist"][activeTestimonial]}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-6 text-7xl text-astro-pink/10 font-serif leading-none select-none rotate-180">“</div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Decorative Background Elements */}
                        <div className="absolute top-1/2 left-0 -translate-x-8 -translate-y-1/2 w-20 h-20 bg-astro-orange/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute top-1/2 right-0 translate-x-8 -translate-y-1/2 w-20 h-20 bg-astro-pink/10 rounded-full blur-2xl -z-10" />
                    </div>

                    {/* Testimonial Tabs (Now Below) */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            { name: "Priya Sharma", role: "Business Owner" },
                            { name: "Rahul Mehra", role: "Software Engineer" },
                            { name: "Anjali Gupta", role: "Artist" }
                        ].map((client, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                className={`flex flex-col items-center transition-all duration-300 group ${activeTestimonial === i ? 'scale-110' : 'opacity-50 hover:opacity-80'}`}
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full mb-3 flex items-center justify-center font-bold text-lg md:text-xl transition-all duration-300 border-4 ${activeTestimonial === i ? 'astro-gradient text-white border-white shadow-xl' : 'bg-white text-astro-orange border-transparent shadow-md group-hover:shadow-lg'}`}>
                                    {client.name[0]}
                                </div>
                                <span className={`font-bold text-xs md:text-sm transition-colors ${activeTestimonial === i ? 'text-astro-pink' : 'text-primary-text'}`}>
                                    {client.name}
                                </span>
                                {activeTestimonial === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="h-0.5 w-full bg-astro-pink rounded-full mt-2"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Latest Insights (Blog) Section */}
            <Section className="bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-text mb-4">
                                Latest Insights
                            </h2>

                            {/* Divider */}



                            <p className="text-lg text-secondary-text max-w-xl">
                                Explore the ancient wisdom of Vedic sciences and stay updated with celestial alignments.
                            </p>
                        </div>

                        <Link
                            to="/blog"
                            className="flex items-center gap-2 text-astro-pink font-bold hover:gap-3 transition-all group"
                        >
                            Explore All Articles
                            <ChevronRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {latestBlogs.length > 0 ? latestBlogs.map((blog, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-lg relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Optional: Add category if available or fallback */}
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-sm text-astro-pink text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                                                {blog.tags[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center text-xs text-gray-400 gap-2">
                                        <Calendar size={14} className="text-astro-orange" />
                                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-primary-text group-hover:text-astro-pink transition-colors leading-tight line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-secondary-text line-clamp-2 text-sm leading-relaxed">
                                        {blog.content}
                                    </p>
                                    <Link to={`/blog/${blog._id}`} className="inline-flex items-center gap-2 text-astro-pink font-bold text-sm hover:gap-3 transition-all pt-2">
                                        Read More <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="col-span-3 text-center text-gray-400">Loading latest insights...</div>
                        )}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="text-center">
                <div className="astro-gradient p-12 md:p-20 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-20"><Star size={100} /></div>
                    <div className="absolute bottom-0 left-0 p-10 opacity-20"><Moon size={100} /></div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 relative z-10">Ready to Unveil Your Destiny?</h2>
                    <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto relative z-10">
                        Book your personalized consultation today and take the first step towards a more harmonious and prosperous life.
                    </p>
                    <Link to="/contact" className="bg-white text-astro-pink px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl inline-block relative z-10">
                        Get Started Now
                    </Link>
                </div>
            </Section>
        </PageTransition>
    );
};

export default Home;

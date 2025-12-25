import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import {
    Orbit,
    Sparkles,
    Star,
    CheckCircle2,
    ArrowRight,
    Search,
    BookOpen,
    Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Image Imports
import chartImg from '../assets/images/astrology-charts.png';
import consultImg from '../assets/images/astrology-consultation.png';
import cosmicImg from '../assets/images/astrology-cosmic.png';

const Astrology = () => {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-slate-900 border-b border-white/10 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src={cosmicImg}
                        alt="Cosmic Alignment"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-astro-pink font-bold text-sm mb-8">
                        <Orbit size={18} />
                        <span className="uppercase tracking-widest">Ancient Wisdom for Modern Life</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Vedic Astrology:<br />
                        <span className="astro-gradient-text">Your Cosmic Blueprint</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Unlock the secrets written in the stars. Our expert practitioners use precise Vedic calculations to guide you through life's most important transitions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="astro-gradient text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2">
                            Book Your Reading <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is Astrology Section */}
            <Section className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">What is Vedic Astrology?</h2>
                        <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
                            <p>
                                Vedic Astrology, or Jyotisha, is the "Science of Light." It is the ancient Indian system of astronomy and astrology that connects human destiny with the movements of the planets and stars.
                            </p>
                            <p>
                                Unlike Western astrology, which uses the tropical zodiac, Vedic astrology uses the sidereal zodiac, accounting for the actual position of the stars in the sky. This results in a highly accurate "Janam Kundli" (Birth Chart) that reveals your unique karma and soul's purpose.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    "Precise Calculations",
                                    "Dasha Systems",
                                    "Planetary Remediation",
                                    "Soul Realignment"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-astro-pink" size={20} />
                                        <span className="font-bold text-primary-text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-astro-pink/20 to-astro-orange/20 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src={chartImg}
                                alt="Vedic Charts"
                                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Our Expertise / Methodology */}
            <Section className="bg-gray-50/50 py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-96 h-96 bg-astro-pink/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-astro-orange/5 blur-[120px] rounded-full" />
                </div>

                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-4">Our Methodology</h2>
                    <p className="text-xl text-secondary-text max-w-2xl mx-auto">We combine traditional wisdom with advanced technical precision to provide the most accurate readings possible.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Kundli Analysis",
                            desc: "Deep dive into your 12 houses to understand your health, finance, and destiny.",
                            icon: <Search className="text-astro-pink" />
                        },
                        {
                            title: "Transit Reports",
                            desc: "Understand how current planetary movements are affecting your personal chart.",
                            icon: <Orbit className="text-astro-orange" />
                        },
                        {
                            title: "Life Phase Insights",
                            desc: "Utilizing Vimshottari Dasha to predict major life cycles and timing of events.",
                            icon: <Zap className="text-astro-yellow" />
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/70 backdrop-blur-xl p-10 rounded-[32px] border border-white shadow-xl hover:-translate-y-2 transition-transform">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary-text mb-4">{item.title}</h3>
                            <p className="text-secondary-text leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Consultation Section */}
            <Section className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-astro-orange/20 to-astro-yellow/20 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src={consultImg}
                                alt="Consultation"
                                className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">Personalized Consultation</h2>
                        <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
                            <p>
                                Our astrology consultations are more than just predictions. They are sessions for self-discovery and empowerment. Whether you're facing a career crossroads, relationship challenges, or searching for spiritual clarity, our practitioners are here to illuminate the path.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "One-on-One Virtual Sessions",
                                    "Comprehensive Written Reports",
                                    "Specific Problem Solving",
                                    "Customized Remedies (Mantras, Gemstones)"
                                ].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-astro-orange ring-4 ring-astro-orange/10" />
                                        <span className="font-medium">{step}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-8">
                                <Link to="/booking" className="inline-block astro-gradient text-white px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                                    Book a Consultation Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="py-24 bg-slate-900 overflow-hidden text-center text-white">
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <Sparkles className="mx-auto mb-8 text-astro-yellow" size={48} />
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Discover Your Truth?</h2>
                    <p className="text-xl opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                        The planets are always moving, and so is your life. Take control of your journey with the ancient wisdom of the stars.
                    </p>
                    <Link to="/booking" className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-astro-pink hover:text-white transition-all shadow-2xl">
                        Schedule Your Session <BookOpen size={24} />
                    </Link>
                </div>
            </Section>
        </PageTransition>
    );
};

export default Astrology;
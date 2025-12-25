import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { Target, Eye, Sparkles, Compass, Shield, Heart, Sun, BookOpen } from 'lucide-react';
import astroImage from '../assets/images/astrology-about.png';

const About = () => {
    return (
        <PageTransition>
            {/* Header - Compact */}
            <section className="py-12 md:py-16 bg-gray-50/50 text-center border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-text mb-4">Our Celestial Story</h1>
                    <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto">At Astro Veda Creations, we bridge the gap between ancient wisdom and modern living.</p>
                </div>
            </section>

            {/* Story Section - Balanced Padding */}
            <Section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content Left */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-text mb-6">The Journey of Astro Veda</h2>
                        <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
                            <p>
                                Founded by a group of passionate Vedic scholars and experienced astrologers, Astro Veda Creations was born out of a desire to make traditional astrological knowledge accessible, practical, and relevant for today's world.
                            </p>
                            <p>
                                For over a decade, we have been helping individuals navigate life's complexities—from career choices and relationship dynamics to health concerns and spiritual growth. Our approach is rooted in the timeless principles of the Vedas, yet delivered with a contemporary mindset.
                            </p>
                        </div>
                    </div>

                    {/* Image Card Right */}
                    <div className="relative group max-w-lg mx-auto lg:mx-0">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-astro-pink/20 to-astro-orange/20 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src={astroImage}
                                alt="Vedic Astrology"
                                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission & Vision Redesign - Compact Cards */}
            <Section className="bg-gray-50/50 relative overflow-hidden py-12 md:py-20">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 left-10 w-64 h-64 bg-astro-pink/5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-astro-orange/5 blur-[100px] rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 max-w-6xl mx-auto">
                    {/* Mission Card */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-astro-pink to-astro-orange rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[30px] border border-white/50 shadow-lg h-full transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="w-16 h-16 bg-astro-pink/10 rounded-2xl flex items-center justify-center text-astro-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Compass size={32} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-text mb-4">Our Mission</h3>
                            <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                                To empower individuals with authentic Vedic knowledge and personalized guidance, enabling them to make informed life choices and achieve harmony with cosmic rhythms.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-astro-pink font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Learn More</span>
                                <Sparkles size={14} />
                            </div>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-astro-orange to-astro-yellow rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                        <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[30px] border border-white/50 shadow-lg h-full transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="w-16 h-16 bg-astro-orange/10 rounded-2xl flex items-center justify-center text-astro-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-text mb-4">Our Vision</h3>
                            <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                                To be the world's most trusted source for Vedic sciences, fostering a global community that lives in alignment with celestial wisdom and spiritual balance.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-astro-orange font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm">Our Future</span>
                                <Sparkles size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Our Values Section - Balanced Gaps */}
            <Section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-text mb-4">Our Values</h2>
                    <div className="h-1.5 w-24 astro-gradient mx-auto rounded-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {[
                        {
                            title: "Integrity",
                            desc: "Honest and ethical astrological guidance you can rely on.",
                            icon: <Shield size={32} />
                        },
                        {
                            title: "Wisdom",
                            desc: "Deeply rooted in ancient Vedic scriptures and timeless knowledge.",
                            icon: <BookOpen size={32} />
                        },
                        {
                            title: "Empathy",
                            desc: "Compassionate guidance tailored to your unique emotional journey.",
                            icon: <Heart size={32} />
                        },
                        {
                            title: "Clarity",
                            desc: "Providing clear, actionable insights to illuminate your path forward.",
                            icon: <Sun size={32} />
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className="text-astro-pink mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary-text">{item.title}</h4>
                            <p className="text-sm md:text-base text-secondary-text leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Why ASTRO-VEDA Section - Professional Polish */}
            <Section className="bg-gray-50/50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold astro-gradient-text mb-2">Why ASTRO-VEDA</h2>
                    <p className="text-lg md:text-xl font-serif mb-6 md:mb-8 italic opacity-80">Because we provide the most authentic Vedic guidance</p>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-full max-w-[100px] md:max-w-[150px] bg-[#FF7BB5]"></div>
                        <div className="text-astro-pink"><Sparkles size={18} fill="currentColor" /></div>
                        <div className="h-[1px] w-full max-w-[100px] md:max-w-[150px] bg-[#FF7BB5]"></div>
                    </div>

                    <div className="uppercase tracking-[0.15em] font-bold text-xs md:text-sm mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto text-primary-text/80">
                        GET PERSONALIZED ASTROLOGICAL GUIDANCE. NAVIGATE LIFE'S JOURNEY WITH COSMIC WISDOM TAILORED TO YOU BY ASTRO-VEDA.
                    </div>

                    <div className="space-y-6 text-base md:text-lg text-secondary-text leading-relaxed">
                        <p>
                            ASTRO-VEDA firmly believes that, akin to physical health, every individual possesses spiritual well-being to nurture. Spiritual vitality plays a crucial role in shaping one's karma, overall well-being, and connection with the universe. According to us, Astrology is not just fortune-telling; it is the means of course correction, aligning planetary energies to foster personal growth and upliftment.
                        </p>
                        <p>
                            ASTRO-VEDA advises clients to prioritize their life's most significant aspects and address them with potent remedies, whether through astrology, numerology, or tantric practices tailored to their needs. Our teachings underscore the importance of focusing on one's spiritual health alongside physical wellness for a harmonious and fulfilling life journey.
                        </p>
                    </div>
                </div>
            </Section>
        </PageTransition>
    );
};

export default About;

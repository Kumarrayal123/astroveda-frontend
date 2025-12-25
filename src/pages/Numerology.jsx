import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import {
  Hash,
  Sparkles,
  Star,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
  Zap,
  Diamond
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Image Imports
import cosmicImg from '../assets/images/astrology-cosmic.png';
import consultImg from '../assets/images/astrology-consultation.png';
import chartsImg from '../assets/images/numerology.jpg';


const Numerology = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#1A1A2E] border-b border-white/10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={cosmicImg}
            alt="Cosmic Numerology"
            className="w-full h-full object-cover opacity-30 saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A2E] via-[#1A1A2E]/80 to-transparent" />

          {/* Decorative Number Grid Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <span className="text-[20rem] font-serif font-black absolute -left-20 -top-20">1</span>
            <span className="text-[15rem] font-serif font-black absolute right-20 top-20">7</span>
            <span className="text-[18rem] font-serif font-black absolute left-1/4 bottom-10">3</span>
            <span className="text-[25rem] font-serif font-black absolute right-1/4 -bottom-20">9</span>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-astro-yellow font-bold text-sm mb-8">
            <Hash size={18} />
            <span className="uppercase tracking-widest">The Vibration of Success</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Vedic Numerology:<br />
            <span className="text-astro-yellow">Decoding Your Vibrations</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Numbers are the building blocks of the universe. We help you harmonize your name and date of birth with cosmic frequencies for ultimate prosperity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-astro-yellow text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2">
              Calculate Your Path <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Numerology Section */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">The Power of Vibrations</h2>
            <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
              <p>
                Numerology is the study of the mystical relationship between numbers and life events. It is based on the idea that everything in the universe vibrates at a specific frequency, and numbers are the best way to represent these vibrations.
              </p>
              <p>
                By analyzing your Name and Birth Date, we can identify your Life Path Number, Destiny Number, and Name Vibrations. These insights help you understand your strengths, weaknesses, and the hidden patterns of your life journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Life Path Decoding",
                  "Name Correction",
                  "Propitious Dates",
                  "Business Numerology"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-astro-yellow" size={20} />
                    <span className="font-bold text-primary-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-astro-yellow/20 to-astro-orange/20 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-astro-yellow/10 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src={chartsImg}
                alt="Numerical Charts"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Core Calculations Section */}
      <Section className="bg-gray-50/50 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-astro-yellow/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-astro-orange/5 blur-[120px] rounded-full" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-4">Numerology Analytics</h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">Precise mathematical analysis for life-changing outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Name Sync",
              desc: "Harmonizing your name spelling with your date of birth for career success.",
              icon: <Star className="text-astro-yellow" />
            },
            {
              title: "Mobile & Vehicle",
              desc: "Choosing digits that resonate with your energy for smooth transitions.",
              icon: <Diamond className="text-astro-orange" />
            },
            {
              title: "Compatibility",
              desc: "In-depth analysis of partner and business associate numerical synergy.",
              icon: <Zap className="text-astro-pink" />
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
                <Link to="/contact" className="inline-block astro-gradient text-white px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                  Book a Consultation Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-24 bg-[#1A1A2E] overflow-hidden text-center text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Sparkles className="mx-auto mb-8 text-astro-yellow" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">What Do Your Numbers Say?</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Don't let luck decide your path. Use the science of numbers to manifest your desired reality.
          </p>
          <Link to="/booking" className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-astro-yellow transition-all shadow-2xl">
            Schedule Your Analysis <BookOpen size={24} />
          </Link>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Numerology;
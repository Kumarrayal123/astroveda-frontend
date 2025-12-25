import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import {
  Flame,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
  Zap,
  Shield,
  HeartPulse,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Image Imports
import cosmicImg from '../assets/images/astrology-cosmic.png';
import consultImg from '../assets/images/astrology-consultation.png';
import tantraImg from '../assets/images/astrology-cosmic.png'; // Replace with tantra.jpg when available


const Tantra = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#2D1B2D] border-b border-white/10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={cosmicImg}
            alt="Spiritual Tantra"
            className="w-full h-full object-cover opacity-20 sepia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2D] via-[#2D1B2D]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-astro-pink font-bold text-sm mb-8">
            <Flame size={18} />
            <span className="uppercase tracking-widest">Ancient Spiritual Protection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Spiritual Tantra:<br />
            <span className="text-astro-pink">Invoking Inner Power</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Experience the sacred path of spiritual transformation. We provide authentic, protective, and empowering Vedic rituals to harmonize your karmic debt and protect your energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-astro-pink text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2">
              Request Protection Ritual <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Tantra Section */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">Sacred Geometry & Rituals</h2>
            <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
              <p>
                Vedic Tantra is a path of spiritual technology aimed at expanding consciousness and overcoming karmic obstacles. It utilizes Mantras (sacred sound), Yantras (sacred geometry), and Havans (rituals) to invoke cosmic energies for protection and growth.
              </p>
              <p>
                At Astro Veda, we practice "Sattvic Tantra"—focusing purely on light, protection, and spiritual upliftment. Whether you are seeking relief from planetary afflictions or spiritual shielding, our rituals are performed with precision and integrity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Yantra Energization",
                  "Vedic Mantra Japa",
                  "Karma Neutralization",
                  "Spiritual Shielding"
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
            <div className="absolute -inset-4 bg-gradient-to-tr from-astro-pink/20 to-[#2D1B2D]/40 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-astro-pink/10 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src={tantraImg}
                alt="Spiritual Tantra"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Core Offerings Section */}
      <Section className="bg-gray-50/50 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-astro-pink/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/5 blur-[120px] rounded-full" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-4">Protective Services</h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">Specific spiritual technologies for life's most challenging phases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Siddhi Rituals",
              desc: "Invoking specific planetary deities for support in health, wealth, and career.",
              icon: <HeartPulse className="text-astro-pink" />
            },
            {
              title: "Energy Shielding",
              desc: "Creating a spiritual perimeter around your home or person against negativity.",
              icon: <Shield className="text-purple-600" />
            },
            {
              title: "Visionary Clarity",
              desc: "Third-eye awakening practices and mantras for intuition and deep wisdom.",
              icon: <Eye className="text-astro-orange" />
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
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
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
      <Section className="py-24 bg-[#2D1B2D] overflow-hidden text-center text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Sparkles className="mx-auto mb-8 text-astro-pink" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Invoke the Power Within</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Don't let cosmic obstacles stop your growth. Experience the transformative power of authentic Vedic rituals.
          </p>
          <Link to="/booking" className="inline-flex items-center gap-3 bg-white text-[#2D1B2D] px-12 py-5 rounded-2xl font-black text-xl hover:bg-astro-pink hover:text-white transition-all shadow-2xl">
            Consult Our Master <BookOpen size={24} />
          </Link>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Tantra;
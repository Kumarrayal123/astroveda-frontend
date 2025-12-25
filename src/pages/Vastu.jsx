import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import {
  Home,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
  Layout,
  Compass,
  Droplets,
  Flame,
  Wind,
  Mountain
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Image Imports
import aboutImg from '../assets/images/astrology-about.png';
import consultImg from '../assets/images/astrology-consultation.png';
import vastuImg from '../assets/images/astrology-about.png'; // Replace with vastu.jpg when available

const Vastu = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-emerald-950 border-b border-white/10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="Vastu Architecture"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950 to-emerald-950" />

          {/* Decorative Grid Lines Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-sm mb-8">
            <Home size={18} />
            <span className="uppercase tracking-widest">Architectural Harmony</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Vastu Shastra:<br />
            <span className="text-astro-orange">Aligning Space & Life</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Transform your home or workplace into a magnet for prosperity and peace. Our Vastu experts align your physical space with the fundamental laws of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-astro-orange text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2">
              Request Vastu Audit <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Vastu Section */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">Scientific Architecture</h2>
            <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
              <p>
                Vastu Shastra is the ancient Indian science of architecture and spatial arrangement. It is based on the flow of energy—Prana—and how the orientation of walls, rooms, and objects affects the well-being of the inhabitants.
              </p>
              <p>
                By balancing the five elements (Earth, Water, Fire, Air, and Space), Vastu helps eliminate "Doshas" (negativity) and invites health, wealth, and spiritual growth. Our approach is non-destructive, focusing on energy remedies over structural demolition.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Residential Harmonization",
                  "Office/Business Growth",
                  "Site Selection Advice",
                  "Directional Remedies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                    <span className="font-bold text-primary-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-astro-orange/20 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src={vastuImg}
                alt="Vastu Architecture"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Vastu Pillars Section */}
      <Section className="bg-gray-50/50 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-900/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-astro-orange/5 blur-[120px] rounded-full" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-4">Vastu Expertise</h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">Tailored spatial solutions that honor ancient codes and modern requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Directional Audit",
              desc: "In-depth analysis of North, South, East, and West alignments for energy flow.",
              icon: <Compass className="text-emerald-600" />
            },
            {
              title: "Interior Layout",
              desc: "Placement guidance for furniture, décor, and entrances to maximize prosperity.",
              icon: <Layout className="text-astro-orange" />
            },
            {
              title: "Energy Cleansing",
              desc: "Spiritual and physical remedies to neutralize existing architectural defects.",
              icon: <Search className="text-emerald-700" />
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
      <Section className="py-24 bg-emerald-950 overflow-hidden text-center text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Sparkles className="mx-auto mb-8 text-emerald-400" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Bring Harmony to Your Home</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Don't let architectural defects hold back your success. Align your space with cosmic laws today.
          </p>
          <Link to="/booking" className="inline-flex items-center gap-3 bg-white text-emerald-950 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-400 hover:text-emerald-950 transition-all shadow-2xl">
            Schedule Site Consultation <BookOpen size={24} />
          </Link>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Vastu;
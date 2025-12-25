import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import {
  Moon,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
  Star,
  Sun,
  Calendar,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Image Imports
import cosmicImg from '../assets/images/astrology-cosmic.png';
import consultImg from '../assets/images/astrology-consultation.png';
import horoscopeImg from '../assets/images/horoscope-img.jpg'; // Replace with horoscope.jpg when available

const Horoscope = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#0F172A] border-b border-white/10 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={cosmicImg}
            alt="Daily Horoscope"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] via-[#0F172A]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-astro-yellow font-bold text-sm mb-8">
            <Moon size={18} />
            <span className="uppercase tracking-widest">Timing is Everything</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Daily Horoscope:<br />
            <span className="text-astro-yellow">Align with the Stars</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Stay in sync with the celestial dance. Get personalized insights into how planetary transits effect your moon sign on a daily, weekly, and monthly basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-astro-yellow text-slate-950 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-2">
              Get Your Free Forecast <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Horoscope Section */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">Real-Time Transit Analysis</h2>
            <div className="space-y-6 text-lg text-secondary-text leading-relaxed">
              <p>
                A horoscope is a window into the current state of the cosmos and its reflection on your personal life. Unlike generic sun-sign horoscopes, our Vedic predictions are based on your Moon sign and Rising sign for far greater accuracy.
              </p>
              <p>
                We analyze the movement of rapid planets like the Moon and Mercury, along with the slow-moving giants like Saturn and Jupiter, to give you a complete picture of the opportunities and challenges ahead.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Moon Sign Forecasts",
                  "Rising Sign Insights",
                  "Planetary Transits",
                  "Retrograde Alerts"
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
            <div className="absolute -inset-4 bg-gradient-to-tr from-astro-yellow/20 to-blue-500/20 rounded-[48px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-astro-yellow/10 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src={horoscopeImg}
                alt="Horoscope Zodiac"
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Forecast Types Section */}
      <Section className="bg-gray-50/50 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-astro-yellow/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-900/5 blur-[120px] rounded-full" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-4">Depth of Forecasts</h2>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">Choose the level of insight that matches your current life needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            {
              title: "Daily Guidance",
              desc: "Short, actionable insights to navigate the day's specific energy and moon cycles.",
              icon: <Calendar className="text-astro-yellow" />
            },
            {
              title: "Weekly Outlook",
              desc: "A broader view of the week's planetary shifts and their impact on your productivity.",
              icon: <Star className="text-blue-400" />
            },
            {
              title: "Annual Horoscope",
              desc: "Deep analysis of the year's Saturn and Jupiter transits for major life milestones.",
              icon: <Compass className="text-astro-pink" />
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
      <Section className="py-24 bg-[#0F172A] overflow-hidden text-center text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Sparkles className="mx-auto mb-8 text-astro-yellow" size={48} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to See What's Next?</h2>
          <p className="text-xl opacity-80 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Don't walk blindly through the week. Let the stars illuminate your path and time your actions for success.
          </p>
          <Link to="/booking" className="inline-flex items-center gap-3 bg-white text-[#0F172A] px-12 py-5 rounded-2xl font-black text-xl hover:bg-astro-yellow transition-all shadow-2xl">
            Subscribe to Forecasts <BookOpen size={24} />
          </Link>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Horoscope;
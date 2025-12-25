// import Section from '../components/Section';
// import PageTransition from '../components/PageTransition';
// import {
//     Moon,
//     Sparkles,
//     Home,
//     Hand,
//     ShieldCheck,
//     ArrowRight,
//     Orbit,
//     Hash,
//     Flame,
//     Star
// } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Services = () => {
//     const serviceList = [
//         {
//             id: "astrology",
//             title: "Vedic Astrology",
//             icon: <Orbit size={40} className="text-astro-pink" />,
//             desc: "Deep analysis of your planetary positions at birth. We provide precise life readings, career timing, and relationship compatibility based on true Vedic principles.",
//             features: ["Personalized Janam Kundli", "Yearly Transit Forecasts", "Muhurta for Auspicious Events"],
//             color: "from-astro-pink/10 to-transparent"
//         },
//         {
//             id: "palmistry",
//             title: "Traditional Palmistry",
//             icon: <Hand size={40} className="text-astro-orange" />,
//             desc: "Understand your character and destiny through the unique maps in your hands. Our hand analysis reveals hidden talents and future trends etched in your palms.",
//             features: ["Detailed Line Reading", "Mount Analysis", "Spiritual Path Insights"],
//             color: "from-astro-orange/10 to-transparent"
//         },
//         {
//             id: "numerology",
//             title: "Vedic Numerology",
//             icon: <Hash size={40} className="text-astro-yellow" />,
//             desc: "Unlock the power of numbers in your life. We analyze the vibration of your name and birth date to optimize your signature, business name, and lucky numbers.",
//             features: ["Name Vibration Correction", "Lucky Numbers & Colors", "Destiny Number Analysis"],
//             color: "from-astro-yellow/10 to-transparent"
//         },
//         {
//             id: "vastu",
//             title: "Vastu Shastra Consultation",
//             icon: <Home size={40} className="text-astro-pink" />,
//             desc: "Align your living and workspace with the laws of nature. We offer practical Vastu remedies that harmonize energy flow without requiring major structural changes.",
//             features: ["Residential Vastu Audit", "Commercial Site Planning", "Energy Balancing Remedies"],
//             color: "from-astro-pink/10 to-transparent"
//         },
//         {
//             id: "tantra",
//             title: "Spiritual Tantra & Rituals",
//             icon: <Flame size={40} className="text-astro-orange" />,
//             desc: "Ancient spiritual practices for inner strength and cosmic protection. We provide guidance on Yantras, Mantras, and specialized rituals for planetary peace.",
//             features: ["Protective Yantra Solutions", "Mantra Siddhi Guidance", "Graha Shanti Rituals"],
//             color: "from-astro-orange/10 to-transparent"
//         },
//         {
//             id: "horoscope",
//             title: "Daily & Transit Horoscope",
//             icon: <Moon size={40} className="text-astro-yellow" />,
//             desc: "Stay aligned with the moon's cycles and daily planetary movements. Get actionable insights into how today's transits are affecting your sign specifically.",
//             features: ["Personalized Daily Insights", "New/Full Moon Forecasts", "Retrograde Impact Analysis"],
//             color: "from-astro-yellow/10 to-transparent"
//         }
//     ];

//     return (
//         <PageTransition>
//             {/* Header - Clean Brand Style */}
//             <section className="py-12 md:py-16 bg-gray-50/50 text-center border-b border-gray-100">
//                 <div className="max-w-4xl mx-auto px-4">
//                     <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-text mb-4">Celestial Services</h1>
//                     <p className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto">
//                         Comprehensive Vedic solutions crafted to illuminate your path and bring harmony to your existence.
//                     </p>
//                 </div>
//             </section>

//             {/* Services Grid - Balanced & Professional */}
//             <Section className="py-12 md:py-20">
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//                     {serviceList.map((service) => (
//                         <div
//                             key={service.id}
//                             id={service.id}
//                             className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-astro-pink/10 transition-all duration-500 group flex flex-col h-full"
//                         >
//                             {/* Icon Box */}
//                             <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/50 backdrop-blur-sm`}>
//                                 {service.icon}
//                             </div>

//                             <div className="flex-grow">
//                                 <h3 className="text-2xl font-serif font-bold text-primary-text mb-4">{service.title}</h3>
//                                 <p className="text-base text-secondary-text mb-8 leading-relaxed">
//                                     {service.desc}
//                                 </p>

//                                 <h4 className="text-sm font-bold uppercase tracking-widest text-primary-text/40 mb-4 ">Specializations</h4>
//                                 <ul className="space-y-3 mb-10">
//                                     {service.features.map((feature, i) => (
//                                         <li key={i} className="flex items-center gap-3 text-secondary-text font-medium text-sm">
//                                             <div className="w-1.5 h-1.5 rounded-full bg-astro-pink" />
//                                             {feature}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <Link
//                                 to={`/${service.id}`}
//                                 className="mt-auto inline-flex items-center justify-between w-full p-4 rounded-2xl bg-gray-50 text-astro-pink font-bold hover:bg-astro-pink hover:text-white transition-all group/btn"
//                             >
//                                 <span>Explore Service</span>
//                                 <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </Section>

//             {/* Custom Consultation CTA */}
//             <Section className="py-12 md:py-24 bg-gray-50/50 relative overflow-hidden">
//                 {/* Decorative background circles */}
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-astro-pink/5 blur-[120px] rounded-full -mr-48 -mt-48" />
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-astro-orange/5 blur-[120px] rounded-full -ml-48 -mb-48" />

//                 <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
//                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-astro-pink font-bold text-sm mb-6">
//                         <Star size={16} fill="currentColor" />
//                         <span>Trusted by Thousands</span>
//                     </div>
//                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-8">Ready to Align with Your Destiny?</h2>
//                     <p className="text-lg md:text-xl text-secondary-text mb-12 leading-relaxed">
//                         Every spiritual journey is unique. Schedule a discovery call with our master practitioners to find the exact celestial guidance tailored to your current life path.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Link to="/contact" className="astro-gradient text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
//                             Schedule Appointment
//                         </Link>
//                         <Link to="/contact" className="bg-white text-primary-text border border-gray-100 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm">
//                             Ask a Question
//                         </Link>
//                     </div>
//                 </div>
//             </Section>
//         </PageTransition>
//     );
// };

// export default Services;



import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import {
  Orbit,
  Hand,
  Hash,
  Home,
  Flame,
  MoonStar,
  ArrowRight,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {

  const serviceList = [
    {
      id: "astrology",
      title: "Vedic Astrology",
      icon: <Orbit size={42} className="text-astro-pink" />,
      desc: "Accurate planetary analysis based on authentic Vedic astrology principles.",
      features: ["Janam Kundli", "Career & Marriage", "Dosha Analysis"],
      color: "from-astro-pink/10 to-transparent"
    },
    {
      id: "palmistry",
      title: "Palmistry",
      icon: <Hand size={42} className="text-astro-orange" />,
      desc: "Reveal personality traits and future events through palm lines.",
      features: ["Life Line", "Marriage Line", "Fate Reading"],
      color: "from-astro-orange/10 to-transparent"
    },
    {
      id: "numerology",
      title: "Numerology",
      icon: <Hash size={42} className="text-astro-yellow" />,
      desc: "Discover the hidden power of numbers influencing your destiny.",
      features: ["Life Path Number", "Lucky Numbers", "Name Correction"],
      color: "from-astro-yellow/10 to-transparent"
    },
    {
      id: "vastu",
      title: "Vastu Shastra",
      icon: <Home size={42} className="text-astro-pink" />,
      desc: "Balance energies of your home and office using Vastu Shastra.",
      features: ["Home Vastu", "Office Planning", "Energy Remedies"],
      color: "from-astro-pink/10 to-transparent"
    },
    {
      id: "tantra",
      title: "Tantra & Rituals",
      icon: <Flame size={42} className="text-astro-orange" />,
      desc: "Spiritual protection and planetary remedies through sacred rituals.",
      features: ["Yantra", "Mantra", "Graha Shanti"],
      color: "from-astro-orange/10 to-transparent"
    },
    {
      id: "horoscope",
      title: "Daily Horoscope",
      icon: <MoonStar size={42} className="text-astro-yellow" />,
      desc: "Daily planetary movements and moon-based predictions.",
      features: ["Daily Guidance", "Moon Transit", "Retrograde Alerts"],
      color: "from-astro-yellow/10 to-transparent"
    }
  ];

  return (
    <PageTransition>

      {/* HEADER */}
      <section className="py-16 bg-gray-50 text-center border-b">
        <h1 className="text-4xl md:text-6xl font-serif font-bold">
          Our Astrology Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-secondary-text">
          Ancient Vedic wisdom designed for modern life clarity
        </p>
      </section>

      {/* SERVICE ICON NAV */}
      <Section className="py-12">
        <div className="flex flex-wrap justify-center gap-8">

          <ServiceNav icon={<Orbit />} label="Astrology" link="/astrology" />
          <ServiceNav icon={<Hand />} label="Palmistry" link="/palmistry" />
          <ServiceNav icon={<Hash />} label="Numerology" link="/numerology" />
          <ServiceNav icon={<Home />} label="Vastu" link="/vastu" />
          <ServiceNav icon={<Flame />} label="Tantra" link="/tantra" />
          <ServiceNav icon={<MoonStar />} label="Horoscope" link="/horoscope" />

        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {serviceList.map(service => (
            <div
              key={service.id}
              className="bg-white p-9 rounded-[40px] border hover:shadow-2xl transition flex flex-col"
            >

              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color}
                flex items-center justify-center mb-8`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-serif font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-secondary-text mb-6 leading-relaxed">
                {service.desc}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="w-2 h-2 bg-astro-pink rounded-full mt-2" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={`/${service.id}`}
                className="mt-auto flex items-center justify-between px-6 py-4 rounded-2xl
                bg-gray-50 hover:bg-astro-pink hover:text-white font-bold transition"
              >
                Explore Service
                <ArrowRight size={18} />
              </Link>

            </div>
          ))}

        </div>
      </Section>

      {/* CTA */}
      <Section className="py-24 bg-gray-50 text-center">
        <Star className="mx-auto mb-4 text-astro-pink" />
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="max-w-xl mx-auto text-secondary-text mb-10">
          Get personalized guidance from experienced astrologers.
        </p>
        <Link
          to="/booking"
          className="astro-gradient text-white px-12 py-4 rounded-2xl font-bold shadow-xl"
        >
          Book Consultation
        </Link>
      </Section>

    </PageTransition>
  );
};

const ServiceNav = ({ icon, label, link }) => (
  <Link to={link} className="flex flex-col items-center gap-3 group">
    <div className="w-16 h-16 rounded-2xl bg-astro-pink/10 flex items-center justify-center
      group-hover:bg-astro-pink group-hover:text-white transition">
      {icon}
    </div>
    <span className="text-sm font-semibold">{label}</span>
  </Link>
);

export default Services;

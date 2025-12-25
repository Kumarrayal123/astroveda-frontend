import { useState } from 'react';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { Mail, Phone, MapPin, MessageCircle, Send, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../utils/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/queries', {
                ...formData,
                subject: 'New Website Inquiry' // Default subject since form doesn't have it
            });
            alert('Thank you for reaching out! We will get back to you shortly.');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error sending query:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const contactInfo = [
        { icon: <Phone size={24} />, title: "Call Us", detail: "+91-8890615200", color: "text-astro-pink" },
        { icon: <Mail size={24} />, title: "Email Us", detail: "info@astroveda.com", color: "text-astro-orange" },
        { icon: <MapPin size={24} />, title: "Visit Us", detail: "Shop No:4,Road No:8B,Bandari Layout,Vasanth Nagar Colony,Nizampet, Hyderabad, Ts.", color: "text-astro-yellow" }
    ];

    return (
        <PageTransition>
            {/* Header */}
            <section className="py-20 bg-gray-50/50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-text mb-6">Connect with the <span className="astro-text-gradient">Stars</span></h1>
                    <p className="text-xl text-secondary-text">Have a question or ready to book a consultation? We're here to guide you.</p>
                </div>
            </section>

            {/* Contact Content */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                            {contactInfo.map((info, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center ${info.color}`}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-text">{info.title}</h4>
                                        <p className="text-secondary-text">{info.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Google Maps */}
                        <div className="aspect-video w-full rounded-[32px] overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3804.7183759106624!2d78.381424725168!3d17.520952083389194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dfe00f7d885%3A0xd7018cc7a96678a8!2sPlatinum%20Pleasant%20Apartments!5e0!3m2!1sen!2sin!4v1766380152398!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/918890615200"
                            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-6 rounded-[32px] text-2xl font-bold shadow-xl transition-all hover:scale-[1.02]"
                        >
                            <MessageCircle size={32} />
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-pink-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-astro-pink"><Star size={120} /></div>

                        <h2 className="text-3xl font-serif font-bold text-primary-text mb-8">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-secondary-text mb-2 ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-astro-pink/20 transition-all"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-secondary-text mb-2 ml-4">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="+91 00000 00000"
                                        className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-astro-pink/20 transition-all"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-secondary-text mb-2 ml-4">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-astro-pink/20 transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-secondary-text mb-2 ml-4">Your Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    placeholder="How can we help you today?"
                                    className="w-full px-6 py-5 rounded-[32px] bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-astro-pink/20 transition-all resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full astro-gradient text-white py-6 rounded-full font-bold text-xl shadow-xl flex items-center justify-center gap-3 group"
                            >
                                Send Message <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </Section>
        </PageTransition>
    );
};

export default Contact;

import { useState } from 'react';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { Calendar, Clock, User, Mail, Phone, CreditCard, Globe, IndianRupee, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    paymentType: 'domestic'
  });

  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const timeSlots = [
    { id: '10am', time: '10:00 AM', available: true },
    { id: '12pm', time: '12:00 PM', available: true },
    { id: '7pm', time: '7:00 PM', available: true },
    { id: '9pm', time: '9:00 PM', available: true }
  ];

  const consultationFee = 1120;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSlotSelect = (slotId) => {
    setSelectedSlot(slotId);
    setFormData(prev => ({
      ...prev,
      timeSlot: slotId
    }));
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setFormData(prev => ({
      ...prev,
      date: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    // Here you would integrate with your payment gateway
    alert('Proceeding to payment...');
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-astro-pink/10 via-white to-astro-orange/10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-text mb-4">
              Book Your <span className="astro-text-gradient">Consultation</span>
            </h1>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">
              Schedule a personalized session with our expert astrologer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-serif font-bold text-primary-text mb-6 flex items-center gap-3">
                <User className="text-astro-pink" size={28} />
                Personal Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-astro-pink focus:ring-2 focus:ring-astro-pink/20 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary-text mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-astro-pink focus:ring-2 focus:ring-astro-pink/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-primary-text mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-astro-pink focus:ring-2 focus:ring-astro-pink/20 outline-none transition-all"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-serif font-bold text-primary-text mb-6 flex items-center gap-3">
                <Calendar className="text-astro-orange" size={28} />
                Select Date
              </h2>
              <input
                type="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-astro-orange focus:ring-2 focus:ring-astro-orange/20 outline-none transition-all text-lg"
              />
            </motion.div>

            {/* Time Slot Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-serif font-bold text-primary-text mb-6 flex items-center gap-3">
                <Clock className="text-astro-yellow" size={28} />
                Choose Time Slot
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => handleSlotSelect(slot.id)}
                    disabled={!slot.available}
                    className={`p-4 rounded-2xl border-2 font-bold transition-all ${selectedSlot === slot.id
                        ? 'border-astro-yellow bg-astro-yellow text-white shadow-lg scale-105'
                        : slot.available
                          ? 'border-gray-200 hover:border-astro-yellow hover:bg-astro-yellow/10'
                          : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    <div className="text-lg">{slot.time}</div>
                    {selectedSlot === slot.id && (
                      <CheckCircle2 className="mx-auto mt-2" size={20} />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Payment Type Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-serif font-bold text-primary-text mb-6 flex items-center gap-3">
                <CreditCard className="text-astro-pink" size={28} />
                Payment Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentType: 'domestic' }))}
                  className={`p-6 rounded-2xl border-2 transition-all ${formData.paymentType === 'domestic'
                      ? 'border-astro-pink bg-astro-pink/5 shadow-lg'
                      : 'border-gray-200 hover:border-astro-pink/50'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <IndianRupee className="text-astro-pink" size={32} />
                    {formData.paymentType === 'domestic' && (
                      <CheckCircle2 className="text-astro-pink" size={24} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary-text mb-1">Domestic Payment</h3>
                  <p className="text-sm text-secondary-text">For Indian customers (UPI, Cards, Net Banking)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, paymentType: 'international' }))}
                  className={`p-6 rounded-2xl border-2 transition-all ${formData.paymentType === 'international'
                      ? 'border-astro-orange bg-astro-orange/5 shadow-lg'
                      : 'border-gray-200 hover:border-astro-orange/50'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Globe className="text-astro-orange" size={32} />
                    {formData.paymentType === 'international' && (
                      <CheckCircle2 className="text-astro-orange" size={24} />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-primary-text mb-1">International Payment</h3>
                  <p className="text-sm text-secondary-text">For international customers (PayPal, Stripe)</p>
                </button>
              </div>
            </motion.div>

            {/* Price Summary & Submit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-astro-pink/10 to-astro-orange/10 rounded-3xl p-8 border-2 border-astro-pink/20"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-primary-text">Consultation Fee</h3>
                <div className="text-right">
                  <div className="text-4xl font-bold astro-text-gradient">₹{consultationFee}</div>
                  <p className="text-sm text-secondary-text mt-1">One-time payment</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.name || !formData.email || !formData.phone || !selectedDate || !selectedSlot}
                className="w-full astro-gradient text-white py-4 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                Proceed to Payment
                <ArrowRight size={24} />
              </button>

              <p className="text-center text-sm text-secondary-text mt-4">
                🔒 Secure payment powered by Razorpay / PayPal
              </p>
            </motion.div>
          </form>
        </div>
      </Section>
    </PageTransition>
  );
};

export default Booking;
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Building2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    {
      type: 'Headquarters',
      address: 'Chintamani, Chikkaballapur, Karnataka – 563125',
      icon: Building2
    },
    {
      type: 'Branch Office',
      address: 'KR Puram, Bangalore – 560036',
      icon: MapPin
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bizbooster.com',
      link: 'mailto:info@bizbooster.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 1234567890',
      link: 'tel:+911234567890'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Let's discuss how BizBooster can help transform your business
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-indigo-950 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-900 to-teal-700 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-indigo-950 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-teal-50 transition-all duration-200 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">{info.label}</p>
                          <p className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-950 mb-6">Our Locations</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => {
                    const Icon = location.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-teal-50 border border-indigo-100"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-teal-600 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-teal-600 mb-1">{location.type}</p>
                          <p className="text-gray-700 leading-relaxed">{location.address}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-indigo-950 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Serving clients across multiple markets with local expertise and global standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {['USA', 'Australia', 'India', 'Europe', 'Middle East'].map((region, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-lg font-bold text-indigo-950">{region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

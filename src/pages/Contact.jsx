import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // IMPORTANT: Replace these with your actual EmailJS credentials
  // Sign up at https://www.emailjs.com/ to get your keys
  const EMAILJS_SERVICE_ID = 'sakweperry231@gmail.com';
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'FootballHub Team',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setFormStatus('✅ Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('❌ Failed to send message. Please check your EmailJS configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-emerald-900 to-slate-900 flex items-center justify-center text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              <p className="text-slate-600 text-lg mb-8">
                Have questions, feedback, or want to collaborate? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Visit Us</h3>
                    <p className="text-slate-600">India, Punjab, Patiala, Banur, SVIET</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email Us</h3>
                    <p className="text-slate-600">perrycredo@gmail.com</p>
                    <p className="text-slate-600">dragon231@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Call Us</h3>
                    <p className="text-slate-600">+917837034841</p>
                    <p className="text-slate-600">Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-slate-200 rounded-xl h-64 overflow-hidden">
                <iframe
                  title="Office Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.657847155113!2d76.66985527418313!3d30.530712695370433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc2e25466d5e7%3A0xf0bbb65fa7fca376!2sSwami%20Vivekanand%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1779871280702!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-slate-700 font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-slate-700 font-semibold mb-2">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-slate-700 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-slate-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus && (
                  <p className={`mt-4 text-center text-sm ${formStatus.includes('✅') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
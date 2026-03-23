import { contact, personal } from '../data';
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">{contact.message}</p>
          <div className="space-y-3">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white">
              <Mail size={18} /> {personal.email}
            </a>
            {personal.telegram && (
              <a href={`https://t.me/${personal.telegram.slice(1)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
                <Send size={18} /> Telegram: {personal.telegram}
              </a>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="text-green-400 text-sm">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Try again later.</p>}
        </form>
      </div>
    </section>
  );
}

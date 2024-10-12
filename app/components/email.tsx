"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

export const runtime = 'nodejs';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (res.status === 200) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send email. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 py-6 animate-fadeIn delay-200">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          type="email"
          placeholder="Your Email"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your Message"
          rows={4}
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-purple-600">
          Send Message
        </button>
      </div>
      {status && <p className="text-center text-sm mt-4">{status}</p>}
    </form>
  );
}

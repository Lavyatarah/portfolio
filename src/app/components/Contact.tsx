"use client";
import { useState } from 'react';
import Input from '../components/ui/Input'; // Assuming you have an Input component
import Textarea from '../components/ui/Textarea'; // Assuming you have a Textarea component
import Button from '../components/ui/Button'; // Assuming you have a Button component

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your form submission logic
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Get in Touch</h2>
      {success && <p className="text-green-500 mb-4">Thank you for your message! We will get back to you soon.</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-md p-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default Contact;

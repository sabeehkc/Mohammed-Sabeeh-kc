"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format the WhatsApp message
    const waText = `Hello Sabeeh, my name is ${name} (${email}).%0A%0ASubject: ${subject}%0A%0AMessage: ${message}`;

    // Using a placeholder number; user will replace it with their actual WhatsApp number
    const waNumber = "919778073408";

    const waUrl = `https://wa.me/${waNumber}?text=${waText}`;
    window.open(waUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fname"
              className="block text-xs font-medium text-zinc-400 mb-1.5"
            >
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Jane Smith"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="femail"
              className="block text-xs font-medium text-zinc-400 mb-1.5"
            >
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="femail"
              name="email"
              placeholder="jane@company.com"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="fsubject"
            className="block text-xs font-medium text-zinc-400 mb-1.5"
          >
            Subject
          </label>
          <input
            type="text"
            id="fsubject"
            name="subject"
            placeholder="Project inquiry"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="fmessage"
            className="block text-xs font-medium text-zinc-400 mb-1.5"
          >
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="fmessage"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors"
        >
          Send message &rarr;
        </button>
      </div>
    </form>
  );
}

// src/app/contact/page.tsx
import React from "react";
import { submitContact } from "./action";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Get in Touch with Us!</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>Email:</strong> <a href="mailto:info.kypa@gmail.com" className="text-[#40937e] hover:underline">info.kypa@gmail.com</a></p>
            <p><strong>Phone:</strong> +82-10-2113-2282</p>
            <p><strong>Address:</strong>
              <br />
              Landmark Tower B1F, 308, Gangnam-daero, Gangnam-gu, Seoul, South Korea (06253)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
          <form action={submitContact} className="space-y-6">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div>
              <label htmlFor="contact-name" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
              <input type="text" id="contact-name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Full Name" required />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
              <input type="email" id="contact-email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="your@email.com" required />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-gray-700 text-sm font-bold mb-2">Subject:</label>
              <input type="text" id="contact-subject" name="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Subject of your inquiry" required />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="contact-message" name="message" rows={6} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your message..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-[#52b49b] hover:bg-[#48a58d] text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Location</h2>
        <div className="relative w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.731226019321!2d127.02921677741747!3d37.49066847205834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14fcc62f89d%3A0xc49604c4847a487e!2s308%20Gangnam-daero%2C%20Gangnam%20District%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1749877165026!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KYPA Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

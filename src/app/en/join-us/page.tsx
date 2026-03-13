// src/app/join-us/page.tsx
import Image from "next/image";
import ContactBlock from "@/components/en/ContactBlock";
import React from "react";
import { submitApplication } from "./action";

export default function JoinUsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">Join Our Community!</h1>

      <section className="mb-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Are you a young pickleball enthusiast or eager to learn? Join the Korea Youth Pickleball Association and become part of a vibrant, growing community! Whether you&apos;re a beginner or an experienced player, we have programs and events for everyone.
        </p>
        <Image
          src="/images/join-us-hero.jpg"
          alt="Kids playing pickleball"
          width={800}
          height={450}
          className="rounded-lg shadow-lg mx-auto mb-6"
        />
      </section>

      <section className="py-12 mb-12 rounded-lg shadow-md" style={{ backgroundColor: "#ecf7f3" }}>
        <h2 className="text-3xl font-semibold text-center mb-8">Our Principles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              We believe in creating a welcoming environment for all young players, regardless of their skill level or background.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Sportsmanship</h3>
            <p className="text-gray-600">We promote fair play, respect, and integrity both on and off the pickleball court.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
            <p className="text-gray-600">
              We actively engage with multicultural family centers and hearing-impaired support centers to share the joy of pickleball and give back to the community.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up Today!</h2>

        <form action={submitApplication} className="space-y-4">
          {/* optional anti spam honeypot */}
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="school" className="block text-gray-700 text-sm font-bold mb-2">
              School name and Grade:
            </label>
            <input
              type="text"
              id="school"
              name="school"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g., KIS, 11th Grade"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Why do you want to join?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#52b49b] hover:bg-[#48a58d] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>

      <ContactBlock />
    </div>
  );
}

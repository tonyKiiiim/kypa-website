import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function JustinPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Link href="/about" className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← Back to Team
      </Link>

      {/* Image and Bio Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
        {/* Portrait Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full aspect-[3/4] md:h-[600px] shadow-xl overflow-hidden rounded-lg">
            <Image
              src="/images/member-7.jpg"
              alt="Kevin"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Kevin Seojin Kim</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">Operations & Support Director</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            As a founding member of KYPA, Kevin Seojin Kim has played a key role in the association’s journey from the very beginning. He is currently focused on boosting KYPA’s visibility and introducing pickleball to various schools—international, private, and public—to show that anyone can enjoy this sport. To ensure the association’s smooth operation, he assists in designing and managing a diverse range of programs. Furthermore, Kevin supports incoming members with the onboarding process and encourages active engagement in KYPA’s events, programs, and competitive tournaments.
          </p>
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet Kevin</h3>
        <div className="w-full max-w-4xl mx-auto">
            <video
            controls
            className="w-full h-[500px] object-contian rounded-lg shadow-lg mb-4"
            preload="metadata"
            >
              <source src="/videos/kevin.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-700 leading-relaxed">
            Kevin shares his journey with KYPA and his vision for empowering youth through pickleball.
            </p>
        </div>
      </section>

    </div>
  );
}

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
              src="/images/member-5.jpg"
              alt="Justin"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Justin Nam</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">Community Volunteer Director</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Justin serves as the Community Volunteer Director at the Korea Youth Pickleball Association (KYPA), playing a key role in organizing and leading volunteer efforts that support youth engagement through sports. His dedication helps drive KYPA’s mission to create a positive social impact.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            In this role, Justin coordinates volunteer teams, supports local pickleball events, and fosters a welcoming environment for new participants. He is passionate about using pickleball as a tool to build community, promote inclusion, and empower young people—especially those from underserved backgrounds.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Through his work, KYPA has expanded its volunteer network and strengthened relationships with schools, local organizations, and national partners, contributing to the growing recognition of pickleball as a meaningful youth development initiative.
          </p>
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet Justin</h3>
        <div className="w-full max-w-4xl mx-auto">
            <video
            controls
            className="w-full h-[500px] object-contian rounded-lg shadow-lg mb-4"
            preload="metadata"
            >
              <source src="/videos/justin-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-700 leading-relaxed">
            Justin shares his journey with KYPA and his vision for empowering youth through pickleball.
            </p>
        </div>
      </section>

    </div>
  );
}

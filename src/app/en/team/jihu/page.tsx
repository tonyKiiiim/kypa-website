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
              src="/images/member-6.jpg"
              alt="jihu"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Jihu Koo</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">Outreach & Networking Director</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Jihu is the Outreach and Networking Director of the Korea Youth Pickleball Association (KYPA), leading the expansion and progression of the organization through active communication and outreach. With his activism, leadership, and coordination in support of the organization, he has helped the KYPA become a rapidly flourishing youth-led non-profit.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            As the Outreach and Networking Director, Jihu serves as the bridge between the KYPA and the community. By contacting organizations, communities, and schools, he organizes and plans community event schedules while nurturing an encouraging and welcoming atmosphere for everyone.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Through Jihu’s efforts to make pickleball accessible and approachable to all communities, the KYPA was able to grow and develop alongside diverse communities. He strives to sustain the inclusive nature of the pickleball community, and continue developing meaningful, tight-knit relationships with partners, collaborators, and communities.
          </p>
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet jihu</h3>
        <div className="w-full max-w-4xl mx-auto">
            <video
            controls
            className="w-full h-[500px] object-contian rounded-lg shadow-lg mb-4"
            preload="metadata"
            >
              <source src="/videos/jihu.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-700 leading-relaxed">
                jihu shares his journey with KYPA and his vision for empowering youth through pickleball.
            </p>
        </div>
      </section>

    </div>
  );
}

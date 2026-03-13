// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link'
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Korea Youth Pickleball Association is a non-profit organization established in 2023. The KYPA committed to promoting the sport of Pickleball among the youth aged 7-18 in Korea. We organize tournaments, provide coaching and training, and engage in community outreach programs to spread the love for Pickleball. Our goal is to foster a sense of camaraderie, sportsmanship, and personal development among young individuals. Discover the exciting world of pickleball with the KYPA. Come and experience the thrill of this fast-growing sport!
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Youth Pickleball Tournaments</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          Join our exciting youth Pickleball tournaments and showcase your skills. Compete against other talented players and have a great time on the court. Get ready for some intense matches and unforgettable moments. Information on where and when to be held will be posted in early May every year.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about-1.jpg" 
            alt="KYPA Story"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
          KYPA participated in the World Pickleball Championship held in Andong, South Korea. Check out the live archives of the tournaments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          The Ministry of Economy and Finance of the Republic of Korea has announced the sixteen most impressive and contributing NGOs of 2024. To our honor and joy, KYPA has been chosen as one of the sixteen most socially benefitting NGOs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          KYPA has tirelessly worked to promote pickleball in Korea. The Federation of Pickleball Asia has recognized our efforts and contributions and is declaring KYPA a Federation of Pickleball Asia member.
          </p>
        </div>
        <iframe className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg" src="https://www.youtube.com/embed/VNTC7oaMv64?si=9SXrtU3MIeaiI7Ac"></iframe>

      </section>

      {/* Members Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-1.jpg" alt="Brian" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href="/team/brian" className="hover:underline text-black">Brian</Link>
            </h3>
            <p className="text-[#40937e]">Founder, President</p>
            <p className="text-gray-800 mt-4 text-base leading-relaxed">As the founder of KYPA, Brian leads with a clear vision to build a community-focused sports organization that improves lives, especially for the socially isolated.</p>
          </div>
          {/* Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-2.jpg" alt="Edward" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href="/team/edward" className="hover:underline text-black">Edward</Link>
            </h3>
            <p className="text-[#40937e]">Co-founder, Vice-president</p>
            <p className="text-gray-800 mt-4 text-base">Edward, co-founder and vice-president at Seoul International School, leads efforts to promote pickleball and support underprivileged communities in Korea.</p>
          </div>
          {/* Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-4.jpg" alt="Member Name 4" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href="/team/issac" className="hover:underline text-black">Isaac</Link>
            </h3>
            <p className="text-[#40937e]">Co-founder, Vice-president</p>
            <p className="text-gray-800 mt-4 text-base">Isaac, Co-Founder and Vice President, leads initiatives to make pickleball more accessible, promoting health, community connection, and inclusivity across all ages and backgrounds.</p>
          </div>
          {/* Member 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-3.jpg" alt="Member Name 3" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href="/team/jennie" className="hover:underline text-black">Jennie</Link>
            </h3>
            <p className="text-[#40937e]">Community Outreach Director</p>
            <p className="text-gray-800 mt-4 text-base">Jennie, Community Outreach Director, works to connect the organization with the local community, promoting inclusive pickleball programs that positively impact youth of all backgrounds.</p>
          </div>
          {/* Member 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-5.jpg" alt="Member Name 5" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href="/team/justin" className="hover:underline text-black">Jusin Nam</Link>
            </h3>
            <p className="text-[#40937e]">Community Volunteer Director</p>
            <p className="text-gray-800 mt-4 text-base">Justin builds connections-between students, families, local organizations, and anyone who wants to be a part of this fun, fast-growing sport.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
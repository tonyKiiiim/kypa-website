'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function AboutPage() {

  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'
  const withLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-center mb-10">소개</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">우리의 사명</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          대한청소년피클볼협회(KYPA)는 2023년에 설립된 비영리 단체로, 7세부터 18세까지의 청소년들에게 피클볼을 알리고 확산하는 데 힘쓰고 있습니다. 저희는 청소년 대상의 대회를 개최하고, 전문적인 코칭 및 훈련 프로그램을 운영하며, 지역 사회와 함께하는 다양한 활동을 통해 피클볼의 매력을 전하고 있습니다. KYPA는 청소년들이 스포츠를 통해 협동심, 스포츠 정신, 그리고 개인의 성장을 경험할 수 있도록 돕고자 합니다. 빠르게 성장하고 있는 피클볼의 세계를 함께 경험해보세요! 새로운 즐거움이 여러분을 기다리고 있습니다.

        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">청소년 피클볼 대회</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            대한 유소년 피클볼 협회(KYPA)는 유소년 만이 참여하는 국내 토너먼트를 매년 개최합니다. 개최 장소와 일시는 매년 5월초에 KYPA 홈페이지에 공지 예정입니다.
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
            대한 유소년 피클볼 협회(KYPA)는 2024년 6월 대한민국 안동에서 개최된 세계피클볼 대회에 참여해, 국내외로 피클볼을 알리는데 노력을 다 했습니다!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            대한민국 기획재정부는 2024년도 사회적으로 가장 큰 기여를 하고 있는 공익법인 16곳을 지정 발표했습니다. 대한 유소년 피클볼 협회(KYPA)는 영광스럽게도 이 16개 단체 중 한 단체로 인정되었음을 공지합니다. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            대한 유소년 피클볼 협회(KYPA)의 피클볼 활성화를 위한 노력을 인정하여, 아시아 피클볼 연합은 KYPA를 연합의 공식 멤버로 인정할것을 예정고지했습니다.
          </p>
        </div>
        <iframe className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg" src="https://www.youtube.com/embed/VNTC7oaMv64?si=9SXrtU3MIeaiI7Ac"></iframe>

      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-1.jpg" alt="Brian" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href={withLocale('/team/brian')} className="hover:underline text-black">Brian</Link>
            </h3>
            <p className="text-[#40937e]">창립자 및 회장</p>
            <p className="text-gray-800 mt-4 text-base">KYPA의 창립자로서 Brian은 특히 사회적으로 고립된 이들의 삶의 질을 향상시키기 위해, 공동체 중심의 스포츠 조직을 구축하겠다는 분명한 비전을 바탕으로 조직을 이끌고 있습니다.</p>
          </div>
          {/* Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-2.jpg" alt="Edward" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href={withLocale('/team/edward')} className="hover:underline text-black">Edward</Link>
            </h3>
            <p className="text-[#40937e]">공동창립자 및 부회장</p>
            <p className="text-gray-800 mt-4 text-base">Edward는 공동창립자이자 부회장으로서, 한국에서 피클볼을 활성화하고 소외된 지역사회를 지원하는 활동을 이끌고 있습니다.</p>
          </div>
          {/* Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-4.jpg" alt="Member Name 4" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href={withLocale('/team/issac')} className="hover:underline text-black">Isaac</Link>
            </h3>
            <p className="text-[#40937e]">공동설립자 및 부회장</p>
            <p className="text-gray-800 mt-4 text-base">Isaac은 공동 창립자이자 부대표로서, 모든 연령과 배경의 사람들이 건강을 증진하고 공동체와 연결되며 포용성을 느낄 수 있도록 피클볼의 접근성을 높이는 다양한 이니셔티브를 주도하고 있습니다.</p>
          </div>
          {/* Member 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-3.jpg" alt="Member Name 3" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href={withLocale('/team/jennie')} className="hover:underline text-black">Jennie</Link>
            </h3>
            <p className="text-[#40937e]">커뮤니티 아웃리치 디렉터</p>
            <p className="text-gray-800 mt-4 text-base">Jennie는 커뮤니티 아웃리치 디렉터로서, 지역사회와 조직을 연결하고 모든 배경의 청소년들에게 긍정적인 영향을 주는 포용적인 피클볼 프로그램을 활성화하는 데 힘쓰고 있습니다.</p>
          </div>
          {/* Member 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-5.jpg" alt="Member Name 4" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">
              <Link href={withLocale('/team/justin')} className="hover:underline text-black">Justin Nam</Link>
            </h3>
            <p className="text-[#40937e]">커뮤니티 자원봉사 디렉터</p>
            <p className="text-gray-800 mt-4 text-base">Justin은 학생, 가족, 지역 단체 등 피클볼이라는 재미있고 빠르게 성장하는 스포츠에 함께하고자 하는 모든 사람들과의 연결 고리를 만들어갑니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
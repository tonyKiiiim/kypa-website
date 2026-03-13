'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function EdwardPage() {

  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'
  const withLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <div className="container mx-auto py-12 px-4">
      <Link href={withLocale('/about')} className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← 돌아가기
      </Link>

      {/* Image and Bio Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
        {/* Portrait Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full aspect-[3/4] md:h-[600px] shadow-xl overflow-hidden rounded-lg">
            <Image
              src="/images/member-2.jpg"
              alt="Edward"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Edward</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">공동창립자 및 부회장</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Edward는 대한유소년피클볼협회(KYPA)의 공동 창립자이자 부회장으로, 피클볼을 널리 알리고 한국 전역의 지역 사회와의 유대를 강화하는 KYPA의 사명을 실현하는 데 핵심적인 역할을 하고 있습니다. 그는 사회적 영향에 대한 깊은 헌신을 바탕으로 커뮤니티 아웃리치 팀과 자원봉사 팀을 총괄하며, 지역 사회와의 교류를 활발히 이끌고 소외된 청소년들을 위한 다양한 자원봉사 활동을 통해 실질적인 지원을 제공합니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Edward는 헌신적인 리더십을 통해 KYPA의 전략적 성장과 영향력 확대를 주도하며, 조직이 청소년 성장과 사회적 포용을 선도하는 힘으로 자리 잡을 수 있도록 이끌고 있습니다. 그의 노력은 피클볼을 모두에게 열려 있는 스포츠로 알리는 데 그치지 않고, 젊은 세대가 자신감을 키우고, 역량을 개발하며, 코트를 넘어서는 유대감을 형성할 수 있는 따뜻한 환경을 조성하는 데 큰 기여를 하고 있습니다.
          </p>
      </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">자기소개 영상</h3>
        <div className="w-full max-w-4xl mx-auto">
          <video
            controls
            className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-4"
            preload="metadata"
          >
            <source src="/videos/edward-intro.mp4" type="video/mp4" />
            브라우저가 동영상 태그를 호환하지 않습니다.
          </video>
          <p className="text-md text-gray-700 leading-relaxed">
            자원봉사의 가치를 전파하고, 소외된 청소년들이 피클볼에 쉽게 접근할 수 있도록 기회를 넓혀가고 있습니다.
          </p>
        </div>
      </section>


    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function JenniePage() {

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
              src="/images/member-3.jpg"
              alt="Jennie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Jennie</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">커뮤니티 아웃리치 디렉터</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Jennie는 KYPA의 지역 사회 참여 활동을 이끌며, 조직의 프로그램이 실질적이고 긍정적인 영향을 지속적으로 줄 수 있도록 의미 있는 연결을 만들어 갑니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            그녀는 다양한 배경을 가진 청소년들이 피클볼을 쉽게 접하고 즐길 수 있도록 돕는 데 깊은 헌신을 가지고 있으며, 모두가 편안하게 참여할 수 있는 포용적인 환경을 조성하는 데 힘쓰고 있습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Jennie는 이러한 헌신과 리더십을 통해 커뮤니티 구축과 사회적 연대를 실현하려는 KYPA의 사명을 강화하는 데 중요한 역할을 하고 있으며, 스포츠를 연결과 성장의 강력한 도구로 활용하고 있습니다.
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
            <source src="/videos/jennie-intro.mp4" type="video/mp4" />
            브라우저가 동영상 태그를 호환하지 않습니다.
          </video>
          <p className="text-md text-gray-700 leading-relaxed">
            KYPA의 커뮤니티 구축 활동을 이끌며, 모든 청소년이 피클볼을 편안하게 즐길 수 있는 환영받는 환경을 만드는 데 힘쓰고 있습니다.
          </p>
        </div>
      </section>


    </div>
  );
}

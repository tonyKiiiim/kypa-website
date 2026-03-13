'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function JustinPage() {

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
          <h2 className="text-2xl text-[#40937e] mb-6">커뮤니티 자원봉사 디렉터</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Justin은 한국청소년피클볼협회(KYPA)에서 커뮤니티 자원봉사 디렉터로 활동하며, 청소년 참여를 지원하는 다양한 자원봉사 활동을 기획하고 이끌고 있습니다. 그의 헌신은 KYPA가 스포츠를 통해 긍정적인 사회적 영향을 실현하는 데 큰 기여를 하고 있습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            이 역할을 통해 Justin은 자원봉사 팀을 조직하고, 지역 피클볼 행사를 지원하며, 새로운 참가자들이 환영받는 환경을 조성하는 데 힘쓰고 있습니다. 그는 특히 소외된 청소년들이 스포츠를 통해 자신감을 얻고 사회와 연결될 수 있도록 돕는 데 깊은 열정을 가지고 있습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            그의 활동을 통해 KYPA는 자원봉사 네트워크를 확대하고, 학교 및 지역 단체, 그리고 전국적인 파트너들과의 협력 관계를 강화함으로써 피클볼이 청소년 성장과 사회적 포용의 수단으로 더욱 인정받는 데 기여하고 있습니다.
          </p>
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">자기소개 영상</h3>
        <div className="w-full max-w-4xl mx-auto">
            <video
            controls
            className="w-full h-[500px] object-contain rounded-lg shadow-lg mb-4"
            preload="metadata"
            >
              <source src="/videos/justin-intro.mp4" type="video/mp4" />
              브라우저가 동영상 태그를 호환하지 않습니다.
            </video>
            <p className="text-md text-gray-700 leading-relaxed">
            KYPA와 함께한 여정과 피클볼을 통해 청소년들에게 힘을 실어주고자 하는 자신의 비전을 공유합니다.
            </p>
        </div>
      </section>

    </div>
  );
}

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
          <h2 className="text-2xl text-[#40937e] mb-6">아웃리치 & 네트워킹 디렉터</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            지후는 한국청소년피클볼협회(KYPA)의 Outreach & Networking Director 로서, 적극적인 소통과 대외 활동을 통해 조직의 확장과 발전을 이끌고 있습니다. 활동성, 리더십, 그리고 조직을 지원하는 조율 능력을 바탕으로 KYPA가 빠르게 성장하는 청소년 주도 비영리 단체로 자리잡는 데 기여했습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            지후는 Outreach & Networking Director 로서 KYPA와 지역사회를 연결하는 가교 역할을 합니다. 다양한 기관, 커뮤니티, 학교와의 협력을 통해 커뮤니티 행사 일정을 기획하고 운영하며, 누구나 참여할 수 있는 긍정적이고 환영하는 분위기를 조성하고 있습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            지후의 노력으로 피클볼을 모든 커뮤니티가 쉽게 접하고 즐길 수 있도록 하였으며, 그 결과 KYPA는 다양한 커뮤니티와 함께 성장하고 발전할 수 있었습니다. 피클볼 커뮤니티의 포용적인 가치를 지속적으로 유지하고, 파트너 및 협력 기관, 지역사회와 의미 있고 긴밀한 관계를 계속해서 발전시키고자 합니다.
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
              <source src="/videos/jihu.mp4" type="video/mp4" />
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

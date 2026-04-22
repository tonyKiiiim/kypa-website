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
              src="/images/member-7.jpeg"
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
          <h2 className="text-2xl text-[#40937e] mb-6">오퍼레이션 디렉터</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            대한민국 유소년 피클볼 협회(KYPA)의 창립 멤버인 케빈(서진) 김은 KYPA의 출발에서 지금까지 창단 멤버들과 함께 중추적인 역할을 맡아 왔습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            케빈(서진)은 현재도 국제학교와 사립 및 공립학교, 특수 학교 등 다양한 교육 현장에 피클볼을 소개하며, 남녀노소 누구나 즐길 수 있는 스포츠로서의 피클볼을 알리고, KYPA 협회의 인지도를 높이기 위해 노력하고 있습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            또한 피클볼 유소년 플레이어들을 위한 다채로운 프로그램을 만들고자 노력합니다. 더불어 신규 회원들- 어린이부터 고등학생에 이르기까지 KYPA에 잘 적응할 수 있도록 온보딩(onboarding) 과정을 지원하며, KYPA가 주최하는 다양한 행사와 프로그램, 그리고 크고 작은 토너먼트 대회에 회원들이 적극적으로 참여할 수 있도록 안내합니다.
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
              <source src="/videos/kevin.mp4" type="video/mp4" />
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

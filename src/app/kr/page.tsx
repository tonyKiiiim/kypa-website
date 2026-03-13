'use client';

// src/app/page.tsx
import Image from 'next/image'; 
import Link from 'next/link';
import ImageCarousel from '@/components/kr/ImageCarousel';
import ContactBlock from '@/components/kr/ContactBlock';
import React from 'react'; 
import { usePathname } from 'next/navigation';


export default function HomePage() {
  const carouselImages = [
    { src: '/images/carousel-1.jpg', alt: 'image1' },
    { src: '/images/carousel-2.jpg', alt: 'image2' },
    { src: '/images/carousel-3.jpg', alt: 'image3' },
    { src: '/images/carousel-4.JPG', alt: 'image4' },
    { src: '/images/carousel-5.JPG', alt: 'image5' },
    { src: '/images/carousel-6.JPG', alt: 'image6' },
    { src: '/images/carousel-7.jpg', alt: 'image7' },
    { src: '/images/carousel-8.jpg', alt: 'image8' },
    { src: '/images/carousel-9.jpg', alt: 'image9' },
    { src: '/images/carousel-10.jpg', alt: 'image10' },
  ];

  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'
  const withLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-white text-center">
        <Image
          src="/images/carousel-1.jpg" 
          alt="Youth Pickleball Players"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="z-10 bg-white p-4 md:p-8 rounded-lg mx-4 shadow-lg max-w-2xl w-full">
          <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 md:mb-4">
            대한 유소년 피클볼 협회
          </h1>
          <p className="text-black text-base sm:text-xl md:text-2xl mb-6 md:mb-8">
            피클볼을 통해 어린이와 청소년을 더 건강하게!
          </p>
          <Link href={withLocale('/join-us')} className="bg-[#52b49b] hover:bg-[#48a58d] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg transition duration-300">
            지금 가입하기 →
          </Link>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">KYPA 소개</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          대한 유소년 피클볼 협회(KYPA)는 2023년, 대한민국에 피클볼을 더 널리 알리고자 설립되었습니다. KYPA는 국내 경기 기획 및 운영, 피클볼 코칭, 소외계층을 위한 피클볼 교육 봉사를 주요 사업으로 하고 있습니다. KYPA 멤버가 되는 조건은 단 하나, 대한민국 7-18세의 유소년이면 됩니다. 피클볼을 통해 몸과 마음을 건강하게, 그리고 우리 사회를 더 건강하게 만들어 주세요!
        </p>
        <div className="text-center mt-6">
          <Link href={withLocale('/about')} className="text-[#40937e] hover:underline text-xl">
            더 알아보기 &#x2192;
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">최근 소식</h2>
          <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all p-4">
          <img 
            src="/images/banner_image.JPG" 
            alt="" 
            className="rounded-lg shadow-md w-full mb-12 object-cover object-top max-h-96"
          />
          <div className="mt-4">
            <Link href={withLocale('/news/paddles-without-borders-korea-nigeria-pickleball-festival')}>
              <h3 className="text-lg font-semibold text-black hover:underline cursor-pointer">
                제1회 &quot;국경 없는 패들&quot;: 한국 x 나이지리아 피클볼 우정 축제
              </h3>
            </Link>
            <p className="text-sm text-gray-500">August 1, 2025</p>
            <p className="mt-2 text-sm text-gray-700 line-clamp-3">
              제1회 &quot;국경 없는 패들&quot; 페스티벌은 한국과 나이지리아가 함께한 피클볼을 통한 우정과 문화 교류의 축제였습니다.
            </p>
            <Link
              href={withLocale('/news/paddles-without-borders-korea-nigeria-pickleball-festival')}
              className="inline-block mt-4 text-[#40937e] hover:underline text-sm"
            >
              Read More →
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all p-4">
          <img 
            src="/images/fall-international-pickleball-festival/poster_kr.jpg" 
            alt="" 
            className="rounded-lg shadow-md w-full mb-12 object-cover object-top max-h-96"
          />
          <div className="mt-4">
            <Link href={withLocale('/news/fall-international-pickleball-festival')}>
              <h3 className="text-lg font-semibold text-black hover:underline cursor-pointer">
                FALL 선수 초청 피클볼 페스타
              </h3>
            </Link>
            <p className="text-sm text-gray-500">November 5, 2025</p>
            <p className="mt-2 text-sm text-gray-700 line-clamp-3">
              11월 22~23일 서울·경기에서 국제 선수초청 피클볼페스타가 열리며, 참가 접수는 11월 2~17일 진행됩니다.
            </p>
            <Link
              href={withLocale('/news/fall-international-pickleball-festival')}
              className="inline-block mt-4 text-[#40937e] hover:underline text-sm"
            >
              Read More →
            </Link>
          </div>
        </div>
          </div>
      </div>
      
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">우리의 프로그램</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">청소년 대회</h3>
              <p className="text-gray-600">
                모든 실력의 청소년들이 참가할 수 있는 흥미진진한 대회
              </p>
            </div>
            {/* Program 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">코칭 & 훈련</h3>
              <p className="text-gray-600">
                기술과 전략 향상을 위한 전문적인 지도
              </p>
            </div>
            {/* Program 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">지역 사회 봉사</h3>
              <p className="text-gray-600">
                학교 및 지역 사회에 피클볼을 알리는 활동
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">갤러리</h2>
        <ImageCarousel images={carouselImages} />
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">스폰서</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/images/sponsor-logo.jpg" alt="Sponsor" width={500} height={300} className="object-contain" />
        </div>
      </section>

      <ContactBlock />
    </div>
  );
}

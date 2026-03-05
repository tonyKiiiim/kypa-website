// src/app/join-us/page.tsx
import Image from 'next/image';
import ContactBlock from '@/components/kr/ContactBlock';
import React from 'react';
import { submitApplication } from './action';

export default function JoinUsPage() {

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">대한유소년피클볼협회에 가입하세요!</h1>

      <section className="mb-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          피클볼을 좋아하거나 배우고 싶으신가요? 대한유소년피클볼협회에 가입하여 활기차고 성장하는 커뮤니티의 일원이 되세요! 초보자든 경험 많은 선수든 누구에게나 프로그램과 이벤트를 제공합니다.
        </p>
        <Image
          src="/images/join-us-hero.jpg"
          alt="Kids playing pickleball"
          width={800}
          height={450}
          className="rounded-lg shadow-lg mx-auto mb-6"
        />
      </section>

      {/* Principles Section */}
      <section className="py-12 mb-12 rounded-lg shadow-md" style={{ backgroundColor: '#ecf7f3' }}>
        <h2 className="text-3xl font-semibold text-center mb-8">운영 철학</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">포용성</h3>
            <p className="text-gray-600">우리는 모든 젊은 선수들이 기술 수준이나 배경에 상관없이 환영받을 수 있는 환경을 조성할 것이라고 믿습니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">스포츠맨십</h3>
            <p className="text-gray-600">우리는 피클볼 코트 안팎에서 공정한 플레이, 존중, 그리고 청렴성을 증진합니다.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-2">커뮤니티 참여</h3>
            <p className="text-gray-600">우리는 피클볼의 기쁨을 나누고 지역사회에 환원하기 위해 다문화가족센터 및 청각장애인 지원센터와 적극적으로 협력하고 있습니다.</p>
          </div>
        </div>
      </section>

      {/* Join Form (Placeholder) */}
      <section className="mb-12 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">지금 바로 참여하세요!</h2>
        <form action={submitApplication} className="space-y-4">
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">이름: </label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="이름" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">이메일: </label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="honggildong@email.com" required />
          </div>
          <div>
            <label htmlFor="school" className="block text-gray-700 text-sm font-bold mb-2">학교와 학년:</label>
            <input type="text" id="school" name="school" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="예) KIS, 11학년" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">가입 동기: </label>
            <textarea id="message" name="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="피클볼을 너무 좋아합니다!"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[#52b49b] hover:bg-[#48a58d] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
              제출하기
            </button>
          </div>
        </form>
      </section>

      <ContactBlock />
    </div>
  );
}

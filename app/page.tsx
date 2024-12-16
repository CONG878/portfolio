import Link from 'next/link'
import Image from 'next/image'
import './styles/home.css'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="galaxy-bg"></div>
        </div>
        <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            function 개발자(데이터, 방정식) &#123;
            <br />
            return "쾌적한 사용자 경험";
            <br />
            &#125;
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            물리학과 항공우주공학을 전공하여 수학적 이해력과 제반 지식을 갖추었습니다.
            <br />
            지식 탐구를 즐기는 프론트엔드 개발자로서, 과학 지식이 필요한 데이터를 편안하게 제공하겠습니다.
          </p>
          <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg">
            포트폴리오 보기
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          { name: '생태계 실험실', image: '/ecodynamics-lab.png', link: '/projects/ecodynamics-lab', keywords: ['모의실험', '미분방정식', '웹차트', '친환경'] },
          { name: 'NoViral', image: '/noviral.png', link: '/projects/noviral', keywords: ['팀프로젝트', '정보공유', '커뮤니티'] },
          { name: 'OpenMarket', image: '/openmarket.png', link: '/projects/openmarket', keywords: ['전자상거래'] },
        ].map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
            <Image src={project.image} alt={project.name} width={300} height={200} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.keywords.map((keyword) => (
                  <span key={keyword} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{keyword}</span>
                ))}
              </div>
              <Link href={project.link} className="text-blue-600 hover:underline">
                자세히 보기
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

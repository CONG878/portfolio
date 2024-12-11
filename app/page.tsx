import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          function 개발자(데이터, 방정식) &#123;
          <br />
          return 서비스; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <br />
          &#125; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </h1>
        <p className="text-xl mb-8">
          물리학과 항공우주공학을 전공하여 수학적 이해력과 제반 지식을 갖추었습니다.
          <br />
          지식 탐구를 즐기는 프론트엔드 개발자로서, 과학 지식이 필요한 데이터를 편안하게 제공하겠습니다.
        </p>
        <Link href="/projects" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          포트폴리오 보기
        </Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: '생태계 실험실', image: '/ecosystem-lab.jpg', link: '/projects/ecosystem-lab' },
          { name: 'NoViral', image: '/noviral.jpg', link: '/projects/noviral' },
          { name: 'OpenMarket', image: '/openmarket.jpg', link: '/projects/openmarket' },
          { name: 'SciViz', image: '/sciviz.jpg', link: '/projects/sciviz' },
        ].map((project) => (
          <div key={project.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.name} width={300} height={200} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
              <Link href={project.link} className="text-blue-500 hover:underline">
                자세히 보기
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    name: '생태계 실험실',
    description: '생태계 모의 실험을 위한 웹 애플리케이션',
    image: '/ecosystem-lab.jpg',
    link: '/projects/ecosystem-lab',
    technologies: ['Svelte', 'Firebase', 'Chart.js'],
  },
  {
    name: 'NoViral',
    description: '바이럴 마케팅 없는 상품 정보 공유 플랫폼',
    image: '/noviral.jpg',
    link: '/projects/noviral',
    technologies: ['React', 'Vite', 'JIRA'],
  },
  {
    name: 'OpenMarket',
    description: '기본적인 전자상거래 플랫폼',
    image: '/openmarket.jpg',
    link: '/projects/openmarket',
    technologies: ['React', 'API Integration'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">프로젝트</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}
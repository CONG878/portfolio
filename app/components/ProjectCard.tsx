import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  name: string
  description: string
  image: string
  link: string
  technologies: string[]
}

export default function ProjectCard({ name, description, image, link, technologies }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={name} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <Link href={link} className="text-blue-500 hover:underline">
          프로젝트 상세 보기
        </Link>
      </div>
    </div>
  )
}
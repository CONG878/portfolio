import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold">
              CONG878
            </Link>
          </li>
          <li className="flex space-x-4">
            <Link href="/" className="hover:text-blue-500">홈</Link>
            <Link href="/projects" className="hover:text-blue-500">프로젝트</Link>
            <Link href="/skills" className="hover:text-blue-500">기술 스택</Link>
            <Link href="/contact" className="hover:text-blue-500">연락처</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Frontend 콩팔칠팔. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/CONG878" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href="mailto:denaltema@gmail.com">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
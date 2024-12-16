import Link from 'next/link'
import { ExternalLink, Code, MessageCircle, Info } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import './noviral.css'

export default function NoViral() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="noviral-hero mb-12 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">NoViral</h1>
        <p className="text-xl mb-6">
          바이럴 마케팅 없는 상품 정보 공유 플랫폼
        </p>
        <div className="flex justify-center gap-4">
          <Button className="noviral-button" asChild>
            <Link href="https://noviral.vercel.app/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" className="noviral-button-outline" asChild>
            <Link href="https://github.com/Peace1128/NoViral" target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-4 w-4" />
              소스 코드
            </Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'JIRA'].map((tech) => (
            <span key={tech} className="noviral-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* My Role & Contributions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">담당 역할</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="noviral-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 h-5 w-5" />
                상품 상세 정보
              </CardTitle>
              <CardDescription>
                제품 정보와 사양을 직관적으로 표시하는 페이지 개발
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>상품 정보 레이아웃 구현</li>
                <li>상품 이미지 갤러리 구현</li>
                <li>상품 스펙 비교 기능 구현</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="noviral-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                상품 토론
              </CardTitle>
              <CardDescription>
                사용자 간 상품 관련 토론을 위한 페이지 개발
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>토론 스레드 구조 설계</li>
                <li>댓글 작성 및 수정 기능</li>
                <li>토론 정렬 및 필터링 구현</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Critical Contribution */}
      <section className="mb-12">
        <Card className="noviral-card-highlight">
          <CardHeader>
            <CardTitle>긴급 기술 지원</CardTitle>
            <CardDescription>
              프로젝트 발표 직전 핵심 기능 구현
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                발표 1시간 30분 전, 메인 페이지의 상품 ID와 URL 연동 문제 해결을 위한 긴급 지원을 수행했습니다.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">해결 내용</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>상품 ID와 URL 파라미터 연동 구현</li>
                  <li>상품 이미지 레이아웃 최적화</li>
                  <li>발표 전 성공적 배포 완료</li>
                </ul>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>진행 시각:</span>
                <Badge variant="outline">09:04 - 10:17</Badge>
                <span>발표 시각:</span>
                <Badge variant="outline">10:40</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Project Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">프로젝트 개요</h2>
        <Card className="noviral-card">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">목적</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>광고나 뒷광고 없이 신뢰할 수 있는 제품 정보 제공</li>
                  <li>소비자 중심의 상품 정보 공유 커뮤니티 구축</li>
                  <li>제품 검색 및 비교 시간 단축</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">주요 기능</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>상품 카테고리별 순위 표시</li>
                  <li>사용자 토론을 통한 상품 평가</li>
                  <li>실시간 가격 정보 및 중고거래가 표시</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  )
}

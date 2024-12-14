import Link from 'next/link'
import { ExternalLink, Code, ShoppingCart, AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import './openmarket.css'

export default function OpenMarket() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="market-hero mb-12 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">OpenMarket</h1>
        <p className="text-xl mb-6">
          React와 REST API를 활용한 전자상거래 플랫폼
        </p>
        <div className="flex justify-center gap-4">
          <Button className="market-button" asChild>
            <Link href="https://cong878.github.io/OpenMarket/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button variant="outline" className="market-button-outline" asChild>
            <Link href="https://github.com/CONG878/OpenMarket" target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-4 w-4" />
              소스 코드
            </Link>
          </Button>
        </div>
      </section>

      {/* Demo Account Info */}
      <Alert className="mb-8">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          데모 계정: buyer1, buyer2, buyer3 (비밀번호: weniv1234)
        </AlertDescription>
      </Alert>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">기술 스택</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'REST API', 'LocalStorage', 'CSS Module'].map((tech) => (
            <span key={tech} className="market-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* Implemented Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">구현된 기능</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="market-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                상품 목록 및 상세
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>그리드 형식의 상품 목록 표시</li>
                <li>반응형 레이아웃 구현</li>
                <li>상품 상세 정보 조회</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="market-card">
            <CardHeader>
              <CardTitle>장바구니 기능</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>장바구니 상품 추가/삭제</li>
                <li>수량 조절 기능</li>
                <li>LocalStorage를 활용한 데이터 유지</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="market-card">
            <CardHeader>
              <CardTitle>사용자 인증</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>로그인 상태 관리</li>
                <li>토큰 기반 인증 구현</li>
                <li>보안된 API 요청 처리</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="market-card">
            <CardHeader>
              <CardTitle>API 연동</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>RESTful API 통신</li>
                <li>데이터 페치 및 캐싱</li>
                <li>에러 핸들링</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Planned Improvements */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">개선 계획</h2>
        <Card className="market-card">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">코드 최적화</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>fetch().then() 구문을 async/await로 전환</li>
                  <li>반복적 재방문 페이지 캐싱 도입</li>
                  <li>컴포넌트 구조 리팩토링</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">성능 개선</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>이미지 최적화</li>
                  <li>상태 관리 효율화</li>
                  <li>API 요청 최적화</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Attribution */}
      <section>
        <Card className="market-card-secondary">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground text-center">
              이 프로젝트의 API와 디자인 에셋은 WeNiv(위니브)에서 제공한 교육 자료를 기반으로 합니다.
            </p>
          </CardContent>
        </Card>
      </section>
    </article>
  )
}

import Link from 'next/link'
import { ExternalLink, Code } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import './ecodynamics-lab.css'

export default function EcodynamicsLab() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <section className="eco-hero mb-12 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">생태계 실험실</h1>
        <p className="text-xl mb-6">
          포식자-피식자 생존작용을 직접 시뮬레이션하고 관찰하는 웹 플랫폼
        </p>
        <div className="flex justify-center gap-4">
          <Button className="eco-button" asChild>
            <Link href="https://ecodynamicslab.web.app/#/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              실험실 입장하기
            </Link>
          </Button>
          <Button variant="outline" className="eco-button-outline" asChild>
            <Link href="https://github.com/CONG878/EcoDynamicsLab" target="_blank" rel="noopener noreferrer">
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
          {['Svelte', 'Firebase', 'Chart.js', 'Firestore', 'Cloud Functions'].map((tech) => (
            <span key={tech} className="eco-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* Project Overview */}
      <section className="mb-12">
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="eco-card-title">프로젝트 개요</CardTitle>
            <CardDescription>
              생태계에서 이루어지는 포식자-피식자 상호작용을 이해하고 시각화하기 위한 웹 기반 플랫폼입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="eco-card-content">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">배경</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>생태계의 포식자-피식자 상호작용을 표현하기 어려움</li>
                  <li>로지스틱 방정식과 Lotka-Volterra 방정식의 한계</li>
                  <li>사용자 친화적인 생태계 시뮬레이션 플랫폼의 부재</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">목적</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>미분방정식을 활용한 포식자-피식자 역학 모델링</li>
                  <li>사용자가 직접 조정 가능한 생태계 시뮬레이션 제공</li>
                  <li>직관적인 인터페이스를 통한 생태계 이해도 향상</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">주요 기능</h2>
        <div className="eco-grid">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="eco-card-title">생태계 모델링</CardTitle>
              <CardDescription>
                피식자, 하위 포식자, 상위 포식자의 초기 조건과 특성을 설정
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="eco-card-title">실시간 시뮬레이션</CardTitle>
              <CardDescription>
                미분 방정식을 통한 개체수 변화 실시간 계산 및 표시
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="eco-card-title">데이터 시각화</CardTitle>
              <CardDescription>
                Chart.js를 활용한 직관적인 그래프로 결과 표현
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="eco-card-title">실험 저장 및 공유</CardTitle>
              <CardDescription>
                Firebase를 통한 실험 결과 저장 및 공유 기능
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">구현 세부사항</h2>
        <div className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="eco-card-title">반응형 디자인</CardTitle>
            </CardHeader>
            <CardContent className="eco-card-content">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>모바일: 수직 레이아웃 (기본 정보 → 동물 특성 → 차트)</li>
                <li>태블릿 (640px+): 2단 레이아웃</li>
                <li>데스크톱 (1600px+): 3단 레이아웃 with sticky 차트</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="eco-card-title">Firebase 통합</CardTitle>
            </CardHeader>
            <CardContent className="eco-card-content">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Firestore: 실험 데이터 및 매개변수 저장</li>
                <li>Cloud Functions: 미분 방정식 계산 처리</li>
                <li>Hosting: 웹 애플리케이션 배포</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results and Impact */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">프로젝트 성과</h2>
        <Card className="eco-card">
          <CardContent className="eco-card-content pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">사용자 그룹별 영향</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>비전문가: 생태계 역학에 대한 직관적 이해 향상</li>
                  <li>전문가: 다양한 생태계 시나리오 시뮬레이션 및 분석 가능</li>
                  <li>교육자: 학생들에게 생태계 개념을 효과적으로 전달</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">확장 가능성</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>추가 생태계 모델 및 시나리오 구현</li>
                  <li>교육용 게임 및 퀴즈 기능 추가</li>
                  <li>사용자 커뮤니티 기능 확장</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </article>
  )
}

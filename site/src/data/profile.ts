export const profile = {
  name: '김치운',
  nameEn: 'Kim Chiun',
  role: 'QA Engineer',
  headline: '품질을 설계하는 QA Engineer',
  tagline: '오류를 넘기는 사람이 아니라, 원인을 따라가 품질 체계를 만드는 사람.',
  years: '경력 4년',
  summary:
    'Web3 지갑·암호화폐 거래소·디지털 트윈 SaaS·AI 서비스에서 기능 검증부터 자동화, 성능, 운영 모니터링, QA 프로세스 구축까지 경험했습니다. 요구와 경계 조건을 먼저 보고, 반복되는 영역은 자동화하며, 결함·운영 데이터로 다음 리스크를 줄이는 체계를 만드는 데 강점이 있습니다.',
  contact: {
    email: 'rlacldns1123@naver.com',
    phone: '+82 10-9975-3452',
    phoneHref: '+821099753452',
    location: '경기도 군포시',
  },
  experience: [
    {
      period: '2025.09 — Ing',
      company: '안랩 블록체인 컴퍼니',
      companyEn: 'AhnLab Blockchain Company',
      role: 'QA Engineer',
      focus: 'Klip Flutter 전환 QA · ABC WaaS · 전사 테스트 매니지먼트 시스템(TMS)',
      products: 'Klip · ABC WaaS',
      bullets: [
        'Klip Native→Flutter 전환 QA — 전략·일정, 테스트 엔지니어 2명 분배·리뷰, 약 2,500개 TC 운영',
        'AI 기반 테스트케이스 생성·온보딩으로 문서 작업·러닝커브 단축',
        'Klip 핵심 플로우·Secure SDK 검증 — 스모크 리드타임 6.2h→3.1h (−50%)',
        'Appium 자동화 커버리지 0%→28%, ABC WaaS 멀티체인 API 사전 결함 21건 차단',
        '전사 테스트 매니지먼트 시스템(TMS) — 케이스/플랜/런 개발·배포 (React·Electron·Node.js)',
      ],
    },
    {
      period: '2024.11 — 2025.09',
      company: '3i Inc.',
      companyEn: null,
      role: 'QA Engineer',
      focus: '디지털 트윈 QA 체계 구축 · 문서화·자동화 도입',
      products: 'Beamo · Pivo Tour',
      bullets: [
        '릴리즈·VOC 체계화 — 재현 62%→88%, 평균 해결 36h→18h',
        '표준 시나리오·케이스 780건 구축, 핵심 커버리지 92%',
        '권한 미스매치 유출 −38%, Pivo SLA 종결율 72%→91%',
        '삼성 SSV QA — 요구·호환·성능 검증으로 사전 결함 18건 차단',
      ],
    },
    {
      period: '2023.11 — 2024.09',
      company: '불마켓랩스',
      companyEn: 'Bullmarketlabs',
      role: 'QA Engineer',
      focus: '암호화폐 거래소 IMBX QA',
      products: 'Imbx.io',
      bullets: [
        '회귀 자동화(1일 2회) + 거래 시나리오 24×7 모니터링 구축',
        'MM 지갑 frozen 이슈 규명·검증 — 재현율 12.4%→0%, 모니터링 일 4시간→30분 이하',
        'TC 2,000건 정비, Locust 부하로 병목 식별',
        '배포 전 품질 게이트(크리티컬 0) · 데일리 점검·주간 리포트 운영',
      ],
    },
    {
      period: '2022.11 — 2023.11',
      company: '칠로엔',
      companyEn: 'Chilloen',
      role: 'QA Engineer · Scrum Master',
      focus: 'AI 음악 SaaS QA 전담 · 정부과제 품질 총괄',
      products: 'Keeneat',
      bullets: [
        '단독 QA로 Jira 기반 QA·스크럼 체계와 테스트 전략·케이스 표준화',
        'API·E2E 자동화 — 0%→60% 이상, 배포 주기 5~6주→2주 내외',
        '명세 정적 테스트·ISO 산출물 사전 관리로 모호성 선제 제거',
        'NIPA 유망 SaaS 과제 연구책임 — 우수 등급·후속 자금 유치에 기여',
      ],
    },
  ],
  skills: [
    {
      group: 'QA Verification',
      items: [
        'Python · Locust · Selenium · Appium · Requests',
        'Postman · JMeter',
      ],
    },
    {
      group: 'Soft Skills',
      items: [
        '커뮤니케이션',
        '지식 전수 · 멘토링',
        '엣지 케이스 설계',
        '원인 분석',
        '문서화',
        '우선순위 설정',
      ],
    },
    {
      group: 'Communication',
      items: ['Slack', 'Notion', 'Confluence'],
    },
    {
      group: 'BTS',
      items: ['Jira', 'Linear'],
    },
    {
      group: 'Tools',
      items: ['Fiddler', 'Charles Proxy', 'Mitmproxy', 'Vercel', 'Supabase'],
    },
  ],
  howIWork: [
    '문제를 발견하면 지적에 그치지 않고, 재현·분석하며 구조적으로 풀려고 합니다.',
    '실행을 우선하되, 팀과 먼저 공유하고 정리한 뒤 움직입니다.',
    '기준이 없으면 포맷을 만들어 지속 가능한 체계로 남기는 일을 좋아합니다.',
    '사용자를 위한 QA를 넘어, 팀이 안심하고 출시할 수 있는 QA를 지향합니다.',
    '내가 이해한 것을 문서에만 남기지 않고, 상대가 판단·활용할 수 있는 기준으로 전달하려 합니다.',
  ],
  education: {
    school: '조선대학교 컴퓨터공학과',
    detail: '2015.03 — 2020.02',
  },
  awards: [
    '2021 벤처창업 스타트업 Growth-Project Idea Hackathon',
    '산업 융합형 실감콘텐츠 아이디어 경진대회 대상',
  ],
} as const;

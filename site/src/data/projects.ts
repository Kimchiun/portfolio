export type Project = {
  slug: string;
  published: boolean;
  title: string;
  shortTitle: string;
  client: string;
  company: string;
  periodHint: string;
  oneLiner: string;
  role: string;
  thumbnail: string;
  /** 프로젝트 이야기 전에 — 이 제품/서비스가 무엇인지 */
  service: {
    name: string;
    tagline: string;
    points: string[];
  };
  outcomes: { before: string; after: string; label: string }[];
  overview: string[];
  problem: { heading: string; items: string[] }[];
  background: string[];
  questions?: string[];
  work: { title: string; items: string[] }[];
  verification: { area: string; detail: string }[];
  tooling: string[];
  contribution: string[];
  insights: string[];
};

export const projects: Project[] = [
  {
    slug: 'klip-flutter',
    published: true,
    title: 'Klip Wallet Native → Flutter 전환',
    shortTitle: 'Klip Flutter 전환',
    client: 'Klip 사용자',
    company: '안랩 블록체인 컴퍼니(ABC)',
    periodHint: 'ABC · Klip Wallet · 2026 · QA 엔지니어',
    oneLiner:
      '장기간 운영된 Native Klip을 Flutter로 전환하며, QA 엔지니어로서 전략·일정·2,500개 테스트 자산·AI 기반 케이스 운영으로 안정적 서비스 전환을 지원한 프로젝트.',
    role: 'QA 엔지니어 — 전략·일정 · 테스트 엔지니어 2명 분배·리뷰 · 테스트 자산 · AI 프로세스',
    thumbnail: '/projects/klip-flutter.png',
    service: {
      name: 'Klip Wallet',
      tagline: '개인용 Web3 지갑 앱 (안랩 블록체인 컴퍼니)',
      points: [
        '가상자산·NFT를 보관·전송하고, 멀티체인 환경에서 Earn(스테이킹·예치) 등 기능을 쓰는 모바일 월렛이다.',
        '장기간 Native(Android/iOS)로 운영되어 왔으며, 이 프로젝트는 동일 UX를 유지한 채 앱 기반을 Flutter로 교체하는 대규모 전환이었다.',
        '인증·지갑·전송·멀티체인·Earn·NFT 등 핵심 플로우가 Native와 Flutter에서 동일하게 동작해야 해, 신규 기능 검증이 아니라 전면 회귀와 아키텍처 안정성 확보가 핵심이었다.',
      ],
    },
    outcomes: [
      { label: '테스트 자산', before: '분산 관리', after: '약 2,500개 시나리오 기반 운영 체계' },
      { label: '테스트 운영', before: '개인 경험 의존', after: '역할 기반 QA 운영 체계' },
      { label: '신규 QA 적응', before: '문서 탐색 중심', after: 'AI 생성·가이드로 러닝커브 단축' },
      { label: 'QA 협업', before: '개별 진행', after: '일정·역할·리뷰 체계 표준화' },
      { label: '서비스 전환', before: '품질 리스크 존재', after: 'Flutter 전환 안정적 완료 지원' },
    ],
    overview: [
      '참여 시기 2026. 참여 인력은 QA 엔지니어(본인) 1명, 테스트 엔지니어 2명이었다.',
      '목적은 기존 Native Klip Wallet을 Flutter로 전환하면서 기존 기능 품질을 유지하고, 신규 아키텍처의 안정성을 확보하는 것이었다.',
      '단순 신규 기능 검증이 아니라 플랫폼 교체이므로 회귀 범위가 매우 넓었고, 소수 인원으로 높은 품질을 내려면 체계적인 전략·자산 관리·일정 운영이 필수였다.',
    ],
    problem: [
      {
        heading: '전환 프로젝트의 난이도',
        items: [
          '장기간 운영 Native 앱을 Flutter로 교체 — UX 동일성 + 플랫폼 교체가 동시에 요구됨',
          'UI·상태 관리·인증·멀티체인 기능이 Native와 Flutter에서 동일해야 함',
          '회귀 범위가 매우 넓고, QA는 소수 인원이라 리소스 대비 전략이 성패를 가름',
        ],
      },
    ],
    background: [
      '무엇을 테스트할 것인가만큼, 어떻게 테스트를 운영할 것인가가 프로젝트 성패를 좌우했다.',
      '테스트 전략, 테스트 자산(약 2,500개), 팀원 매니지먼트, AI를 활용한 문서·온보딩 효율화가 함께 필요한 과제였다.',
    ],
    work: [
      {
        title: '테스트 전략·인력 운영',
        items: [
          'Flutter 전환 범위 분석 후 기능별 테스트 전략 수립',
          '테스트 엔지니어 2명의 업무 분배·일정 관리·리뷰',
          '우선순위 기반 회귀 테스트 계획, 변경 영향도 분석으로 핵심 영역 집중 검증',
        ],
      },
      {
        title: '테스트 자산 운영·관리',
        items: [
          '약 2,500개 시나리오 기반 테스트케이스 운영',
          '기능 추가·정책 변경에 따른 지속 관리, 중복 제거·구조 개선',
          '회귀 효율을 위한 테스트 세트 구성',
        ],
      },
      {
        title: 'AI 기반 테스트케이스 프로세스',
        items: [
          '요구사항 기반 테스트케이스 초안 자동 생성',
          '기존 케이스 중복 분석·시나리오 표준화',
          '문서 작성 시간 단축, 신규 QA 온보딩 자료 생성',
          '반복 문서 작업을 줄여 엔지니어가 검증·품질 분석에 집중하도록 개선',
        ],
      },
      {
        title: '협업 및 품질 관리',
        items: [
          '개발·기획과 변경사항 리뷰, 이슈 우선순위 조율',
          'Regression 진행률 관리, 릴리즈 전 품질 리스크 공유',
          '주요 결함 분석 및 Root Cause Review 참여',
        ],
      },
    ],
    verification: [
      { area: '인증', detail: '로그인, PIN, 생체인증, OTP, 세션 관리' },
      { area: 'Wallet', detail: '자산 조회, 지갑 생성, 주소 관리' },
      { area: '전송', detail: '송금, 수수료 계산, 주소 검증' },
      { area: '멀티체인', detail: 'Ethereum, Kaia, Solana, XRP 등 체인별 기능' },
      { area: 'Earn', detail: '스테이킹, 예치, 보상 조회' },
      { area: 'NFT', detail: 'NFT 조회 및 관리' },
      { area: '공통', detail: 'Flutter UI, 상태 유지, 네트워크 예외 처리' },
    ],
    tooling: [
      '시나리오 기반 테스트케이스 자산(약 2,500개) 운영',
      'AI — 케이스 초안 생성·중복 분석·온보딩 가이드',
      '개발·기획 리뷰 / Regression 진행률·리스크 공유 체계',
    ],
    contribution: [
      'QA 엔지니어로서 테스트 전략부터 일정·인력 운영까지 품질 활동을 전반 주도했다.',
      '약 2,500개 테스트케이스를 지속 관리해 장기 활용 가능한 테스트 자산을 구축했다.',
      'AI로 케이스 작성·온보딩을 개선해 반복 업무를 줄이고 신규 QA 러닝커브를 단축했다.',
      '기능 검증을 넘어 프로세스·협업 체계를 개선해 팀 생산성과 품질 수준을 높였다.',
    ],
    insights: [
      '대규모 서비스 전환에서는 “무엇을 테스트할 것인가”보다 “어떻게 테스트를 운영할 것인가”가 성패를 가른다.',
      '개인의 테스트 역량보다 팀 전체의 품질 역량을 끌어올리는 것이, 소수 인원 QA 운영에서 핵심이었다.',
      '이 프로젝트는 Flutter 전환 QA를 넘어 자산 관리·AI 활용·팀 운영·프로세스 개선이 한곳에 모인 대표 사례다.',
    ],
  },
  {
    slug: 'beamo-ssv',
    published: true,
    title: '삼성 SSV 디지털 트윈 QA 체계 수립 및 품질 안정화',
    shortTitle: 'Beamo SSV',
    client: '삼성물산',
    company: '3i Inc.',
    periodHint: '3i · 디지털 트윈',
    oneLiner:
      '개발 60% 이상 완료된 상태로 투입되어, 테스트 체계·고객 리포트·반도체 공장 현장 필드 테스트까지 품질 구조를 다시 세운 프로젝트.',
    role: 'QA Engineer — 체계 수립 · 고객 대응 · 현장 필드 테스트',
    thumbnail: '/projects/beamo-ssv.png',
    service: {
      name: 'Beamo',
      tagline: '360° 사진 기반 엔터프라이즈 디지털 트윈 플랫폼 (3i Inc.)',
      points: [
        '현장·시설을 360°로 캡처해 디지털 트윈으로 만들고, 원격으로 공간을 탐색·점검·협업할 수 있는 솔루션이다.',
        'Beamo 포털은 3D Workspace에서 태그·코멘트·측정·비교·안내·화상 통화 등으로 문서화와 팀 커뮤니케이션을 지원한다.',
        'Beamo 앱은 실내·협소 공간·스트리트 뷰·토지 서베이 등 다양한 환경을 보행만으로도 캡처하고, GPS가 약한 곳에서도 정밀 매핑이 가능하다.',
        '이 프로젝트의 Beamo SSV(Samsung Site View)는 그 플랫폼을 삼성물산 반도체 공장 현장에 맞춰 도입·검증한 고객 구축 건이다.',
      ],
    },
    outcomes: [
      { label: '테스트 체계', before: '미정립', after: '화면/기능 기준 문서화 완료' },
      { label: 'QA 사전 결함 발견률', before: '약 60%', after: '약 90% 이상' },
      { label: '고객 피드백 응답', before: '평균 2~3일', after: '평균 1일 이내' },
      { label: '문서 전달 방식', before: '비정형(회의/대화)', after: '시나리오 기반 공식 문서·보고서' },
    ],
    overview: [
      '고객사는 삼성물산. 삼성전자가 발주하고 삼성물산이 건설 중인 대규모 반도체 공장에 Beamo 기반 3D 공간 뷰어(SSV)를 도입하는 과제였다.',
      '반도체 공정 특성상 일반인의 현장 접근이 어렵고, 현장 설명 회의도 고비용·고리스크라, 방문 없이 공정 점검·공간 피드백이 가능한 체계가 필요했다.',
      '나는 개발이 60% 이상 완료된 상태에서 QA로 투입되어, 테스트 체계 수립부터 고객 대응 리포트, 반도체 공장 건설 현장 필드 테스트까지 전 과정을 수행했다.',
    ],
    problem: [
      {
        heading: '투입 시점의 품질 리스크',
        items: [
          '테스트 시나리오·품질 기준 미정립 → 결함 발생 시 대응 기준 부재',
          '기능은 구현됐으나 예외 조건·권한 분기·실데이터 연동 등 실사용 관점 검증 부족',
          '고객사의 반복 피드백·QA 결과 요청에 공식 문서·응대 체계가 없어 신뢰도 하락 우려',
        ],
      },
    ],
    background: [
      '단순 기능 테스트가 아니라, 품질 체계 전반을 세우고 고객 커뮤니케이션까지 포함하는 전방위 QA가 필요한 상황이었다.',
      '화면 ID·기능 ID·테스트 기준을 직접 정의하고 현장에 적용해야 했으며, 외부로 나가는 모든 QA 자료가 고객 전달용이라는 점에서 기술·문서화·커뮤니케이션이 동시에 요구됐다.',
    ],
    work: [
      {
        title: 'QA 체계 수립',
        items: [
          '화면 단위로 기능을 분리(3D 뷰어, IoT 태그, 사용자 관리 등)한 뒤 모듈별 테스트 시나리오와 예외 케이스를 설계',
          '권한 유형별 동작 분기 검증 — Super Admin / Site Manager / Member',
          '고객사 기준에 맞춘 표준 테스트 문서 템플릿을 제작하고, 요구사항 기반으로 시나리오를 정렬',
        ],
      },
      {
        title: '고객 커뮤니케이션 대응',
        items: [
          '고객사 이슈 요청서 기반 QA 피드백 회신 및 정형화된 QA 리포트 제공',
          '테스트 완료 보고서, 재현 영상, 비교표 형태로 보고 포맷을 체계화해 신뢰 확보',
          '이슈 발생 시 Slack·이메일로 신속 응답하고 리포트를 재작성하며 커뮤니케이션 신뢰도를 쌓음',
        ],
      },
      {
        title: '현장 필드 테스트',
        items: [
          '삼성 반도체 공장 건설 현장에서 필드 테스트를 직접 수행해 실사용성과 기술적 신뢰성을 검증',
        ],
      },
    ],
    verification: [
      {
        area: '3D 뷰어',
        detail: '뷰 이동, POI(Point of Interest) 생성/삭제, PIN 정보 노출 여부, 미니맵 연동',
      },
      {
        area: 'IoT 태그',
        detail: '태그 위치 오류, 센서 상태값 미반영, 로그/히스토리 미표시 현상 검증',
      },
      {
        area: '사용자 권한',
        detail: '기능 접근 제어, 메뉴 숨김 조건, 초대 및 팀 권한 설정 검증',
      },
      {
        area: '외부 공유',
        detail: 'iframe 공유 시 로딩 실패, 3D 위치 고정 상태 유지 여부',
      },
    ],
    tooling: [
      'Selenium — UI 요소 확인, 태그 조작 등 반복 브라우저 검증 스크립트',
      'Python Requests — IoT 상태 API 응답 정합성 검증',
      'Slack Webhook — 이상 현상 발생 시 QA 팀 실시간 알림',
    ],
    contribution: [
      '테스트 시나리오와 품질 기준을 전면 설계하고, 고객 대응용 리포트·QA 커뮤니케이션 체계를 수립했다.',
      '현장 필드 테스트까지 포함해 “개발 완료된 시스템에 QA를 붙이는 일”을 품질 구조 재설계로 수행했다.',
    ],
    insights: [
      '개발이 끝난 뒤 붙는 QA는 테스트 추가가 아니라, 전반적인 품질 구조를 다시 세우는 일이다.',
      '고객사로 나가는 모든 자료가 외부 전달용이라는 점에서, 기술성과 문서화·커뮤니케이션 능력이 동시에 필요했다.',
      '정형화되지 않은 상태에서 화면 ID·기능 ID·테스트 기준을 직접 정의하고 적용하며, 조직 내 QA 기여와 책임의 무게를 실감했다.',
    ],
  },
  {
    slug: 'mm-anomaly-detection',
    published: true,
    title: '이상 거래 탐지 자동화 시스템 구축을 통한 거래 안정성 확보',
    shortTitle: '마켓 메이커 이상 탐지',
    client: 'Imbx.io',
    company: 'Bullmarketlabs',
    periodHint: 'Bullmarketlabs · 암호화폐 거래소',
    oneLiner:
      '마켓 메이커(MM) 지갑 frozen 이슈를 재현·원인 규명·자동화 탐지·구조 개선까지 이끌어, 재현율 12.4%→0%로 만든 프로젝트.',
    role: 'QA Engineer — 재현 · 원인 분석 · 자동화 탐지 · 구조 개선 주도',
    thumbnail: '/projects/mm-anomaly-detection.png',
    service: {
      name: 'Imbx.io',
      tagline: 'Spot·Futures를 지원하는 암호화폐 거래소 (Bullmarketlabs)',
      points: [
        '가상자산을 사고팔 수 있는 중앙화 거래소로, 현물(Spot)과 선물(Futures) 거래를 함께 제공했다.',
        '주문은 매칭 엔진에서 체결된 뒤 메시지 큐를 거쳐 지갑 서비스로 자산 반영이 이어지는 구조였다.',
        '유동성 공급자인 마켓 메이커(MM, Market Maker) 계정이 대량·고빈도 주문을 넣으며 시장을 받치는 환경에서, 지갑 상태 불일치는 곧바로 트레이딩 중단과 VOC로 이어졌다.',
      ],
    },
    outcomes: [
      { label: '이상 현상 재현율', before: '12.4%', after: '0%' },
      { label: 'QA 수동 모니터링', before: '일 4시간', after: '일 30분 이하' },
      { label: 'Slack 알림 감지', before: '없음', after: '평균 3초 이내' },
      { label: 'QA–개발 협업', before: '주 1회 요청 기반', after: '기능 단위 공동 리뷰 체계화' },
    ],
    overview: [
      '이 프로젝트는 Imbx 거래소에서, 주문 체결 후 지갑 처리 단계의 불일치—마켓 메이커(MM) 계정 자산이 available로 풀리지 않고 frozen에 남는 현상—를 실시간 탐지하고 구조적으로 해결한 과제다.',
      '역할은 발생 시점 식별, 재현 환경 구성, 테스트 자동화, 개발 협업을 통한 구조 개선 주도였다.',
      '대량 주문(100건 이상)에서 간헐 발생했고, 사용자에게는 체결 후 잔고 부족 오류로 보였다. MM 트레이딩 중단과 운영·CS VOC 반복이 뒤따랐다.',
    ],
    problem: [
      {
        heading: '현상',
        items: [
          '특정 시점에 MM 계정의 주문 체결 후, 사용 가능 잔고로 금액이 전환되지 않고 동결(frozen wallet)에 유지됨',
        ],
      },
      {
        heading: '조건·영향',
        items: [
          '대량 주문 시(100건 이상) 간헐 발생',
          'MM 트레이딩 중단, 체결 오류·신뢰 저하, 운영·CS VOC 반복',
        ],
      },
    ],
    background: [
      '거래소는 주문 체결 이후 매칭 엔진 → 메시지 큐 → 지갑 서비스 순으로 이벤트를 처리한다. Consumer가 이벤트 순서를 보장하지 못하면 지갑 처리 누락이 발생할 수 있다.',
      '테스트 케이스로 잡히지 않는 간헐 현상을 어떻게 검증할지, 운영과 같은 조건을 어떻게 통제할지, 사람 없이도 감지·대응하는 자동화를 만들 수 있을지가 핵심이었다.',
    ],
    questions: [
      '테스트 케이스로 잡히지 않는 간헐적 현상을 어떻게 검증할 수 있을까?',
      '운영 환경과 동일한 조건으로 테스트 환경을 구성하려면 어떤 요소를 통제해야 할까?',
      '자동화에서 이상 상황을 감지하고 사람 없이도 대응하는 구조를 만들 수 있을까?',
    ],
    work: [
      {
        title: 'Step 1. 재현 조건 확정',
        items: [
          '실제 MM 계정 권한을 가진 테스트 계정 구성',
          '대량 주문을 빠르게 반복하는 시뮬레이션 스크립트 설계 (Limit Long/Short 반복 + 짧은 간격)',
        ],
      },
      {
        title: 'Step 2. 데이터 수집',
        items: [
          'Kafka 메시지 로그 수집 — 체결 이벤트 발생 시점과 지갑 처리 시점 비교',
          'Web 로그 및 UI 잔고 비교 자동화 스크립트 구성',
        ],
      },
      {
        title: 'Step 3. 자동화 기반 이상 탐지',
        items: [
          '시장가 조회 → 자동 주문 → 체결 이후 잔고 변화 추적',
          '잔고가 변하지 않거나 감소하면 Slack으로 실시간 경고 전송',
        ],
      },
      {
        title: '구조 개선 및 검증',
        items: [
          '원인: 메시지 큐 이벤트 순서 꼬임(Race Condition), ACK 이전 미완료 메시지 미처리, 지갑 서비스 재시도 로직 부재',
          '개선: Kafka Consumer ACK 확인 로직, Dead-letter Queue, 지갑 API 실패 시 최대 3회 재시도',
          '검증: 기존 대비 1,000건 이상 반복 실행 → 재현 불가, 로그 누락율 0%, 이벤트 순서 정상화',
        ],
      },
    ],
    verification: [
      { area: '재현 시나리오', detail: '대량 Limit 주문 반복으로 frozen 간헐 재현 조건 고정' },
      { area: '메시지 흐름', detail: 'Kafka 체결 이벤트 vs 지갑 처리 시점 대조로 순서 꼬임 확인' },
      { area: '잔고 감시', detail: 'UI 잔고 before/after 비교 후 Slack 알림' },
      { area: '회귀 검증', detail: '개선 후 1,000건+ 반복 · 재현율 0% · 로그 누락율 0%' },
    ],
    tooling: [
      'Selenium + Python — 주문·잔고 UI 추적 및 비교',
      'Kafka 로그 수집 — 이벤트 순서·처리 시점 분석',
      'Slack Webhook — 잔고 미갱신 실시간 알림',
    ],
    contribution: [
      '단순 오류 확인이 아니라 시스템 구조상 병목과 메시지 흐름을 QA 관점에서 주도적으로 분석했다.',
      '수동 확인을 넘어 자동화 시나리오와 이상 탐지 체계를 도입해 테스트 품질과 운영 대응 속도를 개선했다.',
      '문제 발생 → 구조 이해 → 개선 설계 → 자동화 구현 → 알림 전파까지 End-to-End를 QA 중심으로 리드했다.',
    ],
    insights: [
      '단순 테스트 수행자에서 벗어나 구조적 품질을 검증·개선하는 QA로 성장하는 계기가 됐다.',
      '정해진 스펙 없이 현상을 분석하고 시스템을 탐색해 실질적인 구조 개선으로 연결했다.',
      '재현이 어려운 문제일수록 QA의 전략적 접근이 더 중요하다.',
    ],
  },
  {
    slug: 'keeneat-qa',
    published: true,
    title: 'Keeneat QA 체계 구축 및 정부과제 품질 인증 대응',
    shortTitle: 'Keeneat QA',
    client: '영상 제작사 · 크리에이터 · 일반 사용자',
    company: 'Chilloen',
    periodHint: 'Chilloen · AI 음악 SaaS · 2022.11—2023.11',
    oneLiner:
      'QA가 전무한 AI 음악 SaaS에서 프로세스·자동화·ISO 문서를 세우고, NIPA 우수 등급과 후속 자금 유치까지 이끈 프로젝트.',
    role: '단독 QA Engineer · Scrum Master · 정부과제 품질 총괄',
    thumbnail: '/projects/keeneat-qa.png',
    service: {
      name: 'Keeneat (키닛)',
      tagline: '장르·길이·빠르기만 고르면 만드는 AI 음악 생성 SaaS (칠로엔)',
      points: [
        '국내 스타트업 칠로엔이 출시한 음악 작곡·생성 AI 서비스다. 복잡한 작곡 지식 없이 선택지만으로 음원을 빠르게 만들 수 있다.',
        '생성·구매한 음원의 소유권이 사용자에게 넘어가 상업적 이용이 가능하고, 웹과 PC앱에서 작곡·뮤직마켓을 운영한다.',
        '사내 엔진 KEENLAB을 기반으로 하며, 영상 제작사·크리에이터·일반 사용자처럼 “쓸 음악이 빨리 필요한” 고객을 겨냥한다.',
        '당시 제품은 MVP~초기 성장 단계였고, NIPA 정부지원과제와 ISO 9001 수준 품질 문서 제출이 함께 요구되는 환경이었다.',
      ],
    },
    outcomes: [
      { label: 'QA 프로세스', before: '없음', after: 'Jira + 템플릿 워크플로우' },
      { label: '테스트 자동화율', before: '0%', after: 'UI/API 60% 이상' },
      { label: '배포 주기', before: '5~6주', after: '2주 내외' },
      { label: '문서화', before: '사후 정리 없음', after: 'ISO 수준 산출물 사전 관리' },
      { label: '정부과제 평가', before: '기준 미흡', after: 'NIPA 우수 등급 · 후속 자금' },
    ],
    overview: [
      '참여기간 2022.11—2023.11. Keeneat의 단독 QA이자 스크럼마스터, 정부과제 품질 총괄을 맡았다.',
      '핵심 목표는 QA 체계 수립, 테스트 자동화, 정부과제 성과 관리, ISO 9001 기반 품질 시스템 설계·문서화 대응이었다.',
      '합류 당시 QA 조직·프로세스·문서·테스트 환경이 비어 있어, 단순 테스트를 넘어 전사 품질 시스템을 처음부터 세워야 했다.',
    ],
    problem: [
      {
        heading: '합류 시점',
        items: [
          '빠른 출시가 중요한 초기 스타트업이었지만 QA 체계는 부재',
          '제품은 MVP 수준, QA 조직·프로세스·문서·테스트 환경이 모두 비어 있음',
          'NIPA 정부지원과제 수행으로 ISO 9001 기반 품질 문서·산출물·일정·기술보고 제출이 필수',
        ],
      },
    ],
    background: [
      '단순 테스트를 넘어 조직 수준의 품질 시스템을 도입하고, 외부 평가 기준을 충족하는 전사적 QA 체계를 구축해야 했다.',
      '내부 프로세스 개선과 외부 인증·과제 대응을 동시에 수행해야 하는 이중 과제이기도 했다.',
    ],
    work: [
      {
        title: 'QA 체계 및 자동화 설계',
        items: [
          '전체 QA 프로세스 설계 — Jira 기반 테스트 워크플로우(기획 → QA → 완료)',
          'QA 컨벤션 수립: 명명 규칙, 시트 구성, 재현 포맷 통일',
          'Postman → Python Requests 전환으로 API 테스트 자동화 (버전 관리·반복 실행 효율)',
          'Selenium 기반 UI 시나리오 자동화 (로그인~음악생성)',
          '엣지 시나리오 확장: 대용량 음원, 노이즈 섞인 프롬프트, 비정상 리믹스 요청 등',
        ],
      },
      {
        title: '정부과제 QA 문서 및 산출물',
        items: [
          'ISO 9001 기반 품질관리 문서 수립 — 테스트 계획서, 실행보고서, 오류 리포트, 요구사항 추적 매트릭스',
          '리뷰 로그, QA 승인 이력, 변경이력 산출물 정리',
          '기능 검증표, 결과 보고서, 테스트 커버리지 리포트 직접 작성',
          '제출용 시스템 품질 보고서 작성 및 대응 피드백 관리',
        ],
      },
      {
        title: '스크럼마스터 · 리소스 매니징',
        items: [
          '주간 스프린트 운영 — QA 이슈 우선순위 정의, 스토리 포인트 산정 참여',
          '신규 인턴/개발자 테스트 지원 가이드 제공',
          '산출물 자동화 툴 스크립트 공유로 테스트 효율화 유도',
        ],
      },
    ],
    verification: [
      { area: '프로세스', detail: '없음 → Jira+템플릿으로 명확한 워크플로우 수립' },
      { area: '자동화', detail: 'UI/API 자동화 60% 이상 적용' },
      { area: '배포', detail: '5~6주 → 2주 내외로 단축' },
      { area: '문서·평가', detail: 'ISO 수준 사전 관리, NIPA 우수 등급·후속 자금 유치' },
    ],
    tooling: [
      'Jira — 테스트 워크플로우·스프린트·이슈 우선순위',
      'Postman → Python Requests — API 자동화·버전 관리',
      'Selenium — UI E2E (로그인~음악생성)',
    ],
    contribution: [
      '비어 있던 QA 조직 기능을 프로세스·자동화·문서로 한 번에 세웠다.',
      '정부과제·ISO 산출물을 총괄해 외부 평가 기준을 충족시키고 후속 자금 유치에 기여했다.',
      '스크럼 운영과 인력 가이드로 제한된 리소스에서도 품질을 유지할 수 있는 흐름을 만들었다.',
    ],
    insights: [
      'QA가 단순 테스트 실행을 넘어 조직의 품질 기준을 정의하고 실행하는 역할임을 처음부터 끝까지 경험했다.',
      'ISO 산출물, 외부 평가 대응, 내부 프로세스 개선을 동시에 수행하며 전사적 QA 관점을 갖추는 계기가 됐다.',
      '제한된 인력과 초기 환경에서도 전략·자동화·문서화·커뮤니케이션을 병행할 수 있다는 자신감을 얻었다.',
    ],
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.published);
}

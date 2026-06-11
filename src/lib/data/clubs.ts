import type { Club, ClubCategory } from "@/types";

const CLUBS: Club[] = [
  {
    id: "hiking",
    name: "삼천리 산악 동아리",
    category: "sports",
    description: "서울·경기 주요 산을 함께 오르며 체력과 동료애를 키우는 동아리입니다.",
    longDescription:
      "삼천리 산악 동아리는 2015년 창설된 이래 매월 2회 정기 산행을 진행합니다. 북한산, 관악산 등 수도권 명산부터 지리산, 설악산 원정까지 다양한 코스를 함께 누빕니다. 초보자도 쉽게 참여할 수 있는 입문 코스부터 고수들을 위한 도전 코스까지 수준별 산행을 운영하며, 산행 후 뒤풀이도 빠지지 않습니다.",
    memberCount: 38,
    foundedYear: 2015,
    imageUrl: "https://picsum.photos/seed/hiking/600/400",
    galleryImages: [
      "https://picsum.photos/seed/hike1/400/300",
      "https://picsum.photos/seed/hike2/400/300",
      "https://picsum.photos/seed/hike3/400/300",
      "https://picsum.photos/seed/hike4/400/300",
      "https://picsum.photos/seed/hike5/400/300",
      "https://picsum.photos/seed/hike6/400/300",
    ],
    leader: {
      id: "m1",
      name: "김민준",
      department: "경영기획팀",
      role: "leader",
      joinedAt: "2015-03-01",
    },
    members: [
      { id: "m1", name: "김민준", department: "경영기획팀", role: "leader", joinedAt: "2015-03-01" },
      { id: "m2", name: "이서연", department: "인사팀", role: "vice-leader", joinedAt: "2016-04-10" },
      { id: "m3", name: "박지호", department: "IT개발팀", role: "member", joinedAt: "2018-09-01" },
      { id: "m4", name: "최유진", department: "재무팀", role: "member", joinedAt: "2020-02-15" },
      { id: "m5", name: "정다은", department: "마케팅팀", role: "member", joinedAt: "2021-07-01" },
    ],
    activities: [
      { id: "a1", title: "2026 봄 북한산 정기 산행", date: "2026-04-12", description: "4월 정기 산행으로 북한산 백운대 코스를 함께 했습니다. 총 24명 참석." },
      { id: "a2", title: "2026 설날 관악산 해맞이", date: "2026-02-01", description: "새해를 맞아 관악산 정상에서 일출 감상 후 뒤풀이." },
      { id: "a3", title: "2025 가을 지리산 원정", date: "2025-10-18", description: "1박 2일 지리산 종주 코스 원정 산행. 총 15명 참가." },
    ],
    isFeatured: true,
    tags: ["등산", "트레킹", "체력단련", "친목"],
  },
  {
    id: "photography",
    name: "빛담 사진 동아리",
    category: "hobby",
    description: "일상 속 아름다운 순간을 카메라에 담는 사진 동아리입니다.",
    longDescription:
      "빛담 사진 동아리는 사진을 사랑하는 삼천리 임직원들이 모여 만든 동아리입니다. DSLR, 미러리스, 스마트폰 등 장비에 무관하게 누구나 참여할 수 있습니다. 월 1회 출사, 격월 1회 사진전을 진행하며 구성원들의 작품을 사내에 전시합니다. 촬영 기법 강의와 사진 합평회를 통해 함께 성장합니다.",
    memberCount: 24,
    foundedYear: 2018,
    imageUrl: "https://picsum.photos/seed/photo/600/400",
    galleryImages: [
      "https://picsum.photos/seed/photo1/400/300",
      "https://picsum.photos/seed/photo2/400/300",
      "https://picsum.photos/seed/photo3/400/300",
      "https://picsum.photos/seed/photo4/400/300",
    ],
    leader: {
      id: "m10",
      name: "윤소희",
      department: "홍보팀",
      role: "leader",
      joinedAt: "2018-05-01",
    },
    members: [
      { id: "m10", name: "윤소희", department: "홍보팀", role: "leader", joinedAt: "2018-05-01" },
      { id: "m11", name: "강태양", department: "IT개발팀", role: "vice-leader", joinedAt: "2019-03-01" },
      { id: "m12", name: "임지수", department: "영업팀", role: "member", joinedAt: "2020-06-01" },
      { id: "m13", name: "오민서", department: "법무팀", role: "member", joinedAt: "2021-09-01" },
    ],
    activities: [
      { id: "a10", title: "2026 봄 여의도 벚꽃 출사", date: "2026-04-05", description: "여의도 한강공원 벚꽃 출사. 참가자 18명, 수상작 5점 선정." },
      { id: "a11", title: "제7회 사내 사진전 개최", date: "2026-03-15", description: "본사 1층 로비에서 2주간 사내 사진전 개최. 총 42점 전시." },
    ],
    isFeatured: true,
    tags: ["사진", "출사", "전시", "예술"],
  },
  {
    id: "book",
    name: "독서경영 연구회",
    category: "study",
    description: "매월 경영·자기계발 도서를 선정하여 함께 읽고 토론합니다.",
    longDescription:
      "독서경영 연구회는 업무 역량 강화와 개인 성장을 목표로 하는 학습 동아리입니다. 매월 첫째 주 금요일 저녁 7시, 선정 도서 토론 모임을 진행합니다. 경영, 자기계발, 인문학, 사회과학 등 다양한 분야의 책을 다루며, 독서 후 각자의 인사이트를 공유합니다. 연 1회 저자 초청 강연도 진행합니다.",
    memberCount: 18,
    foundedYear: 2019,
    imageUrl: "https://picsum.photos/seed/book/600/400",
    galleryImages: [
      "https://picsum.photos/seed/book1/400/300",
      "https://picsum.photos/seed/book2/400/300",
      "https://picsum.photos/seed/book3/400/300",
    ],
    leader: {
      id: "m20",
      name: "한지원",
      department: "전략기획팀",
      role: "leader",
      joinedAt: "2019-01-10",
    },
    members: [
      { id: "m20", name: "한지원", department: "전략기획팀", role: "leader", joinedAt: "2019-01-10" },
      { id: "m21", name: "신예은", department: "인사팀", role: "vice-leader", joinedAt: "2019-03-01" },
      { id: "m22", name: "문성재", department: "재무팀", role: "member", joinedAt: "2020-01-15" },
      { id: "m23", name: "배수빈", department: "마케팅팀", role: "member", joinedAt: "2021-04-01" },
    ],
    activities: [
      { id: "a20", title: "6월 정기 독서토론 — 「일의 기쁨과 슬픔」", date: "2026-06-06", description: "장류진 작가의 소설 「일의 기쁨과 슬픔」 토론. 참가자 14명." },
      { id: "a21", title: "5월 정기 독서토론 — 「원칙」", date: "2026-05-02", description: "레이 달리오의 「원칙」 완독 후 경영 인사이트 토론." },
    ],
    isFeatured: true,
    tags: ["독서", "토론", "자기계발", "경영"],
  },
  {
    id: "volunteer",
    name: "나눔실천 봉사단",
    category: "volunteer",
    description: "지역 사회와 함께하는 따뜻한 봉사 활동 동아리입니다.",
    longDescription:
      "나눔실천 봉사단은 삼천리의 사회공헌 가치를 실천하는 봉사 동아리입니다. 매월 셋째 주 토요일 지역 복지관, 요양원, 아동센터 등 다양한 봉사 현장을 찾아갑니다. 무료 급식 지원, 환경 정화, 멘토링 프로그램 등 다양한 봉사 활동을 통해 지역 사회에 기여합니다. 회사의 봉사 활동비 지원을 받습니다.",
    memberCount: 45,
    foundedYear: 2012,
    imageUrl: "https://picsum.photos/seed/volunteer/600/400",
    galleryImages: [
      "https://picsum.photos/seed/vol1/400/300",
      "https://picsum.photos/seed/vol2/400/300",
      "https://picsum.photos/seed/vol3/400/300",
      "https://picsum.photos/seed/vol4/400/300",
    ],
    leader: {
      id: "m30",
      name: "조현아",
      department: "사회공헌팀",
      role: "leader",
      joinedAt: "2012-04-01",
    },
    members: [
      { id: "m30", name: "조현아", department: "사회공헌팀", role: "leader", joinedAt: "2012-04-01" },
      { id: "m31", name: "류성민", department: "경영지원팀", role: "vice-leader", joinedAt: "2014-06-01" },
      { id: "m32", name: "황채원", department: "영업팀", role: "member", joinedAt: "2016-09-01" },
      { id: "m33", name: "노준혁", department: "IT개발팀", role: "member", joinedAt: "2018-03-01" },
      { id: "m34", name: "심보라", department: "홍보팀", role: "member", joinedAt: "2020-11-01" },
    ],
    activities: [
      { id: "a30", title: "6월 무료 급식 봉사", date: "2026-06-21", description: "강서구 지역 복지관 무료 급식 지원. 봉사자 22명 참가." },
      { id: "a31", title: "5월 어린이날 아동센터 방문", date: "2026-05-05", description: "취약계층 아동 대상 선물 전달 및 멘토링 프로그램 진행." },
    ],
    isFeatured: true,
    tags: ["봉사", "나눔", "지역사회", "사회공헌"],
  },
  {
    id: "futsal",
    name: "삼천리 풋살 동아리",
    category: "sports",
    description: "매주 풋살을 즐기며 건강과 팀워크를 다지는 스포츠 동아리입니다.",
    longDescription:
      "삼천리 풋살 동아리는 매주 수요일 저녁 마포 실내풋살장에서 정기 경기를 진행합니다. 초보자도 환영하며, 레벨별 팀 구성으로 누구나 즐겁게 참여할 수 있습니다. 연 2회 사내 풋살 리그를 개최하고, 타 기업 동아리와의 친선 경기도 진행합니다. 운동 후 시원한 뒤풀이도 전통입니다.",
    memberCount: 32,
    foundedYear: 2017,
    imageUrl: "https://picsum.photos/seed/futsal/600/400",
    galleryImages: [
      "https://picsum.photos/seed/futsal1/400/300",
      "https://picsum.photos/seed/futsal2/400/300",
      "https://picsum.photos/seed/futsal3/400/300",
    ],
    leader: {
      id: "m40",
      name: "고동현",
      department: "영업팀",
      role: "leader",
      joinedAt: "2017-08-01",
    },
    members: [
      { id: "m40", name: "고동현", department: "영업팀", role: "leader", joinedAt: "2017-08-01" },
      { id: "m41", name: "전민영", department: "IT개발팀", role: "vice-leader", joinedAt: "2018-02-01" },
      { id: "m42", name: "홍기석", department: "경영기획팀", role: "member", joinedAt: "2019-05-01" },
      { id: "m43", name: "안소정", department: "재무팀", role: "member", joinedAt: "2021-03-01" },
    ],
    activities: [
      { id: "a40", title: "2026 상반기 사내 풋살 리그 개막", date: "2026-05-14", description: "6개 팀 참가, 상반기 리그 개막전 진행. 1라운드 전승 팀 선두." },
      { id: "a41", title: "SK E&S 친선 풋살 경기", date: "2026-04-22", description: "SK E&S 풋살 동아리와 친선 경기. 3:2 승리." },
    ],
    isFeatured: true,
    tags: ["풋살", "축구", "스포츠", "리그"],
  },
  {
    id: "cooking",
    name: "쿡쿡 요리 동아리",
    category: "food",
    description: "다함께 요리하고 나누는 즐거움! 음식으로 소통하는 동아리입니다.",
    longDescription:
      "쿡쿡 요리 동아리는 요리를 통해 사람들을 연결하는 동아리입니다. 매월 셋째 주 토요일 오전, 마포 쿠킹 스튜디오에서 요리 모임을 진행합니다. 한식, 양식, 일식, 중식 등 다양한 장르의 요리를 번갈아 도전합니다. 요리 후에는 함께 식사하며 레시피를 공유합니다. 요리 초보도 즐겁게 참여할 수 있습니다.",
    memberCount: 22,
    foundedYear: 2020,
    imageUrl: "https://picsum.photos/seed/cooking/600/400",
    galleryImages: [
      "https://picsum.photos/seed/cook1/400/300",
      "https://picsum.photos/seed/cook2/400/300",
      "https://picsum.photos/seed/cook3/400/300",
    ],
    leader: {
      id: "m50",
      name: "서나리",
      department: "인사팀",
      role: "leader",
      joinedAt: "2020-03-01",
    },
    members: [
      { id: "m50", name: "서나리", department: "인사팀", role: "leader", joinedAt: "2020-03-01" },
      { id: "m51", name: "차민우", department: "마케팅팀", role: "vice-leader", joinedAt: "2020-06-01" },
      { id: "m52", name: "방지현", department: "법무팀", role: "member", joinedAt: "2021-01-15" },
    ],
    activities: [
      { id: "a50", title: "6월 여름 요리 — 냉면 & 비빔국수", date: "2026-06-20", description: "여름 시즌 메뉴로 수제 물냉면과 비빔국수 만들기 도전!" },
      { id: "a51", title: "5월 이탈리안 파스타 클래스", date: "2026-05-17", description: "카르보나라, 봉골레 파스타 직접 만들기. 참가자 17명." },
    ],
    isFeatured: true,
    tags: ["요리", "음식", "레시피", "친목"],
  },
  {
    id: "yoga",
    name: "몸과마음 요가 동아리",
    category: "sports",
    description: "바쁜 직장생활 속 요가로 몸과 마음의 균형을 찾는 동아리입니다.",
    longDescription:
      "매주 화·목 아침 7시 30분 사내 체육관에서 요가 수업을 진행합니다. 자격증 취득 강사진이 진행하는 전문 수업입니다. 초급부터 심화 과정까지 단계별 커리큘럼으로 구성됩니다.",
    memberCount: 28,
    foundedYear: 2021,
    imageUrl: "https://picsum.photos/seed/yoga/600/400",
    galleryImages: [
      "https://picsum.photos/seed/yoga1/400/300",
      "https://picsum.photos/seed/yoga2/400/300",
    ],
    leader: {
      id: "m60",
      name: "남지현",
      department: "경영지원팀",
      role: "leader",
      joinedAt: "2021-01-01",
    },
    members: [
      { id: "m60", name: "남지현", department: "경영지원팀", role: "leader", joinedAt: "2021-01-01" },
      { id: "m61", name: "구본우", department: "IT개발팀", role: "vice-leader", joinedAt: "2021-03-01" },
    ],
    activities: [
      { id: "a60", title: "6월 요가 특강 — 스트레스 해소 시퀀스", date: "2026-06-17", description: "외부 강사 초청 특강, 직장인 맞춤 스트레스 해소 요가 시퀀스." },
    ],
    isFeatured: false,
    tags: ["요가", "건강", "명상", "스트레칭"],
  },
  {
    id: "music",
    name: "하모니 음악 동아리",
    category: "culture",
    description: "악기 연주와 합창을 즐기는 음악 애호가들의 모임입니다.",
    longDescription:
      "하모니 음악 동아리는 기타, 피아노, 베이스, 드럼 등 다양한 악기를 연주하는 멤버들이 모여 밴드를 구성합니다. 매주 금요일 저녁 연습 및 연 2회 사내 공연을 진행합니다. 합창단도 별도로 운영하여 사내 행사 무대에 자주 선채 합니다.",
    memberCount: 20,
    foundedYear: 2016,
    imageUrl: "https://picsum.photos/seed/music/600/400",
    galleryImages: [
      "https://picsum.photos/seed/music1/400/300",
      "https://picsum.photos/seed/music2/400/300",
      "https://picsum.photos/seed/music3/400/300",
    ],
    leader: {
      id: "m70",
      name: "이준혁",
      department: "홍보팀",
      role: "leader",
      joinedAt: "2016-07-01",
    },
    members: [
      { id: "m70", name: "이준혁", department: "홍보팀", role: "leader", joinedAt: "2016-07-01" },
      { id: "m71", name: "박수민", department: "마케팅팀", role: "vice-leader", joinedAt: "2017-01-01" },
    ],
    activities: [
      { id: "a70", title: "2026 상반기 사내 밴드 공연", date: "2026-05-30", description: "창립기념일 행사 무대 공연. 3곡 연주 및 합창단 특별 무대." },
    ],
    isFeatured: false,
    tags: ["음악", "밴드", "기타", "합창"],
  },
  {
    id: "cycling",
    name: "라이더스 자전거 동아리",
    category: "sports",
    description: "한강과 자전거 도로를 달리며 건강한 라이프를 즐기는 동아리입니다.",
    longDescription:
      "매주 토요일 아침 한강 자전거 도로 라이딩 및 월 1회 외곽 자전거길 투어를 진행합니다. 로드바이크, MTB, 하이브리드 등 다양한 자전거 이용자가 함께합니다.",
    memberCount: 19,
    foundedYear: 2022,
    imageUrl: "https://picsum.photos/seed/cycling/600/400",
    galleryImages: [
      "https://picsum.photos/seed/cycle1/400/300",
      "https://picsum.photos/seed/cycle2/400/300",
    ],
    leader: {
      id: "m80",
      name: "임재현",
      department: "IT개발팀",
      role: "leader",
      joinedAt: "2022-04-01",
    },
    members: [
      { id: "m80", name: "임재현", department: "IT개발팀", role: "leader", joinedAt: "2022-04-01" },
      { id: "m81", name: "최수아", department: "영업팀", role: "member", joinedAt: "2022-07-01" },
    ],
    activities: [
      { id: "a80", title: "6월 한강 자전거 라이딩", date: "2026-06-07", description: "여의도~잠실 왕복 코스 라이딩. 참가자 12명." },
    ],
    isFeatured: false,
    tags: ["자전거", "라이딩", "한강", "건강"],
  },
  {
    id: "art",
    name: "색감 미술 동아리",
    category: "culture",
    description: "수채화, 유화, 드로잉 등 다양한 미술 활동을 즐기는 동아리입니다.",
    longDescription:
      "매주 목요일 저녁 사내 회의실에서 미술 수업을 진행합니다. 미술 강사가 직접 지도하며, 수채화·유화·드로잉 등 다양한 분야를 탐구합니다. 연 1회 작품 전시회를 개최합니다.",
    memberCount: 15,
    foundedYear: 2023,
    imageUrl: "https://picsum.photos/seed/art/600/400",
    galleryImages: [
      "https://picsum.photos/seed/art1/400/300",
      "https://picsum.photos/seed/art2/400/300",
    ],
    leader: {
      id: "m90",
      name: "정유나",
      department: "홍보팀",
      role: "leader",
      joinedAt: "2023-03-01",
    },
    members: [
      { id: "m90", name: "정유나", department: "홍보팀", role: "leader", joinedAt: "2023-03-01" },
    ],
    activities: [
      { id: "a90", title: "봄 소풍 스케치 야외 수업", date: "2026-05-08", description: "북서울꿈의숲에서 야외 수채화 스케치 수업 진행." },
    ],
    isFeatured: false,
    tags: ["미술", "수채화", "드로잉", "전시"],
  },
  {
    id: "language",
    name: "글로벌 어학 스터디",
    category: "study",
    description: "영어·중국어·일본어 등 외국어 실력을 함께 키우는 어학 동아리입니다.",
    longDescription:
      "매주 화·목 점심시간 30분간 어학 스터디를 진행합니다. 영어 회화, 토익/토스 준비, 비즈니스 영어 등 수요에 맞는 커리큘럼을 제공합니다. 원어민 튜터와의 대화 세션도 월 1회 진행합니다.",
    memberCount: 26,
    foundedYear: 2018,
    imageUrl: "https://picsum.photos/seed/language/600/400",
    galleryImages: [
      "https://picsum.photos/seed/lang1/400/300",
      "https://picsum.photos/seed/lang2/400/300",
    ],
    leader: {
      id: "m100",
      name: "백승우",
      department: "전략기획팀",
      role: "leader",
      joinedAt: "2018-09-01",
    },
    members: [
      { id: "m100", name: "백승우", department: "전략기획팀", role: "leader", joinedAt: "2018-09-01" },
      { id: "m101", name: "신다희", department: "영업팀", role: "vice-leader", joinedAt: "2019-01-01" },
    ],
    activities: [
      { id: "a100", title: "6월 원어민 튜터 영어 토론 세션", date: "2026-06-10", description: "원어민 튜터와 함께하는 비즈니스 영어 토론. 참가자 16명." },
    ],
    isFeatured: false,
    tags: ["영어", "어학", "스터디", "외국어"],
  },
  {
    id: "board-games",
    name: "보드게임 동아리",
    category: "hobby",
    description: "다양한 보드게임을 즐기며 동료들과 즐거운 시간을 보내는 동아리입니다.",
    longDescription:
      "매주 금요일 점심 및 격주 토요일 저녁 보드게임 모임을 진행합니다. 전략 게임부터 파티 게임까지 100여 종의 게임을 보유하고 있습니다. 초보자 환영이며 게임 룰 가이드도 제공합니다.",
    memberCount: 30,
    foundedYear: 2020,
    imageUrl: "https://picsum.photos/seed/boardgame/600/400",
    galleryImages: [
      "https://picsum.photos/seed/bg1/400/300",
      "https://picsum.photos/seed/bg2/400/300",
    ],
    leader: {
      id: "m110",
      name: "오승재",
      department: "IT개발팀",
      role: "leader",
      joinedAt: "2020-08-01",
    },
    members: [
      { id: "m110", name: "오승재", department: "IT개발팀", role: "leader", joinedAt: "2020-08-01" },
      { id: "m111", name: "하예지", department: "인사팀", role: "vice-leader", joinedAt: "2021-01-01" },
    ],
    activities: [
      { id: "a110", title: "6월 보드게임 토너먼트", date: "2026-06-13", description: "카탄, 스플렌더 토너먼트 개최. 참가자 20명, 우승 팀 시상." },
    ],
    isFeatured: false,
    tags: ["보드게임", "전략", "파티게임", "친목"],
  },
];

export function getClubs(category?: string): Club[] {
  if (!category || category === "all") return CLUBS;
  return CLUBS.filter((c) => c.category === (category as ClubCategory));
}

export function getFeaturedClubs(): Club[] {
  return CLUBS.filter((c) => c.isFeatured);
}

export function getClubById(id: string): Club | undefined {
  return CLUBS.find((c) => c.id === id);
}

export function getAllClubIds(): string[] {
  return CLUBS.map((c) => c.id);
}

export const TOTAL_MEMBERS = CLUBS.reduce((sum, c) => sum + c.memberCount, 0);
export const TOTAL_CLUBS = CLUBS.length;

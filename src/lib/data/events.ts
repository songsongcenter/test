import type { Event } from "@/types";

const EVENTS: Event[] = [
  {
    id: "e1",
    title: "6월 북한산 정기 산행",
    clubId: "hiking",
    clubName: "삼천리 산악 동아리",
    date: "2026-06-21",
    location: "북한산 국립공원 북쪽 입구",
    description: "6월 정기 산행. 백운대 코스 (약 5시간). 오전 8시 집결.",
    maxParticipants: 30,
    currentParticipants: 22,
  },
  {
    id: "e2",
    title: "7월 동아리 연합 여름 워크숍",
    clubId: "volunteer",
    clubName: "인사팀 주관",
    date: "2026-07-19",
    location: "강원도 한화리조트",
    description: "동아리 대표 및 부대표 연합 워크숍. 1박 2일, 강원도 리조트.",
    maxParticipants: 40,
    currentParticipants: 28,
  },
  {
    id: "e3",
    title: "보드게임 토너먼트",
    clubId: "board-games",
    clubName: "보드게임 동아리",
    date: "2026-06-13",
    location: "본사 4층 카페테리아",
    description: "카탄, 스플렌더 토너먼트 개최. 우승팀에게 특별 상품 증정!",
    maxParticipants: 24,
    currentParticipants: 20,
  },
  {
    id: "e4",
    title: "6월 요리 모임 — 냉면 & 비빔국수",
    clubId: "cooking",
    clubName: "쿡쿡 요리 동아리",
    date: "2026-06-20",
    location: "마포 쿠킹 스튜디오",
    description: "여름 특집! 수제 물냉면과 비빔국수 만들기. 재료비 포함.",
    maxParticipants: 20,
    currentParticipants: 15,
  },
  {
    id: "e5",
    title: "상반기 풋살 리그 결승전",
    clubId: "futsal",
    clubName: "삼천리 풋살 동아리",
    date: "2026-06-28",
    location: "마포 실내풋살장",
    description: "6팀 중 최강팀을 가리는 상반기 리그 결승전. 응원 환영!",
    maxParticipants: 50,
    currentParticipants: 38,
  },
  {
    id: "e6",
    title: "7월 한강 자전거 라이딩",
    clubId: "cycling",
    clubName: "라이더스 자전거 동아리",
    date: "2026-07-05",
    location: "여의도 한강공원 자전거 광장",
    description: "여름 새벽 라이딩. 여의도~잠실 왕복 약 40km. 오전 6시 출발.",
    maxParticipants: 20,
    currentParticipants: 12,
  },
];

export function getUpcomingEvents(count = 6): Event[] {
  return EVENTS.slice(0, count);
}

export const TOTAL_EVENTS = EVENTS.length;

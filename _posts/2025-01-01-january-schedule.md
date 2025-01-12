---
title: 2025년 1월 일정
categories: [월간일정]
comments: true
date: 2025-01-01
---

<style>
.calendar-container {
   overflow-x: auto;
   margin: 20px 0;
}

.calendar {
   min-width: 300px;
   width: 100%;
   border-collapse: collapse;
   table-layout: fixed;
}

/* 데스크탑 스타일 */
@media screen and (min-width: 1024px) {
   .calendar {
       min-width: 1000px;
   }
   
   .calendar th {
       padding: 15px;
       font-size: 1.1em;
   }
   
   .calendar td {
       height: 120px;
       padding: 12px;
       font-size: 1.1em;
   }
   
   .schedule {
       font-size: 0.9em;
   }
}

/* 태블릿 스타일 */
@media screen and (min-width: 768px) and (max-width: 1023px) {
   .calendar {
       min-width: 700px;
   }
   
   .calendar th {
       padding: 12px;
       font-size: 1em;
   }
   
   .calendar td {
       height: 100px;
       padding: 8px;
       font-size: 1em;
   }
   
   .schedule {
       font-size: 0.85em;
   }
}

/* 모바일 스타일 */
@media screen and (max-width: 767px) {
   .calendar {
       min-width: 300px;
   }
   
   .calendar thead {
       display: none; /* 헤더 숨기기 */
   }
   
   .calendar tr {
       display: flex;
       flex-direction: column;
       margin-bottom: 20px;
       border: 2px solid #ddd;
       border-radius: 10px;
       background: #fff;
   }
   
   .calendar td {
       display: flex;
       height: auto;
       padding: 15px;
       border: none;
       border-bottom: 1px solid #eee;
       font-size: 0.95em;
   }
   
   .calendar td:empty {
       display: none; /* 빈 셀 숨기기 */
   }
   
   .date-cell {
       min-width: 70px;
       font-weight: bold;
       margin-right: 10px;
   }
   
   .schedule {
       flex: 1;
       white-space: normal;
       margin: 0;
       padding-left: 10px;
   }

   /* 마지막 셀의 border 제거 */
   .calendar td:last-child {
       border-bottom: none;
   }
}

.calendar th {
   background-color: #f5f5f5;
   font-weight: bold;
   width: 14.28%;
}

.calendar td {
   border: 1px solid #ddd;
   vertical-align: top;
   width: 14.28%;
   overflow: hidden;
   word-wrap: break-word;
}

.holiday { color: #ff0000; }
.today { background-color: #e8f4f8; }

/* 모바일 스타일 */
@media screen and (max-width: 767px) {
    .calendar td {
        display: flex;
        align-items: center; /* 세로 중앙 정렬 */
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
        width: 310px;  /* 기본 너비보다 증가 */

    }

    .date-cell {
        flex-shrink: 0; /* 날짜 영역 크기 고정 */
        width: 60px;
        margin-right: 10px;
    }

    .schedule {
        flex: 1;
        word-break: keep-all; /* 단어 단위 줄바꿈 */
        text-align: left;
    }
}
</style>

# 2025년 1월 📅

<table class="calendar">
    <thead>
        <tr>
            <th class="holiday">일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td class="holiday">1<br><span class="schedule">연례행사</span></td>
            <td>2<br><span class="schedule">글리프 서비스<br>종료 회의</span></td>
            <td>3<br><span class="schedule">메일링</span></td>
            <td>4<br><span class="schedule">외주 배포<br>AUTODOC 배포</span></td>
        </tr>
        <tr>
            <td class="holiday">5</td>
            <td>6<br><span class="schedule">검수요청</span></td>
            <td>7<br><span class="schedule">IO 배포</span></td>
            <td>8<br><span class="schedule">Deutschunterricht<br>검수+퇴고 시작</span></td>
            <td>9<br><span class="schedule">검수+퇴고</span></td>
            <td>10<br><span class="schedule">검수+퇴고 완료</span></td>
            <td>11<br><span class="schedule">세계관 완결<br>주간 시작</span></td>
        </tr>
        <tr>
            <td class="holiday">12<br><span class="schedule">원고 끝 (23)</span></td>
            <td>13<br><span class="schedule">검수+메일링검수</span></td>
            <td>14<br><span class="schedule">검수+메일링검수</span></td>
            <td>15<br><span class="schedule">Deutschunterricht<br>검수+메일링검수</span></td>
            <td>16<br><span class="schedule">23화 업로드<br>(완결X)</span></td>
            <td>17<br><span class="schedule">메일링</span></td>
            <td>18<br><span class="schedule">메일링 회의<br>(10시)</span></td>
        </tr>
        <tr>
            <td class="holiday">19<br><span class="schedule">마감주 시작</span></td>
            <td>20<br><span class="schedule">마감주</span></td>
            <td>21<br><span class="schedule">마감주</span></td>
            <td>22<br><span class="schedule">Deutschunterricht<br>마감주 종료</span></td>
            <td>23<br><span class="schedule">24화 검수<br>업로드 시작</span></td>
            <td>24<br><span class="schedule">공덕 퇴사<br>검수</span></td>
            <td>25<br><span class="schedule">24화 업로드<br>검수 완료</span></td>
        </tr>
        <tr>
            <td class="holiday">26<br><span class="schedule">세계관 1.3 종료<br>종료 회의</span></td>
            <td>27</td>
            <td>28</td>
            <td>29<br><span class="schedule">Deutschunterricht</span></td>
            <td>30</td>
            <td>31<br><span class="schedule">메일링</span></td>
            <td></td>
        </tr>
    </tbody>
</table>

## 📝 이번 달 주요 일정

### 배포 일정
- 1/4: 외주 배포 + AUTODOC 배포
- 1/7: IO 배포
- 1/16: 23화 업로드
- 1/23~25: 24화 검수 및 업로드

### Deutschunterricht
- 1/8
- 1/15
- 1/22
- 1/29

### 회의 및 메일링
- 1/2: 글리프 서비스 종료 회의
- 1/3: 메일링
- 1/17: 메일링
- 1/18: 메일링 회의 (10시)
- 1/26: 세계관 1.3 종료 및 종료 회의
- 1/31: 메일링

### 주요 마감
- 1/8~10: 검수+퇴고 기간
- 1/11~18: 세계관 완결 주간
- 1/12: 원고 끝 (23화)
- 1/13~15: 검수+메일링검수
- 1/19~22: 마감주
- 1/24: 공덕 퇴사

### 📚 재미 (매일)
- 블랙라벨 기벡 10문제
- 운동 7시 - 8시

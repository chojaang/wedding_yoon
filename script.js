// 달력을 생성하고 모임 날짜(2025-05-04)를 노란색으로 표시하는 JavaScript 코드
function updateCountdown() {
    const weddingDate = new Date("2025-05-04T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerText = `D-${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}
setInterval(updateCountdown, 1000);


function generateCalendar(year, month) {
  const calendar = document.getElementById('calendar');
  calendar.innerHTML = ''; // 기존 달력 내용 초기화

  // 요일 헤더 생성
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  daysOfWeek.forEach(day => {
      const div = document.createElement('div');
      div.classList.add('calendar-header');
      div.textContent = day;
      calendar.appendChild(div);
  });

  // 해당 월의 첫날과 마지막 날 계산
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const numDaysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();

  // 빈 칸 추가 (첫날 전까지)
  for (let i = 0; i < startDay; i++) {
      const div = document.createElement('div');
      calendar.appendChild(div); // 빈 칸 추가
  }

  // 각 날짜를 생성하여 달력에 추가
  for (let i = 1; i <= numDaysInMonth; i++) {
      const div = document.createElement('div');
      div.classList.add('calendar-day');
      div.textContent = i;

      // 모임 날짜 (2025년 5월 4일) 하이라이트
      if (i === 4 && month === 4 && year === 2025) {
          div.classList.add('selected');
      }

      calendar.appendChild(div);
  }
}

// 5월(4월의 다음 월)을 기준으로 달력 생성
generateCalendar(2025, 4); // 2025년 5월의 달력을 표시

// 1) DOM 요소 가져오기
const toggleBtn = document.getElementById('toggleBtn');
const contentBox = document.getElementById('contentBox');

// 2) 버튼 클릭 시 contentBox의 표시/숨김 토글
toggleBtn.addEventListener('click', function () {
  // 3) classList.toggle() 사용
  contentBox.classList.toggle('hidden');
  
  // 4) 버튼 텍스트 바꾸기 (선택)
  if (contentBox.classList.contains('hidden')) {
    toggleBtn.innerText = '인스타보기';
  } else {
    toggleBtn.innerText = '숨김';
  }
});
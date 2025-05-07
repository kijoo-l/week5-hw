window.addEventListener('DOMContentLoaded', function () {
  const nameForm = document.getElementById('nameForm');
  const nameInput = document.getElementById('nameInput');
  const greetingText = document.getElementById('greetingText');
  const resetBtn = document.getElementById('resetBtn');

  nameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = nameInput.value.trim();

    if (userName === '') {
      alert('이름을 입력해주세요!');
      return;
    }

    greetingText.innerText = `${userName}님 반가워용~! WELCOME~~`;
    nameForm.style.display = 'none';
    resetBtn.style.display = 'inline';
  });

  resetBtn.addEventListener('click', function () {
    nameForm.style.display = 'block';
    resetBtn.style.display = 'none';
    greetingText.innerText = '';
    nameInput.value = '';
  });
});




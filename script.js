document.addEventListener('DOMContentLoaded', function() {
    const showAnswerBtns = document.querySelectorAll('.show-answer-btn');
  
    showAnswerBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'none' || answer.style.display === '') {
          answer.style.display = 'block';
          this.textContent = 'Hide Answer';
        } else {
          answer.style.display = 'none';
          this.textContent = 'Show Answer';
        }
      });
    });
  });
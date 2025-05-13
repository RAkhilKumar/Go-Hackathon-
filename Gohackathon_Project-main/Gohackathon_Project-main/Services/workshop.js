var btn = document.getElementById('btn');

function leftClick() {
  btn.style.left = '0';
  localStorage.setItem('toggleState', 'left');
}

function rightClick() {
  btn.style.left = '205px';
  localStorage.setItem('toggleState', 'right');
}

window.addEventListener('load', function() {
  var state = localStorage.getItem('toggleState');
  if (state === 'right') {
    btn.style.left = '205px';
  } else {
    btn.style.left = '0'; 
  }
});


function toggleFaq(index) {
   var answers = document.querySelectorAll('.faq-answer');
   var questions = document.querySelectorAll('.faq-question');

   if (answers[index].style.display === 'block') {
       answers[index].style.display = 'none';
       questions[index].classList.remove('active');
   } else {
       for (var i = 0; i < answers.length; i++) {
           answers[i].style.display = 'none';
           questions[i].classList.remove('active');
       }
       answers[index].style.display = 'block';
       questions[index].classList.add('active');
   }
}

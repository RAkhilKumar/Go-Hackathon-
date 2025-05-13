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

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.banner-container').style.display = 'none';
});
window.onload = function() {
setTimeout(function() {
    document.querySelector('.alert').classList.add('show');
    }, 2000);
};
function changeImage()
{
    var img = document.getElementById('image1');
    img.src = "../Public/images/leadership.png";
    var img = document.getElementById('image2');
    img.src = "../Public/images/project.png";
    var img = document.getElementById('image3');
    img.src = '../Public/images/communictaion.png';
    
}
function changeImageBack()
{
    var img = document.getElementById('image1');
    img.src = '../Public/images/Rectangle 53.png';
    var img = document.getElementById('image2');
    img.src = '../Public/images/Rectangle 36.png';
    var img = document.getElementById('image3');
    img.src = '../Public/images/Rectangle 35.png';
}
function changeImageBack2()
{
    var img = document.getElementById('image1');
    img.src = '../Public/images/lr.png';
    var img = document.getElementById('image2');
    img.src = '../Public/images/pm.png';
    var img = document.getElementById('image3');
    img.src = '../Public/images/cs.png';
}
var btn = document.getElementById('btn')

 function leftClick(){
    btn.style.left = '0'
 }
 function rightClick(){
    btn.style.left = '150px'
 }
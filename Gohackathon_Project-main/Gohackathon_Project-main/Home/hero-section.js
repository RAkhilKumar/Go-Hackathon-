/*function toggleFaq(index) {
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
};*/


document.addEventListener('DOMContentLoaded', function () {
    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-question').forEach((question, index) => {
        question.addEventListener('click', function () {
            document.querySelectorAll('.faq-answer').forEach((answer, i) => {
                const isActive = index === i && !answer.classList.contains('visible');
                answer.classList.toggle('visible', isActive);
                document.querySelectorAll('.faq-question')[i].classList.toggle('active', isActive);
            });
        });
    });

    // Banner Close Button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            const banner = document.querySelector('.banner-container');
            if (banner) banner.style.display = 'none';
        });
    }

    // Alert Timeout
    setTimeout(() => {
        const alertBox = document.querySelector('.alert');
        if (alertBox) alertBox.classList.add('show');
    }, 2000);

    // Carousel Functionality
    let currentIndex = 0;
    const totalSlides = 5;
    const slidesToShow = 3;
    const carouselInner = document.getElementById('carousel-inner');
    const indicators = document.querySelectorAll('#carousel-indicators .indicator');

    function showSlide(index) {
        if (!carouselInner) return;
        const offset = -index * (100 / slidesToShow);
        carouselInner.style.transform = `translateX(${offset}%)`;

        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === index % totalSlides);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 3000);
});

var points = 0;
var answersBtns = document.querySelectorAll('.answer');
var checkPointsBtn = document.querySelector('.check-points');
var showCorrectAnswersBtn = document.querySelector('.show-answers');
var pointsContainer = document.querySelector('.points');
var pointsSpan = document.querySelector('.points span');
var clearBtn = document.querySelector('.clear');
var slideIndex = 1;


function addPoints() {
    this.classList.add('selected');
    if (this.classList.contains('correct')) {
        points += 1;
    } else if (this.classList.contains('incorrect')) {
        points -= 1;
    } 
}

function showPoints() {
    pointsSpan.innerHTML = points;
    pointsContainer.classList.add('show');

    for (var i = 0; i < answersBtns.length; i++) {
        answersBtns[i].classList.remove('selected');
        if (answersBtns[i].classList.contains('correct')) {
            answersBtns[i].classList.add('show-correct');
        }
        else if (answersBtns[i].classList.contains('incorrect')) {
            answersBtns[i].classList.add('show-incorrect');
        }
    }
}

function clear() {
    pointsContainer.classList.remove('show');
    pointsContainer.classList.add('hide');

    points = 0;
    console.log(points);
    for (var i = 0; i < answersBtns.length; i++) {
        answersBtns[i].classList.remove('selected', 'show-correct', 'show-incorrect');
    }
}

for (var i = 0; i < answersBtns.length; i++) {
    answersBtns[i].addEventListener('click', addPoints);
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

checkPointsBtn.addEventListener('click', showPoints);

clearBtn.addEventListener('click', clear);
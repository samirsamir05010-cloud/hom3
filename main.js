const input = document.getElementById('input');
const check = document.getElementById('check');
const newGame = document.getElementById('newGame');
const result = document.getElementById('result');
const attemptsText = document.getElementById('attempts');
const history = document.getElementById('history');
const theme = document.getElementById('theme');

let secret = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

function checkNumber() {
    let number = Number(input.value);

    if (input.value === '') {
        result.textContent = 'Введи число';
        return;
    }

    if (attempts === 0) return;

    attempts--;
    attemptsText.textContent = attempts;

    let li = document.createElement('li');
    li.textContent = number;
    history.appendChild(li);

    if (number === secret) {
        result.textContent = 'Угадал!';
        result.style.color = 'green';
        check.disabled = true;
    } else if (number < secret) {
        result.textContent = 'Больше';
        result.style.color = 'red';
    } else {
        result.textContent = 'Меньше';
        result.style.color = 'red';
    }

    if (attempts === 0 && number !== secret) {
        result.textContent = 'Попытки закончились! Нажми Новая игра';
        check.disabled = true;
    }
}

check.addEventListener('click', checkNumber);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});

newGame.addEventListener('click', function() {
    secret = Math.floor(Math.random() * 10) + 1;
    attempts = 5;
    attemptsText.textContent = attempts;
    input.value = '';
    result.textContent = '';
    history.innerHTML = '';
    check.disabled = false;
});

theme.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
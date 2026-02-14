// --- Меню ---
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// --- Слайдер проектов ---
const swiper = new Swiper('.projects__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    navigation: {
        nextEl: '.projects__arrow-next',
        prevEl: '.projects__arrow-prev',
    },
});

// --- Форма каталога ---
const catalogForm = document.getElementById('catalogForm');
const emailInput = document.getElementById('catalogEmail');
const checkbox = document.getElementById('catalogCheckbox');
const emailError = document.getElementById('emailError');
const checkboxError = document.getElementById('checkboxError');

// Функция проверки email
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        emailError.textContent = 'Please enter your email';
        emailInput.classList.add('input-error');
        return false;
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('input-error');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('input-error');
        return true;
    }
}

// Функция проверки чекбокса
function validateCheckbox() {
    if (!checkbox.checked) {
        checkboxError.textContent = 'You must agree to the processing of personal data';
        return false;
    } else {
        checkboxError.textContent = '';
        return true;
    }
}

// Валидация при вводе и изменении
emailInput.addEventListener('input', validateEmail);
checkbox.addEventListener('change', validateCheckbox);

// Проверка при отправке формы
catalogForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isCheckboxValid = validateCheckbox();

    if (isEmailValid && isCheckboxValid) {
        alert('Form submitted successfully!');
        catalogForm.reset();
    }
});

// --- Форма "Submit a request" ---
// --- Форма "Submit a request" ---
const requestForm = document.getElementById('requestForm');
const requestEmail = document.getElementById('requestEmail');

// Отключаем встроенную валидацию браузера
requestForm.setAttribute('novalidate', true);

// Функция проверки email
function validateRequestEmail() {
    const emailValue = requestEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '' || !emailPattern.test(emailValue)) {
        requestEmail.classList.add('input-error'); // подсвечиваем красным
        return false;
    } else {
        requestEmail.classList.remove('input-error'); // убираем красную рамку
        return true;
    }
}

// Валидация при вводе
requestEmail.addEventListener('input', validateRequestEmail);

// Проверка при отправке формы
requestForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validateRequestEmail()) {
        alert('Request submitted successfully!');
        requestForm.reset();
    }
});



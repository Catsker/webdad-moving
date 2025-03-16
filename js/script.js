// burger menu
const burgerMenu = document.querySelector('.header__burger')
const headerNav = document.querySelector('.header__nav')

function burgerActive() {
   burgerMenu.classList.toggle('active')
   headerNav.classList.toggle('active')
}

// form select options styles
function toggleDropdown(num) {
   const selectItems = document.getElementById(`selectItems_${num}`);
   if (selectItems.style.display !== 'block') {
      selectItems.style.display = 'block';

   } else {
      selectItems.style.display = 'none';

   }
}

function selectOption(element, value, selectType, num) {
   document.getElementById(selectType).value = value
   element.closest('label').querySelector('select').value = value
   element.closest('label').querySelector('.form__select').textContent = element.closest('label').querySelector(`option[value="${value}"]`).textContent
   toggleDropdown(num);
}



// countdown
const countdownDate = new Date("2025-05-01T00:00:00").getTime();

// Обновляем отсчёт каждую секунду
const countdownFunction = setInterval(() => {
   // Текущая дата и время
   const now = new Date().getTime();

   // Разница между текущим временем и датой окончания
   const distance = countdownDate - now;

   // Вычисляем дни, часы, минуты и секунды
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);


   document.getElementById("hours").innerText = hours;

   function isLower(num) {
      if (num < 10) {
         return `0${num}`
      } else {
         return num
      }
   }

   document.getElementById("minutes").innerText = isLower(minutes);
   document.getElementById("seconds").innerText = isLower(seconds);

   // Если отсчёт завершён
   if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "Время вышло!";
   }
}, 1000);



// loadmore
function toggleDescription(element) {
   element.classList.toggle('active'); // Переключаем класс у <h4>
   element.nextElementSibling.classList.toggle('active')
}




// endless slider autos
const prevButton = document.querySelector('.autos__prev')
const nextButton = document.querySelector('.autos__next')
const slidesContainer = document.querySelector('.autos__options')
const slides = document.querySelectorAll('.autos__option')
const sliderCheckboxes = document.querySelectorAll('.autos__checkbox--hide')
let totalSlides = slides.length;
const selectedRadio = document.querySelector('[name="autos__page"]:checked')
let currentIndex = Number(selectedRadio.id.slice(-1)) - 1

sliderCheckboxes.forEach(sliderCheckbox => {
   sliderCheckbox.addEventListener('change', (event) => {
      currentIndex = event.target.id.slice(-1) - 1
      updateSlides()
   })
})

function updateSlides() {
   slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`
   document.getElementById(`autos__${currentIndex + 1}`).checked = true

   if (currentIndex === 0) {
      prevButton.disabled = true
   } else {
      prevButton.disabled = false
   }

   if (totalSlides === currentIndex + 1) {
      nextButton.disabled = true
   } else {
      nextButton.disabled = false
   }
}
updateSlides()

function goToPrevSlide() {
   if (prevButton.disabled !== true) {
      currentIndex--
      updateSlides()
   }
}

function goToNextSlide() {
   if (nextButton.disabled !== true) {
      currentIndex++
      updateSlides()
   }
}

prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)



// endless slider feedback
const autosCheckboxSlider = document.querySelectorAll('.feedback__checkbox--hide')
const fullSlider = document.querySelector('.feedback__list')
let currentIndexAutos = Number(document.querySelector('[name="feedback__page"]:checked').id.match(/\d+$/)?.[0] - 1);

const mediaQuery = window.matchMedia('(max-width: 1000px)');

function handleTabletChange(e) {
   if (e.matches) {
      console.log('true')
      updateSlidesAutos()

   } else {
      
   }
}

function updateSlidesAutos() {
   fullSlider.style.transform = `translateX(-${currentIndexAutos * 100}%)`
}

autosCheckboxSlider.forEach(slide => {
   slide.addEventListener('change', (event) => {
      currentIndexAutos = event.target.id.match(/\d+$/)?.[0] - 1
      updateSlidesAutos()
   })
})


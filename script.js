// Javascript for disabling right-click

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Javascript for badminton page list

function showList() {
  const list = document.getElementById('Badminton-Hidden-Nav');
  if (list.style.width === 'auto') {
    list.style.width = '0';
  } else {
    list.style.width = 'auto';
  }
}

// Javascript for sidebar

function showSideBar() {
  document.getElementById('sidebar').style.right = '0px'
  document.getElementById('overlay').style.display = 'block'
}

function hideSideBar() {
  document.getElementById('sidebar').style.right = '-50vw'
  document.getElementById('overlay').style.display = 'none'
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')
}

// Javascript for preloader page

window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");
  const hloader = document.querySelector(".preloader--hidden");
  
  loader.classList.add("preloader--hidden");
  
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

// Javascript for class photos image slider

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let counter = 1;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
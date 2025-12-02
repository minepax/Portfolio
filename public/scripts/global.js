// Javascript for disabling right-click

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Javascript for sidebar

function showSideBar() {
  document.querySelector('.sidebar').style.width = 'max-content';
  document.getElementById('overlay').style.display = 'block'
}

function hideSideBar() {
  document.querySelector('.sidebar').style.width = '0'
  document.getElementById('overlay').style.display = 'none'
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')
}

// Javascript for badminton page hidden toc

function toggleList() {
  const list = document.querySelector('.badminton-toc');
  if (list.style.width === 'max-content') {
    list.style.width = '0';
  } else {
    list.style.width = 'max-content';
  }
}

// Javascript for modal

const showModal = document.querySelector('.show-modal');
const hideModal = document.querySelector('.hide-modal');
const modal = document.querySelector('.modal');

showModal.addEventListener('click', () => {
  modal.showModal();
});

hideModal.addEventListener('click', () => {
  modal.close();
});
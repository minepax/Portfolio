document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

function showSideBar() {
  document.getElementById('sidebar').style.left = '0px'
  document.getElementById('overlay').style.display = 'block'
}

function hideSideBar() {
  document.getElementById('sidebar').style.left = '-30vw'
  document.getElementById('overlay').style.display = 'none'
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')
}
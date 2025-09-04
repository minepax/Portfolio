function showSideBar() {
  document.getElementById('sidebar').style.right = '0px'
  document.getElementById('overlay').style.display = 'block'
}

function hideSideBar() {
  document.getElementById('sidebar').style.right = '-30vw'
  document.getElementById('overlay').style.display = 'none'
}

function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')
}
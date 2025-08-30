document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

function showSideBar() {
  document.querySelector('.side__Bar').style.left = '0px'
  document.getElementById('overlay').style.display = 'block'
}

function hideSideBar() {
  document.querySelector('.side__Bar').style.left = '-200px'
  document.getElementById('overlay').style.display = 'none'
}
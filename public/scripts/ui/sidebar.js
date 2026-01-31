function toggleSideBar() {
    const menuBtn = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    menuBtn.addEventListener('click', () => {
        sidebar.toggleAttribute("data-visible");
    });

    overlay.addEventListener('click', () => {
        sidebar.toggleAttribute("data-visible");
    });
}

function toggleSubMenu() {
    const dropDown = document.querySelector('.dropdown-btn');
    const arrowDown = document.querySelector('.arrow-down');
    const subMenu = document.querySelector('.sidebar-sub');

    dropDown.addEventListener('click', () => {
        arrowDown.toggleAttribute("data-rotate");
        subMenu.toggleAttribute("data-visible");
    });
}

toggleSideBar();
toggleSubMenu();
document.addEventListener("astro:after-swap", toggleSideBar);
document.addEventListener("astro:after-swap", toggleSubMenu);
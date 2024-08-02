let nav_btn = document.getElementById('menu-open');
let nav_menu = document.getElementById('nav-menu-id');
let nav_close = document.getElementById('close-btn');

nav_btn.onclick = function() {
    // Toggle the 'show-menu' class on the menu
    nav_menu.classList.add('active');
};

nav_close.onclick = function() {
    // Toggle the 'show-menu' class on the menu
    nav_menu.classList.remove('active');
};
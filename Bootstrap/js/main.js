// Search toogle
let search = document.querySelector('.nav-input');
document.addEventListener("click", function() {
    document.getElementById('search-icon').onclick = () => {
        search.classList.toggle('open');
    }
});

// Menu Toggle
document.addEventListener("click", function() {
    let menu = document.querySelector('.nav-links');
    document.getElementById('nav-menu').onclick = () => {
        menu.classList.toggle('open');
    };
});


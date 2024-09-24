document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0;
    var navbar = document.querySelector('.nav-container');

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll ke bawah
            navbar.classList.remove('nav-down');
            navbar.classList.add('nav-up');
        } else {
            // Scroll ke atas
            navbar.classList.remove('nav-up');
            navbar.classList.add('nav-down');
        }
        lastScrollTop = scrollTop;
    });
});

// MIXitUp

var mixer = mixitup('.grid-portfolio-container');

// SCROLLIFY

$(function(){
    $.scrollify({
        section : ".scrollify",
        setHeights: false,
        updateHash: false,
    });
});

// HUMBERGER MANU

function openMenu() {
    document.getElementById('humberger-menu').style.height = "100%";
};

function closeMenu() {
    document.getElementById('humberger-menu').style.height = "0";
};

// SMOOTH SCROLL

$(function(){
    $('.menu-items a, .scroll-down-arrow a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }), 1000;
    });
});
$(".nav-btn").click( () => {
    $("nav").addClass("nav-toggle");
    $(".site-darken").css("display", "block");
});

$(".nav-close-btn").click( () => {
    $("nav").removeClass("nav-toggle");
    $(".site-darken").css("display", "none");
});


$(".categories-btn").click( () => {
    $(".categories-menu").addClass("categories-toggle");
    $(".site-darken").css("display", "block");
});

$(".categories-close-btn").click( () => {
    $(".categories-menu").removeClass("categories-toggle");
    $(".site-darken").css("display", "none");
});
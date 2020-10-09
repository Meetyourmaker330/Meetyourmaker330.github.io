$(function() {
// бургер
let nav = $("#nav");
let navToggle = $("#navToggle");

$("#navToggle").on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");

});


});

// фиксед хедер
$(function() {

 let header = $("#header");
 let mainsection = $("#mainsection");
 let mainsectionH = mainsection.innerHeight();
 let scrollPos = $(window).scrollTop();


 $(window).on("scroll load resize", function() {
    mainsectionH = mainsection.innerHeight();
    scrollPos = $(this).scrollTop();
    
    if( scrollPos > mainsectionH) {  
        header.addClass("fixed");
    } 
    
    else {
        header.removeClass("fixed");
    }
        
 });

// скролл

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elementID = $(this).data(`scroll`);
    let elementOffset = $(elementID).offset().top;

    $("html, body").animate({
        scrollTop: elementOffset
    }, 1500 );

});


















});

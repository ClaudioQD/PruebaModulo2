var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

$("#titulo1").click(function () {
    $("#parrafo1").toggle("slow");
})


$("#titulo2").click(function () {
    $("#parrafo2").toggle("slow");
})


$("#titulo3").click(function () {
    $("#parrafo3").toggle("slow");
})

$("#titulo4").click(function () {
    $("#parrafo4").toggle("slow");
})




$("#direccionarInicio").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#inicio").offset().top
    }, 2000);
});

$("#direccionarQuienesSomos").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#quienesSomos").offset().top
    }, 2000);
});

$("#direccionarDestacados").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#destacados").offset().top
    }, 2000);
});

$("#direccionarContacto").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contacto").offset().top
    }, 2000);
});

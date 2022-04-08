var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


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